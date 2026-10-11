"use client";

import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const Ctx = createContext<{ go: (href: string) => void }>({ go: () => {} });
export const useTransition = () => useContext(Ctx);

/** Curtain page transition. Navigation runs on a timer, so a link can never get stuck on the animation. */
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const pending = useRef(false);

  const go = useCallback(
    (href: string) => {
      const target = href.split("#")[0].split("?")[0] || "/";
      if (target === window.location.pathname) {
        window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = overlay.current;
      if (!el || busy.current || document.hidden || prefersReducedMotion()) {
        router.push(href);
        return;
      }
      busy.current = true;
      pending.current = true;
      const rtl = document.documentElement.dir === "rtl";
      gsap.set(el, { display: "block", xPercent: 0, yPercent: 100 });
      gsap.to(el, { yPercent: 0, duration: 0.65, ease: "power3.inOut" });
      gsap.fromTo(el.querySelector("[data-line]"), { scaleX: 0, transformOrigin: rtl ? "right" : "left" }, { scaleX: 1, duration: 0.7, ease: "power2.inOut", delay: 0.2 });
      window.setTimeout(() => router.push(href), 700);
      window.setTimeout(() => {
        busy.current = false;
        pending.current = false;
        gsap.set(el, { display: "none" });
      }, 3500);
    },
    [router]
  );

  useEffect(() => {
    const el = overlay.current;
    window.setTimeout(() => ScrollTrigger.refresh(), 300);
    if (pending.current && el) {
      pending.current = false;
      gsap.to(el, {
        yPercent: -100,
        duration: 0.75,
        delay: 0.15,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(el, { display: "none" });
          busy.current = false;
        },
      });
    }
  }, [pathname]);

  return (
    <Ctx.Provider value={{ go }}>
      {children}
      <div ref={overlay} aria-hidden className="fixed inset-0 z-[90] hidden bg-coal">
        <div className="flex h-full flex-col items-center justify-center gap-6">
          <span className="font-display text-3xl tracking-[0.4em] text-bone" dir="ltr">OMBRERA</span>
          <span data-line className="block h-px w-40 bg-brass" />
        </div>
      </div>
    </Ctx.Provider>
  );
}

interface TLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: React.ReactNode;
}

/** Internal link that plays the curtain transition. */
export function TLink({ href, children, onClick, ...rest }: TLinkProps) {
  const { go } = useTransition();
  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        go(href);
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
