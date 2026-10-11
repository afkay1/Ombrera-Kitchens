import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StatementFill from "@/components/StatementFill";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { StylesIndex } from "@/components/StyleViews";
import { img, l } from "@/lib/types";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kitchen Styles",
  description: "Six kitchen styles by Ombrera: Modern Handleless, Italian Luxury, Japandi, Classic Shaker, Industrial and Gulf Majlis Kitchen.",
  alternates: { canonical: "/styles" },
};

export default function StylesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Styles", path: "/styles" }])} />
      <PageHero
        image={img("style-italian-hero", l("Italian luxury kitchen with a violet-veined marble island", "مطبخ إيطالي فاخر بجزيرة رخامية بعروق بنفسجية"))}
        label={l("Kitchen styles", "أنماط المطابخ")}
        title={l("Six Ways to Live in a Kitchen.", "ست طرق للعيش في المطبخ.")}
        text={l("From minimal graphite to Gulf hospitality, every style is fully bespoke and built in Riyadh.", "من الجرافيت البسيط إلى الضيافة الخليجية، كل نمط مصمم بالكامل حسب الطلب ومصنوع في الرياض.")}
      />
      <StatementFill text={l("A style is a starting point, not a catalogue. We adapt every one to your room, your light and the way you cook.", "النمط نقطة انطلاق لا كتالوج. نكيّف كل نمط مع مساحتك وضوئك وطريقتك في الطهي.")} />
      <StylesIndex />
      <CTASection />
    </>
  );
}
