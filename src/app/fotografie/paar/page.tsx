import type { Metadata } from "next";
import { FotografieCategoryPage } from "@/components/shared/fotografie-category-page";

export const metadata: Metadata = {
  title: "Paar",
  description:
    "Paarfotografie in Kiel und Schleswig-Holstein, ruhig und ohne gestellte Romantik-Klischees. Ab 349 €.",
  keywords: ["Paarshooting Kiel", "Paarfotograf Schleswig-Holstein", "Verlobungsshooting Kiel"],
  alternates: { canonical: "/fotografie/paar" },
};

const faqs = [
  {
    q: "Wir sind vor der Kamera unsicher miteinander, ist das ein Problem?",
    a: "Nein, das ist fast immer so am Anfang. Wir geben euch keine Posen vor, sondern Zeit, bis ihr wieder normal miteinander seid, dann fotografieren wir.",
  },
  {
    q: "Müssen wir uns die ganze Zeit anschauen oder küssen?",
    a: "Nein. Die stärksten Bilder entstehen meistens dazwischen, in einem Blick, einem Lachen, nicht in einer gestellten Pose.",
  },
  {
    q: "Wo findet ein Paarshooting statt?",
    a: "An einem Ort, der euch etwas bedeutet oder einfach gefällt, in Kiel oder der Umgebung. Wir sprechen das im Vorgespräch ab.",
  },
  {
    q: "Ist das nur für Verlobungen oder Jahrestage gedacht?",
    a: "Nein, ihr braucht keinen besonderen Anlass. Manche der schönsten Aufnahmen entstehen an einem ganz gewöhnlichen Nachmittag.",
  },
];

export default function Page() {
  return (
    <FotografieCategoryPage
      kicker="Fotografie · Paar"
      title="Eure Geschichte, echt festgehalten."
      intro="Für zwei Menschen, die zusammen entspannter sind als einzeln. Ein Paarshooting in Kiel, das sich wie ein gemeinsamer Nachmittag anfühlt, nicht wie ein Termin."
      ablaufTitle="Wie ein Paar-Termin abläuft"
      ablauf="Wir beginnen mit einem Gespräch, nicht mit Anweisungen. Kein Posieren nach Schema, kein Kommando zum Lächeln. Stattdessen Zeit, an einem Ort, der euch etwas bedeutet, bis ihr vergesst, dass fotografiert wird, und ihr einfach miteinander seid. Genau dann entstehen die Bilder, die später zählen."
      preisAb={349}
      preisHinweis="Der genaue Umfang, Ort und Zeitpunkt besprechen wir im ersten, unverbindlichen Gespräch. Keine versteckten Zusatzkosten, keine Paketentscheidung vorab."
      faqs={faqs}
      ctaText="Vielleicht ist es das Bild von euch beiden, das es in einem Jahr noch gibt, wenn der Moment längst vorbei ist."
    />
  );
}
