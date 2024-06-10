import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

type Props = {
  project: any;
  // {title: string;
  // image: string;
  // des: string;
  // link: string;
  // github: string;
  // tech: string[];}[]
};

const HoverBg = ({ project }: { project: any }) => (
  <div className="bg-purple-100/5 z-50 w-full h-full flex justify-center items-center">
    <a
      href={project.github}
      className="p-2 rounded-lg mx-2 text-lg bg-black text-purple-500 hover:text-black hover:bg-purple-500 transition-colors"
    >
      GitHub
    </a>
    <a
      href={project.link}
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
          className="rounded-2xl border-4 border-neutral-800 p-4 min-w-[17rem] max-w-[17rem] h-[350px]  hover:z-0 z-10 hover:p-0 transition-all"
        >
          {isOn && <HoverBg project={project} />}
          <div className="flex flex-col justify-center items-start">
            <div className="w-full flex justify-center">
              <Reveal y={10}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={215}
                  height={150}
                  className="mb-4 rounded"
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
