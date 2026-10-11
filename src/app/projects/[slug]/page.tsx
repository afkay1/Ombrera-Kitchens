import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/data/projects";
import { ProjectDetail } from "@/components/ProjectViews";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: `${p.name.en}, ${p.location.en.split(",")[0]}`,
    description: p.summary.en,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { images: [{ url: p.hero.src, alt: p.hero.alt.en }] },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Projects", path: "/projects" }, { name: p.name.en, path: `/projects/${p.slug}` }])} />
      <ProjectDetail slug={p.slug} />
      <CTASection />
    </>
  );
}
