"use client";
import { EXPERIENCE } from "@/lib/experience";
import Reveal from "../Other/Reveal";

const Experience = () => {
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
            <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">
              {exp.role} - <span className="text-sm text-purple-">{exp.company}</span>
            </h6>
            <p className="mb-4 text-neutral-400">{exp.description}</p>
            {exp.skiils.map((tech, idx) => (
              <Reveal
                key={idx}
                x={-100}
              >
                <div className="flex flex-wrap flex-row">
                  <span className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 m-1 ">
                    <Reveal y={100}>
                      <p>{tech}</p>
                    </Reveal>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
