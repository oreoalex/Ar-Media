import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

/**
 * Unsere Leistungen — bewusst kein Leistungskatalog. Jede Zeile zeigt das
 * Problem, das sie löst, nicht was sie enthält (siehe Vorgabe). Editorial
 * Liste statt Feature-Cards: nummeriert, durch dünne Linien getrennt, Ziel
 * ist jeweils die reale Unterseite aus der Hauptnavigation (interne
 * Verlinkung). Direkt darunter ein leiser Zwischen-CTA — Funnel-Logik:
 * wer hier schon überzeugt ist, muss nicht bis zum Seitenende lesen.
 */
const leistungen = [
  {
    label: "01",
    name: "Branding",
    outcome: "Eine klare Position, bevor ein einziges Bild entsteht.",
    href: "/unternehmen/branding",
  },
  {
    label: "02",
    name: "Corporate Design",
    outcome: "Menschen erkennen deine Marke wieder.",
    href: "/unternehmen/corporate-design",
  },
  {
    label: "03",
    name: "Content Creation",
    outcome: "Aus einem Projekt wird sichtbare Substanz, nicht nur ein einzelner Post.",
    href: "/unternehmen/content-creation",
  },
  {
    label: "04",
    name: "Social Media",
    outcome: "Sichtbarkeit entsteht durch Kontinuität, nicht durch einzelne Posts.",
    href: "/unternehmen/social-media",
  },
  {
    label: "05",
    name: "Employer Branding",
    outcome: "Gute Mitarbeiter bewerben sich lieber.",
    href: "/unternehmen/employer-branding",
  },
  {
    label: "06",
    name: "Foto & Video",
    outcome: "Menschen vertrauen Gesichtern, nicht Stockfotos.",
    href: "/unternehmen/foto-video",
  },
  {
    label: "07",
    name: "Kampagnen",
    outcome: "Mehrere Kanäle, eine Botschaft, ein Ergebnis.",
    href: "/unternehmen/kampagnen",
  },
];

export function LeistungenSection() {
  return (
    <section aria-label="Unsere Leistungen" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/45 uppercase">
            Unsere Leistungen
          </p>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <h2 className="mt-6 max-w-xl text-[22px] leading-relaxed text-charcoal/80 lg:text-[24px]">
            Sieben Leistungsfelder, eine Idee: Sichtbarkeit.
          </h2>
        </Reveal>

        <ul className="mt-14 divide-y divide-charcoal/10 border-t border-charcoal/10">
          {leistungen.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.04}>
              <li>
                <Link href={item.href} className="group flex items-center justify-between gap-6 py-6">
                  <span className="flex items-baseline gap-5">
                    <span className="text-[13px] text-charcoal/35">{item.label}</span>
                    <span>
                      <span className="block text-[17px] font-medium text-charcoal transition-colors group-hover:text-deep-forest lg:text-[19px]">
                        {item.name}
                      </span>
                      <span className="mt-1 block text-[14px] text-charcoal/55 lg:text-[15px]">
                        {item.outcome}
                      </span>
                    </span>
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

        <Reveal delay={0.3} className="mt-14 text-center">
          <p className="text-[15px] text-charcoal/60">
            Passt das zu deinem Unternehmen?{" "}
            <Link
              href="/kontakt/projekt-besprechen"
              className="font-medium text-charcoal underline decoration-charcoal/30 underline-offset-4 transition-colors hover:text-deep-forest hover:decoration-deep-forest"
            >
              Lass uns sprechen
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
