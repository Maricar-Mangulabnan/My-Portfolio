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
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-0 lg:py-28">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl md:text-5xl">
            Technologies Behind My Work
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
            From designing intuitive interfaces to developing scalable backend
            systems, I use modern technologies to build reliable and
            user-focused web applications.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* MOBILE SKILLS */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:hidden"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.97 }}
              className="
                flex
                min-h-[100px]
                flex-col
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:border-primary
                hover:shadow-lg
              "
            >
              <span className="text-3xl text-primary">{skill.icon}</span>

              <span className="text-sm font-medium text-slate-700">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ================================================= */}
        {/* TABLET / DESKTOP ORBIT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative
            mx-auto
            hidden
            h-[560px]
            max-w-6xl
            items-center
            justify-center
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            bg-white
            shadow-xl
            md:flex
            lg:h-[650px]
          "
        >
          {/* Background Glow */}
          <div className="absolute h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl lg:h-[500px] lg:w-[500px]" />

          {/* Orbit Rings */}
          <div className="absolute h-[440px] w-[440px] rounded-full border border-dashed border-slate-200 lg:h-[520px] lg:w-[520px]" />

          <div className="absolute h-[310px] w-[310px] rounded-full border border-slate-100 lg:h-[360px] lg:w-[360px]" />

          {/* Center */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              z-20
              flex
              h-28
              w-28
              flex-col
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-primary
              to-secondary
              text-white
              shadow-[0_0_60px_rgba(100,130,173,0.35)]
              lg:h-36
              lg:w-36
            "
          >
            <span className="text-4xl font-bold lg:text-5xl">MM</span>
          </motion.div>

          {/* Orbit Container */}
          <div className="relative h-[440px] w-[440px] animate-[spin_60s_linear_infinite] rounded-full lg:h-[520px] lg:w-[520px]">
            {skills.map((skill, index) => {
              const angle = (360 / skills.length) * index;

              const radius = window.innerWidth >= 1024 ? 220 : 185;

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
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-2
                      shadow-lg
                      transition-all
                      duration-300
                      hover:border-primary
                      hover:shadow-xl
                      lg:gap-3
                      lg:px-5
                      lg:py-3
                    "
                  >
                    <span className="text-xl text-primary lg:text-2xl">
                      {skill.icon}
                    </span>

                    <span className="whitespace-nowrap text-sm font-medium text-slate-700 lg:text-base">
                      {skill.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center sm:mt-14"
        >
          <Link
            to="/skills"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-primary
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              sm:w-auto
              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            Explore My Full Skill Set →
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedSkills;
