"use client";

export default function TechStack() {
  return (
    <section id="skills" className="relative min-h-screen w-full overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"/>

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
          Technologies I use to design, develop and deploy modern web
          applications with performance, scalability and user experience in
          mind.
        </p> 

        {/* Tech Cards */}
        <div className="mt-20 grid w-full max-w-6xl gap-8 md:grid-cols-3">
          {/* Frontend */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            <h3 className="mb-6 text-3xl font-bold text-white">
              Frontend
            </h3>

            <div className="space-y-3 text-zinc-300">
              <p>React.js</p>
              <p>Next.js</p>
              <p>TypeScript</p>
              <p>JavaScript</p>
              <p>Tailwind CSS</p>
              <p>Bootstrap</p>
            </div>

            <div className="mx-auto my-6 h-px w-full bg-white/10" />

            <p className="text-sm leading-7 text-zinc-400">
              Building responsive, fast and user-focused interfaces with modern
              frontend technologies.
            </p>
          </div>

          {/* Backend */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            <h3 className="mb-6 text-3xl font-bold text-white">
              Backend
            </h3>

            <div className="space-y-3 text-zinc-300">
              <p>Node.js</p>
              <p>Express.js</p>
              <p>REST APIs</p>
              <p>JWT Authentication</p>
              <p>Bcrypt</p>
              <p>MVC Architecture</p>
            </div>

            <div className="mx-auto my-6 h-px w-full bg-white/10" />

            <p className="text-sm leading-7 text-zinc-400">
              Developing secure, scalable and maintainable server-side
              applications.
            </p>
          </div>

          {/* Database */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            <h3 className="mb-6 text-3xl font-bold text-white">
              Database
            </h3>

            <div className="space-y-3 text-zinc-300">
              <p>MongoDB</p>
              <p>MySQL</p>
              <p>Mongoose</p>
              <p>Schema Design</p>
              <p>Aggregation</p>
              <p>Query Optimization</p>
            </div>

            <div className="mx-auto my-6 h-px w-full bg-white/10" />

            <p className="text-sm leading-7 text-zinc-400">
              Designing efficient database structures and managing application
              data reliably.
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid w-full max-w-4xl grid-cols-3 gap-4 md:gap-10">
          <div>
            <h4 className="text-4xl font-bold text-white">2+</h4>
            <p className="mt-2 text-sm text-zinc-400">
              Years Learning
            </p>
          </div>

          <div>
            <h4 className="text-4xl font-bold text-white">10+</h4>
            <p className="mt-2 text-sm text-zinc-400">
              Projects Built
            </p>
          </div>

          <div>
            <h4 className="text-4xl font-bold text-white">100%</h4>
            <p className="mt-2 text-sm text-zinc-400">
              Passion Driven
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}