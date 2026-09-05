import type { ReactNode } from "react";

/**
 * Content-Modell für den Wissensbereich (/wissen). Bewusst kein CMS/MDX —
 * die Codebase hat keine Markdown-Pipeline, deshalb dasselbe Prinzip wie
 * LegalPage's LegalSection: Prosa-Abschnitte tragen ihren Inhalt als
 * React.ReactNode, direkt als JSX in den content/*.ts-Dateien verfasst.
 * Ein neuer Artikel braucht dadurch kein neues Route-File und keine neue
 * Komponente — nur einen neuen Eintrag im passenden content/*.ts-Array.
 */

export type WissenCategorySlug = "social-media" | "tools" | "datenschutz-recht";

export type Audience =
  | "gruender"
  | "unternehmen"
  | "creator"
  | "personal-brand"
  | "dienstleister"
  | "lokale-unternehmen";

export type WissenSection = {
  id: string;
  heading: string;
  content: ReactNode;
};

export type ArMediaSolution = {
  question: string;
  answer: string;
  ctaLabel: string;
  /** Muss eine echte, bestehende AR-Media-Route sein — nie eine erfundene Leistung. */
  ctaHref: string;
};

export type OfficialResource = {
  name: string;
  href: string;
  description?: string;
};

/** {category, slug} statt bare slug[] — kollisionssicher, falls zwei Kategorien je einen Artikel mit gleichem Slug führen. */
export type RelatedArticleRef = {
  category: WissenCategorySlug;
  slug: string;
};

export type WissenArticle = {
  title: string;
  slug: string;
  category: WissenCategorySlug;
  /** Kurzbeschreibung — Meta Description Basis, außer seoDescription überschreibt. */
  description: string;
  intro: string;
  /** ISO-Datum. Beide Felder (nicht nur updatedAt), weil Article-JSON-LD datePublished UND dateModified will. */
  publishedAt: string;
  updatedAt: string;
  /** Minuten, manuell gepflegt — Content ist JSX, kein verlässlicher Klartext-Wordcount möglich. */
  readingTime: number;
  featured?: boolean;
  audience?: Audience[];
  tags?: string[];
  /** "Das Wichtigste in 30 Sekunden" — 3–7 Kernpunkte. */
  quickSummary: string[];
  sections: WissenSection[];
  praxisbeispiel?: ReactNode;
  beachten?: string[];
  /** Verweise auf /wissen/tools/*-Artikel, die zu diesem Thema passen. */
  toolRefs?: RelatedArticleRef[];
  /**
   * Unabhängig von category — auch ein Social-Media-Artikel kann den
   * rechtlichen Disclaimer brauchen (z. B. wenn er Werbekennzeichnung
   * streift), nicht jeder datenschutz-recht-Artikel zwingend mehr als jeder
   * andere.
   */
  legalNotice?: boolean;
  arMediaSolution?: ArMediaSolution;
  officialResources?: OfficialResource[];
  relatedArticles: RelatedArticleRef[];
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  /**
   * Live, aber noch nicht für die Indexierung freigegeben — Präzedenzfall
   * kita-schule/ablauf-datenschutz/page.tsx. Für Recht-Inhalte, deren
   * Quellenlage noch abschließend geprüft wird. sitemap.ts überspringt
   * diese Artikel automatisch.
   */
  noindex?: boolean;
};

/** Kuratierte externe Links, gruppiert nach Anbieter — strukturell keine Artikel, deshalb kein WissenArticle. */
export type WissenResourceLink = {
  provider: string;
  name: string;
  href: string;
  description?: string;
};

export type WissenCategoryMeta = {
  slug: WissenCategorySlug;
  label: string;
  description: string;
};
