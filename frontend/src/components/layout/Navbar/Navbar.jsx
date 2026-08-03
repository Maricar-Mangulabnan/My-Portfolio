import { Download } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-border bg-white/70 px-8 py-5 shadow-lg backdrop-blur-xl transition-all duration-300">
        {/* Logo */}
        <h1 className="cursor-pointer text-2xl font-bold tracking-tight text-text transition hover:text-primary">
          Maricar M.
        </h1>

        {/* Navigation */}
        <ul className="flex items-center gap-10 font-medium text-text">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  transition-all
                  duration-300
                  hover:text-primary

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-primary
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <button
          className="
            flex items-center gap-2
            rounded-xl
            bg-primary
            px-5 py-3
            font-semibold
            text-white

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-xl

            active:scale-95
          "
        >
          Resume
          <Download size={17} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
