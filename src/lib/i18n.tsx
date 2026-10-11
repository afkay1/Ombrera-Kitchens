"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { L, Lang } from "./types";

interface LangCtx {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (v: L) => string;
}

const Ctx = createContext<LangCtx>({ lang: "en", dir: "ltr", setLang: () => {}, t: (v) => v.en });
export const useLang = () => useContext(Ctx);

const KEY = "ombrera-lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      if (saved === "ar" || saved === "en") setLangState(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(KEY, l);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const t = useCallback((v: L) => v[lang], [lang]);

  return <Ctx.Provider value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", setLang, t }}>{children}</Ctx.Provider>;
}

/** Runs before paint so Arabic visitors never see a flash of LTR layout. */
export const LANG_BOOT_SCRIPT = `try{var l=localStorage.getItem("${KEY}");if(l==="ar"){document.documentElement.lang="ar";document.documentElement.dir="rtl";}}catch(e){}`;
