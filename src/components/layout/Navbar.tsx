"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import AnimatedLink from "@/components/ui/animated-link";
import CurrentTime from "@/components/ui/current-time";



export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return (
  <header className="z-10 w-full bg-background uppercase">
    <div className="fixed top-0 z-50 dark:bg-white bg-black w-full h-7 text-white dark:text-black text-xs flex justify-center items-center"><CurrentTime /></div>
    <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16 mt-7">
    <ScrollProgress className="top-[0px]"/>
    {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 text-sm font-bold sm:flex justify-between w-full">
        <Link
          href="#about"
          className="transition-colors duration-300 hover:text-primary cursor-pointer"
        >
          <AnimatedLink
            text="ABOUT"
            hoverText="ABOUT"
            direction="up"
            className="cursor-pointer font-semibold px-5 h-10"
          />
        </Link>

        <Link
          href="#skills"
          className="transition-colors duration-300 hover:text-primary cursor-pointer"
        >
          <AnimatedLink
              text="SKILLS"
              hoverText="SKILLS"
              direction="up"
              className="cursor-pointer font-semibold px-5 h-10"
            />
        </Link>

        <Link
          href="#projects"
          className="transition-colors duration-300 hover:text-primary cursor-pointer"
        >
          <AnimatedLink
            text="PROJECTS"
            hoverText="PROJECTS"
            direction="up"
            className="cursor-pointer font-semibold px-5 h-10"
          />
        </Link>

        <Link
          href="#contact"
          className="transition-colors duration-300 hover:text-primary cursor-pointer"
        >
          <AnimatedLink
            text="CONTACT"
            hoverText="CONTACT"
            direction="up"
            className="cursor-pointer font-semibold px-5 h-10"
          />
        </Link>
        <AnimatedThemeToggler className="cursor-pointer transition-colors duration-300 hover:text-yellow-400"/>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer flex-col justify-center gap-1.5 sm:hidden"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-0.5 w-6 bg-current transition-all duration-300 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />

        <span
          className={`h-0.5 w-6 bg-current transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />

        <span
          className={`h-0.5 w-6 bg-current transition-all duration-300 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>
    </div>

    {/* Mobile Menu */}
    <nav className={`overflow-hidden bg-background transition-all duration-300 sm:hidden ${
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >

      <div className="flex flex-col gap-6 px-6 py-6 text-sm font-bold">
        <Link
          href="#about"
          onClick={() => setIsOpen(false)}
          className="transition-colors duration-300 hover:text-primary"
        >
          About
        </Link>

        <Link
          href="#about"
          onClick={() => setIsOpen(false)}
          className="transition-colors duration-300 hover:text-primary"
        >
          Skills
        </Link>

        <Link
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="transition-colors duration-300 hover:text-primary"
        >
          Projects
        </Link>

        <Link
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="transition-colors duration-300 hover:text-primary"
        >
          Contact
        </Link>
        <AnimatedThemeToggler className="cursor-pointer w-fit transition-colors duration-300 hover:text-yellow-400"/>
      </div>

    </nav>
</header>

);
}
