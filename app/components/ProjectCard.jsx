import { motion } from "framer-motion";
import Image from "next/image";

const cleanColor = (color) =>
  color.replace(/['"\s]+/g, "").replace(/^['"]+|['"]+$/g, "");

export const ProjectCard = ({ project }) => {
  const initialColor = project.initialColor;
  const finalColor = project.finalColor;
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col gap">
          <h1 className="font-black text-3xl">
            <span
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${initialColor}, ${finalColor})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="tracking-tight leading-none"
            >
              {project.name}{" "}
            </span>
            - {project.subtitle}
          </h1>
        </div>
        <span className="w-8/12">{project.description}</span>
        <div className="flex gap-1 items-center justify-center">
          {project.languaje}
          <a className="flex" href={project.link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-external-link"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
              <path d="M11 13l9 -9" />
              <path d="M15 4h5v5" />
            </svg>
          </a>
        </div>
        <Image
          width={1000}
          height={1000}
          src={project.image}
          className="w-[60%] shadow-xl shadow-blue-800/10 rounded-lg"
          alt=""
        />
      </div>
    </motion.div>
  );
};
