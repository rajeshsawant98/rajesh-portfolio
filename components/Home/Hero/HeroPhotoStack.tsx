"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface Props {
  images: string[];
}

const SWIPE_THRESHOLD = 80;

const stackOffsets = [
  { rotate: -2, y: 0,  scale: 1,    zIndex: 10 }, // top
  { rotate:  4, y: 10, scale: 0.97, zIndex: 9  },
  { rotate: -3, y: 18, scale: 0.94, zIndex: 8  },
  { rotate:  5, y: 24, scale: 0.91, zIndex: 7  },
];

const HeroPhotoStack = ({ images }: Props) => {
  const [order, setOrder] = useState(() => images.map((_, i) => i));
  const [isSwiping, setIsSwiping] = useState(false);

  const x = useMotionValue(0);
  // Fade to 0 at ±400 so the card disappears as it exits
  const cardOpacity = useTransform(x, [-400, -150, 0, 150, 400], [0, 0.7, 1, 0.7, 0]);

  const handleDragEnd = async (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (isSwiping) return;

    const farEnough = Math.abs(info.offset.x) > SWIPE_THRESHOLD;
    const fastEnough = Math.abs(info.velocity.x) > 400;

    if (farEnough || fastEnough) {
      setIsSwiping(true);
      const dir = info.offset.x !== 0 ? Math.sign(info.offset.x) : Math.sign(info.velocity.x);
      await animate(x, dir * 600, { duration: 0.3, ease: "easeOut" });
      // Reset x before re-render so the new top card starts at center
      x.set(0);
      // Rotate order: swiped card goes to the bottom
      setOrder((prev) => [...prev.slice(1), prev[0]]);
      setIsSwiping(false);
    } else {
      animate(x, 0, { duration: 0.4, ease: [0.32, 0.72, 0, 1] });
    }
  };

  const visibleCount = Math.min(4, images.length);
  const visibleIndices = Array.from({ length: visibleCount }, (_, i) => order[i % order.length]);

  return (
    <div className="relative w-[220px] xl:w-[260px] aspect-[3/4] select-none">
      {/* Render bottom → top so top card is painted last */}
      {[...visibleIndices].reverse().map((imgIndex, reversedI) => {
        const stackPos = visibleIndices.length - 1 - reversedI;
        const isTop = stackPos === 0;
        const offset = stackOffsets[stackPos] ?? stackOffsets[stackOffsets.length - 1];

        return (
          <motion.div
            key={imgIndex}
            className={`absolute inset-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl ${
              isTop && !isSwiping ? "cursor-grab active:cursor-grabbing" : ""
            }`}
            style={{
              zIndex: offset.zIndex,
              opacity: isTop ? cardOpacity : 1,
              x: isTop ? x : 0,
            }}
            drag={isTop && !isSwiping ? "x" : false}
            dragConstraints={{ left: -300, right: 300 }}
            dragElastic={0.6}
            dragMomentum={false}
            onDragEnd={isTop ? handleDragEnd : undefined}
            whileDrag={isTop && !isSwiping ? { scale: 1.05 } : undefined}
            animate={{ rotate: offset.rotate, y: offset.y, scale: offset.scale }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            <Image
              src={images[imgIndex]}
              alt={`Photo ${imgIndex + 1}`}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 1280px) 220px, 260px"
              priority={isTop}
            />
          </motion.div>
        );
      })}

      <p className="absolute -bottom-7 left-0 right-0 text-center text-gray-400 dark:text-gray-600 text-xs pointer-events-none">
        swipe to browse ↔
      </p>
    </div>
  );
};

export default HeroPhotoStack;
