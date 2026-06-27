"use client";

import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedLink from "../ui/animated-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 z-50 w-full border-white/10 bg-blue-950/1 backdrop-blur-xs transition-transform duration-300 ${
        showNavbar ? "top-0 translate-y-0" : "top-0 -translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Logo - AM */}
        <div className="flex items-center justify-center font-bold">
          <Link href="#home">
            <AnimatedLink
              direction="up"
              text="AMIT"
              hoverText="AMIT"
              className="h-10 cursor-pointer hover:text-blue-400"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-semibold text-white sm:flex">
          <Link
            href="#about"
            className="group relative px-1 py-2 transition-colors duration-300 hover:text-blue-300"
          >
            ABOUT
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#skills"
            className="group relative px-1 py-2 transition-colors duration-300 hover:text-blue-300"
          >
            SKILLS
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#projects"
            className="group relative px-1 py-2 transition-colors duration-300 hover:text-blue-300"
          >
            PROJECTS
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#contact"
            className="group relative px-1 py-2 transition-colors duration-300 hover:text-blue-300"
          >
            CONTACT
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <a
          href="/Amit Prajapati.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit flex items-center gap-2 text-sm cursor-pointer max-sm:hidden hover:scale-105 transform transition-all duration-300 hover:-translate-y-1 hover:font-bold hover:text-blue-400"
        >
          <FaCircle size={8} className="fill-blue-400 text-blue-400" />
          <span>RESUME</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto flex cursor-pointer flex-col justify-center gap-1.5 text-white sm:hidden"
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
      <nav
        className={`overflow-hidden border-t border-white/10 bg-blue-950/1 border-b backdrop-blur-2xl transition-all duration-300 sm:hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-6 text-sm font-bold text-white uppercase">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="transition-colors duration-300 hover:text-blue-300"
          >
            About
          </Link>

          <Link
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="transition-colors duration-300 hover:text-blue-300"
          >
            Skills
          </Link>

          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="transition-colors duration-300 hover:text-blue-300"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="transition-colors duration-300 hover:text-blue-300"
          >
            Contact
          </Link>

          <div className="transition-colors duration-300 hover:text-blue-300 cursor-pointer">
            <span>RESUME</span>
          </div>
          
        </div>
      </nav>
    </header>
  );
}