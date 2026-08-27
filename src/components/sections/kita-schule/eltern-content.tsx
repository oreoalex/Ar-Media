"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

/**
 * Kita & Schule · Für Eltern. Zielgruppe: Eltern, nicht die Einrichtung.
 * Bewusst kein "Anfragen"-CTA am Ende wie bei den anderen Kita-Seiten:
 * Eltern bestellen über die Online-Galerie, nicht über ein Erstgespräch.
 * Der Abschluss ist deshalb eine reine Kontaktoption bei Rückfragen, kein
 * Vertriebs-CTA.
 */
const schritte = [
  { label: "01", title: "Zugang erhalten", text: "Nach dem Fototag bekommt ihr einen persönlichen Link zur Online-Galerie eures Kindes." },
  { label: "02", title: "Bilder ansehen", text: "In Ruhe, ohne Zeitdruck, nur ihr seht die Bilder eures Kindes." },
  { label: "03", title: "Bestellen oder nicht", text: "Ihr wählt aus, was euch gefällt, und bestellt eure Kinderfotos direkt online. Keine Mappe, kein Format ist Pflicht." },
];

const faqs = [
  {
    q: "Muss ich etwas bestellen?",
    a: "Nein. Der Zugang zur Galerie ist unabhängig von einer Bestellung, ihr entscheidet frei.",
  },
  {
    q: "Wie lange ist der Zugang gültig?",
    a: "Ihr bekommt rechtzeitig Bescheid, bevor ein Zugang abläuft, damit nichts überraschend verschwindet.",
  },
  {
    q: "Sehen andere Eltern die Bilder unseres Kindes?",
    a: "Nein. Jede Familie hat einen eigenen, geschützten Zugang, mehr dazu unter Ablauf & Datenschutz.",
  },
  {
    q: "Was, wenn uns die Bilder nicht gefallen?",
    a: "Meldet euch einfach bei uns, wir finden eine Lösung, unkompliziert.",
  },
];

export function ElternContent() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  // Kein Service-Schema hier bewusst: das ist eine Zugriffs-/Anleitungsseite
  // für bereits fotografierte Familien, kein separat buchbares Angebot —
  // Service-Markup wäre hier fachlich falsch, nur Breadcrumb.
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Start", path: "/" },
    { name: "Kita & Schule", path: "/kita-schule" },
    { name: "Für Eltern", path: "/kita-schule/eltern" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-off-white px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Kita & Schule · Für Eltern
            </p>
            <h1 className="mx-auto mt-5 max-w-xl font-serif text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.2] text-charcoal italic">
              Echte Bilder von echten Momenten.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-charcoal/70">
              Wurde in eurer Kita oder Schule fotografiert? Hier erfahrt ihr, wie ihr eure
              Kita-Fotos oder Schulfotos anseht und online bestellt.
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

      <section aria-label="So funktioniert die Bestellung" className="bg-sand/25 px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              So funktioniert es
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
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

      <section aria-label="Rückfragen" className="bg-off-white px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-xl border-t border-charcoal/10 pt-16 text-center">
          <Reveal>
            <p className="text-[16px] leading-relaxed text-charcoal/70">
              Keinen Zugang bekommen oder eine andere Frage? Schreibt uns kurz.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-4 inline-block text-[15px] font-medium text-charcoal underline decoration-charcoal/25 underline-offset-4 transition-colors hover:text-deep-forest"
            >
              {siteConfig.contact.email}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
