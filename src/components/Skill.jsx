import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiNuxtdotjs,
  SiGithub,
  SiPostman,
} from "react-icons/si";

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

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264DE4" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F0DB4F" },
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#83CD29" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Vue", icon: <SiVuedotjs />, color: "#42B883" },
    { name: "Nuxt", icon: <SiNuxtdotjs />, color: "#00C58E" },
    { name: "GitHub", icon: <SiGithub />, color: "#111827" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  ];

  return (
    <section className="relative w-full bg-black text-white py-16 overflow-hidden">

      {/* 🔥 THREE.JS BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight />
          <Particles />
        </Canvas>
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>

        {/* 🔥 WORKING MARQUEE (ALL SCREENS) */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-gray-900/60 border border-gray-700"
              >
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    backgroundColor: s.color,
                    width: 40,
                    height: 40,
                  }}
                >
                  {React.cloneElement(s.icon, { size: 20 })}
                </span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 GRID */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-3 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg"
            >
              <span
                className="flex items-center justify-center rounded-full"
                style={{ backgroundColor: s.color, width: 40, height: 40 }}
              >
                {React.cloneElement(s.icon, { size: 18 })}
              </span>
              <span>{s.name}</span>
            </div>
          ))}
        </div>

      </div>

      {/* 🔥 GLOBAL MARQUEE CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}