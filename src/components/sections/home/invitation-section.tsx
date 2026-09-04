import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";

const paths = [
  { href: "/unternehmen", label: "Unternehmen" },
  { href: "/fotografie", label: "Fotografie" },
  { href: "/kita-schule", label: "Kita & Schule" },
];

/**
 * S07 · Abschluss — Final Creative Direction. Vollständig neu gedacht:
 * keine Buttons, keine Boxen mehr — drei editoriale Textlinks wie
 * Kapitelüberschriften, identisch inszeniert wie die drei Links im Hero
 * (gleiche Ziele — Hero und Abschluss rahmen dieselbe Entscheidung, einmal
 * am Anfang, einmal am Ende der Reise). Labels bewusst identisch mit der
 * Hauptnavigation und der Fork-Section ("Unternehmen" / "Kita & Schule"
 * statt "Marketing" / "Kitafotografie"): dieselbe Zieladresse sollte auf
 * derselben Seite nicht unter zwei verschiedenen Namen auftauchen.
 *
 * Direkt darunter, mit viel Weißraum abgesetzt: der finale Markenclaim
 * "Let me show you what's already there." — die Signatur der gesamten
 * Website. Er erscheint an dieser einen Stelle und nirgendwo sonst auf der
 * Seite (auch nicht im Footer, siehe dort). Der Besucher soll die Seite mit
 * genau diesem Gedanken verlassen.
 *
 * Trägt die "R"-Silhouette (echte Vektordaten, siehe brand-mark-r.tsx) —
 * anders als die stille 4-6%-Wasserzeichen-Variante derselben Form auf den
 * CTA-Sections (Referenz-Review: "dominante R-Silhouette als eigenständiges
 * Gestaltungselement"). An genau dieser einen Stelle bewusst groß und
 * sichtbar statt nur angedeutet: der Abschluss ist der einzige Ort der
 * Seite mit diesem Klimax-Status (siehe fork-section.tsx-Kommentar zu
 * bg-sand/12 — "der Klimax soll einmalig bleiben"), deshalb auch die
 * einzige Stelle, an der die Silhouette selbst zum Klimax gehört statt nur
 * leise mitzulaufen. Gegenstück zum "A" in der Haltung-Section, das
 * weiterhin als Wasserzeichen bleibt.
 */
export function InvitationSection() {
  return (
    <section
      aria-label="Abschluss"
      className="relative overflow-hidden bg-deep-forest px-6 py-32 lg:py-48"
    >
      <BrandMarkR className="pointer-events-none absolute -right-[2vw] -bottom-[12%] h-[115%] w-auto text-off-white opacity-[0.14] sm:-right-[1vw] lg:h-[130%]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal variant="fade">
          <p className="font-serif text-2xl font-bold tracking-tight text-off-white lg:text-3xl">
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
          <p className="font-serif text-xl font-bold tracking-tight text-off-white/60 lg:text-2xl">
            „Let me show you what’s already there.“
          </p>
        </Reveal>
      </div>
    </section>
  );
}
