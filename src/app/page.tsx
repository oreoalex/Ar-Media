import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { PhilosophySection } from "@/components/sections/home/philosophy-section";
import { ForkSection } from "@/components/sections/home/fork-section";
import { ProofSection } from "@/components/sections/home/proof-section";
import { FounderSection } from "@/components/sections/home/founder-section";
import { InvitationSection } from "@/components/sections/home/invitation-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.claim,
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
