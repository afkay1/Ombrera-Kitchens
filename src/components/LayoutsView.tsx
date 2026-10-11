"use client";

import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/data/site";
import { LAYOUTS } from "@/lib/data/layouts";
import { l } from "@/lib/types";
import PlanSVG from "./PlanSVG";
import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";

export default function LayoutsView() {
  const { t } = useLang();
  return (
    <>
      {LAYOUTS.map((lay, i) => (
        <section key={lay.slug} id={lay.slug} className={`scroll-mt-24 ${i % 2 ? "sec-surface" : "sec-dark"}`} aria-labelledby={`lay-${lay.slug}`}>
          <div className="wrap grid items-center gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-32">
            <div className={`md:col-span-4 ${i % 2 ? "md:order-2 md:col-start-9" : ""}`}>
              <p className="label text-brass" dir="ltr">0{i + 1} / 0{LAYOUTS.length}</p>
              <TextReveal as="h2" text={t(lay.name)} className="display h1 mt-4" />
              <div id={`lay-${lay.slug}`} className="sr-only">{t(lay.name)}</div>
              <PlanSVG plan={lay.plan} title={t(lay.name)} className="mt-10 max-w-sm text-bone" />
              <Reveal className="mt-10">
                <p data-reveal className="text-mute">{t(lay.text)}</p>
                <dl data-reveal className="mt-8 grid grid-cols-2 gap-6 border-t border-h pt-6 text-sm">
                  <div>
                    <dt className="label text-mute">{t(UI.bestFor)}</dt>
                    <dd className="mt-2">{t(lay.bestFor)}</dd>
                  </div>
                  <div>
                    <dt className="label text-mute">{t(UI.idealSize)}</dt>
                    <dd className="mt-2">{t(lay.size)}</dd>
                  </div>
                </dl>
                <ul data-reveal className="mt-8 space-y-2">
                  {lay.pros.map((p, k) => (
                    <li key={k} className="flex items-center gap-3">
                      <span className="h-px w-5 bg-brass" aria-hidden />
                      {t(p)}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className={`md:col-span-7 ${i % 2 ? "md:order-1 md:col-start-1" : "md:col-start-6"}`}>
              <ImageReveal image={lay.image} className="aspect-[3/2]" sizes="(min-width: 768px) 58vw, 100vw" />
            </div>
          </div>
        </section>
      ))}

      <section className="sec-light">
        <div className="wrap py-24 md:py-32">
          <p className="label flex items-center gap-4 text-brass">
            <span className="rule" aria-hidden />
            {t(l("At a glance", "نظرة سريعة"))}
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-start">
              <thead>
                <tr className="border-b border-h text-mute">
                  <th scope="col" className="label py-4 text-start">{t(l("Layout", "التصميم"))}</th>
                  <th scope="col" className="label py-4 text-start">{t(UI.idealSize)}</th>
                  <th scope="col" className="label py-4 text-start">{t(UI.bestFor)}</th>
                </tr>
              </thead>
              <tbody>
                {LAYOUTS.map((lay) => (
                  <tr key={lay.slug} className="border-b border-h">
                    <th scope="row" className="display h3 py-5 text-start font-normal">
                      <a href={`#${lay.slug}`} className="hover:text-brass">{t(lay.name)}</a>
                    </th>
                    <td className="py-5">{t(lay.size)}</td>
                    <td className="py-5 text-mute">{t(lay.bestFor)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
