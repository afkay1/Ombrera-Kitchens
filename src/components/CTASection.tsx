"use client";

import { useLang } from "@/lib/i18n";
import { BRAND, HOME, UI } from "@/lib/data/site";
import { img, l } from "@/lib/types";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import Magnetic from "./Magnetic";
import { TLink } from "./Transition";

export default function CTASection() {
  const { t } = useLang();
  return (
    <section aria-label={t(HOME.ctaTitle)}>
      <Parallax
        image={img("home-hero-night", l("Kitchen glowing at night", "مطبخ مضاء ليلاً"))}
        className="min-h-[80svh] bg-ink"
        amount={8}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="wrap relative flex min-h-[80svh] flex-col items-center justify-center py-28 text-center text-bone">
          <span className="rule" aria-hidden />
          <TextReveal text={t(HOME.ctaTitle)} className="display h1 mt-10 max-w-4xl" />
          <Reveal className="mt-8 max-w-xl">
            <p data-reveal className="text-bone/75">{t(HOME.ctaText)}</p>
            <div data-reveal className="mt-12 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <TLink href="/consultation" className="btn btn-brass">{t(UI.book)}</TLink>
              </Magnetic>
              <a href={`https://wa.me/${BRAND.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                {t(UI.whatsapp)}
              </a>
            </div>
          </Reveal>
        </div>
      </Parallax>
    </section>
  );
}
