import React from "react";
import Hero from "./components/Hero";
import KeyTechnologies from "./components/KeyTechnologies";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <KeyTechnologies />
      <Timeline />
      <Certificates />
      <ProjectsCarousel />
      <Contact />
      <Navbar />



    </div>
  );
}

export default App;

import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ProjectsCarousel from "./components/ProjectsCarousel";

