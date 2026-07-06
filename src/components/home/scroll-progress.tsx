"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "why", label: "Why" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "reels", label: "Video" },
  { id: "process", label: "Process" },
  { id: "proof", label: "Proof" },
  { id: "contact", label: "Start" },
];

/**
 * Right-edge scroll progress rail with section markers.
 *
 * - Vertical 1px rail filled proportionally to scroll position
 * - 7 clickable ticks anchored to the proportional position of each section
 * - Each tick reveals its label on hover and acts as a smooth-scroll anchor
 * - Active section is highlighted in brand orange
 * - Hidden below md (mobile is already scroll-fatigue-light per recent edits)
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const filled = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  // Track each section's normalized scroll position (top edge / page height)
  // Recomputed on resize because page height can change with content loads.
  const [positions, setPositions] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function measure() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const next = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return 0;
        const top = el.getBoundingClientRect().top + window.scrollY;
        return Math.max(0, Math.min(1, top / docHeight));
      });
      setPositions(next);
    }
    measure();
    window.addEventListener("resize", measure);
    // Re-measure after a tick to account for late-loading images/components
    const t = setTimeout(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      // Active = last section whose start has been passed
      let idx = 0;
      for (let i = 0; i < positions.length; i++) {
        if (v >= positions[i] - 0.02) idx = i;
      }
      setActiveIndex(idx);
    });
    return () => unsub();
  }, [scrollYProgress, positions]);

  const filledHeight = useTransform(filled, (v) => `${v * 100}%`);

  const onJump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile: thin top progress bar — no section markers (WhatsApp FAB + nav
          already use the chrome zones, and section markers on small screens
          create more noise than value). */}
      <motion.div
        aria-hidden
        style={{ scaleX: filled, transformOrigin: "0% 50%" }}
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[2px] bg-[var(--color-accent)] md:hidden"
      />

      <nav
        aria-label="Section navigation"
        className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block"
      >
      {/* Background rail */}
      <div className="relative h-[360px] w-px bg-[var(--border-c)]">
        {/* Filled section in brand orange */}
        <motion.div
          style={{ height: filledHeight }}
          className="absolute inset-x-0 top-0 origin-top bg-[var(--color-accent)]"
        />

        {/* Section ticks */}
        {positions.length === sections.length &&
          sections.map((s, i) => {
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onJump(s.id)}
                aria-label={`Jump to ${s.label} section`}
                style={{ top: `${positions[i] * 100}%` }}
                className="pointer-events-auto group absolute left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer p-2"
              >
                <span
                  aria-hidden
                  className={`block h-1.5 w-1.5 rounded-full transition-[transform,background-color,box-shadow] duration-300 ${
                    isActive
                      ? "scale-[2.2] bg-[var(--color-accent)] shadow-[0_0_0_4px_rgba(255,107,26,0.12)]"
                      : isPast
                      ? "bg-[var(--color-accent)]"
                      : "bg-[var(--border-c)] group-hover:bg-[var(--foreground)]"
                  }`}
                />

                {/* Label appears on hover/active */}
                <span
                  className={`mono pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap text-[10px] tracking-[0.12em] transition-[opacity,color] duration-300 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  } ${isActive ? "text-[var(--color-accent)]" : "text-[var(--muted-foreground)]"}`}
                >
                  {String(i + 1).padStart(2, "0")} — {s.label}
                </span>
              </button>
            );
          })}
      </div>
    </nav>
    </>
  );
}
