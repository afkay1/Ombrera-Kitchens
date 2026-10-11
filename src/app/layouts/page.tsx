import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LayoutsView from "@/components/LayoutsView";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { img, l } from "@/lib/types";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kitchen Layouts",
  description: "L-shape, U-shape, island, galley or parallel? Compare kitchen layouts with animated floor plans and real Ombrera kitchens.",
  alternates: { canonical: "/layouts" },
};

export default function LayoutsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Layouts", path: "/layouts" }])} />
      <PageHero
        image={img("layout-island", l("Walnut kitchen with a black marble island", "مطبخ من الجوز بجزيرة رخام أسود"))}
        label={l("Kitchen layouts", "تصاميم المطابخ")}
        title={l("Shape Comes Before Style.", "الشكل قبل النمط.")}
        text={l("Five proven layouts, drawn to scale. Find the one that fits your room and the way you move.", "خمسة تصاميم مجرّبة، مرسومة بالمقياس. اختر ما يناسب مساحتك وطريقة حركتك.")}
      />
      <LayoutsView />
      <CTASection />
    </>
  );
}
