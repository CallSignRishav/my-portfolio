import { motion } from "framer-motion";
import { Sun } from "lucide-react";

const LightIcon = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: -50 }}
        transition={{ duration: 0.4 }}>
        <Sun />
      </motion.div>
    </>
  );
};

export default LightIcon;
