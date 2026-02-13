"use client";

import { motion, type Variant } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";
type Animation = "fade" | "zoom" | "flip";

interface AnimateInProps {
  children: ReactNode;
  animation?: Animation;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const getVariants = (
  animation: Animation,
  direction?: Direction
): { hidden: Variant; visible: Variant } => {
  const offset = 60;
  const directionMap: Record<Direction, { x?: number; y?: number }> = {
    left: { x: -offset },
    right: { x: offset },
    up: { y: -offset },
    down: { y: offset },
  };

  switch (animation) {
    case "fade":
      return {
        hidden: {
          opacity: 0,
          ...(direction ? directionMap[direction] : {}),
        },
        visible: { opacity: 1, x: 0, y: 0 },
      };
    case "zoom":
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    case "flip":
      return {
        hidden: { opacity: 0, rotateY: 90 },
        visible: { opacity: 1, rotateY: 0 },
      };
  }
};

const AnimateIn = ({
  children,
  animation = "fade",
  direction,
  delay = 0,
  duration = 0.6,
  className,
}: AnimateInProps) => {
  const variants = getVariants(animation, direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIn;
