import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaDatabase,
  FaCode,
  FaPlay,
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
} from "react-icons/si";

// AirBank logo
import airbankLogo from "../assets/projects/airbank/airbank-logo.png";

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
    github: "https://github.com/Maricar-Mangulabnan/airbank-client.git",
    demo: "https://drive.google.com/drive/folders/1rqkCbuKsbbQGxOoSwSJfzF5Anp0Q2izY?usp=sharing",
    logo: airbankLogo,
    isAirbank: true,
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
    <section className="min-h-screen overflow-hidden bg-[#F5EDED] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6482AD] sm:text-sm sm:tracking-[0.3em]">
            MY PROJECTS
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:mt-4 sm:text-4xl md:text-5xl">
            Things I've Built
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
            A collection of projects that showcase my experience in application
            development, backend systems, databases, and full-stack development.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8 sm:space-y-10">
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
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:border-[#6482AD]/40
                hover:shadow-xl
                sm:rounded-[28px]
                lg:grid
                lg:grid-cols-5
                lg:rounded-[32px]
              "
            >
              {/* ================================================= */}
              {/* PROJECT PREVIEW */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[280px]
                  items-center
                  justify-center
                  overflow-hidden
                  bg-[#E2DAD6]
                  sm:min-h-[320px]
                  lg:col-span-2
                  lg:min-h-[420px]
                "
              >
                {/* Decorative Glow */}
                <div
                  className="
                    absolute
                    h-48
                    w-48
                    rounded-full
                    bg-[#6482AD]/10
                    blur-3xl
                    sm:h-64
                    sm:w-64
                  "
                />

                <div className="relative px-6 text-center">
                  {/* AirBank Logo */}
                  {project.isAirbank ? (
                    <img
                      src={project.logo}
                      alt="AirBank logo"
                      className="
                        mx-auto
                        h-24
                        w-24
                        rounded-2xl
                        object-cover
                        shadow-xl
                        sm:h-28
                        sm:w-28
                        sm:rounded-3xl
                        lg:h-32
                        lg:w-32
                      "
                    />
                  ) : (
                    /* Other Projects */
                    <div
                      className="
                        mx-auto
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#6482AD]
                        text-3xl
                        font-bold
                        text-white
                        shadow-xl
                        sm:h-24
                        sm:w-24
                        sm:rounded-3xl
                        sm:text-4xl
                      "
                    >
                      {project.title.charAt(0)}
                    </div>
                  )}

                  <p
                    className="
                      mt-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#6482AD]
                      sm:mt-5
                      sm:text-sm
                      sm:tracking-[0.2em]
                    "
                  >
                    {project.type}
                  </p>
                </div>
              </div>

              {/* ================================================= */}
              {/* PROJECT CONTENT */}
              {/* ================================================= */}

              <div
                className="
                  min-w-0
                  p-5
                  sm:p-7
                  md:p-9
                  lg:col-span-3
                  lg:p-12
                "
              >
                {/* Subtitle */}
                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#6482AD]
                    sm:text-sm
                    sm:tracking-[0.2em]
                  "
                >
                  {project.subtitle}
                </span>

                {/* Title */}
                <h2
                  className="
                    mt-2
                    break-words
                    text-2xl
                    font-bold
                    leading-tight
                    text-slate-800
                    sm:mt-3
                    sm:text-3xl
                  "
                >
                  {project.title}
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-slate-500
                    sm:mt-5
                    sm:text-base
                    sm:leading-7
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="
                        flex
                        max-w-full
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-200
                        bg-[#F5EDED]
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-slate-700
                        sm:px-4
                        sm:py-2
                        sm:text-sm
                      "
                    >
                      <span className="shrink-0 text-[#6482AD]">
                        {technology.icon}
                      </span>

                      <span className="truncate">{technology.name}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#6482AD]
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                      sm:px-6
                      sm:py-3
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {/* Demo */}
                  {project.isAirbank ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-[#6482AD]
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-[#6482AD]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[#6482AD]
                        hover:text-white
                        sm:px-6
                        sm:py-3
                      "
                    >
                      <FaPlay />
                      Watch Demo
                    </a>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-[#6482AD]
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-[#6482AD]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[#6482AD]
                        hover:text-white
                        sm:px-6
                        sm:py-3
                      "
                    >
                      <FaExternalLinkAlt />
                      View Project
                    </a>
                  )}
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
