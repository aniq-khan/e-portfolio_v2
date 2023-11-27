import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flx-row max-w-full justify-evenly items-center z-0 xl:text-2xl"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
      "
      >
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-24 h-screen
          "
          >
            <motion.img
              initial={{
                opacity: 0,
                y: -200,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src={urlFor(project.image).url() || ""}
              alt=""
              width={480}
              height={300}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project?.title}
              </h4>

              <div className="flex items-center space-x-4 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    alt=""
                    width={64}
                    height={64}
                    src={urlFor(technology.image).url() || ""}
                  />
                ))}
              </div>

              <p className="text-lg text-left md:text-center lg:text-xl">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
