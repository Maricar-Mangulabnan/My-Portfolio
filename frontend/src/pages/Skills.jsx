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
    <section className="min-h-screen bg-[#F5EDED] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-[#6482AD]">
            SKILLS
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Technologies I Work With
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            A collection of technologies, tools, and development practices I
            have worked with throughout my academic and professional experience.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="mb-6 text-2xl font-bold text-slate-800">
                {category.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#F5EDED] px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-[#6482AD]"
                    >
                      <Icon className="text-lg text-[#6482AD]" />

                      {skill.name}
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
