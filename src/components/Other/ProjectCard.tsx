import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

type Props = {
  project: {
    title: string;
    github: string;
    link: string;
    image: string;
    tech: string[];
    des: string;
  };
};

const HoverBg = ({ project }: Props) => (
  <div className="bg-neutral-950/75 z-50 w-full h-full flex justify-center items-center absolute top-0 left-0 rounded-xl">
    <a
      href={project.github}
      target="_blank"
      className="p-2 rounded-lg mx-2 text-lg bg-black text-purple-500 hover:text-black hover:bg-purple-500 transition-colors"
    >
      GitHub
    </a>
    <a
      href={project.link}
      target="_blank"
      className="p-2 rounded-lg mx-2 text-lg bg-black text-purple-500 hover:text-black hover:bg-purple-500 transition-colors"
    >
      Live Project
    </a>
  </div>
);

const ProjectCard = ({ project }: Props) => {
  const [isOn, setIsOn] = useState(false);

  function handleHover() {
    setIsOn(!isOn);
  }

  return (
    <>
      <Reveal y={30}>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="rounded-2xl border-4 border-neutral-800 p-4 w-80 h-[400px] z-0 transition-all relative"
        >
          {isOn && <HoverBg project={project} />}
          <div className="flex flex-col justify-center items-start">
            <div className="w-full flex justify-center h-full object-contain mb-2">
              <Reveal y={10}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={425}
                  height={240}
                  className=" rounded"
                />
              </Reveal>
            </div>

            <Reveal x={-100}>
              <h6 className="mb-2 font-semibold ml-2">{project.title}</h6>
            </Reveal>

            <Reveal x={-100}>
              <p className="mb-3 ml-2 text-neutral-400 text-ellipsis whitespace-wrap max-w-full line-clamp-2">{project.des}</p>
            </Reveal>

            <div className="flex flex-wrap">
              {project.tech.map((tech: any, idx: number) => (
                <Reveal
                  key={idx}
                  x={-100}
                >
                  <div className="flex flex-wrap w-fit">
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
        </div>
      </Reveal>
    </>
  );
};

export default ProjectCard;
