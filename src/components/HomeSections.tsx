"use client";

import { useLang } from "@/lib/i18n";
import { HOME, UI } from "@/lib/data/site";
import { LAYOUTS } from "@/lib/data/layouts";
import { PROJECTS, getProject } from "@/lib/data/projects";
import { img, l } from "@/lib/types";
import SectionIntro from "./SectionIntro";
import PlanSVG from "./PlanSVG";
import BeforeAfter from "./BeforeAfter";
import ProjectCard from "./ProjectCard";
import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import Counter from "./Counter";
import LinkArrow from "./LinkArrow";
import { TLink } from "./Transition";

export function LayoutsTeaser() {
  const { t } = useLang();
  return (
    <section className="sec-dark">
      <div className="wrap py-24 md:py-36">
        <SectionIntro label={HOME.layoutsLabel} title={HOME.layoutsTitle} text={HOME.layoutsText} link={{ href: "/layouts", label: UI.allLayouts }} />
        <ul className="mt-16 grid grid-cols-2 gap-px bg-h md:grid-cols-5">
          {LAYOUTS.map((lay) => (
            <li key={lay.slug} className="bg-[var(--bg)]">
              <TLink href={`/layouts#${lay.slug}`} className="group block p-6 text-bone transition-colors hover:bg-surface md:p-8">
                <PlanSVG plan={lay.plan} title={t(lay.name)} className="text-bone transition-colors group-hover:text-brass" />
                <p className="display h3 mt-6">{t(lay.name)}</p>
                <p className="mt-1 text-sm text-mute">{t(lay.size)}</p>
              </TLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Renovation() {
  const { t } = useLang();
  const p = getProject("al-nakheel-villa")!;
  return (
    <section className="sec-surface">
      <div className="wrap py-24 md:py-36">
        <SectionIntro label={HOME.renoLabel} title={HOME.renoTitle} text={HOME.renoText} link={{ href: `/projects/${p.slug}`, label: UI.viewProject }} />
        <BeforeAfter before={p.before!} after={p.after!} className="mt-14 aspect-[4/3] md:aspect-[16/9]" />
        <p className="mt-4 text-sm text-mute">{t(p.name)} · {t(p.location)}</p>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const others = PROJECTS.filter((p) => p.slug !== "al-nakheel-villa");
  return (
    <section className="sec-dark">
      <div className="wrap py-24 md:py-36">
        <SectionIntro label={HOME.projectsLabel} title={HOME.projectsTitle} link={{ href: "/projects", label: UI.allProjects }} />
        <div className="mt-16 grid gap-x-8 gap-y-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <ProjectCard project={others[0]} ratio="aspect-[4/3]" sizes="(min-width: 768px) 58vw, 100vw" />
          </div>
          <div className="md:col-span-4 md:col-start-9 md:mt-36">
            <ProjectCard project={others[1]} ratio="aspect-[4/5]" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
          <div className="md:col-span-6 md:col-start-4">
            <ProjectCard project={others[2]} ratio="aspect-[3/2]" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Details() {
  const { t } = useLang();
  const images = [
    img("home-detail-drawer", l("Walnut drawer with oak organiser and brass handle", "درج جوز بمنظم من البلوط ومقبض نحاسي")),
    img("home-detail-tap", l("Brushed brass tap above a black marble sink", "صنبور نحاسي مصقول فوق حوض رخام أسود")),
    img("home-detail-light", l("Lit walnut shelf with stoneware bowls", "رف جوز مضاء مع أوعية فخارية")),
  ];
  return (
    <section className="sec-dark">
      <div className="wrap py-24 md:py-36">
        <SectionIntro label={HOME.detailsLabel} title={HOME.detailsTitle} />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {HOME.detailsItems.map((d, i) => (
            <div key={i} className={i === 1 ? "md:mt-24" : ""}>
              <ImageReveal image={images[i]} className={i === 2 ? "aspect-square" : "aspect-[4/5]"} sizes="(min-width: 768px) 33vw, 100vw" />
              <Reveal className="mt-6">
                <h3 data-reveal className="display h3">{t(d.title)}</h3>
                <p data-reveal className="mt-2 text-mute">{t(d.text)}</p>
              </Reveal>
            </div>
          ))}
        </div>
        <dl className="mt-24 grid gap-10 border-t border-h pt-12 sm:grid-cols-3">
          {HOME.stats.map((s, i) => (
            <div key={i}>
              <dt className="sr-only">{t(s.label)}</dt>
              <dd>
                <Counter to={s.value} suffix={s.suffix} className="block font-display text-6xl text-brass md:text-7xl" />
                <span className="mt-3 block text-mute">{t(s.label)}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function ShowroomTeaser() {
  const { t } = useLang();
  return (
    <section className="sec-surface">
      <div className="wrap grid items-center gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-36">
        <div className="grid grid-cols-12 gap-6 md:col-span-7">
          <ImageReveal
            image={img("showroom-interior", l("Showroom gallery with full-scale kitchens", "قاعة المعرض مع مطابخ بالحجم الحقيقي"))}
            className="col-span-12 aspect-[3/2]"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
          <ImageReveal
            image={img("showroom-materials", l("Material wall of marble, timber and metal samples", "جدار عينات من الرخام والخشب والمعدن"))}
            className="col-span-5 -mt-20 aspect-[4/5] border-8 border-[var(--bg)]"
            sizes="(min-width: 768px) 24vw, 42vw"
          />
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="label flex items-center gap-4 text-brass">
            <span className="rule" aria-hidden />
            {t(HOME.showroomLabel)}
          </p>
          <TextReveal text={t(HOME.showroomTitle)} className="display h2 mt-6" />
          <Reveal className="mt-8">
            <p data-reveal className="text-mute">{t(HOME.showroomText)}</p>
            <div data-reveal className="mt-10">
              <LinkArrow href="/showroom" label={UI.visitShowroom} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Testimonial() {
  const { t } = useLang();
  const q = HOME.testimonial;
  return (
    <section className="sec-light">
      <div className="wrap grid items-center gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-36">
        <div className="md:col-span-4">
          <ImageReveal
            image={img("home-testimonial", l("Morning coffee on a black marble island", "قهوة الصباح على جزيرة رخام أسود"))}
            className="aspect-[4/5]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
        <Reveal className="md:col-span-7 md:col-start-6">
          <p data-reveal className="label flex items-center gap-4 text-brass">
            <span className="rule" aria-hidden />
            {t(l("Client words", "كلمة عميل"))}
          </p>
          <blockquote data-reveal className="mt-10">
            <p className="display h2">
              <span aria-hidden className="text-brass">“</span>
              {t(q.quote)}
              <span aria-hidden className="text-brass">”</span>
            </p>
            <footer className="mt-10 border-t border-h pt-6">
              <cite className="not-italic">
                <span className="block font-medium">{t(q.name)}</span>
                <span className="mt-1 block text-mute">{t(q.project)}</span>
              </cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
