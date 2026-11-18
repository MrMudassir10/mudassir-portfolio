import { NextRequest, NextResponse } from "next/server";
import { localAnswer, systemPrompt } from "@/lib/assistant";

export const dynamic = "force-dynamic";

type Msg = { role: "user" | "assistant"; content: string };

/** Best-effort limit per IP. On serverless it resets when an instance restarts, so it is a guard, not a guarantee. */
const hits = new Map<string, number[]>();
function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 12;
}

function cleanMessages(body: unknown): Msg[] {
  const raw = (body as { messages?: unknown } | null)?.messages;
  if (!Array.isArray(raw)) return [];
  const out: Msg[] = [];
  for (const m of raw.slice(-6)) {
    const role = (m as { role?: unknown })?.role;
    const content = (m as { content?: unknown })?.content;
    if ((role === "user" || role === "assistant") && typeof content === "string") {
      out.push({ role, content: content.slice(0, 300) });
    }
  }
  return out;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (tooMany(ip)) {
    return NextResponse.json({ error: "Too many questions at once. Please try again in a minute." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = cleanMessages(body);
  const last = messages[messages.length - 1];
  if (!last || last.role !== "user" || !last.content.trim()) {
    return NextResponse.json({ error: "Please send a question." }, { status: 400 });
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return NextResponse.json({ reply: localAnswer(last.content), source: "built-in" });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15_000);
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [{ role: "system", content: systemPrompt() }, ...messages],
        max_completion_tokens: 300,
      }),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`OpenAI responded ${res.status}`);
    const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) throw new Error("Empty reply");
    return NextResponse.json({ reply, source: "openai" });
  } catch {
    // Never leak provider errors to visitors; fall back to the built-in answers.
    return NextResponse.json({ reply: localAnswer(last.content), source: "built-in" });
  } finally {
    clearTimeout(timer);
  }
}
