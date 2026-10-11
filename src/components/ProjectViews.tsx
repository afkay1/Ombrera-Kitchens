"use client";

import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/data/site";
import { PROJECTS, getProject } from "@/lib/data/projects";
import { getStyle } from "@/lib/data/styles";
import { l } from "@/lib/types";
import PageHero from "./PageHero";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import ImageReveal from "./ImageReveal";
import BeforeAfter from "./BeforeAfter";
import ProjectGrid from "./ProjectGrid";
import LinkArrow from "./LinkArrow";
import { TLink } from "./Transition";

export function ProjectsIndex() {
  return (
    <section className="sec-dark">
      <div className="wrap py-24 md:py-36">
        <ProjectGrid projects={PROJECTS} headingLevel="h2" />
      </div>
    </section>
  );
}

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const p = getProject(slug)!;
  const style = getStyle(p.style);
  const idx = PROJECTS.findIndex((x) => x.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const meta = [
    { k: UI.location, v: t(p.location) },
    { k: UI.type, v: t(p.type) },
    { k: UI.year, v: p.year, ltr: true },
    { k: UI.size, v: p.size, ltr: true },
  ];
  const wideMain = p.wide[0];
  const wideRest = p.wide.slice(1);

  return (
    <>
      <PageHero image={p.hero} label={p.type} title={p.name} text={p.location} />

      <section className="sec-dark">
        <div className="wrap py-20 md:py-32">
          <nav aria-label="Breadcrumb">
            <ol className="label flex flex-wrap gap-2 text-mute">
              <li><TLink href="/projects" className="hover:text-brass">{t(UI.allProjects)}</TLink></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-brass">{t(p.name)}</li>
            </ol>
          </nav>
          <dl className="mt-12 grid grid-cols-2 gap-8 border-y border-h py-8 md:grid-cols-4">
            {meta.map((m, i) => (
              <div key={i}>
                <dt className="label text-mute">{t(m.k)}</dt>
                <dd className="mt-3 text-lg" dir={m.ltr ? "ltr" : undefined}>{m.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-20 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <TextReveal as="p" text={t(p.summary)} className="display h2" />
            </div>
            <Reveal className="space-y-6 text-mute md:col-span-5 md:col-start-8">
              {p.story.map((s, i) => (
                <p data-reveal key={i} className="lead">{t(s)}</p>
              ))}
              {style && (
                <div data-reveal className="pt-4">
                  <LinkArrow href={`/styles/${style.slug}`}>
                    {t(UI.style)}: {t(style.name)}
                  </LinkArrow>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {p.before && p.after && (
        <section className="sec-surface">
          <div className="wrap py-24 md:py-32">
            <p className="label flex items-center gap-4 text-brass">
              <span className="rule" aria-hidden />
              {t(l("Before & after", "قبل وبعد"))}
            </p>
            <BeforeAfter before={p.before} after={p.after} className="mt-10 aspect-[4/3] md:aspect-[16/9]" />
          </div>
        </section>
      )}

      <Parallax image={wideMain} className="h-[70svh] min-h-[420px] bg-ink md:h-[92svh]" amount={7} />

      <section className="sec-dark" aria-label={t(UI.gallery)}>
        <div className="wrap py-24 md:py-36">
          <div className="grid gap-8 md:grid-cols-12">
            {p.details[0] && <ImageReveal image={p.details[0]} className="aspect-[4/5] md:col-span-5" sizes="(min-width: 768px) 42vw, 100vw" />}
            {p.details[1] && <ImageReveal image={p.details[1]} className="aspect-square md:col-span-6 md:col-start-7 md:mt-32" sizes="(min-width: 768px) 50vw, 100vw" />}
          </div>
          {wideRest.map((w) => (
            <ImageReveal key={w.src} image={w} className="mt-8 aspect-[3/2] md:mt-12" sizes="(min-width: 1480px) 1336px, 100vw" />
          ))}
          <dl className="mt-20 grid gap-8 border-t border-h pt-10 md:grid-cols-3">
            {p.facts.map((f, i) => (
              <div key={i}>
                <dt className="label text-brass">{t(f.label)}</dt>
                <dd className="mt-3 text-mute">{t(f.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <TLink href={`/projects/${next.slug}`} className="group relative block overflow-hidden">
        <Parallax image={next.hero} className="h-[60svh] min-h-[380px] bg-ink" amount={6}>
          <div className="absolute inset-0 bg-black/60 transition-colors duration-700 group-hover:bg-black/45" />
          <div className="wrap absolute inset-x-0 bottom-0 pb-14 text-bone">
            <p className="label text-brass">{t(UI.nextProject)}</p>
            <p className="display h1 mt-4">{t(next.name)}</p>
            <p className="mt-2 text-bone/70">{t(next.location)}</p>
          </div>
        </Parallax>
      </TLink>
    </>
  );
}
