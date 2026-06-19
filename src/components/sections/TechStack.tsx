"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const techStacks = [
  {
    number: "01",
    title: "FRONTEND",
    items:
      "React.js • Next.js • JavaScript • TypeScript • HTML5 • CSS3 • Tailwind CSS • Bootstrap",
  },
  {
    number: "02",
    title: "BACKEND",
    items:
      "Node.js • Express.js • REST APIs • Authentication • JWT • Sessions • Middleware",
  },
  {
    number: "03",
    title: "DATABASE",
    items:
      "MongoDB • Mongoose • MySQL • Database Design • CRUD Operations",
  },
  {
    number: "04",
    title: "PROGRAMMING",
    items:
      "JavaScript • TypeScript • Python • C • C++",
  },
  {
    number: "05",
    title: "TOOLS & WORKFLOW",
    items:
      "Git • GitHub • VS Code • Postman • Linux • npm • pnpm",
  },
  {
    number: "06",
    title: "CURRENTLY LEARNING",
    items:
      "Data Structures & Algorithms • System Design • Advanced Next.js • Scalable Backend Development",
  },
];

export default function TechStack() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const headingColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    ["#ffffff", "#666666", "#000000"]
  );

  return (
    <section id="skills"
      ref={sectionRef}
      className="bg-white text-black min-h-screen py-24 overflow-hidden rounded-4xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-24"
        >
          <motion.h2
            style={{
              color: headingColor,
            }}
            className="text-center text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-none"
          >
            TECH STACK
          </motion.h2>

          <p className="text-center mt-6 text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
            Technologies, tools and frameworks I use to build modern,
            scalable and high-performance web applications.
          </p>
        </motion.div>

        {/* Stack List */}
        <div className="space-y-10">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.number}
              initial={{
                opacity: 0,
                y: 120,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-black/10 pb-10"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">

                {/* Number */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -80,
                    rotate: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="text-5xl md:text-7xl font-black text-zinc-400 min-w-[120px]"
                >
                  {stack.number}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl font-black uppercase">
                    {stack.title}
                  </h3>

                  <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-600 max-w-4xl">
                    {stack.items}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}