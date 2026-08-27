import type { Metadata } from "next";
import { UnternehmenLeistungPage } from "@/components/shared/unternehmen-leistung-page";

export const metadata: Metadata = {
  title: "Content Creation Kiel",
  description:
    "Laufende Content-Produktion für Unternehmen in Kiel und Schleswig-Holstein: Fotografie, Video und Text, die aus einem System heraus entstehen statt zufällig.",
  keywords: ["Content Creation Kiel", "Content Produktion Unternehmen", "Social-Media-Content Schleswig-Holstein"],
  openGraph: {
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "Content Creation Kiel · AR Media",
    description:
      "Laufende Content-Produktion für Unternehmen in Kiel und Schleswig-Holstein: Fotografie, Video und Text, die aus einem System heraus entstehen statt zufällig.",
  },
  twitter: {
    images: [{ url: "/twitter-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "Content Creation Kiel · AR Media",
    description:
      "Laufende Content-Produktion für Unternehmen in Kiel und Schleswig-Holstein: Fotografie, Video und Text, die aus einem System heraus entstehen statt zufällig.",
  },
  alternates: { canonical: "/unternehmen/content-creation" },
};

export default function Page() {
  return (
    <UnternehmenLeistungPage
      slug="/unternehmen/content-creation"
      kicker="Unternehmen · Content Creation"
      title="Content, der zur Marke passt statt sie zu verwässern."
      heroText="Laufender Content, der aussieht, klingt und sich anfühlt wie ein und dasselbe Unternehmen, nicht wie eine Reihe zufälliger Einzelposts. Content Creation und Content Marketing aus einer Hand, für Unternehmen in Kiel und Schleswig-Holstein."
      problemTitle="Content, der zufällig aussieht."
      problemText="Mal ein Handyfoto, mal ein Canva-Template, mal ein aufwendig produziertes Video, ohne roten Faden dazwischen. Jede Woche entsteht neuer Content, aber kaum jemand erkennt ihn auf den ersten Blick als das eigene Unternehmen wieder."
      denkansatzTitle="Unser Denkansatz"
      denkansatzText="Content ist keine Kür nach der Marke, er ist ihre laufende Fortsetzung. Deshalb produzieren wir ihn nicht getrennt von Branding und Corporate Design, sondern aus demselben System heraus, damit jeder einzelne Beitrag erkennbar bleibt, auch ohne Logo im Bild."
      prozessSchritte={[
        { title: "Beobachten", text: "Wir sehen uns an, was bisher entsteht, und woran es bisher fehlt, an Zeit, an Ideen oder an System." },
        { title: "Verstehen", text: "Welche Themen, Formate und Momente erzählen wirklich etwas über dein Unternehmen?" },
        { title: "Gestalten", text: "Fotos, Videos und Texte, die nach deiner Marke aussehen, nicht nach einer Vorlage." },
        { title: "Sichtbar machen", text: "Laufende Produktion statt Einzelprojekt, damit Substanz dauerhaft sichtbar bleibt." },
      ]}
      caseStudies={[
        { name: "Zeltlager Adlerhorst", text: "Laufende Social-Media- und Kampagnenbetreuung, nicht nur ein einmaliges Projekt.", href: "/case-studies#adlerhorst" },
        { name: "Royal Charming", text: "Social-Media-Content von der Gründung bis zur erfolgreichen Vermittlung aller Welpen.", href: "/case-studies#royal-charming" },
      ]}
      leistungenTitle="Was zu laufender Content Creation gehört"
      leistungen={[
        { title: "Fotografie und Video", text: "Reales Bildmaterial statt Stockfotos, entstanden aus deinem Unternehmen selbst." },
        { title: "Redaktionelle Planung", text: "Ein Plan, der festlegt, was wann entsteht, statt spontaner Einzelaktionen." },
        { title: "Text und Tonalität", text: "Formulierungen, die zur Sprache deiner Marke passen, nicht zu einer generischen Agentursprache." },
        { title: "Laufende Produktion", text: "Regelmäßiger Nachschub statt eines einmaligen Shootings, das nach drei Monaten aufgebraucht ist." },
      ]}
      faqs={[
        { q: "Wie oft entsteht neuer Content?", a: "Abhängig von Kanal und Ziel, legen wir gemeinsam fest, nicht nach einem starren Standardrhythmus." },
        { q: "Müssen wir selbst Ideen liefern?", a: "Nein. Wir entwickeln Themen und Formate mit, auf Basis dessen, was wir über dein Unternehmen bereits verstanden haben." },
        { q: "Was, wenn wir noch keine klare Bildsprache haben?", a: "Dann klären wir das zuerst, im Zweifel gemeinsam mit Corporate Design, damit Content nicht ohne Fundament entsteht." },
        { q: "Ist das dasselbe wie Social Media?", a: "Nah verwandt, aber nicht identisch: Content Creation ist die Produktion, Social Media die Strategie und Betreuung der Kanäle selbst." },
      ]}
      ctaText="Guter Content beginnt nicht bei der Kamera, sondern bei der Frage, was wirklich erzählt werden soll."
    />
  );
}
