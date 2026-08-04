import { Download } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png"; // <-- replace with your logo

const navItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <nav
        className="
          mx-auto
          max-w-7xl
          rounded-2xl
          border
          border-border
          bg-white/70
          backdrop-blur-xl
          shadow-lg
          px-8
          py-5

          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-11 w-11 rounded-full object-cover"
          />

          {/* Optional brand name */}
          {/* <span className="font-bold text-xl text-text">
            Maricar
          </span> */}
        </Link>

        {/* Navigation */}

        <ul className="flex items-center gap-8 font-medium">
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
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:bg-primary
                  after:transition-all
                  after:duration-300

                  ${
                    isActive
                      ? "text-primary after:w-full"
                      : "text-text hover:text-primary after:w-0 hover:after:w-full"
                  }
                `
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Resume */}

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
