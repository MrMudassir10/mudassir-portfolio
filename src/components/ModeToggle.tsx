"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";

export function ModeToggle() {
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    setMode(document.documentElement.dataset.mode === "light" ? "light" : "dark");
  }, []);

  function apply(next: Mode) {
    document.documentElement.dataset.mode = next;
    setMode(next);
    try {
      localStorage.setItem("mm-mode", next);
    } catch {
      /* private window or blocked storage: the choice just is not remembered */
    }
  }

  return (
    <div className="mode" role="group" aria-label="Colour mode">
      <button type="button" aria-pressed={mode === "light"} aria-label="Light mode" onClick={() => apply("light")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
        </svg>
        <span>Light</span>
      </button>
      <button type="button" aria-pressed={mode === "dark"} aria-label="Dark mode" onClick={() => apply("dark")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" />
        </svg>
        <span>Dark</span>
      </button>
    </div>
  );
}
