import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "maricarmangulabnan03@gmail.com",
    href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Maricar-Mangulabnan",
    href: "https://github.com/Maricar-Mangulabnan",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/maricar-mangulabnan-50b77b335",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Philippines",
    href: "#",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#F5EDED] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6482AD] sm:tracking-[0.3em]">
            CONTACT
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:mt-4 sm:text-4xl md:text-5xl">
            Let's Work Together
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:mt-6 sm:text-lg sm:leading-8">
            Have a project, opportunity, or simply want to connect? Feel free to
            reach out. I'd be happy to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-5">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[32px] sm:p-7 lg:col-span-2 lg:p-8"
          >
            <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
              Get In Touch
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:mt-4 sm:text-base sm:leading-7">
              I'm open to opportunities where I can contribute, learn, and
              continue growing as a Backend or Full-Stack Developer.
            </p>

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-[#F5EDED] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#6482AD]/40 hover:shadow-md sm:gap-4 sm:p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6482AD]/10 text-base text-[#6482AD] transition-all duration-300 group-hover:bg-[#6482AD] group-hover:text-white sm:h-11 sm:w-11 sm:text-lg">
                      <Icon />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6482AD] sm:text-xs">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-xs font-medium text-slate-700 sm:text-sm">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[32px] sm:p-7 md:p-8 lg:col-span-3 lg:p-10"
          >
            <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
              Send Me a Message
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 sm:mt-3 sm:text-base">
              Fill out the form below and I'll get back to you as soon as I can.
            </p>

            <form className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-[#F5EDED] px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#6482AD] focus:ring-2 focus:ring-[#6482AD]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-[#F5EDED] px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#6482AD] focus:ring-2 focus:ring-[#6482AD]/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#F5EDED] px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#6482AD] focus:ring-2 focus:ring-[#6482AD]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6482AD] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:px-7 sm:text-base"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
