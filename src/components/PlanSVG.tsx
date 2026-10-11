"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import type { Layout } from "@/lib/types";

/** Floor plan that draws its walls, then fills in the cabinetry, when scrolled into view. */
export default function PlanSVG({ plan, title, className = "" }: { plan: Layout["plan"]; title: string; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const walls = el.querySelector("[data-walls]");
    const units = el.querySelectorAll("[data-unit]");
    const grid = el.querySelector("[data-grid]");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      tl.fromTo(grid, { opacity: 0 }, { opacity: 1, duration: 0.6 })
        .fromTo(walls, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, 0.1)
        .fromTo(units, { opacity: 0, scale: 0.92, transformOrigin: "center" }, { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.15 }, "-=0.4");
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 120 80" role="img" aria-label={title} className={`w-full ${className}`}>
      <defs>
        <pattern id="plan-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M5 0H0V5" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.2" />
        </pattern>
      </defs>
      <rect data-grid width="120" height="80" fill="url(#plan-grid)" />
      {plan.units.map((u, i) => (
        <rect
          key={i}
          data-unit
          x={u.x}
          y={u.y}
          width={u.w}
          height={u.h}
          fill={u.island ? "#B8935A" : "currentColor"}
          fillOpacity={u.island ? 0.85 : 0.16}
          stroke={u.island ? "#B8935A" : "currentColor"}
          strokeOpacity={u.island ? 1 : 0.55}
          strokeWidth="0.35"
        />
      ))}
      <path data-walls d={plan.walls} pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1" strokeLinejoin="miter" />
    </svg>
  );
}
