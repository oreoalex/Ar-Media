import type { Metadata } from "next";
import { FotografieCategoryPage } from "@/components/shared/fotografie-category-page";

export const metadata: Metadata = {
  title: "Business-Portraits",
  description:
    "Business-Portraits und Bewerbungsfotos in Kiel und Schleswig-Holstein, seriös und trotzdem echt. Ab 399 € pro Person, inklusive gewerblicher Nutzungsrechte.",
  keywords: ["Business Portrait Kiel", "Bewerbungsfoto Kiel", "Corporate Fotograf Schleswig-Holstein"],
  openGraph: {
    title: "Business-Portraits · AR Media",
    description:
      "Business-Portraits und Bewerbungsfotos in Kiel und Schleswig-Holstein, seriös und trotzdem echt. Ab 399 € pro Person, inklusive gewerblicher Nutzungsrechte.",
  },
  twitter: {
    title: "Business-Portraits · AR Media",
    description:
      "Business-Portraits und Bewerbungsfotos in Kiel und Schleswig-Holstein, seriös und trotzdem echt. Ab 399 € pro Person, inklusive gewerblicher Nutzungsrechte.",
  },
  alternates: { canonical: "/fotografie/business-portraits" },
};

const faqs = [
  {
    q: "Reicht ein Bewerbungsfoto vom Handy nicht auch?",
    a: "Für eine schnelle Bewerbung vielleicht. Für ein Profil, das ernst genommen werden soll, macht ein sauber belichtetes, echtes Portrait meist den Unterschied.",
  },
  {
    q: "Gibt es das auch für ganze Teams?",
    a: "Ja. Wir stimmen mit euch einen Termin ab, an dem wir mehrere Personen nacheinander im selben Look fotografieren, für ein einheitliches Erscheinungsbild.",
  },
  {
    q: "Wie unterscheidet sich das von einem klassischen Bewerbungsfoto-Studio?",
    a: "Wir arbeiten mit derselben Haltung wie bei allen anderen Shootings: kein starres Kommando zum Lächeln, sondern ein paar Minuten, bis der Ausdruck echt wirkt, nicht einstudiert.",
  },
  {
    q: "Passt das auch zu unserem Corporate Design?",
    a: "Sag uns vorher, wofür die Bilder eingesetzt werden, Website, LinkedIn, Print. Wir stimmen Licht und Hintergrund entsprechend ab. Für größere Marken- und Content-Vorhaben arbeiten wir außerdem mit unserer Unternehmen-Seite zusammen.",
  },
];

export default function Page() {
  return (
    <FotografieCategoryPage
      kicker="Fotografie · Business-Portraits"
      title="Seriös und trotzdem echt."
      intro="Für Menschen, die im Beruf mehr sind als ihr Lebenslaufbild. Ein Business-Portrait in Kiel, das nach der Person aussieht, nicht nach der Stockfoto-Version davon."
      heroImage={{
        src: "/images/unternehmen/hero-kamera.jpg",
        alt: "Kameraausrüstung im Detail",
      }}
      ablaufTitle="Wie ein Business-Portrait-Termin abläuft"
      ablauf="Kurz, konzentriert und trotzdem ohne Hetze. Ein kurzes Gespräch vorab klärt, wofür das Bild gebraucht wird und welcher Look zu deiner Rolle passt. Vor Ort geht es dann schnell, meist reichen wenige Minuten pro Person, damit auch am Ende eines vollen Tages noch ein ruhiges, glaubwürdiges Bild dabei herauskommt."
      preisAb={399}
      preisHinweis="Preis pro Person, inklusive Nutzungsrechten für den geschäftlichen Einsatz. Bei mehreren Personen oder ganzen Teams sprechen wir Zeit und Umfang gemeinsam ab, transparent und ohne versteckte Zusatzkosten."
      faqs={faqs}
      ctaText="Ein Bild, das aussieht wie du an einem guten Arbeitstag."
      relatedLink={{
        name: "Foto & Video für Unternehmen",
        text: "Braucht ihr Bildmaterial für ein ganzes Team oder Unternehmen statt für eine einzelne Person?",
        href: "/unternehmen/foto-video",
      }}
    />
  );
}
