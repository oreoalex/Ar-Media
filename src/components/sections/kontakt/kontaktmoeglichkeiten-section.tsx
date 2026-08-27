import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

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
          <span aria-hidden className="mt-4 block h-px w-8 bg-charcoal/20" />
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group flex items-center gap-4 text-charcoal transition-colors hover:text-deep-forest"
          >
            <Mail aria-hidden className="size-5 shrink-0 text-charcoal/70 group-hover:text-deep-forest" />
            <span>
              <span className="block text-[13px] tracking-wide text-charcoal/70">E-Mail</span>
              <span className="block text-[16px] font-medium">{siteConfig.contact.email}</span>
            </span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-4 text-charcoal transition-colors hover:text-deep-forest"
          >
            <Phone aria-hidden className="size-5 shrink-0 text-charcoal/70 group-hover:text-deep-forest" />
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
            die reale Adresse nirgends sichtbar ist. Bewusst nur ein
            externer Link zu Google Maps, kein eingebettetes iframe: ein
            Live-Embed würde bei jedem Seitenaufruf ungefragt Daten
            (u. a. IP-Adresse) an Google übertragen, unabhängig vom
            Cookie-Consent, den die Seite sonst konsequent vor jeder
            Google-Datenübertragung einholt (siehe google-analytics.tsx).
            Ein reiner Link löst dasselbe Problem (Adresse einsehbar,
            direkt zur Route) ohne diesen Zielkonflikt.
          */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${siteConfig.location.street}, ${siteConfig.location.postalCode} ${siteConfig.location.city}, ${siteConfig.location.country}`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 text-charcoal transition-colors hover:text-deep-forest"
          >
            <MapPin aria-hidden className="size-5 shrink-0 text-charcoal/70 group-hover:text-deep-forest" />
            <span>
              <span className="block text-[13px] tracking-wide text-charcoal/70">Adresse</span>
              <span className="block text-[16px] font-medium">
                {siteConfig.location.street}, {siteConfig.location.postalCode} {siteConfig.location.city}
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
