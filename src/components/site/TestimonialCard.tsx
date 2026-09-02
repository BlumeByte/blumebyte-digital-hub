import { Quote } from "lucide-react";

import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <Quote className="size-6 text-primary/40" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <span className="grid size-10 place-items-center rounded-full bg-accent text-sm font-semibold text-primary">
          {item.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold">{item.name}</span>
          <span className="block text-xs text-muted-foreground">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
