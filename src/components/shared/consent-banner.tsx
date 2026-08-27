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
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-charcoal/10 bg-off-white/95 px-5 py-4 shadow-[0_-8px_30px_rgba(13,43,36,0.12)] backdrop-blur-xl sm:px-6 sm:py-5 lg:px-10 lg:py-6"
    >
      {/*
        Stapelt Text+Buttons bis sm (640px) statt bis lg: das mobile Viewport-
        Budget (375–428px breit, 600–900px hoch) ist knapp, ein Consent-Modal
        das bis lg gestapelt bleibt verdeckt dort H1/CTA fast vollständig
        (siehe Visual-Audit: 35–40% der Viewporthöhe). Ab sm passen Text und
        die zwei kurzen Buttons nebeneinander.
      */}
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:gap-10">
        <div className="max-w-2xl">
          <p
            id="consent-banner-title"
            className="text-[12px] font-medium tracking-[0.1em] text-charcoal uppercase sm:text-[13px]"
          >
            Cookies & Statistik
          </p>
          <p id="consent-banner-text" className="mt-1.5 text-[13px] leading-snug text-charcoal/75 sm:mt-2 sm:text-[14px] sm:leading-relaxed">
            Nur mit deiner Einwilligung: Google Analytics.{" "}
            <Link
              href="/datenschutz"
              className="underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        {/* min-h-11 (44px) hält den Touch-Target-Mindestwert unabhängig vom
            kompakteren Padding ein (Visual-Audit: Buttons lagen zuvor bei
            39,5px, knapp unter der 44px-Empfehlung). */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => handleDecision("denied")}
            className="inline-flex min-h-11 items-center rounded-sm px-4 text-[13px] font-medium tracking-wide text-charcoal/70 underline decoration-charcoal/25 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-forest/50 sm:px-5"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => handleDecision("granted")}
            className="inline-flex min-h-11 items-center rounded-sm bg-deep-forest px-5 text-[13px] font-medium tracking-wide text-off-white transition-colors hover:bg-deep-forest/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-forest/50 sm:px-6"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
