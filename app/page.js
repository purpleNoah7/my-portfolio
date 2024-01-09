import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ProjectPage from "./components/ProjectPage";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <AboutMe />
      <ProjectPage />
    </div>
  );
}
