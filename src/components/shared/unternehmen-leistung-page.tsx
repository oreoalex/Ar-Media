"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkA } from "@/components/shared/brand-mark-a";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { siteConfig } from "@/lib/site-config";

type ProzessSchritt = { title: string; text: string };
type Faq = { q: string; a: string };
type CaseStudyRef = { name: string; text: string; href: string };
type LeistungDetail = { title: string; text: string };

type UnternehmenLeistungPageProps = {
  kicker: string;
  title: string;
  heroText: string;
  problemTitle: string;
  problemText: string;
  denkansatzTitle: string;
  denkansatzText: string;
  prozessSchritte: [ProzessSchritt, ProzessSchritt, ProzessSchritt, ProzessSchritt];
  caseStudies: CaseStudyRef[];
  leistungenTitle: string;
  leistungen: LeistungDetail[];
  faqs: Faq[];
  ctaText: string;
};

/**
 * Gemeinsames Gerüst für die sieben Unternehmen-Leistungsseiten (Branding,
 * Corporate Design, Content Creation, Social Media, Employer Branding,
 * Foto & Video, Kampagnen). Analog zu FotografieCategoryPage: 90% Aufbau
 * und Designsprache sind identisch, nur Inhalt variiert, deshalb ein
 * gemeinsames Template statt sieben separater Seiten.
 *
 * Struktur folgt bewusst nicht der Hub-Seite /unternehmen (die deckt alle
 * sieben Leistungen auf einmal ab), sondern einer eigenen, engeren
 * Dramaturgie pro Einzelleistung: Hero → Problem (beim Kunden, nicht bei
 * AR Media) → Denkansatz ("so denken wir", nicht "so arbeiten wir") →
 * Prozess (dieselben vier Schritte wie auf der Hub-Seite, hier leistungs-
 * spezifisch ausformuliert) → Case Studies (nur die wirklich passenden,
 * per Anker-Link direkt zum jeweiligen Projekt) → Leistungen (die eine
 * Leistung dieser Seite aufgeschlüsselt nach Nutzen, nicht die sieben
 * Leistungsfelder der Hub-Seite) → FAQ → ruhiger CTA.
 *
 * Rhythmus: Hell (Hero, Problem, Denkansatz, Prozess) → Sand (Case
 * Studies, derselbe Ton wie der AR-Media-Abschnitt auf /case-studies,
 * keine neue Farbe) → Hell (Leistungen, FAQ) → Dunkel (CTA). Kein
 * zusätzlicher Dunkel-Bruch wie auf der Hub-Seite (keine
 * Unterschied-Section) — das wäre auf einer engeren Einzelseite zu viel.
 */
export function UnternehmenLeistungPage({
  kicker,
  title,
  heroText,
  problemTitle,
  problemText,
  denkansatzTitle,
  denkansatzText,
  prozessSchritte,
  caseStudies,
  leistungenTitle,
  leistungen,
  faqs,
  ctaText,
}: UnternehmenLeistungPageProps) {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section aria-label={kicker} className="bg-off-white px-6 pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">{kicker}</p>
            <h1 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3rem)] leading-[1.2] text-charcoal italic">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-charcoal/70">{heroText}</p>
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
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/unternehmen"
              className="group mt-10 flex items-center justify-center gap-2 text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
            >
              <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Alle Leistungen
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-label="Das Problem" className="bg-off-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">Eine Beobachtung</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] leading-[1.3] text-charcoal italic">
              {problemTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-charcoal/70">{problemText}</p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Unser Denkansatz" className="relative overflow-hidden bg-off-white px-6 py-24 lg:py-32">
        <BrandMarkA className="pointer-events-none absolute top-1/2 -left-[10vw] h-[80%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.035] sm:-left-[7vw]" />
        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              {denkansatzTitle}
            </h2>
            <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
            <p className="mt-6 text-[20px] leading-relaxed text-charcoal/80 lg:text-[22px] lg:leading-[1.55]">
              {denkansatzText}
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Wie wir arbeiten" className="bg-off-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="max-w-xl">
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Wie wir arbeiten
            </h2>
            <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {prozessSchritte.map((schritt, i) => (
              <Reveal key={schritt.title} delay={i * 0.06}>
                <p className="text-[13px] tracking-wide text-charcoal/70">{`0${i + 1}`}</p>
                <h3 className="mt-3 text-[19px] font-medium text-charcoal">{schritt.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">{schritt.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section aria-label="Passende Projekte" className="bg-sand/25 px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
                Wie das aussehen kann
              </h2>
              <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
            </Reveal>
            <ul className="mt-10 divide-y divide-charcoal/10 border-t border-charcoal/10">
              {caseStudies.map((cs, i) => (
                <Reveal key={cs.href} delay={i * 0.05}>
                  <li>
                    <Link href={cs.href} className="group flex items-center justify-between gap-6 py-6">
                      <span>
                        <span className="block text-[17px] font-medium text-charcoal transition-colors group-hover:text-deep-forest lg:text-[19px]">
                          {cs.name}
                        </span>
                        <span className="mt-1 block text-[14px] text-charcoal/70 lg:text-[15px]">{cs.text}</span>
                      </span>
                      <ArrowRight
                        aria-hidden
                        className="size-4 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-deep-forest"
                      />
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-label={leistungenTitle} className="bg-off-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              {leistungenTitle}
            </h2>
            <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
          </Reveal>

          <dl className="mt-14 space-y-10">
            {leistungen.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.05}>
                <div className="grid gap-2 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-8">
                  <dt className="text-[17px] font-medium text-charcoal lg:text-[18px]">{l.title}</dt>
                  <dd className="text-[15px] leading-relaxed text-charcoal/70 lg:text-[16px]">{l.text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
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

      <section aria-label="Projekt besprechen" className="relative overflow-hidden bg-deep-forest px-6 py-24 lg:py-32">
        <BrandMarkR className="pointer-events-none absolute -right-[6vw] -bottom-[12%] h-[70%] w-auto text-off-white opacity-[0.06] sm:-right-[4vw]" />
        <div className="relative mx-auto max-w-xl text-center">
          <Reveal variant="fade">
            <p className="font-serif text-[clamp(1.5rem,3.6vw,2rem)] leading-[1.3] text-off-white italic">
              {ctaText}
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
            <Link href="/kontakt/projekt-besprechen" className="group text-center sm:text-left">
              <span className="flex items-center justify-center gap-2 text-[17px] font-medium tracking-wide text-off-white sm:justify-start">
                Unverbindlich austauschen
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-1.5 block text-[13px] text-off-white/55">Kein Verkaufsgespräch</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
