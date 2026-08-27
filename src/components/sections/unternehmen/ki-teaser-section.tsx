import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

/**
 * KI-Teaser auf der Unternehmen-Hub-Seite. Ersetzt an dieser Stelle den
 * früheren Brandkit-Teaser (Brandkit ist jetzt Punkt 08 in der
 * LeistungenSection-Liste selbst). Kein Bausteine-Raster wie beim
 * Brandkit-Teaser: /unternehmen/ki ist eine Haltungs-/Einwandseite, keine
 * Leistung mit Bestandteilen, ein drei-Kacheln-Raster wäre hier erfunden.
 * Gleicher Sand-Hintergrund, gleiche Position im Rhythmus, damit sich die
 * Fläche weiterhin wie ein bewusster Bruch anfühlt statt wie ein weiterer
 * Leistungspunkt.
 */
export function KiTeaserSection() {
  return (
    <section aria-label="Warum nicht einfach mit KI?" className="bg-sand/25 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Eine Haltung
          </p>
          <h2 className="mt-5 font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] leading-[1.3] text-charcoal italic">
            Warum nicht einfach mit KI?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-charcoal/70">
            Kannst du machen. Eine KI liefert dir in Sekunden fünfzig Vorschläge. Was sie nicht liefert,
            ist die Antwort auf die eigentliche Frage: welcher davon tatsächlich zu dir passt.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Link
            href="/unternehmen/ki"
            className="group inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest"
          >
            <span className="relative pb-0.5">
              Mehr dazu
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-charcoal/30 transition-colors duration-300 ease-out group-hover:bg-deep-forest"
              />
            </span>
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
