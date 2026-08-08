"use client";

import * as React from "react";
import Link from "next/link";
import {
  buildConsentState,
  CONSENT_UPDATED_EVENT,
  OPEN_CONSENT_SETTINGS_EVENT,
  readStoredConsent,
  storeConsent,
  type ConsentDecision,
} from "@/lib/consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function applyDecision(decision: ConsentDecision) {
  window.gtag?.("consent", "update", buildConsentState(decision));
  storeConsent(decision);
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: decision }));
}

/**
 * Erscheint beim Erstbesuch (kein Consent-Cookie) und lässt sich über den
 * "Cookie-Einstellungen"-Link im Footer jederzeit erneut öffnen, um die
 * Entscheidung zu ändern (siehe cookie-settings-button.tsx). Bewusst nur
 * zwei Optionen, kein Kategorien-Feingranular: diese Website setzt
 * ausschließlich GA4-Analytics ein, kein Werbetracking, daher reicht eine
 * einfache Ja/Nein-Entscheidung.
 */
export function ConsentBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const stored = readStoredConsent();
    if (stored === "granted") {
      window.gtag?.("consent", "update", buildConsentState("granted"));
    } else if (stored === null) {
      setVisible(true);
    }
    const openHandler = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, openHandler);
  }, []);

  if (!visible) return null;

  const handleDecision = (decision: ConsentDecision) => {
    applyDecision(decision);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="consent-banner-title"
      aria-describedby="consent-banner-text"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-charcoal/10 bg-off-white/95 px-6 py-6 shadow-[0_-8px_30px_rgba(13,43,36,0.12)] backdrop-blur-xl lg:px-10"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p
            id="consent-banner-title"
            className="text-[13px] font-medium tracking-[0.1em] text-charcoal uppercase"
          >
            Cookies & Statistik
          </p>
          <p id="consent-banner-text" className="mt-2 text-[14px] leading-relaxed text-charcoal/75">
            Wir nutzen Google Analytics, um zu verstehen, wie die Website genutzt wird — nur mit
            deiner Einwilligung. Mehr dazu in der{" "}
            <Link
              href="/datenschutz"
              className="underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => handleDecision("denied")}
            className="rounded-sm px-5 py-2.5 text-[13px] font-medium tracking-wide text-charcoal/70 underline decoration-charcoal/25 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-forest/50"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => handleDecision("granted")}
            className="rounded-sm bg-deep-forest px-6 py-2.5 text-[13px] font-medium tracking-wide text-off-white transition-colors hover:bg-deep-forest/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-forest/50"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
