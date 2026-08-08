import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { FallCard } from "@/components/sections/case-studies/fall-card";
import { siteConfig } from "@/lib/site-config";

/**
 * Die fünf Fallstudien in fester Reihenfolge, bewusst nach Bereich
 * gemischt statt gruppiert (Marke → Fotografie → Marke → Marke → AR Media
 * selbst), damit sich dieselbe Handschrift über alle Bereiche hinweg zeigt,
 * statt drei Branding-Projekte hintereinander abzuspulen. Analog zur
 * Reihenfolge-Logik von ProofSection auf der Startseite.
 *
 * Die Kita-Fallstudie ist bewusst schlanker in Ausgangssituation/Beobachtung:
 * Für die drei Marken-Projekte liegen konkrete, vom Studio bestätigte
 * Ausgangslagen vor. Für die Kitafotografie existiert kein einzelner
 * dokumentierter Problemfall, sondern die bereits auf /kita-schule real
 * begründete, branchenweite Beobachtung (Organisationsaufwand, gestellte
 * Mappenfotos). Diese Fallstudie beschreibt deshalb ehrlich das Vorgehen als
 * System, nicht eine erfundene Einzelgeschichte mit erfundenem Vorher.
 *
 * Die AR-Media-Fallstudie ist die einzige ohne externen Kunden: die eigene
 * Neupositionierung, real belegt durch die frühere Website (Wix-Einseiter,
 * "Alexander Rieck, Social Media Manager, Fotograf") gegen die aktuelle
 * Struktur. Bewusst als Schlusspunkt, weil sie den Kernsatz der Marke
 * ("nicht verändern, nur sichtbar machen") direkt auf AR Media selbst
 * anwendet, statt ihn nur zu behaupten.
 *
 * Zwei Abschnitte statt eines einzigen Blocks: Die vier Kunden-Fallstudien
 * laufen auf Off-White, die AR-Media-Fallstudie samt Lookbook bekommt einen
 * eigenen, dezenten Sand-Hintergrund (derselbe Ton wie im Abschluss direkt
 * darunter, keine neue Farbe) und mehr Luft. Das markiert sie als bewusstes
 * letztes Kapitel statt eines fünften, gleichwertigen Blocks in derselben
 * Reihe, und bricht die sonst gleichmäßige Abfolge auf, ohne die einzelnen
 * Fallstudien selbst umzubauen.
 *
 * Jede Fallstudie trägt jetzt zusätzlich eine leise "Leistungen"-Zeile
 * (kein Badge, kein Icon, keine Box), die benennt, was im Projekt tatsächlich
 * erbracht wurde, abgeleitet direkt aus der jeweiligen "Umsetzung"-Zeile,
 * nichts hinzuerfunden.
 */
export function FaelleSection() {
  return (
    <>
    <section aria-label="Fallstudien" className="bg-off-white px-6 pb-28 lg:pb-36">
      <div className="mx-auto max-w-[1400px] space-y-28 lg:space-y-40">
        <FallCard
          id="saat"
          index="01"
          name="Saat für den Norden"
          domain="Marke"
          media={
            <div className="space-y-4">
              <div className="relative aspect-[2000/593] w-full overflow-hidden bg-[#f4f2ee]">
                <Image
                  src="/images/unternehmen/saat-vorher-nachher.jpg"
                  alt="Saat für den Norden: Signet vor und nach der Überarbeitung"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-contain p-8"
                />
              </div>
              <div className="relative grid aspect-[3/2] w-full grid-cols-[3fr_2fr] gap-4 overflow-hidden">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/case-studies/saat-schild.jpg"
                    alt="Beschilderung der Marke Saat für den Norden"
                    fill
                    sizes="(min-width: 1024px) 280px, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/case-studies/saat-fahrzeug.jpg"
                    alt="Fahrzeugbeschriftung der Marke Saat für den Norden"
                    fill
                    sizes="(min-width: 1024px) 180px, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          }
          stages={[
            { label: "Ausgangssituation", text: "Das bestehende Zeichen wirkte zart und blieb im Alltag kaum im Gedächtnis." },
            { label: "Beobachtung", text: "Die Idee dahinter, Flügel, Wachstum, Wurzel, war bereits richtig. Nur sichtbar war sie kaum." },
            { label: "Strategie", text: "Die Symbolik des Ahornsamens auf ihre Essenz reduzieren, statt ein neues Zeichen zu erfinden." },
            { label: "Umsetzung", text: "Neues Signet, kräftigere Wortmarke, eine Farbwelt über Fahrzeug, Beschilderung und Print hinweg." },
            { label: "Ergebnis", text: "Eine Marke, die auf den ersten Blick wiedererkennbar ist, vom Firmenwagen bis zur Visitenkarte." },
            { label: "Learnings", text: "Nicht jedes Zeichen braucht eine neue Idee. Manchmal muss die vorhandene nur zu Ende gedacht werden." },
          ]}
          leistungen={["Branding", "Corporate Design", "Print"]}
        />

        <FallCard
          id="kitafotografie"
          index="02"
          name="Kitafotografie"
          domain="Fotografie"
          reverse
          media={
            <div className="relative aspect-4/5 w-full overflow-hidden">
              <Image
                src="/images/home/beweis-kita-moment.jpg"
                alt="Authentischer Moment aus einer AR Media Kita-Fotografie"
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover"
              />
            </div>
          }
          stages={[
            { label: "Ausgangssituation", text: "Klassische Kitafotografie bedeutet für Einrichtungen vor allem Organisationsaufwand, und für Eltern gestellte Mappenfotos, die selten zeigen, wie ihr Kind wirklich ist." },
            { label: "Beobachtung", text: "Kinder lassen sich nicht auf Kommando in Pose stellen. Die ehrlichsten Bilder entstehen, wenn niemand mehr posiert." },
            { label: "Strategie", text: "Fotografie, die sich dem Kita-Alltag anpasst, statt ihn zu unterbrechen, kombiniert mit einem digitalen Ablauf, der die Einrichtung entlastet." },
            { label: "Umsetzung", text: "Echte Situationen statt gestellter Fotos, dazu Onlinegalerie und Elternportal für die Bestellung, DSGVO-konform, ohne Papierkram für die Einrichtung." },
            { label: "Ergebnis", text: "Kinder, wie sie tatsächlich sind, festgehalten, plus ein Ablauf, den Erzieherinnen und Eltern ohne Mehraufwand nutzen." },
            { label: "Learnings", text: "Gute Kitafotografie ist kein Fotografie-Problem. Es ist ein Organisationsproblem, das man mitlösen muss." },
          ]}
          leistungen={["Fotografie", "Onlinegalerie", "Elternportal"]}
        />

        <Reveal variant="fade" className="mx-auto flex max-w-lg flex-col items-center gap-3 py-8 text-center">
          <span className="flex items-center gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-sand text-sand" />
            ))}
          </span>
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            {siteConfig.rating.value.toFixed(1).replace(".", ",")} · {siteConfig.rating.count}{" "}
            Google-Bewertungen, dieselbe Sorgfalt auch dort, wo gerade keine Case Study entsteht.
          </p>
        </Reveal>

        <FallCard
          id="adlerhorst"
          index="03"
          name="Zeltlager Adlerhorst"
          domain="Marke"
          media={
            <div className="space-y-4">
              <div className="relative aspect-[2271/1020] w-full overflow-hidden bg-[#f4f2ee]">
                <Image
                  src="/images/unternehmen/adlerhorst-vorher-nachher.jpg"
                  alt="Zeltlager Adlerhorst: Logo vor und nach der Überarbeitung"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-contain p-8"
                />
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[1400/990] w-full overflow-hidden bg-[#f4f2ee]">
                  <Image
                    src="/images/case-studies/adlerhorst-flyer-spende.jpg"
                    alt="Spendenpatenschaft-Flyer des Zeltlagers Adlerhorst im neuen Corporate Design"
                    fill
                    sizes="(min-width: 1024px) 460px, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-[1400/990] w-full overflow-hidden bg-[#f4f2ee]">
                  <Image
                    src="/images/case-studies/adlerhorst-flyer-spendenpate.jpg"
                    alt="Broschüre „Werde Spendenpate fürs Zeltlager“ mit hexagonalem Bildraster"
                    fill
                    sizes="(min-width: 1024px) 460px, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          }
          stages={[
            { label: "Ausgangssituation", text: "Ein Adler-Maskottchen, das es seit rund 50 Jahren gibt, aber auch der gesamte Auftritt drumherum: Schwarz-Weiß, eine handgeschriebene Schrift im Comic-Sans-Charakter, auf modernen Kanälen kaum mehr einsetzbar." },
            { label: "Beobachtung", text: "Für ehemalige wie aktuelle Teilnehmer trägt dieses Zeichen echte Erinnerung. Das Problem war nie die Figur, sondern wie wenig Farbe, Typografie und System bisher zeigten, was sie eigentlich ist." },
            { label: "Strategie", text: "Das vertraute Zeichen nicht ersetzen, sondern in Farbe, Typografie und ein zeitgemäßes, konsistentes System überführen, für den ganzen Auftritt, nicht nur das Signet." },
            { label: "Umsetzung", text: "Neu illustrierter Adler in Farbe, eigene Wortmarke statt Comic-Sans-Charakter, hexagonales Bildraster, laufende Social-Media- und Kampagnenbetreuung." },
            { label: "Ergebnis", text: "Von der Helfersuche bis zum Jubiläum trägt jetzt eine durchgängige, wiedererkennbare Stimme." },
            { label: "Learnings", text: "Tradition ist kein Widerspruch zu einem modernen Auftritt. Sie ist oft sein stärkstes Fundament." },
          ]}
          leistungen={["Branding", "Corporate Design", "Social Media", "Kampagnen"]}
        />

        <FallCard
          id="royal-charming"
          index="04"
          name="Royal Charming"
          domain="Marke"
          reverse
          media={
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square w-full overflow-hidden bg-[#5c0f1f]">
                <Image
                  src="/images/case-studies/royal-charming-logo.jpg"
                  alt="Royal Charming, offizielles Markenlogo"
                  fill
                  sizes="(min-width: 1024px) 227px, 50vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src="/images/case-studies/royal-charming-hund.jpg"
                  alt="Welpe der Zucht Royal Charming"
                  fill
                  sizes="(min-width: 1024px) 227px, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          }
          stages={[
            { label: "Ausgangssituation", text: "Eine junge Marke ohne durchgängigen Auftritt zwischen Logo, Social Media und Print." },
            { label: "Beobachtung", text: "Was fehlte, war nicht Substanz. Es fehlte ein System, das die Substanz zusammenhält." },
            { label: "Strategie", text: "Ein Gesamtsystem statt einzelner Bausteine." },
            { label: "Umsetzung", text: "Von der Gründung über die Läufigkeit der Zuchthündin bis zur Geburt begleitet, mit Logo, Social-Media-Content, Website und Print aus einer Hand." },
            { label: "Ergebnis", text: "Alle 9 Welpen innerhalb von 8 Wochen erfolgreich vermittelt, allein über Website und Social Media, vor allem Instagram." },
            { label: "Learnings", text: "Ein konsistenter Auftritt ersetzt kein Marketingbudget. Er macht Vertrauen sichtbar, bevor ein einziges Wort verkauft wird." },
          ]}
          leistungen={["Branding", "Social Media", "Website", "Print"]}
        />
      </div>
    </section>

    <section aria-label="AR Media als eigene Fallstudie" className="bg-sand/25 px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <FallCard
          id="ar-media"
          index="05"
          name="AR Media"
          domain="Die eigene Marke"
          layout="wide"
          media={
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="relative aspect-square w-full overflow-hidden bg-deep-forest">
                  <Image
                    src="/images/case-studies/rebrand-altes-logo.jpg"
                    alt="Früheres Signet: kreisförmiges Monogramm „Alexander Rieck“"
                    fill
                    sizes="(min-width: 1024px) 340px, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-[11px] font-medium tracking-[0.12em] text-charcoal/75 uppercase">
                  Altes Signet
                </p>
              </div>
              <div>
                <div className="relative aspect-square w-full overflow-hidden bg-charcoal">
                  <Image
                    src="/images/case-studies/rebrand-alte-website.jpg"
                    alt="Startseite der früheren AR Media Website"
                    fill
                    sizes="(min-width: 1024px) 340px, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-[11px] font-medium tracking-[0.12em] text-charcoal/75 uppercase">
                  Alte Website
                </p>
              </div>
              <div>
                <div className="relative aspect-square w-full overflow-hidden bg-deep-forest">
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <Image
                      src="/logo-full-light.png"
                      alt="Aktuelles Signet von AR Media"
                      width={600}
                      height={442}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
                <p className="mt-3 text-[11px] font-medium tracking-[0.12em] text-charcoal/75 uppercase">
                  Heute
                </p>
              </div>
            </div>
          }
          stages={[
            { label: "Ausgangssituation", text: "Ein kreisförmiges Namensmonogramm, danach eine Ein-Personen-Website: Alexander Rieck, Social Media Manager, Fotograf. Ein Foto, ein Name, eine Berufsbezeichnung." },
            { label: "Beobachtung", text: "Es gab noch kein ausgereiftes Konzept, keine eigene Idee, die alles zusammenhielt. Nur einzelne Versuche ohne gemeinsames System." },
            { label: "Strategie", text: "Aus einer Ich-Marke eine eigenständige Marke machen: ein Zeichen statt eines Namens, zwei gleichwertige Säulen statt eines Berufstitels." },
            { label: "Umsetzung", text: "Neues Signet aus A und R, eine ruhigere Farbwelt, ein eigenes Lookbook, das die Identität über die Website hinaus durchspielt, und eine vollständige, mehrseitige Website mit klarer Struktur statt einer einzelnen Seite." },
            { label: "Ergebnis", text: "Diese Website selbst ist das Ergebnis, vom Signet bis zur Struktur, mit der sie gebaut ist." },
            { label: "Learnings", text: "Manche Dinge muss man nicht verändern. Man muss sie nur sichtbar machen, auch bei der eigenen Marke." },
          ]}
          leistungen={["Branding", "Corporate Design", "Lookbook", "Website"]}
        />

        <Reveal delay={0.15} className="mt-20">
          <h3 className="text-[11px] font-medium tracking-[0.12em] text-charcoal/75 uppercase">
            Weitergedacht: das Lookbook
          </h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
            Um zu testen, ob das neue Signet auch jenseits des Bildschirms trägt, ist parallel ein
            eigenes Lookbook entstanden, mit Markengeschichte, Farbwelt und Produktkonzepten wie
            dieser Founder Cap. Kein Shop, keine laufende Kollektion, sondern die Probe, ob die Idee
            auch auf Stoff funktioniert.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="relative aspect-2/3 w-full overflow-hidden bg-[#f4f2ee]">
              <Image
                src="/images/case-studies/lookbook-cover.jpg"
                alt="Titelseite des AR Media Lookbooks"
                fill
                sizes="(min-width: 1024px) 300px, 33vw"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-2/3 w-full overflow-hidden bg-[#f4f2ee]">
              <Image
                src="/images/case-studies/lookbook-cap.jpg"
                alt="Produktseite der Founder Cap aus dem AR Media Lookbook"
                fill
                sizes="(min-width: 1024px) 300px, 33vw"
                className="object-contain"
              />
            </div>
            <div className="relative col-span-2 aspect-2/3 w-full overflow-hidden bg-[#f4f2ee] sm:col-span-1">
              <Image
                src="/images/case-studies/lookbook-palette.jpg"
                alt="Farbpalette aus dem AR Media Lookbook"
                fill
                sizes="(min-width: 1024px) 300px, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
    </>
  );
}
