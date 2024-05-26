import { EXPERIENCE } from "@/lib/content";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      {EXPERIENCE.map((exp, index) => (
        <div
          key={index}
          className="mb-8 flex flex-wrap lg:justify-center"
        >
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">
              {exp.role} - <span className="text-sm text-purple-">{exp.company}</span>
            </h6>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
