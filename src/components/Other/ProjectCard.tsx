import Image from "next/image";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="rounded-2xl border-4 border-neutral-800 p-4 max-w-[17rem] max-h-[25rem]">
      <div className="w-full flex justify-center">
        <Image
          src={project.image}
          alt={project.title}
          width={215}
          height={150}
          className="mb-4 rounded"
        />
      </div>
      <div className="w-fit max-w-fit border border-white">
        <h6 className="mb-2 font-semibold">{project.title}</h6>
        <p className="mb-4 text-neutral-400">{project.des}</p>
        <div className="flex flex-wrap">
          {project.tech.map((tech: any, idx: number) => (
            <div
              key={idx}
              className="gap-2 flex flex-wrap justify-start items-center"
            >
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 my-1">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
