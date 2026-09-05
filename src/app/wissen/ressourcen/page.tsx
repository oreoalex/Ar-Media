import type { Metadata } from "next";
import { Reveal } from "@/components/shared/reveal";
import { BrandArrow } from "@/components/shared/brand-arrow";
import { BrandArrowLeft } from "@/components/shared/brand-arrow-left";
import { WissenBreadcrumb } from "@/components/shared/wissen/wissen-breadcrumb";
import Link from "next/link";
import { ressourcenLinks } from "@/lib/wissen/content/ressourcen";

export const metadata: Metadata = {
  title: "Ressourcen",
  description:
    "Offizielle Hilfebereiche von Meta, Canva, CapCut und Adobe, an einem Ort gesammelt. AR Media erklärt die praktische Anwendung, der Anbieter die technischen Details.",
  alternates: { canonical: "/wissen/ressourcen" },
};

/**
 * Eigene Seite statt WissenCategoryPage: Ressourcen sind kuratierte
 * externe Links, keine Artikel (siehe WissenResourceLink im Content-
 * Modell). AR Media baut die Anbieter-Dokumentation nicht nach, sondern
 * verlinkt gezielt auf die offiziellen, aktuell verifizierten Quellen.
 */
export default function RessourcenPage() {
  // Object.groupBy erfordert Node 21+ (diese Umgebung läuft auf Node 20) —
  // deshalb manuelles Gruppieren statt der neueren Built-in-Methode.
  const grouped = new Map<string, typeof ressourcenLinks>();
  for (const link of ressourcenLinks) {
    const existing = grouped.get(link.provider) ?? [];
    existing.push(link);
    grouped.set(link.provider, existing);
  }

  return (
    <>
      <section aria-label="Ressourcen" className="bg-off-white px-6 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <WissenBreadcrumb
              items={[
                { name: "Start", path: "/" },
                { name: "Wissen", path: "/wissen" },
                { name: "Ressourcen", path: "/wissen/ressourcen" },
              ]}
            />
            <h1 className="mt-6 font-serif text-[clamp(1.75rem,4.4vw,3rem)] leading-[1.15] font-bold tracking-tight text-charcoal">
              Ressourcen
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-charcoal/70">
              Wir bauen die Dokumentation der Anbieter nicht nach. Was hier hilft, ist die praktische Anwendung,
              die technischen Details erklären die Anbieter selbst, am verlässlichsten. Deshalb sammeln wir die
              offiziellen Hilfebereiche an einem Ort.
            </p>
            <Link
              href="/wissen"
              className="group mt-8 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
            >
              <BrandArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Alle Wissensbereiche
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-label="Offizielle Hilfebereiche" className="bg-off-white px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl divide-y divide-charcoal/10 border-t border-charcoal/10">
          {Array.from(grouped.entries()).map(([provider, links], i) => (
            <Reveal key={provider} delay={i * 0.05}>
              <div className="py-10">
                <p className="text-[11px] font-medium tracking-[0.14em] text-charcoal/60 uppercase">{provider}</p>
                <ul className="mt-5 space-y-5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-baseline gap-2 text-[16px] font-medium text-charcoal transition-colors hover:text-deep-forest"
                      >
                        {link.name}
                        <BrandArrow
                          aria-hidden
                          className="size-3 -rotate-45 text-charcoal/40 transition-colors group-hover:text-deep-forest"
                        />
                      </a>
                      {link.description && <p className="mt-1 text-[14px] text-charcoal/60">{link.description}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
