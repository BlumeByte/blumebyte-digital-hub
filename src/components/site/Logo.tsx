import { Link } from "@tanstack/react-router";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Blumebyte home">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
        <span className="font-display text-lg font-bold leading-none">B</span>
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${footer ? "text-foreground" : "text-ink"}`}
      >
        Blumebyte
      </span>
    </Link>
  );
}
