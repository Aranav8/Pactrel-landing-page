import { useEffect, useRef } from "react";

/**
 * Lightweight mouse glow using pure CSS transforms.
 * No Framer Motion springs = no permanent rAF loop.
 */
export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Direct DOM manipulation — zero React re-renders, zero rAF loops
      el.style.transform = `translate3d(${e.clientX - 400}px, ${e.clientY - 400}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-50 w-[800px] h-[800px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        willChange: "transform",
        transition: "transform 0.15s ease-out",
      }}
    />
  );
}
