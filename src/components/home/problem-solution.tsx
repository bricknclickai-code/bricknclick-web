"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Beat = {
  text: string;
  accent?: boolean; // renders in brand orange + final-resolution treatment
};

const beats: Beat[] = [
  { text: "Your ads aren't converting." },
  { text: "Your site isn't ranking." },
  { text: "Your content isn't compounding." },
  { text: "Because nobody owns the whole picture." },
  { text: "We do.", accent: true },
];

export function ProblemSolution() {
  return (
    <>
      {/* Desktop: scroll-pinned storytelling. Tall + immersive. */}
      <ScrollStory />
      {/* Mobile: same beats as a compact card stack — no 500vh scroll marathon. */}
      <WhyCards />
    </>
  );
}

function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Background tint slowly warms toward orange as we approach the resolution
  const bgTint = useTransform(
    scrollYProgress,
    [0, 0.6, 0.85, 1],
    [
      "rgba(255, 107, 26, 0)",
      "rgba(255, 107, 26, 0)",
      "rgba(255, 107, 26, 0.05)",
      "rgba(255, 107, 26, 0.12)",
    ]
  );

  return (
    <section
      ref={ref}
      aria-label="Why Bricknclick"
      className="relative isolate hidden bg-[var(--background)] md:block"
      style={{ height: `${beats.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        {/* Background warming wash */}
        <motion.div
          aria-hidden
          style={{ background: bgTint }}
          className="pointer-events-none absolute inset-0"
        />

        {/* Eyebrow — fades out as soon as you scroll past beat 1 */}
        <Eyebrow progress={scrollYProgress} />

        {/* Scroll cue — only visible during first beat */}
        <ScrollCue progress={scrollYProgress} />

        {beats.map((beat, i) => (
          <BeatPanel
            key={i}
            beat={beat}
            index={i}
            total={beats.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function BeatPanel({
  beat,
  index,
  total,
  progress,
}: {
  beat: Beat;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each beat owns an equal slice of the section's scroll range.
  // Inside its slice, fade in over the first 25%, hold for 50%, fade out for 25%.
  // The final beat skips fade-out — it stays as the resolution image.
  const slice = 1 / total;
  const start = index * slice;
  const end = (index + 1) * slice;
  const mid = (start + end) / 2;

  const fadeInEnd = start + slice * 0.25;
  const fadeOutStart = end - slice * 0.25;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    isLast ? [start, fadeInEnd] : [start, fadeInEnd, fadeOutStart, end],
    isLast ? [0, 1] : [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [start, mid, end],
    isLast ? ["40px", "0px", "0px"] : ["40px", "0px", "-40px"]
  );

  const scale = useTransform(
    progress,
    [start, mid, end],
    isLast ? [0.98, 1, 1] : [0.98, 1, 1.02]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <p
        className={`display max-w-5xl text-balance text-center leading-[0.95] ${
          beat.accent
            ? "text-[var(--color-accent)] text-[clamp(56px,12vw,200px)]"
            : "text-[var(--foreground)] text-[clamp(40px,9vw,160px)]"
        }`}
      >
        {beat.text}
      </p>
    </motion.div>
  );
}

function Eyebrow({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.05, 0.18, 0.22], [1, 1, 1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="mono absolute left-1/2 top-12 -translate-x-1/2 text-center text-[var(--muted-foreground)] md:top-16"
    >
      [ Why Bricknclick exists ]
    </motion.div>
  );
}

function ScrollCue({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.05, 0.15, 0.2], [1, 1, 1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="mono absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--muted-foreground)]"
    >
      <span className="inline-block animate-bounce">↓</span>{" "}
      <span className="ml-2">Scroll</span>
    </motion.div>
  );
}

/**
 * Mobile rendering of the same narrative: three problem cards, the diagnosis,
 * then the resolution — all on one screen-ish, no scroll marathon.
 */
function WhyCards() {
  const problems = beats.slice(0, 3);
  const pivot = beats[3];
  const resolution = beats[4];

  return (
    <section
      aria-label="Why Bricknclick"
      className="bg-[var(--background)] px-6 py-20 md:hidden"
    >
      <p className="mono text-center text-sm text-[var(--muted-foreground)]">
        [ Why Bricknclick exists ]
      </p>

      <div className="mx-auto mt-10 max-w-md space-y-3">
        {problems.map((p, i) => (
          <Reveal key={i} delay={i * 0.05} y={20}>
            <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-c)] bg-[var(--card)] px-5 py-5">
              <span className="mono shrink-0 text-xs text-[var(--muted-foreground)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="display text-xl leading-tight text-[var(--foreground)]">
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} y={20}>
        <p className="mx-auto mt-8 max-w-md text-balance text-center text-lg text-[var(--muted-foreground)]">
          {pivot.text}
        </p>
      </Reveal>

      <Reveal delay={0.15} y={20}>
        <div className="mx-auto mt-4 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-[var(--color-accent)] px-6 py-10">
          <p className="display text-6xl leading-none text-black">{resolution.text}</p>
          <ArrowRight className="h-8 w-8 text-black" aria-hidden strokeWidth={2.5} />
        </div>
      </Reveal>
    </section>
  );
}
