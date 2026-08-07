import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/fotografie/hero-section";
import { BeobachtungSection } from "@/components/sections/fotografie/beobachtung-section";
import { HaltungSection } from "@/components/sections/fotografie/haltung-section";
import { LeistungenSection } from "@/components/sections/fotografie/leistungen-section";
import { ProzessSection } from "@/components/sections/fotografie/prozess-section";
import { ArbeitenSection } from "@/components/sections/fotografie/arbeiten-section";
import { StimmenSection } from "@/components/sections/fotografie/stimmen-section";
import { FaqSection } from "@/components/sections/fotografie/faq-section";
import { CtaSection } from "@/components/sections/fotografie/cta-section";

export const metadata: Metadata = {
  title: "Fotografie",
  description:
    "Natürliche Portrait-, Paar-, Lifestyle-, Business- und Hochzeitsfotografie in Kiel und Schleswig-Holstein, ohne Posen, ohne künstliche Inszenierung.",
  keywords: [
    "Fotograf Kiel",
    "Portraitfotograf Kiel",
    "Paarshooting Kiel",
    "Familienfotograf Schleswig-Holstein",
    "Business Portrait Kiel",
    "Hochzeitsfotograf Kiel",
  ],
  alternates: { canonical: "/fotografie" },
};

/**
 * Fotografie — Hub-Landingpage. Gleiche Dramaturgie-Logik wie Unternehmen
 * (Hook → Diagnose → Antwort → Angebot → Prozess → Beweis → Sozialer
 * Beweis → Einwandbehandlung → Conversion), gleiche Designsprache (Reveal-
 * Timing, Kicker+Linie, A/R-Silhouetten, Hell/Dunkel-Rhythmus), andere
 * Zielgruppe und Tonalität: B2C statt B2B, "Stimmen" statt "Unterschied"
 * als dunkler Bruch, weil hier der emotionale Höhepunkt zählt, nicht die
 * Positionierung gegen Wettbewerber.
 */
export default function FotografiePage() {
  return (
    <>
      <HeroSection />
      <BeobachtungSection />
      <HaltungSection />
      <LeistungenSection />
      <ProzessSection />
      <ArbeitenSection />
      <StimmenSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
