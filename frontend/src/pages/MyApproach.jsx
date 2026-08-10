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
    <section className="bg-[#F5EDED] py-20 md:py-24">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6482AD]">
            My Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-800 sm:text-4xl md:text-5xl">
            How I Approach Development
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            My approach to software development is centered around learning,
            problem-solving, clean code, and continuous improvement.
          </p>
        </motion.div>

        {/* Approach List */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
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
                className="group relative rounded-2xl border border-white bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#6482AD]/30 hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <span className="pt-1 text-sm font-bold text-[#6482AD]/50">
                    {approach.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6482AD]/10 text-lg text-[#6482AD] transition-all duration-300 group-hover:bg-[#6482AD] group-hover:text-white">
                    {approach.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {approach.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
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
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <div className="mx-auto mb-5 h-px w-16 bg-[#6482AD]/30" />

          <p className="text-base italic leading-7 text-slate-500 sm:text-lg sm:leading-8">
            "Every project is an opportunity to learn something new, solve a
            meaningful problem, and become a better developer."
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default MyApproach;
