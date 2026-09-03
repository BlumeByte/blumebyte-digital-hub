import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Building2, Smartphone, Store } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { MediaGallery } from "@/components/site/MediaGallery";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/prosme")({
  head: () => ({
    meta: [
      { title: "ProSME — Blumebyte Portfolio" },
      {
        name: "description",
        content:
          "ProSME is a Blumebyte-built platform focused on practical digital tools and visibility for small and growing businesses.",
      },
    ],
  }),
  component: ProSMEPage,
});

const capabilities = [
  {
    icon: Building2,
    title: "Built around SMEs",
    body: "A product direction focused on the practical needs of small and growing businesses.",
  },
  {
    icon: Store,
    title: "Digital presence",
    body: "Designed to support business discoverability and a clearer digital presence.",
  },
  {
    icon: Smartphone,
    title: "Mobile access",
    body: "A companion Android experience is available through the supplied Google Play testing link.",
  },
];

function ProSMEPage() {
  const project = projects.find((item) => item.slug === "prosme")!;
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">
              SME platform · Blumebyte
            </p>
            <h1 className="mt-6 text-6xl font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
              ProSME
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              A Blumebyte-built digital platform focused on helping small and growing businesses
              strengthen their online presence, discoverability and access to practical digital
              tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg" className="rounded-full">
                <a href={siteConfig.products.prosme} target="_blank" rel="noreferrer">
                  Visit ProSME <ArrowUpRight />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-black"
              >
                <a href={siteConfig.products.prosmePlayStore} target="_blank" rel="noreferrer">
                  Android testing <ArrowUpRight />
                </a>
              </Button>
            </div>
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
                Want something similar?
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                Talk to Blumebyte about your platform idea.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/contact">
                Start an enquiry <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
