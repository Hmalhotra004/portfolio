import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const NavBarLogos = () => {
  const logoStyle = "mx-2 md:text-2xl xs:text-xl";
  return (
    <nav className="flex">
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
        href="https://github.com/Hmalhotra004"
        target="_blank"
      >
        <FaInstagram className={logoStyle} />
      </a>
    </nav>
  );
};

export default NavBarLogos;
