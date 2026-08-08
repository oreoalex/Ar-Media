import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Web App Manifest, damit "Zum Startbildschirm hinzufügen" auf Mobilgeräten
 * ein echtes Icon und die richtige Markenfarbe zeigt, statt eines
 * generischen Browser-Screenshots. Reine technische Ergänzung, keine neue
 * Markenidentität: Farben und Name entsprechen exakt siteConfig/globals.css.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.claim}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#0d2b24",
    lang: "de-DE",
    icons: [
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
