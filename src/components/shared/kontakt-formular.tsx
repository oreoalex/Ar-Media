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
 */
export function KontaktFormular({ fields, toEmail, subjectPrefix, submitLabel }: KontaktFormularProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = values["name"] || "";
    const subject = `${subjectPrefix}${name ? ` — ${name}` : ""}`;
    const body = fields
      .map((f) => `${f.label}: ${values[f.name] || "–"}`)
      .join("\n");
    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.gtag?.("event", "contact_form_submit", { subject_prefix: subjectPrefix });
    window.location.href = mailto;
    setSent(true);
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
          "Dein E-Mail-Programm öffnet sich mit den ausgefüllten Angaben, prüfe kurz, ob alles stimmt, und schick sie ab."}
      </p>
    </form>
  );
}
