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

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/blog" },
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/90 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-background/95"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-18">
        <Logo />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {nav.slice(0, 3).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              activeProps={{ className: "text-primary bg-accent/70" }}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-primary data-[state=open]:bg-accent data-[state=open]:text-primary">
              Portfolio <ChevronDown className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-52">
              {portfolioNav.map((item) => (
                <DropdownMenuItem key={item.to} asChild>
                  <Link to={item.to}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {nav.slice(3).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              activeProps={{ className: "text-primary bg-accent/70" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm">
            <div className="mt-2 mb-8">
              <Logo />
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {nav.slice(0, 3).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                  activeProps={{ className: "text-primary bg-accent/70" }}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 border-y border-border py-2">
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Portfolio
                </p>
                {portfolioNav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {nav.slice(3).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                  activeProps={{ className: "text-primary bg-accent/70" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild variant="hero" size="lg" className="mt-6 w-full">
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
