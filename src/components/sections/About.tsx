import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-primary opacity-20 blur-3xl" />

            <Image
              src="/images/amit.jpeg"
              alt="Amit Prajapati"
              width={400}
              height={650}
              priority
              className="relative z-10 rounded-3xl border border-border object-cover shadow-2xl backdrop-blur-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-2">

            {/* <p className="text-primary font-medium tracking-widest">
              ABOUT ME
            </p> */}

            <h2 className="text-4xl font-bold lg:text-5xl">
              Passionate About Building
              <span className="text-primary"> Modern Web Experiences</span>
            </h2>

            <p className="text-muted leading-8">
              Hi, I'm Amit Prajapati, a passionate Full Stack Developer
              from New Delhi, India.
            </p>

            <p className="text-muted leading-8">
              I enjoy building responsive, scalable and user-friendly
              applications using React, Next.js, JavaScript,
              Tailwind CSS and Node.js.
            </p>

            <p className="text-muted leading-8">
              Currently pursuing BCA from IGNOU while continuously
              improving my skills in Full Stack Development,
              Data Structures & Algorithms and Software Engineering.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pt-4">

              <span className="rounded-full bg-card px-4 py-2 text-sm border border-border">
                React
              </span>

              <span className="rounded-full bg-card px-4 py-2 text-sm border border-border">
                Next.js
              </span>

              <span className="rounded-full bg-card px-4 py-2 text-sm border border-border">
                TypeScript
              </span>

              <span className="rounded-full bg-card px-4 py-2 text-sm border border-border">
                Tailwind CSS
              </span>

              <span className="rounded-full bg-card px-4 py-2 text-sm border border-border">
                Node.js
              </span>

              <span className="rounded-full bg-card px-4 py-2 text-sm border border-border">
                MongoDB
              </span>

            </div>

            {/* Button */}
            <div className="pt-4">
              <a
                href="/resume/Amit-Prajapati-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary-dark"
              >
                Download Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}