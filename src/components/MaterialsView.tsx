"use client";

import { useLang } from "@/lib/i18n";
import { LIBRARY } from "@/lib/data/materials";
import { UI } from "@/lib/data/site";
import { l } from "@/lib/types";
import ImageReveal from "./ImageReveal";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function MaterialLibrary() {
  const { t } = useLang();
  return (
    <section className="sec-dark" id="library">
      <div className="wrap py-24 md:py-36">
        <SectionIntro
          label={UI.allMaterials}
          title={l("Chosen for how they age.", "نختارها لطريقة تقدّمها في العمر.")}
          text={l("Every material in our kitchens is tested for heat, water and daily use in Gulf homes.", "تُختبر كل خامة في مطابخنا لتحمّل الحرارة والماء والاستخدام اليومي في بيوت الخليج.")}
        />
        <ul className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {LIBRARY.map((m, i) => (
            <li key={m.slug} className={i % 3 === 1 ? "lg:mt-20" : ""}>
              <ImageReveal image={m.image} className="aspect-square" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" zoom />
              <Reveal className="mt-6">
                <p data-reveal className="label text-brass">{t(m.family)}</p>
                <h3 data-reveal className="display h3 mt-2">{t(m.name)}</h3>
                <p data-reveal className="mt-2 text-mute">{t(m.text)}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
