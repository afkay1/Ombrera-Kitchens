"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { HOME, PROCESS } from "@/lib/data/site";
import SectionIntro from "./SectionIntro";

export default function Process() {
  const { t } = useLang();
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rtl = document.documentElement.dir === "rtl";
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("li").forEach((li, i) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: li, start: "top 85%", once: true }, delay: i * 0.1 });
        tl.fromTo(li.querySelector("[data-line]"), { scaleX: 0, transformOrigin: rtl ? "right" : "left" }, { scaleX: 1, duration: 1.2, ease: "power3.inOut" });
        tl.fromTo(li.querySelectorAll("[data-step]"), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }, "-=0.7");
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sec-light">
      <div className="wrap py-24 md:py-36">
        <SectionIntro label={HOME.processLabel} title={HOME.processTitle} />
        <ol ref={ref} className="mt-20 grid gap-14 md:grid-cols-4 md:gap-8">
          {PROCESS.map((s, i) => (
            <li key={i}>
              <span data-line className="block h-px w-full bg-ink/25" aria-hidden />
              <p data-step className="mt-8 font-display text-6xl text-brass" dir="ltr">{String(i + 1).padStart(2, "0")}</p>
              <h3 data-step className="display h3 mt-6">{t(s.title)}</h3>
              <p data-step className="mt-3 text-mute">{t(s.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
