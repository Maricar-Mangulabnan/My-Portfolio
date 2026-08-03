import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import profile from "../../../assets/images/profile.png";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-36 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-secondary/10 blur-[140px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
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
              className="mb-4 font-medium text-primary"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-text to-primary bg-clip-text text-6xl font-extrabold leading-tight text-transparent"
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
              className="mt-6 h-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Computer Science Graduate",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 max-w-lg text-lg leading-9 text-gray-600"
            >
              I build modern, scalable, and user-focused web applications using
              React, Node.js, and Express. As a Computer Science graduate, I
              enjoy turning ideas into intuitive digital experiences and
              continuously learning new technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex gap-5"
            >
              <Button>
                View Projects
                <ArrowRight size={20} />
              </Button>

              <Button outline>
                Download Resume
                <Download size={20} />
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[50px] bg-primary/20 blur-3xl"></div>

            {/* Image */}
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[40px] border-4 border-white shadow-[0_30px_70px_rgba(100,130,173,0.30)]"
            >
              <img
                src={profile}
                alt="Maricar"
                className="w-[420px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
