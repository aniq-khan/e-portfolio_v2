import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  skill: Skill;
    directionLeft?: boolean;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img 
      initial={{
        x: directionLeft ? -300 : 300,
      }}
      transition={{
        duration:1,
      }}
      whileInView={{
        opacity: 1, 
        x:0,
      }}
      viewport={{
        once: true,
      }}
        className="rounded-full border border-gray-500 h-24 w-24 lg:w-28 lg:h-28
        filter group-hover:grayscale transition duration-300 ease-in-out
        "
      src={urlFor(skill?.image).url() || ""}
      />
    
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 lg:w-28 lg:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    
    
    </div>
  );
}

export default Skill;
