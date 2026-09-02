import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/projects/ghost-tears")({
  head: () => ({ meta: [{ title: "Ghost Tears — Blumebyte Portfolio" }] }),
  component: GhostTearsPage,
});

function GhostTearsPage() {
  return (
    <main className="container-page py-16 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Game · Blumebyte</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-bold sm:text-6xl">Ghost Tears</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Ghost Tears is part of Blumebyte's growing mobile-game portfolio, created to explore storytelling, interaction and accessible entertainment on Android devices.
      </p>
      <div className="mt-10">
        <Button asChild variant="hero" size="lg">
          <a href={siteConfig.products.ghostTearsPlayStore} target="_blank" rel="noreferrer">Open on Google Play testing <ArrowUpRight /></a>
        </Button>
      </div>
      <section className="mt-20 rounded-[2rem] border border-border bg-black px-7 py-14 text-white sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7bd86]">Interactive entertainment</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">A lightweight mobile experience built with atmosphere, motion and replayability in mind.</h2>
      </section>
    </main>
  );
}
