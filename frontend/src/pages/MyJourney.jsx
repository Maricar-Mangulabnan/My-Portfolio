import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaLaptopCode,
  FaBookOpen,
} from "react-icons/fa";

import Container from "../components/common/Container";

const journey = [
  {
    year: "2022",
    title: "Started My Computer Science Journey",
    description:
      "Began my Bachelor of Science in Computer Science at Holy Cross Colleges, building a foundation in programming, databases, algorithms, and software development.",
    icon: <FaGraduationCap />,
    tags: ["Computer Science", "Programming", "Databases"],
  },
  {
    year: "2025",
    title: "Started Building Real-World Projects",
    description:
      "Applied what I learned through personal and academic projects, gaining practical experience in web development, backend systems, databases, and software engineering.",
    icon: <FaLaptopCode />,
    tags: ["Web Development", "Backend", "Projects"],
  },
  {
    year: "2025",
    title: "Internship at BizSolutions LLC",
    description:
      "Collaborated with developers to build client-based web applications using React.js, Tailwind CSS, and Git while gaining experience with real-world development workflows.",
    icon: <FaBriefcase />,
    tags: ["React.js", "Tailwind CSS", "Git"],
  },
  {
    year: "2025–26",
    title: "CampusGo Thesis Project",
    description:
      "Developed CampusGo, an augmented reality gamification system designed to improve campus engagement while strengthening my experience in application development, APIs, and databases.",
    icon: <FaRocket />,
    tags: ["Unity", "AR Foundation", "Backend", "Database"],
  },
  {
    year: "2026",
    title: "Computer Science Graduate",
    description:
      "Completed my Bachelor of Science in Computer Science and began preparing for professional opportunities focused on backend and full-stack development.",
    icon: <FaGraduationCap />,
    tags: ["BS Computer Science", "Backend", "Full Stack"],
  },
  {
    year: "Today",
    title: "Building, Learning & Growing",
    description:
      "Continuing to strengthen my backend development skills, build personal projects, and explore modern technologies while preparing for opportunities to grow as a developer.",
    icon: <FaBookOpen />,
    tags: ["Node.js", "APIs", "Continuous Learning"],
  },
];

const MyJourney = () => {
  return (
    <section className="bg-[#F5EDED] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl px-2 text-center sm:mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-[#6482AD] sm:text-sm sm:tracking-[0.35em]">
            MY JOURNEY
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:mt-4 sm:text-4xl md:text-5xl">
            From Student to Developer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6482AD] sm:mt-5 sm:text-lg sm:leading-8">
            A look at the experiences and milestones that shaped my journey into
            software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div
            className="
              absolute
              left-[7px]
              top-0
              h-full
              w-px
              bg-[#6482AD]/25
              md:left-[139px]
            "
          />

          <div className="space-y-8 sm:space-y-10">
            {journey.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="
                  relative
                  grid
                  grid-cols-[1fr]
                  pl-8
                  md:grid-cols-[140px_1fr]
                  md:gap-8
                  md:pl-0
                "
              >
                {/* Year - Desktop */}
                <div className="hidden pt-4 text-right md:block md:pr-8">
                  <span className="text-sm font-bold text-[#6482AD]">
                    {item.year}
                  </span>
                </div>

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-0
                    top-5
                    z-10
                    h-4
                    w-4
                    rounded-full
                    border-4
                    border-[#F5EDED]
                    bg-[#6482AD]
                    md:left-[131px]
                  "
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="
                    min-w-0
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-[#6482AD]/40
                    hover:shadow-md
                    sm:px-6
                    md:px-7
                  "
                >
                  {/* Mobile Year */}
                  <div className="mb-3 flex items-center gap-3 md:hidden">
                    <span className="text-sm font-bold text-[#6482AD]">
                      {item.year}
                    </span>

                    <div className="h-px flex-1 bg-[#6482AD]/15" />
                  </div>

                  {/* Title Row */}
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    {/* Icon */}
                    <div
                      className="
                        hidden
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#E2DAD6]
                        text-[#6482AD]
                        sm:flex
                      "
                    >
                      {item.icon}
                    </div>

                    {/* Title + Description */}
                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-base font-bold leading-6 text-slate-800 sm:text-lg md:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          max-w-full
                          rounded-full
                          border
                          border-slate-200
                          bg-slate-50
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-slate-600
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyJourney;
