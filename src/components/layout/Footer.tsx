// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/90 py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition">
              AMIT
            </Link>
            <p className="mt-2 text-sm text-white/50 max-w-xs">
              Full Stack Developer crafting modern, scalable, and immersive web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-white/50 hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-white/50 hover:text-blue-400 transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-white/50 hover:text-blue-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/50 hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Connect</h3>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/amit4353"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-blue-400 transition duration-300 hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-prajapati-189256330"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-blue-400 transition duration-300 hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://leetcode.com/u/amitprajapati012/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-blue-400 transition duration-300 hover:scale-110"
              >
                <SiLeetcode size={20} />
              </a>
              <a
                href="https://wa.me/918368619855"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-blue-400 transition duration-300 hover:scale-110"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="mailto:amitprajapati4353@gmail.com"
                className="text-white/40 hover:text-blue-400 transition duration-300 hover:scale-110"
              >
                <SiGmail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/30">
          &copy; {new Date().getFullYear()} Amit Prajapati. All rights reserved.
        </div>
      </div>
    </footer>
  );
}