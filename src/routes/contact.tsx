import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { siteConfig, whatsappLink } from "@/config/site";

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
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Unable to send message");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build"
        description="Share the challenge, idea or system you need. Blumebyte will review your enquiry and get back to you with the next practical step."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <div>
          <p className="text-sm leading-7 text-muted-foreground">
            Whether you need a website, custom dashboard, mobile app, e-commerce platform, hosting,
            HR system or digital transformation support, you can reach us directly.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/50">
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
            <Button type="submit" variant="hero" size="lg" disabled={submitting}>
              {submitting ? "Sending…" : "Send enquiry"}
            </Button>
            {status === "success" && <p className="text-sm font-medium text-primary">Thank you. Your message has been sent.</p>}
            {status === "error" && <p className="text-sm font-medium text-destructive">We couldn't send your message. Please email or WhatsApp us directly.</p>}
          </div>
        </form>
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
