import type { Metadata } from "next";
import { WissenCategoryPage } from "@/components/shared/wissen/wissen-category-page";
import { getCategoryMeta } from "@/lib/wissen/categories";
import { getArticlesByCategory } from "@/lib/wissen/registry";

const category = getCategoryMeta("tools");

export const metadata: Metadata = {
  title: category.label,
  description: category.description,
  alternates: { canonical: "/wissen/tools" },
};

export default function ToolsKategoriePage() {
  const articles = getArticlesByCategory("tools");
  return <WissenCategoryPage category={category} articles={articles} />;
}
