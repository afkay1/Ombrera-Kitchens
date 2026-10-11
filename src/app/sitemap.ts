import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/format";
import { STYLES } from "@/lib/data/styles";
import { PROJECTS } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...["", "/styles", "/layouts", "/materials", "/projects", "/showroom", "/consultation"].map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, priority: p ? 0.8 : 1 })),
    ...STYLES.map((s) => ({ url: `${SITE_URL}/styles/${s.slug}`, lastModified: now, priority: 0.7 })),
    ...PROJECTS.map((p) => ({ url: `${SITE_URL}/projects/${p.slug}`, lastModified: now, priority: 0.7 })),
  ];
}
