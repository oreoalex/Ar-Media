import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { PhilosophySection } from "@/components/sections/home/philosophy-section";
import { ForkSection } from "@/components/sections/home/fork-section";
import { ProofSection } from "@/components/sections/home/proof-section";
import { FounderSection } from "@/components/sections/home/founder-section";
import { InvitationSection } from "@/components/sections/home/invitation-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  // Kein eigener title-Override: Next.js' Title-Template greift für die
  // Root-Route nicht (page.tsx liegt im selben Segment wie das layout.tsx,
  // das das Template definiert — verifiziert per curl gegen die Live-Seite:
  // andere Seiten bekommen korrekt "· AR Media" angehängt, die Startseite
  // bekam mit einem eigenen title-String bislang gar keinen Marken-Suffix).
  // Der geerbte layout.tsx-Default ("AR Media · {claim}") liefert bereits
  // den gewünschten, markenhaltigen Titel.
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

/**
 * Startseite — Marken-Dramaturgie (Final Creative Direction): Hero → Haltung
 * → Leistungen → Case Studies → Über AR Media → Abschluss. Die Seite liest
 * sich als eine Geschichte, nicht als Modul-Sammlung — jeder Abschnitt geht
 * inhaltlich in den nächsten über. Kein eigenes "Markenstatement" mehr: Die
 * beiden Claims sind über die Dramaturgie verteilt (siehe Hero, Founder-
 * und Invitation-Section) statt an einer Stelle gebündelt.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ForkSection />
      <ProofSection />
      <FounderSection />
      <InvitationSection />
    </>
  );
}
