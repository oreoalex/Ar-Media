import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";

const paths = [
  { href: "/unternehmen", label: "Marketing" },
  { href: "/fotografie", label: "Fotografie" },
  { href: "/kita-schule", label: "Kitafotografie" },
];

/**
 * S07 · Abschluss — Final Creative Direction. Vollständig neu gedacht:
 * keine Buttons, keine Boxen mehr — drei editoriale Textlinks wie
 * Kapitelüberschriften, identisch inszeniert wie die drei Links im Hero
 * (bewusst gleiche Wortwahl und gleiche Ziele — Hero und Abschluss rahmen
 * dieselbe Entscheidung, einmal am Anfang, einmal am Ende der Reise).
 *
 * Direkt darunter, mit viel Weißraum abgesetzt: der finale Markenclaim
 * "Let me show you what's already there." — die Signatur der gesamten
 * Website. Er erscheint an dieser einen Stelle und nirgendwo sonst auf der
 * Seite (auch nicht im Footer, siehe dort). Der Besucher soll die Seite mit
 * genau diesem Gedanken verlassen.
 *
 * Trägt die "R"-Silhouette (echte Vektordaten, siehe brand-mark-r.tsx) als
 * großes, ruhiges Signature-Element — Gegenstück zum "A" in der
 * Haltung-Section. Zwei verschiedene Buchstaben an zwei verschiedenen
 * Marken-Momenten statt derselben Form zweimal.
 */
export function InvitationSection() {
  return (
    <section
      aria-label="Abschluss"
      className="relative overflow-hidden bg-deep-forest px-6 py-32 lg:py-48"
    >
      <BrandMarkR className="pointer-events-none absolute -right-[6vw] -bottom-[10%] h-[75%] w-auto text-off-white opacity-[0.06] sm:-right-[4vw]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal variant="fade">
          <p className="font-serif text-2xl text-off-white italic lg:text-3xl">
            Lass uns herausfinden, was für dich der richtige nächste Schritt ist.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 lg:mt-16">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {paths.map((path) => (
              <li key={path.href}>
                <Link
                  href={path.href}
                  className="group relative pb-1 text-[15px] tracking-[0.04em] text-off-white/80 uppercase transition-colors hover:text-off-white sm:text-[16px]"
                >
                  {path.label}
                  <span aria-hidden className="ml-2 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                    →
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-off-white transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-24 lg:mt-32">
          <p className="font-serif text-xl text-off-white/60 italic lg:text-2xl">
            „Let me show you what’s already there.“
          </p>
        </Reveal>
      </div>
    </section>
  );
}
