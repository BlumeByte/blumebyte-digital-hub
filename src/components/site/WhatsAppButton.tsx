import { MessageCircle } from "lucide-react";

import { siteConfig, whatsappLink } from "@/config/site";

/** Floating WhatsApp CTA. Number is configured in src/config/site.ts */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-3.5 text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
