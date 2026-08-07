import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/unternehmen/hero-section";
import { ProblemSection } from "@/components/sections/unternehmen/problem-section";
import { HaltungSection } from "@/components/sections/unternehmen/haltung-section";
import { LeistungenSection } from "@/components/sections/unternehmen/leistungen-section";
import { UnterschiedSection } from "@/components/sections/unternehmen/unterschied-section";
import { ProzessSection } from "@/components/sections/unternehmen/prozess-section";
import { ProjekteSection } from "@/components/sections/unternehmen/projekte-section";
import { FaqSection } from "@/components/sections/unternehmen/faq-section";
import { CtaSection } from "@/components/sections/unternehmen/cta-section";

export const metadata: Metadata = {
  title: "Marketing für Unternehmen",
  description:
    "Strategie, Markenidentität, Corporate Design, Fotografie, Video, Content und Social Media aus einer Hand für Unternehmen in Kiel und Schleswig-Holstein, die bereits mehr können, als sie zeigen.",
  alternates: { canonical: "/unternehmen" },
};

/**
 * Unternehmen — Hub-Landingpage. Dramaturgie folgt Funnel-Logik statt
 * reiner Informationssammlung: Hook (Hero) → Diagnose (Problem) → Antwort
 * (Haltung) → Angebot (Leistungen, mit leisem Zwischen-CTA) →
 * Differenzierung (Unterschied) → Vertrauen (Prozess, Projekte) →
 * Einwandbehandlung (FAQ) → Conversion (CTA). Übernimmt die Designsprache
 * der Startseite vollständig (Reveal-Timing, Kicker+Linie-Muster, A/R-
 * Silhouetten, Hell/Dunkel-Rhythmus) statt eine neue Vorlage zu bauen.
 */
export default function UnternehmenPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HaltungSection />
      <LeistungenSection />
      <UnterschiedSection />
      <ProzessSection />
      <ProjekteSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
