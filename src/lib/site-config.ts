export const siteConfig = {
  name: "AR Media",
  claim: "Let me show you what's already there.",
  // Nennt die drei Säulen (Unternehmen, Fotografie, Kita & Schule) mit
  // gleichem Gewicht, statt zwei als Handschrift zu nennen und die dritte
  // nur als Nutznießer mitzuführen (siehe GEO-Audit: KI-Systeme, die diese
  // eine Zeile extrahieren, lasen Kita & Schule sonst als nachrangig).
  description:
    "AR Media verbindet Unternehmen, Fotografie und Kita & Schule zu einer Handschrift, mit der wir in Kiel und Schleswig-Holstein sichtbar machen, was bereits da ist.",
  url: "https://www.ar-media-kiel.de",
  locale: "de_DE",
  founded: "2023",
  location: {
    city: "Kiel",
    region: "Schleswig-Holstein",
    country: "Deutschland",
    countryCode: "DE",
    street: "Amrumring 33",
    postalCode: "24107",
  },
  // Reale Google-Bewertungen (Stand: Google Business Profile "AR Media",
  // Screenshot des Inhabers) — bewusst kein erfundener Wert.
  rating: {
    value: 5.0,
    count: 4,
  },
  founder: {
    name: "Alexander Rieck",
    role: "Gründer, AR Media",
  },
  contact: {
    email: "info@ar-media-kiel.de",
    phone: "+49 1520 2718767",
  },
  social: {
    instagram: "https://instagram.com/ar_media_kiel",
    linkedin: "https://www.linkedin.com/in/alexander-rieck-4757721a1/",
    // Offizieller Google-Share-Link vom Inhaber, per Browser gegen die
    // echte Google-Maps-Adresse verifiziert (Koordinaten 54.35678,10.08002
    // stimmen mit der geokodierten Adresse überein) — kein selbst
    // konstruierter CID-/Place-ID-Link, sondern der Link, den Googles
    // eigene "Teilen"-Funktion für dieses Profil erzeugt hat.
    googleBusiness: "https://share.google/fprQMFQ07cIiHuikf",
  },
} as const;

export type SiteConfig = typeof siteConfig;
