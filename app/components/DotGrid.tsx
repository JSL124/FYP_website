"use client";

import { useEffect, useRef } from "react";

/**
 * Pure CSS dot grid with a lightweight scroll parallax.
 * Single rAF-throttled scroll listener, GPU-composited transform.
 */
export default function DotGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        el!.style.transform = `translate3d(0, ${window.scrollY * 0.12}px, 0)`;
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 will-change-transform"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(139,92,246,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        top: "-20%",
        bottom: "-20%",
      }}
    />
  );
}
