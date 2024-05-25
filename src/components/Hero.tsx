import { aboutMe } from "@/lib/content";
import ImageCard from "./ImageCard";

const Hero = () => {
  return (
    <section className="mt-[4.5rem]">
      <div className="md:grid md:grid-cols-2 md:justify-evenly md:gap-4 xl:gap-0 xs:flex xs:flex-col">
        <div className="xs:flex xs:justify-center xs:items-center md:hidden">
          <ImageCard />
        </div>
        <div className="flex justify-center items-center">
          {/* <h1 className="lg:text-5xl">Hardik Malhotra</h1>
          <h6 className="lg:text-3xl">Full Stack Developer</h6> */}
          <p className=" text-justify lg:text-lg xl:text-1xl md:text-base xl:px-12 xs:mt-4 md:mt-0">{aboutMe}</p>
        </div>
        <div className="md:flex md:justify-center md:items-center xs:hidden">
          <ImageCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
