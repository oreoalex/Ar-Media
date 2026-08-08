import type { Metadata } from "next";
import { UnternehmenLeistungPage } from "@/components/shared/unternehmen-leistung-page";

export const metadata: Metadata = {
  title: "Employer Branding",
  description:
    "Employer Branding und Recruiting-Content für Unternehmen in Kiel und Schleswig-Holstein: echte Einblicke statt austauschbarer Stellenanzeigen.",
  keywords: ["Employer Branding Kiel", "Recruiting Content Schleswig-Holstein", "Mitarbeiter gewinnen"],
  alternates: { canonical: "/unternehmen/employer-branding" },
};

export default function Page() {
  return (
    <UnternehmenLeistungPage
      kicker="Unternehmen · Employer Branding"
      title="Sichtbar werden als Arbeitgeber, nicht nur als Marke."
      heroText="Gute Mitarbeiter bewerben sich lieber, wenn sie vorher schon ein echtes Bild davon haben, wo sie arbeiten würden."
      problemTitle="Ein guter Arbeitsplatz, den niemand sieht."
      problemText="Intern ein gutes Team, echter Zusammenhalt, faire Bedingungen, aber nach außen zeigt sich davon kaum etwas. Stellenanzeigen wirken generisch, die Karriereseite unpersönlich, potenzielle Bewerber sehen nirgends, was das Unternehmen als Arbeitgeber tatsächlich ausmacht."
      denkansatzTitle="Unser Denkansatz"
      denkansatzText="Dieselbe Idee wie bei jeder anderen Marke: Wir behaupten nicht, was für ein guter Arbeitgeber ein Unternehmen ist, wir zeigen, was davon bereits stimmt, echte Menschen, echte Situationen, keine gestellten Stockfotos vom Konferenztisch."
      prozessSchritte={[
        { title: "Beobachten", text: "Wie es bei euch im Alltag wirklich aussieht, nicht wie es eine Stellenanzeige behaupten würde." },
        { title: "Verstehen", text: "Was potenzielle Bewerber tatsächlich wissen wollen, bevor sie sich melden." },
        { title: "Gestalten", text: "Bilder, Videos und Texte von echten Mitarbeitern statt austauschbarer Recruiting-Floskeln." },
        { title: "Sichtbar machen", text: "Auf Karriereseite, Social Media und in Stellenanzeigen, konsistent statt einmalig." },
      ]}
      caseStudies={[
        { name: "Zeltlager Adlerhorst", text: "Auch bei der ehrenamtlichen Helfersuche fürs Zeltlager trägt derselbe Gedanke: zeigen statt behaupten.", href: "/case-studies#adlerhorst" },
      ]}
      leistungenTitle="Was zu Employer Branding gehört"
      leistungen={[
        { title: "Mitarbeiter-Portraits", text: "Echte Gesichter statt Symbolbilder, für Karriereseite und Stellenanzeigen." },
        { title: "Content für Bewerber", text: "Einblicke in den Alltag, die zeigen, wie die Arbeit bei euch tatsächlich aussieht." },
        { title: "Recruiting über Social Media", text: "Sichtbarkeit dort, wo potenzielle Bewerber ohnehin schon unterwegs sind." },
        { title: "Karriereseite", text: "Eine eigene Seite, oder ein Bereich innerhalb der bestehenden Website, konsistent mit dem übrigen Auftritt." },
      ]}
      faqs={[
        { q: "Ist das nur für große Unternehmen relevant?", a: "Nein, gerade kleinere Unternehmen mit echtem Zusammenhalt profitieren davon, weil dieser Unterschied bisher oft unsichtbar bleibt." },
        { q: "Brauchen wir eine eigene Karriereseite?", a: "Nicht zwingend, oft reicht ein eigener, gut sichtbarer Bereich innerhalb der bestehenden Website." },
        { q: "Reicht Social Media allein?", a: "Als Ergänzung ja, als einziger Kanal selten, die meisten Bewerber informieren sich an mehreren Stellen." },
      ]}
      ctaText="Der beste Arbeitsplatz nützt nichts, wenn niemand davon weiß."
    />
  );
}
