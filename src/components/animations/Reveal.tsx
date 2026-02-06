import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const Reveal = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      style={{ marginBottom: "100px" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
