import type { Metadata } from "next";
import { UnternehmenLeistungPage } from "@/components/shared/unternehmen-leistung-page";

export const metadata: Metadata = {
  title: "Brandkit für Neugründungen",
  description:
    "Brandkit für Neugründungen in Kiel und Schleswig-Holstein: von der Idee zur ersten sichtbaren Marke, mit Logo, Farbwelt, Typografie und erster Anwendung.",
  keywords: ["Brandkit für Neugründungen", "Branding für Gründer Kiel", "Corporate Design für Startups"],
  openGraph: {
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "Brandkit für Neugründungen · AR Media",
    description:
      "Brandkit für Neugründungen in Kiel und Schleswig-Holstein: von der Idee zur ersten sichtbaren Marke, mit Logo, Farbwelt, Typografie und erster Anwendung.",
  },
  twitter: {
    images: [{ url: "/twitter-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "Brandkit für Neugründungen · AR Media",
    description:
      "Brandkit für Neugründungen in Kiel und Schleswig-Holstein: von der Idee zur ersten sichtbaren Marke, mit Logo, Farbwelt, Typografie und erster Anwendung.",
  },
  alternates: { canonical: "/unternehmen/brandkit" },
};

export default function Page() {
  return (
    <UnternehmenLeistungPage
      slug="/unternehmen/brandkit"
      kicker="Unternehmen · Brandkit für Neugründungen"
      title="Ein Brandkit macht aus der Idee eine erste sichtbare Marke."
      heroText="Du musst noch keine fertige Marke haben. Du musst nur wissen, was du aufbauen willst. Ein Brandkit für Gründerinnen und Gründer in Kiel und Schleswig-Holstein, die aus einer Idee zum ersten Mal eine sichtbare Marke machen."
      problemTitle="Eine Idee, aber noch kein Gesicht."
      problemText="Der Businessplan steht, der erste Kunde ist vielleicht schon da, aber es gibt noch kein Logo, keine Farben, keine Website, nichts, worauf man zeigen kann. Jeder Tag ohne sichtbare Marke fühlt sich an wie ein Rückstand, den man eigentlich nicht hat, denn die Idee selbst ist längst da."
      denkansatzTitle="Unser Denkansatz"
      denkansatzText="Wir fangen nicht mit einem leeren Blatt an. Wir fangen mit dem an, was bei dir schon da ist, deine Idee, dein Geschäftsmodell, deine Persönlichkeit, und übersetzen genau das in eine erste sichtbare Form. Kein generisches Startup-Logo von der Stange, sondern ein System, das zu genau diesem Unternehmen passt."
      prozessSchritte={[
        { title: "Beobachten", text: "Wir hören uns an, was deine Idee ausmacht, nicht nur, was du verkaufst, sondern warum genau du." },
        { title: "Verstehen", text: "Wer sind deine ersten Kunden, und was müssen sie in drei Sekunden über dich verstehen?" },
        { title: "Gestalten", text: "Logo, Farben, Typografie und Bildsprache, als ein System, nicht als lose Teile." },
        { title: "Sichtbar machen", text: "Die ersten Anwendungen, von der Visitenkarte bis zur ersten Website, startklar für deinen Launch." },
      ]}
      caseStudies={[
        {
          name: "Royal Charming",
          text: "Nicht rebrandet, von Grund auf aufgebaut: von der Gründung bis zur Vermittlung aller neun Welpen in acht Wochen, mit Logo, Social-Media-Content, Website und Print aus einer Hand.",
          href: "/case-studies#royal-charming",
        },
      ]}
      leistungenTitle="Was im Brandkit enthalten ist"
      leistungen={[
        { title: "Logo und Signet", text: "Ein Zeichen, das in jeder Größe funktioniert, vom Social-Media-Profilbild bis zur Ladenfront." },
        { title: "Farbwelt und Typografie", text: "Feste Regeln von Anfang an, damit jede weitere Anwendung automatisch zusammenpasst." },
        { title: "Bildsprache", text: "Wie Fotos und Grafiken aussehen, damit auch dein erstes Bildmaterial sofort zu deiner Marke gehört." },
        { title: "Erste Anwendung, optional Website", text: "Visitenkarte, Social-Media-Auftritt und, wenn gebraucht, eine erste Website, startklar für den Launch." },
      ]}
      faqs={[
        { q: "Was ist der Unterschied zum normalen Branding-Angebot?", a: "Branding setzt meist bei einem bestehenden Unternehmen an, das schon läuft, aber noch keine klare Position hat. Brandkit ist für den Moment davor gedacht, wenn es die Idee schon gibt, aber noch gar keine Marke, kompakter und auf den Start zugeschnitten." },
        { q: "Ich habe noch kein fertiges Geschäftsmodell, reicht das?", a: "Ja. Je klarer die Idee, desto einfacher die Übersetzung, aber ein fertiges Geschäftsmodell ist keine Voraussetzung." },
        { q: "Bekomme ich auch eine Website?", a: "Kann Teil des Brandkits sein, wenn du sie zum Start brauchst. Wie viel davon sinnvoll ist, klären wir im Gespräch." },
        { q: "Wie lange dauert ein Brandkit-Projekt?", a: "Kompakter als ein klassisches Branding-Projekt, weil der Rahmen enger ist. Genauer lässt sich das im Erstgespräch einschätzen." },
      ]}
      ctaText="Deine Idee ist schon da. Wir machen sie zum ersten Mal sichtbar."
      ctaSecondaryLabel="Gespräch vereinbaren"
      relatedLink={{
        name: "Corporate Design",
        text: "Sobald die Idee steht, wird daraus ein vollständiges System.",
        href: "/unternehmen/corporate-design",
      }}
    />
  );
}
