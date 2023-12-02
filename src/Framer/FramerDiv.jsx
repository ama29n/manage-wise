import { motion } from "framer-motion";

const FramerDiv = ({ variants, children }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FramerDiv;
