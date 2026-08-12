import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiUnity,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    title: "CampusGo",
    subtitle: "Thesis Project",
    description:
      "An augmented reality gamification system designed to enhance campus engagement by turning campus activities into interactive AR-based quests.",
    technologies: [
      { name: "Unity", icon: <SiUnity /> },
      { name: "AR Foundation", icon: <FaMobileAlt /> },
      { name: "Python", icon: <FaCode /> },
      { name: "Database", icon: <FaDatabase /> },
    ],
    type: "Featured Project",
    featured: true,
    github: "#",
    demo: "#",
  },

  {
    title: "AirBank",
    subtitle: "Full-Stack Mobile Application",
    description:
      "A mobile banking application developed using Flutter's Cupertino widgets for the frontend and a connected backend system for handling application logic and data.",
    technologies: [
      { name: "Flutter", icon: <FaMobileAlt /> },
      { name: "Cupertino", icon: <FaMobileAlt /> },
      { name: "Backend", icon: <FaCode /> },
      { name: "Database", icon: <FaDatabase /> },
    ],
    type: "Mobile + Backend",
    github: "#",
    demo: "#",
  },

  {
    title: "Point of Sale System",
    subtitle: "Web Application",
    description:
      "A point of sale system developed to manage sales and store information using a PHP backend, MySQL database, and Bootstrap-based interface.",
    technologies: [
      { name: "PHP", icon: <SiPhp /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
    type: "Web Application",
    github: "#",
    demo: "#",
  },

  {
    title: "Portfolio Website",
    subtitle: "Personal Project",
    description:
      "A personal developer portfolio built to showcase my projects, technical skills, experience, and background while demonstrating my frontend and backend development skills.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    type: "Full Stack",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-[#F5EDED] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-[#6482AD]">
            MY PROJECTS
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Things I've Built
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            A collection of projects that showcase my experience in application
            development, backend systems, databases, and full-stack development.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -5,
              }}
              className={`overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#6482AD]/40 hover:shadow-xl ${
                project.featured ? "lg:grid lg:grid-cols-5" : ""
              }`}
            >
              {/* Project Visual */}
              <div
                className={`relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#E2DAD6] ${
                  project.featured ? "lg:col-span-2 lg:min-h-[420px]" : ""
                }`}
              >
                <div className="absolute h-64 w-64 rounded-full bg-[#6482AD]/10 blur-3xl" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#6482AD] text-4xl font-bold text-white shadow-xl">
                    {project.title.charAt(0)}
                  </div>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#6482AD]">
                    {project.type}
                  </p>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`p-8 md:p-10 ${
                  project.featured ? "lg:col-span-3 lg:p-12" : ""
                }`}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6482AD]">
                  {project.subtitle}
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-800">
                  {project.title}
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#F5EDED] px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      <span className="text-[#6482AD]">{technology.icon}</span>

                      {technology.name}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-full bg-[#6482AD] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-full border border-[#6482AD] px-6 py-3 font-semibold text-[#6482AD] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6482AD] hover:text-white"
                  >
                    <FaExternalLinkAlt />
                    View Project
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
