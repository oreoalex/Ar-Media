import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/kita-schule/hero-section";
import { BeobachtungSection } from "@/components/sections/kita-schule/beobachtung-section";
import { LeistungenSection } from "@/components/sections/kita-schule/leistungen-section";
import { HaltungSection } from "@/components/sections/kita-schule/haltung-section";
import { AblaufSection } from "@/components/sections/kita-schule/ablauf-section";
import { BildbeispieleSection } from "@/components/sections/kita-schule/bildbeispiele-section";
import { VertrauenSection } from "@/components/sections/kita-schule/vertrauen-section";
import { CtaSection } from "@/components/sections/kita-schule/cta-section";

export const metadata: Metadata = {
  title: "Kita & Schule",
  description:
    "Kitafotografie und Schulfotografie in Kiel und Schleswig-Holstein, Kindergartenfotograf und Schulfotograf ohne Kaufdruck und künstliche Kulissen.",
  keywords: [
    "Kitafotografie Kiel",
    "Kindergartenfotografie Kiel",
    "Schulfotografie Kiel",
    "Kitafotograf Schleswig-Holstein",
    "Schulfotograf Schleswig-Holstein",
  ],
  openGraph: {
    title: "Kita & Schule · AR Media",
    description:
      "Kitafotografie und Schulfotografie in Kiel und Schleswig-Holstein, Kindergartenfotograf und Schulfotograf ohne Kaufdruck und künstliche Kulissen.",
  },
  twitter: {
    title: "Kita & Schule · AR Media",
    description:
      "Kitafotografie und Schulfotografie in Kiel und Schleswig-Holstein, Kindergartenfotograf und Schulfotograf ohne Kaufdruck und künstliche Kulissen.",
  },
  alternates: { canonical: "/kita-schule" },
};

/**
 * Kita & Schule — Hub-Landingpage. Sieben Sections, exakt entlang der im
 * Master-Prompt vorgegebenen psychologischen Phasen (Aufmerksamkeit →
 * Verständnis → Vertrauen → Sicherheit → Qualität → Risiken abbauen →
 * Anfrage), nicht entlang des älteren 8-Abschnitte-Wireframes. Zielgruppe
 * sind Einrichtungen (Kitaleitung, Schulleitung, Träger), nicht einzelne
 * Eltern, deshalb Ton und Reihenfolge auf Entlastung und Organisationssicherheit
 * ausgerichtet statt auf reine Emotion.
 */
export default function KitaSchulePage() {
  return (
    <>
      <HeroSection />
      <BeobachtungSection />
      <LeistungenSection />
      <HaltungSection />
      <AblaufSection />
      <BildbeispieleSection />
      <VertrauenSection />
      <CtaSection />
    </>
  );
}
