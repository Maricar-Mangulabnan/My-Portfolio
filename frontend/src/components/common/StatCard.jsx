import { motion } from "framer-motion";

const StatCard = ({ number, label }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        rounded-3xl
        border
        border-border
        bg-white/70
        p-8
        text-center
        shadow-md
        backdrop-blur-md
        transition-all
        hover:shadow-xl
      "
    >
      <h3 className="text-5xl font-bold text-primary">{number}</h3>

      <p className="mt-3 text-base text-gray-600">{label}</p>
    </motion.div>
  );
};

export default StatCard;
