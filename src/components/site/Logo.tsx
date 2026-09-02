import { Link } from "@tanstack/react-router";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3"
      aria-label="Blumebyte home"
    >
      <img
        src="/favicon.ico"
        width={36}
        height={36}
        alt=""
        aria-hidden="true"
        className="size-9 rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span
        className={`font-display text-lg font-bold tracking-[-0.04em] ${
          footer ? "text-white" : "text-ink"
        }`}
      >
        Blumebyte
      </span>
    </Link>
  );
}
