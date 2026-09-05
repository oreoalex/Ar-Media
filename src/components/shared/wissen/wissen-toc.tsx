type TocEntry = { id: string; heading: string };

type WissenTocProps = {
  sections: TocEntry[];
};

/**
 * Sprungmarken-Inhaltsverzeichnis, Muster von legal-page.tsx übernommen
 * (nicht dorthin refactored — Impressum/Datenschutz sind rechtlich
 * sensibel und bleiben unangetastet, dieser Baustein ist ein bewusst
 * duplizierter Sibling statt einer riskanten gemeinsamen Abhängigkeit).
 * Erscheint nur ab drei Abschnitten, echte Links statt eines Script-Widgets.
 */
export function WissenToc({ sections }: WissenTocProps) {
  if (sections.length < 3) return null;

  return (
    <nav aria-label="Inhaltsverzeichnis" className="border-t border-b border-charcoal/10 py-8">
      <p className="text-[11px] font-medium tracking-[0.12em] text-charcoal/70 uppercase">Inhalt</p>
      <ol className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group inline-flex items-baseline gap-2.5 rounded-xs text-[14px] text-charcoal/70 transition-colors hover:text-deep-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-forest/50"
            >
              <span className="text-charcoal/70">{String(i + 1).padStart(2, "0")}</span>
              <span className="underline decoration-charcoal/0 underline-offset-4 transition-colors group-hover:decoration-deep-forest/40">
                {section.heading}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
