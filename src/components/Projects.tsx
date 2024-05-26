import { PROJECTS } from "@/lib/content";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-16 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <Image
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.des}</p>
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
