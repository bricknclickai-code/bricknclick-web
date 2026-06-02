"use client";

import { useScroll, useVelocity, useTransform, useSpring, motion } from "motion/react";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  baseSpeed?: number;
  className?: string;
  reverse?: boolean;
};

export function VelocityMarquee({ children, baseSpeed = 1, className, reverse = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-2000, 0, 2000], reverse ? [1, baseSpeed, -1] : [-1, baseSpeed, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        style={{
          x: useTransform(factor, (v) => `${v * -10}%`),
        }}
        className="flex w-max gap-12 whitespace-nowrap will-change-transform"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
