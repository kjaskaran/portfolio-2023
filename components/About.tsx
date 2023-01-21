import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: 200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://media.licdn.com/dms/image/D5603AQFeCxGsuDCvJw/profile-displayphoto-shrink_800_800/0/1670482581239?e=1679529600&v=beta&t=-dMOe5Inpmzozckf07iujSZJaviFNERFVbYzEhZrO28"
        className="-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover 
        md:rounded-lg md:w-56 md:h-56 xl:w-[400px] xl:h-[400px]"
      />

      <div className="space-y-5 px-0 md:px-10">
        <h4 className="xl:text-4xl md:text-3xl text-2xl font-semibold">
          Here{"'"}s a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background!
        </h4>
        <p className="text-lg md:text-base">
          🦋 4 years of total experience with 3 years as a Software Engineer at
          Robert Bosch Engineering and Business Solutions. 🌸 Experienced
          Software Developer trained in developing web applications using HMTL,
          CSS, Bootstrap, Tailwind CSS and JavaScript frameworks such as
          Angular, React, knockoutJS, Node.js. 💖 Well versed in programming
          languages - C/C++, Python, JavaScript and data structures. 
        </p>
      </div>
    </motion.div>
  );
}
