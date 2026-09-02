import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      to="/services"
      hash={service.slug}
      className="card-hover group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
    >
      <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
