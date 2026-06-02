"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { services } from "@/lib/data";
import { SplitReveal } from "../reveal";

export function ServicesIndex() {
  const [hover, setHover] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 25 });
  const sy = useSpring(my, { stiffness: 200, damping: 25 });
  const wrap = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={wrap}
      onPointerMove={(e) => {
        const r = wrap.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-16 flex items-end justify-between">
        <div>
          <span className="mono text-[var(--muted-foreground)]">[ Services — 001/003 ]</span>
          <h2 className="display mt-4 text-[clamp(40px,6vw,96px)]">
            <SplitReveal text="Three things." />
            <SplitReveal text="Done well." delay={0.1} className="text-[var(--color-accent)]" />
          </h2>
        </div>
        <Link
          href="/services"
          data-cursor="all services"
          className="mono hidden self-end pb-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] md:inline-block"
        >
          See full services →
        </Link>
      </div>

      <ul className="border-t border-[var(--border-c)]">
        {services.map((s, i) => {
          const isHover = hover === i;
          return (
            <li
              key={s.id}
              onPointerEnter={() => setHover(i)}
              onPointerLeave={() => setHover(null)}
              className="group relative border-b border-[var(--border-c)]"
            >
              <Link
                href={`/services#${s.id}`}
                data-cursor="explore"
                className="grid grid-cols-12 items-center gap-4 py-8 md:py-12"
              >
                <span className="mono col-span-2 text-[var(--muted-foreground)] md:col-span-1">
                  {s.index}
                </span>
                <span
                  className={`display col-span-8 text-3xl transition-all sm:text-5xl md:col-span-7 md:text-7xl ${
                    hover !== null && !isHover
                      ? "text-[var(--muted-foreground)]/40"
                      : ""
                  }`}
                  style={{
                    transform: isHover ? "translateX(24px)" : "translateX(0)",
                    transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), color 0.4s",
                  }}
                >
                  {s.title}
                </span>
                <span className="mono col-span-2 hidden text-right text-[var(--muted-foreground)] md:col-span-3 md:block">
                  {s.tagline}
                </span>
                <span className="mono col-span-2 text-right md:col-span-1">→</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hover preview card following cursor */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block"
      >
        <motion.div
          initial={false}
          animate={{
            opacity: hover !== null ? 1 : 0,
            scale: hover !== null ? 1 : 0.9,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--border-c)] bg-[var(--card)] px-6 py-5 shadow-2xl"
          style={{ width: 280 }}
        >
          {hover !== null ? (
            <>
              <p className="mono text-[var(--color-accent)]">{services[hover].metric.value}</p>
              <p className="mt-1 text-xs text-[var(--muted-foreground)]">{services[hover].metric.label}</p>
              <p className="mt-4 text-sm">{services[hover].description}</p>
            </>
          ) : null}
        </motion.div>
      </motion.div>
    </section>
  );
}
