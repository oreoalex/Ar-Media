import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { KontaktFormular } from "@/components/shared/kontakt-formular";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shooting anfragen",
  description:
    "Fotoshooting bei AR Media anfragen: Portrait, Paar, Lifestyle oder Business-Portraits in Kiel und Schleswig-Holstein.",
  alternates: { canonical: "/kontakt/shooting-anfragen" },
};

/**
 * Conversion-Seite für den Fotografie-Zweig der segmentierten Kontakt-
 * Weiche. Kategorie-Auswahl entspricht exakt den vier realen
 * Fotografie-Kategorieseiten, keine erfundenen Optionen.
 */
export default function Page() {
  return (
    <section className="bg-off-white px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-charcoal/70 transition-colors hover:text-deep-forest"
          >
            <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-1" />
            Zurück
          </Link>
          <p className="mt-8 text-[11px] font-medium tracking-[0.16em] text-charcoal/75 uppercase">
            Kontakt · Fotografie
          </p>
          <h1 className="mt-4 font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] leading-[1.25] text-charcoal italic">
            Erzähl uns von deinem Anlass.
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-charcoal/70">
            Termin, Ort und genauer Umfang klären wir im ersten, unverbindlichen Gespräch. Hier
            reicht ein erster Eindruck.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <KontaktFormular
            toEmail={siteConfig.contact.email}
            subjectPrefix="Shooting-Anfrage über die Website"
            submitLabel="Anfrage senden"
            fields={[
              { type: "text", name: "name", label: "Name", required: true },
              { type: "email", name: "email", label: "E-Mail", required: true },
              { type: "tel", name: "telefon", label: "Telefon" },
              {
                type: "select",
                name: "kategorie",
                label: "Um welche Art Shooting geht es?",
                required: true,
                options: ["Portrait", "Paar", "Lifestyle", "Business-Portraits", "Noch unklar"],
              },
              { type: "text", name: "termin", label: "Wunschzeitraum", placeholder: "z. B. im Frühling, oder noch offen" },
              {
                type: "textarea",
                name: "nachricht",
                label: "Erzähl uns kurz vom Anlass",
                placeholder: "Wofür sollen die Bilder sein, und wie stellst du dir das vor?",
                required: true,
              },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
