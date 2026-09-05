import { Reveal } from "@/components/shared/reveal";
import { BrandMarkR } from "@/components/shared/brand-mark-r";
import { CtaButton } from "@/components/shared/cta-button";
import { siteConfig } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section aria-label="Projekt besprechen" className="relative overflow-hidden bg-deep-forest px-6 py-24 lg:py-32">
      <BrandMarkR className="pointer-events-none absolute -right-[6vw] -bottom-[12%] h-[70%] w-auto text-off-white opacity-[0.06] sm:-right-[4vw]" />
      <div className="relative mx-auto max-w-xl text-center">
        <Reveal variant="fade">
          <p className="font-serif text-[clamp(1.5rem,3.6vw,2rem)] leading-[1.25] font-bold tracking-tight text-off-white">
            Wenn du lieber übergibst statt selbst umzusetzen, sind wir da.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-6">
          <div className="text-center">
            <CtaButton href={`mailto:${siteConfig.contact.email}`} variant="light">
              Nachricht schreiben
            </CtaButton>
            <p className="mt-3 text-[13px] text-off-white/55">{siteConfig.contact.email}</p>
          </div>
          <div className="text-center">
            <CtaButton href="/kontakt/projekt-besprechen" variant="light">
              Projekt besprechen
            </CtaButton>
            <p className="mt-3 text-[13px] text-off-white/55">Kein Verkaufsgespräch</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
