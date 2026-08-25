"use client";

import { ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";

/**
 * FAQ. Nutzt die vorhandene Accordion-Primitive, aber komplett eigenes
 * Styling statt der Standard-shadcn-Optik (kein Border-Radius-Chip, keine
 * kleine Schrift) — soll wie ein ruhiger, editorialer Frage-Block wirken,
 * nicht wie eine Software-Komponente. Fünf reale, häufige Fragen statt
 * beliebiger Lückenfüller.
 */
const faqs = [
  {
    q: "Für wen ist AR Media geeignet?",
    a: "Für Unternehmer, Selbstständige und kleine bis mittelständische Unternehmen, die wissen, dass ihre Außendarstellung nicht ihrer tatsächlichen Qualität entspricht.",
  },
  {
    q: "Muss ich schon genau wissen, was ich brauche?",
    a: "Nein. Die meisten Projekte beginnen mit einem Gespräch, nicht mit einem fertigen Briefing. Wir helfen dabei, die eigentliche Frage erst zu finden.",
  },
  {
    q: "Was, wenn ich nur eine einzelne Leistung brauche?",
    a: "Völlig ausreichend. Nicht jedes Projekt braucht das ganze Spektrum, manchmal reicht ein neues Logo oder ein einzelner Fototag.",
  },
  {
    q: "Arbeitet ihr nur mit Unternehmen aus Kiel?",
    a: "Der Großteil unserer Projekte entsteht in Kiel und Schleswig-Holstein. Überregionale Zusammenarbeit ist möglich, sofern das Projekt dazu passt.",
  },
  {
    q: "Wie läuft der erste Schritt ab?",
    a: "Ein unverbindliches Gespräch, in dem wir uns dein Unternehmen anschauen. Kein Verkaufsgespräch, sondern der Anfang von „Beobachten“.",
  },
  {
    q: "Was kostet das?",
    a: "Kommt auf das Projekt an. Deshalb beginnt jedes Projekt mit einem Gespräch statt mit einem Pauschalpreis, damit du am Ende für das zahlst, was dein Unternehmen wirklich braucht.",
  },
];

export function FaqSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
                    <span className="text-[17px] font-medium text-charcoal lg:text-[18px]">{faq.q}</span>
                    <ChevronDown
                      aria-hidden
                      className="size-4 shrink-0 text-charcoal/70 transition-transform duration-300 group-aria-expanded:rotate-180"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Panel className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up">
                  <p className="pb-6 text-[15px] leading-relaxed text-charcoal/70 lg:text-[16px]">
                    {faq.a}
                  </p>
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
