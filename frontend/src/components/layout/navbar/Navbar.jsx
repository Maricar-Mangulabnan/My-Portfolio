import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import resume from "../../../assets/resume/Maricar-Mangulabnan-Resume.pdf";
import logo from "../../../assets/images/logo.png";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
      <nav
        className="
          mx-auto
          max-w-7xl
          rounded-2xl
          border
          border-border
          bg-white/70
          px-5
          py-4
          shadow-lg
          backdrop-blur-xl
          sm:px-8
          sm:py-5
        "
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Maricar Mangulabnan"
              className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 font-medium lg:flex xl:gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    relative
                    transition-all
                    duration-300

                    after:absolute
                    after:-bottom-1
                    after:left-0
                    after:h-[2px]
                    after:bg-primary
                    after:transition-all
                    after:duration-300

                    ${
                      isActive
                        ? "text-primary after:w-full"
                        : "text-text after:w-0 hover:text-primary hover:after:w-full"
                    }
                  `
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Resume */}
          <a
            href={resume}
            download="Maricar-Mangulabnan-Resume.pdf"
            className="
              hidden
              items-center
              gap-2
              rounded-xl
              bg-primary
              px-5
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
              active:scale-95
              lg:flex
            "
          >
            Resume
            <Download size={17} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-primary
              transition
              hover:bg-primary/10
              lg:hidden
            "
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-slate-200 pt-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                      block
                      rounded-xl
                      px-4
                      py-3
                      font-medium
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-text hover:bg-primary/5 hover:text-primary"
                      }
                    `
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Resume */}
            <a
              href={resume}
              download="Maricar-Mangulabnan-Resume.pdf"
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-primary
                px-5
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:shadow-lg
              "
            >
              Download Resume
              <Download size={17} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
