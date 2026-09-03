import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Gamepad2, Smartphone, Sparkles } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { MediaGallery } from "@/components/site/MediaGallery";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/ghost-tears")({
  head: () => ({
    meta: [
      { title: "Ghost Tears — Blumebyte Portfolio" },
      {
        name: "description",
        content:
          "Ghost Tears is a Blumebyte mobile game project exploring interactive entertainment and Android game development.",
      },
    ],
  }),
  component: GhostTearsPage,
});

const capabilities = [
  {
    icon: Gamepad2,
    title: "Game development",
    body: "A Blumebyte project focused on interactive mobile entertainment.",
  },
  {
    icon: Smartphone,
    title: "Android testing",
    body: "The current public access point is the exact Google Play testing URL supplied for the project.",
  },
  {
    icon: Sparkles,
    title: "Interactive experimentation",
    body: "Part of Blumebyte's wider exploration of mobile products, interaction and game experiences.",
  },
];

function GhostTearsPage() {
  const project = projects.find((item) => item.slug === "ghost-tears")!;
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">
              Mobile game · Blumebyte
            </p>
            <h1 className="mt-6 text-6xl font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
              Ghost Tears
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              Ghost Tears is part of Blumebyte's mobile-game portfolio and reflects the company's
              work in interactive Android experiences.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8 rounded-full">
              <a href={siteConfig.products.ghostTearsPlayStore} target="_blank" rel="noreferrer">
                Open Google Play testing <ArrowUpRight />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <MediaGallery title={project.title} items={project.gallery} />

      <section className="container-page section-shell">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-black/10 bg-white p-7">
                  <span className="grid size-11 place-items-center rounded-full bg-[#f1f1f1] text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold tracking-[-0.035em]">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 flex flex-col gap-6 border-t border-black/10 pt-9 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Interactive ideas
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                Need a mobile app or game concept built?
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/contact">
                Talk to Blumebyte <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
