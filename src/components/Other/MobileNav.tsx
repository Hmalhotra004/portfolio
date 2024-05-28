import { header } from "@/lib/header";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const MobileNav = ({ hide, onClick }: { hide: string; onClick: () => void }) => {
  let mobile = "flex items-center justify-center fixed bg-slate-950 top-0 left-0 w-full h-full z-10";
  mobile += ` ${hide}`;

  function layHeader(data: { id: number; name: string; to: string }) {
    return (
      <button
        key={data.id}
        onClick={onClick}
      >
        <li
          className="text-2xl"
          key={data.id}
        >
          <Link href={data.to}>{data.name}</Link>
        </li>
      </button>
    );
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const mobNavbarVariants = {
    hidden: { opacity: 0, x: "100vh" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: "100vh", transition: { duration: 0.5 } },
  };

  const mobNavbarItems = {
    hidden: { opacity: 0, y: "100vh" },
    visible: { opacity: 1, y: "0", transition: { duration: 0.5, delay: 0.35 } },
    exit: { opacity: 0, y: "100vh", transition: { duration: 0.25 } },
  };

  return (
    <>
      <motion.nav
        variants={mobNavbarVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={mobile}
      >
        <ul className="list-none p-0 flex flex-col gap-6 mt-6">{header.map(data => layHeader(data))}</ul>
      </motion.nav>
    </>
  );
};

export default MobileNav;
