import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

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

export function NaechsterSchrittSection() {
  return (
    <section aria-label="Der nächste Schritt" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Womit dürfen wir dir helfen?
          </h2>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
        </Reveal>

        <ul className="mt-10 divide-y divide-charcoal/10 border-t border-charcoal/10">
          {wege.map((weg, i) => (
            <Reveal key={weg.href} delay={i * 0.05}>
              <li>
                <Link href={weg.href} className="group flex items-center justify-between gap-6 py-7">
                  <span>
                    <span className="block text-[18px] font-medium text-charcoal transition-colors group-hover:text-deep-forest lg:text-[20px]">
                      {weg.label}
                    </span>
                    <span className="mt-1 block text-[14px] text-charcoal/70 lg:text-[15px]">{weg.text}</span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    className="size-4 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-deep-forest"
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
