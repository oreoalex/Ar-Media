"use client";

import * as React from "react";
import { CONSENT_UPDATED_EVENT, readStoredConsent } from "@/lib/consent";
import { siteConfig } from "@/lib/site-config";

type MapEmbedProps = {
  className?: string;
};

function subscribeToConsentChanges(callback: () => void) {
  window.addEventListener(CONSENT_UPDATED_EVENT, callback);
  return () => window.removeEventListener(CONSENT_UPDATED_EVENT, callback);
}

/**
 * An Consent-Mode gekoppeltes Maps-Embed: lädt den echten Google-Maps-
 * iframe nur, wenn bereits "granted"-Consent vorliegt (Nutzer:in hat den
 * Cookie-Banner akzeptiert oder tut es gerade in dieser Sitzung), sonst ein
 * statischer Platzhalter mit Erklärung und dem bisherigen, konsentfreien
 * Linkout als Fallback. Löst den in kontaktmoeglichkeiten-section.tsx
 * dokumentierten Zielkonflikt (Live-Embed sendet Daten an Google
 * unabhängig vom Cookie-Consent), ohne auf das Embed komplett zu
 * verzichten. Kein API-Key nötig: die "output=embed"-Form ist Googles
 * eigene, kostenlose Embed-Variante (dieselbe, die "Karte teilen → Karte
 * einbetten" im Maps-UI erzeugt).
 */
export function MapEmbed({ className }: MapEmbedProps) {
  const stored = React.useSyncExternalStore(
    subscribeToConsentChanges,
    readStoredConsent,
    () => null,
  );

  const address = `${siteConfig.location.street}, ${siteConfig.location.postalCode} ${siteConfig.location.city}, ${siteConfig.location.country}`;
  const linkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  if (stored !== "granted") {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 border border-charcoal/10 bg-off-white px-6 py-16 text-center ${className ?? ""}`}>
        <p className="text-[14px] text-charcoal/70">
          Die Karte lädt erst nach deiner Einwilligung zu Google Analytics, damit hier keine Daten ohne
          Zustimmung an Google übertragen werden.
        </p>
        <a
          href={linkUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[14px] font-medium text-charcoal underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
        >
          Adresse direkt in Google Maps öffnen
        </a>
      </div>
    );
  }

  return (
    <iframe
      title="AR Media auf Google Maps"
      className={className}
      src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
