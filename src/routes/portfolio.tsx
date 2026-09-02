import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projectCategories, projects } from "@/data/projects";

const title = "Portfolio — Blumebyte Projects & Results";
const description =
  "Selected Blumebyte projects across dashboards, e-commerce, mobile apps, hosting and HR rollouts, with the results they delivered.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [category, setCategory] = useState<string>("All");
  const filtered =
    category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that made operations measurably better"
        description="A selection of projects and the outcomes they produced. Client names are placeholders you can replace with real references."
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">Start a project</Link>
        </Button>
      </PageHero>

      <section className="container-page py-16 lg:py-20">
        <div className="flex flex-wrap gap-2">
          {["All", ...projectCategories].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === c
                  ? "border-primary/40 bg-accent text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <CtaBand title="Have a project in mind?" />
    </>
  );
}
