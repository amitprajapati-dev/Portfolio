import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <main className="bg-background min-h-screen p-10 w-full flex justify-center items-center flex-col">
      <h1 className="text-text text-6xl font-bold">
        Amit Prajapati
      </h1>

      <p className="text-primary text-2xl">
        Full Stack Developer
      </p>

      <p className="text-muted">
        Building modern web experiences.
      </p>

      <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl mt-5">
        View Projects
      </button>
    </main>
    </div>
  );
}
