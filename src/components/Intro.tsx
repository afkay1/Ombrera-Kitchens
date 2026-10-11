"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/** First-visit intro: OMBRERA letters rise, a brass line draws, then the curtain lifts. */
export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const seen = Boolean(window.__introSeen);
    try {
      sessionStorage.setItem("ombrera-intro", "1");
    } catch {
      /* ignore */
    }
    if (seen || prefersReducedMotion()) {
      gsap.to(el, { opacity: 0, duration: 0.35, onComplete: () => { el.style.display = "none"; } });
      return;
    }
    window.__lenis?.stop();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          el.style.display = "none";
          window.__lenis?.start();
        },
      });
      tl.fromTo("[data-letter]", { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.07 })
        .fromTo("[data-intro-line]", { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "-=0.35")
        .fromTo("[data-intro-sub]", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.4")
        .to(el, { yPercent: -100, duration: 0.9, ease: "power3.inOut" }, "+=0.25");
    }, el);
    return () => {
      ctx.revert();
      window.__lenis?.start();
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="intro fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink">
      <div className="flex overflow-hidden font-display text-[clamp(44px,9vw,120px)] leading-none tracking-[0.18em] text-bone" dir="ltr">
        {"OMBRERA".split("").map((c, i) => (
          <span key={i} data-letter className="inline-block">
            {c}
          </span>
        ))}
      </div>
      <span data-intro-line className="mt-8 block h-px w-48 origin-center bg-brass" />
      <span data-intro-sub className="mt-6 text-[11px] font-semibold uppercase tracking-[0.5em] text-muted" dir="ltr">Kitchens · Riyadh</span>
    </div>
  );
}
