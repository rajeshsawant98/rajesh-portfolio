"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  images: string[];
  alt: string;
}

const ProjectImageCarousel = ({ images, alt }: Props) => {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full group">
      <Image
        key={current}
        src={images[current]}
        alt={`${alt} screenshot ${current + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />

      {/* Prev / Next — only show when multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <FaChevronRight className="text-xs" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === current
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectImageCarousel;
