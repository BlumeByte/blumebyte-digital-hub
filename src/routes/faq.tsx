import { createFileRoute, Link } from "@tanstack/react-router";

import { FaqList } from "@/components/site/FaqList";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — Blumebyte" },
      {
        name: "description",
        content:
          "Answers to common questions about Blumebyte services, project enquiries, international work, hosting, apps and custom digital solutions.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="container-page section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">FAQs</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Useful answers before we start.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-8 text-white/64 sm:text-lg">
              A concise guide to how Blumebyte works, what we build and what to prepare before sending a project enquiry.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Common questions</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Need something more specific?
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                Send Blumebyte the context of your project and we can respond to the details that matter to your organisation.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-7 rounded-full">
                <Link to="/contact">Start an enquiry</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
