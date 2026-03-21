import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";


// Images
import Rd from "../assets/Images/rd.png";

import Skill from "../assets/Images/skill.png";
import Lottry from "../assets/Images/lottry.png";
import ProjectBg1 from "../assets/Images/project01.png";
import ProjectBg2 from "../assets/Images/project02.png";
import ProjectBg3 from "../assets/Images/project03.png";

// 🔥 Duplicate to make 8 cards
const projects = [
  {
    title: "RD Kunhare",
    description: "Best Property Broker & Real Estate Company.",
    image: Rd,
    tech: ["React", "Node", "MongoDB"],
    demo: "https://rdkunhare.com/",
    github: "#",
  },
  {
    title: "Online Lottery Management System",
    description: "Developed a scalable lottery system with real-time draw processing, ticket management, and admin control features..",
    image: Lottry,
    tech: ["React", "Node", "Mysql"],
    demo: "https://ph7-frontend.vercel.app/",
    github: "#",
  },
   {
    title: "IEFP India",
    description: "Organic e-commerce platform with APIs & responsive UI.",
    image: ProjectBg1,
    tech: ["React", "Node", "MongoDB"],
    demo: "https://iefpindia.com/",
    github: "#",
  },
  {
    title: "Ice Cream Shop",
    description: "Responsive UI with animations & product showcase.",
    image: ProjectBg3,
    tech: ["HTML", "JS", "Tailwind"],
    demo: "https://ice-cream-shop-red.vercel.app/",
    github: "#",
  },

  {
    title: "DatePe Dashboard",
    description: "Admin panel with analytics, users & subscriptions.",
    image: ProjectBg2,
    tech: ["React", "MUI", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Online Course",
    description: "Responsive e-learning platform with course management, video streaming, and real-time progress tracking.",
    image: Skill,
    tech: ["React", "Node", "Mysql"],
    demo: "https://skilldabaar.bheemainfotech.in/",
    github: "#",
  },

];

// 🔥 Three.js floating particles
const Particles = () => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 5,
            ]}
          >
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color="#22c55e" />
          </mesh>
        </Float>
      ))}
    </>
  );
};
const ProjectSection = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      
      {/* 🔥 Three.js */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight />
          <Particles />
        </Canvas>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        {/* 🔥 GRID → 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-xl bg-white/5 backdrop-blur-lg border border-white/10
                         hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]
                         transition-all duration-300 overflow-hidden"
            >

              {/* Image (smaller height) */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              {/* Content (compact) */}
              <div className="p-3">
                <h3 className="text-sm font-semibold mb-1">{project.title}</h3>

                <p className="text-xs text-gray-300 mb-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] bg-white/10 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.demo}
                    className="text-xs px-2 py-1 bg-indigo-600 rounded hover:bg-indigo-700"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-xs px-2 py-1 border border-white/20 rounded hover:bg-white/10"
                  >
                    Code
                  </a>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProjectSection;