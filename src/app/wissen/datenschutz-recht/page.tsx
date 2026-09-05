import type { Metadata } from "next";
import { WissenCategoryPage } from "@/components/shared/wissen/wissen-category-page";
import { getCategoryMeta } from "@/lib/wissen/categories";
import { getArticlesByCategory } from "@/lib/wissen/registry";

const category = getCategoryMeta("datenschutz-recht");

export const metadata: Metadata = {
  title: category.label,
  description: category.description,
  alternates: { canonical: "/wissen/datenschutz-recht" },
};

export default function DatenschutzRechtKategoriePage() {
  const articles = getArticlesByCategory("datenschutz-recht");
  return <WissenCategoryPage category={category} articles={articles} />;
}
