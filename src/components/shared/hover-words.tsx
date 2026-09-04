import { Fragment } from "react";
import { cn } from "@/lib/utils";

type HoverWordsProps = {
  text: string;
  /** Hover-Farbe je nach Hintergrund, z. B. "hover:text-sand" auf Deep
   * Forest oder "hover:text-sand-text" auf hellem Grund (siehe --sand-text
   * in globals.css: reines Sand scheitert dort am Kontrast). */
  className?: string;
};

/**
 * Zerlegt eine Headline in einzelne Wort-Spans, die beim Hover einzeln
 * einfärben statt den ganzen Satz ("laut & mutig"-Punkt aus dem Referenz-
 * Review). Reiner CSS-Hover, keine Interaktivität nötig — die Wortgrenzen
 * sind rein visuell, der vorgelesene Text bleibt für Screenreader identisch.
 */
export function HoverWords({ text, className }: HoverWordsProps) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className={cn("transition-colors duration-300", className)}>{word}</span>
        </Fragment>
      ))}
    </>
  );
}
