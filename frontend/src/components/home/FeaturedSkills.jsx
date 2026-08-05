import { motion } from "framer-motion";
import Container from "../common/Container";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    title: "React",
    description: "Building modern, reusable, and interactive user interfaces.",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    description: "Developing scalable backend applications and REST APIs.",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    description: "Creating fast and secure backend services using Express.",
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    description: "Writing clean ES6+ code for modern web applications.",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    description: "Building responsive and beautiful user interfaces quickly.",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    description: "Designing relational databases with optimized queries.",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    description: "Tracking code changes and collaborating efficiently.",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "Managing repositories and collaborative development.",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    description: "Creating semantic and accessible web page structures.",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    description: "Crafting responsive layouts and modern web styling.",
  },
  {
    icon: <FaFigma />,
    title: "Figma",
    description: "Designing wireframes and polished user interfaces.",
  },
];

const FeaturedSkills = () => {
  return (
    <section className="py-28">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-primary">
            Tech Stack
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            These are the technologies I use to build modern, scalable,
            responsive, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl text-primary transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                {skill.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-800">
                {skill.title}
              </h3>

              <p className="leading-7 text-slate-500">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSkills;
