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

      {/* <div className="grid md:grid-cols-2 justify-around items-center gap-3 xxs:grid-rows-2 md:grid-rows-1"> */}
      <div className="flex justify-evenly items-center gap-4 xxs:flex-col-reverse md:flex-row">
        <Reveal
          y={-400}
          cn="flex mx-auto"
        >
          <button className="text-purple-500  hover:text-neutral-900 bg-neutral-900  p-[0.65rem] rounded-lg hover:bg-purple-500 transition-colors duration-300">
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
          y={-400}
          cn="flex mx-auto"
        >
          <button className="text-purple-500  hover:text-neutral-900 bg-neutral-900  p-[0.65rem] rounded-lg hover:bg-purple-500 transition-colors duration-300">
            <Reveal y={100}>
              <a
                href="https:/mail.google.com/mail/?view=cm&fs=1&tf=1&to=hardikmalhotra150804@gmail.com"
                target="_blank"
                className="text-xl"
              >
                Email Me
              </a>
            </Reveal>
          </button>
        </Reveal>

        {/* <Reveal
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
        </Reveal> */}
      </div>
    </section>
  );
};

export default Contact;

const Button = ({ children, href, ...props }: { children: string; href: string }) => (
  <Reveal
    y={-400}
    cn="flex mx-auto"
  >
    <button className="text-purple-500  hover:text-neutral-900 bg-neutral-900  p-[0.65rem] rounded-lg hover:bg-purple-500 transition-colors duration-300">
      <Reveal y={100}>
        <a
          href={href}
          {...props}
          className="text-xl"
        >
          {children}
        </a>
      </Reveal>
    </button>
  </Reveal>
);
