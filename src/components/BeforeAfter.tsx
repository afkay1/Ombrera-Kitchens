"use client";

import { useCallback, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/data/site";
import type { Img as ImgT } from "@/lib/types";
import Img from "./Img";

/** Drag (or use arrow keys) to compare before and after. */
export default function BeforeAfter({ before, after, className = "" }: { before: ImgT; after: ImgT; className?: string }) {
  const { t, dir } = useLang();
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const fromEvent = useCallback(
    (clientX: number) => {
      const r = box.current?.getBoundingClientRect();
      if (!r) return;
      let p = ((clientX - r.left) / r.width) * 100;
      if (dir === "rtl") p = 100 - p;
      setPos(Math.min(100, Math.max(0, p)));
    },
    [dir]
  );

  const onKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    const fwd = dir === "rtl" ? "ArrowLeft" : "ArrowRight";
    const back = dir === "rtl" ? "ArrowRight" : "ArrowLeft";
    if (e.key === fwd) setPos((p) => Math.min(100, p + step));
    else if (e.key === back) setPos((p) => Math.max(0, p - step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  // "After" is the base image; "before" is revealed from the start edge up to the handle.
  const clip = dir === "rtl" ? `inset(0 0 0 ${100 - pos}%)` : `inset(0 ${100 - pos}% 0 0)`;

  return (
    <div
      ref={box}
      className={`relative select-none overflow-hidden touch-pan-y ${className}`}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
        fromEvent(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && fromEvent(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Img image={after} className="absolute inset-0 h-full w-full" sizes="(min-width: 1480px) 1336px, 100vw" />
      <div className="absolute inset-0" style={{ clipPath: clip }}>
        <Img image={before} className="h-full w-full" sizes="(min-width: 1480px) 1336px, 100vw" />
      </div>
      <span className="label absolute start-5 top-5 bg-ink/70 px-3 py-2 text-bone backdrop-blur">{t(UI.before)}</span>
      <span className="label absolute end-5 top-5 bg-brass px-3 py-2 text-ink">{t(UI.after)}</span>
      <div className="absolute inset-y-0 w-px bg-brass" style={{ insetInlineStart: `${pos}%` }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label={t(UI.dragCompare)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKey}
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-brass bg-ink/80 text-brass backdrop-blur"
        >
          <span aria-hidden className="text-lg">⟷</span>
        </div>
      </div>
    </div>
  );
}
