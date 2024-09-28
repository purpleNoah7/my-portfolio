const { IconLanguaje } = require("../IconLanguaje");
import language from "./languaje";
export const project = [{
    name: "MovieLine",
    subtitle: "a beautiful library of movies",
    description:
      "A personal project in development where I applied nextjs, tailwind. Use the movie db api to extract the movies",
    languaje: language
      .filter((language) => language?.project?.includes("MovieLine"))
      .map((language, index) => (
        <IconLanguaje key={index} language={language} />
      )),
    link: "https://movie-line.vercel.app/",
    initialColor: "#93c5fd",
    finalColor: "rgba(44, 142, 255, 1)",
    image: "/movie.png"
  },
  {
    name: "Portfolio.Dev",
    subtitle: "My personal portfolio developed with enthusiasm",
    description:
      "Apply nextjs framer motion and tailwind css for this project",
    languaje: language
      .filter((language) => language?.project?.includes("Portfolio.Dev"))
      .map((language, index) => (
        <IconLanguaje key={index} language={language} />
      )),
    link: "https://portfolio.dev/",
    initialColor: "#93c5fd",
    finalColor: "rgba(44, 142, 255, 1)",
    image: "/portfolio.png"
  },
  {
    name: "Todo",
    subtitle: "a simple todo list with backend",
    description:
      "This project that I did following 1 nextJs/api course with prisma and tailwindcss, I did it using typescript",
    languaje: language
      .filter((language) => language?.project?.includes("Todo"))
      .map((language, index) => (
        <IconLanguaje key={index} language={language} />
      )),
      link: "https://api-next-iota.vercel.app/",
    initialColor: "#93c5fd",
    finalColor: "rgba(44, 142, 255, 1)",
    image: "/todo.png"
      
  },
  
];