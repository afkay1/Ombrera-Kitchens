"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import type { Img as ImgT, L } from "@/lib/types";
import Img from "./Img";
import TextReveal from "./TextReveal";

interface Props {
  image: ImgT;
  label: L;
  title: L;
  text?: L;
  children?: React.ReactNode;
}

export default function PageHero({ image, label, title, text, children }: Props) {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const media = el.querySelector("[data-hero-media]");
    const items = el.querySelectorAll("[data-hero-item]");
    if (prefersReducedMotion()) {
      gsap.set([media, ...Array.from(items)], { opacity: 1, y: 0, scale: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(media, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" });
      gsap.fromTo(items, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.5 });
      gsap.to(media, { yPercent: 12, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true } });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative flex min-h-[82svh] items-end overflow-hidden bg-ink text-bone md:min-h-[92svh]">
      <div data-hero-media data-reveal className="absolute inset-0">
        <Img image={image} className="h-full w-full" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />
      </div>
      <div className="wrap relative pb-16 pt-40 md:pb-24">
        <div className="max-w-5xl">
          <p data-hero-item data-reveal className="label flex items-center gap-4 text-brass">
            <span className="rule" aria-hidden />
            {t(label)}
          </p>
          <TextReveal as="h1" text={t(title)} immediate delay={0.35} className="display h-hero mt-6" />
          {text && (
            <p data-hero-item data-reveal className="lead mt-8 max-w-xl text-bone/80">
              {t(text)}
            </p>
          )}
          {children && (
            <div data-hero-item data-reveal className="mt-10 flex flex-wrap items-center gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
