import type { WissenArticle } from "@/lib/wissen/types";

export const datenschutzRechtArticles: WissenArticle[] = [
  {
    title: "Impressum auf Instagram",
    slug: "impressum-instagram",
    category: "datenschutz-recht",
    description:
      "Wann ein Instagram-Profil ein Impressum braucht, welche Angaben hineingehören und wie es sich rechtssicher einbinden lässt.",
    intro:
      "Diese Seite dient der allgemeinen Orientierung und ersetzt keine individuelle Rechtsberatung. Sie beschreibt die aktuelle Rechtslage, so weit sie zum Zeitpunkt der Veröffentlichung öffentlich zugänglichen, offiziellen Quellen entnommen werden konnte.",
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-05",
    readingTime: 7,
    featured: true,
    audience: ["gruender", "unternehmen", "creator", "personal-brand", "lokale-unternehmen"],
    tags: ["Impressum", "DDG", "Instagram", "Rechtliches"],
    // Noch nicht zur Indexierung freigegeben, bis die Quellenlage (insbesondere
    // eine mögliche Aktualisierung durch neuere Rechtsprechung) erneut geprüft
    // wurde — Präzedenzfall: kita-schule/ablauf-datenschutz/page.tsx.
    noindex: true,
    quickSummary: [
      "Seit Mai 2024 ist nicht mehr das Telemediengesetz (TMG), sondern das Digitale-Dienste-Gesetz (DDG) maßgeblich, die Impressumspflicht steht jetzt in § 5 DDG.",
      "Ein Instagram-Profil kann impressumspflichtig sein, sobald es geschäftsmäßig genutzt wird, unabhängig von den Privatsphäre-Einstellungen.",
      "Pflichtangaben sind unter anderem vollständiger Name oder Firmenbezeichnung, eine ladungsfähige Anschrift und eine funktionierende Kontaktmöglichkeit.",
      "Ein Link in der Bio zu einer Website mit vollständigem Impressum kann nach einer Entscheidung des OLG Hamburg ausreichen.",
      "Dieser Artikel ersetzt keine individuelle Rechtsberatung.",
    ],
    sections: [
      {
        id: "rechtsgrundlage",
        heading: "Die aktuelle Rechtsgrundlage: § 5 DDG",
        content: (
          <>
            <p>
              Bis April 2024 war die Pflicht zur sogenannten Anbieterkennzeichnung im Telemediengesetz (TMG)
              geregelt, dort in § 5. Seit Mai 2024 wurde das TMG durch das Digitale-Dienste-Gesetz (DDG) abgelöst,
              die inhaltlich weitgehend unveränderte Pflicht findet sich seitdem in § 5 DDG. Wer heute noch auf
              „§ 5 TMG“ verweist, bezieht sich auf eine Norm, die es in dieser Form nicht mehr gibt, ein Hinweis
              darauf, dass ein Text schon länger nicht mehr überprüft wurde.
            </p>
          </>
        ),
      },
      {
        id: "wann-relevant",
        heading: "Wann kann ein Instagram-Profil betroffen sein?",
        content: (
          <>
            <p>
              Die Impressumspflicht knüpft nicht an die technische Sichtbarkeit eines Profils an, sondern daran,
              ob es geschäftsmäßig betrieben wird, etwa zur Vermarktung eines Unternehmens, eines eigenen
              Angebots oder im Rahmen bezahlter Kooperationen. Ein Profil, das ausschließlich privat und ohne
              wirtschaftlichen Zweck genutzt wird, fällt in der Regel nicht darunter. Sobald wirtschaftliche
              Interessen im Vordergrund stehen, kann die Pflicht relevant werden, auch wenn das Profil nur für
              bestätigte Follower sichtbar ist.
            </p>
          </>
        ),
      },
      {
        id: "anforderungen",
        heading: "Anforderungen an Erreichbarkeit und Angaben",
        content: (
          <>
            <p>
              § 5 DDG verlangt, dass die Angaben leicht erkennbar, unmittelbar erreichbar und ständig verfügbar
              sind. Zu den typischen Pflichtangaben gehören der vollständige Name oder die Firmenbezeichnung, eine
              ladungsfähige Anschrift, kein Postfach und kein loser Briefkasten, sowie eine funktionierende
              Kontaktmöglichkeit für eine schnelle elektronische Kontaktaufnahme, meist eine E-Mail-Adresse. Bei
              einer UG oder GmbH gehört zusätzlich die vertretungsberechtigte Person dazu.
            </p>
          </>
        ),
      },
      {
        id: "technische-umsetzung",
        heading: "Technische Umsetzung: reicht ein Link in der Bio?",
        content: (
          <>
            <p>
              Das Oberlandesgericht Hamburg hat am 21. Mai 2026 entschieden (Az. 15 U 99/24), dass ein Impressum
              auch über einen Link in der Instagram-Bio zu einer externen Website mit vollständigem Impressum
              den gesetzlichen Anforderungen genügen kann. Ein gesonderter, eigens als „Impressum“ bezeichneter
              Link innerhalb von Instagram ist demnach nicht zwingend erforderlich, solange die Angaben über den
              Bio-Link tatsächlich leicht erkennbar, unmittelbar erreichbar und ständig verfügbar sind. Eine
              häufig genannte Faustregel ist, dass das Impressum über höchstens zwei Klicks erreichbar sein
              sollte.
            </p>
            <p className="mt-4">
              Vorübergehende technische Störungen, etwa ein zeitweise nicht erreichbarer Link, begründen laut
              dieser Entscheidung keinen Verstoß, sofern sie nicht im Einflussbereich der Profilbetreiberin oder
              des Profilbetreibers liegen.
            </p>
          </>
        ),
      },
      {
        id: "risiken",
        heading: "Mögliche Risiken bei fehlender Anbieterkennzeichnung",
        content: (
          <>
            <p>
              Ein fehlendes oder unvollständiges Impressum bei geschäftlicher Nutzung kann grundsätzlich
              wettbewerbsrechtlich abgemahnt werden. Wie hoch dieses Risiko im Einzelfall tatsächlich ist, hängt
              von vielen Faktoren ab, die dieser Artikel nicht pauschal bewerten kann. Bei Unsicherheit ist eine
              individuelle rechtliche Beratung der richtige Weg, nicht eine allgemeine Orientierungsseite wie
              diese.
            </p>
          </>
        ),
      },
    ],
    praxisbeispiel: (
      <p>
        Ein Instagram-Profil eines Kieler Dienstleisters verlinkt in der Bio direkt auf die Startseite der
        eigenen Website. Dort ist im Footer, klar erkennbar und mit höchstens einem weiteren Klick erreichbar,
        das vollständige Impressum hinterlegt. Nach der oben genannten Einordnung ist damit eine gängige,
        praktikable Umsetzung erreicht, ohne dass ein zusätzlicher, gesondert beschrifteter Link innerhalb von
        Instagram nötig wäre.
      </p>
    ),
    beachten: [
      "Nicht mehr auf § 5 TMG verweisen, die aktuelle Norm ist § 5 DDG.",
      "Eine ladungsfähige Anschrift verwenden, kein Postfach.",
      "Das Impressum mit möglichst wenigen Klicks erreichbar machen.",
      "Bei individueller Unsicherheit rechtliche Beratung einholen, dieser Artikel ersetzt sie nicht.",
    ],
    legalNotice: true,
    arMediaSolution: {
      question: "Du bist unsicher, ob und wie dein Profil ein Impressum braucht?",
      answer:
        "Wir unterstützen dich dabei, deinen digitalen Auftritt sauber aufzustellen, für die konkrete rechtliche Einschätzung empfehlen wir eine spezialisierte Rechtsberatung.",
      ctaLabel: "Projekt besprechen",
      ctaHref: "/kontakt/projekt-besprechen",
    },
    officialResources: [
      {
        name: "§ 5 DDG im Volltext (gesetze-im-internet.de)",
        href: "https://www.gesetze-im-internet.de/ddg/__5.html",
        description: "Der amtliche Gesetzestext zur Informationspflicht nach § 5 DDG.",
      },
    ],
    relatedArticles: [
      { category: "social-media", slug: "instagram-account-aufbauen" },
      { category: "social-media", slug: "instagram-fuer-creator" },
    ],
    seoTitle: "Impressum auf Instagram: § 5 DDG einfach erklärt",
    seoDescription:
      "Wann ein Instagram-Profil ein Impressum braucht, welche Angaben Pflicht sind und ob ein Link in der Bio ausreicht. Allgemeine Orientierung, keine Rechtsberatung.",
  },
];
