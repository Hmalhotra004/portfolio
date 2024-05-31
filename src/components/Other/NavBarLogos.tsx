import { FadeIn } from "@/lib/animation";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const NavBarLogos = () => {
  const logoStyle = "mx-2 md:text-2xl xxs:text-xl hover:text-purple-500 transition-all ";
  return (
    <nav className="flex justify-center items-center">
      <motion.a
        variants={FadeIn(0)}
        initial="hidden"
        animate="visible"
        href="https://www.linkedin.com/in/hardik-malhotra-726328299/"
        target="_blank"
      >
        <FaLinkedin className={logoStyle} />
      </motion.a>
      <motion.a
        variants={FadeIn(0)}
        initial="hidden"
        animate="visible"
        href="https://github.com/Hmalhotra004"
        target="_blank"
      >
        <FaGithub className={logoStyle} />
      </motion.a>
      <motion.a
        variants={FadeIn(0)}
        initial="hidden"
        animate="visible"
        href="https://www.instagram.com/hardik152004/"
        target="_blank"
      >
        <FaInstagram className={logoStyle} />
      </motion.a>
    </nav>
  );
};

export default NavBarLogos;
