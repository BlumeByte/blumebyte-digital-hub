import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white transition-transform duration-500 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b]">
            {project.category}
          </p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em]">
            {project.title}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={project.internalPath}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          View project <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
