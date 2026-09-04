import Image from "next/image";
import { BrandChevronDown } from "@/components/shared/brand-chevron-down";
import { HoverWords } from "@/components/shared/hover-words";
import { CtaButton } from "@/components/shared/cta-button";

/**
 * Unternehmen · Hero. Übernimmt die Bildsprache der Startseite (großes,
 * ruhiges Foto, kein Video) statt sie neu zu erfinden — die Seite soll sich
 * wie das nächste Kapitel derselben Geschichte anfühlen, nicht wie eine neue
 * Unterseite. Bewusst kein Glass-Panel wie im Hero der Startseite: dort
 * transportiert es die Markenidee, hier reicht die ruhige Headline direkt
 * auf dem Bild — kein zweites Mal dasselbe Signature-Element, sondern
 * derselbe Grundton in einer eigenen, einfacheren Form.
 *
 * Bild: Kameraobjektiv-Detail (Cine-Prime-Objektiv, warmes Bokeh) statt
 * eines künstlichen Logo-Mockups oder eines zu klein gerenderten Brand-
 * Board-Crops (frühere Versionen wirkten "verpixelt"/"billig", siehe
 * Feedback). Handwerk und Ausrüstung stehen hier für Professionalität,
 * ohne bereits ein konkretes Projekt vorwegzunehmen.
 */
export function HeroSection() {
  return (
    <section
      aria-label="Marketing für Unternehmen, die mehr können, als sie zeigen"
      className="relative flex h-[85svh] min-h-[520px] w-full items-end overflow-hidden bg-deep-forest"
    >
      <Image
        src="/images/unternehmen/hero-kamera.jpg"
        alt="Kameraobjektiv „Sumire Prime 35“ an einer Kamera, warmes Bokeh im Hintergrund"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/95 via-deep-forest/35 to-deep-forest/10" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <p className="text-[11px] font-medium tracking-[0.16em] text-off-white/60 uppercase">
          Unternehmen
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-[clamp(1.75rem,4.8vw,3.25rem)] leading-[1.15] font-bold tracking-tight text-off-white">
          <HoverWords text="Die meisten Unternehmen wirken kleiner, als sie sind." className="hover:text-sand" />
        </h1>
        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-off-white/75">
          Wir zeigen, was dein Unternehmen bereits ausmacht, bevor wir auch
          nur ein Bild gestalten.
        </p>
        <div className="mt-7">
          <CtaButton href="/kontakt/projekt-besprechen" variant="outline" size="sm">
            Projekt besprechen
          </CtaButton>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-off-white/70 lg:bottom-8">
        <span className="text-[11px] tracking-[0.16em] uppercase">Entdecken</span>
        <BrandChevronDown aria-hidden className="size-4 animate-bounce" />
      </div>
    </section>
  );
}
