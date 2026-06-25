"use client";
import Image from "next/image";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaNpm } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiCloudinary, SiVercel, SiRender, SiRazorpay } from "react-icons/si";
import TechCard from "../ui/TechCard";

export default function TechStack() {
  return (
    <section id="skills" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/tech-stack.png"
        alt="About Background"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"/>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        
        {/* Small Heading */}
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">
            MY EXPERTISE
          </p>
          <div className="mx-auto mt-3 h-[2px] w-24 bg-blue-500" />
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl font-black uppercase text-white md:text-7xl lg:text-8xl">
          TECH STACK
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
          The technologies, tools and platforms I use to build fast,
          scalable and production-ready web applications.
        </p> 

        {/* Tech Cards */}
        <div className="mt-20 w-full overflow-x-auto scrollbar-hide scroll-smooth px-1 py-3">
          <div className="flex min-w-max gap-6 snap-x snap-mandatory pb-4">

            {/* Card 1 */}
            <TechCard
              title="Frontend"
              description="Building responsive, accessible and high-performance user interfaces."

              technologies={[
                {
                  name: "React.js",
                  icon: <FaReact />,
                },
                {
                  name: "Next.js",
                  icon: <SiNextdotjs />,
                },
                {
                  name: "TypeScript",
                  icon: <SiTypescript />,
                },
                {
                  name: "JavaScript",
                  icon: <SiJavascript />,
                },
                {
                  name: "Tailwind CSS",
                  icon: <SiTailwindcss />,
                },
              ]}
            />

            {/* Card 2 */}
            <TechCard
              title="Backend"
              description="Creating secure APIs and scalable server-side applications."

              technologies={[
                {
                  name: "Node.js",
                  icon: <FaNodeJs />,
                },
                {
                  name: "Express.js",
                  icon: <SiExpress />,
                },
                {
                  name: "REST APIs",
                  icon: <SiPostman />,
                },
                {
                  name: "JWT Authentication",
                  icon: <SiRazorpay />,
                },
                {
                  name: "MVC Architecture",
                  icon: <FaNodeJs />,
                },
              ]}
            />

            {/* Card 3 */}
            <TechCard
              title="Database"
              description="Designing efficient database structures for reliable applications."

              technologies={[
                {
                  name: "MongoDB",
                  icon: <SiMongodb />,
                },
                {
                  name: "MySQL",
                  icon: <SiMysql />,
                },
                {
                  name: "Mongoose",
                  icon: <SiMongodb />,
                },
                {
                  name: "Aggregation",
                  icon: <SiMongodb />,
                },
                {
                  name: "Schema Design",
                  icon: <SiMysql />,
                },
              ]}
            />

            {/* Card 4 */}
            <TechCard
              title="Tools"
              description="Using modern development tools to improve workflow and productivity."

              technologies={[
                {
                  name: "Git",
                  icon: <FaGitAlt />,
                },
                {
                  name: "GitHub",
                  icon: <FaGithub />,
                },
                {
                  name: "Postman",
                  icon: <SiPostman />,
                },
                {
                  name: "Cloudinary",
                  icon: <SiCloudinary />,
                },
                {
                  name: "npm",
                  icon: <FaNpm />,
                },
              ]}
            />

            {/* Card 5 */}
            <TechCard
              title="Deployment"
              description="Deploying and maintaining production-ready full stack applications."

              technologies={[
                {
                  name: "Vercel",
                  icon: <SiVercel />,
                },
                {
                  name: "Render",
                  icon: <SiRender />,
                },
                {
                  name: "GitHub",
                  icon: <FaGithub />,
                },
                {
                  name: "Environment Variables",
                  icon: <FaNodeJs />,
                },
                {
                  name: "Domain Configuration",
                  icon: <SiVercel />,
                },
              ]}
            />

          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 flex w-full max-w-5xl items-center justify-center gap-3 overflow-x-auto py-4 text-center md:gap-6">
  <div>
    <h4 className="text-2xl font-bold text-white md:text-3xl">Think</h4>
    <p className="mt-2 text-sm text-zinc-400">
      Understand the problem
    </p>
  </div>

  <span className="text-2xl text-blue-500">→</span>

  <div>
    <h4 className="text-2xl font-bold text-white md:text-3xl">Code</h4>
    <p className="mt-2 text-sm text-zinc-400">
      Build the solution
    </p>
  </div>

  <span className="text-2xl text-blue-500">→</span>

  <div>
    <h4 className="text-2xl font-bold text-white md:text-3xl">Debug</h4>
    <p className="mt-2 text-sm text-zinc-400">
      Fix every issue
    </p>
  </div>

  <span className="text-2xl text-blue-500">→</span>

  <div>
    <h4 className="text-2xl font-bold text-white md:text-3xl">Deploy</h4>
    <p className="mt-2 text-sm text-zinc-400">
      Ship to production
    </p>
  </div>

  <span className="text-2xl text-blue-500">→</span>

  <div>
    <h4 className="text-2xl font-bold text-white md:text-3xl">Repeat</h4>
    <p className="mt-2 text-sm text-zinc-400">
      Keep improving
    </p>
  </div>
</div>
      </div>
    </section>
  );
}