import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Gamepad2, Rocket, Smartphone } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/projects/space-bob")({
  head: () => ({
    meta: [
      { title: "Space Bob — Blumebyte Portfolio" },
      {
        name: "description",
        content: "Space Bob is a published Android mobile game from Blumebyte, available through Google Play.",
      },
    ],
  }),
  component: SpaceBobPage,
});

const capabilities = [
  { icon: Smartphone, title: "Published on Android", body: "Space Bob is available through the supplied Google Play listing." },
  { icon: Gamepad2, title: "Mobile game development", body: "A public example of Blumebyte's work beyond business software and websites." },
  { icon: Rocket, title: "Consumer product work", body: "Part of Blumebyte's experimentation with interactive products designed for everyday mobile use." },
];

function SpaceBobPage() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">Published Android game · Blumebyte</p>
            <h1 className="mt-6 text-6xl font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">Space Bob</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              Space Bob is a Blumebyte mobile game for Android and a public example of the company's game-development and interactive product work.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8 rounded-full">
              <a href={siteConfig.products.spaceBobPlayStore} target="_blank" rel="noreferrer">Download on Google Play <ArrowUpRight /></a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-shell">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-black/10 bg-white p-7">
                  <span className="grid size-11 place-items-center rounded-full bg-[#f1f1f1] text-primary"><Icon className="size-5" aria-hidden="true" /></span>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Build with Blumebyte</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em]">Have an app or game idea?</p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/contact">Start an enquiry <ArrowRight /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
