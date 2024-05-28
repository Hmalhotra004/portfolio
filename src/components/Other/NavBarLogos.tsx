import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const NavBarLogos = () => {
  const logoStyle = "mx-2 md:text-2xl xxs:text-xl hover:text-purple-500 transition-all ";
  return (
    <nav className="flex justify-center items-center">
      <a
        href="https://www.linkedin.com/in/hardik-malhotra-726328299/"
        target="_blank"
      >
        <FaLinkedin className={logoStyle} />
      </a>
      <a
        href="https://github.com/Hmalhotra004"
        target="_blank"
      >
        <FaGithub className={logoStyle} />
      </a>
      <a
        href="https://www.instagram.com/hardik152004/"
        target="_blank"
      >
        <FaInstagram className={logoStyle} />
      </a>
    </nav>
  );
};

export default NavBarLogos;
