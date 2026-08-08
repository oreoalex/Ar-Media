import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Persönlicher Abschluss statt Formular-Ende: dasselbe dokumentarische
 * Foto wie in FounderSection auf der Startseite, aber bewusst NICHT
 * dieselbe Formulierung mehr (frühere Version wiederholte den
 * "nicht aus einem Businessplan, sondern aus einer Beobachtung"-Satz fast
 * wortgleich, siehe Master-Brand-Audit: wer die Startseite bereits gelesen
 * hat, braucht die Ursprungsgeschichte hier kein zweites Mal, sondern eine
 * Antwort auf die tatsächliche Frage dieser Section, "Wer antwortet"). Bleibt
 * auf Off-White statt eines dunklen CTA-Bruchs: dieser Abschluss soll warm
 * und nah wirken, nicht laut, siehe Auftrag ("kein aggressiver CTA").
 */
export function AbschlussSection() {
  return (
    <section aria-label="Wer antwortet" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-3xl items-center gap-10 lg:grid-cols-[200px_1fr] lg:gap-14">
        <Reveal>
          <div className="relative aspect-3/4 w-full overflow-hidden bg-deep-forest">
            <Image
              src="/images/home/founder-alexander.jpg"
              alt={siteConfig.founder.name}
              fill
              sizes="(min-width: 1024px) 200px, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">Wer antwortet</h2>
          <span aria-hidden className="mt-3 block h-px w-8 bg-charcoal/20" />
          <p className="mt-5 text-[18px] leading-relaxed text-charcoal/80 lg:text-[19px]">
            Deine Nachricht landet nicht in einer Warteschlange, sondern direkt bei{" "}
            {siteConfig.founder.name}. Er liest sie selbst, bevor er antwortet, keine
            Weiterleitung, keine Standardfloskel. Genauso beginnt jede Zusammenarbeit: mit einem
            echten Gespräch, nicht mit einem Ticket.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
