import { PROJECTS } from "@/lib/content";
import ProjectCard from "../Other/ProjectCard";

const Projects = () => {
  return (
    <section
      className="border-b border-neutral-900 pb-4"
      id="Projects"
    >
      <h2 className="my-16 text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap justify-evenly items-center">
        {PROJECTS.map((project, idx) => (
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

export default Projects;
