import Link from "next/link";

type Props = {
  withTagline?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { word: "text-lg", tag: "text-[8px]" },
  md: { word: "text-2xl", tag: "text-[9px]" },
  lg: { word: "text-5xl", tag: "text-xs" },
};

export function Logo({ withTagline = false, size = "md" }: Props) {
  const s = sizes[size];
  return (
    <Link
      href="/"
      aria-label="Bricknclick — home"
      className="group inline-flex flex-col leading-none"
      data-cursor="home"
    >
      <span className={`display ${s.word} tracking-[-0.05em]`}>
        brick
        <span className="italic text-[var(--color-accent)] transition-transform duration-500 inline-block group-hover:-rotate-6">
          n
        </span>
        click
      </span>
      {withTagline ? (
        <span
          className={`mono mt-1 flex items-center gap-2 ${s.tag} text-[var(--muted-foreground)]`}
        >
          <span className="h-px w-4 bg-[var(--color-accent)]" />
          We Own It
          <span className="h-px w-4 bg-[var(--color-accent)]" />
        </span>
      ) : null}
    </Link>
  );
}
