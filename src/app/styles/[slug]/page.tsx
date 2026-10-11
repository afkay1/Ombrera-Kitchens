import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { STYLES, getStyle } from "@/lib/data/styles";
import { StyleDetail } from "@/components/StyleViews";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return STYLES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getStyle(params.slug);
  if (!s) return {};
  return {
    title: `${s.name.en} Kitchens`,
    description: s.intro.en,
    alternates: { canonical: `/styles/${s.slug}` },
    openGraph: { images: [{ url: s.hero.src, alt: s.hero.alt.en }] },
  };
}

export default function StylePage({ params }: { params: { slug: string } }) {
  const s = getStyle(params.slug);
  if (!s) notFound();
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Styles", path: "/styles" }, { name: s.name.en, path: `/styles/${s.slug}` }])} />
      <StyleDetail slug={s.slug} />
      <CTASection />
    </>
  );
}
