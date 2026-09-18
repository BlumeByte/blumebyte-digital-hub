import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig, whatsappLink } from "@/config/site";
import {
  GOOGLE_FORM_ENDPOINT,
  GOOGLE_FORM_ENTRY_IDS,
  PRIVACY_CONSENT_VALUE,
} from "@/lib/google-form-enquiry";

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

type SubmissionState = "idle" | "submitting" | "success";

function ContactPage() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const waitingForGoogleResponse = useRef(false);

  function handleSubmit() {
    waitingForGoogleResponse.current = true;
    setSubmissionState("submitting");
  }

  function handleGoogleResponseLoad() {
    if (!waitingForGoogleResponse.current) return;

    waitingForGoogleResponse.current = false;
    formRef.current?.reset();
    setSubmissionState("success");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build"
        description="Share the challenge, idea or system you need. Your enquiry will be sent directly to Blumebyte and recorded securely for follow-up."
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
          <div>
            <iframe
              name="blumebyte-google-form-response"
              title="Contact form submission response"
              className="hidden"
              onLoad={handleGoogleResponseLoad}
            />

            <form
              ref={formRef}
              action={GOOGLE_FORM_ENDPOINT}
              method="POST"
              target="blumebyte-google-form-response"
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name={GOOGLE_FORM_ENTRY_IDS.name} required />
                <Field label="Email" name={GOOGLE_FORM_ENTRY_IDS.email} type="email" required />
                <Field label="Phone" name={GOOGLE_FORM_ENTRY_IDS.phone} type="tel" required />
                <Field label="Company / Organization" name={GOOGLE_FORM_ENTRY_IDS.company} required />
              </div>

              <label className="mt-5 block text-sm font-medium">
                Service of interest
                <select
                  name={GOOGLE_FORM_ENTRY_IDS.service}
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                >
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
                <textarea
                  name={GOOGLE_FORM_ENTRY_IDS.message}
                  required
                  rows={7}
                  className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  placeholder="What are you trying to build or improve?"
                />
              </label>

              <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-muted-foreground">
                <input
                  type="checkbox"
                  required
                  name={GOOGLE_FORM_ENTRY_IDS.privacy}
                  value={PRIVACY_CONSENT_VALUE}
                  className="mt-1"
                />
                <span>I agree that Blumebyte may use the information I submit to respond to this enquiry in accordance with the Privacy Policy.</span>
              </label>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="rounded-full"
                  disabled={submissionState === "submitting"}
                >
                  {submissionState === "submitting" ? "Sending enquiry…" : "Send enquiry"}
                </Button>
                <p className="text-xs leading-5 text-muted-foreground">
                  Your enquiry will be recorded in Blumebyte&apos;s response system for follow-up.
                </p>
              </div>

              {submissionState === "success" ? (
                <div className="mt-5 flex gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm leading-6">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">Thank you. Your enquiry has been received.</p>
                    <p className="mt-1 text-muted-foreground">Blumebyte will get back to you shortly.</p>
                  </div>
                </div>
              ) : null}
            </form>
          </div>
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
