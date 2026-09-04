import { Reveal } from "@/components/shared/reveal";
import { BrandTick } from "@/components/shared/brand-tick";
import { GhostNumeral } from "@/components/shared/ghost-numeral";

/**
 * Wie wir arbeiten. Fasst "Wie wir arbeiten" und "Der Prozess" aus dem
 * Struktur-Vorschlag zu einem Abschnitt zusammen — beide beantworten
 * dieselbe Frage ("wie läuft das ab"), zwei separate Sections dazu wären
 * Redundanz statt Storytelling. Vier Schritte, die exakt die Haltung
 * ("beginnt nie mit Gestaltung, sondern mit Beobachtung") konkret machen.
 */
const schritte = [
  {
    label: "01",
    title: "Beobachten",
    text: "Wir schauen uns dein Unternehmen an, bevor wir irgendetwas vorschlagen. Kein Standardpaket, kein Formular.",
  },
  {
    label: "02",
    title: "Verstehen",
    text: "Was macht dich aus? Was übersieht dein Umfeld bereits? Erst diese Antwort entscheidet, was folgt.",
  },
  {
    label: "03",
    title: "Gestalten",
    text: "Strategie, Design oder Bild, je nachdem, was dein Unternehmen tatsächlich sichtbarer macht.",
  },
  {
    label: "04",
    title: "Sichtbar machen",
    text: "Konsistent über die Kanäle hinweg, die für dein Unternehmen wirklich zählen, statt über alle gleichzeitig.",
  },
];

export function ProzessSection() {
  return (
    <section aria-label="Wie wir arbeiten" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="max-w-xl">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Wie wir arbeiten
          </h2>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {schritte.map((schritt, i) => (
            <div key={schritt.label} className="relative isolate">
              <GhostNumeral n={schritt.label} className="text-deep-forest/[0.07]" />
              <Reveal delay={i * 0.06} className="relative z-10">
                <p className="text-[13px] tracking-wide text-charcoal/70">{schritt.label}</p>
                <h3 className="mt-3 text-[19px] font-medium text-charcoal">{schritt.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">{schritt.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
