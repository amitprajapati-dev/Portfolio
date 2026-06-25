import { ReactNode } from "react";

type TechCardProps = {
  title: string;
  description: string;
  technologies: {
    name: string;
    icon: ReactNode;
  }[];
};

export default function TechCard({
  title,
  description,
  technologies,
}: TechCardProps) {
  return (
    <div className="group w-[330px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]">
      {/* Heading */}
      <h3 className="mb-8 text-3xl font-bold text-white">
        {title}
      </h3>

      {/* Technologies */}
      <div className="space-y-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-3 text-zinc-300 transition group-hover:text-white"
          >
            <span className="text-xl text-blue-400">
              {tech.icon}
            </span>

            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-8 h-px w-full bg-white/10" />

      {/* Description */}
      <p className="text-sm leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}