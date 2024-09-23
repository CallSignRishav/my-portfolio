import { motion } from "framer-motion";
import { Moon } from "lucide-react";

const DarkIcon = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 50 }}
        transition={{ duration: 0.4 }}
        translate="yes">
        <Moon />
      </motion.div>
    </>
  );
};

export default DarkIcon;
