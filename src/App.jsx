import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KeyTechnologies from "./components/KeyTechnologies";
import Timeline from "./components/Timeline";
import Certificates from "./components/Certificates";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <KeyTechnologies />
      <Timeline />
      <Certificates />
      <ProjectsCarousel />
      <Contact />
    </div>
  );
}

export default App;
