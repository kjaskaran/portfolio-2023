import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          y: directionLeft ? -200 : 300,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
        className="rounded-full border border-gray-500 object-cover w-20 h-20 
        md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition
        duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
       ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28
       rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
