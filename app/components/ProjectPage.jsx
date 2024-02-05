import Project from "./Project";

export default function ProjectPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-16 ">
      <h2 className="text-white text-6xl font-black">Project</h2>
      <div className="flex flex-col w-full items-center pt-10 md:pt-1 justify-center h-full">
        <Project></Project>
      </div>
    </div>
  );
}
