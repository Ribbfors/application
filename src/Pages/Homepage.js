import React from "react";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Timeline from "../Components/Timeline";
import Projects from "../Components/Projects";
import WhyMe from "../Components/WhyMe";

function Homepage() {
  return (
    <div style={{ overflow: "hidden;" }}>
      <HeroSection />
      <About />
      <Timeline />
      <Projects />
      <WhyMe />
    </div>
  );
}

export default Homepage;
