"use client";
import { project } from "./data/projects";
import { ProjectCard } from "./ProjectCard";

export default function ProjectPage() {
  

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-16 h-full ">
      <h2 className="text-white text-6xl font-black">Projects</h2>
      <div className="flex-col items-center justify-center flex w-10/12  gap-20">
        {project.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
