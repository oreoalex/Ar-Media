import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WissenArticleTemplate } from "@/components/shared/wissen/wissen-article-template";
import { getAllArticles, getArticle } from "@/lib/wissen/registry";
import type { WissenCategorySlug } from "@/lib/wissen/types";

const validCategories: WissenCategorySlug[] = ["social-media", "tools", "datenschutz-recht"];

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ category: article.category, slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/wissen/[category]/[slug]">): Promise<Metadata> {
  const { category, slug } = await params;
  if (!validCategories.includes(category as WissenCategorySlug)) return {};
  const article = getArticle(category as WissenCategorySlug, slug);
  if (!article) return {};

  const path = `/wissen/${category}/${slug}`;
  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.description;

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: article.ogImage ?? "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "AR Media – Signet und Wortmarke",
        },
      ],
      title: `${title} · AR Media`,
      description,
    },
    twitter: {
      images: [
        {
          url: article.ogImage ?? "/twitter-image.jpg",
          width: 1200,
          height: 630,
          alt: "AR Media – Signet und Wortmarke",
        },
      ],
      title: `${title} · AR Media`,
      description,
    },
    alternates: { canonical: path },
    // Live, aber noch nicht zur Indexierung freigegeben — Präzedenzfall
    // kita-schule/ablauf-datenschutz/page.tsx.
    ...(article.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function WissenArtikelPage({ params }: PageProps<"/wissen/[category]/[slug]">) {
  const { category, slug } = await params;
  if (!validCategories.includes(category as WissenCategorySlug)) notFound();

  const article = getArticle(category as WissenCategorySlug, slug);
  if (!article) notFound();

  return <WissenArticleTemplate article={article} />;
}
