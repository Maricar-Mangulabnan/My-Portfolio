import Hero from "../components/home/Hero";
import FeaturedSkills from "../components/home/FeaturedSkills";
import WhyMe from "../components/home/WhyMe";
import Navbar from "../components/layout/navbar/Navbar";

import Button from "../components/common/Button";
import Container from "../components/common/Container";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedSkills />
      <WhyMe />
    </>
  );
};

export default Home;
