import { clients, builderProjects, channelPartnersCount } from "@/lib/data";

export function ClientsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      {/* Direct clients — brokers we run end-to-end work for */}
      <div className="grid gap-10 md:grid-cols-[1fr_3fr] md:gap-16">
        <div>
          <p className="mono text-[var(--muted-foreground)]">
            [ Direct clients ]
          </p>
          <p className="mono mt-3 text-[var(--color-accent)]">
            + {channelPartnersCount} individual channel partners
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-y-3 text-2xl md:grid-cols-2 md:text-3xl">
          {clients.map((c) => (
            <li
              key={c}
              className="display tracking-[-0.03em] text-[var(--foreground)]/90 transition-colors hover:text-[var(--foreground)]"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>

      {/* Builder projects we've actively run paid funnels on */}
      <div className="mt-12 grid gap-10 border-t border-[var(--border-c)] pt-10 md:grid-cols-[1fr_3fr] md:gap-16">
        <p className="mono text-[var(--muted-foreground)]">
          [ Builder projects · Meta + Google ]
        </p>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-3 text-base text-[var(--muted-foreground)] md:text-lg">
          {builderProjects.map((p, i) => (
            <li key={p} className="inline-flex items-center gap-3">
              <span className="text-[var(--foreground)]">{p}</span>
              {i < builderProjects.length - 1 ? (
                <span aria-hidden className="text-[var(--color-accent)]">·</span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
