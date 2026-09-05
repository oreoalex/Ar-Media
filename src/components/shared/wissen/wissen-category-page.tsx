import { Reveal } from "@/components/shared/reveal";
import { BrandArrowLeft } from "@/components/shared/brand-arrow-left";
import { WissenBreadcrumb } from "@/components/shared/wissen/wissen-breadcrumb";
import { WissenArticleCard } from "@/components/shared/wissen/wissen-article-card";
import Link from "next/link";
import type { WissenArticle, WissenCategoryMeta } from "@/lib/wissen/types";

type WissenCategoryPageProps = {
  category: WissenCategoryMeta;
  articles: WissenArticle[];
};

/**
 * Hero + Artikel-Raster für eine der drei Artikel-Kategorien. Ressourcen
 * hat eine eigene, andere Seite (kuratierte externe Links, keine Artikel),
 * siehe app/wissen/ressourcen/page.tsx.
 */
export function WissenCategoryPage({ category, articles }: WissenCategoryPageProps) {
  return (
    <>
      <section aria-label={category.label} className="bg-off-white px-6 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <WissenBreadcrumb
              items={[
                { name: "Start", path: "/" },
                { name: "Wissen", path: "/wissen" },
                { name: category.label, path: `/wissen/${category.slug}` },
              ]}
            />
            <h1 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3rem)] leading-[1.15] font-bold tracking-tight text-charcoal">
              {category.label}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-charcoal/70">{category.description}</p>
            <Link
              href="/wissen"
              className="group mt-8 inline-flex items-center gap-2 rounded-xs text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-forest/50"
            >
              <BrandArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Alle Wissensbereiche
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-label={`Artikel: ${category.label}`} className="bg-off-white px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((article, i) => (
              <WissenArticleCard
                key={article.slug}
                href={`/wissen/${article.category}/${article.slug}`}
                kicker={`${article.readingTime} Min. Lesezeit`}
                title={article.title}
                description={article.description}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
