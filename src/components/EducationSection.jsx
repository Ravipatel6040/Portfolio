import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

// 🔥 Floating particles
const Particles = () => {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 5,
            ]}
          >
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#8b5cf6" />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const educationData = [
  {
    degree: "Master of Computer Science (CS)",
    school: "Awadhesh Pratap Singh University, Rewa (M.P.)",
    link: "https://apsurewa.ac.in/en/",
    year: "2021 – 2023",
    description:
      "Completed Master's degree with a focus on advanced computer science concepts and real-world application development.",
  },
];

const EducationSection = () => {
  return (
    <section
      className="relative py-20 bg-black text-white overflow-hidden"
      id="education"
    >
      {/* 🔥 THREE.JS BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          <Particles />
        </Canvas>
      </div>

      {/* 🔥 GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/80 to-black z-10" />

      {/* 🔥 CONTENT */}
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-16 tracking-wide bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-purple-500/40">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-14 ml-8 relative"
            >
              {/* 🔥 Glowing Dot */}
              <div className="absolute w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -left-3 border-2 border-white shadow-[0_0_15px_#8b5cf6]" />

              {/* 🔥 Card */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                              hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
                              transition-all duration-500 transform hover:-translate-y-2">
                
                <h3 className="text-2xl font-bold text-blue-400">
                  {edu.degree}
                </h3>

                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-300 mt-1 inline-block hover:text-purple-400 transition"
                >
                  {edu.school}
                </a>

                <span className="text-sm text-gray-400 block mt-1">
                  {edu.year}
                </span>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;