"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * A single word that swaps to the next one (driven by `index`) with a vertical
 * mask-slide — matching SplitReveal's reveal so it sits on the same baseline as
 * the surrounding headline words. Static under reduced motion.
 *
 * The `overflow-hidden inline-block` wrapper is load-bearing: it both masks the
 * slide AND aligns the word's baseline to the bottom edge, the same way
 * SplitReveal's word spans do, so this lines up inside an `items-baseline` row.
 */
export function RotatingWord({
  words,
  index,
  className,
}: {
  words: string[];
  index: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const word = words[index] ?? words[0];

  // Two-level structure mirrors SplitReveal exactly: the flex item (outer span)
  // contains an overflow-hidden wrapper, so its baseline resolves to the same
  // bottom edge as the surrounding headline words.
  if (reduce) {
    return (
      <span className="inline-block align-baseline">
        <span className="inline-block overflow-hidden align-baseline">
          <span className={`inline-block ${className ?? ""}`}>{word}</span>
        </span>
      </span>
    );
  }

  return (
    <span className="inline-block align-baseline">
      <span className="relative inline-block overflow-hidden align-baseline">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-110%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-block ${className ?? ""}`}
          >
            {word}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
