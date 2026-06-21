import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="bg-background min-h-screen w-full">
      <Hero />
      <About/>
      <TechStack/>
      <Projects/>
      <Education/>
      <Contact/>
    </main>
  );
}