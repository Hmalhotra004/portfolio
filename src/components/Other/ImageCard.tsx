"use client";
import { animateFRight } from "@/lib/animation";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Reveal from "./Reveal";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ImageCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={animateFRight(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative h-72 w-72 flex justify-center items-center object-contain select-none"
      >
        <Image
          src="/pfp269.jpeg"
          alt="Profile Pic"
          width={550}
          height={250}
          className=" absolute w-fit h-fit object-fill rounded-lg select-none"
        />
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute w-full h-full"
        >
          <div className="absolute top-[-40px] left-0 w-full h-full flex items-start justify-end flex-col ml-4">
            <Reveal
              x={-500}
              de={0.2}
            >
              <p className="text-2xl text-white">Hardik Malhotra</p>
            </Reveal>
            <Reveal
              x={-500}
              de={0.2}
            >
              <div className="py-1 px-2 bg-black rounded-lg ">
                <Reveal
                  y={100}
                  du={0.5}
                >
                  <p className="text-base font-bold bg-gradient-to-r from-pink-400 via-cyan-600 to-purple-500 bg-clip-text tracking-tight text-transparent">Full Stack Developer</p>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageCard;
