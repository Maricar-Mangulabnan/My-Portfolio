import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";

const projects = [
  {
    title: "CampusGo",
    category: "Capstone Project",
    description:
      "An augmented reality gamification system designed to improve campus engagement using Unity, AR Foundation, and a backend API.",
    image: "/projects/campusgo.png",
    tech: ["Unity", "C#", "AR", "PostgreSQL"],
    github: "#",
    demo: "#",
  },

  {
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A modern responsive portfolio built using React, Tailwind CSS, Node.js, and Express with smooth animations.",
    image: "/projects/portfolio.png",
    tech: ["React", "Node.js", "Tailwind"],
    github: "#",
    demo: "#",
  },

  {
    title: "Point of Sale System",
    category: "Academic Project",
    description:
      "A Point of Sale (POS) system developed during my second year in college to manage product inventory, sales transactions, and customer purchases. This project strengthened my understanding of CRUD operations, relational databases, and backend development.",
    image: "/projects/watchapi.png",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "#",
    demo: "#",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-15">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-primary">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Here are some of the projects I've built that showcase my frontend,
            backend, and full-stack development skills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Placeholder */}
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <span className="text-lg font-semibold text-primary">
                  {project.title}
                </span>
              </div>

              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-8 flex items-center gap-2 font-semibold text-primary transition group-hover:gap-3">
                  View Project
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
