import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/projects";

const title = "Portfolio — Blumebyte Products & Projects";
const description =
  "Explore Blumebyte HR, ProSME, Ghost Tears and Space Bob — digital products and interactive software built by Blumebyte.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">Portfolio</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
              Products built to make technology useful.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              From business software to mobile games, these are Blumebyte products and experiments we can show publicly today.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-7 rounded-full">
              <Link to="/contact">Start a project <ArrowRight /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-shell">
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Have a product, platform or digital idea to build?" />
    </>
  );
}
