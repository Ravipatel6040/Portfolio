import React from "react";
import { motion } from "framer-motion";

import Rd from "../assets/Images/rd.png";
import Skill from "../assets/Images/skill.png";
import Lottry from "../assets/Images/lottry.png";
import ProjectBg1 from "../assets/Images/project01.png";
import ProjectBg2 from "../assets/Images/project02.png";
import ProjectBg3 from "../assets/Images/project03.png";
import Solor from "../assets/Images/solor.png";
import Enriched from "../assets/Images/enriched.png";


const projects = [
  {
    title: "RD Kunhare",
    description: "Best Property Broker & Real Estate Company with modern listings.",
    image: Rd,
    tech: ["React", "Node", "MongoDB"],
    demo: "https://rdkunhare.com/",
    github: "#",
  },


  {
    title: "Learning Management System",
    description: "Modern e-learning platform with course management, student progress tracking, online classes, and interactive learning features.",
    image: Enriched,
    tech: ["React", "Node", "MySql"],
    demo: "https://www.enrichedacademy.com/",
    github: "#",
  },

  {
    title: "IEFP India",
    description: "Organic e-commerce platform with rich APIs & fully responsive UI.",
    image: ProjectBg1,
    tech: ["React", "Node", "MongoDB"],
    demo: "https://iefpindia.com/",
    github: "#",
  },
    {
    title: "RJ Power Solution",
    description: "Developed modern solar energy solutions platform with service management, customer inquiries, and real-time project tracking.",
    image: Solor,
    tech: ["React", "Node", "MySQL"],
    demo: "https://rjpowersolution.bheemainfotech.in/",
    github: "#",
  },

  {
    title: "Lottery System",
    description: "Scalable lottery platform with real-time draw processing & ticket management.",
    image: Lottry,
    tech: ["React", "Node", "MySQL"],
    demo: "https://ph7-frontend.vercel.app/",
    github: "#",
  },

  {
    title: "Ice Cream Shop",
    description: "Responsive UI with smooth animations & interactive product showcase.",
    image: ProjectBg3,
    tech: ["HTML", "JS", "Tailwind"],
    demo: "https://ice-cream-shop-red.vercel.app/",
    github: "#",
  },
  {
    title: "DatePe Dashboard",
    description: "Admin panel with analytics, user management & subscription tracking.",
    image: ProjectBg2,
    tech: ["React", "MUI", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Online Course Platform",
    description: "E-learning platform with course management & real-time progress tracking.",
    image: Skill,
    tech: ["React", "Node", "MySQL"],
    demo: "https://skilldabaar.bheemainfotech.in/",
    github: "#",
  },


];

/* ── SVG Icons ── */
const IconExternal = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IconGithub = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

/* ── Project Card ── */
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.48, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
    className="project-card"
  >
    {/* Top shimmer line on hover */}
    <div className="card-shimmer" />

    {/* Image area */}
    <div className="card-image-wrap">
      <img src={project.image} alt={project.title} className="card-img" />
      {/* Overlay gradient */}
      <div className="card-img-overlay" />

      {/* Hover buttons */}
      <div className="card-btn-group">
        <a href={project.demo} target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} className="card-btn card-btn-primary">
          <IconExternal /> Live
        </a>
        <a href={project.github} onClick={(e) => e.stopPropagation()}
          className="card-btn card-btn-ghost">
          <IconGithub /> Code
        </a>
      </div>
    </div>

    {/* Body */}
    <div className="card-body">
      <div className="card-meta-row">
        <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="card-live-dot" />
      </div>

      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.description}</p>

      {/* Tags */}
      <div className="card-tags">
        {project.tech.map((t) => (
          <span key={t} className="card-tag">{t}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ── Section ── */
const ProjectSection = () => (
  <section className="projects-section">

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

      /* ── Section ── */
      .projects-section {
        position: relative;
        padding: 72px 24px;
        background: #050a05;
        color: #fff;
        overflow: hidden;
        font-family: 'DM Sans', sans-serif;
        box-sizing: border-box;
      }

      /* Grid bg */
      .projects-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(34,197,94,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,197,94,0.035) 1px, transparent 1px);
        background-size: 52px 52px;
        pointer-events: none;
        z-index: 0;
      }

      /* Glow orbs */
      .proj-orb {
        position: absolute;
        border-radius: 50%;
        background: #22c55e;
        filter: blur(100px);
        pointer-events: none;
        z-index: 0;
      }

      /* ── Header ── */
      .proj-header {
        position: relative;
        z-index: 1;
        text-align: center;
        margin-bottom: 52px;
      }
      .proj-label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #22c55e;
        margin-bottom: 16px;
        padding: 6px 16px;
        border: 1px solid rgba(34,197,94,0.28);
        border-radius: 100px;
        background: rgba(34,197,94,0.07);
      }
      .proj-label-dot {
        display: inline-block;
        width: 7px; height: 7px;
        border-radius: 50%;
        background: #22c55e;
        animation: projDotPulse 2s ease-in-out infinite;
      }
      @keyframes projDotPulse {
        0%,100%{opacity:1;transform:scale(1)}
        50%{opacity:0.4;transform:scale(0.65)}
      }
      .proj-title {
        font-family: 'Syne', sans-serif;
        font-size: clamp(36px, 5vw, 52px);
        font-weight: 800;
        color: #f0fdf4;
        line-height: 1.05;
        margin: 0 0 12px;
        letter-spacing: -0.025em;
      }
      .proj-title-accent { color: #22c55e; }
      .proj-sub {
        font-size: 14px;
        color: rgba(255,255,255,0.32);
        font-weight: 300;
        margin: 0;
      }

      /* ── Grid ── */
      .proj-grid {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
        max-width: 1120px;
        margin: 0 auto;
      }
      @media (max-width: 1100px) { .proj-grid { grid-template-columns: repeat(3, 1fr); } }
      @media (max-width: 760px)  { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 480px)  { .proj-grid { grid-template-columns: 1fr; } }

      /* ── Card ── */
      .project-card {
        position: relative;
        display: flex;
        flex-direction: column;
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.07);
        border-radius: 16px;
        overflow: hidden;
        height: 310px;
        transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
        cursor: default;
      }
      .project-card:hover {
        transform: translateY(-6px);
        border-color: rgba(34,197,94,0.42);
        background: rgba(34,197,94,0.03);
        box-shadow: 0 0 0 1px rgba(34,197,94,0.12),
                    0 20px 40px rgba(0,0,0,0.5),
                    0 0 40px rgba(34,197,94,0.1);
      }

      /* Top shimmer */
      .card-shimmer {
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, #22c55e, transparent);
        opacity: 0;
        transition: opacity 0.28s ease;
        z-index: 10;
      }
      .project-card:hover .card-shimmer { opacity: 1; }

      /* Image */
      .card-image-wrap {
        position: relative;
        height: 148px;
        min-height: 148px;
        flex-shrink: 0;
        overflow: hidden;
      }
      .card-img {
        width: 100%; height: 100%;
        object-fit: cover;
        filter: brightness(0.82) saturate(0.85);
        transition: transform 0.5s ease, filter 0.3s ease;
      }
      .project-card:hover .card-img {
        transform: scale(1.08);
        filter: brightness(0.72) saturate(0.8);
      }
      .card-img-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, transparent 40%, rgba(5,10,5,0.85));
        opacity: 0;
        transition: opacity 0.28s ease;
      }
      .project-card:hover .card-img-overlay { opacity: 1; }

      /* Buttons */
      .card-btn-group {
        position: absolute;
        bottom: 10px; right: 10px;
        display: flex;
        gap: 5px;
        z-index: 5;
        opacity: 0;
        transform: translateY(6px);
        transition: opacity 0.28s ease, transform 0.28s ease;
      }
      .project-card:hover .card-btn-group {
        opacity: 1;
        transform: translateY(0);
      }
      .card-btn {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        font-size: 10.5px;
        font-weight: 600;
        padding: 5px 10px;
        border-radius: 100px;
        text-decoration: none;
        white-space: nowrap;
        line-height: 1;
        transition: background 0.2s, transform 0.15s;
        font-family: 'DM Sans', sans-serif;
      }
      .card-btn:hover { transform: scale(1.04); }
      .card-btn-primary {
        background: #22c55e;
        color: #052e16;
        font-weight: 700;
      }
      .card-btn-primary:hover { background: #16a34a; }
      .card-btn-ghost {
        background: rgba(255,255,255,0.12);
        color: rgba(255,255,255,0.85);
        backdrop-filter: blur(6px);
        border: 1px solid rgba(255,255,255,0.15);
      }
      .card-btn-ghost:hover { background: rgba(255,255,255,0.2); }

      /* Body */
      .card-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        padding: 12px 14px 14px;
      }
      .card-meta-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6px;
      }
      .card-index {
        font-size: 9.5px;
        font-weight: 700;
        letter-spacing: 0.15em;
        color: rgba(34,197,94,0.25);
        font-family: monospace;
        transition: color 0.2s;
      }
      .project-card:hover .card-index { color: rgba(34,197,94,0.55); }
      .card-live-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: #22c55e;
        box-shadow: 0 0 6px rgba(34,197,94,0.7);
        animation: projDotPulse 2.2s ease-in-out infinite;
      }
      .card-title {
        font-family: 'Syne', sans-serif;
        font-size: 13px;
        font-weight: 700;
        color: #f0fdf4;
        line-height: 1.3;
        margin: 0 0 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: color 0.2s;
      }
      .project-card:hover .card-title { color: #d1fae5; }
      .card-desc {
        font-size: 11px;
        color: rgba(255,255,255,0.35);
        line-height: 1.6;
        margin: 0;
        flex: 1;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-weight: 300;
      }
      .card-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 10px;
      }
      .card-tag {
        font-size: 9.5px;
        font-weight: 600;
        padding: 3px 9px;
        border-radius: 100px;
        background: rgba(34,197,94,0.07);
        color: #4ade80;
        border: 1px solid rgba(34,197,94,0.18);
        letter-spacing: 0.03em;
        transition: background 0.2s, border-color 0.2s;
      }
      .project-card:hover .card-tag {
        background: rgba(34,197,94,0.13);
        border-color: rgba(34,197,94,0.32);
      }

      /* Footer divider */
      .proj-footer-line {
        position: relative;
        z-index: 1;
        max-width: 1120px;
        margin: 44px auto 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(34,197,94,0.25), transparent);
      }

      /* Stats strip */
      .proj-stats {
        position: relative;
        z-index: 1;
        max-width: 1120px;
        margin: 36px auto 0;
        display: flex;
        justify-content: center;
        gap: 52px;
        flex-wrap: wrap;
      }
      .proj-stat { text-align: center; }
      .proj-stat-num {
        font-family: 'Syne', sans-serif;
        font-size: 28px;
        font-weight: 700;
        color: #22c55e;
        line-height: 1;
      }
      .proj-stat-label {
        font-size: 11px;
        letter-spacing: 0.1em;
        color: rgba(255,255,255,0.25);
        text-transform: uppercase;
        margin-top: 5px;
      }
    `}</style>

    {/* Orbs */}
    <div className="proj-orb" style={{ width: 520, height: 520, top: -180, left: -140, opacity: 0.09 }} />
    <div className="proj-orb" style={{ width: 340, height: 340, bottom: -80, right: 40, opacity: 0.06 }} />

    {/* Header */}
    <motion.div
      className="proj-header"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="proj-label">
        <span className="proj-label-dot" />
        Selected Works
      </div>
      <h2 className="proj-title">
        Projects I've{" "}
        <span className="proj-title-accent">Built</span>
      </h2>
      <p className="proj-sub">Real-world apps crafted with modern stacks.</p>
    </motion.div>

    {/* Grid */}
    <div className="proj-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>

    {/* Footer line */}
    <div className="proj-footer-line" />

    {/* Stats */}
    <div className="proj-stats">
      {[
        { num: `${projects.length}+`, label: "Projects" },
        { num: "1+", label: "Years Exp." },
        { num: "10+", label: "Happy Clients" },
      ].map((s) => (
        <div key={s.label} className="proj-stat">
          <div className="proj-stat-num">{s.num}</div>
          <div className="proj-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectSection;