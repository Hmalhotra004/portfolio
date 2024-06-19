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

      <div className="grid md:grid-cols-0 justify-center items-center gap-3 xxs:grid-rows-2 md:grid-rows-2">
        <Reveal
          y={-400}
          cn="flex mx-auto"
        >
          <button className="text-purple-500  hover:text-neutral-900 bg-neutral-900  p-3 rounded-lg hover:bg-purple-500 transition-colors duration-300">
            <Reveal y={100}>
              <a
                href="/Hardik Malhotra.pdf"
                download="Hardik Malhotra"
                className="text-xl "
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
            href="https:/mail.google.com/mail/?view=cm&fs=1&tf=1&to=hardikmalhotra150804@gmail.com"
            target="_blank"
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
