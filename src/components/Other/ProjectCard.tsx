import Image from "next/image";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="rounded-2xl border-4 border-neutral-800 p-4 min-w-[17rem] max-w-[17rem] h-[350px]  hover:z-0 z-10">
      <div className="flex flex-col justify-center items-start">
        <div className="w-full flex justify-center">
          <Image
            src={project.image}
            alt={project.title}
            width={215}
            height={150}
            className="mb-4 rounded"
          />
        </div>
        <h6 className="mb-2 font-semibold ml-2">{project.title}</h6>
        <p className="mb-3 ml-2 text-neutral-400 text-ellipsis whitespace-wrap max-w-full line-clamp-2">{project.des}</p>
        <div className="flex flex-wrap">
          {project.tech.map((tech: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-wrap w-fit"
            >
              <span className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 m-1 ">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
