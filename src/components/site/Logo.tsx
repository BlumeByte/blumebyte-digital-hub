import { Link } from "@tanstack/react-router";

export function Logo({ footer = false, inverse = false }: { footer?: boolean; inverse?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3"
      aria-label="Blumebyte home"
    >
      <img
        src="/blumebyte-official-mark.jpg"
        width={40}
        height={40}
        alt=""
        aria-hidden="true"
        className="size-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span
        className={`font-display text-lg font-bold tracking-[-0.04em] ${
          footer || inverse ? "text-white" : "text-ink"
        }`}
      >
        Blumebyte
      </span>
    </Link>
  );
}
