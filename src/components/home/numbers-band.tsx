import { Reveal, SplitReveal } from "../reveal";
import { eoiLabel } from "@/lib/eoi";

const stats = [
  { v: "3,000+", l: "Qualified leads sourced via paid funnels" },
  { v: "80", l: "Acres sold for clients · single project" },
  { v: "50+", l: "EOIs via Meta ads · 1 project" },
  { v: "100+", l: "Organic leads · zero ad spend" },
];

export function NumbersBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-5">
          <span className="mono text-[var(--muted-foreground)]">[ By the numbers ]</span>
          <h2 className="display mt-4 text-[clamp(40px,6vw,96px)]">
            <SplitReveal text="Receipts." />
            <SplitReveal text="Not slides." delay={0.1} />
          </h2>
          <p className="mt-6 max-w-md text-[var(--muted-foreground)] md:text-lg">
            We don't run case studies on vibes. These numbers are what one year
            of work looks like — pulled from live engagements, not a deck.
          </p>
        </div>

        <div className="md:col-span-7">
          <ul className="grid grid-cols-2 gap-y-12 border-t border-[var(--border-c)] pt-10 md:grid-cols-2">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.06}>
                <li className="border-l border-[var(--border-c)] pl-6">
                  <p className="display text-5xl text-[var(--color-accent)] md:text-7xl">
                    {s.v}
                  </p>
                  <p className="mono mt-3 text-[var(--muted-foreground)]">{eoiLabel(s.l)}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
