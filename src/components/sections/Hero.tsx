import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { NotepadText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Background Blur Effects */}
        <div className="pointer-events-none fixed bottom-20 right-[40%] h-72 w-72 rounded-full bg-primary-dark opacity-80 blur-3xl" />

        <div className="pointer-events-none fixed -left-10 -top-10 h-24 w-24 rounded-full bg-primary-dark opacity-100 blur-2xl" />

        <div className="z-10 flex w-full flex-col justify-between gap-16 font-bold lg:flex-row">
          
          {/* Left Side */}
          <div className="flex flex-col gap-16 lg:gap-24">
            
            {/* Name */}
            <div>
              <p className="text-primary text-2xl font-normal sm:text-lg">
                Hello I'm
              </p>

              <h1 className="text-text text-5xl sm:text-6xl lg:text-5xl">
                Amit
              </h1>

              <h1 className="text-text text-5xl sm:text-6xl lg:text-5xl">
                Prajapati
              </h1>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 text-2xl lg:flex-col lg:text-xl">
              
              <span className="cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1 w-fit text-md">
                <FaGithub />
              </span>

              <span className="cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1 w-fit text-md">
                <FaLinkedin />
              </span>

              <span className="cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1 w-fit text-md">
                <CiMail />
              </span>

              <span className="cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1 w-fit text-md">
                <FaWhatsapp />
              </span>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between lg:items-end">
            
            <div>
              <p className="text-primary text-base font-normal sm:text-lg">
                Creative
              </p>

              <h1 className="text-primary text-5xl sm:text-6xl lg:text-5xl">
                Developer
              </h1>

              <h1 className="text-text text-5xl sm:text-6xl lg:text-5xl">
                & Designer
              </h1>
            </div>

            <div className="mt-10 flex items-center gap-2 lg:mt-0">
              <p className="text-muted text-sm font-normal">
                RESUME
              </p>

              <span>
                <NotepadText size={16} strokeWidth={1.5} />
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


