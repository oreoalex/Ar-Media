import { Reveal } from "@/components/shared/reveal";

/**
 * Leistungen — neue Section zwischen Beobachtung und Haltung. Bisher als
 * einzige der drei Landingpage-Säulen ohne scannbare Leistungsübersicht:
 * Unternehmen und Fotografie haben je eine editoriale Leistungsliste, Kita &
 * Schule sprang direkt von der Problem- zur Haltungs-Section. Gleiches
 * Listen-Pattern wie dort (Kicker + Linie + nummerierte Zeilen), aber ohne
 * Links: die Weiche Einrichtungen/Eltern folgt bereits in der Ablauf-Section,
 * diese Liste ordnet nur ein, was AR Media überhaupt fotografiert, bevor die
 * beiden Zielgruppen-Pfade beginnen.
 */
const leistungen = [
  {
    label: "01",
    name: "Kitafotografie & Kindergartenfotografie",
    outcome: "Vom Portrait bis zum Gruppenbild, im gewohnten Umfeld eurer Einrichtung, ohne künstliche Kulisse.",
  },
  {
    label: "02",
    name: "Schulfotografie & Klassenfotos",
    outcome: "Als Schulfotograf für einzelne Portraits und das klassische Klassenfoto, ohne den Unterricht lange zu unterbrechen.",
  },
  {
    label: "03",
    name: "Einschulungsfotos",
    outcome: "Der erste Schultag, einmalig und besonders, ruhig festgehalten statt zwischen Tür und Angel fotografiert.",
  },
];

export function LeistungenSection() {
  return (
    <section aria-label="Was wir fotografieren" className="bg-sand/25 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Was wir fotografieren
          </p>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
        </Reveal>

        <ul className="mt-14 divide-y divide-charcoal/10 border-t border-charcoal/10">
          {leistungen.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <li className="flex items-baseline gap-5 py-6">
                <span className="text-[13px] text-charcoal/70">{item.label}</span>
                <span>
                  <span className="block text-[17px] font-medium text-charcoal lg:text-[19px]">
                    {item.name}
                  </span>
                  <span className="mt-1 block max-w-md text-[14px] leading-relaxed text-charcoal/70 lg:text-[15px]">
                    {item.outcome}
                  </span>
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
