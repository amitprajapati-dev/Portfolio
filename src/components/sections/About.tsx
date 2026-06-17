import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 h-full">

        {/* about and introduction section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center lg:justify-between">
          
          {/* Image Section */}
          <div className="w-full flex justify-center lg:w-2/3">
            {/* Glow Effect */}
            <Image
              src="/images/amit.jpeg"
              alt="Amit Prajapati"
              width={400}
              height={600}
              priority
              className="z-10 w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl border border-border object-cover shadow-2xl"
            />
          </div>


          <div className="relative w-full px-0 lg:px-5">
            <div className="absolute top-20 -left-30 h-72 w-72 rounded-full bg-primary opacity-40 blur-3xl" />
            <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl">
              Building Modern
              <span className="text-primary">
                {" "}Full Stack Web Applications
              </span>
            </h2>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm">
                📍 New Delhi, India
              </span>

              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm">
                🎓 BCA (IGNOU)
              </span>

              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm">
                📚 NIELIT 'A' Level
              </span>

              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm">
                💻 Full Stack Developer
              </span>
            </div>

            {/* About Text */}
            <div className=" space-y-4 py-5 px-1">
              <p className="text-text leading-8">
                I'm Amit Prajapati, a BCA student at IGNOU and currently
                pursuing the NIELIT 'A' Level program in Information
                Technology. I am passionate about web development and enjoy
                turning ideas into responsive, user-friendly, and scalable
                applications.
              </p>

              {/* <p className="text-text leading-8">
                My primary tech stack includes React, Next.js, TypeScript,
                JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB,
                and MySQL. I have built full-stack applications featuring
                authentication, JWT-based authorization, password hashing
                with bcrypt, database integration, and modern UI/UX practices.
              </p> */}

              <p className="text-text leading-8">
                Beyond development, I am continuously improving my Data
                Structures & Algorithms skills using C++ and expanding my
                knowledge of software engineering principles and industry
                best practices. My goal is to grow as a Full Stack Developer
                and build impactful digital products while working toward
                a career as a Software Engineer.
              </p>
            </div>
          </div>


        </div>



        {/* tech stack */}
        <div className="min-h-screen border mt-24 lg:mt-40">
                {/* commind soon */}

        </div>








      </div>
    </section>
  );
}