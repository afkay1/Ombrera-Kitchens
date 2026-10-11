import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { ProjectsIndex } from "@/components/ProjectViews";
import { img, l } from "@/lib/types";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description: "Ombrera kitchens in Riyadh, Jeddah, Dubai and Kuwait City, from full renovations to penthouse and beach-house kitchens.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Projects", path: "/projects" }])} />
      <PageHero
        image={img("project-marina-hero", l("Penthouse kitchen at night above Dubai Marina", "مطبخ بنتهاوس ليلاً فوق دبي مارينا"))}
        label={l("Projects", "المشاريع")}
        title={l("Kitchens Across the Gulf.", "مطابخ في أرجاء الخليج.")}
        text={l("Renovations, villas, penthouses and beach houses, each designed and built by our own team.", "تجديدات وفلل وبنتهاوسات وبيوت شاطئية، صممها ونفذها فريقنا الخاص.")}
      />
      <ProjectsIndex />
      <CTASection />
    </>
  );
}
