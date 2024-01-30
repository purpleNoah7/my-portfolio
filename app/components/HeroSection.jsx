"use client";
import Avatar from "./Avatar";
import { easeInOut, motion } from "framer-motion";
export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
    >
      <div className=" p-3 gap-8 flex flex-col items-center justify-center w-full h-full min-h-screen mb-52 sm:mb-0">
        <div>
          <Avatar avatar={"/picture.JPG"}></Avatar>
        </div>
        <div className="text-center">
          <div className="flex items-center gap-1 justify-center">
            <h2 className="dark:text-slate-300 text-black">
              Hi, I&apos;m Leandro Jimenéz
            </h2>
            <img src="/waving.png" className="h-5 w-5" alt="" />
          </div>
          <h1 className="text-5xl max-w-[700px] text-black dark:text-slate-200 font-black ">
            <span className="bg-gradient-to-br from-blue-300 to-blue-700 bg-clip-text text-transparent   tracking-tight leading-none">
              Frontend
            </span>{" "}
            <span className="bg-gradient-to-br from-orange-300 to-orange-500 bg-clip-text text-transparent  font-extrabold tracking-tight leading-none">
              Developer
            </span>{" "}
            prepared to put your ideas into{" "}
            <span className="bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent   tracking-tight leading-none">
              code
            </span>
          </h1>
          <div className="flex w-full items-center justify-center pt-5 animate-pulse animate-infinite animate-duration-1300 animate-ease-in-out  ">
            <a href="#about" className="dark">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
              >
                <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414" />
              </svg>
            </a>
          </div>
        </div>
      </div>{" "}
    </motion.div>
  );
}
