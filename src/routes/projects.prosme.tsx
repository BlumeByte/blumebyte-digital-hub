import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/projects/prosme")({
  head: () => ({ meta: [{ title: "ProSME — Blumebyte Portfolio" }] }),
  component: ProSMEPage,
});

function ProSMEPage() {
  return (
    <main className="container-page py-16 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Platform · Blumebyte</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-bold sm:text-6xl">ProSME</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        ProSME is a Blumebyte-built digital platform focused on giving small and growing businesses a practical online presence and tools that support discoverability, trust and day-to-day growth.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild variant="hero" size="lg"><a href={siteConfig.products.prosme} target="_blank" rel="noreferrer">Visit ProSME <ArrowUpRight /></a></Button>
        <Button asChild variant="outline" size="lg"><a href={siteConfig.products.prosmePlayStore} target="_blank" rel="noreferrer">Get the Android test app <ArrowUpRight /></a></Button>
      </div>
      <section className="mt-20 grid gap-6 lg:grid-cols-3">
        {["Built for SMEs", "Digital discovery", "Mobile-first access"].map((title) => <div key={title} className="rounded-3xl border border-border bg-card p-7"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">A focused product experience designed around practical business needs and simple adoption.</p></div>)}
      </section>
    </main>
  );
}
