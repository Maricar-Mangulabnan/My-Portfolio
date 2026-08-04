import Hero from "../components/home/Hero";
import FeaturedSkills from "../components/home/FeaturedSkills";
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhyMe from "../components/home/WhyMe";
import CTA from "../components/home/CTA";
import Navbar from "../components/layout/navbar/Navbar";

import Button from "../components/common/Button";
import Container from "../components/common/Container";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedSkills />
      <FeaturedProjects />
      <WhyMe />
      <CTA />
    </>
  );
};

export default Home;
