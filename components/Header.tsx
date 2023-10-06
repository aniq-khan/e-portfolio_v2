import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa6";
import { Social } from "../typings";
import Link from "next/link";
type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header
      className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center p-4 px-10"
    >
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            className="text-gray-400"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex temt-sm text-gray-400">
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
