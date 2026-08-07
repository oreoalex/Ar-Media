import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Während der aktiven Bauphase deaktiviert, da der persistente Turbopack-
  // Dev-Cache wiederholt veraltete Server-Module auslieferte (z. B. entfernte
  // Icon-Importe blieben nach Fixes im Cache bestehen).
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
