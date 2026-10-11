"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { HOME, UI } from "@/lib/data/site";
import { FINISHES } from "@/lib/data/materials";
import type { L } from "@/lib/types";
import Img from "./Img";
import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";

/** The same kitchen in four finishes; swatches crossfade between photos. */
export default function MaterialSwitcher({ label = HOME.switchLabel, title = HOME.switchTitle, text = HOME.switchText }: { label?: L; title?: L; text?: L }) {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const current = FINISHES[active];

  return (
    <section className="sec-surface" aria-labelledby="switch-title">
      <div className="wrap py-24 md:py-36">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="label flex items-center gap-4 text-brass">
              <span className="rule" aria-hidden />
              {t(label)}
            </p>
            <div id="switch-title">
              <TextReveal text={t(title)} className="display h2 mt-6" />
            </div>
          </div>
          <p className="text-mute md:col-span-4 md:col-start-9">{t(text)}</p>
        </div>

        <div className="relative mt-14 aspect-[4/3] overflow-hidden md:aspect-[16/9]">
          {FINISHES.map((f, i) => (
            <div
              key={f.slug}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-[opacity,transform] duration-[1100ms] ease-lux ${i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`}
            >
              <Img image={f.image} className="h-full w-full" sizes="(min-width: 1480px) 1336px, 100vw" />
            </div>
          ))}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 md:p-10">
            <p className="label text-brass">{t(UI.finish)}</p>
            <p key={current.slug} className="display h3 mt-2 page-in">{t(current.name)}</p>
            <p className="mt-2 max-w-md text-sm text-bone/75">{t(current.text)}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 md:gap-6" role="radiogroup" aria-label={t(UI.finish)}>
          {FINISHES.map((f, i) => (
            <Magnetic key={f.slug} strength={0.3}>
              <button
                role="radio"
                aria-checked={i === active}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 border p-2 pe-5 transition-colors duration-500 ${i === active ? "border-brass" : "border-h hover:border-bone/40"}`}
              >
                <span className="relative block h-14 w-14 overflow-hidden rounded-full">
                  <Img image={f.swatch} className="h-full w-full" sizes="56px" />
                </span>
                <span className={`text-sm font-medium transition-colors ${i === active ? "text-brass" : "text-bone/80"}`}>{t(f.name)}</span>
              </button>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
