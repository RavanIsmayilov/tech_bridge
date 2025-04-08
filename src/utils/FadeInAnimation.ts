export const fadeInAnimationVariants = {
  initial: { opacity: 0 },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.20 * index,
    },
  }),
};
