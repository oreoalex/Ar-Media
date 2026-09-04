"use client";

import * as React from "react";

/**
 * Einziger Ort mit Sichtbarkeit auf jeden Kontaktversuch der Seite (Audit-
 * Fund P0.1): weder die rohen mailto:/tel:-Links auf den Kategorieseiten
 * noch das echte Kontaktformular (kontakt-formular.tsx) feuerten bisher ein
 * GA4-Event. Statt jede der ~11 Dateien mit mailto:/tel:-Links einzeln
 * anzufassen, ein einziger delegierter Click-Listener auf document-Ebene:
 * erfasst jeden Klick auf einen mailto:/tel:-Link sitewide, unabhängig
 * davon, wo er später ergänzt wird. gtag ist bereits GA4-Consent-Mode-
 * bewusst (siehe google-analytics.tsx) — Events werden bei "denied" von
 * Google serverseitig verworfen/modelliert, kein Extra-Consent-Check nötig.
 */
export function ContactTracking() {
  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("mailto:")) {
        window.gtag?.("event", "contact_click", { method: "email" });
      } else if (href.startsWith("tel:")) {
        window.gtag?.("event", "contact_click", { method: "phone" });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
