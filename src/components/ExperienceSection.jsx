import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Intern",
    company: "Bheema Infotech Pvt Ltd",
    companyLink: "https://www.bheemainfotech.in/",
    period: "Present",
    year: "2024",
    description:
      "Contributing to end-to-end application features, core modules, REST APIs, admin dashboards, authentication flows, and performance optimizations for client projects.",
    type: "Full Time",
    tags: ["React", "Node.js", "REST APIs", "MongoDB", "Admin Dashboards"],
  },
  {
    role: "Full Stack Developer",
    company: "Appneural Pvt. Ltd.",
    companyLink: "https://appneural.com/",
    period: "3 Months",
    year: "",
    description:
      "Worked on resume builder, analytics dashboards, and internal tools. Implemented secure APIs, SSR, role-based access, and third-party integrations.",
    type: "Internship",
    tags: ["SSR", "Role-based Auth", "Analytics", "Resume Builder"],
  },
  {
    role: "Freelance Developer",
    company: "Self Employed",
    companyLink: "https://patelravi.com",
    period: "2023 – Present",
    year: "2023",
    description:
      "Designing and delivering modern web solutions — landing pages, portfolio sites, e-commerce flows, job tracking tools, and admin dashboards with clean UI and scalable code.",
    type: "Freelance",
    tags: ["Landing Pages", "E-commerce", "Tailwind", "Freelance"],
  },
];

const stats = [
  { value: "2+", label: "Companies" },
  { value: "1+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "3",  label: "Roles" },
];

const badgeStyles = {
  "Full Time":  "bg-green-500/10 text-green-400 border border-green-500/20",
  "Internship": "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
  "Freelance":  "bg-amber-500/[0.08] text-amber-300 border border-amber-500/18",
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-[72px] bg-[#09090b] text-white overflow-hidden"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Top glow blob */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[360px]
                      bg-[radial-gradient(ellipse,rgba(34,197,94,0.07)_0%,transparent_70%)]
                      pointer-events-none z-0" />

      <div className="relative z-10 max-w-[860px] mx-auto px-5">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-[10px] mb-[14px]">
            <span className="w-7 h-px bg-green-500" />
            <span className="text-[10.5px] tracking-[0.22em] uppercase font-medium text-green-500">
              Career Journey
            </span>
            <span className="w-7 h-px bg-gradient-to-r from-green-500 to-transparent" />
          </div>
          <h2
            className="text-[40px] md:text-[46px] font-extrabold leading-tight tracking-tight mb-2.5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My{" "}
            <span className="text-green-400">Experience</span>
          </h2>
          <p className="text-[14px] text-zinc-500 max-w-[440px] mx-auto leading-[1.7]">
            Real-world work where I built scalable systems and delivered impactful features across multiple companies.
          </p>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center mb-14"
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`text-center px-8 ${
                i < stats.length - 1 ? "border-r border-[#1f1f23]" : ""
              }`}
            >
              <p
                className="text-[28px] font-extrabold text-green-400 leading-none"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {value}
              </p>
              <p className="text-[11px] uppercase tracking-[0.1em] font-medium text-zinc-600 mt-1">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Alternating Timeline ── */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #22c55e 8%, #22c55e 92%, transparent)",
            }}
          />

          <div className="space-y-9">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="grid grid-cols-[1fr_48px_1fr] items-start"
                >
                  {/* Left side */}
                  <div className={`${isLeft ? "pr-7" : ""} flex justify-end`}>
                    {isLeft && <ExperienceCard exp={exp} />}
                  </div>

                  {/* Center dot */}
                  <div className="flex flex-col items-center pt-5">
                    <div className="relative w-4 h-4 rounded-full border-2 border-green-500 bg-[#09090b] flex items-center justify-center">
                      <span className="w-[6px] h-[6px] rounded-full bg-green-500"
                            style={{ animation: "dpulse 2.2s ease-in-out infinite" }} />
                      <span className="absolute inset-[-5px] rounded-full border border-green-500/20"
                            style={{ animation: "ring 2.2s ease-in-out infinite" }} />
                    </div>
                    {exp.year && (
                      <p className="text-[10px] text-zinc-600 uppercase tracking-[0.12em] font-medium mt-2">
                        {exp.year}
                      </p>
                    )}
                  </div>

                  {/* Right side */}
                  <div className={`${!isLeft ? "pl-7" : ""}`}>
                    {!isLeft && <ExperienceCard exp={exp} />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes dpulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.45;transform:scale(.65);} }
        @keyframes ring { 0%,100%{transform:scale(1);opacity:.35;} 50%{transform:scale(1.6);opacity:0;} }
      `}</style>
    </section>
  );
};

const ExperienceCard = ({ exp }) => (
  <div
    className="group w-full bg-[#0f0f11] border border-[#1c1c1f] rounded-2xl p-[22px]
               hover:border-green-500/45 hover:-translate-y-1
               hover:shadow-[0_20px_40px_rgba(34,197,94,0.1)]
               transition-all duration-300 cursor-default"
  >
    {/* Top row */}
    <div className="flex justify-between items-start gap-3 mb-3">
      <div className="min-w-0 flex-1">
        <h3
          className="text-[15px] font-bold text-zinc-100 leading-snug mb-1
                     group-hover:text-green-400 transition-colors duration-300"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {exp.role}
        </h3>
        <a
          href={exp.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[12px] text-green-500 opacity-80
                     hover:opacity-100 transition-opacity"
        >
          {exp.company}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
        <span
          className={`text-[10px] font-semibold px-[10px] py-[3px] rounded-full tracking-[0.04em] ${
            badgeStyles[exp.type] ?? ""
          }`}
        >
          {exp.type}
        </span>
        <span className="text-[10.5px] text-zinc-600 font-medium flex items-center gap-1">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {exp.period}
        </span>
      </div>
    </div>

    {/* Description */}
    <p className="text-[12.5px] text-zinc-500 leading-[1.7] mb-3">
      {exp.description}
    </p>

    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent mb-3
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Tags */}
    <div className="flex flex-wrap gap-[5px]">
      {exp.tags.map((tag) => (
        <span
          key={tag}
          className="text-[10px] font-medium px-[9px] py-[3px] rounded-full
                     bg-white/[0.04] text-zinc-600 border border-[#1f1f23]"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceSection;