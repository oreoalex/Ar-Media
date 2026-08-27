"use client";

import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Vertrauen & Antworten — Phase 6 (Risiken abbauen). Kombiniert "Der Mensch"
 * und FAQ in einer Section, damit die Seite bei den sieben vom Prompt
 * vorgegebenen Phasen bleibt. Dunkler Rhythmus-Bruch (einziger auf dieser
 * Seite vor dem CTA), analog zur "Stimmen"-Section auf der Fotografie-Seite.
 *
 * Creative Review, Punkte 4–6: persönliche Zeile ergänzt (angelehnt an die
 * bereits auf der Startseite etablierte Gründungsgeschichte, nicht neu
 * erfunden), Google-Bewertung als zweites, leises Vertrauenssignal neben
 * dem Foto wiederholt (steht sonst nur im Hero), und "Kurz beantwortet"
 * als Übergangs-Kicker vor dem FAQ-Akkordeon, damit der Sprung vom
 * Founder-Absatz zu den Fragen nicht mehr unvermittelt wirkt.
 */
const faqs = [
  {
    q: "Wer trägt die Kosten für die Einrichtung?",
    a: "Keine. Die Einrichtung zahlt nichts, Eltern bestellen freiwillig und einzeln über das Onlinesystem.",
  },
  {
    q: "Was, wenn ein Kind nicht fotografiert werden darf?",
    a: "Wird vorher abgesprochen und selbstverständlich respektiert.",
  },
  {
    q: "Wie viel Zeit brauchen die Erzieher:innen am Tag selbst?",
    a: "Kaum welche. Wir übernehmen Ablauf und Koordination vor Ort.",
  },
  {
    q: "Was passiert mit den Bildern, wer sieht sie?",
    a: "Nur die eigenen Eltern, über einen geschützten Zugang. Mehr dazu unter Ablauf & Datenschutz.",
  },
  {
    q: "Fotografiert ihr auch drinnen, wenn das Wetter nicht mitspielt?",
    a: "Ja. Am liebsten sind wir draußen bei natürlichem Licht, aber bei schlechtem Wetter geht es auch drinnen, mit denselben echten Hintergründen statt einer Leinwand.",
  },
];

export function VertrauenSection() {
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
    <section aria-label="Vertrauen und Antworten" className="bg-deep-forest px-6 py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        <div className="grid items-center gap-10 lg:grid-cols-[160px_1fr] lg:gap-14">
          <Reveal>
            <div className="relative aspect-square w-full max-w-[160px] overflow-hidden bg-charcoal">
              <Image
                src="/images/home/founder-alexander.jpg"
                alt={siteConfig.founder.name}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[11px] font-medium tracking-[0.14em] text-off-white/60 uppercase">
              Wer kommt zu euch
            </p>
            <h2 className="mt-4 max-w-lg text-[20px] leading-relaxed text-off-white/85 lg:text-[22px]">
              Ein fester Ansprechpartner statt eines Fototeams, das wechselt.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-off-white/60">
              {siteConfig.founder.name} begleitet den Termin persönlich, von der Absprache bis
              zur letzten Rückfrage. Keine wechselnden Vertretungen, keine Callcenter-Nummer,
              ein Kontakt, der antwortet.
            </p>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-off-white/60">
              Nicht aus einem Businessplan heraus, sondern aus der Beobachtung, dass Kinder auf
              den meisten Kitafotos gar nicht sie selbst sind. Genau das wollte er ändern.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-sand text-sand" />
                ))}
              </span>
              <span className="text-[12px] tracking-wide text-off-white/60">
                {siteConfig.rating.value.toFixed(1).replace(".", ",")} · {siteConfig.rating.count}{" "}
                Google-Bewertungen
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-16 lg:mt-20">
          <h3 className="text-[11px] font-medium tracking-[0.14em] text-off-white/60 uppercase">
            Kurz beantwortet
          </h3>
          <AccordionPrimitive.Root className="mt-4 border-t border-off-white/10">
            {faqs.map((faq) => (
              <AccordionPrimitive.Item key={faq.q} className="border-b border-off-white/10">
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left outline-none rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-forest/50">
                    <span className="text-[16px] font-medium text-off-white lg:text-[17px]">{faq.q}</span>
                    <ChevronDown
                      aria-hidden
                      className="size-4 shrink-0 text-off-white/60 transition-transform duration-300 group-aria-expanded:rotate-180"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Panel className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up">
                  <p className="pb-6 text-[15px] leading-relaxed text-off-white/65">{faq.a}</p>
                </AccordionPrimitive.Panel>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
