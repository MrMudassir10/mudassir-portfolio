"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shows `value` (for example "80", "70%", "5,000+", "~600", "<2s") and counts it up from 0.
 * Server render and reduced-motion viewers get the final value straight away.
 * With `whenVisible` the count starts the first time the number scrolls into view.
 */
export function CountUp({
  value,
  delay = 200,
  whenVisible = false,
}: {
  value: string;
  delay?: number;
  whenVisible?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const m = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!m) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, pre, num, suf] = m;
    const target = parseFloat(num.replace(/,/g, ""));
    const decimals = (num.split(".")[1] || "").length;
    const commas = num.includes(",");
    const fmt = (v: number) =>
      commas
        ? v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
        : v.toFixed(decimals);

    let raf = 0;
    let observer: IntersectionObserver | undefined;

    const run = () => {
      const t0 = performance.now() + delay;
      const duration = 1300;
      setText(pre + fmt(0) + suf);
      const tick = (now: number) => {
        const k = Math.max(0, Math.min(1, (now - t0) / duration));
        setText(pre + fmt(target * (1 - Math.pow(1 - k, 3))) + suf);
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (whenVisible && "IntersectionObserver" in window && ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer?.disconnect();
            run();
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(ref.current);
    } else {
      run();
    }

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
      setText(value);
    };
  }, [value, delay, whenVisible]);

  return <b ref={ref}>{text}</b>;
}
