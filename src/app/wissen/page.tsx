import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/wissen/hero-section";
import { KategorienSection } from "@/components/sections/wissen/kategorien-section";
import { FuerWenSection } from "@/components/sections/wissen/fuer-wen-section";
import { CtaSection } from "@/components/sections/wissen/cta-section";

export const metadata: Metadata = {
  title: "Wissen",
  description:
    "Ein Wissensbereich für digitale Marken, Social Media und die Werkzeuge dahinter: Social Media, Tools, Datenschutz & Recht und kuratierte offizielle Ressourcen.",
  openGraph: {
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "Wissen · AR Media",
    description:
      "Ein Wissensbereich für digitale Marken, Social Media und die Werkzeuge dahinter.",
  },
  twitter: {
    images: [{ url: "/twitter-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "Wissen · AR Media",
    description:
      "Ein Wissensbereich für digitale Marken, Social Media und die Werkzeuge dahinter.",
  },
  alternates: { canonical: "/wissen" },
};

/**
 * Landingpage des Wissensbereichs. Folgt der Hub-Konvention wie
 * /unternehmen und /kita-schule: eigene, einmalige Section-Komponenten
 * statt eines Prop-Objekt-Templates, da diese Seite nur einmal existiert.
 */
export default function WissenPage() {
  return (
    <>
      <HeroSection />
      <KategorienSection />
      <FuerWenSection />
      <CtaSection />
    </>
  );
}
