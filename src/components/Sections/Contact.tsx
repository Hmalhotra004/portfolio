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
          href="hardikmalhotra150804@gmail.com"
          className="text-xl"
        >
          hardikmalhotra150804@gmail.com
        </a>
      </Reveal>

      <Reveal
        x={-400}
        cn="flex mx-auto"
      >
        <button className=" bg-neutral-900  p-3 rounded-lg my-8">
          <Reveal y={100}>
            <a className="text-2xl text-purple-500">Download Resume</a>
          </Reveal>
        </button>
      </Reveal>
    </section>
  );
};

export default Contact;
