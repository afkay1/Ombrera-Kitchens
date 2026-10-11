"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import type { Img as ImgT } from "@/lib/types";

interface Props {
  image: ImgT;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  decorative?: boolean;
}

/** Responsive cover image. The wrapper controls size and aspect ratio. */
export default function Img({ image, className = "", imgClassName = "", sizes = "100vw", priority = false, decorative = false }: Props) {
  const { t } = useLang();
  return (
    <div className={`${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} overflow-hidden bg-surface ${className}`}>
      <Image
        src={image.src}
        alt={decorative ? "" : t(image.alt)}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
