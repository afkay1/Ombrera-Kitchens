"use client";

import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/data/site";
import { STYLES, getStyle } from "@/lib/data/styles";
import { PROJECTS } from "@/lib/data/projects";
import PageHero from "./PageHero";
import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import LinkArrow from "./LinkArrow";
import ProjectCard from "./ProjectCard";
import { TLink } from "./Transition";
import { l } from "@/lib/types";

export function StylesIndex() {
  const { t } = useLang();
  return (
    <div>
      {STYLES.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={s.slug} className={s.light ? "sec-light" : i % 2 ? "sec-surface" : "sec-dark"} aria-labelledby={`st-${s.slug}`}>
            <div className="wrap grid items-center gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-32">
              <TLink href={`/styles/${s.slug}`} className={`group block md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}>
                <ImageReveal image={s.hero} className="aspect-[4/3] md:aspect-[16/10]" sizes="(min-width: 768px) 58vw, 100vw" zoom />
              </TLink>
              <div className={`md:col-span-4 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}>
                <Reveal>
                  <p data-reveal className="font-display text-7xl text-brass" dir="ltr">{s.number}</p>
                  <h2 data-reveal id={`st-${s.slug}`} className="display h1 mt-4">{t(s.name)}</h2>
                  <p data-reveal className="lead mt-6">{t(s.tagline)}</p>
                  <p data-reveal className="mt-4 text-mute">{t(s.intro)}</p>
                  <div data-reveal className="mt-10">
                    <LinkArrow href={`/styles/${s.slug}`} label={UI.viewStyle} />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function StyleDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const s = getStyle(slug)!;
  const idx = STYLES.findIndex((x) => x.slug === slug);
  const next = STYLES[(idx + 1) % STYLES.length];
  const project = PROJECTS.find((p) => p.style === slug);
  const main = s.light ? "sec-light" : "sec-dark";
  const alt = s.light ? "sec-light" : "sec-surface";

  return (
    <>
      <PageHero image={s.hero} label={l(`Style ${s.number}`, `النمط ${s.number}`)} title={s.name} text={s.tagline} />

      <section className={main}>
        <div className="wrap grid gap-12 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-7">
            <nav aria-label="Breadcrumb">
              <ol className="label flex flex-wrap gap-2 text-mute">
                <li><TLink href="/styles" className="hover:text-brass">{t(UI.allStyles)}</TLink></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-brass">{t(s.name)}</li>
              </ol>
            </nav>
            <TextReveal as="p" text={t(s.intro)} className="display h2 mt-10" />
            <Reveal className="mt-10 max-w-xl space-y-5 text-mute">
              {s.story.map((p, i) => (
                <p data-reveal key={i} className="lead">{t(p)}</p>
              ))}
            </Reveal>
          </div>
          <Reveal as="aside" className="self-end md:col-span-4 md:col-start-9">
            <p data-reveal className="label text-brass">{t(UI.palette)}</p>
            <ul data-reveal className="mt-6 border-t border-h">
              {s.palette.map((m, i) => (
                <li key={i} className="flex items-center gap-4 border-b border-h py-4">
                  <span className="h-2 w-2 rounded-full bg-brass" aria-hidden />
                  {t(m)}
                </li>
              ))}
            </ul>
            <p data-reveal className="label mt-10 text-brass">{t(UI.bestFor)}</p>
            <p data-reveal className="mt-3 text-mute">{t(s.bestFor)}</p>
          </Reveal>
        </div>
      </section>

      <Parallax image={s.wide} className="h-[70svh] min-h-[420px] bg-ink md:h-[92svh]" amount={7} />

      <section className={alt}>
        <div className="wrap py-24 md:py-36">
          <Reveal>
            <p data-reveal className="label flex items-center gap-4 text-brass">
              <span className="rule" aria-hidden />
              {t(UI.details)}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
            <ImageReveal image={s.details[0]} className="aspect-[4/5] md:col-span-5" sizes="(min-width: 768px) 42vw, 100vw" />
            <div className="md:col-span-6 md:col-start-7">
              <ImageReveal image={s.details[1]} className="aspect-square" sizes="(min-width: 768px) 50vw, 100vw" />
              <Reveal as="ul" className="mt-12 space-y-8">
                {s.features.map((f, i) => (
                  <li data-reveal key={i} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-h pt-6">
                    <span className="font-display text-2xl text-brass" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="display h3">{t(f.title)}</h3>
                      <p className="mt-2 text-mute">{t(f.text)}</p>
                    </div>
                  </li>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {project && (
        <section className={main}>
          <div className="wrap py-24 md:py-32">
            <p className="label flex items-center gap-4 text-brass">
              <span className="rule" aria-hidden />
              {t(l("In a real home", "في منزل حقيقي"))}
            </p>
            <div className="mt-12 md:w-2/3">
              <ProjectCard project={project} ratio="aspect-[16/9]" />
            </div>
          </div>
        </section>
      )}

      <TLink href={`/styles/${next.slug}`} className="group block sec-dark border-t border-h">
        <div className="wrap flex items-center justify-between gap-8 py-16 md:py-24">
          <div>
            <p className="label text-mute">{t(UI.nextStyle)}</p>
            <p className="display h1 mt-4 transition-transform duration-700 ease-lux group-hover:translate-x-3 rtl:group-hover:-translate-x-3">
              <span className="text-brass" dir="ltr">{next.number}</span> {t(next.name)}
            </p>
          </div>
          <span aria-hidden className="display h2 text-brass rtl:-scale-x-100">→</span>
        </div>
      </TLink>
    </>
  );
}
