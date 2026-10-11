"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import type { L } from "@/lib/types";

/** Large statement whose words light up one by one as you scroll. */
export default function StatementFill({ text, label }: { text: L; label?: L }) {
  const { t } = useLang();
  const ref = useRef<HTMLParagraphElement>(null);
  const str = t(text);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const words = el.querySelectorAll("span");
    const ctx = gsap.context(() => {
      gsap.fromTo(words, { opacity: 0.14 }, { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true } });
    }, el);
    return () => ctx.revert();
  }, [str]);

  return (
    <section className="sec-dark">
      <div className="wrap py-32 md:py-48">
        {label && <p className="label mb-10 flex items-center gap-4 text-brass"><span className="rule" aria-hidden />{t(label)}</p>}
        <p ref={ref} className="display h1 max-w-6xl" aria-label={str}>
          {str.split(" ").map((w, i) => (
            <span key={i} aria-hidden>
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
