import type { Metadata } from "next";
import { services } from "@/lib/data";
import { Reveal, SplitReveal } from "@/components/reveal";
import { BigCta } from "@/components/home/big-cta";

export const metadata: Metadata = {
  title: "Services — Performance Ads, Web & Content",
  description:
    "Bricknclick services: performance ads on Meta & Google, Next.js websites engineered for SEO and conversion, and content systems that compound.",
  alternates: { canonical: "/services" },
};

const serviceJsonLd = (slug: string, name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: { "@type": "Organization", name: "Bricknclick" },
  areaServed: "Worldwide",
  serviceType: name,
  url: `https://bricknclick.com/services#${slug}`,
});

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-24">
        <span className="mono text-[var(--muted-foreground)]">[ Services — 2026 ]</span>
        <h1 className="display mt-6 text-[clamp(56px,11vw,200px)]">
          <SplitReveal text="What we" />
          <SplitReveal text="do." delay={0.1} className="text-[var(--color-accent)]" />
        </h1>
        <p className="mt-10 max-w-2xl text-balance text-lg text-[var(--muted-foreground)]">
          Four practices, one team. Ads to drive demand, web to convert it,
          content to compound it, AEO &amp; GEO to make sure your brand is the
          one AI answers cite — not the one buried beneath them. We staff every
          engagement with strategists, designers, and engineers — not handoffs.
        </p>
      </section>

      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`relative border-t border-[var(--border-c)] ${
            idx % 2 ? "bg-[var(--card)]" : ""
          }`}
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="mono text-[var(--color-accent)]">{s.index}</span>
              <h2 className="display mt-6 text-[clamp(48px,7vw,128px)]">
                {s.title}
              </h2>
              <p className="display mt-4 text-2xl text-[var(--muted-foreground)] md:text-3xl">
                {s.tagline}
              </p>
              <div className="mt-12 rounded-2xl border border-[var(--border-c)] p-6">
                <p className="display text-5xl text-[var(--color-accent)]">{s.metric.value}</p>
                <p className="mono mt-2 text-[var(--muted-foreground)]">{s.metric.label}</p>
              </div>
            </div>

            <div className="md:col-span-7">
              <Reveal>
                <p className="text-lg text-[var(--muted-foreground)] md:text-xl">
                  {s.description}
                </p>
              </Reveal>

              <div className="mt-12 grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mono mb-4 text-[var(--muted-foreground)]">
                    Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {s.capabilities.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 border-b border-[var(--border-c)] pb-3 text-sm"
                      >
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mono mb-4 text-[var(--muted-foreground)]">
                    What you get
                  </h3>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 border-b border-[var(--border-c)] pb-3 text-sm"
                      >
                        <span className="mono mt-1 text-[var(--color-accent)]">→</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(serviceJsonLd(s.id, s.title, s.description)),
            }}
          />
        </section>
      ))}

      <BigCta />
    </>
  );
}
