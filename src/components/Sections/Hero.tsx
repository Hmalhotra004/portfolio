import { aboutMe } from "@/lib/content";
import ImageCard from "../Other/ImageCard";

const Hero = () => {
  return (
    <section className="mt-[4.5rem] border-b border-neutral-800 pb-24">
      <div className="xxs:flex xxs:flex-col md:justify-evenly md:gap-4 xl:gap-0 md:grid md:grid-cols-2">
        <div className="xxs:flex xxs:justify-center xxs:items-center md:hidden">
          <ImageCard />
        </div>
        <div className="flex justify-center items-center">
          {/* <h1 className="lg:text-5xl">Hardik Malhotra</h1>
          <h6 className="lg:text-3xl">Full Stack Developer</h6> */}
          <p className="xxs:mt-4 md:mt-0 xl:px-12 xs:text-justify md:text-base lg:text-lg xl:text-1xl xxs:text-center">{aboutMe}</p>
        </div>
        <div className="md:flex md:justify-center md:items-center xxs:hidden">
          <ImageCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
