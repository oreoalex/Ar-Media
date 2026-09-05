import { Reveal } from "@/components/shared/reveal";
import { WissenArticleCard } from "@/components/shared/wissen/wissen-article-card";
import { wissenCategories } from "@/lib/wissen/categories";

/**
 * Vier gleichwertige Kategorie-Karten (drei aus der Registry + Ressourcen
 * manuell, da Ressourcen strukturell keine Artikel-Kategorie ist, siehe
 * WissenResourceLink im Content-Modell). Analog zur "3 gleichwertige
 * Wege"-DNA der Homepage-ForkSection, hier textbasiert statt bebildert,
 * da für diese Themen keine passende Fotografie existiert.
 */
export function KategorienSection() {
  return (
    <section aria-label="Wissensbereiche" className="bg-off-white px-6 pb-20 lg:pb-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
            Vier Bereiche
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {wissenCategories.map((category, i) => (
            <WissenArticleCard
              key={category.slug}
              href={`/wissen/${category.slug}`}
              title={category.label}
              description={category.description}
              delay={i * 0.06}
            />
          ))}
          <WissenArticleCard
            href="/wissen/ressourcen"
            title="Ressourcen"
            description="Kuratierte offizielle Hilfebereiche von Meta, Canva, CapCut und Adobe, an einem Ort gesammelt."
            delay={wissenCategories.length * 0.06}
          />
        </div>
      </div>
    </section>
  );
}
