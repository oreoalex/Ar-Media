import type { WissenResourceLink } from "@/lib/wissen/types";

/**
 * Kuratierte externe Links zu den offiziellen Hilfebereichen der jeweiligen
 * Anbieter. AR Media erklärt die praktische Anwendung, der Anbieter die
 * technischen Details — deshalb hier bewusst keine nachgebaute
 * Dokumentation, nur die verifizierten, aktuellen offiziellen Quellen.
 */
export const ressourcenLinks: WissenResourceLink[] = [
  {
    provider: "Meta",
    name: "Meta Business Help Center",
    href: "https://www.facebook.com/business/help",
    description: "Offizielle Hilfe zu Instagram und Facebook für Unternehmen, inklusive Werbeanzeigen.",
  },
  {
    provider: "Meta",
    name: "Meta Datenrichtlinie",
    href: "https://www.facebook.com/privacy/policy",
    description: "Wie Meta Daten auf Instagram, Facebook und Messenger verarbeitet.",
  },
  {
    provider: "Canva",
    name: "Canva Help Center",
    href: "https://www.canva.com/help/",
    description: "Anleitungen und Support direkt von Canva.",
  },
  {
    provider: "Canva",
    name: "Canva Content License Agreement",
    href: "https://www.canva.com/policies/content-license-agreement/",
    description: "Die aktuellen Nutzungsbedingungen für Elemente und Vorlagen.",
  },
  {
    provider: "CapCut",
    name: "CapCut Help Center",
    href: "https://www.capcut.com/help",
    description: "Offizielle Anleitungen und FAQ direkt von CapCut.",
  },
  {
    provider: "CapCut",
    name: "CapCut Privacy Policy",
    href: "https://www.capcut.com/clause/privacy-policy",
    description: "Die aktuelle Datenschutzrichtlinie von CapCut.",
  },
  {
    provider: "Adobe",
    name: "Adobe Help Center",
    href: "https://helpx.adobe.com/support.html",
    description: "Support und Anleitungen für alle Adobe-Anwendungen.",
  },
  {
    provider: "Adobe",
    name: "Adobe Privacy Policy",
    href: "https://www.adobe.com/privacy/policy.html",
    description: "Die aktuelle Datenschutzrichtlinie von Adobe.",
  },
];
