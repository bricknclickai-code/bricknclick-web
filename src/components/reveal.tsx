"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  y?: number;
};

export function Reveal({ children, delay = 0, className, once = true, y = 40 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  // Reduced motion = gentler, not gone: keep the fade, drop the travel + blur.
  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(8px)" };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" };
  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? shown : {}}
      transition={{ duration: reduce ? 0.3 : 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SplitReveal({
  text,
  className,
  delay = 0,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const words = text.split(" ");

  // Reduced motion: fade the whole line in once, no per-word slide-up.
  if (reduce) {
    return (
      <motion.div
        ref={ref}
        className={className}
        aria-label={text}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay }}
      >
        {text}
      </motion.div>
    );
  }

  return (
    <div ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden align-baseline pr-[0.25em]">
          <motion.span
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{
              duration: 0.85,
              delay: delay + wi * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
