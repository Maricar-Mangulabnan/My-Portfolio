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
    <section className="py-2">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            What I Bring to the Team
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            I combine technical skills, continuous learning, and collaborative
            problem-solving to build reliable, scalable, and user-focused
            software solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                y: -12,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-2xl"
            >
              {/* Top */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl text-primary transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                  {reason.icon}
                </div>

                <span className="text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-primary/10">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-slate-800">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="leading-8 text-slate-500">{reason.description}</p>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-200"></div>

              {/* Badge */}
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
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
