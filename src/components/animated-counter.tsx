"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const isNum = /^\d+$/.test(value);
  const target = isNum ? parseInt(value, 10) : 0;
  const [display, setDisplay] = useState(isNum ? "0" : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!isNum) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(String(target));
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1300;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(String(Math.round(eased * target)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [isNum, target]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
