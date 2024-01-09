"use client";

import { motion } from "framer-motion";
import language from "./data/languaje";
import { useState } from "react";

export default function AboutMe() {
  const [activeLanguage, setActiveLanguage] = useState(null);

  const handleMouseEnter = (language) => {
    setActiveLanguage(language);
  };

  const handleMouseLeave = () => {
    setActiveLanguage(null);
  };

  return (
    <article
      id="about"
      className="flex flex-col w-full h-full justify-center items-center gap-10 mb-60 md:mb-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
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
        <div className="text-black dark:text-slate-100 text-xl p-10 text-pretty md:text-center">
          <p>
            As a <span className="font-bold">junior programmer</span>, I am
            driven by an unwavering passion for code and a commitment to
            continuous learning. My journey into the world of programming has
            been largely self-taught, a testament to my determination and
            curiosity.{" "}
          </p>
          <p>
            Beyond the screen, my life is marked by a wide range of{" "}
            <span className="font-bold"> hobbies</span>. When I&apos;m not
            diving into lines of code, I find solace in the melodies I compose,
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
        <div className="flex relative p-5 gap-4 flex-wrap items-center justify-center  xl:mb-0 ">
          {language.map((language, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(language)}
              onMouseLeave={handleMouseLeave}
              style={{ position: "relative" }}
            >
              <img
                src={language.icon}
                className="cursor-pointer"
                alt={language.name}
              />
              {activeLanguage === language && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: "5px",
                    top: "110%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 9999,
                  }}
                >
                  {language.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
