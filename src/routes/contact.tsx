import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig, whatsappLink } from "@/config/site";
import { buildEnquiryMailto } from "@/lib/enquiry-mailto";

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
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    window.location.href = buildEnquiryMailto({
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    });
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build"
        description="Share the challenge, idea or system you need. The form opens a prepared email to Blumebyte so you can review your enquiry before sending it."
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
          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Company / Organization" name="company" />
            </div>
            <label className="mt-5 block text-sm font-medium">
              Service of interest
              <select name="service" className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15">
                <option value="">Choose a service</option>
                <option>Web Design & Custom Dashboards</option>
                <option>Hosting & Domain Solutions</option>
                <option>Mobile App & Game Development</option>
                <option>Virtual Assistance</option>
                <option>SmartSuite Solutions</option>
                <option>PrintTech Supplies</option>
                <option>E-commerce</option>
                <option>Blumebyte HR</option>
                <option>Other</option>
              </select>
            </label>
            <label className="mt-5 block text-sm font-medium">
              Tell us about your project
              <textarea name="message" required rows={7} className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" placeholder="What are you trying to build or improve?" />
            </label>
            <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-muted-foreground">
              <input type="checkbox" required name="privacyAccepted" value="yes" className="mt-1" />
              <span>I agree that Blumebyte may use the information I submit to respond to this enquiry in accordance with the Privacy Policy.</span>
            </label>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button type="submit" variant="hero" size="lg" className="rounded-full">
                Prepare email enquiry
              </Button>
              <p className="text-xs leading-5 text-muted-foreground">Your email app will open with subject “Enquiry”. You can review the message before sending.</p>
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15" />
    </label>
  );
}
