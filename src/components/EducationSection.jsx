import React from "react";
import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const Particles = () => (
  <>
    {[...Array(18)].map((_, i) => (
      <Float key={i} speed={1.4 + Math.random()} rotationIntensity={0.6} floatIntensity={2.5}>
        <mesh
          position={[
            (Math.random() - 0.5) * 14,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 4,
          ]}
        >
          <sphereGeometry args={[0.08 + Math.random() * 0.1, 16, 16]} />
          <meshStandardMaterial
            color="#22c55e"
            emissive="#22c55e"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    ))}
  </>
);

const educationData = [
  {
    degree: "Master of Computer Science (CS)",
    school: "Awadhesh Pratap Singh University, Rewa (M.P.)",
    link: "https://apsurewa.ac.in/en/",
    year: "2021 – 2023",
    grade: "First Division",
    description:
      "Completed Master's degree with a focus on advanced computer science concepts and real-world application development.",
    tags: ["Algorithms", "DBMS", "Networking", "AI"],
  },
  // {
  //   degree: "Bachelor of Computer Science (BCA)",
  //   school: "Awadhesh Pratap Singh University, Rewa (M.P.)",
  //   link: "https://apsurewa.ac.in/en/",
  //   year: "2018 – 2021",
  //   grade: "First Division",
  //   description:
  //     "Gained foundational knowledge in programming, data structures, and software engineering principles.",
  //   tags: ["C++", "Java", "Web Basics", "OS"],
  // },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      style={{
        position: "relative",
        padding: "88px 32px",
        background: "#050a05",
        color: "#fff",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .edu-card {
          position: relative;
          padding: 32px 36px;
          border-radius: 20px;
          background: rgba(255,255,255,0.028);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
          transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
          overflow: hidden;
        }
        .edu-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(34,197,94,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.28s ease;
        }
        .edu-card:hover {
          transform: translateY(-6px);
          border-color: rgba(34,197,94,0.4);
          background: rgba(34,197,94,0.04);
          box-shadow: 0 0 40px rgba(34,197,94,0.12), 0 16px 48px rgba(0,0,0,0.5);
        }
        .edu-card:hover::before { opacity: 1; }

        .school-link {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .school-link:hover { color: #22c55e; }

        .tag {
          font-size: 11px;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.2);
          color: #4ade80;
          font-weight: 500;
          letter-spacing: 0.03em;
          transition: background 0.2s, border-color 0.2s;
        }
        .edu-card:hover .tag {
          background: rgba(34,197,94,0.14);
          border-color: rgba(34,197,94,0.35);
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%       { opacity: 0.7; transform: scale(0.85); box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        @keyframes lineDraw {
          from { height: 0; }
          to   { height: 100%; }
        }
      `}</style>

      {/* Three.js canvas */}
      {/* <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <Canvas camera={{ position: [0, 0, 6] }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 4, 4]} intensity={1} color="#22c55e" />
          <Particles />
        </Canvas>
      </div> */}

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(34,197,94,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.035) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
      }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", top: -140, left: -80, width: 480, height: 480, borderRadius: "50%", background: "#22c55e", filter: "blur(100px)", opacity: 0.1, zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -100, right: 20, width: 320, height: 320, borderRadius: "50%", background: "#22c55e", filter: "blur(90px)", opacity: 0.07, zIndex: 1, pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto" }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 11, fontWeight: 500, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#22c55e",
            marginBottom: 16, padding: "6px 16px",
            border: "1px solid rgba(34,197,94,0.28)",
            borderRadius: 100, background: "rgba(34,197,94,0.07)",
          }}
        >
          <span style={{
            display: "inline-block", width: 7, height: 7,
            borderRadius: "50%", background: "#22c55e",
            animation: "dotPulse 2s ease-in-out infinite",
          }} />
          Academic Journey
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(38px, 5vw, 54px)",
            fontWeight: 800,
            color: "#f0fdf4",
            lineHeight: 1.05,
            margin: "0 0 12px",
            letterSpacing: "-0.025em",
          }}
        >
          My{" "}
          <span style={{ color: "#22c55e" }}>Education</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", margin: "0 0 60px", fontWeight: 300 }}
        >
          The academic foundation behind my technical expertise.
        </motion.p>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 36 }}>

          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{
              position: "absolute", left: 7, top: 8, bottom: 8,
              width: 1.5,
              background: "linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))",
              transformOrigin: "top",
              borderRadius: 2,
            }}
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: index * 0.15 }}
              viewport={{ once: true }}
              style={{ position: "relative", marginBottom: index < educationData.length - 1 ? 32 : 0 }}
            >
              {/* Timeline dot */}
              <div style={{
                position: "absolute",
                left: -30, top: 36,
                width: 16, height: 16,
                borderRadius: "50%",
                background: "#22c55e",
                border: "2.5px solid #050a05",
                boxShadow: "0 0 0 3px rgba(34,197,94,0.25), 0 0 16px rgba(34,197,94,0.5)",
                animation: "dotPulse 2.4s ease-in-out infinite",
                animationDelay: `${index * 0.4}s`,
                zIndex: 2,
              }} />

              {/* Card */}
              <div className="edu-card">

                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
                  <div style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "#22c55e",
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    borderRadius: 100, padding: "4px 14px",
                  }}>
                    {edu.year}
                  </div>
                  {edu.grade && (
                    <div style={{
                      fontSize: 11, fontWeight: 500,
                      color: "#4ade80",
                      background: "rgba(34,197,94,0.06)",
                      border: "1px solid rgba(34,197,94,0.15)",
                      borderRadius: 100, padding: "4px 14px",
                      letterSpacing: "0.05em",
                    }}>
                      🎓 {edu.grade}
                    </div>
                  )}
                </div>

                {/* Degree */}
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  fontWeight: 700,
                  color: "#f0fdf4",
                  margin: "12px 0 6px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}>
                  {edu.degree}
                </h3>

                {/* School link */}
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="school-link"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  {edu.school}
                </a>

                {/* Divider */}
                <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.05)", margin: "20px 0" }} />

                {/* Description */}
                <p style={{
                  fontSize: 14, color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.75, margin: "0 0 20px", fontWeight: 300,
                }}>
                  {edu.description}
                </p>

                {/* Tags */}
                {edu.tags && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {edu.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            marginTop: 52,
            padding: "24px 36px",
            borderRadius: 16,
            background: "rgba(34,197,94,0.04)",
            border: "1px solid rgba(34,197,94,0.15)",
            display: "flex",
            justifyContent: "center",
            gap: 56,
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "1", label: "Degrees" },
            { num: "2+", label: "Years Study" },
            { num: "CS", label: "Specialization" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 28, fontWeight: 700,
                color: "#22c55e", lineHeight: 1,
              }}>{s.num}</div>
              <div style={{
                fontSize: 11, letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.28)",
                textTransform: "uppercase", marginTop: 5,
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSection;