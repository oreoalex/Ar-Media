import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { BrandArrow } from "@/components/shared/brand-arrow";

const zielgruppen = [
  { label: "Gründer:innen", href: "/wissen/social-media/instagram-account-aufbauen" },
  { label: "Unternehmen", href: "/wissen/social-media" },
  { label: "Creator", href: "/wissen/social-media/instagram-fuer-creator" },
  { label: "Personal Brands", href: "/wissen/social-media/instagram-fuer-creator" },
  { label: "Dienstleister", href: "/wissen/tools/meta-business-suite" },
  { label: "Lokale Unternehmen", href: "/wissen/tools/meta-business-suite" },
];

/**
 * Bewusst schlanke Link-Chips statt eines weiteren Kartenrasters (Vorgabe:
 * "nicht überladen wirken") und bewusst separate Zielseiten statt eines
 * In-Page-Toggles — folgt demselben Codebase-Muster wie die getrennten
 * Kita/Schule-Zielgruppenseiten (einrichtungen-content.tsx vs.
 * eltern-content.tsx): eigene Ziele statt eines Umschalters, den es sonst
 * nirgends im Projekt gibt.
 */
export function FuerWenSection() {
  return (
    <section aria-label="Für wen?" className="bg-sand/20 px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">Für wen?</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {zielgruppen.map((zielgruppe) => (
              <Link
                key={zielgruppe.label}
                href={zielgruppe.href}
                className="group inline-flex items-center gap-2 border border-charcoal/15 bg-off-white px-4 py-2.5 text-[14px] font-medium text-charcoal/80 transition-colors hover:border-deep-forest/30 hover:text-deep-forest"
              >
                {zielgruppe.label}
                <BrandArrow
                  aria-hidden
                  className="size-3 shrink-0 text-charcoal/30 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:text-deep-forest"
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
