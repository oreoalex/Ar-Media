import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandTick } from "@/components/shared/brand-tick";

/**
 * Ersetzt bewusst ein einzelnes Einheitsformular: Die Seite folgt der
 * bereits dokumentierten IA-Entscheidung ("Entscheidung 8"), drei eigene,
 * zugeschnittene Formulare statt eines generischen Projektart-Dropdowns.
 * Diese Section ist die ruhige Weiche dorthin, mit den bereits an anderer
 * Stelle etablierten, echten Einstiegs-Formulierungen je Bereich.
 */
const wege = [
  {
    label: "Für Unternehmen",
    text: "Marketing, Branding oder Corporate Design.",
    href: "/kontakt/projekt-besprechen",
  },
  {
    label: "Für Fotografie",
    text: "Portrait, Paar, Lifestyle oder Business-Portraits.",
    href: "/kontakt/shooting-anfragen",
  },
  {
    label: "Für Kita & Schule",
    text: "Kitafotografie und Schulfotografie.",
    href: "/kontakt/kita-kennenlernen",
  },
];

/**
 * Ein Farbblock pro Weg statt einer einzelnen, editorialen Zeilen-Liste:
 * drei gleichwertige, harte Flächen aus der Markenpalette (Deep Forest /
 * Sand / Charcoal), keine erfundenen Zusatzfarben. "Hart" im Sinn des
 * Referenz-Reviews heißt hier: die Fläche selbst trägt die Unterscheidung,
 * nicht nur eine dünne Trennlinie zwischen sonst identischen Zeilen.
 */
const toneClass = [
  "bg-deep-forest text-off-white hover:bg-deep-forest/95",
  "bg-sand text-charcoal hover:bg-sand/90",
  "bg-charcoal text-off-white hover:bg-charcoal/90",
];
const toneSubClass = ["text-off-white/75", "text-charcoal/70", "text-off-white/70"];

export function NaechsterSchrittSection() {
  return (
    <section aria-label="Der nächste Schritt" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="max-w-xl">
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Womit dürfen wir dir helfen?
          </h2>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
        </Reveal>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm bg-charcoal/10 sm:grid-cols-3">
          {wege.map((weg, i) => (
            <Reveal key={weg.href} delay={i * 0.05} className="h-full">
              <li className="h-full">
                <Link
                  href={weg.href}
                  className={`group flex h-full flex-col justify-between gap-10 px-7 py-9 transition-colors ${toneClass[i]}`}
                >
                  <span>
                    <span className="block text-[18px] font-medium lg:text-[20px]">{weg.label}</span>
                    <span className={`mt-2 block text-[14px] lg:text-[15px] ${toneSubClass[i]}`}>
                      {weg.text}
                    </span>
                  </span>
                  <BrandArrow
                    aria-hidden
                    className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
