import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { NotepadText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Background Blur Effects - no overflow now */}
        <div className="pointer-events-none fixed bottom-25 right-[43%] h-72 w-72 rounded-full bg-primary-dark opacity-80 blur-3xl" />
        <div className="pointer-events-none fixed -left-10 -top-10 h-24 w-24 rounded-full bg-primary-dark opacity-100 blur-2xl" />

        <div className="z-10 flex w-full justify-between gap-16 flex-col font-bold">
          
          {/* Left Side - Name & Title side by side on desktop, stacked on mobile */}
          <div className="flex max-sm:flex-col max-sm:gap-10 lg:gap-24 justify-between">
            <div>
              <p className="text-primary text-2xl font-normal sm:text-lg">Hello! I'm</p>
              <h1 className="text-text text-5xl sm:text-5xl lg:text-5xl">Amit</h1>
              <h1 className="text-text text-5xl sm:text-5xl lg:text-5xl">Prajapati</h1>
            </div>

            <div>
              <p className="text-primary text-base font-normal sm:text-lg">A Creative</p>
              <h1 className="text-primary text-5xl sm:text-5xl lg:text-5xl">Full Stack</h1>
              <h1 className="text-text text-5xl sm:text-5xl lg:text-5xl">Developer</h1>
            </div>
          </div>

          {/* Right Side - Social Icons + Resume (absolute positioned) */}
          <div className="flex justify-between lg:items-end">
            
            {/* Social Icons */}
            <div className="absolute left-6 sm:left-8 lg:left-12 bottom-8 flex gap-5 text-2xl sm:flex-col lg:text-2xl opacity-60 hover:opacity-100 transition-all duration-300">
              <a 
                href="https://github.com/amit4353" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1 w-fit text-md"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/amit-prajapati-189256330" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="w-fit cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:amitprajapati4353@gmail.com" 
                aria-label="Email" 
                className="w-fit cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <CiMail />
              </a>
              <a 
                href="https://wa.me/918368619855" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="w-fit cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Resume */}
            <div className="absolute right-6 sm:right-8 bottom-8 lg:right-12 opacity-60 hover:opacity-100 flex cursor-pointer items-center gap-2 transition-all duration-300">
              <a
                href="/resume/Naman Yadav.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text text-sm font-normal flex gap-2 tracking-widest"
              >
                RESUME
                <span>
                  <NotepadText size={16} strokeWidth={0.9} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}