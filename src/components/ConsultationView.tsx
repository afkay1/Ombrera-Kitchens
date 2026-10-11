"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { BRAND, CONSULT, FORM } from "@/lib/data/site";
import { STYLES } from "@/lib/data/styles";
import { LAYOUTS } from "@/lib/data/layouts";
import { img, l, type L } from "@/lib/types";
import Img from "./Img";
import TextReveal from "./TextReveal";

type Errors = Record<string, string>;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+()\d\s-]{7,20}$/;

function Field({ id, label, error, children, className = "" }: { id: string; label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label text-mute">{label}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-[#a34b2f]">{error}</p>}
    </div>
  );
}

export default function ConsultationView() {
  const { t, lang } = useLang();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [values, setValues] = useState<Record<string, string>>({});

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const inv = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  const select = (id: string, options: L[], required = false) => (
    <select id={id} name={id} required={required} value={values[id] || ""} onChange={set(id)} className="field" {...inv(id)}>
      <option value="" disabled>{t(FORM.choose)}</option>
      {options.map((o) => (
        <option key={o.en} value={o.en}>{t(o)}</option>
      ))}
    </select>
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const errs: Errors = {};
    for (const k of ["name", "city", "projectType", "contactMethod"]) if (!String(d.get(k) || "").trim()) errs[k] = t(FORM.errRequired);
    if (!EMAIL.test(String(d.get("email") || "").trim())) errs.email = t(FORM.errEmail);
    if (!PHONE.test(String(d.get("phone") || "").trim())) errs.phone = t(FORM.errPhone);
    setErrors(errs);
    if (Object.keys(errs).length) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    d.set("lang", lang);
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: d });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  const waText = [
    "Hello Ombrera, I would like a kitchen consultation.",
    values.name && `Name: ${values.name}`,
    values.city && `City: ${values.city}`,
    values.projectType && `Project: ${values.projectType}`,
    values.style && `Style: ${values.style}`,
    values.layout && `Layout: ${values.layout}`,
    values.budget && `Budget: ${values.budget}`,
    values.timeline && `Timeline: ${values.timeline}`,
  ]
    .filter(Boolean)
    .join("\n");
  const waHref = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(waText)}`;

  const styleOptions: L[] = [...STYLES.map((s) => s.name), FORM.notSure];
  const layoutOptions: L[] = [...LAYOUTS.map((x) => x.name), FORM.notSure];

  return (
    <section className="sec-light pt-[var(--header)]">
      <div className="grid lg:grid-cols-12">
        <div className="relative bg-ink lg:col-span-5">
          <div className="lg:sticky lg:top-[var(--header)] lg:h-[calc(100svh-var(--header))]">
            <Img
              image={img("consultation-side", l("Consultation table with a floor plan, samples and Arabic coffee", "طاولة استشارة مع مخطط وعينات وقهوة عربية"))}
              className="aspect-[4/3] h-full w-full lg:aspect-auto"
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
        <div className="px-[var(--pad)] py-16 md:py-24 lg:col-span-7 lg:px-16 xl:px-24">
          <p className="label flex items-center gap-4 text-brass">
            <span className="rule" aria-hidden />
            {t(CONSULT.label)}
          </p>
          <TextReveal as="h1" text={t(CONSULT.title)} immediate className="display h1 mt-6" />
          <p className="lead mt-8 max-w-xl text-mute">{t(CONSULT.text)}</p>

          {status === "done" ? (
            <div role="status" className="mt-14 border-t border-brass pt-10">
              <p className="display h2">{t(FORM.thanksTitle)}</p>
              <p className="mt-4 max-w-md text-mute">{t(FORM.thanksText)}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-14 grid gap-8 md:grid-cols-2">
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              <Field id="name" label={t(FORM.name)} error={errors.name}>
                <input id="name" name="name" autoComplete="name" required className="field" value={values.name || ""} onChange={set("name")} {...inv("name")} />
              </Field>
              <Field id="phone" label={t(FORM.phone)} error={errors.phone}>
                <input id="phone" name="phone" type="tel" autoComplete="tel" dir="ltr" required className="field rtl:text-right" value={values.phone || ""} onChange={set("phone")} {...inv("phone")} />
              </Field>
              <Field id="email" label={t(FORM.email)} error={errors.email}>
                <input id="email" name="email" type="email" autoComplete="email" required className="field" value={values.email || ""} onChange={set("email")} {...inv("email")} />
              </Field>
              <Field id="city" label={t(FORM.city)} error={errors.city}>
                <input id="city" name="city" autoComplete="address-level2" required className="field" value={values.city || ""} onChange={set("city")} {...inv("city")} />
              </Field>
              <Field id="projectType" label={t(FORM.projectType)} error={errors.projectType}>{select("projectType", FORM.projectTypes, true)}</Field>
              <Field id="style" label={t(FORM.style)}>{select("style", styleOptions)}</Field>
              <Field id="layout" label={t(FORM.layout)}>{select("layout", layoutOptions)}</Field>
              <Field id="budget" label={t(FORM.budget)}>{select("budget", FORM.budgets)}</Field>
              <Field id="timeline" label={t(FORM.timeline)}>{select("timeline", FORM.timelines)}</Field>
              <Field id="contactMethod" label={t(FORM.contactMethod)} error={errors.contactMethod}>{select("contactMethod", FORM.methods, true)}</Field>
              <Field id="message" label={t(FORM.message)} className="md:col-span-2">
                <textarea id="message" name="message" rows={4} className="field resize-none" value={values.message || ""} onChange={set("message")} />
              </Field>
              <div className="flex flex-col gap-6 md:col-span-2">
                <div className="flex flex-wrap items-center gap-4">
                  <button type="submit" disabled={status === "sending"} className="btn btn-ink disabled:opacity-60">
                    {status === "sending" ? t(FORM.sending) : t(FORM.send)}
                  </button>
                  <a href={waHref} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    <span>{t(CONSULT.sendWhatsapp)}</span>
                    <span aria-hidden className="arrow inline-block">→</span>
                  </a>
                </div>
                <p className="text-sm text-mute">{t(CONSULT.orWhatsapp)} {t(FORM.privacy)}</p>
                {status === "error" && <p role="alert" className="text-[#a34b2f]">{t(FORM.errGeneric)}</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
