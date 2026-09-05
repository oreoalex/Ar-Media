import type { Metadata } from "next";
import { WissenCategoryPage } from "@/components/shared/wissen/wissen-category-page";
import { getCategoryMeta } from "@/lib/wissen/categories";
import { getArticlesByCategory } from "@/lib/wissen/registry";

const category = getCategoryMeta("social-media");

export const metadata: Metadata = {
  title: category.label,
  description: category.description,
  alternates: { canonical: "/wissen/social-media" },
};

export default function SocialMediaKategoriePage() {
  const articles = getArticlesByCategory("social-media");
  return <WissenCategoryPage category={category} articles={articles} />;
}
