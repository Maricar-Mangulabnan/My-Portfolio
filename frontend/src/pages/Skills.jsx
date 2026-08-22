import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaMobileAlt,
  FaApple,
  FaCodeBranch,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiVite,
  SiDart,
  SiFlutter,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Cupertino", icon: FaApple },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PHP", icon: SiPhp },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },

  {
    title: "Tools & Development",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
      { name: "Vite", icon: SiVite },
    ],
  },

  {
    title: "Development & Deployment",
    skills: [
      { name: "SDLC", icon: FaCodeBranch },
      { name: "Agile Scrum", icon: FaCodeBranch },
      { name: "CI/CD", icon: FaCodeBranch },
      { name: "Google Play Store Deployment", icon: FaMobileAlt },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-[#F5EDED] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl px-2 text-center sm:mb-14 lg:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6482AD] sm:text-sm sm:tracking-[0.3em]">
            SKILLS
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:mt-4 sm:text-4xl md:text-5xl">
            Technologies I Work With
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            A collection of technologies, tools, and development practices I
            have worked with throughout my academic and professional experience.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="
                min-w-0
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
                sm:rounded-[28px]
                sm:p-7
                lg:p-8
              "
            >
              {/* Category Title */}
              <h2 className="mb-4 break-words text-xl font-bold text-slate-800 sm:mb-6 sm:text-2xl">
                {category.title}
              </h2>

              {/* Skills */}
              <div className="flex min-w-0 flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        flex
                        max-w-full
                        min-w-0
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-200
                        bg-[#F5EDED]
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-slate-700
                        transition-all
                        duration-200
                        hover:-translate-y-1
                        hover:border-[#6482AD]
                        sm:px-4
                        sm:py-2.5
                        sm:text-sm
                      "
                    >
                      <Icon className="shrink-0 text-base text-[#6482AD] sm:text-lg" />

                      <span className="break-words">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
