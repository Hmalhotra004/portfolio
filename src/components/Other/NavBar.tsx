"use client";
import { FadeIn } from "@/lib/animation";
import { header } from "@/lib/header";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MobileNav from "./MobileNav";
import NavBarLogos from "./NavBarLogos";

const NavBar = () => {
  const layHeader = (data: { name: string; to: string }, idx: number) => {
    return (
      <motion.li
        variants={FadeIn(0)}
        initial="hidden"
        animate="visible"
        className="mx-2 text-sm xs:text-base md:text-xl lg:text-2xl xxs:text-xs hover:text-purple-500 transition-all ease-in-out"
        key={idx}
      >
        <button
          onClick={() =>
            document.getElementById(data.to)?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          {data.name}
        </button>
      </motion.li>
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  let hamClass = "hamburger hamburger--collapse";
  let hide = "hidden";

  if (isOpen) {
    hamClass += " is-active";
    hide = "";
  }

  function handleHamClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="flex items-center justify-end my-4 ">
        <div className="mr-auto z-20">
          <NavBarLogos />
        </div>
        <div className="pt-2 md:hidden z-20">
          <button
            className={hamClass}
            type="button"
            onClick={handleHamClick}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <nav className="">
          <ul className="xxs:hidden md:flex md:items-end md:justify-center text-lg ">{header.map((data, idx) => layHeader(data, idx))}</ul>
        </nav>
      </header>
      <AnimatePresence
        initial={false}
        // exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isOpen && (
          <MobileNav
            hide={hide}
            onClick={handleHamClick}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
