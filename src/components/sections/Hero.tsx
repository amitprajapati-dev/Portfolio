"use client";

import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        src="/videos/background-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="flex flex-col items-center">
          {/* "HI, I'M" */}
          <p className="mb-2 text-md font-light tracking-[0.3em] text-white/80 uppercase">
            HI, I'M
          </p>
          {/* Thin Blue Accent Line */}
          <div className="mb-4 h-[2px] w-10 bg-blue-500" />

          {/* Main Name */}
          <h1 className="text-5xl font-black tracking-[0.05em] text-white md:text-7xl lg:text-7.5xl xl:text-8xl">
            AMIT PRAJAPATI
          </h1>

          {/* Role Section with Blue Dots */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm font-medium tracking-wider text-white/90 md:text-base">
            <span>FULL STACK DEVELOPER</span>
            <span className="text-blue-400">•</span>
            <span>SOFTWARE ENGINEER IN PROGRESS</span>
            <span className="text-blue-400">•</span>
            <span>PROBLEM SOLVER</span>
          </div>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/70 md:text-base">
            Passionate about crafting modern web applications, solving real-world problems and continuously learning new technologies.
          </p>

          {/* Download CV Button */}
          
          <div className="flex gap-5">
            <a
              href=""
              download="Amit_Prajapati_Resume.pdf"
              className="group mt-8 flex items-center gap-3 rounded border border-blue-500/50 bg-white/5 px-8 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-400/70 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              DOWNLOAD CV

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400 transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="group mt-8 flex items-center gap-3 rounded border border-blue-500/50 bg-white/5 px-8 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-400/70 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              CONTACT ME

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          {/* Social Section - only "LET'S CONNECT" text, no icons */}
          <div className="mt-12">
            <p className="text-xs font-light tracking-[0.2em] text-white/60 uppercase">
              OPEN TO OPPORTUNITIES
            </p>
          </div>

          {/* social links */}
          <div className="pt-10 flex gap-6 text-2xl text-white/80">
            <a
              href="https://github.com/amit4353"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/amit-prajapati-189256330"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            >
              <FaLinkedin />
            </a>
 
            <a
              href="https://leetcode.com/u/amitprajapati012/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://wa.me/918368619855"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:amitprajapati4353@gmail.com"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            >
              <SiGmail />
            </a>
          </div>
          

        </div>
      </div>

      {/* Scroll Indicator with CSS animation */}
      <div className="absolute bottom-[clamp(5rem,8vw,7.5rem)] left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-5 items-start justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
        </div>
      </div>
    </section>
  );
}