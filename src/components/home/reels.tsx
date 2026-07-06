import Link from "next/link";
import { Reveal, SplitReveal } from "@/components/reveal";
import { reels, instagramProfile, type Reel } from "@/lib/reels";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
    </svg>
  );
}

function ReelCard({ reel }: { reel: Reel }) {
  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="watch"
      aria-label="Watch reel on Instagram"
      className="group relative block aspect-[9/16] w-[240px] shrink-0 snap-start overflow-hidden rounded-xl bg-[var(--card)] md:w-[280px]"
    >
      {/* Branded gradient base — always present, so cards look intentional
          even before poster images are added (and if a poster 404s). */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 30% 15%, ${reel.accent}40, transparent 60%), linear-gradient(160deg, ${reel.accent}22, rgba(0,0,0,0.55))`,
        }}
      />

      {/* Poster image overlay, when available */}
      {reel.poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={reel.poster}
          alt={reel.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
        />
      ) : null}

      {/* Legibility gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

      {/* Instagram glyph */}
      <span className="absolute right-3 top-3 text-white/90">
        <InstagramGlyph className="h-5 w-5" />
      </span>

      {/* Play button */}
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="ml-0.5 h-5 w-5">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </a>
  );
}

export function Reels() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="mono text-[var(--muted-foreground)]">[ Video & social ]</span>
          <h2 className="display mt-4 text-[clamp(36px,6vw,88px)] leading-[0.98]">
            <SplitReveal text="Content worth" />
            <SplitReveal text="watching." delay={0.1} />
          </h2>
          <p className="mt-6 text-lg text-[var(--muted-foreground)]">
            We produce the video and social content that fills the funnel — reels,
            short-form, brand films, and campaign creative. One reel alone drove 50+
            organic leads. Here's a look at what we've shipped.
          </p>
        </div>

        <a
          href={instagramProfile}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="follow"
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-[var(--border-c)] px-5 text-sm font-medium transition-colors hover:bg-[var(--card)]"
        >
          <InstagramGlyph className="h-4 w-4" />
          Follow on Instagram
        </a>
      </div>

      {/* Horizontal reel carousel — vertical cards, scroll-snap on all sizes.
          Negative margin + padding lets cards bleed to the screen edge on mobile. */}
      <Reveal className="mt-12">
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((r) => (
            <ReelCard key={r.title} reel={r} />
          ))}
        </div>
      </Reveal>

      <p className="mono mt-6 text-[var(--muted-foreground)]">
        Want this for your project?{" "}
        <Link href="/services#content" className="underline-grow text-[var(--color-accent)]">
          See our content & video services →
        </Link>
      </p>
    </section>
  );
}
