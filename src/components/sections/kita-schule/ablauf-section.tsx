import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

/**
 * Wie es abläuft — Phase 4 (Sicherheit). Trägt zusätzlich die im alten
 * Wireframe vorgesehene "Gabelung Einrichtungen/Eltern" als leichtgewichtiges
 * Fork-Element innerhalb derselben Section statt als eigene Phase, damit die
 * Seite bei den vom Prompt vorgegebenen sieben Sections bleibt.
 */
const schritte = [
  { label: "01", title: "Termin vereinbaren", text: "Ein kurzes Gespräch klärt Zeitpunkt und Ablauf, abgestimmt auf euren Kita- oder Schulalltag." },
  { label: "02", title: "Wir fotografieren vor Ort", text: "Ohne den Tagesablauf zu unterbrechen, mit Zeit für jedes Kind." },
  { label: "03", title: "Eltern bestellen selbst", text: "Über ein datenschutzkonformes Onlinesystem, ohne dass die Einrichtung etwas verwaltet." },
];

export function AblaufSection() {
  return (
    <section aria-label="Wie es abläuft" className="bg-sand/25 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/45 uppercase">
            Wie es abläuft
          </p>
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          <h2 className="mt-6 max-w-xl text-[22px] leading-relaxed text-charcoal/80 lg:text-[24px]">
            Drei Schritte, keiner davon bei euch.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {schritte.map((schritt, i) => (
            <Reveal key={schritt.label} delay={i * 0.06}>
              <p className="text-[13px] tracking-wide text-charcoal/35">{schritt.label}</p>
              <h3 className="mt-2 text-[17px] font-medium text-charcoal">{schritt.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/65">{schritt.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 grid gap-6 border-t border-charcoal/10 pt-10 sm:grid-cols-2">
            <Link href="/kita-schule/einrichtungen" className="group flex items-center justify-between gap-4">
              <span>
                <span className="block text-[16px] font-medium text-charcoal transition-colors group-hover:text-deep-forest">
                  Für Einrichtungen
                </span>
                <span className="mt-1 block text-[14px] text-charcoal/55">
                  Ablauf im Detail, für Kitaleitung und Träger.
                </span>
              </span>
              <ArrowRight aria-hidden className="size-4 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-deep-forest" />
            </Link>
            <Link href="/kita-schule/eltern" className="group flex items-center justify-between gap-4">
              <span>
                <span className="block text-[16px] font-medium text-charcoal transition-colors group-hover:text-deep-forest">
                  Für Eltern
                </span>
                <span className="mt-1 block text-[14px] text-charcoal/55">
                  Bildbeispiele ansehen und den Bestellweg verstehen.
                </span>
              </span>
              <ArrowRight aria-hidden className="size-4 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-deep-forest" />
            </Link>
          </div>
          <Link
            href="/kita-schule/ablauf-datenschutz"
            className="group mt-8 inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-charcoal/60 transition-colors hover:text-deep-forest"
          >
            Mehr zu Ablauf & Datenschutz
            <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
