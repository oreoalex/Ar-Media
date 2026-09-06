"use client";

import Image from "next/image";
import Link from "next/link";
import { BrandArrowLeft } from "@/components/shared/brand-arrow-left";
import { BrandChevronDown } from "@/components/shared/brand-chevron-down";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { siteConfig } from "@/lib/site-config";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/schema";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandTick } from "@/components/shared/brand-tick";

type Faq = { q: string; a: string };
type RelatedLink = { name: string; text: string; href: string };

type FotografieCategoryPageProps = {
  /** URL-Pfad dieser Seite, z. B. "/fotografie/portrait" — für Breadcrumb- und Service-JSON-LD. */
  slug: string;
  kicker: string;
  title: string;
  intro: string;
  heroImage?: { src: string; alt: string };
  ablaufTitle: string;
  ablauf: string;
  preisAb: number;
  preisHinweis: string;
  faqs: Faq[];
  ctaText: string;
  /** Optionaler Cross-Säulen-Verweis, z. B. Business-Portraits → Unternehmen/Foto & Video. */
  relatedLink?: RelatedLink;
};

/**
 * Gemeinsames Gerüst für die vier Leistungen-Kategorieseiten (Portrait,
 * Paar, Lifestyle, Business-Portraits). Ersetzt die reinen IA-Platzhalter:
 * echte Positionierung, echter Ablauf, transparenter Preiseinstieg, echtes
 * kategoriespezifisches FAQ, echter CTA. Bewusst als ein gemeinsames
 * Template statt vier separater Seiten, weil sich Aufbau und Designsprache
 * zu 90% gleichen und nur Inhalt und Bild variieren.
 */
export function FotografieCategoryPage({
  slug,
  kicker,
  title,
  intro,
  heroImage,
  ablaufTitle,
  ablauf,
  preisAb,
  preisHinweis,
  faqs,
  ctaText,
  relatedLink,
}: FotografieCategoryPageProps) {
  // Schema-Audit (2026-09-06): siehe identischer Kommentar in
  // unternehmen-leistung-page.tsx — reine Absicherung gegen ein künftiges
  // leeres FAQPage-mainEntity, alle aktuellen Aufrufer übergeben bereits FAQs.
  const faqJsonLd = faqs.length > 0 && {
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

  const serviceName = kicker.split("·").pop()?.trim() ?? title;
  const serviceJsonLd = buildServiceJsonLd({ name: serviceName, description: intro, path: slug, priceFrom: preisAb });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Start", path: "/" },
    { name: "Fotografie", path: "/fotografie" },
    { name: serviceName, path: slug },
  ]);

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-off-white px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          className={`mx-auto max-w-5xl ${heroImage ? "grid items-center gap-12 lg:grid-cols-[1fr_360px] lg:gap-16" : "max-w-2xl text-center"}`}
        >
          <Reveal className={heroImage ? "" : undefined}>
            <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              {kicker}
            </p>
            <h1
              className={`mt-5 font-serif text-[clamp(1.75rem,4.2vw,2.75rem)] leading-[1.15] font-bold tracking-tight text-charcoal ${heroImage ? "" : "mx-auto"}`}
            >
              {title}
            </h1>
            <p
              className={`mt-6 text-[17px] leading-relaxed text-charcoal/70 ${heroImage ? "max-w-md" : "mx-auto max-w-lg"}`}
            >
              {intro}
            </p>
            <Link
              href="/fotografie"
              className={`group mt-8 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest ${heroImage ? "" : "mx-auto"}`}
            >
              <BrandArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Alle Leistungen
            </Link>
          </Reveal>
          {heroImage && (
            <Reveal delay={0.1}>
              <div className="relative aspect-3/4 w-full overflow-hidden">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 80vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section aria-label={ablaufTitle} className="bg-off-white px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-2xl border-t border-charcoal/10 pt-16">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              {ablaufTitle}
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-charcoal/75">{ablauf}</p>
            <Link
              href="/kontakt/shooting-anfragen"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest"
            >
              <span className="relative pb-0.5">
                Termin anfragen
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-charcoal transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </span>
              <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-label="Preis" className="bg-sand/25 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Investition
            </h2>
            <p className="mt-5 font-serif text-[clamp(1.75rem,3.6vw,2.25rem)] text-charcoal">
              ab {preisAb} €
            </p>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              {preisHinweis}
            </p>
            <Link
              href="/kontakt/shooting-anfragen"
              className="group mt-7 inline-flex items-center gap-2 text-[15px] font-medium tracking-wide text-charcoal transition-colors hover:text-deep-forest"
            >
              <span className="relative pb-0.5">
                Shooting anfragen
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-charcoal transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </span>
              <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
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

      {relatedLink && (
        <section aria-label="Auch interessant" className="bg-off-white px-6 pb-24 lg:pb-32">
          <div className="mx-auto max-w-2xl border-t border-charcoal/10 pt-10">
            <Link href={relatedLink.href} className="group flex items-center justify-between gap-6">
              <span>
                <span className="block text-[16px] font-medium text-charcoal transition-colors group-hover:text-deep-forest">
                  {relatedLink.name}
                </span>
                <span className="mt-1 block text-[14px] text-charcoal/70">{relatedLink.text}</span>
              </span>
              <BrandArrow
                aria-hidden
                className="size-4 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-deep-forest"
              />
            </Link>
          </div>
        </section>
      )}

      <section aria-label="Anfragen" className="relative overflow-hidden bg-deep-forest px-6 py-24 lg:py-32">
        <BrandMarkR className="pointer-events-none absolute -right-[8vw] -bottom-[14%] h-[60%] w-auto text-off-white opacity-[0.06] sm:-right-[5vw]" />
        <div className="relative mx-auto max-w-xl text-center">
          <Reveal variant="fade">
            <p className="font-serif text-[clamp(1.5rem,3.6vw,2rem)] leading-[1.25] font-bold tracking-tight text-off-white">
              {ctaText}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-14">
            <a href={`mailto:${siteConfig.contact.email}`} className="group text-center sm:text-left">
              <span className="flex items-center justify-center gap-2 text-[17px] font-medium tracking-wide text-off-white sm:justify-start">
                Nachricht schreiben
                <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-1.5 block text-[13px] text-off-white/55">
                {siteConfig.contact.email}
              </span>
            </a>
            <Link href="/kontakt/shooting-anfragen" className="group text-center sm:text-left">
              <span className="flex items-center justify-center gap-2 text-[17px] font-medium tracking-wide text-off-white sm:justify-start">
                Shooting anfragen
                <BrandArrow aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-1.5 block text-[13px] text-off-white/55">
                Unverbindlich, ohne Verkaufsgespräch
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
