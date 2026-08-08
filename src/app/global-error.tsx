"use client";

/**
 * Fängt Fehler ab, die sogar das Root-Layout selbst betreffen (sehr
 * selten). Next.js verlangt hier eigenes <html>/<body>, weil das normale
 * Layout in diesem Fall nicht mehr sicher rendert. Bewusst minimal und
 * ohne Abhängigkeit von Fonts/Providern aus layout.tsx, damit diese Seite
 * auch dann noch funktioniert, wenn genau die kaputt sind.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f7f4ee", color: "#1a1a1a" }}>
        <div style={{ minHeight: "70svh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div style={{ maxWidth: 480, textAlign: "center" }}>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(26,26,26,0.45)" }}>
              Ein Fehler ist aufgetreten
            </p>
            <h1 style={{ marginTop: 24, fontSize: 28, lineHeight: 1.2, fontStyle: "italic" }}>
              Das hat gerade nicht funktioniert.
            </h1>
            <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, color: "rgba(26,26,26,0.7)" }}>
              Etwas ist auf unserer Seite schiefgelaufen. Ein erneuter Versuch löst das meistens
              schon.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                marginTop: 28,
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "#1a1a1a",
                background: "transparent",
                border: "1px solid rgba(26,26,26,0.3)",
                borderRadius: 4,
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Erneut versuchen
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
