import Link from "next/link";
import { cn } from "@/lib/utils";
import { BrandArrow } from "@/components/shared/brand-arrow";

type CtaButtonProps = {
  /** Ohne href rendert der Button als natives <button type="submit"> —
   * für Formular-Absenden (z. B. kontakt-formular.tsx), das keine URL hat. */
  href?: string;
  children: React.ReactNode;
  /** "dark" = Volltonfläche in Deep Forest (für helle Sektionen), "light" =
   * Volltonfläche in Off-White (für dunkle Sektionen wie Deep-Forest-CTAs),
   * "outline" = Rand statt Fläche in Off-White (für dunkle Sektionen),
   * "outline-dark" = derselbe Rand-statt-Fläche-Gedanke in Charcoal (für
   * helle Sektionen) — beide für mehrere gleichwertige Buttons nebeneinander
   * (z.B. die drei Schnellzugriffe im Hero), wo drei satte Vollflächen zu
   * schwer neben der Headline wirken würden. */
  variant?: "dark" | "light" | "outline" | "outline-dark";
  /** "md" (Standard) für alleinstehende Konversions-CTAs, "sm" für mehrere
   * nebeneinander (z.B. Hero-Schnellzugriffe). */
  size?: "sm" | "md";
  className?: string;
};

/**
 * Creative Direction — "laut & mutig"-Baustein aus der Runde-3-Exploration
 * (Referenz-PDF, Interaktionsdetails: "Große, eindeutige Buttons" — bisher
 * überall ein dünner Text-Link mit Pfeil-Hover, jetzt eine satte Vollton-
 * fläche). Ursprünglich nur für echte Konversions-CTAs gedacht, die drei
 * Schnellzugriffe im Hero (Unternehmen/Fotografie/Kita & Schule) blieben
 * bewusst editoriale Textlinks — nach Nutzer-Feedback zurückgenommen: die
 * Buttons dort waren gewünscht, kommen mit variant="outline" zurück (Rand
 * statt Vollfläche, damit drei nebeneinander nicht schwerer wirken als die
 * Headline selbst).
 *
 * variant wählt die Fläche nach Kontrast zum jeweiligen Sektionshintergrund
 * (nie automatisch geraten): "dark"/"outline-dark" für helle Sektionen
 * (Off-White/Sand), "light"/"outline" für dunkle Sektionen (Deep Forest) —
 * dieselbe Logik wie bei --sand-text: die Fläche muss zur tatsächlichen
 * Umgebung passen, nicht zu einer pauschalen Markenfarbe.
 *
 * Hover-Textfarbe zieht auf denselben Sand-Ton wie die Wort-Hover-Färbung
 * der Headlines (hover-words.tsx) — ein durchgängiges Hover-Vokabular statt
 * pro Baustein einer eigenen Interaktionssprache. "dark"/"outline" liegen
 * auf einer Deep-Forest-Fläche (Button-Fläche bzw. Sektionshintergrund) und
 * bekommen deshalb reines --sand (9,39:1 Kontrast dort verifiziert),
 * "light"/"outline-dark" liegen auf einer Off-White-Fläche (Button-Fläche
 * bzw. Sektionshintergrund) und bekommen --sand-text (5,74:1, reines Sand
 * würde dort am Kontrast scheitern — siehe globals.css).
 */
export function CtaButton({ href, children, variant = "dark", size = "md", className }: CtaButtonProps) {
  const isExternal = href ? /^(mailto:|tel:|https?:)/.test(href) : false;
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 text-[15px] font-semibold tracking-wide uppercase transition-all duration-300 ease-out hover:scale-[1.02]",
    size === "md" ? "px-8 py-4 sm:px-10 sm:py-[18px]" : "px-5 py-3 text-[13px] sm:px-6",
    variant === "dark" && "bg-deep-forest text-off-white hover:text-sand",
    variant === "light" && "bg-off-white text-deep-forest hover:text-sand-text",
    variant === "outline" &&
      "border border-off-white/70 text-off-white hover:border-off-white hover:bg-off-white/10 hover:text-sand",
    variant === "outline-dark" &&
      "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5 hover:text-sand-text",
    className,
  );
  const arrow = (
    <BrandArrow aria-hidden className="size-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1" />
  );

  if (!href) {
    return (
      <button type="submit" className={classes}>
        {children}
        {arrow}
      </button>
    );
  }

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
