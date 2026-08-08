import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/kontakt/hero-section";
import { ZusammenarbeitSection } from "@/components/sections/kontakt/zusammenarbeit-section";
import { AblaufSection } from "@/components/sections/kontakt/ablauf-section";
import { KontaktmoeglichkeitenSection } from "@/components/sections/kontakt/kontaktmoeglichkeiten-section";
import { NaechsterSchrittSection } from "@/components/sections/kontakt/naechster-schritt-section";
import { FaqSection } from "@/components/sections/kontakt/faq-section";
import { AbschlussSection } from "@/components/sections/kontakt/abschluss-section";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu AR Media in Kiel: Marketing-Agentur, Fotograf und Branding-Partner für Unternehmen, Privatkunden, Kitas und Schulen in Schleswig-Holstein. Projekt besprechen, Shooting anfragen oder Kita kennenlernen.",
  keywords: ["Kontakt AR Media", "Marketing Agentur Kiel", "Fotograf Kiel", "Branding Kiel"],
  alternates: { canonical: "/kontakt" },
};

/**
 * Kontakt-Hub laut IA v2.0 ("Entscheidung 8"): keine Formularseite, sondern
 * der ruhige Abschluss der gesamten Markenerfahrung, der zu den drei
 * eigentlichen, zugeschnittenen Formularen weiterleitet. Dramaturgie:
 * Einladung (Hero) → Haltung (Zusammenarbeit) → Vertrauen (Ablauf) →
 * Erreichbarkeit (Kontaktmöglichkeiten) → Weiche (Nächster Schritt) →
 * Einwandbehandlung (FAQ) → Mensch (Abschluss). Bewusst kein hartes,
 * dunkles CTA-Ende: Der Abschluss dieser Seite ist ein Gesicht, keine
 * Aufforderung.
 */
export default function KontaktPage() {
  return (
    <>
      <HeroSection />
      <ZusammenarbeitSection />
      <AblaufSection />
      <KontaktmoeglichkeitenSection />
      <NaechsterSchrittSection />
      <FaqSection />
      <AbschlussSection />
    </>
  );
}
