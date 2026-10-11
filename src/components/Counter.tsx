"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function Counter({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = `${to}${suffix}`;
      return;
    }
    const obj = { v: 0 };
    el.textContent = `0${suffix}`;
    let tween: gsap.core.Tween | null = null;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        tween = gsap.to(obj, { v: to, duration: 1.8, ease: "power2.out", onUpdate: () => { el.textContent = `${Math.round(obj.v)}${suffix}`; } });
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      tween?.kill();
    };
  }, [to, suffix]);
  return <span ref={ref} className={className} dir="ltr">{`${to}${suffix}`}</span>;
}
