import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/case-studies/hero-section";
import { FaelleSection } from "@/components/sections/case-studies/faelle-section";
import { AbschlussSection } from "@/components/sections/case-studies/abschluss-section";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Fünf Projekte aus Marketing, Fotografie und Kitafotografie: Ausgangssituation, Strategie, Umsetzung und Ergebnis, bereichsübergreifend statt als Bildergalerie.",
  alternates: { canonical: "/case-studies" },
};

/**
 * Case Studies, der zentrale, bereichsübergreifende Proof-Hub laut IA v2.0.
 * Fünf Fallstudien im strikten 6-Teile-Format (siehe fall-card.tsx):
 * Saat für den Norden, Kitafotografie, Zeltlager Adlerhorst, Royal Charming,
 * und AR Media selbst. Reihenfolge bewusst nach Bereich gemischt statt
 * gruppiert, mit einer stillen Vertrauenszeile nach der zweiten Fallstudie.
 */
export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection />
      <FaelleSection />
      <AbschlussSection />
    </>
  );
}
