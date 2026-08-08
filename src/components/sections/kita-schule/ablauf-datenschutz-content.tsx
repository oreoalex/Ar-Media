"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";

/**
 * Kita & Schule · Ablauf & Datenschutz. Zentraler Vertrauensanker laut IA.
 * Bewusst zurückhaltend formuliert: beschreibt den tatsächlichen Ablauf
 * (Zugang, Sichtbarkeit, Löschung auf Anfrage), ohne konkrete juristische
 * Zusicherungen ("DSGVO-zertifiziert", Paragrafen-Verweise) zu behaupten,
 * die eine rechtliche Prüfung voraussetzen würden. Die Route bleibt daher
 * bewusst weiterhin robots noindex (siehe page.tsx), bis diese Prüfung
 * stattgefunden hat, auch wenn der Inhalt inhaltlich fertig ist.
 */
const faqs = [
  {
    q: "Wer sieht die Fotos meines Kindes?",
    a: "Nur eure eigene Familie, über einen individuellen Zugang. Andere Eltern sehen ausschließlich die Bilder ihrer eigenen Kinder.",
  },
  {
    q: "Werden Bilder ohne unser Wissen für Werbung genutzt?",
    a: "Nein. Bilder aus Kita- und Schulterminen werden nur für die Bestellung der jeweiligen Familie verwendet, nicht anderweitig veröffentlicht.",
  },
  {
    q: "Kann ich verlangen, dass Bilder gelöscht werden?",
    a: "Ja, meldet euch bei uns, wir kümmern uns zeitnah darum.",
  },
  {
    q: "Wie lange bleiben die Bilder online?",
    a: "Für einen begrenzten Zeitraum, über den wir rechtzeitig informieren, bevor der Zugang endet.",
  },
];

export function AblaufDatenschutzContent() {
  return (
    <>
      <section className="bg-off-white px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Kita & Schule · Ablauf & Datenschutz
            </p>
            <h1 className="mx-auto mt-5 max-w-xl font-serif text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.2] text-charcoal italic">
              Was mit den Bildern eurer Kinder passiert.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-charcoal/70">
              Ein offener Blick auf Zugriff, Sichtbarkeit und Löschung, ohne Kleingedrucktes.
            </p>
            <Link
              href="/kita-schule"
              className="group mx-auto mt-8 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
            >
              <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Kita & Schule
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-label="Wer Zugriff hat" className="bg-sand/25 px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Wer Zugriff hat
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-charcoal/75">
              Jede Familie erhält einen eigenen, geschützten Zugang zur Online-Galerie. Zu sehen
              sind ausschließlich die Bilder des eigenen Kindes, nicht die der gesamten Gruppe.
              Die Einrichtung selbst verwaltet keine Bilder und hat keinen dauerhaften Zugriff
              auf die Galerie.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Speicherung und Löschung" className="bg-off-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Speicherung und Löschung
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-charcoal/75">
              Bilder bleiben für einen begrenzten Zeitraum zugänglich, damit Familien in Ruhe
              auswählen können. Auf Wunsch löschen wir Bilder vorzeitig, meldet euch dafür
              einfach direkt bei uns.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Häufige Fragen" className="bg-off-white px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-2xl border-t border-charcoal/10 pt-16">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Häufige Fragen
            </h2>
            <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <AccordionPrimitive.Root className="border-t border-charcoal/10">
              {faqs.map((faq) => (
                <AccordionPrimitive.Item key={faq.q} className="border-b border-charcoal/10">
                  <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left outline-none rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-forest/50">
                      <span className="text-[16px] font-medium text-charcoal lg:text-[17px]">{faq.q}</span>
                      <ChevronDown
                        aria-hidden
                        className="size-4 shrink-0 text-charcoal/70 transition-transform duration-300 group-aria-expanded:rotate-180"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionPrimitive.Panel className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up">
                    <p className="pb-6 text-[15px] leading-relaxed text-charcoal/70">{faq.a}</p>
                  </AccordionPrimitive.Panel>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </Reveal>
        </div>
      </section>
    </>
  );
}
