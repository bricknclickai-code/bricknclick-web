import Link from "next/link";
import { Logo } from "./logo";

const sitemap = [
  {
    title: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/blog", label: "Journal" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#ads", label: "Performance ads" },
      { href: "/services#web", label: "Web & product" },
      { href: "/services#content", label: "Content & brand" },
      { href: "/services#ai-search", label: "AEO & GEO" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "https://wa.me/919019508519?text=Hi%20Bricknclick%2C%20I%27d%20like%20to%20discuss%20a%20project.", label: "WhatsApp" },
      { href: "mailto:info@bricknclick.com", label: "Email" },
      { href: "https://www.linkedin.com/company/bricknclick/", label: "LinkedIn" },
      { href: "https://www.instagram.com/bricknclick.ai/", label: "Instagram" },
      { href: "https://x.com/bricknclick_ai", label: "X (Twitter)" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--border-c)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo withTagline size="md" />
            <p className="mt-6 max-w-sm text-sm text-[var(--muted-foreground)]">
              A digital agency that builds, ships, and scales. Ads, web, and content —
              under one roof, with one accountable team.
            </p>
            <p className="mono mt-6 text-[var(--muted-foreground)]">
              <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
              Available for projects · 2026
            </p>
          </div>

          {sitemap.map((col) => (
            <div key={col.title}>
              <h4 className="mono mb-4 text-[var(--muted-foreground)]">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="underline-grow inline-block">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-[var(--border-c)] pt-6 text-xs text-[var(--muted-foreground)] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>© {new Date().getFullYear()} Bricknclick. All rights reserved.</p>
            <Link href="/privacy" className="underline-grow">
              Privacy
            </Link>
            <Link href="/terms" className="underline-grow">
              Terms
            </Link>
          </div>
          <p className="mono">Founded by IIM alumni · Crafted in India · Shipped worldwide</p>
        </div>
      </div>

      {/* Oversized brand watermark */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden"
      >
        <p
          className="display whitespace-nowrap text-[18vw] leading-none text-[var(--foreground)]/[0.04] -mb-[3vw]"
          style={{ letterSpacing: "-0.05em" }}
        >
          bricknclick · bricknclick
        </p>
      </div>
    </footer>
  );
}
