import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

import Container from "../components/common/Container";

const facts = [
  {
    icon: <FaGraduationCap />,
    value: "2026",
    label: "Computer Science Graduate",
    description: "Holy Cross Colleges, Inc.",
  },
  {
    icon: <FaBriefcase />,
    value: "1",
    label: "Internship Experience",
    description: "BizSolutions LLC",
  },
  {
    icon: <FaLaptopCode />,
    value: "Full Stack",
    label: "Development Focus",
    description: "Frontend & Backend Development",
  },
  {
    icon: <FaLightbulb />,
    value: "Always",
    label: "Learning & Improving",
    description: "Continuously developing my skills",
  },
];

const QuickFacts = () => {
  return (
    <section className="bg-[#F5EDED] py-20 md:py-24">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-[#6482AD]">
            A Little More About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-800 sm:text-4xl">
            Quick Facts
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            A few things that summarize my background, experience, and
            development journey.
          </p>
        </motion.div>

        {/* Facts Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-transparent p-6 shadow-sm transition-all duration-300 hover:border-[#6482AD]/40 hover:shadow-lg"
            >
              {/* Decorative Glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#6482AD]/5 transition-transform duration-500 group-hover:scale-150" />

              {/* Icon */}
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#6482AD]/10 text-xl text-[#6482AD] transition-all duration-300 group-hover:bg-[#6482AD] group-hover:text-white">
                {fact.icon}
              </div>

              {/* Value */}
              <h3 className="relative text-2xl font-bold text-slate-800 sm:text-3xl">
                {fact.value}
              </h3>

              {/* Label */}
              <p className="relative mt-2 font-semibold text-slate-700">
                {fact.label}
              </p>

              {/* Description */}
              <p className="relative mt-1.5 text-sm leading-6 text-slate-500">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default QuickFacts;
