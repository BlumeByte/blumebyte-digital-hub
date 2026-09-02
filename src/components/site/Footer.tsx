import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";

import { Logo } from "./Logo";
import { siteConfig, whatsappLink } from "@/config/site";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/blog" },
  { label: "FAQs", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

const portfolioLinks = [
  { label: "Portfolio overview", to: "/portfolio" },
  { label: "Blumebyte HR", to: "/blumebyte-hr" },
  { label: "ProSME", to: "/projects/prosme" },
  { label: "Ghost Tears", to: "/projects/ghost-tears" },
  { label: "Space Bob", to: "/projects/space-bob" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 bg-black text-white">
      <div className="container-page section-shell">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
          <div>
            <Logo footer />
            <p className="mt-6 max-w-md text-base leading-7 text-white/62">
              Blumebyte builds practical digital products, websites, apps and business systems for organisations that want technology to feel simpler and work harder.
            </p>
            <a
              href={siteConfig.youtube}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#d5b16b]"
            >
              <Youtube className="size-4" aria-hidden="true" />
              Watch Blumebyte on YouTube
            </a>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Portfolio" links={portfolioLinks} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b]">Contact</p>
            <ul className="mt-5 space-y-4 text-sm text-white/62">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#d5b16b]" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#d5b16b]" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-[#d5b16b]" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">{siteConfig.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-[#d5b16b]" aria-hidden="true" />
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp Blumebyte</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/12 pt-7 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Blumebyte. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms & Conditions</Link>
            <span>Accra · Working worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; to: string }>;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b]">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-sm text-white/62 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
