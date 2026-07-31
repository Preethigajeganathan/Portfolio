import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
      className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-[100]"
    />
  );
}

export default ScrollProgress;