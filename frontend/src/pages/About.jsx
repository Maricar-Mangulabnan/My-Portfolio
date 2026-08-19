import QuickFacts from "./QuickFacts";
import MyJourney from "./MyJourney";
import MyApproach from "./MyApproach";
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import profile from "../assets/images/profile.png";

const About = () => {
  return (
    <>
      {/* About Me */}
      <section className="bg-[#F5EDED] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-0">
        <Container>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 md:mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6482AD] sm:text-sm sm:tracking-[0.3em]">
              About Me
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:mt-4 sm:text-4xl md:text-5xl">
              Get To Know Me Better
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
              Learn more about my journey, passion for software development, and
              the experiences that shaped me into the developer I am today.
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto w-full max-w-md lg:max-w-xl"
            >
              <div className="overflow-hidden rounded-[24px] border-4 border-white shadow-xl sm:rounded-[28px] md:rounded-[32px]">
                <img
                  src={profile}
                  alt="Maricar Mangulabnan"
                  className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <h2 className="text-2xl font-bold leading-tight text-slate-800 sm:text-3xl md:text-4xl">
                Maricar Mangulabnan
              </h2>

              <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
                <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  I'm a Computer Science graduate passionate about backend and
                  full-stack development. I enjoy creating scalable
                  applications, writing clean code, and solving real-world
                  problems through technology.
                </p>

                <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  During my internship at BizSolutions LLC, I collaborated with
                  developers to build client-based web applications using
                  React.js, Tailwind CSS, Git, and modern development practices.
                  This experience strengthened both my technical and teamwork
                  skills.
                </p>

                <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Today, I continue improving my skills by building personal
                  projects, learning modern technologies, and preparing for
                  opportunities as a Backend and Full-Stack Developer.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quick Facts */}
      <QuickFacts />

      {/* My Journey */}
      <MyJourney />

      {/* My Approach */}
      <MyApproach />
    </>
  );
};

export default About;
