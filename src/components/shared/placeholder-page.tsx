import { ImagePlaceholder } from "@/components/shared/image-placeholder";

type PlaceholderPageProps = {
  kicker: string;
  title: string;
  description: string;
  /** Referenz auf den zuständigen Wireframe-/IA-Abschnitt, rein intern. */
  reference: string;
};

/**
 * Platzhalter für Routen, die laut IA v2.0 existieren, aber erst in einer
 * späteren Bauphase inhaltlich ausgestaltet werden (siehe Projektauftrag:
 * "Beginne mit Projektstruktur, Layout, Navigation, Startseite — danach
 * Seite für Seite"). Bewusst mit robots noindex, um kein Dünn-Content-
 * Risiko einzugehen, bevor echte Inhalte vorliegen.
 */
export function PlaceholderPage({ kicker, title, description, reference }: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
      <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/45 uppercase">
        {kicker}
      </p>
      <h1 className="mt-4 max-w-2xl font-sans text-4xl font-medium tracking-tight text-charcoal lg:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-charcoal/70">
        {description}
      </p>
      <div className="mt-16 max-w-3xl">
        <ImagePlaceholder
          label="Folgt in der nächsten Bauphase"
          format={reference}
          aspect="landscape"
          tone="sand"
        />
      </div>
    </div>
  );
}
