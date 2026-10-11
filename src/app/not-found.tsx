"use client";

import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/data/site";
import { img, l } from "@/lib/types";
import Img from "@/components/Img";
import { TLink } from "@/components/Transition";

export default function NotFound() {
  const { t } = useLang();
  return (
    <section className="relative flex min-h-[100svh] items-end bg-ink text-bone">
      <Img image={img("home-hero-night", l("Kitchen at night", "مطبخ ليلاً"))} className="absolute inset-0" decorative />
      <div className="absolute inset-0 bg-black/65" />
      <div className="wrap relative pb-20 md:pb-28">
        <p className="label text-brass" dir="ltr">404</p>
        <h1 className="display h1 mt-6 max-w-3xl">{t(UI.notFoundTitle)}</h1>
        <p className="mt-6 max-w-md text-bone/75">{t(UI.notFoundText)}</p>
        <TLink href="/" className="btn btn-brass mt-10">{t(UI.backHome)}</TLink>
      </div>
    </section>
  );
}
