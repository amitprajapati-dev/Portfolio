"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { GlareHover } from "@/components/ui/glare-hover";
import { BorderBeam } from "@/components/ui/border-beam";
import AnimatedLink from "@/components/ui/animated-link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";
import { FaGreaterThan } from "react-icons/fa6";
import Image from "next/image";

function FitText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;

      text.style.fontSize = "100px";

      const containerWidth = container.getBoundingClientRect().width;
      const textWidth = text.getBoundingClientRect().width;
      const ratio = containerWidth / textWidth;

      text.style.fontSize = `${100 * ratio}px`;
    };

    fit();

    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <h1
        ref={textRef}
        className={className}
        style={{ display: "block", width: "max-content", lineHeight: 0.75 }}
      >
        {text}
      </h1>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen px-4 sm:px-6 ">

      <div className="relative max-w-7xl mx-auto">

        {/* Big Heading — FitText handles exact full width */}
        <FitText
          text="HI, I'M AMIT"
          className="whitespace-nowrap font-extrabold text-zinc-300"
        />

        {/* Content */}
        <div className="relative flex flex-col md:flex-row mt-8 md:mt-15 gap-8 md:gap-0 md:justify-between">

          <div className="w-full md:w-1/3 uppercase">
            <Terminal className="relative">
              <p className="flex items-center">
                <FaGreaterThan size={10} /><TypingAnimation> Hi, I'm Amit</TypingAnimation>
              </p>

              <TypingAnimation className="text-green-500">  A passionate Full Stack Developer </TypingAnimation>
              <AnimatedSpan className="px-4 text-green-500">focused on building fast, modern and </AnimatedSpan>
              <AnimatedSpan className="px-4 text-green-500">user-friendly web applications.</AnimatedSpan>

              <p className="flex items-center mt-5">
                <FaGreaterThan size={10} /><TypingAnimation delay={0}> career-goal</TypingAnimation>
              </p>

              <AnimatedSpan className="px-4 text-blue-500">✔ Current: Full Stack Developer</AnimatedSpan>
              <AnimatedSpan className="px-4 text-blue-500">Future: Software Engineer</AnimatedSpan>
              <AnimatedSpan className="px-4 text-blue-500">Target: Building products used by millions</AnimatedSpan>

              <p className="flex items-center mt-5">
                <FaGreaterThan size={10} /><TypingAnimation> status</TypingAnimation>
              </p>

              <AnimatedSpan className="px-4">✔ Learning...</AnimatedSpan>
              <AnimatedSpan className="px-4">✔ Building...</AnimatedSpan>
              <AnimatedSpan className="px-4">✔ Improving...</AnimatedSpan>

              <BorderBeam
                size={40}
                initialOffset={20}
                className="from-transparent dark:via-white via-black to-transparent"
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
            </Terminal>
          </div>

          <div className="w-full md:w-1/3 lg:pl-20 pl-5">
            <p>
              <TypingAnimation
                className="uppercase text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed md:leading-10"
              >
                A FULL STACK DEVELOPER PASSIONATE ABOUT
                CREATING MODERN WEB EXPERIENCES
              </TypingAnimation>
            </p>

            <div className="pt-5">
              <AnimatedLink
                text="RESUME"
                hoverText="DOWNLOAD CV"
                direction="up"
                className="bg-white h-10 cursor-pointer px-4 text-black font-semibold"
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <CardContainer className="py-0 border">
              <CardBody
                className="w-full max-w-[300px] aspect-[3/4] md:max-w-none md:w-[300px] md:aspect-auto md:h-[400px]"
              >
                <CardItem
                  translateZ={80}
                  className="w-full h-full"
                >
                  <GlareHover className="relative w-full h-full overflow-hidden border border-white/10">

                    <Image
                      src="/images/amit.jpeg"
                      alt="Amit"
                      width={320}
                      height={400}
                      priority
                      className="w-full h-full object-cover"
                    />

                    <BorderBeam
                      duration={8}
                      size={100}
                    />
                  </GlareHover>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

        </div>
      </div>
    </section>
  );
}