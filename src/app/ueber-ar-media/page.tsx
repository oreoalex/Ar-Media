import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/ueber-ar-media/hero-section";
import { UrsprungSection } from "@/components/sections/ueber-ar-media/ursprung-section";
import { RoterFadenSection } from "@/components/sections/ueber-ar-media/roter-faden-section";
import { HaltungHeuteSection } from "@/components/sections/ueber-ar-media/haltung-heute-section";
import { SchlussSection } from "@/components/sections/ueber-ar-media/schluss-section";

export const metadata: Metadata = {
  title: "Über AR Media",
  description:
    "Warum Marketing, Fotografie und Kitafotografie bei AR Media unter einer Marke zusammengehören, und was Alexander Rieck dazu bewegt hat.",
  alternates: { canonical: "/ueber-ar-media" },
};

/**
 * Über AR Media. Kein Lebenslauf, kein Funnel, fünf Sections statt der
 * neun der drei Landingpages: bewusst kürzer, weil diese Seite Vertrauen
 * über eine Überzeugung aufbaut, nicht über eine Conversion-Dramaturgie.
 * Wireframe für diese Route existierte im Code bisher nicht im Detail
 * (nur Platzhalter-Titel), diese Struktur wurde deshalb hier neu definiert,
 * nicht ein bestehendes Wireframe verändert.
 */
export default function UeberArMediaPage() {
  return (
    <>
      <HeroSection />
      <UrsprungSection />
      <RoterFadenSection />
      <HaltungHeuteSection />
      <SchlussSection />
    </>
  );
}
