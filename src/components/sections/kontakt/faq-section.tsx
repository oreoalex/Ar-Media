"use client";

import { ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";

/**
 * Häufige Fragen speziell zum ersten Kontakt, bewusst nicht identisch mit
 * dem FAQ auf /unternehmen (andere Fragen, engerer Fokus auf "was passiert,
 * wenn ich mich melde"). Wo eine Antwort bereits an anderer Stelle real
 * etabliert ist (Budget, regionale Reichweite, kein fertiges Briefing
 * nötig), wird sie hier wiederverwendet statt neu erfunden. Kein
 * FAQPage-JSON-LD hier, das trägt bereits jede der drei Zielseiten
 * (/kontakt/projekt-besprechen etc.) mit ihren eigenen, spezifischeren
 * Fragen.
 */
const faqs = [
  {
    q: "Was kostet ein Projekt?",
    a: "Kommt auf das Projekt an. Deshalb beginnt jedes Projekt mit einem Gespräch statt mit einem Pauschalpreis. Für Fotografie-Termine gibt es transparente Einstiegspreise, die direkt bei der jeweiligen Kategorie stehen.",
  },
  {
    q: "Muss ich schon eine konkrete Idee haben?",
    a: "Nein. Die meisten Projekte beginnen mit einem Gespräch, nicht mit einem fertigen Briefing. Wir helfen dabei, die eigentliche Frage erst zu finden.",
  },
  {
    q: "Arbeitet AR Media nur regional?",
    a: "Der Großteil unserer Projekte entsteht in Kiel und Schleswig-Holstein. Überregionale Zusammenarbeit ist möglich, sofern das Projekt dazu passt.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Kommt stark auf Umfang und Art des Projekts an, das besprechen wir im ersten Gespräch, nicht vorab pauschal.",
  },
  {
    q: "Wie schnell erhalte ich eine Antwort?",
    a: "In der Regel innerhalb weniger Werktage.",
  },
];

export function FaqSection() {
  return (
    <section aria-label="Häufige Fragen" className="bg-off-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl">
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
  );
}
