import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary hover:text-primary"
        >
          Amit
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium sm:gap-8 max-sm:hidden ">
          <Link
            href="#about"
            className="transition-colors duration-300 hover:text-primary"
          >
            About
          </Link>

          <Link
            href="#projects"
            className="transition-colors duration-300 hover:text-primary"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="transition-colors duration-300 hover:text-primary"
          >
            Contact
          </Link>

          {/* Theme Toggle Coming Soon */}
        </nav>
      </div>
    </header>
  );
}