"use client";

import type { ReactNode } from "react";

/** Opens the AI assistant (ChatWidget listens for this event). */
export function AskButton({ children }: { children: ReactNode }) {
  return (
    <button className="btn" type="button" onClick={() => window.dispatchEvent(new Event("open-chat"))}>
      {children}
    </button>
  );
}
