"use client";

import { motion } from "motion/react";

interface AnimatedLinkProps {
  text: string;
  hoverText: string;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function AnimatedLink({
  text,
  hoverText,
  direction = "up",
  className = "",
}: AnimatedLinkProps) {
  const isVertical =
    direction === "up" || direction === "down";

  const variants = {
    up: {
      initial: { y: "0%" },
      hover: { y: "-50%" },
    },

    down: {
      initial: { y: "-50%" },
      hover: { y: "0%" },
    },

    left: {
      initial: { x: "-50%" },
      hover: { x: "0%" },
    },

    right: {
      initial: { x: "0%" },
      hover: { x: "-50%" },
    },
  };

  const firstText =
    direction === "down" || direction === "left"
      ? hoverText
      : text;

  const secondText =
    direction === "down" || direction === "left"
      ? text
      : hoverText;

  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        variants={variants[direction]}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={
          isVertical
            ? "h-[200%]"
            : "w-[200%] flex"
        }
      >
        <div
          className="
            flex items-center justify-center
            w-full h-1/2
            shrink-0
          "
        >
          {firstText}
        </div>

        <div
          className="
            flex items-center justify-center
            w-full h-1/2
            shrink-0
          "
        >
          {secondText}
        </div>
      </motion.div>
    </motion.button>
  );
}