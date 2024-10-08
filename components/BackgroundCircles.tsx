import React from "react";
import { motion } from "framer-motion";
type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 4, 3, 2],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border [#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping opacity-40" />
      <div className="absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 opacity-70" />
      <div className="absolute border [#333333] rounded-full h-[300px] w-[300px] mt-52 opacity-70" />
      <div className="border rounded-full border-[#F7AB0A] opacity-50 h-[400px] w-[400px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;
