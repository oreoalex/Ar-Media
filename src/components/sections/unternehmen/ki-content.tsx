"use client";

import Link from "next/link";
import { BrandArrowLeft } from "@/components/shared/brand-arrow-left";
import { BrandChevronDown } from "@/components/shared/brand-chevron-down";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkA } from "@/components/shared/brand-mark-a";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { siteConfig } from "@/lib/site-config";
import { buildBreadcrumbJsonLd } from "@/lib/schema";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandTick } from "@/components/shared/brand-tick";
import { CtaButton } from "@/components/shared/cta-button";

/**
 * Unternehmen · KI. Bewusst kein UnternehmenLeistungPage: die Seite hat
 * weder vier Prozessschritte noch vier Leistungsbausteine, das wären
 * erfundene Füllfelder für eine Positionierungs-/Einwandseite, keine
 * Leistungsseite. Eigene, schlankere Dramaturgie, aber dieselbe
 * Designsprache (Reveal-Timing, Kicker+Linie, BrandMark-Silhouetten,
 * FAQ-Akkordeon mit JSON-LD, CTA-Muster) wie die sieben Leistungsseiten,
 * damit sich die Seite wie dasselbe System anfühlt statt wie ein Fremdkörper.
 *
 * Bewusst kein Nennen konkreter KI-Tool-Namen im Fließtext (siehe Content-
 * Plan): schneller veraltet als "KI-Werkzeuge" allgemein, unnötiges
 * Marken-Risiko in eigener Marketing-Copy.
 */
const faqs = [
  {
    q: "Nutzt ihr KI in eurer Arbeit?",
    a: "Ja, selbstverständlich, für Recherche, Varianten und repetitive Arbeit. Wir haben uns in Workshops und Weiterbildungen intensiv mit generativer KI, Prompting und KI-gestützten Workflows beschäftigt.",
  },
  {
    q: "Warum sollte ich euch beauftragen, wenn ich das auch selbst mit KI versuchen kann?",
    a: "Kannst du. Eine KI liefert dir Vorschläge, wir liefern die Einordnung, welcher davon tatsächlich zu deinem Unternehmen passt, und die Umsetzung, die daraus etwas Sichtbares macht.",
  },
  {
    q: "Ersetzt KI eure Arbeit irgendwann?",
    a: "Werkzeuge ändern sich. Die Entscheidung, was richtig ist für eine bestimmte Marke, bleibt eine menschliche, unabhängig davon, welches Werkzeug gerade genutzt wird.",
  },
  {
    q: "Erstellt ihr auch Inhalte komplett mit KI?",
    a: "Nein. KI unterstützt, sie ersetzt nicht die eigentliche Gestaltung und nicht die Verantwortung dafür, was am Ende veröffentlicht wird.",
  },
];

export function KiContent() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  // Kein Service-Schema: das ist eine Positionierungs-/Haltungsseite, kein
  // buchbares Angebot (siehe Kommentar oben), nur Breadcrumb passt fachlich.
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Start", path: "/" },
    { name: "Unternehmen", path: "/unternehmen" },
    { name: "Warum nicht einfach mit KI?", path: "/unternehmen/ki" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section aria-label="Unternehmen · Haltung" className="bg-off-white px-6 pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">
              Unternehmen · Haltung
            </p>
            <h1 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3rem)] leading-[1.2] font-bold tracking-tight text-charcoal">
              Warum nicht einfach mit KI?
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-charcoal/70">
              Kannst du machen. Für vieles ist das sogar der richtige Weg. Eine KI liefert in Sekunden
              fünfzig Vorschläge, fünfzig Richtungen, fünfzig mögliche Marken. Was sie nicht liefert, ist
              die Antwort auf die eigentliche Frage: welcher dieser Vorschläge tatsächlich zu dir passt,
              zu dem, was dein Unternehmen schon ist, und zu den Menschen, die es erreichen soll. Genau da
              fangen wir an.
            </p>
            <Link
              href="/kontakt/projekt-besprechen"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest"
            >
              <span className="relative pb-0.5">
                Projekt besprechen
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-charcoal/30 transition-colors duration-300 ease-out group-hover:bg-deep-forest"
                />
              </span>
              <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/unternehmen"
              className="group mt-10 flex items-center justify-center gap-2 text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
            >
              <BrandArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Alle Leistungen
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-label="Was KI heute kann" className="bg-off-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Ehrlich betrachtet
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] leading-[1.3] font-bold tracking-tight text-charcoal">
              Was KI heute kann.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-charcoal/70">
              Eine moderne KI kann heute Texte schreiben, Bilder entwerfen, Ideen strukturieren, Varianten
              erzeugen, recherchieren, erste Konzepte skizzieren. Das ist keine Untertreibung und kein
              Vorbehalt. Wer selbst mit diesen Werkzeugen arbeitet, kommt oft erstaunlich weit.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Wo die eigentliche Arbeit beginnt" className="relative overflow-hidden bg-off-white px-6 py-24 lg:py-32">
        <BrandMarkA className="pointer-events-none absolute top-1/2 -left-[10vw] h-[80%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.035] sm:-left-[7vw]" />
        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Wo die eigentliche Arbeit beginnt
            </h2>
            <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
            <p className="mt-6 font-serif text-[clamp(1.5rem,3.2vw,2rem)] leading-[1.35] font-bold tracking-tight text-deep-forest">
              Das Problem ist heute nicht mehr, Ideen zu bekommen. Das Problem ist, die richtige Idee zu
              erkennen.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-charcoal/70">
              Fünfzig Vorschläge sind kein Ergebnis. Sie sind der Anfang einer Auswahl, die jemand treffen
              muss, mit Kontext, mit Erfahrung, mit einem Urteil darüber, was zu genau diesem Unternehmen
              passt und was nicht.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Was du bei uns tatsächlich kaufst" className="bg-off-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Was du bei uns tatsächlich kaufst
            </h2>
            <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
            <p className="mt-6 text-[20px] leading-relaxed text-charcoal/80 lg:text-[22px] lg:leading-[1.55]">
              Du kaufst kein Werkzeug, das kannst du dir selbst holen. Du kaufst Erfahrung und Urteil: die
              Einordnung, welche Idee zu deiner Marke passt, die Auswahl aus vielen Möglichkeiten, die
              Verantwortung für das, was am Ende veröffentlicht wird, und die Umsetzung, die aus einer Idee
              tatsächlich etwas Sichtbares macht.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Wie wir KI nutzen" className="grid sm:grid-cols-2">
        <div className="bg-deep-forest px-6 py-20 lg:px-14 lg:py-28">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.14em] text-off-white/60 uppercase">
              Werkzeug, nicht Ersatz
            </p>
            <h2 className="mt-4 text-[19px] font-medium text-off-white">Wie wir KI nutzen</h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-off-white/70">
              Für Recherche, für Varianten, für repetitive Arbeit, die sonst Zeit kostet, die besser in
              Gestaltung fließt. Wir haben uns in Workshops und Weiterbildungen intensiv mit generativer
              KI, Prompting und KI-gestützten Workflows beschäftigt.
            </p>
          </Reveal>
        </div>
        <div className="bg-sand px-6 py-20 lg:px-14 lg:py-28">
          <Reveal delay={0.06}>
            <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Was wir nicht delegieren
            </p>
            <h2 className="mt-4 text-[19px] font-medium text-charcoal">Die letzte Entscheidung</h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-charcoal/80">
              Was zu deiner Marke passt, was authentisch wirkt, was tatsächlich veröffentlicht wird, das
              bleibt eine menschliche Entscheidung, mit Verantwortung dafür, wenn sie richtig war, und
              dafür, wenn sie es nicht war.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Let me show you what's already there" className="bg-off-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-serif text-[clamp(1.5rem,3.6vw,2rem)] leading-[1.3] font-bold tracking-tight text-charcoal">
              KI kann aus einer Eingabe unendlich viele Möglichkeiten erzeugen. Wir fangen woanders an:
              bei dem, was bei dir schon da ist.
            </p>
            <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-charcoal/70">
              Charakter, Idee, Haltung, ein Geschäftsmodell, das schon eine Richtung hat. Erst danach
              kommen die Werkzeuge. „Let me show you what&rsquo;s already there.&ldquo; gilt für Bilder
              genauso wie für Werkzeuge.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Häufige Fragen" className="bg-off-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Häufige Fragen
            </h2>
            <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <AccordionPrimitive.Root className="border-t border-charcoal/10">
              {faqs.map((faq) => (
                <AccordionPrimitive.Item key={faq.q} className="border-b border-charcoal/10">
                  <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left outline-none rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-forest/50">
                      <span className="text-[16px] font-medium text-charcoal lg:text-[17px]">{faq.q}</span>
                      <BrandChevronDown
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

      <section aria-label="Weiterlesen" className="bg-off-white px-6 pb-24 lg:pb-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-14">
          <Link href="/unternehmen/branding" className="group text-center sm:text-left">
            <span className="flex items-center justify-center gap-2 text-[15px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest sm:justify-start">
              Branding
              <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-1.5 block text-[13px] text-charcoal/70">Eine Position finden</span>
          </Link>
          <Link href="/unternehmen/brandkit" className="group text-center sm:text-left">
            <span className="flex items-center justify-center gap-2 text-[15px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest sm:justify-start">
              Brandkit für Neugründungen
              <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-1.5 block text-[13px] text-charcoal/70">Für den Start bei null</span>
          </Link>
        </div>
      </section>

      <section aria-label="Projekt besprechen" className="relative overflow-hidden bg-deep-forest px-6 py-24 lg:py-32">
        <BrandMarkR className="pointer-events-none absolute -right-[6vw] -bottom-[12%] h-[70%] w-auto text-off-white opacity-[0.06] sm:-right-[4vw]" />
        <div className="relative mx-auto max-w-xl text-center">
          <Reveal variant="fade">
            <p className="font-serif text-[clamp(1.5rem,3.6vw,2rem)] leading-[1.3] font-bold tracking-tight text-off-white">
              Bevor wir Werkzeuge einsetzen, wollen wir verstehen, was dein Unternehmen bereits ausmacht.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-6">
            <div className="text-center">
              <CtaButton href={`mailto:${siteConfig.contact.email}`} variant="light">
                Nachricht schreiben
              </CtaButton>
              <p className="mt-3 text-[13px] text-off-white/55">{siteConfig.contact.email}</p>
            </div>
            <div className="text-center">
              <CtaButton href="/kontakt/projekt-besprechen" variant="light">
                Unverbindlich austauschen
              </CtaButton>
              <p className="mt-3 text-[13px] text-off-white/55">Kein Verkaufsgespräch</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
