"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { HOME, UI } from "@/lib/data/site";
import { img, l } from "@/lib/types";
import Img from "./Img";
import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";
import { TLink } from "./Transition";

const DAY = img("home-hero-day", l("Dark walnut kitchen with a black marble island in daylight", "مطبخ جوز داكن بجزيرة رخام أسود في ضوء النهار"));
const NIGHT = img("home-hero-night", l("The same kitchen at night with warm concealed lighting", "المطبخ نفسه ليلاً بإضاءة دافئة مخفية"));

/** Full-screen hero with a day/night lighting toggle and material hotspots. */
export default function DayNightHero() {
  const { t } = useLang();
  const [night, setNight] = useState(true);
  const [spot, setSpot] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-hero-item]");
    const media = el.querySelector("[data-hero-media]");
    if (prefersReducedMotion()) {
      gsap.set([media, ...Array.from(items)], { opacity: 1, y: 0, scale: 1 });
      return;
    }
    const introPlaying = !window.__introSeen;
    const delay = introPlaying ? 2.6 : 0.2;
    const ctx = gsap.context(() => {
      gsap.fromTo(media, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 2, ease: "power2.out", delay: delay - 0.2 });
      gsap.fromTo(items, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: delay + 0.4 });
    }, el);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (spot === null) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setSpot(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [spot]);

  const [introDelay] = useState(() =>
    typeof window !== "undefined" && window.__introSeen ? 0.5 : 2.9
  );

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] overflow-hidden bg-ink text-bone" aria-label={t(HOME.heroTitle)}>
      <div data-hero-media data-reveal className="absolute inset-0">
        {/* 16:9 stage that always covers the viewport, so hotspot positions stay locked to the photo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "max(100vw, 177.78svh)", height: "max(100svh, 56.25vw)" }}>
          <Img image={DAY} className="absolute inset-0 h-full w-full" priority sizes="100vw" />
          <div className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${night ? "opacity-100" : "opacity-0"}`}>
            <Img image={NIGHT} className="h-full w-full" priority sizes="100vw" />
          </div>
          <div className="hidden md:block">
            {HOME.hotspots.map((h, i) => (
              <div key={i} className="absolute" style={{ left: `${h.x}%`, top: `${h.y}%` }}>
                <button
                  onClick={() => setSpot(spot === i ? null : i)}
                  aria-expanded={spot === i}
                  aria-label={t(h.title)}
                  className="pulse relative -ms-3 -mt-3 flex h-6 w-6 items-center justify-center rounded-full border border-brass bg-ink/40 backdrop-blur"
                >
                  <span className={`block h-1.5 w-1.5 rounded-full bg-brass transition-transform ${spot === i ? "scale-150" : ""}`} />
                </button>
                <div
                  role="dialog"
                  aria-label={t(h.title)}
                  className={`absolute start-6 top-0 w-64 border border-hair bg-ink/85 p-5 backdrop-blur-md transition-all duration-500 ease-lux ${
                    spot === i ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
                  }`}
                >
                  <p className="label text-brass">{t(h.title)}</p>
                  <p className="mt-2 text-sm text-bone/80">{t(h.text)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent rtl:bg-gradient-to-l" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1480px] flex-col justify-end px-[var(--pad)] pb-14 md:pb-20">
        <div className="max-w-3xl">
          <p data-hero-item data-reveal className="label flex items-center gap-4 text-brass">
            <span className="rule" aria-hidden />
            {t(HOME.heroLabel)}
          </p>
          <TextReveal as="h1" text={t(HOME.heroTitle)} immediate delay={introDelay} className="display h-hero mt-6" />
          <p data-hero-item data-reveal className="lead mt-8 max-w-lg text-bone/80">{t(HOME.heroText)}</p>
          <div data-hero-item data-reveal className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <TLink href="/styles" className="btn btn-brass">{t(UI.exploreStyles)}</TLink>
            </Magnetic>
            <TLink href="/consultation" className="btn btn-ghost">{t(UI.book)}</TLink>
          </div>
        </div>
        <div data-hero-item data-reveal className="mt-12 flex items-center justify-between gap-6 border-t border-white/15 pt-6">
          <div className="flex items-center gap-4" role="group" aria-label={t(UI.lighting)}>
            <span className="label text-bone/60">{t(UI.lighting)}</span>
            <div className="flex border border-white/25 p-1">
              {[
                { v: false, label: UI.day },
                { v: true, label: UI.night },
              ].map((o) => (
                <button
                  key={String(o.v)}
                  onClick={() => setNight(o.v)}
                  aria-pressed={night === o.v}
                  className={`px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 rtl:text-[14px] rtl:normal-case rtl:tracking-normal ${
                    night === o.v ? "bg-brass text-ink" : "text-bone/70 hover:text-bone"
                  }`}
                >
                  {t(o.label)}
                </button>
              ))}
            </div>
          </div>
          <span className="label hidden text-bone/50 md:block">{t(UI.scroll)} ↓</span>
        </div>
      </div>
    </section>
  );
}
