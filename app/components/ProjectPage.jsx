"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-16 ">
      <h2 className="text-white text-6xl font-black">Projects</h2>
      <div className="flex-col items-center justify-center flex sm:w-10/12  gap-10 pt-16 p-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col gap">
              <h1 className="font-black text-3xl">
                <span className="bg-gradient-to-br from-blue-300 to-blue-500 bg-clip-text text-transparent   tracking-tight leading-none">
                  MovieLine
                </span>{" "}
                - a beautiful library of movies{" "}
              </h1>
            </div>
            <span className="w-8/12">
              A personal project in development where I applied nextjs,
              tailwind. Use the movie db api to extract the movies
            </span>
            <div className="flex gap-1">
              <span class="flex gap-x-2 rounded-full text-xs bg-[#000000] text-white py-1 px-2 border border-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-nextjs size-4"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                  <path d="M15 12v-3" />
                </svg>
                NextJs
              </span>
              <span class="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2 border border-white/10">
                <svg
                  class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                >
                  <g clip-path="url(#a)">
                    <path
                      fill="#38bdf8"
                      fill-rule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clip-rule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                Tailwind CSS
              </span>{" "}
              <a className="flex" href="https://movie-line.vercel.app/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-external-link"
                  width="24"
                  height="24"
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
                Open it
              </a>
            </div>
            <Image
              width={1000}
              height={1000}
              src="/movie.png"
              className="w-[60%] shadow-xl shadow-blue-300/30 rounded-lg"
              alt=""
            />
          </div>{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-start gap-2">
            {" "}
            <div className="flex flex-row">
              <h1 className="font-black text-3xl">
                <span className="bg-gradient-to-br from-orange-300 to-orange-500 bg-clip-text text-transparent   tracking-tight leading-none">
                  Portfolio.Dev
                </span>{" "}
                - My personal portfolio developed with enthusiasm{" "}
              </h1>
            </div>
            <span className="w-8/12">
              Apply nextjs framer motion and tailwind css for this project
            </span>
            <div className="flex gap-1">
              <span class="flex gap-x-2 rounded-full text-xs bg-[#000000] text-white py-1 px-2 border border-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-nextjs size-4"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                  <path d="M15 12v-3" />
                </svg>
                NextJs
              </span>
              <span class="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2 border border-white/10">
                <svg
                  class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#38bdf8"
                      fill-rule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                Tailwind CSS
              </span>
              <a className="flex" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-external-link"
                  width="24"
                  height="24"
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
                Open it
              </a>
            </div>
            <Image
              width={1000}
              height={1000}
              src="/portfolio.png"
              className="w-[60%] shadow-xl shadow-orange-300/30 rounded-lg"
              alt=""
            />
          </div>{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-start gap-2">
            {" "}
            <div className="flex flex-row">
              <h1 className="font-black text-3xl">
                <span className="bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent   tracking-tight leading-none">
                  Todo
                </span>{" "}
                - a simple todo list with backend{" "}
              </h1>
            </div>
            <span className="w-8/12">
              This project that I did following 1 nextJs/api course with prisma
              and tailwindcss, I did it using typescript
            </span>
            <div className="flex gap-1">
              <span class="flex gap-x-2 rounded-full text-xs bg-[#000000] text-white py-1 px-2 border border-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-nextjs size-4"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
                  <path d="M15 12v-3" />
                </svg>
                NextJs
              </span>
              <span class="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2 border border-white/10">
                <svg
                  class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#38bdf8"
                      fill-rule="evenodd"
                      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h54v32.4H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                Tailwind CSS
              </span>
              <span className="flex gap-x-2 rounded-full text-xs bg-[#4f4161] text-white py-1 px-2 border border-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-prisma size-4"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4.186 16.202l3.615 5.313c.265 .39 .754 .57 1.215 .447l10.166 -2.718a1.086 1.086 0 0 0 .713 -1.511l-7.505 -15.483a.448 .448 0 0 0 -.787 -.033l-7.453 12.838a1.07 1.07 0 0 0 .037 1.147z" />
                  <path d="M8.5 22l3.5 -20" />
                </svg>
                Prisma
              </span>{" "}
              <span className="flex gap-x-2 rounded-full text-xs bg-[#4156bd] text-white py-1 px-2 border border-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-typescript size-4"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" />
                  <path d="M9 12h4" />
                  <path d="M11 12v6" />
                  <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
                </svg>
                TypeScript
              </span>
              <a className="flex" href="https://api-next-iota.vercel.app/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-external-link"
                  width="24"
                  height="24"
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
                Open it
              </a>
            </div>
            <Image
              width={1000}
              height={1000}
              src="/todo.png"
              className="w-[60%] shadow-xl shadow-purple-500/30 rounded-lg"
              alt=""
            />
          </div>{" "}
        </motion.div>
      </div>
    </div>
  );
}
