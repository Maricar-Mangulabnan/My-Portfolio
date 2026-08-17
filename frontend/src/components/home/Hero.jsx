import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import resume from "../../assets/resume/Maricar-Mangulabnan-Resume.pdf"; // <-- replace with your resume

import profile from "../../assets/images/profile.png";

import Button from "../common/Button";
import Container from "../common/Container";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-secondary/10 blur-[140px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              Available for Opportunities
            </motion.div>

            {/* Greeting */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-lg font-medium text-primary"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-text to-primary bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl lg:text-7xl"
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
              className="mt-6 h-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent lg:text-3xl"
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

            {/* Description */}

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link to="/projects">
                <Button>
                  View Projects
                  <ArrowRight size={20} />
                </Button>
              </Link>

              <a
                href={resume}
                download="Maricar-Mangulabnan-Resume.pdf"
                className="
    inline-flex items-center gap-2
    rounded-xl
    border border-primary
    px-6 py-3
    font-semibold
    text-primary
    transition-all
    duration-300
    hover:bg-primary
    hover:text-white
    hover:scale-105
    active:scale-95
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
              className="mt-12 flex flex-wrap gap-10"
            >
              <div>
                <h3 className="text-3xl font-bold text-primary">6+</h3>
                <p className="text-gray-600">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-gray-600">Technologies</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">1</h3>
                <p className="text-gray-600">Internship</p>
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
            <div className="absolute -inset-8 rounded-[50px] bg-primary/20 blur-3xl"></div>

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
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[40px] border-4 border-white shadow-2xl"
            >
              <img
                src={profile}
                alt="Maricar Mangulabnan"
                className="w-[320px] object-cover md:w-[380px] lg:w-[460px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
