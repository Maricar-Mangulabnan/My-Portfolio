import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaPuzzlePiece, FaBookOpen } from "react-icons/fa";

import Container from "../components/common/Container";

const approaches = [
  {
    icon: <FaLightbulb />,
    number: "01",
    title: "Learn by Building",
    description:
      "I learn best through hands-on experience. Building projects helps me understand concepts, experiment with ideas, and turn what I learn into something practical.",
  },
  {
    icon: <FaCode />,
    number: "02",
    title: "Write Clean Code",
    description:
      "I aim to write code that is readable, organized, and maintainable. Good code should not only work but also be easy to understand and improve.",
  },
  {
    icon: <FaPuzzlePiece />,
    number: "03",
    title: "Solve Problems",
    description:
      "I approach challenges by understanding the problem first, breaking it into smaller parts, and finding practical solutions before implementation.",
  },
  {
    icon: <FaBookOpen />,
    number: "04",
    title: "Keep Improving",
    description:
      "Technology is constantly evolving, so I make continuous learning part of my journey by exploring new tools, concepts, and development practices.",
  },
];

const MyApproach = () => {
  return (
    <section className="bg-[#F5EDED] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6482AD] sm:text-sm sm:tracking-[0.3em]">
            My Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:mt-4 sm:text-4xl md:text-5xl">
            How I Approach Development
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
            My approach to software development is centered around learning,
            problem-solving, clean code, and continuous improvement.
          </p>
        </motion.div>

        {/* Approach List */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                className="group relative min-w-0 rounded-2xl border border-white bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#6482AD]/30 hover:shadow-lg sm:p-7"
              >
                {/* Mobile / Tablet Layout */}
                <div className="flex flex-col">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <span className="text-xs font-bold text-[#6482AD]/50 sm:text-sm">
                      {approach.number}
                    </span>

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6482AD]/10 text-base text-[#6482AD] transition-all duration-300 group-hover:bg-[#6482AD] group-hover:text-white sm:h-12 sm:w-12 sm:text-lg">
                      {approach.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-4 sm:mt-5">
                    <h3 className="text-lg font-bold leading-tight text-slate-800 sm:text-xl">
                      {approach.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500 sm:mt-3 sm:text-base sm:leading-7">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl text-center sm:mt-14"
        >
          <div className="mx-auto mb-4 h-px w-12 bg-[#6482AD]/30 sm:mb-5 sm:w-16" />

          <p className="text-sm italic leading-7 text-slate-500 sm:text-lg sm:leading-8">
            "Every project is an opportunity to learn something new, solve a
            meaningful problem, and become a better developer."
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default MyApproach;
