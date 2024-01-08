"use client";

import { motion } from "framer-motion";
import language from "./data/languaje";

export default function AboutMe() {
  return (
    <article
      id="about"
      className="flex flex-col w-full h-screen justify-center items-center gap-10 mb-60 md:mb-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3}}
      >
        <h2 className="text-6xl text-center font-black bg-gradient-to-br from-blue-300 to-blue-700 bg-clip-text text-transparent   tracking-tight leading-none">
          Come{" "}
          <span className="text-6xl font-black bg-gradient-to-br from-orange-300 to-orange-700 bg-clip-text text-transparent   tracking-tight leading-none">
            meet
          </span>{" "}
          <span className="text-6xl font-black bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent   tracking-tight leading-none">
            {" "}
            me!
          </span>
        </h2>
        <div className="text-black dark:text-slate-100 p-10 text-pretty md:text-center">
          <p>
            As a <span className="font-bold">junior programmer</span>, I am
            driven by an unwavering passion for code and a commitment to
            continuous learning. My journey into the world of programming has
            been largely self-taught, a testament to my determination and
            curiosity.{" "}
          </p>
          <p>
            Beyond the screen, my life is marked by a wide range of{" "}
            <span className="font-bold"> hobbies</span>. When I'm not diving
            into lines of code, I find solace in the melodies I compose,
            channeling creativity through music.
          </p>
          <p>
            And, of course, there is play, whether in the virtual realm,
            engaging in activities that keep my mind agile and imaginative.
            These passions complement my programming experience and offer me a
            comprehensive approach to problem solving and{" "}
            <span className="font-bold">creative expression</span>.
          </p>
        </div>
      </motion.div>

      <div className="flex items-center justify-center flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center font-black text-5xl bg-gradient-to-br from-blue-300 to-blue-700 bg-clip-text text-transparent   tracking-tight leading-none p-5 ">
            Professional{" "}
            <span className="text-5xl font-black bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent   tracking-tight leading-none">
              {" "}
              Skillset
            </span>
          </h2>{" "}
        </motion.div>
        <div className="flex p-5 gap-4 flex-wrap items-center justify-center ">
          {language.map((language, index) => (
            <img key={index} src={language.icon} alt="" />
          ))}
        </div>
      </div>
    </article>
  );
}
