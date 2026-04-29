"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

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
  tileClassName = "h-[5.25rem] w-[clamp(8.5rem,11.5vw,11rem)] rounded-[1.25rem]",
}: MarqueeGalleryProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [repeatCount, setRepeatCount] = useState(18);

  // Build a long enough sequence that always fills the container width.
  const repeated = useMemo(() => {
    if (images.length === 0) return [];
    const out: string[] = [];
    for (let i = 0; i < repeatCount; i += 1) {
      out.push(images[i % images.length]);
    }
    return out;
  }, [images, repeatCount]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const measure = () => {
      const containerWidth = container.getBoundingClientRect().width;
      const tile = measureRef.current?.getBoundingClientRect();
      if (!tile || tile.width === 0) return;

      // Tailwind `gap-2` = 0.5rem. We use 8px as a conservative fallback.
      const gap = 8;
      const unit = tile.width + gap;
      const needed = Math.ceil(containerWidth / unit) + 22; // wider buffer keeps both rows filled from the first frame
      setRepeatCount((prev) => (prev === needed ? prev : needed));
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(container);

    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={"overflow-hidden " + (className ?? "")}>
      <div
        className={(reverse ? "anim-marquee-reverse" : "anim-marquee") + " flex w-max gap-2 will-change-transform"}
        style={{ animationDelay: reverse ? "-9s" : "-6s" }}
      >
        {repeated.concat(repeated).map((src, idx) => (
          <div
            key={uniqKey(src, idx)}
            ref={idx === 0 ? measureRef : undefined}
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
