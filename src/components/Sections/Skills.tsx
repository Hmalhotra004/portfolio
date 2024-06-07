"use client";
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import Reveal from "../Other/Reveal";

const Skills = () => {
  // const style_logo = "text-5xl text-cyan-400";
  const styles_div = "rounded-2xl border-4 border-neutral-800 p-4 mb-6";

  return (
    <section
      className="border-b border-neutral-800 pb-24"
      id="skills"
    >
      <Reveal
        x={-400}
        cn="flex mx-auto"
      >
        <h2 className="my-16 text-center text-4xl">Technologies</h2>
      </Reveal>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 2.5, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <TbBrandNextjs className="text-5xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <SiTailwindcss className="text-5xl text-cyan-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 3.5, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <TbBrandFramerMotion className="text-5xl text-cyan-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 4, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <FaNodeJs className="text-5xl text-green-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 4.5, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <SiExpress className="text-5xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 4, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <IoLogoFirebase className="text-5xl text-firebase-col" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 3.5, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <GrMysql className="text-5xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <BiLogoPostgresql className="text-5xl text-sky-700" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 2.5, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: [1, 1], y: [10, -10], transition: { duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse" } }}
          viewport={{ once: true }}
          className={styles_div}
        >
          <FaPython className="text-5xl text-sky-800" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
