"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { HOME, UI } from "@/lib/data/site";
import { STYLES } from "@/lib/data/styles";
import Img from "./Img";
import TextReveal from "./TextReveal";
import LinkArrow from "./LinkArrow";
import { TLink } from "./Transition";

/** Pinned horizontal gallery of the six kitchen styles (swipe on mobile). */
export default function StylesHorizontal() {
  const { t, lang } = useLang();
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sec = section.current;
    const tr = track.current;
    if (!sec || !tr || prefersReducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const rtl = document.documentElement.dir === "rtl";
      const distance = () => Math.max(0, tr.scrollWidth - window.innerWidth);
      const tween = gsap.to(tr, {
        x: () => (rtl ? distance() : -distance()),
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (st) => {
            if (bar.current) bar.current.style.transform = `scaleX(${st.progress})`;
          },
        },
      });
      return () => tween.scrollTrigger?.kill();
    });
    return () => mm.revert();
  }, [lang]);

  return (
    <section ref={section} className="sec-dark overflow-hidden" aria-labelledby="styles-title">
      <div className="flex min-h-[100svh] flex-col justify-center py-24 lg:py-0">
        <div className="wrap flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="label flex items-center gap-4 text-brass">
              <span className="rule" aria-hidden />
              {t(HOME.stylesLabel)}
            </p>
            <div id="styles-title">
              <TextReveal text={t(HOME.stylesTitle)} className="display h2 mt-6 max-w-3xl" />
            </div>
          </div>
          <LinkArrow href="/styles" label={UI.allStyles} />
        </div>
        <div className="no-scrollbar mt-14 overflow-x-auto lg:overflow-visible">
          <div ref={track} className="flex w-max gap-6 px-[var(--pad)] lg:gap-10">
            {STYLES.map((s) => (
              <TLink key={s.slug} href={`/styles/${s.slug}`} className="group block w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw] xl:w-[26vw]">
                <div className="img-zoom relative aspect-[4/5] overflow-hidden">
                  <Img image={s.hero} className="h-full w-full" sizes="(min-width: 1024px) 30vw, 78vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute start-5 top-5 font-display text-5xl text-bone/90" dir="ltr">{s.number}</span>
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="display h3">{t(s.name)}</h3>
                    <p className="mt-2 text-sm text-bone/75">{t(s.tagline)}</p>
                  </div>
                </div>
              </TLink>
            ))}
            <div className="hidden w-[10vw] shrink-0 lg:block" aria-hidden />
          </div>
        </div>
        <div className="wrap mt-10 hidden lg:block">
          <div className="h-px w-full bg-hair">
            <span ref={bar} className="block h-px w-full origin-left bg-brass rtl:origin-right" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
