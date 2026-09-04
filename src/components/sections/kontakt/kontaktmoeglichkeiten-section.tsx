import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";
import { BrandTick } from "@/components/shared/brand-tick";
import { MapEmbed } from "@/components/shared/map-embed";
import { BrandMail } from "@/components/shared/brand-mail";
import { BrandPhone } from "@/components/shared/brand-phone";
import { BrandMapPin } from "@/components/shared/brand-map-pin";

/**
 * Direkte Kontaktwege, nicht nur das Formular weiter unten. Bewusst kein
 * WhatsApp: kein realer, etablierter Kanal für AR Media (siteConfig kennt
 * nur E-Mail und Telefon), deshalb hier nicht erfunden. Sand-Hintergrund
 * als ruhiger Rhythmus-Bruch zwischen den vielen hellen Abschnitten davor
 * und danach, derselbe Ton wie an anderen Stellen der Seite, keine neue
 * Farbe. Instagram/LinkedIn bewusst ohne Icon (wie im Footer): lucide-react
 * führt keine Marken-Icons mehr, ein Text-Label reicht ohnehin.
 */
export function KontaktmoeglichkeitenSection() {
  return (
    <section aria-label="Kontaktmöglichkeiten" className="bg-sand/25 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Direkter Kontakt
          </h2>
          <BrandTick className="mt-4 h-4 w-2.5 text-charcoal/20" />
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group flex items-center gap-4 text-charcoal transition-colors hover:text-deep-forest"
          >
            <BrandMail aria-hidden className="size-5 shrink-0 text-charcoal/70 group-hover:text-deep-forest" />
            <span>
              <span className="block text-[13px] tracking-wide text-charcoal/70">E-Mail</span>
              <span className="block text-[16px] font-medium">{siteConfig.contact.email}</span>
            </span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-4 text-charcoal transition-colors hover:text-deep-forest"
          >
            <BrandPhone aria-hidden className="size-5 shrink-0 text-charcoal/70 group-hover:text-deep-forest" />
            <span>
              <span className="block text-[13px] tracking-wide text-charcoal/70">Telefon</span>
              <span className="block text-[16px] font-medium">{siteConfig.contact.phone}</span>
            </span>
          </a>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 text-charcoal transition-colors hover:text-deep-forest"
          >
            <span className="flex size-5 shrink-0 items-center justify-center text-[11px] tracking-wide text-charcoal/70 group-hover:text-deep-forest">
              IG
            </span>
            <span>
              <span className="block text-[13px] tracking-wide text-charcoal/70">Instagram</span>
              <span className="block text-[16px] font-medium">@ar_media_kiel</span>
            </span>
          </a>

          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 text-charcoal transition-colors hover:text-deep-forest"
          >
            <span className="flex size-5 shrink-0 items-center justify-center text-[11px] tracking-wide text-charcoal/70 group-hover:text-deep-forest">
              in
            </span>
            <span>
              <span className="block text-[13px] tracking-wide text-charcoal/70">LinkedIn</span>
              <span className="block text-[16px] font-medium">AR Media</span>
            </span>
          </a>

          {/*
            Adresse als eigener Kontaktweg: Local-SEO-Audit bemängelte, dass
            die reale Adresse nirgends sichtbar ist. Update: das Karten-
            Embed weiter unten (map-embed.tsx) löst den früher hier
            dokumentierten Zielkonflikt jetzt direkt über den Consent-
            Status, statt komplett auf ein Embed zu verzichten — dieser
            Link bleibt als schneller, konsentfreier Direktweg zusätzlich
            bestehen.
          */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${siteConfig.location.street}, ${siteConfig.location.postalCode} ${siteConfig.location.city}, ${siteConfig.location.country}`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 text-charcoal transition-colors hover:text-deep-forest"
          >
            <BrandMapPin aria-hidden className="size-5 shrink-0 text-charcoal/70 group-hover:text-deep-forest" />
            <span>
              <span className="block text-[13px] tracking-wide text-charcoal/70">Adresse</span>
              <span className="block text-[16px] font-medium">
                {siteConfig.location.street}, {siteConfig.location.postalCode} {siteConfig.location.city}
              </span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.12} className="mt-10">
          <MapEmbed className="h-64 w-full border border-charcoal/10 sm:h-80" />
        </Reveal>
      </div>
    </section>
  );
}
