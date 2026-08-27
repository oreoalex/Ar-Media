import type { Metadata } from "next";
import { FotografieCategoryPage } from "@/components/shared/fotografie-category-page";

export const metadata: Metadata = {
  title: "Portrait",
  description:
    "Portraitfotografie in Kiel und Schleswig-Holstein, ohne Posen und ohne künstliche Inszenierung. Ab 249 €.",
  keywords: ["Portraitfotograf Kiel", "Portraitfotografie Schleswig-Holstein", "Fotograf Kiel"],
  alternates: { canonical: "/fotografie/portrait" },
};

const faqs = [
  {
    q: "Ich bin vor der Kamera unsicher, geht das trotzdem?",
    a: "Gerade dafür ist dieses Format gedacht. Wir beginnen mit einem Gespräch, nicht mit der Kamera, und fotografieren erst, wenn du angekommen bist.",
  },
  {
    q: "Wo findet das Shooting statt?",
    a: "Draußen, an einem Ort, der zu dir passt, in Kiel oder Umgebung. Wir sprechen das vorher gemeinsam durch.",
  },
  {
    q: "Wie viele Bilder bekomme ich am Ende?",
    a: "Eine sorgfältig ausgewählte, bearbeitete Reihe, keine Rohdatenflut. Den genauen Umfang legen wir im Vorgespräch fest.",
  },
  {
    q: "Wie schnell bekomme ich meine Bilder?",
    a: "Wir nennen dir einen konkreten Liefertermin im Vorgespräch, damit du planen kannst.",
  },
];

export default function Page() {
  return (
    <FotografieCategoryPage
      slug="/fotografie/portrait"
      kicker="Fotografie · Portrait"
      title="Ein ehrliches Bild von dir."
      intro="Für Menschen, die sich selbst lange nicht mehr wirklich gesehen haben. Ein Portraittermin in Kiel, ohne Anweisungen, wie du zu stehen oder zu lächeln hast."
      heroImage={{
        src: "/images/fotografie/arbeit-03.jpg",
        alt: "Natürliches Portrait im Tageslicht",
      }}
      ablaufTitle="Wie ein Portrait-Termin abläuft"
      ablauf="Wir beginnen mit einem kurzen Gespräch, vor Ort oder vorab telefonisch, damit die Kamera nicht das erste ist, was zwischen uns steht. Danach nehmen wir uns Zeit: für Ankommen, für die ersten unsicheren Minuten, und für den Moment danach, in dem das nicht mehr auffällt. Am Ende steht eine bearbeitete Auswahl, die nach dir aussieht, nicht nach einer Pose."
      preisAb={249}
      preisHinweis="Der genaue Umfang, Ort und Zeitpunkt besprechen wir im ersten, unverbindlichen Gespräch. Keine versteckten Zusatzkosten, keine Paketentscheidung vorab."
      faqs={faqs}
      ctaText="Das Bild von dir, das du wirklich magst, ist wahrscheinlich noch nicht gemacht."
    />
  );
}
