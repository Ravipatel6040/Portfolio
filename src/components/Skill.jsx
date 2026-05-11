import React, { useRef } from "react";
// import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt,FaDocker  } from "react-icons/fa";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiGithub,
  SiPostman,
   SiMysql, 
   SiPostgresql
  
} from "react-icons/si";

// Three.js floating particles
const Particles = () => (
  <>
    {[...Array(18)].map((_, i) => (
      <Float key={i} speed={1.5 + Math.random()} rotationIntensity={0.8} floatIntensity={2}>
        <mesh
          position={[
            (Math.random() - 0.5) * 14,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 4,
          ]}
        >
          <sphereGeometry args={[0.12 + Math.random() * 0.12, 16, 16]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.4} />
        </mesh>
      </Float>
    ))}
  </>
);

const skills = [
  { name: "HTML",       icon: <FaHtml5 />,       color: "#E44D26", bg: "#2a1206" },
  { name: "CSS",        icon: <FaCss3Alt />,      color: "#264DE4", bg: "#0d1230" },
  { name: "JavaScript", icon: <SiJavascript />,   color: "#F0DB4F", bg: "#d16218", iconColor: "#111" },
  { name: "React",      icon: <FaReact />,        color: "#61DBFB", bg: "#0d2330" },
  { name: "Node.js",    icon: <SiNodedotjs />,    color: "#83CD29", bg: "#0f1f0a" },
  { name: "Express",    icon: <SiExpress />,      color: "#c0c0c0", bg: "#1a1a1a" },
  { name: "MongoDB",    icon: <SiMongodb />,      color: "#47A248", bg: "#001e2b" },
  { name: "Tailwind",   icon: <SiTailwindcss />,  color: "#06B6D4", bg: "#0f2231" },
  { name: "Redux Toolkit",      icon: <SiRedux />,        color: "#a78bfa", bg: "#1b1139" },
  { name: "Vue",        icon: <SiVuedotjs />,     color: "#42B883", bg: "#0d1e14" },
  { name: "Git",        icon: <FaGitAlt />,       color: "#F05032", bg: "#2a1206" },
  { name: "GitHub",     icon: <SiGithub />,       color: "#e2e8f0", bg: "#111827" },
  { name: "Postman",    icon: <SiPostman />,      color: "#FF6C37", bg: "#2d1008" },
 { name: "Docker",     icon: <FaDocker />,        color: "#2496ED", bg: "#0b1e33" },
{ name: "MySQL",      icon: <SiMysql />,         color: "#00758F", bg: "#0b1d26" },
{ name: "PostgreSQL", icon: <SiPostgresql />,    color: "#336791", bg: "#0f172a" },
];

export default function Skills() {
  return (
    <section style={styles.section}>


      {/* Grid overlay */}
      <div style={styles.gridOverlay} />

      {/* Glow orbs */}
      <div style={{ ...styles.orb, width: 500, height: 500, top: -160, left: -100, opacity: 0.13 }} />
      <div style={{ ...styles.orb, width: 360, height: 360, bottom: -100, right: 40, opacity: 0.08 }} />

      {/* Content */}
      <div style={styles.content}>

        {/* Label */}
        <div style={styles.label}>
          <span style={styles.dot} />
          Tech Stack
        </div>

        {/* Title */}
        <h2 style={styles.title}>
          My <span style={{ color: "#22c55e" }}>Skills</span>
        </h2>
        <p style={styles.subtitle}>
          Technologies I work with to build modern, scalable products.
        </p>

        {/* Skills Grid */}
        <div style={styles.grid}>
          {skills.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Stats */}
        <div style={styles.statsRow}>
          {[
            { num: "16+", label: "Technologies" },
            { num: "1+",  label: "Years Exp." },
            { num: "Full", label: "Stack" },
          ].map((stat) => (
            <div key={stat.label} style={styles.stat}>
              <div style={styles.statNum}>{stat.num}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .skill-card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 24px 12px 20px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          cursor: default;
          transition: transform 0.22s ease, border-color 0.22s ease,
                      background 0.22s ease, box-shadow 0.22s ease;
          position: relative;
          overflow: hidden;
        }
        .skill-card-inner:hover {
          transform: translateY(-5px);
          border-color: rgba(34,197,94,0.4);
          background: rgba(34,197,94,0.05);
          box-shadow: 0 0 30px rgba(34,197,94,0.14), 0 10px 36px rgba(0,0,0,0.45);
        }
        .skill-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.22s ease;
        }
        .skill-card-inner:hover .skill-icon {
          transform: scale(1.12);
        }
        .skill-name {
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
          text-align: center;
          transition: color 0.2s;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.01em;
        }
        .skill-card-inner:hover .skill-name {
          color: #d1fae5;
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.65); }
        }
      `}</style>
    </section>
  );
}

function SkillCard({ skill, index }) {
  return (
    <div className="skill-card-inner" style={{ animationDelay: `${index * 40}ms` }}>
      <div
        className="skill-icon"
        style={{ backgroundColor: skill.bg || skill.color }}
      >
        {React.cloneElement(skill.icon, {
          size: 26,
          color: skill.iconColor || skill.color,
        })}
      </div>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}

const styles = {
  section: {
    position: "relative",
    width: "100%",
    background: "#050a05",
    color: "#fff",
    padding: "72px 32px",
    overflow: "hidden",
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: "border-box",
  },

  gridOverlay: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  },
  orb: {
    position: "absolute",
    borderRadius: "50%",
    background: "#22c55e",
    filter: "blur(90px)",
    pointerEvents: "none",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "960px",
    margin: "0 auto",
  },
  label: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#22c55e",
    marginBottom: 16,
    padding: "6px 16px",
    border: "1px solid rgba(34,197,94,0.28)",
    borderRadius: 100,
    background: "rgba(34,197,94,0.07)",
  },
  dot: {
    display: "inline-block",
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#22c55e",
    animation: "dotPulse 2s ease-in-out infinite",
  },
  title: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(36px, 5vw, 52px)",
    fontWeight: 800,
    color: "#f0fdf4",
    lineHeight: 1.05,
    margin: "0 0 12px",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(255,255,255,0.38)",
    margin: "0 0 52px",
    fontWeight: 300,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
    gap: 12,
  },
  divider: {
    width: 48,
    height: 1,
    background: "rgba(34,197,94,0.3)",
    margin: "44px auto",
    borderRadius: 1,
  },
  statsRow: {
    display: "flex",
    justifyContent: "center",
    gap: 48,
    flexWrap: "wrap",
  },
  stat: {
    textAlign: "center",
  },
  statNum: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 30,
    fontWeight: 700,
    color: "#22c55e",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 11,
    letterSpacing: "0.1em",
    color: "rgba(255,255,255,0.3)",
    textTransform: "uppercase",
    marginTop: 5,
  },
};