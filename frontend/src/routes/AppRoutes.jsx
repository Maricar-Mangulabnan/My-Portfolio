import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/skills" element={<Skills />} />

      <Route path="/experience" element={<Experience />} />

      <Route path="/certificates" element={<Certificates />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
