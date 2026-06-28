"use client";

import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Grocerio",
    category: "Full Stack MERN Application",
    description:
      "A full-stack e-commerce platform with secure authentication, product management, shopping cart, order processing, and an intuitive admin dashboard built for a seamless shopping experience.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
    demo: "https://grocerio-beryl.vercel.app/",
    github: "https://github.com/amitprajapati-dev",
    image: "/projects-images/grocerio-home.jpeg",
    image2: "/projects-images/grocerio-admin-page.jpeg",
    image3: "/projects-images/grocerio-products.jpeg",
  },

  {
    id: "02",
    title: "Agency AI",
    category: "Modern Marketing Page",
    description:
      "A modern AI agency website built with React and Tailwind CSS featuring responsive layouts, reusable components, smooth user interactions, and a clean, professional interface.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    demo: "https://agency-ai-phi-eight.vercel.app/",
    github: "https://github.com/amitprajapati-dev",
    image: "/projects-images/acency-home.jpeg",
    image2: "/projects-images/acency-work.jpeg",
    image3: "/projects-images/acency-help.jpeg",
  },

  {
    id: "03",
    title: "QuickShow",
    category: "Movie Booking Interface",
    description:
      "A responsive movie ticket booking interface built with React and Tailwind CSS featuring movie listings, show details, seat selection, and a smooth user experience.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    demo: "https://quick-show-snowy-one.vercel.app/",
    github: "https://github.com/amitprajapati-dev",
    image: "/projects-images/quick-show-home.jpeg",
    image2: "/projects-images/quick-show-detail.jpeg",
    image3: "/projects-images/quick-show-sheet.jpeg",
  },
  {
    id: "00",
    title: "Explore My GitHub",
    category: "More Projects Available",
    description:
      "Want to see more? Explore my GitHub profile for additional MERN stack applications, React projects, REST APIs, backend services, coding challenges, and ongoing development work.",
    tech: [
      "MERN Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Open Source",
    ],
    demo: "https://github.com/amitprajapati-dev",
    github: "https://github.com/amitprajapati-dev",
    image: "/projects-images/github-dashboard.jpeg",
    image2: "/projects-images/github-name.jpeg",
    image3: "/projects-images/github-activity.jpeg",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20">
      {/* <Image
        src="/images/project-bg.png"
        alt="About Background"
        fill
        priority
        className="object-fill"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/60" /> */}

      {/* Section Header */}
      <div className="relative z-10 mb-16 text-center">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black/1 to-black" /> */}
        <p className="text-sm font-light uppercase tracking-[0.3em] text-white/80">
          MY WORK
        </p>
        <div className="mx-auto mt-2 h-[2px] w-8 bg-blue-500" />
        <h2 className="mt-6 text-5xl font-black uppercase text-white md:text-7xl lg:text-8xl">
          Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl px-4 text-sm leading-relaxed text-white/60 md:text-base">
          A selection of projects demonstrating my skills in full‑stack
          development, clean architecture, and modern design.
        </p>
      </div>

      {/* Sticky Cards Container */}
      <div
        className="relative"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {projects.map((project, index) => {
          const topOffset = 6 + index * 5; // 6rem, 11rem, 16rem, ...
          return (
            <div
              key={project.id}
              className="sticky left-0 flex h-screen w-full items-center justify-center px-4 "
              style={{ top: `${topOffset}rem` }}
            >
              <div className="relative w-full max-w-7xl overflow-hidden rounded-3xl border bg-black mt-2">
                {/* Subtle gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

                <div className="relative z-10 flex flex-col p-6 md:p-8 lg:p-10">
                  {/* Header: Number, Title, Category, Live Button */}
                  <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
                    <div className="flex items-center gap-5">
                      <span className="text-5xl font-black text-white/20 md:text-7xl">
                        {project.id}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white md:text-2xl">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/50">{project.category}</p>
                      </div>
                    </div>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-blue-500/50 bg-white/5 px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    >
                      LIVE PROJECT
                    </a>
                  </div>

                  {/* Image Grid – Dominant */}
                  <div className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr]">
                    <div className="overflow-hidden rounded-2xl border border-white/10 transition-transform duration-700 hover:scale-[1.02]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-4">
                      <div className="overflow-hidden rounded-2xl border border-white/10 transition-transform duration-700 hover:scale-[1.02]">
                        <Image
                        src={project.image2}
                        alt=""
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                      </div>
                      <div className="overflow-hidden rounded-2xl border border-white/10 transition-transform duration-700 hover:scale-[1.02]">
                        <Image
                        src={project.image3}
                        alt=""
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                      </div>
                    </div>
                  </div>

                  {/* Footer: Description, Tech, Buttons */}
                  <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                      <p className="text-sm leading-relaxed text-white/70">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-blue-400 hover:bg-blue-500/10"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-blue-400 hover:bg-blue-500/10"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Glow under card */}
                <div className="absolute -bottom-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}