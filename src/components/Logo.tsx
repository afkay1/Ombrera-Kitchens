"use client";

import { TLink } from "./Transition";

export default function Logo() {
  return (
    <TLink href="/" aria-label="Ombrera Kitchens, home" className="group flex items-center gap-3" dir="ltr">
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M3 16a13 13 0 0 0 26 0z" fill="#B8935A" className="origin-center transition-transform duration-700 group-hover:rotate-180" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[21px] tracking-[0.28em]">OMBRERA</span>
        <span className="mt-1 text-[8.5px] font-semibold tracking-[0.55em] opacity-60">KITCHENS</span>
      </span>
    </TLink>
  );
}
