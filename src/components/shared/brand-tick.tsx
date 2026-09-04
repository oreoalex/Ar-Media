type BrandTickProps = {
  className?: string;
};

/**
 * Ersetzt die generische, waagerechte Kicker-Trennlinie (Audit-Fund P2.7:
 * "h-px w-8 bg-charcoal/20" gilt als bekanntes Agentur-/Template-Tell).
 * Der Winkel ist kein Zufallswert, sondern derselbe wie in globals.css
 * dokumentiert: aus der echten Vektorgeometrie des AR-Monogramms
 * verifiziert liegen die Diagonalen der Wortmarke bei ~62–64° zur
 * Horizontalen. Farbe folgt currentColor, damit dieselbe Komponente auf
 * hellem wie dunklem Hintergrund funktioniert (siehe bisherige
 * bg-charcoal/20- und bg-off-white/…-Varianten).
 */
export function BrandTick({ className }: BrandTickProps) {
  return (
    <svg aria-hidden viewBox="0 0 10 16" className={className} fill="none">
      <line x1="1" y1="15" x2="8" y2="1" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
