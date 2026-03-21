import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import Skill from "./components/Skill";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cursor from "./components/Cursor/Cursor";

export default function App() {
  return (

   <>
   <Cursor/>
    <div className="min-h-screen bg-black text-white">
      {/* Home */}
        <ToastContainer />
      <HeroSection />
      

      {/* About */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skill />
      </section>

      {/* Education */}
      <section id="education">
        <EducationSection />
      </section>

      {/* Experience */}
      <section id="experience">
        <ExperienceSection />
      </section>

     
      <section id="projects">
      <ProjectSection/>
      </section>

      {/* Contact – placeholder */}
      <section id="contact">
    <ContactSection/>
      </section>
    </div>
    </>
  );
}
