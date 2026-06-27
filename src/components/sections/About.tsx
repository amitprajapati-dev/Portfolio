// app/about/page.tsx
"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/about-bg.jpeg"
        alt="About Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/60" />

      {/* Dark Overlay – deep cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Subtle blue glow for atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />

      {/* Content – right-aligned with glassmorphism card */}
      <div className="relative z-10 flex min-h-screen flex-col items-end justify-center px-6 py-10 md:px-12 lg:px-20">
        <div className="">
          <div className="max-w-3xl w-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16 space-y-6">
            {/* Small label */}
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm font-light uppercase tracking-[0.3em] text-white/80">
                ABOUT ME
              </p>
              <div className="h-[2px] w-8 bg-blue-500" />
            </div>

            {/* Name heading */}
            <h2 className="text-4xl font-black tracking-[0.05em] text-white md:text-5xl lg:text-6xl">
              Amit Prajapati
            </h2>

            {/* Role line */}
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium tracking-wider text-white/90 md:text-base">
              <span>FULL STACK DEVELOPER</span>
              <span className="text-blue-400">•</span>
              <span>BCA GRADUATE</span>
              <span className="text-blue-400">•</span>
              <span>NIELIT A LEVEL</span>
            </div>

            {/* Description – refined and engaging */}
            <div className="space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
              <p>
                I&apos;m <span className="text-white font-medium">Amit Prajapati</span> from New Delhi, a Full Stack Developer
                passionate about building <span className="text-white font-medium">modern, scalable</span> and
                <span className="text-white font-medium"> immersive</span> web applications that solve real problems.
              </p>
              <p>
                I work across the complete stack — from responsive UIs with React, Next.js and Tailwind CSS
                to secure backend systems, REST APIs, authentication and databases using Node.js, Express,
                MongoDB and MySQL.
              </p>
              <p>
                I constantly learn and apply new technologies to build projects that combine performance,
                clean architecture and great user experience.
              </p>
            </div>

            {/* Info cards – refined glassmorphism */}
            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-center backdrop-blur-sm transition hover:border-blue-500/40 hover:bg-white/5">
                <h4 className="text-xs font-medium uppercase tracking-wider text-blue-400">
                  Based In
                </h4>
                <p className="mt-2 text-base font-semibold text-white">Delhi NCR, India</p>
                <p className="text-xs text-white/60">Near Gurugram</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-center backdrop-blur-sm transition hover:border-blue-500/40 hover:bg-white/5">
                <h4 className="text-xs font-medium uppercase tracking-wider text-blue-400">
                  Education
                </h4>
                <p className="mt-2 text-base font-semibold text-white">BCA</p>
                <p className="text-xs text-white/60">NIELIT A Level</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-center backdrop-blur-sm transition hover:border-blue-500/40 hover:bg-white/5">
                <h4 className="text-xs font-medium uppercase tracking-wider text-blue-400">
                  Focus
                </h4>
                <p className="mt-2 text-base font-semibold text-white">Full Stack</p>
                <p className="text-xs text-white/60">Scalable web applications</p>
              </div>
            </div>
          </div>


          {/* Personal Philosophy */}
          <div className="mt-15 flex flex-wrap items-center justify-center gap-3 text-center">

            <div>
              <h4 className="text-xl font-bold text-white md:text-2xl">
                Learn
              </h4>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Stay Curious
              </p>
            </div>

            <span className="text-2xl text-blue-500">→</span>

            <div>
              <h4 className="text-2xl font-bold text-white md:text-2xl">
                Code
              </h4>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Build Ideas
              </p>
            </div>

            <span className="text-2xl text-blue-500">→</span>

            <div>
              <h4 className="text-2xl font-bold text-white md:text-2xl">
                Coffee
              </h4>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Fuel Up ☕
              </p>
            </div>

            <span className="text-2xl text-blue-500">→</span>

            <div>
              <h4 className="text-2xl font-bold text-white md:text-2xl">
                Repeat
              </h4>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                Keep Coding
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}