"use client";

import { useLang } from "@/lib/i18n";
import type { L } from "@/lib/types";
import { TLink } from "./Transition";

export default function LinkArrow({ href, label, children, className = "" }: { href: string; label?: L; children?: React.ReactNode; className?: string }) {
  const { t } = useLang();
  return (
    <TLink href={href} className={`link-arrow ${className}`}>
      <span>{label ? t(label) : children}</span>
      <span aria-hidden className="arrow inline-block">→</span>
    </TLink>
  );
}
