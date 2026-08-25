import type { Metadata } from "next";
import { FotografieCategoryPage } from "@/components/shared/fotografie-category-page";

export const metadata: Metadata = {
  title: "Lifestyle",
  description:
    "Lifestyle-Fotografie in Kiel und Schleswig-Holstein für Familien und echte Alltagsmomente, ohne gestellte Szenen. Ab 299 €.",
  keywords: ["Familienfotograf Kiel", "Lifestyle-Fotografie Schleswig-Holstein", "Familienshooting Kiel"],
  openGraph: {
    title: "Lifestyle · AR Media",
    description:
      "Lifestyle-Fotografie in Kiel und Schleswig-Holstein für Familien und echte Alltagsmomente, ohne gestellte Szenen. Ab 299 €.",
  },
  twitter: {
    title: "Lifestyle · AR Media",
    description:
      "Lifestyle-Fotografie in Kiel und Schleswig-Holstein für Familien und echte Alltagsmomente, ohne gestellte Szenen. Ab 299 €.",
  },
  alternates: { canonical: "/fotografie/lifestyle" },
};

const faqs = [
  {
    q: "Was bedeutet Lifestyle-Fotografie bei euch genau?",
    a: "Wir begleiten euch, statt euch zu arrangieren. Ihr macht, was ihr sowieso tun würdet, wir sind mit der Kamera dabei.",
  },
  {
    q: "Eignet sich das auch für Familien mit kleinen Kindern?",
    a: "Gerade dafür. Kinder lassen sich schlecht auf Kommando fotografieren, deshalb warten wir lieber auf den Moment, der von selbst passiert.",
  },
  {
    q: "Wo findet das statt, bei uns zuhause?",
    a: "Möglich, genauso wie draußen an einem Ort, der zu eurem Alltag gehört. Wir entscheiden das gemeinsam im Vorgespräch.",
  },
  {
    q: "Wie viele Personen können dabei sein?",
    a: "So viele, wie zu eurem Moment gehören. Sag uns im Vorgespräch, wer dabei ist, dann passen wir Zeit und Umfang an.",
  },
];

export default function Page() {
  return (
    <FotografieCategoryPage
      kicker="Fotografie · Lifestyle"
      title="Momente, keine Inszenierung."
      intro="Für echte Augenblicke statt gestellter Szenen. Als Familienfotograf in Kiel begleiten wir Familien, Zuhause, den ganz normalen Tag, festgehalten, ohne ihn zu verändern."
      heroImage={{
        src: "/images/fotografie/arbeit-lifestyle.jpg",
        alt: "Echter Lachmoment, unbeobachtet",
      }}
      ablaufTitle="Wie ein Lifestyle-Termin abläuft"
      ablauf="Kein Ablaufplan mit festen Posen. Wir kommen dazu, während ihr das tut, was ohnehin ansteht, ein Vormittag zuhause, ein Nachmittag draußen, ein ganz gewöhnlicher Moment. Die Kamera tritt in den Hintergrund, bis niemand mehr an sie denkt, und bleibt es meistens für den Rest des Tages."
      preisAb={299}
      preisHinweis="Der genaue Umfang richtet sich danach, wie viele Menschen und wie viel Zeit dabei sind. Das besprechen wir im ersten Gespräch, transparent und ohne Druck."
      faqs={faqs}
      ctaText="Manchmal ist der unwichtigste Moment am Ende das Bild, das bleibt."
    />
  );
}
