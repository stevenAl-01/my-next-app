"use client";

import Image from "next/image";
import { useMemo } from "react";

type MarqueeGalleryProps = {
  images: string[];
  alt?: string;
  reverse?: boolean;
  className?: string;
  tileClassName?: string;
};

function uniqKey(src: string, idx: number) {
  return `${idx}-${src}`;
}

export function MarqueeGallery({
  images,
  alt = "Gallery",
  reverse,
  className,
  tileClassName = "h-[4.25rem] w-[7rem] rounded-[1rem] sm:h-[5rem] sm:w-[8.5rem] sm:rounded-[1.1rem] lg:h-[5.25rem] lg:w-[clamp(8.5rem,11.5vw,11rem)] lg:rounded-[1.25rem]",
}: MarqueeGalleryProps) {
  const repeated = useMemo(() => {
    if (images.length === 0) return [];
    return Array.from({ length: 10 }, (_, index) => images[index % images.length]);
  }, [images]);

  return (
    <div className={"min-w-0 max-w-full overflow-hidden " + (className ?? "")}>
      <div
        className={(reverse ? "anim-marquee-reverse" : "anim-marquee") + " flex w-max max-w-none gap-2 will-change-transform"}
      >
        {repeated.concat(repeated).map((src, idx) => (
          <div
            key={uniqKey(src, idx)}
            className={
              "shrink-0 overflow-hidden border border-white/10 " + tileClassName
            }
          >
            <Image
              src={src}
              alt={idx === 0 ? alt : ""}
              width={800}
              height={500}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
