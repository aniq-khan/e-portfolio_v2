import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg justify-center items-center space-y-16 flex-shrink-0  snap-center bg-[#292929] 
                p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 h-[70vh] my-auto
                max-w-[60vw] lg:max-w-[50vw]
                "
    >
      <motion.img
        initial={{
          y: 100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center "
        src={urlFor(experience?.companyImage).url() || ""}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="uppercase tracking-widest text-2xl font-light">
          {experience.company}
        </h4>
        <p className="uppercase tracking-widest font-bold text-xl mt-1">
          {experience.jobTitle}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image key={technology._id} src={urlFor(technology.image).url()} width={30} height={30} className="rounded-full" alt="" />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>

        <ul className="list-disc space-y-4 ml-5 text-sm md:text-md xl:text-lg 2xl:text-sm">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
