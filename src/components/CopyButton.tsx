"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [label, setLabel] = useState("Copy");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("Copied");
    } catch {
      setLabel("Copy manually");
    }
    setTimeout(() => setLabel("Copy"), 1600);
  }

  return (
    <button type="button" onClick={copy}>
      {label}
    </button>
  );
}
