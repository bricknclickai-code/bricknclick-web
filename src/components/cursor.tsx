"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

// Ring is rendered at its largest (active) size and scaled DOWN when idle, so
// size changes ride on `transform` (GPU) instead of width/height (layout+paint).
const RING_SIZE = 88;
const IDLE_SCALE = 36 / RING_SIZE;

export function Cursor() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.4 });

  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // A custom cursor is pure decoration — under reduced motion, leave the
    // native cursor alone and render nothing.
    if (reduce) return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    document.documentElement.classList.add("has-cursor");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      const trigger = t?.closest<HTMLElement>("[data-cursor]");
      if (trigger) {
        setActive(true);
        setLabel(trigger.dataset.cursor || null);
      } else {
        setActive(false);
        setLabel(null);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [x, y, reduce]);

  if (reduce) return null;

  return (
    <>
      <motion.div
        ref={ref}
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          // Use rgba with explicit alpha so Motion can tween it.
          // "transparent" (CSS keyword) and CSS custom-property values aren't
          // interpolatable — Motion needs two parsable color strings of the
          // same kind to animate between them.
          initial={false}
          style={{ width: RING_SIZE, height: RING_SIZE }}
          animate={{
            scale: active ? 1 : IDLE_SCALE,
            backgroundColor: active ? "rgba(255, 107, 26, 1)" : "rgba(255, 107, 26, 0)",
            borderColor: active ? "rgba(255, 107, 26, 1)" : "rgba(250, 250, 250, 1)",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
          className="flex items-center justify-center rounded-full border"
        >
          {label ? (
            <span
              className="select-none px-2 text-[10px] font-medium uppercase tracking-[0.14em] text-black"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {label}
            </span>
          ) : null}
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="h-[6px] w-[6px] rounded-full bg-white" />
      </motion.div>
    </>
  );
}
