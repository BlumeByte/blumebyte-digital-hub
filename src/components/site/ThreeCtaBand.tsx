import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { DigitalCore } from "@/components/three/DigitalCore";
import { ThreeExperience } from "@/components/three/ThreeExperience";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";

export function ThreeCtaBand({
  title = "Let’s build something useful.",
  description = "Tell Blumebyte what you want to improve, launch or simplify. We’ll shape the technology around the outcome you need.",
}: {
  title?: string;
  description?: string;
}) {
  const fallback = <div className="three-fallback absolute inset-0" aria-hidden="true" />;

  return (
    <section className="container-page section-shell">
      <div className="relative isolate overflow-hidden rounded-[2.25rem] bg-black px-6 py-16 text-white sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-0 opacity-80" aria-hidden="true">
          <ThreeExperience fallback={fallback} className="absolute inset-0 h-full w-full" camera={{ position: [0, 0, 5.6], fov: 44 }}>
            <ambientLight intensity={0.35} />
            <directionalLight position={[-4, 4, 5]} intensity={1.2} />
            <pointLight position={[2.5, 1, 3]} intensity={26} distance={8} color="#7C5A1A" />
            <group position={[2.1, 0, 0]}>
              <DigitalCore compact />
            </group>
          </ThreeExperience>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#000_8%,rgba(0,0,0,.92)_45%,rgba(0,0,0,.38)_100%)]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">Start a conversation</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-8 text-white/66">{description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero" className="rounded-full">
                <Link to="/contact">Start an enquiry <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-black">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
