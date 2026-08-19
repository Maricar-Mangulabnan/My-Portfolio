import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import resume from "../../assets/resume/Maricar-Mangulabnan-Resume.pdf";

import profile from "../../assets/images/profile.png";

import Button from "../common/Button";
import Container from "../common/Container";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-12 sm:px-6 sm:pt-32 lg:px-0 lg:pb-0">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-primary/10 blur-[100px] sm:left-10 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/10 blur-[110px] sm:right-10 sm:h-80 sm:w-80 sm:blur-[140px]" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-xs font-medium text-primary sm:px-4 sm:text-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Available for Opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-3 text-base font-medium text-primary sm:mb-4 sm:text-lg"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
                bg-gradient-to-r
                from-text
                to-primary
                bg-clip-text
                text-4xl
                font-extrabold
                leading-[1.05]
                text-transparent
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Maricar
              <br />
              Mangulabnan
            </motion.h1>

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="
                mt-5
                min-h-[40px]
                bg-gradient-to-r
                from-primary
                to-secondary
                bg-clip-text
                text-xl
                font-bold
                text-transparent
                sm:mt-6
                sm:text-2xl
                lg:text-3xl
              "
            >
              <TypeAnimation
                sequence={[
                  "Backend Developer",
                  2000,
                  "Node.js Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Computer Science Graduate",
                  2000,
                ]}
                speed={45}
                repeat={Infinity}
              />
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <Link to="/projects" className="w-full sm:w-auto">
                <Button>
                  View Projects
                  <ArrowRight size={20} />
                </Button>
              </Link>

              <a
                href={resume}
                download="Maricar-Mangulabnan-Resume.pdf"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-primary
                  px-6
                  py-3
                  font-semibold
                  text-primary
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-primary
                  hover:text-white
                  active:scale-95
                  sm:w-auto
                "
              >
                Download Resume
                <Download size={20} />
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="
                mt-10
                flex
                items-start
                justify-between
                gap-4
                sm:mt-12
                sm:justify-start
                sm:gap-10
              "
            >
              <div>
                <h3 className="text-2xl font-bold text-primary sm:text-3xl">
                  6+
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">Projects</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary sm:text-3xl">
                  15+
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Technologies
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary sm:text-3xl">
                  1
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">Internship</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-5 rounded-[40px] bg-primary/20 blur-3xl sm:-inset-8 sm:rounded-[50px]" />

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              className="
                relative
                w-fit
                overflow-hidden
                rounded-[30px]
                border-4
                border-white
                shadow-2xl
                sm:rounded-[40px]
              "
            >
              <img
                src={profile}
                alt="Maricar Mangulabnan"
                className="
                  block
                  w-[240px]
                  object-cover
                  sm:w-[300px]
                  md:w-[380px]
                  lg:w-[460px]
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
