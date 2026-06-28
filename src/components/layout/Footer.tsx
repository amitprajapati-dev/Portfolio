// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-16 px-4">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="#home" className="text-3xl font-black tracking-tight text-white transition duration-300 hover:text-blue-400">
              AMIT
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-blue-400">
              FULL STACK DEVELOPER
            </p>
            <p className="mt-2 text-sm text-white/50 max-w-xs">
              Focused on building scalable web applications,
              clean architecture and meaningful digital experiences.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/20"
              >
                Let's Work Together →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#about" className="group inline-flex items-center gap-2 text-white/50 transition hover:text-blue-400">
                  <span className="text-blue-500 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="group inline-flex items-center gap-2 text-white/50 transition hover:text-blue-400">
                  <span className="text-blue-500 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="group inline-flex items-center gap-2 text-white/50 transition hover:text-blue-400">
                  <span className="text-blue-500 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="group inline-flex items-center gap-2 text-white/50 transition hover:text-blue-400">
                  <span className="text-blue-500 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              CONTACT
            </h3>

            <div className="mt-5 space-y-4 text-sm flex flex-col">

              <a
                href="mailto:amitprajapati4353@gmail.com"
                className="text-white/50 transition hover:text-blue-400"
              >
                amitprajapati4353@gmail.com
              </a>

              <a
                href="tel:+918368619855"
                className="block text-white/50 transition hover:text-blue-400"
              >
                +91 83686 19855
              </a>

              <p className="text-white/40">
                New Delhi, India
              </p>

            </div>

          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">FOLLOW ME</h3>
            <p className="mt-3 text-sm text-white/40">
              Let's connect across platforms.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/amitprajapati-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/amitprajapati-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://leetcode.com/u/amitprajapati-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
              >
                <SiLeetcode size={20} />
              </a>
              <a
                href="https://wa.me/918368619855"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="mailto:amitprajapati4353@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
              >
                <SiGmail size={20} />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] uppercase tracking-wider text-blue-300">
                Freelance
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/60">
                Collaborations
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/60">
                Full-Time
              </span>

            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/30">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Amit Prajapati.
              All rights reserved.
            </p>

            <p className="text-xs uppercase tracking-[0.35em] text-white/25">
              Always Learning • Always Building
            </p>
            <a
              href="#home"
              className="text-sm text-white/40 transition hover:text-blue-400"
            >
              Back Home ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}