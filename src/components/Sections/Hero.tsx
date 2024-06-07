"use client";
import { aboutMe } from "@/lib/content";
import { motion } from "framer-motion";
import ImageCard from "../Other/ImageCard";
import Reveal from "../Other/Reveal";

const Hero = () => {
  return (
    <section
      className="mt-[4.5rem] border-b border-neutral-800 pb-24"
      id="hero"
    >
      <div className="xxs:flex xxs:flex-col-reverse xxs:justify-center xxs:items-center md:justify-evenly md:gap-4 xl:gap-0 md:grid md:grid-cols-2">
        <div className="flex justify-center items-center">
          <Reveal
            x={-200}
            du={0.6}
          >
            <motion.p className="xxs:mt-4 md:mt-0 xl:px-12 xs:text-justify md:text-base lg:text-lg xl:text-2xl xxs:text-center">{aboutMe}</motion.p>
          </Reveal>
        </div>
        <div className="md:flex md:items-center xxs:justify-center">
          <ImageCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
