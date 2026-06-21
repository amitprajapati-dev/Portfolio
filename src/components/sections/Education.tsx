export default function Education() {
  const education = [
    {
      title: "Secondary & Senior Secondary Education",
      institution: "CBSE Board, Delhi",
      period: "2021 - 2023",
      status: "Completed",
      description:
        "Built a strong academic foundation while developing an early interest in technology, computers, and software development.",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      period: "2023 - Present",
      status: "Final Semester",
      description:
        "Currently pursuing BCA and successfully completed all semesters without any backlogs. Focused on software development, databases, web technologies, and problem-solving.",
    },
    {
      title: "NIELIT O Level & A Level",
      institution:
        "National Institute of Electronics & Information Technology",
      period: "2023 - Present",
      status: "Project Submission In Progress",
      description:
        "Completed coursework in Database Technologies, System Analysis & Design, Data Science using Python, Big Data Analytics, Web Technologies, and Software Development.",
    },
  ];

  const certifications = [
    {
      title: "Delta Full Stack Web Development",
      issuer: "Apna College",
      description:
        "Comprehensive full-stack development program covering frontend, backend, authentication, databases, deployment, and real-world projects.",
    },
    {
      title: "Freedom Employment Academy (FEA)",
      issuer: "FEA",
      description:
        "Training focused on Spoken English, Personality Development, Professional Communication, and Computer Fundamentals.",
    },
  ];

  const highlights = [
    "Final Semester BCA Student",
    "No Backlogs Throughout Graduation",
    "NIELIT O & A Level Coursework Completed",
    "Full Stack Development Certified",
    "Real World Project Experience",
    "Database Design & Development",
    "Software Engineering Fundamentals",
    "Strong Problem Solving Skills",
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen overflow-hidden bg-black py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-24 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-400">
            Education & Certifications
          </p>

          <h2 className="text-5xl font-bold md:text-7xl">
            My
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Learning Journey
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
            A journey built through continuous learning, technical education,
            certifications, and hands-on development experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent md:left-1/2" />

          <div className="space-y-14">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0
                    ? "justify-start md:justify-start"
                    : "justify-start md:justify-end"
                }`}
              >
                {/* Dot */}
                 <div className="absolute left-[9px] top-8 z-20 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] md:left-1/2 md:-translate-x-1/2" />

                <div className="ml-12 w-full md:ml-0 md:w-[45%]">
                  <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      {item.period}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-blue-300">
                      {item.institution}
                    </p>

                    <div className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-300">
                      {item.status}
                    </div>

                    <p className="mt-5 leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-32">
          <div className="mb-12 text-center">
            <h3 className="text-4xl font-bold">Academic Highlights</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span className="text-sm text-zinc-200">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-32">
          <div className="mb-12 text-center">
            <h3 className="text-4xl font-bold">Certifications & Training</h3>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {certifications.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-wider text-cyan-300">
                  Certification
                </div>

                <h4 className="text-2xl font-bold">{item.title}</h4>

                <p className="mt-2 text-blue-300">{item.issuer}</p>

                <p className="mt-5 leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-32 text-center">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-bold">
              Continuous Learning Never Stops
            </h3>

            <p className="mt-5 text-zinc-400">
              Beyond formal education, I actively learn modern technologies,
              build real-world projects, and continuously improve my skills to
              become a better Software Engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}