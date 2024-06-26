export const animate = (delay?: number, x?: number, y?: number) => ({
  hidden: { x: x, y: y, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const FadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const iconVariants = {
  hidden: { y: -10 },
  visible: { y: [10, -10], transition: { ease: "linear", repeat: Infinity, repeatType: "reverse" } },
};
