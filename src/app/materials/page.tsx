import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MaterialSwitcher from "@/components/MaterialSwitcher";
import MaterialLibrary from "@/components/MaterialsView";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { img, l } from "@/lib/types";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Materials & Finishes",
  description: "See one kitchen in walnut, marble, matte black and oak, then explore Ombrera's library of stones, timbers, lacquers and metals.",
  alternates: { canonical: "/materials" },
};

export default function MaterialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Materials", path: "/materials" }])} />
      <PageHero
        image={img("switch-marble", l("Kitchen clad in Calacatta marble", "مطبخ مكسو برخام كالاكاتا"))}
        label={l("Materials & finishes", "الخامات والتشطيبات")}
        title={l("Same Kitchen, Four Moods.", "مطبخ واحد، أربعة أمزجة.")}
        text={l("Try the finishes below, then visit the showroom to see more than three hundred in person.", "جرّب التشطيبات أدناه، ثم زر المعرض لترى أكثر من ثلاثمئة منها على الطبيعة.")}
      />
      <MaterialSwitcher
        label={l("Try a finish", "جرّب تشطيباً")}
        title={l("Choose the character of your kitchen.", "اختر شخصية مطبخك.")}
        text={l("Every photo shows the same room. Only the material changes.", "كل الصور للغرفة نفسها، والخامة وحدها تتغير.")}
      />
      <MaterialLibrary />
      <CTASection />
    </>
  );
}
