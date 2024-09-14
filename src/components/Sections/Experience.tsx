"use client";
import { EXPERIENCE } from "@/lib/experience";
import Reveal from "../Other/Reveal";

const Experience = () => {
  const FONTSIZE = `xxs:text-sm md:text-base `;
  return (
    <section
      className="border-b border-neutral-900 pb-4"
      id="Experience"
    >
      <Reveal
        x={-400}
        cn="flex mx-auto"
      >
        <h2 className="my-16 text-center text-4xl">Experience</h2>
      </Reveal>

      {EXPERIENCE.map((exp, index) => (
        <div
          key={index}
          className="mb-8 flex flex-wrap justify-center"
        >
          <div className="w-full lg:w-1/4">
            <Reveal x={-300}>
              <p className={`xxs:mb-1 text-neutral-400 ${FONTSIZE}`}>{exp.year}</p>
            </Reveal>
            {exp.link && (
              <Reveal x={-300}>
                <a
                  href={exp.link}
                  target="_blank"
                  className={`mb-2 text-neutral-400 hover:text-neutral-300 transition-all ${FONTSIZE}`}
                >
                  Website Link
                </a>
              </Reveal>
            )}
          </div>

          <div className="w-full max-w-xl lg:w-3/4">
            <Reveal x={-300}>
              <h6 className={`mb-2 mt-2 md:mt-0 font-semibold ${FONTSIZE}`}>
                {exp.role} - <span className={FONTSIZE}>{exp.company}</span>
              </h6>
            </Reveal>

            <Reveal x={-300}>
              <p className={`mb-3 text-neutral-400 ${FONTSIZE}`}>{exp.description}</p>
            </Reveal>

            <div className="flex flex-wrap">
              {exp.skiils.map((tech, idx) => (
                <Reveal
                  key={idx}
                  x={-100}
                >
                  <div className="flex flex-wrap w-fit">
                    <span className="rounded bg-neutral-900 px-2 py-1 xxs:text-sm xl:text-base font-medium text-purple-500 m-2 ml-0 ">
                      <Reveal
                        y={100}
                        de={0.2}
                      >
                        <p>{tech}</p>
                      </Reveal>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
