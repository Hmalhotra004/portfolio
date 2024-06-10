"use client";
import Reveal from "../Other/Reveal";

const Contact = () => {
  return (
    <section
      className="border-b border-neutral-900 mb-4 pb-4 flex flex-col justify-center items-center gap-4"
      id="Contact"
    >
      <Reveal
        x={-400}
        cn="flex mx-auto"
      >
        <h2 className="my-4 text-center text-4xl">Get in Touch</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 justify-center items-center gap-4 xxs:grid-rows-3 md:grid-rows-1">
        <Reveal
          x={-400}
          cn="flex mx-auto"
        >
          <a
            href="tel:+91 7715871202"
            className="text-xl"
          >
            +91 7715871202
          </a>
        </Reveal>

        <Reveal
          y={-400}
          cn="flex mx-auto"
        >
          <button className="text-purple-500  hover:text-neutral-900 bg-neutral-900  p-3 rounded-lg hover:bg-purple-500 transition-colors duration-300">
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

        <Reveal
          x={400}
          cn="flex mx-auto"
        >
          <a
            href="mailto:hardikmalhotra150804@gmail.com"
            className="text-xl"
          >
            Email Me
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
