"use client";

import { OPEN_CONSENT_SETTINGS_EVENT } from "@/lib/consent";

/**
 * Öffnet den ConsentBanner erneut, damit die Cookie-Entscheidung jederzeit
 * änderbar bleibt (siehe consent-banner.tsx). Bewusst als Button, nicht als
 * Link: es navigiert nirgendwohin, sondern löst nur ein Event aus.
 */
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_CONSENT_SETTINGS_EVENT))}
      className="transition-colors hover:text-off-white"
    >
      Cookie-Einstellungen
    </button>
  );
}
