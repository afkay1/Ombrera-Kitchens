import type { Metadata } from "next";
import ConsultationView from "@/components/ConsultationView";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book a Free Kitchen Consultation",
  description: "Tell us about your kitchen and an Ombrera designer will contact you within one working day to arrange a visit in Riyadh or at your home.",
  alternates: { canonical: "/consultation" },
};

export default function ConsultationPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Consultation", path: "/consultation" }])} />
      <ConsultationView />
    </>
  );
}
