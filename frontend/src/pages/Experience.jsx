import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaProjectDiagram,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
} from "react-icons/fa";
import { SiNodedotjs, SiExpress } from "react-icons/si";

// Experience images
import bizsolutionsLogo from "../assets/experience/bizsolutions/bizsolutions-logo.png";
import internship1 from "../assets/experience/bizsolutions/internship-1.png";
import internship2 from "../assets/experience/bizsolutions/internship-2.png";
import internship3 from "../assets/experience/bizsolutions/internship-3.png";
import internship4 from "../assets/experience/bizsolutions/internship-4.png";

const internshipPhotos = [internship1, internship2, internship3, internship4];

const Experience = () => {
  const [showPhotos, setShowPhotos] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const nextPhoto = () => {
    setSelectedPhoto((current) =>
      current === internshipPhotos.length - 1 ? 0 : current + 1,
    );
  };

  const previousPhoto = () => {
    setSelectedPhoto((current) =>
      current === 0 ? internshipPhotos.length - 1 : current - 1,
    );
  };

  return (
    <section className="min-h-screen bg-[#F5EDED] px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6482AD] sm:text-sm sm:tracking-[0.3em]">
            EXPERIENCE
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:mt-4 sm:text-4xl md:text-5xl">
            My Experience
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
            My professional experience, internship, and the skills I developed
            throughout my journey as a Computer Science graduate.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#6482AD]/40 hover:shadow-xl sm:rounded-[32px]"
        >
          <div className="grid lg:grid-cols-5">
            {/* ================================================= */}
            {/* LEFT SIDE - COMPANY LOGO */}
            {/* ================================================= */}

            <div className="flex min-h-[300px] items-center justify-center bg-[#E2DAD6] p-6 sm:min-h-[360px] sm:p-8 lg:min-h-[420px] lg:col-span-2">
              <div className="flex flex-col items-center justify-center text-center">
                {/* Company Logo */}
                <div className="flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                  <img
                    src={bizsolutionsLogo}
                    alt="BizSolutions LLC logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* View Photos Button */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPhoto(0);
                    setShowPhotos(true);
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#6482AD] px-5 py-2.5 text-sm font-semibold text-[#6482AD] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6482AD] hover:text-white hover:shadow-lg sm:mt-8 sm:px-6 sm:py-3 sm:text-base"
                >
                  <FaImages />
                  View Photos
                </button>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT SIDE - EXPERIENCE DETAILS */}
            {/* ================================================= */}

            <div className="p-6 sm:p-8 md:p-10 lg:col-span-3 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6482AD] sm:text-sm sm:tracking-[0.2em]">
                Professional Experience
              </span>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 sm:text-3xl">
                Web Developer Intern
              </h2>

              <p className="mt-2 text-sm font-medium leading-6 text-slate-500 sm:text-lg">
                BizSolutions LLC · US (Remote) · 2025
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-7">
                Contributed to client-facing web application features while
                gaining hands-on experience in React.js, Tailwind CSS,
                collaborative development, and Agile software development
                practices.
              </p>

              {/* Experience Highlights */}
              <div className="mt-6 space-y-4 sm:mt-7">
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6482AD]" />

                  <p className="text-sm leading-7 text-slate-500 sm:text-base">
                    Contributed to 10+ client-facing web application features
                    across multiple sprint cycles, delivering production-ready
                    React.js components aligned with project deadlines and
                    client specifications.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6482AD]" />

                  <p className="text-sm leading-7 text-slate-500 sm:text-base">
                    Built and maintained reusable, responsive UI components
                    using React.js and Tailwind CSS, reducing redundant
                    front-end code and accelerating feature delivery.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6482AD]" />

                  <p className="text-sm leading-7 text-slate-500 sm:text-base">
                    Participated in Agile Scrum ceremonies, daily standups,
                    sprint planning, and retrospectives while collaborating
                    asynchronously with a US-based development team.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6482AD]" />

                  <p className="text-sm leading-7 text-slate-500 sm:text-base">
                    Managed source code and pull requests through GitHub,
                    maintaining clean commits and supporting code review and
                    deployment workflows.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#F5EDED] px-3 py-1.5 text-xs font-medium text-slate-700 sm:px-4 sm:py-2 sm:text-sm">
                  <SiNodedotjs className="text-[#6482AD]" />
                  Node.js
                </div>

                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#F5EDED] px-3 py-1.5 text-xs font-medium text-slate-700 sm:px-4 sm:py-2 sm:text-sm">
                  <SiExpress className="text-[#6482AD]" />
                  Express
                </div>

                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#F5EDED] px-3 py-1.5 text-xs font-medium text-slate-700 sm:px-4 sm:py-2 sm:text-sm">
                  <FaCode className="text-[#6482AD]" />
                  SDLC
                </div>

                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-[#F5EDED] px-3 py-1.5 text-xs font-medium text-slate-700 sm:px-4 sm:py-2 sm:text-sm">
                  <FaProjectDiagram className="text-[#6482AD]" />
                  Agile Scrum
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* ================================================= */}
      {/* PHOTO GALLERY MODAL */}
      {/* ================================================= */}

      {showPhotos && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setShowPhotos(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setShowPhotos(false)}
              className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-sm text-white transition hover:bg-slate-900 sm:h-10 sm:w-10"
            >
              <FaTimes />
            </button>

            {/* Main Image */}
            <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-2xl sm:rounded-3xl sm:p-3">
              <img
                src={internshipPhotos[selectedPhoto]}
                alt={`Internship photo ${selectedPhoto + 1}`}
                className="max-h-[72vh] w-full rounded-xl object-contain sm:max-h-[75vh] sm:rounded-2xl"
              />
            </div>

            {/* Previous */}
            <button
              type="button"
              onClick={previousPhoto}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm text-[#6482AD] shadow-lg transition hover:scale-105 sm:left-6 sm:h-12 sm:w-12 sm:text-base"
            >
              <FaChevronLeft />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextPhoto}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm text-[#6482AD] shadow-lg transition hover:scale-105 sm:right-6 sm:h-12 sm:w-12 sm:text-base"
            >
              <FaChevronRight />
            </button>

            {/* Photo Counter */}
            <div className="mt-3 text-center text-xs font-semibold text-white sm:mt-4 sm:text-sm">
              {selectedPhoto + 1} / {internshipPhotos.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
