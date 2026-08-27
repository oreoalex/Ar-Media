import type { Metadata } from "next";
import { KiContent } from "@/components/sections/unternehmen/ki-content";

export const metadata: Metadata = {
  title: "KI in der Markenarbeit",
  description:
    "Warum ein kreativer Partner auch dann noch wertvoll ist, wenn KI-Werkzeuge jedem offenstehen: AR Media zu Kreativität, Urteil und Verantwortung in der Markenarbeit.",
  openGraph: {
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "KI in der Markenarbeit · AR Media",
    description:
      "Warum ein kreativer Partner auch dann noch wertvoll ist, wenn KI-Werkzeuge jedem offenstehen: AR Media zu Kreativität, Urteil und Verantwortung in der Markenarbeit.",
  },
  twitter: {
    images: [{ url: "/twitter-image.jpg", width: 1200, height: 630, alt: "AR Media – Signet und Wortmarke" }],
    title: "KI in der Markenarbeit · AR Media",
    description:
      "Warum ein kreativer Partner auch dann noch wertvoll ist, wenn KI-Werkzeuge jedem offenstehen: AR Media zu Kreativität, Urteil und Verantwortung in der Markenarbeit.",
  },
  alternates: { canonical: "/unternehmen/ki" },
};

export default function Page() {
  return <KiContent />;
}
