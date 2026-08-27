"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/schema";

/**
 * Kita & Schule · Für Einrichtungen. Zielgruppe: Kitaleitung, Schulleitung,
 * Träger. Ersetzt den reinen IA-Platzhalter. Eigenständiger Aufbau statt
 * gemeinsamer Vorlage mit /eltern und /ablauf-datenschutz, weil die drei
 * Seiten inhaltlich zu unterschiedlich sind (Organisation vs. Bestellung
 * vs. Datenschutz) — eine erzwungene gemeinsame Vorlage hätte hier eher
 * geschadet als geholfen. Als Client-Component ausgelagert, weil das
 * Akkordeon Interaktivität braucht und die Route selbst (page.tsx) dafür
 * Server-Component mit metadata-Export bleiben muss.
 */
const entlastung = [
  "Keine Terminkoordination mit externen Vertriebspartnern",
  "Kein Geld einsammeln oder Bestellzettel verwalten",
  "Keine Reklamationen zu Mappen oder Formaten",
  "Kein Verkaufsgespräch, das vor den Kindern stattfindet",
];

const schritte = [
  { label: "01", title: "Erstgespräch", text: "Wir klären Termin, Gruppengröße und Ablauf, telefonisch oder vor Ort." },
  { label: "02", title: "Abstimmung mit dem Team", text: "Ihr bekommt einen festen Zeitrahmen, den ihr an Erzieher:innen und Eltern weitergeben könnt." },
  { label: "03", title: "Fototag", text: "Wir fotografieren, ohne den Tagesablauf zu unterbrechen. Ein Ansprechpartner vor Ort reicht." },
  { label: "04", title: "Elternzugang wird eingerichtet", text: "Jede Familie erhält eigenen Zugang zur Online-Galerie. Die Einrichtung ist damit raus." },
];

const faqs = [
  {
    q: "Wer haftet, wenn am Fototag etwas nicht klappt?",
    a: "Wir sprechen Ablauf und Verantwortlichkeiten vorher klar ab, das ist Teil des Erstgesprächs, nicht dem Zufall überlassen.",
  },
  {
    q: "Was, wenn der Fototermin krankheitsbedingt ausfällt?",
    a: "Wir vereinbaren zeitnah einen neuen Termin. Ein Ausfall entsteht der Einrichtung dadurch nicht.",
  },
  {
    q: "Wie viele Kinder schafft ihr an einem Tag?",
    a: "Kommt auf die Gruppengröße an, besprechen wir im Erstgespräch, damit niemand gehetzt wird.",
  },
  {
    q: "Muss die Einrichtung einen Vertrag über eine feste Laufzeit abschließen?",
    a: "Nein. Jeder Termin steht für sich, keine automatische Verlängerung, kein Kleingedrucktes.",
  },
];

export function EinrichtungenContent() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const serviceJsonLd = buildServiceJsonLd({
    name: "Kita- und Schulfotografie für Einrichtungen",
    description:
      "Ein Fototag für Kita, Kindergarten und Schule, der sich von allein organisiert: Erstgespräch, Abstimmung mit dem Team, Fototag, digitaler Elternzugang.",
    path: "/kita-schule/einrichtungen",
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Start", path: "/" },
    { name: "Kita & Schule", path: "/kita-schule" },
    { name: "Für Einrichtungen", path: "/kita-schule/einrichtungen" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-off-white px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Kita & Schule · Für Einrichtungen
            </p>
            <h1 className="mx-auto mt-5 max-w-xl font-serif text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.2] text-charcoal italic">
              Ein reibungsloser Ablauf, dem ihr vertrauen könnt.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-charcoal/70">
              Für Kitaleitung, Schulleitung und Träger, die einen Fotografen für Kita,
              Kindergarten oder Schule suchen: ein Fototag, der sich von allein organisiert,
              nicht einen weiteren Punkt auf der eigenen To-do-Liste.
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

      <section aria-label="Was bei euch bleibt" className="bg-off-white px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-2xl border-t border-charcoal/10 pt-16">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Was bei euch bleibt
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-charcoal/75">
              So gut wie nichts. Der organisatorische Teil ist unsere Aufgabe, nicht eure.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-3">
            {entlastung.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <li className="text-[15px] leading-relaxed text-charcoal/70">
                  <span className="mr-2 text-charcoal/30" aria-hidden>–</span>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Der Ablauf im Detail" className="bg-sand/25 px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Der Ablauf im Detail
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {schritte.map((schritt, i) => (
              <Reveal key={schritt.label} delay={i * 0.06}>
                <p className="text-[13px] tracking-wide text-charcoal/70">{schritt.label}</p>
                <h3 className="mt-2 text-[17px] font-medium text-charcoal">{schritt.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{schritt.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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

      <section aria-label="Kennenlernen" className="bg-deep-forest px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-xl text-center">
          <Reveal variant="fade">
            <p className="font-serif text-[clamp(1.5rem,3.6vw,2rem)] leading-[1.3] text-off-white italic">
              Lasst uns unverbindlich besprechen, ob es zu eurer Einrichtung passt.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-14">
            <a href={`mailto:${siteConfig.contact.email}`} className="group text-center sm:text-left">
              <span className="flex items-center justify-center gap-2 text-[17px] font-medium tracking-wide text-off-white sm:justify-start">
                Nachricht schreiben
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-1.5 block text-[13px] text-off-white/55">{siteConfig.contact.email}</span>
            </a>
            <Link href="/kontakt/kita-kennenlernen" className="group text-center sm:text-left">
              <span className="flex items-center justify-center gap-2 text-[17px] font-medium tracking-wide text-off-white sm:justify-start">
                Kennenlernen für deine Kita
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-1.5 block text-[13px] text-off-white/55">Unverbindlich, ohne Verkaufsgespräch</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
