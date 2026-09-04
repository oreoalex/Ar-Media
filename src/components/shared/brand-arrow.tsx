import * as React from "react";

type BrandArrowProps = React.SVGProps<SVGSVGElement>;

/**
 * Ersetzt lucide-react ArrowRight als Hover-Link-Affordanz sitewide
 * (Audit-Fund P2.7: "→ an Buttons/Links" ist ein bekanntes generisches
 * Tell). Bewusst kein steiler 63°-Winkel wie bei BrandTick — bei einem
 * Pfeil, der weiterhin "hier geht's weiter" bedeuten muss (Hover-
 * Translate-x-Bewegung nach rechts), würde der volle Wortmarken-Winkel die
 * Lesbarkeit als Vorwärts-Affordanz beschädigen. Stattdessen ein
 * moderater ~37°-Schwung nach rechts oben statt des rein waagerechten
 * Lucide-Pfeils — eigenständig genug, um nicht mehr wie Standard-UI zu
 * wirken, aber weiterhin eindeutig als "weiter"-Geste lesbar.
 */
export function BrandArrow(props: BrandArrowProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 11.5 12 4M12 4H6M12 4v6" />
    </svg>
  );
}
