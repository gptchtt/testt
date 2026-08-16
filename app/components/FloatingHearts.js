"use client";

import { useMemo } from "react";

const SYMBOLS = ["♥", "✦", "♡"];

export default function FloatingHearts({ count = 12 }) {
  const items = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      return {
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 18,
        duration: 7 + Math.random() * 7,
        delay: Math.random() * 7,
        symbol,
        color: symbol === "✦" ? "var(--gold-soft)" : "var(--blush)"
      };
    });
  }, [count]);

  return (
    <div className="floating-hearts" aria-hidden="true">
      {items.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            color: h.color
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
}
