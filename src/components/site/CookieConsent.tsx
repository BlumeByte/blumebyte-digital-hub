import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const CONSENT_KEY = "blumebyte-cookie-consent";

type Consent = "essential" | "all";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = window.localStorage.getItem(CONSENT_KEY);
    if (!existing) setVisible(true);
  }, []);

  const save = (value: Consent) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    document.documentElement.dataset.cookieConsent = value;
    window.dispatchEvent(new CustomEvent("blumebyte:cookie-consent", { detail: value }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-5xl rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl sm:bottom-5 sm:p-6"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Your privacy</p>
          <h2 className="mt-1 text-lg font-semibold">Choose how Blumebyte uses cookies</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Essential cookies keep the website secure and functional. With your permission, we may also use analytics and experience cookies to understand usage and improve our services. You can choose essential cookies only or accept all cookies.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Read our <Link to="/privacy" className="font-medium text-primary underline underline-offset-4">Privacy Policy</Link> for more information.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => save("essential")}
            className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Accept all
          </button>
        </div>
      </div>
    </aside>
  );
}
