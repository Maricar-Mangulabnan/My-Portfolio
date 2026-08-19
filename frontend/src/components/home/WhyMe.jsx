import { motion } from "framer-motion";
import Container from "../common/Container";

import { FaRocket, FaCode, FaUsers, FaLightbulb } from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket />,
    title: "Fast Learner",
    badge: "Continuous Learning",
    description:
      "Quickly adapts to new technologies and constantly improves through hands-on projects and real-world experience.",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    badge: "Best Practices",
    description:
      "Writes organized, scalable, and maintainable code that follows modern development standards.",
  },
  {
    icon: <FaUsers />,
    title: "Team Player",
    badge: "Collaboration",
    description:
      "Works effectively with teammates using Git, GitHub, and Agile workflows to deliver quality software.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solver",
    badge: "Critical Thinking",
    description:
      "Enjoys analyzing challenges and turning ideas into practical, user-focused software solutions.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-0 lg:py-28">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl md:text-5xl">
            What I Bring to the Team
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
            I combine technical skills, continuous learning, and collaborative
            problem-solving to build reliable, scalable, and user-focused
            software solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:border-primary
                hover:shadow-2xl
                sm:p-7
                lg:p-8
              "
            >
              {/* Top */}
              <div className="mb-6 flex items-center justify-between sm:mb-8">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-2xl
                    text-primary
                    transition-all
                    duration-300
                    group-hover:rotate-6
                    group-hover:bg-primary
                    group-hover:text-white
                    sm:h-16
                    sm:w-16
                    sm:text-3xl
                  "
                >
                  {reason.icon}
                </div>

                <span
                  className="
                    text-4xl
                    font-black
                    text-slate-100
                    transition-colors
                    duration-300
                    group-hover:text-primary/10
                    sm:text-5xl
                  "
                >
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-slate-800 sm:mb-4 sm:text-2xl">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                {reason.description}
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-slate-200 sm:my-6"></div>

              {/* Badge */}
              <span
                className="
                  inline-flex
                  max-w-full
                  rounded-full
                  bg-primary/10
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-primary
                  transition-all
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-white
                  sm:px-4
                  sm:py-2
                  sm:text-sm
                "
              >
                {reason.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyWorkWithMe;
