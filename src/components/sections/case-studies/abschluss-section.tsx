import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

const paths = [
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/fotografie", label: "Fotografie" },
  { href: "/kita-schule", label: "Kita & Schule" },
];

/**
 * Abschluss. Trägt jetzt zwei Gedanken statt einem: zuerst die stille
 * Schlussfolgerung aus allen fünf Fallstudien (nie nur ein neues Zeichen,
 * immer eine Idee, die schon da war), dann, bewusst erst danach, ein
 * einzelner, leiser CTA statt des harten Doppel-CTA von /unternehmen: diese
 * Seite ist ein Proof-Hub, kein Funnel, ein Angebot zum Gespräch reicht.
 * Die drei Bereichs-Links bleiben als ruhige Sekundärnavigation darunter,
 * optisch bewusst leiser als der CTA, durch einen Trenner abgesetzt.
 */
export function AbschlussSection() {
  return (
    <section aria-label="Abschluss" className="bg-sand/25 px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal variant="fade">
          <p className="font-serif text-[clamp(1.625rem,3.6vw,2.25rem)] leading-[1.3] text-charcoal italic">
            Am Ende war es nie nur ein neues Zeichen. Es war immer eine Idee, die schon da war,
            und erst sichtbar werden musste.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Link
            href="/kontakt/projekt-besprechen"
            className="group inline-flex items-center gap-2 text-[17px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest"
          >
            <span className="relative pb-0.5">
              Projekt besprechen
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-charcoal/30 transition-colors duration-300 ease-out group-hover:bg-deep-forest"
              />
            </span>
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={0.18} className="mt-16">
          <span aria-hidden className="mx-auto block h-px w-8 bg-charcoal/15" />
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {paths.map((path) => (
              <li key={path.href}>
                <Link
                  href={path.href}
                  className="group relative pb-1 text-[13px] tracking-[0.04em] text-charcoal/70 uppercase transition-colors hover:text-deep-forest sm:text-[14px]"
                >
                  {path.label}
                  <span aria-hidden className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                    →
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-deep-forest transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
