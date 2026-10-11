import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ShowroomView from "@/components/ShowroomView";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { SHOWROOM } from "@/lib/data/site";
import { img, l } from "@/lib/types";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Showroom in Riyadh",
  description: "Visit Ombrera's kitchen showroom in Al Mohammadiyah, Riyadh: twelve working kitchens, live appliances and over three hundred finishes.",
  alternates: { canonical: "/showroom" },
};

export default function ShowroomPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Showroom", path: "/showroom" }])} />
      <PageHero
        image={img("showroom-exterior", l("Ombrera showroom at dusk with an olive tree", "معرض أومبريرا عند الغروب مع شجرة زيتون"))}
        label={SHOWROOM.heroLabel}
        title={SHOWROOM.heroTitle}
        text={SHOWROOM.heroText}
      />
      <ShowroomView />
      <CTASection />
    </>
  );
}
