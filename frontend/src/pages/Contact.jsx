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
            CONTACT
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-800 md:text-5xl">
            Let's Work Together
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Have a project, opportunity, or simply want to connect? Feel free to
            reach out. I'd be happy to hear from you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-slate-800">Get In Touch</h2>

            <p className="mt-4 leading-7 text-slate-500">
              I'm open to opportunities where I can contribute, learn, and
              continue growing as a Backend or Full-Stack Developer.
            </p>

            <div className="mt-8 space-y-5">
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
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F5EDED] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#6482AD]/40 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6482AD]/10 text-lg text-[#6482AD] transition-all duration-300 group-hover:bg-[#6482AD] group-hover:text-white">
                      <Icon />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#6482AD]">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm font-medium text-slate-700">
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
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10 lg:col-span-3"
          >
            <h2 className="text-2xl font-bold text-slate-800">
              Send Me a Message
            </h2>

            <p className="mt-3 text-slate-500">
              Fill out the form below and I'll get back to you as soon as I can.
            </p>

            <form className="mt-8 space-y-5">
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
                className="inline-flex items-center gap-2 rounded-full bg-[#6482AD] px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
