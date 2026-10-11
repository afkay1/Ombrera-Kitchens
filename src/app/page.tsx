import type { Metadata } from "next";
import DayNightHero from "@/components/DayNightHero";
import StatementFill from "@/components/StatementFill";
import StylesHorizontal from "@/components/StylesHorizontal";
import MaterialSwitcher from "@/components/MaterialSwitcher";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import { LayoutsTeaser, Renovation, FeaturedProjects, Details, ShowroomTeaser, Testimonial } from "@/components/HomeSections";
import { HOME } from "@/lib/data/site";

export const metadata: Metadata = {
  title: { absolute: "Ombrera Kitchens | Luxury Kitchen Design Studio in Riyadh" },
  description:
    "Bespoke luxury kitchens in stone, timber and brass. Explore six kitchen styles, five layouts and four finishes, then book a free design consultation in Riyadh.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <DayNightHero />
      <StatementFill text={HOME.statement} />
      <StylesHorizontal />
      <MaterialSwitcher />
      <LayoutsTeaser />
      <Renovation />
      <FeaturedProjects />
      <Details />
      <Process />
      <ShowroomTeaser />
      <Testimonial />
      <CTASection />
    </>
  );
}
