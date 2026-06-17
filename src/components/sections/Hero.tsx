import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Mail, NotepadText } from "lucide-react";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-end px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Background Blur Effects - no overflow now */}
        <div className="absolute bottom-50 right-[40%] h-92 w-92 rounded-full bg-primary opacity-40 blur-3xl" />
        <div className="pointer-events-none fixed -left-10 -top-10 h-24 w-24 rounded-full bg-primary opacity-100 blur-2xl" />

        <div className="z-10 flex w-full justify-between gap-16 flex-col font-bold pb-25">
          
          {/* Left Side - Name & Title side by side on desktop, stacked on mobile */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-24 justify-between ">
            <div>
              <p className="text-primary text-base sm:text-lg lg:text-2xl font-normal">Hello! I'm</p>
              <h1 className="text-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Amit</h1>
              <h1 className="text-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Prajapati</h1>
            </div>

            <Image
              src="/images/a.png"
              alt="Amit Prajapati"
              width={300}
              height={600}
              priority
              className=" absolute left-1/2 top-1/2 z-10 w-[400px] sm:w-[500px] md:w-[700px] lg:w-[900px] -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none drop-shadow-[0_0_4px_theme(colors.gray.500)]"
            />

            <div className="flex flex-col items-end pt-5">
              <p className="text-primary text-sm sm:text-base lg:text-lg font-normal">A Creative</p>
              <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Full Stack</h1>
              <h1 className="text-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Developer</h1>
            </div>
          </div>

          {/* Right Side - Social Icons + Resume (absolute positioned) */}
          <div className="flex justify-between lg:items-end">
            
            {/* Social Icons */}
            <div className="absolute left-6 sm:left-8 lg:left-12 bottom-8 flex gap-4 text-lg sm:text-xl sm:flex-col lg:text-2xl opacity-60 hover:opacity-100 transition-all duration-300">
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
                className="cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1 w-fit text-md"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:amitprajapati4353@gmail.com" 
                aria-label="Email" 
                className="cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1 w-fit text-md"
              >
                <CiMail/>
              </a>
              <a 
                href="https://wa.me/918368619855" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1 w-fit text-md"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Resume */}
            <div className="absolute right-6 sm:right-8 bottom-8 lg:right-12 opacity-60 hover:opacity-100 flex cursor-pointer items-center gap-2 transition-all duration-300">
              <a
                href="/resume/amit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text text-xs sm:text-sm font-normal flex gap-2 tracking-widest"
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