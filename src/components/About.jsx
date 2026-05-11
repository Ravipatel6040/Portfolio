import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const details = [
  { label: "Role",         value: "Full Stack Developer", icon: "💻" },
  { label: "Experience",   value: "1+ Years",             icon: "💼" },
  { label: "Location",     value: "Indore, India",         icon: "📍" },
  { label: "Availability", value: "Open to Roles",         icon: "📅" },
];

const skills = [
  "React.js", "Node.js", "MongoDB", "Express.js",
  "MySQL", "Tailwind CSS", "REST APIs",
];

const socials = [
  { href: "https://www.linkedin.com/in/ravi6040/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://github.com/Ravipatel6040",      icon: <FaGithub />,   label: "GitHub"   },
  { href: "mailto:patelravi60404121@gmail.com",                 icon: <FaEnvelope />, label: "Email"    },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] },
  }),
};

const About = () => {
  return (
    <section className="relative w-full bg-[#09090b] text-white py-16 px-5 overflow-hidden">

      {/* Subtle dot-grid bg */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #22c55e 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Green glow blob */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[300px] bg-green-500/[0.06] rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 items-center">

        {/* ── LEFT: Avatar + status + socials ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={0}
          className="flex flex-col items-center gap-5"
        >
          {/* Avatar with spinning dashed ring */}
          <div className="relative w-[180px] h-[180px]">
            {/* Spinning dashed ring */}
            <div
              className="absolute inset-[-6px] rounded-full border border-dashed border-green-500/30"
              style={{ animation: "spin 14s linear infinite" }}
            />
            {/* Solid green border */}
            <div className="absolute inset-0 rounded-full border-2 border-green-500 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#14532d] to-[#166534]
                              flex items-center justify-center
                              text-[52px] font-extrabold text-green-400 tracking-tighter"
                   style={{ fontFamily: "'Syne', sans-serif" }}>
                RP
              </div>
            </div>
          </div>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/[0.08] border border-green-500/25
                          rounded-full px-4 py-1.5 text-[11px] font-medium text-green-400">
            <span className="w-[7px] h-[7px] rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.7)]"
                  style={{ animation: "pulse 2s infinite" }} />
            Available for work
          </div>

        </motion.div>

        {/* ── RIGHT: Content ── */}
        <div className="flex flex-col gap-5">

          {/* Eyebrow + title */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-green-500" />
              <span className="text-[10.5px] tracking-[0.2em] uppercase font-medium text-green-500">
                About Me
              </span>
            </div>
            <h2 className="text-[34px] md:text-[38px] font-extrabold leading-tight tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}>
              Hi, I'm{" "}
              <span className="text-green-400">Ravi Patel</span>
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
            className="text-[13.5px] text-zinc-400 leading-[1.75]"
          >
            A passionate{" "}
            <span className="text-zinc-200 font-medium">MERN Stack Developer</span>{" "}
            who loves creating modern, fast, and user-friendly web applications. I enjoy
            turning ideas into real projects using{" "}
            <span className="text-zinc-200 font-medium">clean code</span>{" "}
            and scalable architecture — building full-stack apps with smooth performance,
            secure backend logic, and pixel-perfect responsive UI.
          </motion.p>

          {/* Details grid */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={3}
            className="grid grid-cols-2 gap-2.5"
          >
            {details.map(({ label, value, icon }) => (
              <div
                key={label}
                className="bg-[#111113] border border-[#1f1f23] rounded-[10px] px-3.5 py-3
                           hover:border-green-500/35 transition-colors duration-250"
              >
                <p className="text-[10.5px] uppercase tracking-[0.1em] font-medium text-zinc-600 mb-1">
                  {label}
                </p>
                <p className="text-[13.5px] font-medium text-zinc-200 flex items-center gap-2">
                  <span>{icon}</span>
                  {value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Skill tags */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={4}
            className="flex flex-wrap gap-2"
          >
            {skills.map((s) => (
              <span
                key={s}
                className="text-[11px] font-medium px-3 py-1 rounded-full
                           bg-green-500/[0.07] text-green-400 border border-green-500/[0.18]"
              >
                {s}
              </span>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

          {/* CTA buttons */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={5}
            className="flex items-center gap-3"
          >
            <a
              href="tel:+91 9754976040"
              className="inline-flex items-center gap-2 bg-green-500 text-[#052e16] font-bold
                         text-[13px] px-5 py-2.5 rounded-lg
                         hover:bg-green-400 hover:-translate-y-px transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-transparent text-zinc-400 font-medium
                         text-[13px] px-5 py-2.5 rounded-lg border border-[#1f1f23]
                         hover:border-green-500 hover:text-green-400 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              View Projects
            </a>
          </motion.div>

        </div>
      </div>

      {/* Keyframes injected inline for spinning ring & pulsing dot */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:.35;} }
      `}</style>
    </section>
  );
};

export default About;