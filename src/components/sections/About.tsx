import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-[120vh] w-full overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/bg-image.png"
        alt="About Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* black Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/1 via-black/80 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/1 to-black/1" />


      {/* Content */}
      <div className="relative max-w-7xl z-10 pt-30 px-6 mx-auto min-h-screen flex items-center justify-end ">

        <div className="relative max-w-4xl text-center">

          {/* Small Heading */}
          <div className="mb-5">
            <p className="uppercase tracking-[0.4em] text-zinc-400 text-sm">
              welcome
            </p>
            <div className="w-20 h-[2px] bg-blue-500 mx-auto mt-3" />
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-none">
            About me
          </h2>

          {/* Role */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm md:text-base uppercase tracking-wider text-zinc-300">
            <span>Full Stack Developer</span>
            <span className="text-blue-500">•</span>
            <span>BCA Graduate</span>
            <span className="text-blue-500">•</span>
            <span>NIELIT A Level</span>
          </div>

          {/* Description */}
          <p className="mt-8 text-base text-zinc-300 tracking-wider md:text-lg leading-8 max-w-3xl mx-auto">
            I'm Amit Prajapati from New Delhi, a passionate Full Stack
            Developer focused on building modern, scalable and immersive web
            applications.
            <br />
            <br />
            I work across the complete development stack — from crafting
            responsive user interfaces with React, Next.js and Tailwind CSS to
            developing secure backend systems, REST APIs, authentication and
            database architecture using Node.js, Express, MongoDB and MySQL.
            <br />
            <br />
            I enjoy solving real-world problems through code and continuously
            improving my skills by building projects that combine performance,
            clean design and user experience.
          </p>

          <div className="relative mt-14">
            {/* Original Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">10+</h3>
                <p className="text-zinc-400 text-sm mt-2">Projects Built</p>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">Frontend</h3>
                <p className="text-zinc-400 text-sm mt-2">React • Next.js</p>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">Backend</h3>
                <p className="text-zinc-400 text-sm mt-2">Node • MongoDB</p>
              </div>
            </div>

            {/* Reflection */}
            <div
              aria-hidden="true"
              className="absolute top-[115%] left-0 w-full h-32 scale-y-[-1] opacity-100 blur-xs overflow-hidden pointer-events-none border-white"
            >
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">10+</h3>
                  <p className="text-zinc-400 text-sm mt-2">Projects Built</p>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Frontend</h3>
                  <p className="text-zinc-400 text-sm mt-2">React • Next.js</p>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Backend</h3>
                  <p className="text-zinc-400 text-sm mt-2">Node • MongoDB</p>
                </div>
              </div>

              {/* Inner Glow in Reflection */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-blue-500/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>







      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}