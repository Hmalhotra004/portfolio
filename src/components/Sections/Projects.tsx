"use client";
import { Projects } from "@/lib/projects";
import ProjectCard from "../Other/ProjectCard";
import Reveal from "../Other/Reveal";

const ProjectsSection = () => {
  return (
    <section
      className="border-b border-neutral-900 pb-4"
      id="Projects"
    >
      <Reveal
        x={-400}
        cn="flex mx-auto"
      >
        <h2 className="my-16 text-center text-4xl">Projects</h2>
      </Reveal>

      <div className="flex flex-wrap justify-center items-center md:gap-8 xxs:gap-2">
        {Projects.map((project, idx) => (
          <div
            key={idx}
            className="mb-4"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
