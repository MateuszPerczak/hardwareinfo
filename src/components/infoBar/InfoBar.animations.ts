import type { Variants } from "framer-motion";

export const infoBarVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", mass: 0.2, stiffness: 120, damping: 10 },
  },
};
