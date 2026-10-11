"use client";

import { useLang } from "@/lib/i18n";
import { BRAND, SHOWROOM, UI } from "@/lib/data/site";
import { img, l, type Img as ImgT, type L } from "@/lib/types";
import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";

function Split({ image, label, title, text, reverse = false, theme = "sec-dark", ratio = "aspect-[3/2]" }: { image: ImgT; label: L; title: L; text: L; reverse?: boolean; theme?: string; ratio?: string }) {
  const { t } = useLang();
  return (
    <section className={theme}>
      <div className="wrap grid items-center gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-32">
        <div className={`md:col-span-7 ${reverse ? "md:order-2 md:col-start-6" : ""}`}>
          <ImageReveal image={image} className={ratio} sizes="(min-width: 768px) 58vw, 100vw" />
        </div>
        <div className={`md:col-span-4 ${reverse ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}>
          <p className="label flex items-center gap-4 text-brass">
            <span className="rule" aria-hidden />
            {t(label)}
          </p>
          <TextReveal text={t(title)} className="display h2 mt-6" />
          <Reveal className="mt-8">
            <p data-reveal className="text-mute">{t(text)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function ShowroomView() {
  const { t } = useLang();
  return (
    <>
      <Split
        image={img("showroom-interior", l("Showroom gallery with full-scale kitchens", "قاعة المعرض مع مطابخ بالحجم الحقيقي"))}
        label={SHOWROOM.introLabel}
        title={SHOWROOM.introTitle}
        text={SHOWROOM.introText}
      />
      <section className="sec-light">
        <div className="wrap py-24 md:py-32">
          <Reveal as="ol" className="grid gap-12 md:grid-cols-3 md:gap-8">
            {SHOWROOM.steps.map((s, i) => (
              <li data-reveal key={i} className="border-t border-h pt-8">
                <span className="font-display text-6xl text-brass" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="display h3 mt-6">{t(s.title)}</h2>
                <p className="mt-3 text-mute">{t(s.text)}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
      <Split
        reverse
        theme="sec-surface"
        ratio="aspect-[4/5]"
        image={img("showroom-materials", l("Material wall of marble, timber and metal samples", "جدار عينات من الرخام والخشب والمعدن"))}
        label={SHOWROOM.materialsLabel}
        title={SHOWROOM.materialsTitle}
        text={SHOWROOM.materialsText}
      />
      <Split
        image={img("showroom-appliances", l("Integrated ovens and induction hob in walnut", "أفران مدمجة وموقد حثّي في الجوز"))}
        label={SHOWROOM.appliancesLabel}
        title={SHOWROOM.appliancesTitle}
        text={SHOWROOM.appliancesText}
      />
      <section className="sec-surface">
        <div className="wrap grid gap-14 py-24 md:grid-cols-12 md:gap-8 md:py-32">
          <div className="md:col-span-5">
            <p className="label flex items-center gap-4 text-brass">
              <span className="rule" aria-hidden />
              {t(SHOWROOM.locationLabel)}
            </p>
            <TextReveal text={t(SHOWROOM.locationTitle)} className="display h2 mt-6" />
            <Reveal className="mt-8 space-y-4 text-mute">
              <address data-reveal className="not-italic text-bone">{t(BRAND.address)}</address>
              <p data-reveal>{t(SHOWROOM.parking)}</p>
              <div data-reveal className="pt-4">
                <a href={BRAND.mapUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  <span>{t(UI.directions)}</span>
                  <span aria-hidden className="arrow inline-block">→</span>
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="label text-brass">{t(UI.hours)}</p>
            <dl className="mt-8">
              {BRAND.hours.map((h, i) => (
                <div key={i} className="flex justify-between gap-6 border-t border-h py-5">
                  <dt>{t(h.days)}</dt>
                  <dd className="text-mute">{t(h.time)}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 space-y-2 text-mute">
              <p><a href={BRAND.phoneHref} dir="ltr" className="hover:text-brass">{BRAND.phone}</a></p>
              <p><a href={`mailto:${BRAND.email}`} className="hover:text-brass">{BRAND.email}</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
