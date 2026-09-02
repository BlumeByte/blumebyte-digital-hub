import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";

export function CtaBand({
  title = "Ready to work smarter with technology?",
  description = "Tell us what you're trying to improve. We'll suggest a practical, realistic next step — no obligation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-page py-16 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-6 py-14 text-center shadow-lift sm:px-12">
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="xl" variant="secondary">
              <Link to="/contact">
                Get Started <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
