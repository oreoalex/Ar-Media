import type { Metadata } from "next";
import { UnternehmenLeistungPage } from "@/components/shared/unternehmen-leistung-page";

export const metadata: Metadata = {
  title: "Social Media",
  description:
    "Social-Media-Strategie und -Betreuung für Unternehmen in Kiel und Schleswig-Holstein: Sichtbarkeit durch Kontinuität statt einzelner Posts.",
  keywords: ["Social Media Kiel", "Social-Media-Betreuung Unternehmen", "Instagram Marketing Schleswig-Holstein"],
  openGraph: {
    title: "Social Media · AR Media",
    description:
      "Social-Media-Strategie und -Betreuung für Unternehmen in Kiel und Schleswig-Holstein: Sichtbarkeit durch Kontinuität statt einzelner Posts.",
  },
  twitter: {
    title: "Social Media · AR Media",
    description:
      "Social-Media-Strategie und -Betreuung für Unternehmen in Kiel und Schleswig-Holstein: Sichtbarkeit durch Kontinuität statt einzelner Posts.",
  },
  alternates: { canonical: "/unternehmen/social-media" },
};

export default function Page() {
  return (
    <UnternehmenLeistungPage
      kicker="Unternehmen · Social Media"
      title="Von planlosem Posten zu konsistenter Präsenz."
      heroText="Sichtbarkeit entsteht durch Kontinuität, nicht durch einzelne Posts. Als Social-Media-Agentur in Kiel übernehmen wir Betreuung und Management eures Kanals."
      problemTitle="Ein Kanal, der seit Monaten stillsteht."
      problemText="Ein Instagram-Profil mit dem letzten Beitrag vor drei Monaten. Eine Story-Funktion, die niemand nutzt, weil die Zeit fehlt. Dabei passiert im Unternehmen längst genug, das sich zu zeigen lohnt, es fehlt nur die Regelmäßigkeit, es auch zu tun."
      denkansatzTitle="Unser Denkansatz"
      denkansatzText="Ein einzelner viraler Beitrag verändert selten etwas. Wiedererkennung entsteht, wenn jemand deinen Kanal über Wochen immer wieder sieht, in derselben Sprache, mit denselben Farben, in einem verlässlichen Rhythmus. Deshalb ist unser erstes Ziel nie Reichweite, sondern Kontinuität."
      prozessSchritte={[
        { title: "Beobachten", text: "Welche Kanäle nutzt du bereits, und welche davon erreichen wirklich die richtigen Menschen?" },
        { title: "Verstehen", text: "Was willst du über diesen Kanal erreichen, Sichtbarkeit, Vertrauen oder direkte Anfragen?" },
        { title: "Gestalten", text: "Ein Redaktionsplan und Content, der zu deiner Marke passt, nicht zu einem kurzlebigen Trend." },
        { title: "Sichtbar machen", text: "Regelmäßige Umsetzung, ausgewertet und angepasst, statt einmal gestartet und dann sich selbst überlassen." },
      ]}
      caseStudies={[
        { name: "Royal Charming", text: "Alle 9 Welpen innerhalb von 8 Wochen erfolgreich vermittelt, allein über Website und Social Media, vor allem Instagram.", href: "/case-studies#royal-charming" },
        { name: "Zeltlager Adlerhorst", text: "Laufende Social-Media-Betreuung, von der Helfersuche bis zum Jubiläum.", href: "/case-studies#adlerhorst" },
      ]}
      leistungenTitle="Was zu Social-Media-Betreuung und -Management gehört"
      leistungen={[
        { title: "Strategie", text: "Welche Kanäle für dein Unternehmen wirklich zählen, statt auf allen gleichzeitig präsent sein zu wollen." },
        { title: "Redaktionsplan", text: "Ein verlässlicher Rhythmus statt spontaner Einzelposts." },
        { title: "Umsetzung", text: "Von der Idee bis zum veröffentlichten Beitrag, inklusive Bild- und Textproduktion." },
        { title: "Auswertung", text: "Was tatsächlich funktioniert, nicht nur, was auf den ersten Blick gut aussieht." },
      ]}
      faqs={[
        { q: "Welche Plattform ist die richtige für uns?", a: "Kommt auf deine Zielgruppe an, nicht auf einen Trend. Das klären wir gemeinsam im ersten Gespräch." },
        { q: "Wie schnell sieht man Ergebnisse?", a: "Sichtbarkeit durch Kontinuität braucht Zeit, meistens mehrere Monate. Wer eine schnelle Einzelaktion sucht, ist eher bei Kampagnen richtig." },
        { q: "Übernehmt ihr auch Kommentare und Nachrichten?", a: "Kann Teil der Zusammenarbeit sein, klären wir individuell, je nachdem, wie viel Kapazität euer Team selbst hat." },
        { q: "Brauchen wir schon Kanäle, oder fangen wir bei null an?", a: "Beides ist möglich. Manche Projekte bauen etwas Bestehendes aus, andere beginnen wirklich neu." },
      ]}
      ctaText="Konsistenz schlägt Viralität, jedes Mal."
    />
  );
}
