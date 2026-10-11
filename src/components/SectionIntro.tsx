"use client";

import { useLang } from "@/lib/i18n";
import type { L } from "@/lib/types";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import LinkArrow from "./LinkArrow";

export default function SectionIntro({ label, title, text, link, className = "" }: { label: L; title: L; text?: L; link?: { href: string; label: L }; className?: string }) {
  const { t } = useLang();
  return (
    <div className={`grid gap-8 md:grid-cols-12 md:items-end ${className}`}>
      <div className="md:col-span-7">
        <Reveal>
          <p data-reveal className="label flex items-center gap-4 text-brass">
            <span className="rule" aria-hidden />
            {t(label)}
          </p>
        </Reveal>
        <TextReveal text={t(title)} className="display h2 mt-6" />
      </div>
      {(text || link) && (
        <Reveal className="flex flex-col items-start gap-8 md:col-span-4 md:col-start-9">
          {text && <p data-reveal className="text-mute">{t(text)}</p>}
          {link && (
            <div data-reveal>
              <LinkArrow href={link.href} label={link.label} />
            </div>
          )}
        </Reveal>
      )}
    </div>
  );
}
