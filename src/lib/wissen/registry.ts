import { socialMediaArticles } from "@/lib/wissen/content/social-media";
import { toolsArticles } from "@/lib/wissen/content/tools";
import { datenschutzRechtArticles } from "@/lib/wissen/content/datenschutz-recht";
import type { RelatedArticleRef, WissenArticle, WissenCategorySlug } from "@/lib/wissen/types";

/**
 * Einziger Ort, der die content/*.ts-Arrays kennt. Neue Artikel werden
 * ausschließlich in den jeweiligen content/*.ts-Dateien ergänzt, nie hier —
 * diese Datei bleibt reine Zusammenführung + Lookup-Logik.
 */
const allArticles: WissenArticle[] = [...socialMediaArticles, ...toolsArticles, ...datenschutzRechtArticles];

export function getAllArticles(): WissenArticle[] {
  return allArticles;
}

export function getArticlesByCategory(category: WissenCategorySlug): WissenArticle[] {
  return allArticles.filter((a) => a.category === category);
}

export function getArticle(category: WissenCategorySlug, slug: string): WissenArticle | undefined {
  return allArticles.find((a) => a.category === category && a.slug === slug);
}

export function resolveRelated(refs: RelatedArticleRef[]): WissenArticle[] {
  return refs
    .map((ref) => getArticle(ref.category, ref.slug))
    .filter((a): a is WissenArticle => a !== undefined);
}

export function getFeaturedArticles(): WissenArticle[] {
  return allArticles.filter((a) => a.featured);
}
