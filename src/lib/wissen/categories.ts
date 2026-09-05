import type { WissenCategoryMeta } from "@/lib/wissen/types";

export const wissenCategories: WissenCategoryMeta[] = [
  {
    slug: "social-media",
    label: "Social Media",
    description:
      "Wie ein professioneller Auftritt auf Instagram und Co. tatsächlich entsteht, und warum die einzelnen Bausteine zusammenspielen müssen.",
  },
  {
    slug: "tools",
    label: "Tools",
    description:
      "Was Canva, CapCut, Meta Business Suite und Adobe wirklich können, für wen sie sich eignen und wo ihre Grenzen liegen.",
  },
  {
    slug: "datenschutz-recht",
    label: "Datenschutz & Recht",
    description:
      "Orientierung zu Impressum, Bild- und Musikrechten und Werbekennzeichnung auf Social Media, allgemeinverständlich erklärt.",
  },
];

export function getCategoryMeta(slug: WissenCategoryMeta["slug"]): WissenCategoryMeta {
  const category = wissenCategories.find((c) => c.slug === slug);
  if (!category) {
    throw new Error(`Unbekannte Wissen-Kategorie: ${slug}`);
  }
  return category;
}
