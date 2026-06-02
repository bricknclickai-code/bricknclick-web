"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { projects, type Project } from "@/lib/data";
import { Reveal, SplitReveal } from "../reveal";

export function SelectedWork() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <span className="mono text-[var(--muted-foreground)]">[ Selected work ]</span>
          <h2 className="display mt-4 text-[clamp(40px,6vw,96px)]">
            <SplitReveal text="Real cases." />
            <SplitReveal text="Real numbers." delay={0.1} />
          </h2>
        </div>
        <Link
          href="/work"
          data-cursor="all work"
          className="mono hidden self-end pb-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] md:inline-block"
        >
          See all work →
        </Link>
      </div>

      <div className="grid gap-x-6 gap-y-16 md:grid-cols-12">
        {projects.map((p, i) => {
          // Asymmetric stagger so the two cases don't sit at the same height
          const layout =
            i === 0
              ? "md:col-span-7 md:col-start-1"
              : "md:col-span-5 md:col-start-8 md:mt-24";
          return (
            <Reveal key={p.slug} delay={i * 0.08} className={layout}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Link
      ref={ref}
      href={`/work/${project.slug}`}
      data-cursor="read case"
      className="group block"
    >
      <div className="relative overflow-hidden rounded-md bg-[var(--card)]">
        <motion.div style={{ y }} className="will-change-transform">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src={project.cover}
              alt={`${project.client} — ${project.title}`}
              width={1400}
              height={1050}
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              sizes={index === 0 ? "(min-width: 768px) 56vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
              priority={index === 0}
            />
          </div>
        </motion.div>

        {/* Hover wash */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: project.accent }}
        />

        {/* Status badge */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 backdrop-blur">
          <span className="mono text-[10px] text-white">{project.year}</span>
          <span
            className="h-1 w-1 rounded-full"
            style={{ background: project.accent }}
          />
          <span className="mono text-[10px] capitalize text-white">
            {project.status}
          </span>
        </div>

        {/* Big number bottom overlay — pulled from the first metric */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
          <p
            className="display text-3xl text-white sm:text-4xl"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
          >
            <span style={{ color: project.accent }}>{project.metrics[0].value}</span>{" "}
            <span className="text-white/80">{project.metrics[0].label.toLowerCase()}</span>
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="mono text-[var(--muted-foreground)]">
            ({String(index + 1).padStart(2, "0")}) — {project.tagline}
          </p>
          <h3 className="display mt-3 text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
            {project.client}
          </h3>
          <p className="mt-2 max-w-md text-sm text-[var(--muted-foreground)]">
            {project.title}
          </p>
        </div>
      </div>
    </Link>
  );
}
