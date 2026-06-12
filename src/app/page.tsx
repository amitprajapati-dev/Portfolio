import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-background min-h-screen w-full">
      <Hero />
      <About/>
    </main>
  );
}