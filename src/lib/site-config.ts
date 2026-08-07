export const siteConfig = {
  name: "AR Media",
  claim: "Let me show you what's already there.",
  description:
    "AR Media verbindet Marketing und Fotografie zu einer Handschrift, mit der wir sichtbar machen, was bei Unternehmen, Menschen, Kitas und Schulen in Kiel und Schleswig-Holstein bereits da ist.",
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
    linkedin: "https://linkedin.com/company/ar-media",
  },
} as const;

export type SiteConfig = typeof siteConfig;
