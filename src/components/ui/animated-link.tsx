"use client";

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

  const firstText =
    direction === "down" || direction === "left"
      ? hoverText
      : text;

  const secondText =
    direction === "down" || direction === "left"
      ? text
      : hoverText;

  const translateClass = {
    up: "group-hover:-translate-y-1/2",
    down: "group-hover:translate-y-1/2",
    left: "group-hover:translate-x-1/2",
    right: "group-hover:-translate-x-1/2",
  };

  const initialClass = {
    up: "translate-y-0",
    down: "-translate-y-1/2",
    left: "-translate-x-1/2",
    right: "translate-x-0",
  };

  return (
    <button
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        className={`
          ${isVertical ? "h-[200%]" : "w-[200%] flex"}
          ${initialClass[direction]}
          ${translateClass[direction]}
          transition-transform duration-300 ease-out
        `}
      >
        <div
          className="
            flex items-center justify-center
            w-full h-1/2 shrink-0
          "
        >
          {firstText}
        </div>

        <div
          className="
            flex items-center justify-center
            w-full h-1/2 shrink-0
          "
        >
          {secondText}
        </div>
      </div>
    </button>
  );
}