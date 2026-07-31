import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex justify-center items-center z-50">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full"
      />
    </div>
  );
}

export default Loader;