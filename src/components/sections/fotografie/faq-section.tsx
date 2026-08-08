"use client";

import { ChevronDown, ArrowRight } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * FAQ. Identisches Accordion-System wie bei Unternehmen, aber bewusst
 * andere Fragen-Kategorie: emotionale/praktische Alltagsfragen statt
 * Preis/Ablauf — passend zur B2C-Zielgruppe dieser Seite.
 */
const faqs = [
  {
    q: "Was ziehe ich an?",
    a: "Was dich ausmacht. Vermeide auffällige Muster oder Logos, alles andere darfst du selbst sein. Bei Unsicherheit sprechen wir vorher kurz darüber.",
  },
  {
    q: "Ich bin nervös.",
    a: "Das sind die meisten Menschen vor einem Shooting, und das ist völlig in Ordnung. Genau deshalb beginnt jedes Shooting mit Ankommen, nicht mit Fotografieren.",
  },
  {
    q: "Was kostet ein Shooting?",
    a: "Portrait ab 249 €, Lifestyle ab 299 €, Paar ab 349 €, Business-Portrait ab 399 € pro Person (inklusive gewerblicher Nutzungsrechte). Den genauen Umfang legen wir im Vorgespräch fest, transparent und ohne versteckte Zusatzkosten. Für Hochzeiten gilt die eigene Preisstruktur von Paul Schulz (3punktmedia), direkt bei ihm zu erfragen.",
  },
  {
    q: "Wie läuft das Shooting ab?",
    a: "Ruhig. Erst ein Gespräch, dann Zeit zum Ankommen, dann die Kamera, meist ohne dass du merkst, wann genau sie dazukommt.",
  },
  {
    q: "Was ist bei Regen?",
    a: "Wir verschieben oder weichen auf einen überdachten Ort aus. Ein Foto unter freiem Himmel ist schön, ein entspanntes Foto ist wichtiger.",
  },
  {
    q: "Darf mein Hund mit?",
    a: "Gerne. Manche der ehrlichsten Momente entstehen genau dann, wenn ein Tier dabei ist.",
  },
  {
    q: "Bearbeitest du Haut?",
    a: "Zurückhaltend. Licht und Farbe werden abgestimmt, aber du bleibst du. Keine künstliche Version von dir.",
  },
];

export function FaqSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section aria-label="Häufige Fragen" className="bg-off-white px-6 py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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

        <Reveal delay={0.15}>
          <div className="mt-10 border-t border-charcoal/10 pt-8 text-center">
            <p className="text-[15px] leading-relaxed text-charcoal/70">
              Noch etwas unsicher? Am schnellsten klärt sich das in einem kurzen, unverbindlichen Gespräch.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="group mt-4 inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest"
            >
              <span className="relative pb-0.5">
                Unverbindlich schreiben
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-charcoal transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </span>
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
