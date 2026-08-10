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
    <section className="bg-[#F5EDED] py-24">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold tracking-[0.35em] text-[#6482AD]">
            MY JOURNEY
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            From Student to Developer
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6482AD]">
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
              md:left-[140px]
            "
          />

          <div className="space-y-10">
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
                  grid-cols-[80px_1fr]
                  gap-6
                  md:grid-cols-[140px_1fr]
                  md:gap-8
                "
              >
                {/* Year */}
                <div className="pt-4 text-right md:pr-8">
                  <span className="hidden text-sm font-bold text-[#6482AD] md:block">
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
                    md:left-[132px]
                  "
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-6
                    py-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-[#6482AD]/40
                    hover:shadow-md
                    md:px-7
                  "
                >
                  {/* Mobile Year */}
                  <div className="mb-2 flex items-center gap-3 md:hidden">
                    <span className="text-sm font-bold text-[#6482AD]">
                      {item.year}
                    </span>
                  </div>

                  {/* Title Row */}
                  <div className="flex items-start gap-4">
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
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 md:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500 md:text-base">
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
