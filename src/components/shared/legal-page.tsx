import { Reveal } from "@/components/shared/reveal";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  kicker: string;
  title: string;
  intro?: string;
  sections: LegalSection[];
  /** Nur bei genug Abschnitten sinnvoll, per Default automatisch ab 3 Abschnitten aktiv. */
  showToc?: boolean;
};

/**
 * Gemeinsames Gerüst für alle rechtlichen Pflichtseiten (Impressum,
 * Datenschutz, künftig ggf. weitere). Übernimmt die bestehende
 * Designsprache eins zu eins (Kicker+Linie-Muster, Off-White, dieselbe
 * Typografie-Skala), aber bewusst ruhiger als redaktionelle Seiten: keine
 * Bilder, keine BrandMark-Wasserzeichen, keine gestaffelten Reveals im
 * Fließtext (nur der Kopfbereich blendet sanft ein). Rechtliche Inhalte
 * sollen lesbar und druckfähig wirken, nicht wie ein Marketingstück.
 *
 * Ton bewusst sachlich (Entscheidung 6: Ausnahme von der sonstigen
 * Du-Ansprache) — das betrifft nur die von außen gelieferten Rechtstexte
 * selbst, nicht dieses Layout, das rein strukturell/gestalterisch bleibt.
 *
 * Inhaltsverzeichnis erscheint automatisch ab drei Abschnitten (kürzere
 * Seiten wie das Impressum brauchen keins) und ist selbst ebenfalls
 * accessible: eine echte Liste aus Sprungmarken-Links, kein Script-Widget.
 */
export function LegalPage({ kicker, title, intro, sections, showToc }: LegalPageProps) {
  const shouldShowToc = showToc ?? sections.length >= 3;

  return (
    <div className="bg-off-white px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">{kicker}</p>
          <h1 className="mt-5 font-sans text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-tight text-charcoal">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-charcoal/70">{intro}</p>}
        </Reveal>

        {shouldShowToc && (
          <nav aria-label="Inhaltsverzeichnis" className="mt-12 border-t border-b border-charcoal/10 py-8">
            <p className="text-[11px] font-medium tracking-[0.12em] text-charcoal/70 uppercase">Inhalt</p>
            <ol className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group inline-flex items-baseline gap-2.5 text-[14px] text-charcoal/70 transition-colors hover:text-deep-forest"
                  >
                    <span className="text-charcoal/70">{String(i + 1).padStart(2, "0")}</span>
                    <span className="underline decoration-charcoal/0 underline-offset-4 transition-colors group-hover:decoration-deep-forest/40">
                      {section.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={shouldShowToc ? "mt-4" : "mt-16"}>
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-charcoal/10 py-10 first:pt-0 last:border-b-0 lg:scroll-mt-32">
              <h2 className="text-[19px] font-medium text-charcoal lg:text-[21px]">{section.title}</h2>
              <div className="prose-legal mt-5 max-w-2xl text-[16px] leading-[1.75] text-charcoal/75">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
