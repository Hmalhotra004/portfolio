"use client";
import Reveal from "../Other/Reveal";

const Contact = () => {
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
        <a
          href="#"
          className="text-xl"
        >
          hardikmalhotra150804@gmail.com
        </a>
      </Reveal>

      <button className="text-purple-500 bg-neutral-900 text-2xl p-3 rounded-lg">Resume</button>
    </section>
  );
};

export default Contact;
