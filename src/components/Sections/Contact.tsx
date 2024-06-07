"use client";
// import { useRouter } from "next/router";
import Reveal from "../Other/Reveal";

const Contact = () => {
  // const router = useRouter();
  return (
    <section
      className="border-b border-neutral-900 pb-4"
      id="Contact"
    >
      <Reveal
        x={-400}
        cn="flex mx-auto"
      >
        <h2 className="my-16 text-center text-4xl">Get in Touch</h2>
      </Reveal>
      <Reveal
        x={-400}
        cn="flex mx-auto"
      >
        <p className="text-xl mb-4">+91 7715871202</p>
      </Reveal>

      <Reveal
        x={400}
        cn="flex mx-auto"
      >
        <button
          type="button"
          // onClick={() => router.push("mailto:hardikmalhotra150804@gmail.com")}
          // href=mailto:"hardikmalhotra150804@gmail.com?"
          className="text-xl"
        >
          Email Me
        </button>
      </Reveal>

      <Reveal
        x={-400}
        cn="flex mx-auto"
      >
        <button className="text-purple-500  hover:text-neutral-900 bg-neutral-900  p-3 rounded-lg my-8 hover:bg-purple-500 transition-colors duration-300">
          <Reveal y={100}>
            <a
              href="/Hardik Malhotra.pdf"
              download="Hardik Malhotra"
              className="text-2xl "
            >
              Download Resume
            </a>
          </Reveal>
        </button>
      </Reveal>
    </section>
  );
};

export default Contact;
