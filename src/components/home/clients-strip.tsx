import { clients, trackedProjects } from "@/lib/data";

export function ClientsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_3fr] md:gap-16">
        <p className="mono text-[var(--muted-foreground)]">
          [ Projects we've moved units on ]
        </p>
        <ul className="grid grid-cols-1 gap-y-4 text-2xl md:grid-cols-2 md:text-3xl">
          {clients.map((c) => (
            <li
              key={c}
              className="display tracking-[-0.03em] text-[var(--foreground)]/90 hover:text-[var(--foreground)]"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 grid gap-6 border-t border-[var(--border-c)] pt-8 md:grid-cols-[1fr_3fr] md:gap-16">
        <p className="mono text-[var(--muted-foreground)]">
          [ Tracked & ranked for ]
        </p>
        <p className="mono flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[var(--muted-foreground)]">
          {trackedProjects.map((b, i) => (
            <span key={b} className="inline-flex items-center gap-3">
              {b}
              {i < trackedProjects.length - 1 ? <span aria-hidden>·</span> : null}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
