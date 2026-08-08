import type { Metadata } from "next";
import { UnternehmenLeistungPage } from "@/components/shared/unternehmen-leistung-page";

export const metadata: Metadata = {
  title: "Kampagnen",
  description:
    "Marketingkampagnen für Unternehmen in Kiel und Schleswig-Holstein: mehrere Leistungen aus einer Idee, über Print, Social Media und Web hinweg.",
  keywords: ["Kampagne Kiel", "Marketingkampagne Schleswig-Holstein", "Print und Social Media Kampagne"],
  alternates: { canonical: "/unternehmen/kampagnen" },
};

export default function Page() {
  return (
    <UnternehmenLeistungPage
      kicker="Unternehmen · Kampagnen"
      title="Mehrere Leistungen, eine gemeinsame Klammer."
      heroText="Eine Kampagne funktioniert nur, wenn jedes einzelne Teil aus derselben Idee kommt, nicht aus mehreren zufällig kombinierten."
      problemTitle="Einzelne Aktionen ohne roten Faden."
      problemText="Ein Flyer hier, ein Social-Media-Post dort, eine Ankündigung auf der Website, die alle für sich genommen okay aussehen, aber nicht wie Teile derselben Sache wirken. Am Ende bleibt weniger hängen, als die einzelnen Teile eigentlich hergeben würden."
      denkansatzTitle="Unser Denkansatz"
      denkansatzText="Eine Kampagne ist kein zusätzliches Produkt neben Branding, Fotografie oder Social Media, sie ist die Klammer, die mehrere dieser Leistungen für einen konkreten Anlass zusammenführt: eine Aktion, ein Jubiläum, eine Spendenpatenschaft, ein Produktstart."
      prozessSchritte={[
        { title: "Beobachten", text: "Welcher Anlass steht an, und was ist das eigentliche Ziel dahinter?" },
        { title: "Verstehen", text: "Welche Kanäle erreichen die Menschen, die wirklich erreicht werden sollen?" },
        { title: "Gestalten", text: "Eine gemeinsame Idee, konsequent umgesetzt über Print, Social Media und Web." },
        { title: "Sichtbar machen", text: "Rollout über alle beteiligten Kanäle, zeitlich abgestimmt statt zufällig verteilt." },
      ]}
      caseStudies={[
        { name: "Zeltlager Adlerhorst", text: "Die Spendenpatenschaft-Kampagne fürs Zeltlager, von Flyer bis Broschüre, aus einer Idee heraus.", href: "/case-studies#adlerhorst" },
      ]}
      leistungenTitle="Was zu einer Kampagne gehört"
      leistungen={[
        { title: "Konzept", text: "Eine Idee, die für Print, Social Media und Web gleichermaßen funktioniert." },
        { title: "Umsetzung über Kanäle", text: "Flyer, Broschüren, Social-Media-Content und Web-Elemente aus einer Hand." },
        { title: "Zeitliche Planung", text: "Ein Rollout, der zum Anlass passt, statt alles auf einmal oder zu spät zu veröffentlichen." },
        { title: "Bild- und Textmaterial", text: "Fotografie, Grafik und Text, die zueinander passen, weil sie aus derselben Idee entstehen." },
      ]}
      faqs={[
        { q: "Wie lange dauert die Planung einer Kampagne?", a: "Kommt auf den Umfang an, klären wir im ersten Gespräch, abhängig von Anlass und Zeitpunkt." },
        { q: "Muss ich schon ein festes Budget haben?", a: "Nein, wir entwickeln gemeinsam, was für Anlass und Möglichkeiten sinnvoll ist." },
        { q: "Funktioniert das auch für einmalige Aktionen?", a: "Ja, gerade dafür sind Kampagnen gedacht, im Unterschied zur laufenden Social-Media-Betreuung." },
        { q: "Brauchen wir für eine Kampagne auch neues Corporate Design?", a: "Nicht zwingend, häufig arbeiten wir innerhalb eures bestehenden Systems, wie bei der Spendenpatenschaft-Kampagne fürs Zeltlager Adlerhorst." },
      ]}
      ctaText="Eine Idee, konsequent umgesetzt, wirkt mehr als fünf einzelne Aktionen."
    />
  );
}
