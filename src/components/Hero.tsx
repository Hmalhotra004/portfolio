import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-[6.5rem]">
      <div className="flex justify-between">
        <div className="flex flex-col justify-start items-start">
          <h1 className="lg:text-5xl">Hardik Malhotra</h1>
          <h6 className="lg:text-3xl">Full Stack Developer</h6>
          {/* <p>{aboutMe}</p> */}
        </div>
        <div className="block">
          <Image
            src="/pfp.jpeg"
            alt="Profile Pic"
            width={200}
            height={200}
            className="rounded-md select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
