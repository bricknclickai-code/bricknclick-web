import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-start justify-center px-6">
      <span className="mono text-[var(--muted-foreground)]">[ Error · 404 ]</span>
      <h1 className="display mt-6 text-[clamp(56px,12vw,200px)]">
        Page <span className="text-[var(--color-accent)]">not</span> found.
      </h1>
      <p className="mt-6 max-w-md text-lg text-[var(--muted-foreground)]">
        That URL doesn't lead anywhere we own. The good URLs are below.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full bg-[var(--foreground)] px-6 text-sm font-medium text-[var(--background)]"
        >
          ← Back home
        </Link>
        <Link
          href="/work"
          className="inline-flex h-12 items-center rounded-full border border-[var(--border-c)] px-6 text-sm font-medium hover:bg-[var(--card)]"
        >
          See our work
        </Link>
      </div>
    </section>
  );
}
