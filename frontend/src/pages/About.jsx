import { motion } from "framer-motion";
import Container from "../components/common/Container";
import profile from "../assets/images/profile.png";

const About = () => {
  return (
    <section className="py-40">
      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.25em] text-primary">
            About Me
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-800">
            Get To Know Me Better
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Learn more about my journey, passion for software development, and
            the experiences that shaped me into the developer I am today.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-[32px] border-4 border-white shadow-2xl">
              <img
                src={profile}
                alt="Maricar Mangulabnan"
                className="w-full transition duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-slate-800">
              Computer Science Graduate
            </h2>

            <p className="mt-8 leading-8 text-slate-600">
              I'm a Computer Science graduate passionate about backend and
              full-stack development. I enjoy creating scalable applications,
              writing clean code, and solving real-world problems through
              technology.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              During my internship at BizSolutions LLC, I collaborated with
              developers to build client-based web applications using React.js,
              Tailwind CSS, Git, and modern development practices. This
              experience strengthened both my technical and teamwork skills.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Today, I continue improving my skills by building personal
              projects, learning modern technologies, and preparing for
              opportunities as a Backend and Full-Stack Developer.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
