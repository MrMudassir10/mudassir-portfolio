"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { LINKS } from "@/data/site";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING = "Hi, I am Mudassir's assistant. Ask me about his skills, projects or experience.";
const SUGGEST = [
  "What does Mudassir specialise in?",
  "Tell me about Lead Radar",
  "Which databases does he use?",
  "How can I contact him?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  const openChat = useCallback(() => setOpen(true), []);
  const closeChat = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => fabRef.current?.focus());
  }, []);

  useEffect(() => {
    window.addEventListener("open-chat", openChat);
    return () => window.removeEventListener("open-chat", openChat);
  }, [openChat]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeChat();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeChat]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, busy, open]);

  async function send(question: string) {
    const q = question.trim();
    if (!q || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: q }];
    setMsgs(next);
    setText("");
    setBusy(true);
    let reply = `I could not answer that right now. You can email ${LINKS.email}.`;
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The first message is the greeting, so it is not sent.
        body: JSON.stringify({ messages: next.slice(1).slice(-6) }),
      });
      const data: { reply?: string; error?: string } = await res.json().catch(() => ({}));
      reply = data.reply ?? data.error ?? reply;
    } catch {
      /* keep the fallback text */
    }
    setMsgs((m) => [...m, { role: "assistant", content: reply }]);
    setBusy(false);
    inputRef.current?.focus();
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(text);
  }

  if (!open) {
    return (
      <button className="fab" ref={fabRef} type="button" aria-expanded={false} aria-controls="chat" onClick={openChat}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.5-4.6A8 8 0 1 1 21 12Z" />
          <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
        </svg>
        Ask my AI assistant
      </button>
    );
  }

  return (
    <div className="chat" id="chat" role="region" aria-label="AI assistant">
      <div className="chat-h">
        <div>
          <strong>Ask about Mudassir</strong>
          <small>AI assistant · answers from his resume</small>
        </div>
        <button className="icon-btn" type="button" aria-label="Close assistant" onClick={closeChat}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <div className="msgs" ref={listRef} aria-live="polite">
        {msgs.map((m, i) => (
          <div key={i} className={m.role === "user" ? "m me" : "m bot"}>
            {m.content}
          </div>
        ))}
        {busy && <div className="m bot">Thinking...</div>}
      </div>
      {msgs.length === 1 && (
        <div className="chips">
          {SUGGEST.map((s) => (
            <button key={s} type="button" onClick={() => void send(s)}>
              {s}
            </button>
          ))}
        </div>
      )}
      <form className="chat-f" onSubmit={onSubmit} autoComplete="off">
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Ask about skills, projects, experience"
          aria-label="Your question"
          maxLength={300}
        />
        <button className="btn primary" type="submit" disabled={busy}>
          Send
        </button>
      </form>
    </div>
  );
}
