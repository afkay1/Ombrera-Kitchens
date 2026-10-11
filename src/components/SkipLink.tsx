"use client";

import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/data/site";

export default function SkipLink() {
  const { t } = useLang();
  return (
    <a href="#main" className="sr-only z-[100] bg-brass px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:start-4 focus:top-4">
      {t(UI.skip)}
    </a>
  );
}
