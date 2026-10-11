"use client";

import { useLang } from "@/lib/i18n";
import type { Project } from "@/lib/types";
import ImageReveal from "./ImageReveal";
import { TLink } from "./Transition";

export default function ProjectCard({ project, ratio = "aspect-[4/3]", headingLevel = "h3", sizes = "(min-width: 768px) 50vw, 100vw" }: { project: Project; ratio?: string; headingLevel?: "h2" | "h3"; sizes?: string }) {
  const { t } = useLang();
  const H = headingLevel;
  return (
    <TLink href={`/projects/${project.slug}`} className="group block">
      <ImageReveal image={project.hero} className={ratio} sizes={sizes} zoom />
      <div className="mt-6 flex items-start justify-between gap-6">
        <div className="transition-transform duration-700 ease-lux group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
          <H className="display h3">{t(project.name)}</H>
          <p className="mt-2 text-mute">{t(project.location)}</p>
        </div>
        <p className="label mt-2 shrink-0 text-brass">{t(project.type)}</p>
      </div>
    </TLink>
  );
}
