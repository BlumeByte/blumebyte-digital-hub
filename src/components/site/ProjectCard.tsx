import { TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-hover overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative h-36 bg-gradient-brand">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <span className="absolute bottom-3 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {project.client}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-accent/60 p-3 text-sm font-medium text-accent-foreground">
          <TrendingUp className="mt-0.5 size-4 shrink-0" />
          {project.result}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <Badge key={t} variant="outline" className="font-normal text-muted-foreground">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
