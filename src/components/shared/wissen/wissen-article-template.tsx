import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { BrandTick } from "@/components/shared/brand-tick";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandArrowLeft } from "@/components/shared/brand-arrow-left";
import { BrandMarkA } from "@/components/shared/brand-mark-a";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { CtaButton } from "@/components/shared/cta-button";
import { WissenBreadcrumb } from "@/components/shared/wissen/wissen-breadcrumb";
import { WissenToc } from "@/components/shared/wissen/wissen-toc";
import { WissenSolutionBox } from "@/components/shared/wissen/wissen-solution-box";
import { WissenLegalNotice } from "@/components/shared/wissen/wissen-legal-notice";
import { WissenArticleCard } from "@/components/shared/wissen/wissen-article-card";
import { buildArticleJsonLd } from "@/lib/schema";
import { getCategoryMeta } from "@/lib/wissen/categories";
import { resolveRelated } from "@/lib/wissen/registry";
import { siteConfig } from "@/lib/site-config";
import type { WissenArticle } from "@/lib/wissen/types";

type WissenArticleTemplateProps = {
  article: WissenArticle;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" });
}

/**
 * Gemeinsames Gerüst für alle Wissensartikel. Nimmt das komplette
 * WissenArticle-Objekt statt einer Prop-Explosion — das Content-Modell IST
 * hier die Schnittstelle, damit ein neuer Artikel nie ein neues Route-File
 * oder eine neue Komponente braucht (siehe Registry).
 *
 * Emittiert Breadcrumb- + Article-JSON-LD, bewusst KEIN Service-JSON-LD
 * (Präzedenzfall ki-content.tsx: Wissensinhalt ist keine buchbare
 * Leistung). Rhythmus folgt exakt unternehmen-leistung-page.tsx: Off-White
 * → Sand (Quick Summary) → Off-White (Content) → Deep Forest (Closing CTA).
 */
export function WissenArticleTemplate({ article }: WissenArticleTemplateProps) {
  const category = getCategoryMeta(article.category);
  const path = `/wissen/${article.category}/${article.slug}`;
  const relatedArticles = resolveRelated(article.relatedArticles);
  const toolArticles = article.toolRefs ? resolveRelated(article.toolRefs) : [];

  const articleJsonLd = buildArticleJsonLd({
    title: article.title,
    description: article.description,
    path,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section aria-label={category.label} className="bg-off-white px-6 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <WissenBreadcrumb
              items={[
                { name: "Start", path: "/" },
                { name: "Wissen", path: "/wissen" },
                { name: category.label, path: `/wissen/${article.category}` },
                { name: article.title, path },
              ]}
            />
            <h1 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3rem)] leading-[1.15] font-bold tracking-tight text-charcoal">
              {article.title}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-charcoal/70">{article.description}</p>
            <p className="mt-6 text-[13px] tracking-wide text-charcoal/55">
              Aktualisiert am {formatDate(article.updatedAt)} · {article.readingTime} Min. Lesezeit
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Das Wichtigste in 30 Sekunden" className="bg-sand/20 px-6 py-14 lg:py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
              Das Wichtigste in 30 Sekunden
            </p>
            <ul className="mt-6 space-y-3">
              {article.quickSummary.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-charcoal/85">
                  <BrandTick className="mt-1 h-4 w-2.5 shrink-0 text-deep-forest/50" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-label="Artikelinhalt" className="relative overflow-hidden bg-off-white px-6 py-20 lg:py-28">
        <BrandMarkA className="pointer-events-none absolute top-1/3 -left-[10vw] h-[70%] w-auto -translate-y-1/2 text-deep-forest opacity-[0.03] sm:-left-[7vw]" />
        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <WissenToc sections={article.sections.map((s) => ({ id: s.id, heading: s.heading }))} />
          </Reveal>

          <div className={article.sections.length >= 3 ? "mt-4" : "mt-4"}>
            {article.sections.map((section, i) => (
              <Reveal key={section.id} delay={Math.min(i * 0.04, 0.2)}>
                <section id={section.id} className="scroll-mt-28 border-b border-charcoal/10 py-10 first:pt-0 last:border-b-0 lg:scroll-mt-32">
                  <h2 className="text-[21px] font-medium text-charcoal lg:text-[23px]">{section.heading}</h2>
                  <div className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-charcoal/75">{section.content}</div>
                </section>
              </Reveal>
            ))}
          </div>

          {article.praxisbeispiel && (
            <Reveal className="mt-4">
              <div className="border-t border-charcoal/10 py-10">
                <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">Praxisbeispiel</p>
                <div className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-charcoal/75">
                  {article.praxisbeispiel}
                </div>
              </div>
            </Reveal>
          )}

          {article.beachten && article.beachten.length > 0 && (
            <Reveal className="mt-4">
              <div className="border-t border-charcoal/10 py-10">
                <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
                  Was du beachten solltest
                </p>
                <ul className="mt-5 space-y-2.5">
                  {article.beachten.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-charcoal/75">
                      <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-charcoal/40" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {toolArticles.length > 0 && (
            <Reveal className="mt-4">
              <div className="border-t border-charcoal/10 py-10">
                <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
                  Passende Tools
                </p>
                <ul className="mt-5 divide-y divide-charcoal/10">
                  {toolArticles.map((tool) => (
                    <li key={tool.slug}>
                      <Link
                        href={`/wissen/${tool.category}/${tool.slug}`}
                        className="group flex items-center justify-between gap-6 rounded-xs py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-forest/50"
                      >
                        <span className="text-[15px] font-medium text-charcoal transition-colors group-hover:text-deep-forest">
                          {tool.title}
                        </span>
                        <BrandArrow
                          aria-hidden
                          className="size-4 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-deep-forest"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {article.legalNotice && (
            <Reveal className="mt-10">
              <WissenLegalNotice />
            </Reveal>
          )}

          {article.arMediaSolution && (
            <Reveal className="mt-10">
              <WissenSolutionBox solution={article.arMediaSolution} />
            </Reveal>
          )}

          {article.officialResources && article.officialResources.length > 0 && (
            <Reveal className="mt-10">
              <div className="border-t border-charcoal/10 pt-10">
                <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
                  Offizielle Ressourcen
                </p>
                <ul className="mt-5 space-y-4">
                  {article.officialResources.map((resource) => (
                    <li key={resource.href}>
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-baseline gap-2 rounded-xs text-[15px] font-medium text-charcoal transition-colors hover:text-deep-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-forest/50"
                      >
                        {resource.name}
                        <BrandArrow aria-hidden className="size-3 -rotate-45 text-charcoal/40 transition-colors group-hover:text-deep-forest" />
                      </a>
                      {resource.description && (
                        <p className="mt-1 text-[14px] text-charcoal/60">{resource.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          <div className="mt-10 border-t border-charcoal/10 pt-10">
            <Link
              href={`/wissen/${article.category}`}
              className="group inline-flex items-center gap-2 rounded-xs text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-forest/50"
            >
              <BrandArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Alle Artikel in {category.label}
            </Link>
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section aria-label="Verwandte Artikel" className="bg-sand/20 px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
                Verwandte Artikel
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related, i) => (
                <WissenArticleCard
                  key={`${related.category}-${related.slug}`}
                  href={`/wissen/${related.category}/${related.slug}`}
                  kicker={getCategoryMeta(related.category).label}
                  title={related.title}
                  description={related.description}
                  size="compact"
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-label="Projekt besprechen" className="relative overflow-hidden bg-deep-forest px-6 py-24 lg:py-32">
        <BrandMarkR className="pointer-events-none absolute -right-[6vw] -bottom-[12%] h-[70%] w-auto text-off-white opacity-[0.06] sm:-right-[4vw]" />
        <div className="relative mx-auto max-w-xl text-center">
          <Reveal variant="fade">
            <p className="font-serif text-[clamp(1.5rem,3.6vw,2rem)] leading-[1.25] font-bold tracking-tight text-off-white">
              Wissen ist der erste Schritt. Wenn du lieber übergibst statt selbst umzusetzen, sind wir da.
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
                Projekt besprechen
              </CtaButton>
              <p className="mt-3 text-[13px] text-off-white/55">Kein Verkaufsgespräch</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
