// Handwriting: margin notes and hand-drawn arrows, ported from the app's
// components/pactrel/hand.tsx so the site and the product share one hand.
// Decorative: hidden from screen readers, clicks pass through.

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** The words of a note, in the hand, tilted a touch so they don't sit on the grid. */
export function HandText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-hand font-medium text-[#e5c1a5] ${className}`}>{children}</span>;
}

/** A short arrow pointing right, leaving the end of a line of words with a slight lift. */
export function ArrowRight({ className = "", width = 30 }: { className?: string; width?: number }) {
  return (
    <svg width={width} height={(width * 14) / 30} viewBox="0 0 30 14" aria-hidden="true" className={`shrink-0 ${className}`} {...stroke}>
      <path d="M1.5 9.5c6.5 2.6 14.5 2.4 25.5-2.6" />
      <path d="M22.4 4.4 27.2 6.8l-3.6 4" />
    </svg>
  );
}

/** A curved arrow pointing down, for a note sitting above what it points at. */
export function ArrowDown({ className = "", width = 22 }: { className?: string; width?: number }) {
  return (
    <svg width={width} height={(width * 24) / 22} viewBox="0 0 22 24" aria-hidden="true" className={`shrink-0 ${className}`} {...stroke}>
      <path d="M3 2.5c6.8.4 11 4.6 10.6 17.6" />
      <path d="M9.8 16.9l3.8 4.2 3.6-4.4" />
    </svg>
  );
}

/** A longer arrow that drops from a note, then sweeps right into what it points at. */
export function ArrowSweep({ className = "", width = 56 }: { className?: string; width?: number }) {
  return (
    <svg width={width} height={(width * 34) / 48} viewBox="0 0 48 34" aria-hidden="true" className={`shrink-0 ${className}`} {...stroke}>
      <path d="M3.5 2.5c.6 11.8 6.4 21.6 18 25.2 6.4 2 13.6 1.6 21.6-.9" />
      <path d="M38.2 22.6l5.2 4-5 4.6" />
    </svg>
  );
}
