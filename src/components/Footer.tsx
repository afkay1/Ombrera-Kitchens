"use client";

import { useLang } from "@/lib/i18n";
import { BRAND, NAV, UI } from "@/lib/data/site";
import { STYLES } from "@/lib/data/styles";
import Logo from "./Logo";
import { TLink } from "./Transition";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="sec-dark border-t border-h">
      <div className="wrap grid gap-14 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-8 max-w-xs text-mute">{t(UI.footerLine)}</p>
          <TLink href="/consultation" className="btn btn-brass mt-10">{t(UI.book)}</TLink>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:col-span-5">
          <div>
            <p className="label text-brass">{t(UI.explore)}</p>
            <ul className="mt-6 space-y-3">
              {[{ href: "/", label: UI.home }, ...NAV, { href: "/consultation", label: UI.bookShort }].map((n) => (
                <li key={n.href}>
                  <TLink href={n.href} className="text-bone/75 transition-colors hover:text-brass">{t(n.label)}</TLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-brass">{t(UI.allStyles)}</p>
            <ul className="mt-6 space-y-3">
              {STYLES.map((s) => (
                <li key={s.slug}>
                  <TLink href={`/styles/${s.slug}`} className="text-bone/75 transition-colors hover:text-brass">{t(s.name)}</TLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="md:col-span-3">
          <p className="label text-brass">{t(UI.visit)}</p>
          <address className="mt-6 space-y-3 not-italic text-bone/75">
            <p>{t(BRAND.address)}</p>
            <p><a href={BRAND.phoneHref} dir="ltr" className="hover:text-brass">{BRAND.phone}</a></p>
            <p><a href={`mailto:${BRAND.email}`} className="hover:text-brass">{BRAND.email}</a></p>
            <p>
              <a href={`https://wa.me/${BRAND.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-brass">
                {t(UI.whatsapp)} <span dir="ltr">{BRAND.whatsapp}</span>
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="wrap flex flex-col gap-3 border-t border-h py-8 text-sm text-mute md:flex-row md:justify-between">
        <p>{t(UI.rights)}</p>
        <p>{t(BRAND.tagline)}</p>
      </div>
    </footer>
  );
}
