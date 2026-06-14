"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Splits "3K+" → ["", "3", "K+"], "₹65L+" → ["₹", "65", "L+"], "80" → ["", "80", ""].
const RX = /^(\D*)(\d+(?:\.\d+)?)(.*)$/s;

/**
 * Animates the numeric part of a stat value up from zero when it scrolls into
 * view, preserving any prefix (₹) and suffix (K+, L+, +). Falls back to the
 * final value immediately under reduced motion or if the value isn't numeric.
 */
export function CountUp({
  value,
  delay = 0,
  duration = 1.4,
  className,
}: {
  value: string;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const m = value.match(RX);
  const target = m ? parseFloat(m[2]) : 0;
  const decimals = m && m[2].includes(".") ? m[2].split(".")[1].length : 0;
  const prefix = m ? m[1] : "";
  const suffix = m ? m[3] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? target : 0);

  // Deps are primitives only — `m` (a fresh array each render) must NOT be a
  // dependency, or the animation restarts every frame and stays pinned at 0.
  useEffect(() => {
    if (reduce) {
      setN(target);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, reduce, target, duration, delay]);

  if (!m) return <span ref={ref} className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}
