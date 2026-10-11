"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { BRAND, NAV, UI } from "@/lib/data/site";
import Logo from "./Logo";
import { TLink } from "./Transition";

const SOLID = [/^\/consultation/];

export default function Header() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open || SOLID.some((r) => r.test(pathname));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-bone transition-[background-color,border-color,backdrop-filter] duration-700 ease-lux ${
          solid ? "border-b border-hair bg-ink/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[var(--header)] max-w-[1480px] items-center justify-between gap-6 px-[var(--pad)]">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
            {NAV.map((n) => (
              <TLink
                key={n.href}
                href={n.href}
                aria-current={active(n.href) ? "page" : undefined}
                className="group relative py-2 text-[13.5px] font-medium tracking-[0.06em] rtl:text-[15px] rtl:tracking-normal"
              >
                {t(n.label)}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brass transition-transform duration-500 ease-lux group-hover:scale-x-100 rtl:origin-right ${
                    active(n.href) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </TLink>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              aria-label={t(UI.langLabel)}
              className="text-[13px] font-semibold tracking-[0.08em] transition-colors hover:text-brass"
            >
              {t(UI.langSwitch)}
            </button>
            <TLink href="/consultation" className="btn btn-brass hidden min-h-[44px] px-5 md:inline-flex">
              {t(UI.bookShort)}
            </TLink>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t(UI.close) : t(UI.menu)}
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className={`absolute h-px w-6 bg-current transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-1"}`} />
              <span className={`absolute h-px w-6 bg-current transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-1"}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink pt-[var(--header)] text-bone transition-[opacity,visibility] duration-700 ease-lux lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center gap-1">
          {[{ href: "/", label: UI.home }, ...NAV].map((n, i) => (
            <TLink
              key={n.href}
              href={n.href}
              tabIndex={open ? 0 : -1}
              className="display py-1 text-[46px] transition-[transform,opacity] duration-700 ease-lux hover:text-brass sm:text-[60px]"
              style={{ transitionDelay: open ? `${100 + i * 50}ms` : "0ms", transform: open ? "none" : "translateY(24px)", opacity: open ? 1 : 0 }}
            >
              {t(n.label)}
            </TLink>
          ))}
        </nav>
        <div className="wrap flex flex-col gap-6 border-t border-hair py-8">
          <TLink href="/consultation" tabIndex={open ? 0 : -1} className="btn btn-brass w-full">
            {t(UI.book)}
          </TLink>
          <div className="flex flex-wrap justify-between gap-4 text-sm text-muted">
            <a href={BRAND.phoneHref} tabIndex={open ? 0 : -1} dir="ltr">{BRAND.phone}</a>
            <a href={`https://wa.me/${BRAND.whatsappNumber}`} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              {t(UI.whatsapp)}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
