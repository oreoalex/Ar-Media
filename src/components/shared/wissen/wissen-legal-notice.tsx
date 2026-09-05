/**
 * Fixer Disclaimer für rechtlich orientierende Inhalte im Wissensbereich.
 * AR Media ist keine Rechtsanwaltskanzlei — dieser Satz darf nicht
 * umformuliert oder weggelassen werden, wenn ein Artikel legalNotice
 * gesetzt hat (siehe WissenArticle-Typ).
 */
export function WissenLegalNotice() {
  return (
    <div className="border-l-2 border-charcoal/20 bg-sand/15 px-5 py-4 text-[14px] leading-relaxed text-charcoal/75">
      Diese Informationen dienen der allgemeinen Orientierung und ersetzen keine individuelle Rechtsberatung.
    </div>
  );
}
