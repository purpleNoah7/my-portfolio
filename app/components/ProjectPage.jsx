import Project from "./Project";

export default function ProjectPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-16 ">
      <h2 className="text-white text-6xl font-black">Proyectos</h2>
      <div className="flex flex-col w-full items-center justify-center h-full"><Project></Project></div>
    </div>
  );
}
