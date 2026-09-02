import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/projects/space-bob")({
  head: () => ({ meta: [{ title: "Space Bob — Blumebyte Portfolio" }] }),
  component: SpaceBobPage,
});

function SpaceBobPage() {
  return (
    <main className="container-page py-16 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Game · Blumebyte</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-bold sm:text-6xl">Space Bob</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Space Bob is a Blumebyte mobile game built for Android, combining accessible controls, quick-play sessions and a playful space theme.
      </p>
      <div className="mt-10">
        <Button asChild variant="hero" size="lg">
          <a href={siteConfig.products.spaceBobPlayStore} target="_blank" rel="noreferrer">Download on Google Play <ArrowUpRight /></a>
        </Button>
      </div>
      <section className="mt-20 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-border bg-card p-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Platform</p><h2 className="mt-3 text-3xl font-semibold">Android</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Available through Google Play for Android users.</p></div>
        <div className="rounded-[2rem] border border-border bg-black p-8 text-white"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7bd86]">Experience</p><h2 className="mt-3 text-3xl font-semibold text-white">Fast, playful, mobile-first</h2><p className="mt-3 text-sm leading-6 text-white/65">Designed around simple interaction and short, engaging sessions.</p></div>
      </section>
    </main>
  );
}
