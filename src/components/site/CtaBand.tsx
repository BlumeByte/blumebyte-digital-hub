import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";

export function CtaBand({
  title = "Ready to build something useful?",
  description = "Tell Blumebyte what you want to improve, launch or simplify. We’ll use the context to shape a practical next step.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-page section-shell">
      <div className="relative overflow-hidden rounded-[2rem] bg-black px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-18">
        <div
          className="pointer-events-none absolute right-[-8%] top-[-55%] size-72 rounded-full bg-[#7c5a1a]/35 blur-3xl sm:size-96"
          aria-hidden="true"
        />
        <div className="relative grid gap-9 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">Start a conversation</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-8 text-white/62">{description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero" className="rounded-full">
                <Link to="/contact">
                  Start an enquiry <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-black"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
