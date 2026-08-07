import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaFigma />, name: "Figma" },
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
          <p className="font-semibold uppercase tracking-[0.3em] text-primary">
            HOW I BUILD SOFTWARE
          </p>

          <h2 className="mt-5 text-4xl font-bold text-slate-800 md:text-5xl">
            Technologies Behind My Work
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            From designing intuitive interfaces to developing scalable backend
            systems, I use modern technologies to build reliable and
            user-focused web applications.
          </p>
        </motion.div>

        {/* Orbit */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mx-auto flex h-[650px] max-w-6xl items-center justify-center overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-xl"
        >
          {/* Background Glow */}

          <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

          {/* Orbit Rings */}

          <div className="absolute h-[520px] w-[520px] rounded-full border border-dashed border-slate-200" />

          <div className="absolute h-[360px] w-[360px] rounded-full border border-slate-100" />

          {/* Center */}

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute z-20 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_60px_rgba(100,130,173,0.35)]"
          >
            <span className="text-5xl font-bold">MM</span>
          </motion.div>

          {/* Orbit Container */}

          <div className="relative h-[520px] w-[520px] animate-[spin_60s_linear_infinite] rounded-full">
            {skills.map((skill, index) => {
              const angle = (360 / skills.length) * index;
              const radius = 220;

              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={skill.name}
                  whileHover={{
                    scale: 1.12,
                  }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 55px)`,
                    top: `calc(50% + ${y}px - 30px)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 60,
                      ease: "linear",
                    }}
                    className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl"
                  >
                    <span className="text-2xl text-primary">{skill.icon}</span>

                    <span className="font-medium text-slate-700">
                      {skill.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Summary */}

        <div className="mt-16 grid gap-8 text-center md:grid-cols-3">
          <div>
            <h3 className="text-4xl font-bold text-primary">11+</h3>

            <p className="mt-2 text-slate-500">Technologies Used</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">Full Stack</h3>

            <p className="mt-2 text-slate-500">
              Frontend & Backend Development
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">Always</h3>

            <p className="mt-2 text-slate-500">Learning & Improving</p>
          </div>
        </div>

        {/* Button */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore My Full Skill Set →
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedSkills;
