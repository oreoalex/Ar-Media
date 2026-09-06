"use client";

import { useState } from "react";
import { BrandChevronDown } from "@/components/shared/brand-chevron-down";
import { CtaButton } from "@/components/shared/cta-button";

type Field =
  | { type: "text"; name: string; label: string; placeholder?: string; required?: boolean }
  | { type: "email"; name: string; label: string; placeholder?: string; required?: boolean }
  | { type: "tel"; name: string; label: string; placeholder?: string; required?: boolean }
  | { type: "select"; name: string; label: string; options: string[]; required?: boolean }
  | { type: "textarea"; name: string; label: string; placeholder?: string; required?: boolean };

type KontaktFormularProps = {
  fields: Field[];
  toEmail: string;
  subjectPrefix: string;
  submitLabel: string;
};

/**
 * Die Website hat (noch) kein eigenes Backend für Formulareingaben, kein
 * API-Endpunkt, kein E-Mail-Versanddienst. Statt eine funktionslose
 * Formular-Attrappe zu bauen (action ins Leere) oder einen Server-Versand
 * vorzutäuschen, den es nicht gibt, baut das Formular beim Absenden einen
 * vorausgefüllten mailto-Link aus den echten Eingaben und öffnet ihn, exakt
 * dasselbe ehrliche, tatsächlich funktionierende Prinzip, das jede
 * CTA-Section der Seite bereits für "Nachricht schreiben" nutzt, nur mit
 * strukturierten Feldern statt eines leeren Postfachs.
 *
 * CRO-Audit (2026-09-06): bewusster Trade-off statt eines echten
 * Versanddienstes — bei Besucher:innen ohne konfigurierten Desktop-
 * Mail-Client (verbreitet bei reiner Web-Mail-Nutzung) öffnet sich nach dem
 * Klick sichtbar nichts, die Anfrage geht verloren, ohne dass die Person
 * es merkt. Es gibt keine zuverlässige Browser-API, die bestätigt, ob ein
 * mailto-Handler existiert — die Heuristik unten (Sichtbarkeits-/Fokus-
 * wechsel innerhalb eines kurzen Zeitfensters nach dem Klick) ist Standard-
 * praxis für genau dieses Problem, aber keine Garantie. Deshalb zusätzlich
 * ein Sicherheitsnetz: bleibt die Seite sichtbar, erscheint eine Kopier-
 * Fläche mit dem fertigen Text plus dem Direktkontakt, statt dass die
 * Anfrage lautlos verloren geht.
 */
export function KontaktFormular({ fields, toEmail, subjectPrefix, submitLabel }: KontaktFormularProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastMessage, setLastMessage] = useState<{ subject: string; body: string } | null>(null);

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = values["name"] || "";
    const subject = `${subjectPrefix}${name ? ` — ${name}` : ""}`;
    const body = fields.map((f) => `${f.label}: ${values[f.name] || "–"}`).join("\n");
    setLastMessage({ subject, body });

    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.gtag?.("event", "contact_form_submit", { subject_prefix: subjectPrefix });

    // Heuristik: öffnet sich tatsächlich ein Mail-Programm, wechselt der
    // Browser-Tab in den Hintergrund (visibilitychange) oder verliert den
    // Fokus (blur), meist innerhalb weniger hundert Millisekunden. Bleibt
    // die Seite währenddessen sichtbar UND fokussiert, gibt es sehr
    // wahrscheinlich keinen registrierten mailto-Handler — dann Fallback
    // zeigen, statt die Anfrage stillschweigend verloren gehen zu lassen.
    let resolved = false;
    const markResolved = () => {
      resolved = true;
      cleanup();
    };
    const cleanup = () => {
      document.removeEventListener("visibilitychange", markResolved);
      window.removeEventListener("blur", markResolved);
    };
    document.addEventListener("visibilitychange", markResolved);
    window.addEventListener("blur", markResolved);

    window.location.href = mailto;
    setSent(true);

    window.setTimeout(() => {
      cleanup();
      if (!resolved) setShowFallback(true);
    }, 1200);
  };

  const handleCopy = async () => {
    if (!lastMessage) return;
    const { subject, body } = lastMessage;
    const text = `An: ${toEmail}\nBetreff: ${subject}\n\n${body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Clipboard-API kann in seltenen Fällen (fehlende Berechtigung, sehr
      // alte Browser) fehlschlagen — der Text steht dann weiterhin sichtbar
      // in der <pre>-Fläche darunter und kann manuell markiert werden.
    }
  };

  const inputClass =
    "w-full border-0 border-b border-charcoal/20 bg-transparent py-3 text-[16px] text-charcoal placeholder:text-charcoal/70 outline-none transition-colors focus:border-deep-forest";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-2 block text-[13px] font-medium tracking-wide text-charcoal/70">
            {field.label}
            {!field.required && <span className="text-charcoal/70"> (optional)</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={4}
              className={inputClass}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          ) : field.type === "select" ? (
            <div className="relative">
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                defaultValue=""
                className={`${inputClass} appearance-none pr-7`}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                <option value="" disabled>
                  Bitte wählen
                </option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <BrandChevronDown
                aria-hidden
                className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-charcoal/70"
              />
            </div>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              className={inputClass}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}

      <div className="mt-10">
        <CtaButton variant="dark">{submitLabel}</CtaButton>
      </div>

      <p role="status" aria-live="polite" className="text-[14px] text-charcoal/70">
        {sent &&
          !showFallback &&
          "Dein E-Mail-Programm öffnet sich mit den ausgefüllten Angaben, prüfe kurz, ob alles stimmt, und schick sie ab."}
      </p>

      {showFallback && lastMessage && (
        <div role="status" aria-live="polite" className="border border-charcoal/15 bg-sand/15 p-6">
          <p className="text-[15px] font-medium text-charcoal">
            Es hat sich kein E-Mail-Programm geöffnet.
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-charcoal/75">
            Das kommt vor, wenn kein Mail-Programm auf diesem Gerät eingerichtet ist, etwa bei
            reiner Nutzung von Gmail oder Outlook im Browser. Kopiere deine Angaben und schick sie
            direkt an{" "}
            <a href={`mailto:${toEmail}`} className="underline decoration-charcoal/30 underline-offset-4 hover:text-deep-forest hover:decoration-deep-forest">
              {toEmail}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={handleCopy}
            className="mt-4 inline-flex items-center gap-2 border border-charcoal/30 px-4 py-2 text-[13px] font-medium tracking-wide text-charcoal transition-colors hover:border-deep-forest hover:text-deep-forest"
          >
            {copied ? "Kopiert" : "Angaben kopieren"}
          </button>
          <pre className="mt-4 max-h-40 overflow-y-auto border border-charcoal/10 bg-off-white p-4 text-[13px] whitespace-pre-wrap text-charcoal/80">
            {`An: ${toEmail}\nBetreff: ${lastMessage.subject}\n\n${lastMessage.body}`}
          </pre>
        </div>
      )}
    </form>
  );
}
