import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const experiences = [
  {
    role: "Full Stack Intern",
    company: "Bheema Infotech Pvt Ltd",
    companyLink: "https://www.bheemainfotech.in/",
    period: "Present",
    description:
      "Contributing to end-to-end application features, including core modules, REST APIs, admin dashboards, authentication flows, and performance optimizations for client projects.",
    type: "Full Time",
  },
  {
    role: "Full Stack Developer",
    company: "Appneural Pvt. Ltd.",
    companyLink: "https://appneural.com/",
    period: "3 Months Intern",
    description:
      "Working on web applications such as resume builder, analytics dashboards, and internal tools. Implementing secure APIs, SSR, role-based access, and third-party integrations.",
    type: "Internship",
  },
  {
    role: "Freelance Developer",
    company: "Self Employed",
    companyLink: "https://patelravi.com",
    period: "2023 – Present",
    description:
      "Designing and delivering modern web solutions — landing pages, portfolio sites, e-commerce flows, job tracking tools, and admin dashboards with a focus on clean UI and scalable code.",
    type: "Freelance",
  },
];

// 🔥 Three.js particles
const Particles = () => {
  return (
    <>
      {[...Array(18)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 5,
            ]}
          >
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const ExperienceSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="experience"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* 🔥 THREE.JS BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.6} />
          <Particles />
        </Canvas>
      </div>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/80 to-black z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-4">
        
        {/* 🔥 HEADING */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400/80 mb-2">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Real-world work where I built scalable systems and delivered impactful features.
          </p>
        </div>

        {/* 🔥 TIMELINE */}
        <div className="relative">
          {/* glowing line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_20px_#3b82f6]" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* 🔥 glowing dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2">
                    <div className="h-5 w-5 rounded-full bg-blue-500 border-4 border-black shadow-[0_0_20px_#3b82f6] animate-pulse" />
                  </div>

                  {/* 🔥 CARD */}
                  <div
                    className={`w-full md:w-1/2 mt-6 transform transition-all duration-700 ${
                      mounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div
                      className="group p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10
                      hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
                      hover:-translate-y-3 hover:scale-[1.02]
                      transition-all duration-500"
                    >
                      {/* top */}
                      <div className="flex justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-blue-300">
                            {exp.role}
                          </h3>

                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-cyan-300 transition underline"
                          >
                            {exp.company}
                          </a>
                        </div>

                        <div className="text-right">
                          <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-300">
                            {exp.type}
                          </span>
                          <p className="text-xs text-slate-400 mt-1">
                            {exp.period}
                          </p>
                        </div>
                      </div>

                      {/* description */}
                      <p className="text-slate-200/90 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;