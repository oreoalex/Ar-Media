import type { Metadata } from "next";
import { ElternContent } from "@/components/sections/kita-schule/eltern-content";

export const metadata: Metadata = {
  title: "Für Eltern",
  description:
    "Bildbeispiele und Bestellprozess für Eltern, deren Kinder von AR Media in Kita oder Schule fotografiert wurden.",
  alternates: { canonical: "/kita-schule/eltern" },
};

export default function Page() {
  return <ElternContent />;
}
