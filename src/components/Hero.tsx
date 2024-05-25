import { aboutMe } from "@/lib/content";
import ImageCard from "./ImageCard";

const Hero = () => {
  return (
    <section className="mt-[4.5rem]">
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-2 justify-center items-center">
          {/* <h1 className="lg:text-5xl">Hardik Malhotra</h1>
          <h6 className="lg:text-3xl">Full Stack Developer</h6> */}
          <p className="lg:text-xl p-5 text-left">{aboutMe}</p>
        </div>
        <div className="block">
          <ImageCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
