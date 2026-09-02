import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const primaryNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
] as const;

const secondaryNav = [
  { label: "Insights", to: "/blog" },
  { label: "FAQs", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

const portfolioNav = [
  { label: "Overview", to: "/portfolio" },
  { label: "Blumebyte HR", to: "/blumebyte-hr" },
  { label: "ProSME", to: "/projects/prosme" },
  { label: "Ghost Tears", to: "/projects/ghost-tears" },
  { label: "Space Bob", to: "/projects/space-bob" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass =
    "px-2.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-white/92 shadow-[0_10px_30px_-24px_rgba(0,0,0,.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/95"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-5 transition-[height] duration-300 ${
          scrolled ? "h-15" : "h-18"
        }`}
      >
        <Logo />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={navLinkClass}
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium text-muted-foreground outline-none transition-colors hover:text-foreground data-[state=open]:text-foreground">
              Portfolio <ChevronDown className="size-3.5" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={12}
              className="w-56 rounded-xl border-black/10 p-1.5 shadow-xl"
            >
              {portfolioNav.map((item) => (
                <DropdownMenuItem key={item.to} asChild>
                  <Link to={item.to} className="rounded-lg py-2.5">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {secondaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={navLinkClass}
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button asChild variant="hero" size="lg" className="rounded-full px-5">
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="outline" size="icon" aria-label="Open navigation menu" className="rounded-full">
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90vw] max-w-sm border-l-black/10 bg-white px-6">
            <div className="mt-2 mb-8">
              <Logo />
            </div>

            <nav aria-label="Mobile navigation" className="flex flex-col">
              {primaryNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="border-b border-black/10 py-4 text-lg font-semibold tracking-tight text-foreground"
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-b border-black/10 py-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Portfolio
                </p>
                <div className="flex flex-col">
                  {portfolioNav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="py-2.5 text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {secondaryNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-black/10 py-4 text-lg font-semibold tracking-tight text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button asChild variant="hero" size="lg" className="mt-8 w-full rounded-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Start a Project
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
