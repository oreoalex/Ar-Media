import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Kita & Schule · Hero — Phase 1 (Emotionale Aufmerksamkeit). Gleiches
 * Grundprinzip wie Unternehmen/Fotografie-Hero, mit einem echten Moment aus
 * einer Kita-Fotografie statt eines Symbolbilds. Trägt als einzige der drei
 * Landingpage-Heros zusätzlich das Google-Bewertungssignal direkt im Hero,
 * weil die Zielgruppe (Einrichtungsleitungen) vor allem Sicherheit sucht,
 * nicht Emotion allein.
 */
export function HeroSection() {
  return (
    <section
      aria-label="Kinder dürfen Kinder sein."
      className="relative flex h-[85svh] min-h-[520px] w-full items-end overflow-hidden bg-deep-forest"
    >
      <Image
        src="/images/kita-schule/hero-leonie.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_58%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/95 via-deep-forest/30 to-deep-forest/10" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <p className="text-[11px] font-medium tracking-[0.16em] text-off-white/60 uppercase">
          Kita & Schule
        </p>
        <h1 className="mt-5 max-w-2xl font-serif text-[clamp(1.75rem,4.8vw,3.25rem)] leading-[1.15] text-off-white italic">
          Kinder dürfen Kinder sein.
        </h1>
        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-off-white/75">
          Kitafotografie und Schulfotografie in Kiel und Schleswig-Holstein, die den Alltag
          eurer Einrichtung nicht stört und keinem Kind vorschreibt, wie es zu lächeln hat.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href="/kontakt/kita-kennenlernen"
            className="group inline-flex items-center gap-2 text-[14px] font-medium tracking-wide text-off-white/85 transition-colors hover:text-off-white"
          >
            <span className="relative pb-0.5">
              Kennenlernen für deine Kita
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-off-white transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>

          <span className="flex items-center gap-2 text-off-white/60">
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-sand text-sand" />
              ))}
            </span>
            <span className="text-[12px] tracking-wide">
              {siteConfig.rating.value.toFixed(1).replace(".", ",")} · {siteConfig.rating.count}{" "}
              Google-Bewertungen
            </span>
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-off-white/70 lg:bottom-8">
        <span className="text-[11px] tracking-[0.16em] uppercase">Entdecken</span>
        <ChevronDown aria-hidden className="size-4 animate-bounce" />
      </div>
    </section>
  );
}
