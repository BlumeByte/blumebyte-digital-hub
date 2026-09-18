import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig, whatsappLink } from "@/config/site";

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdn1furyhYXDUpLF6T56oU7j8KPeD0CKiSO8SAqLLt_NNecqQ/viewform?embedded=true";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Blumebyte — Start a Project" },
      {
        name: "description",
        content:
          "Talk to Blumebyte about websites, dashboards, apps, hosting, e-commerce, HR technology and digital transformation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build"
        description="Share the challenge, idea or system you need. Your enquiry is submitted through Blumebyte's official Google Form and recorded directly in our response sheet."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <Reveal>
          <div>
            <p className="text-sm leading-7 text-muted-foreground">
              Whether you need a website, custom dashboard, mobile app, e-commerce platform, hosting,
              HR system or digital transformation support, you can reach us directly.
            </p>

            <div className="mt-8 space-y-4">
              <a href={`mailto:${siteConfig.email}?subject=Enquiry`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/50">
                <span className="grid size-11 place-items-center rounded-full bg-accent text-primary"><Mail className="size-5" /></span>
                <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p><p className="font-semibold">{siteConfig.email}</p></div>
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/50">
                <span className="grid size-11 place-items-center rounded-full bg-accent text-primary"><Phone className="size-5" /></span>
                <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p><p className="font-semibold">{siteConfig.phone}</p></div>
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/50">
                <span className="grid size-11 place-items-center rounded-full bg-accent text-primary"><MessageCircle className="size-5" /></span>
                <div><p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="font-semibold">Chat with Blumebyte</p></div>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              title="Blumebyte project enquiry form"
              className="block h-[1500px] w-full border-0 bg-white sm:h-[1420px]"
              loading="eager"
            >
              Loading…
            </iframe>
          </div>
        </Reveal>
      </section>
    </>
  );
}
