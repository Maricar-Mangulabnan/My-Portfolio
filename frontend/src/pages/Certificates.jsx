import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const Certificates = () => {
  return (
    <section className="min-h-screen bg-[#F5EDED] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-[#6482AD]">
            CERTIFICATES
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Certifications & Achievements
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Professional certifications and credentials that support my
            continuous learning and development.
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm md:p-14"
        >
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#6482AD]/10 text-3xl text-[#6482AD]">
            <FaCertificate />
          </div>

          {/* Badge */}
          <div className="mt-8 inline-flex rounded-full bg-[#6482AD]/10 px-4 py-2 text-sm font-semibold text-[#6482AD]">
            Coming Soon
          </div>

          {/* Title */}
          <h2 className="mt-5 text-3xl font-bold text-slate-800">
            Certifications Are on the Way
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
            I am currently working toward professional certifications to
            strengthen my technical knowledge and continue growing as a
            developer.
          </p>

          {/* Closing */}
          <p className="mt-6 text-sm font-medium text-[#6482AD]">
            More certifications will be added here soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
