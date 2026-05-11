import React, { useEffect, useRef, useState } from "react";
import logo04 from "../assets/Images/logo04.png";
import { toast } from "react-toastify";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

// ─── Pre-computed particles (stable across renders) ────────────────────────────
const PARTICLES = [...Array(24)].map(() => ({
  x: (Math.random() - 0.5) * 14,
  y: (Math.random() - 0.5) * 9,
  z: (Math.random() - 0.5) * 5,
  speed: 1.2 + Math.random() * 2,
  size: 0.07 + Math.random() * 0.11,
  color: Math.random() > 0.45 ? "#22c55e" : "#15803d",
}));

const Particles = () => (
  <>
    {PARTICLES.map((p, i) => (
      <Float key={i} speed={p.speed} rotationIntensity={0.5} floatIntensity={2.2}>
        <mesh position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.size, 14, 14]} />
          <meshStandardMaterial
            color={p.color}
            emissive={p.color}
            emissiveIntensity={0.35}
          />
        </mesh>
      </Float>
    ))}
  </>
);

// ─── Nav items ─────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  ["Home", "home"],
  ["About", "about"],
   ["Projects", "projects"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Education", "education"],
  
 
  ["Contact", "contact"],
];

const TYPEWRITER_PHRASES = [
  "FullStack Developer,",
  "MERN Stack Engineer,",
  "Problem Solver,",
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.63 2.18 2 2 0 012.62 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09A16 16 0 0016.9 17.09l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.06z" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// ══════════════════════════════════════════════════════════════════════════════
export default function HeroSection() {
  const [display, setDisplay] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  // ── Typewriter ──────────────────────────────────────────────────────────────
  useEffect(() => {
    let t;
    function tick() {
      const cur = TYPEWRITER_PHRASES[phraseIdx.current];
      if (!deleting.current) {
        setDisplay(cur.slice(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === cur.length) {
          deleting.current = true;
          t = setTimeout(tick, 1200);
          return;
        }
        t = setTimeout(tick, 90);
      } else {
        setDisplay(cur.slice(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % TYPEWRITER_PHRASES.length;
          t = setTimeout(tick, 400);
          return;
        }
        t = setTimeout(tick, 45);
      }
    }
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  // ── Scroll shadow ───────────────────────────────────────────────────────────
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // ── Close on desktop resize ─────────────────────────────────────────────────
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // ── Lock body scroll ────────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const handleDownload = () =>
    toast.success("Downloading CV…", { position: "top-right", autoClose: 2000 });

  // ────────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── GLOBAL STYLES ──────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        :root {
          --green:    #22c55e;
          --green-dk: #15803d;
          --yellow:   #facc15;
          --nav-h:    64px;
        }

        /* ══ Hamburger button ══════════════════════════════════ */
        .rp-ham {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 5px;
          width: 44px; height: 44px;
          background: none; border: none; cursor: pointer; padding: 0;
          flex-shrink: 0;
        }
        .rp-ham span {
          display: block; height: 2px; background: #e2e8f0; border-radius: 2px;
          transition: transform .32s cubic-bezier(.4,0,.2,1),
                      opacity  .32s ease,
                      width    .32s ease;
        }
        .rp-ham span:nth-child(1) { width: 24px; }
        .rp-ham span:nth-child(2) { width: 17px; }
        .rp-ham span:nth-child(3) { width: 24px; }
        /* open → X */
        .rp-ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg);  width: 24px; }
        .rp-ham.open span:nth-child(2) { opacity: 0; width: 0; }
        .rp-ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 24px; }

        /* ══ Mobile drawer ═════════════════════════════════════ */
        .rp-drawer {
          position: fixed; top: var(--nav-h); left: 0; right: 0; z-index: 997;
          background: rgba(4,9,6,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          max-height: 0; overflow: hidden;
          border-bottom: 1px solid transparent;
          transition: max-height .4s cubic-bezier(.4,0,.2,1), border-color .4s;
        }
        .rp-drawer.open {
          max-height: calc(100dvh - var(--nav-h));
          overflow-y: auto;
          border-bottom-color: rgba(34,197,94,.14);
        }
        .rp-drawer ul { list-style: none; margin: 0; padding: 10px 0 18px; }

        /* stagger */
        .rp-drawer li {
          opacity: 0; transform: translateX(-18px);
          transition: opacity .3s ease, transform .3s ease;
        }
        .rp-drawer.open li                { opacity: 1; transform: none; }
        .rp-drawer.open li:nth-child(1)   { transition-delay: .04s; }
        .rp-drawer.open li:nth-child(2)   { transition-delay: .08s; }
        .rp-drawer.open li:nth-child(3)   { transition-delay: .12s; }
        .rp-drawer.open li:nth-child(4)   { transition-delay: .16s; }
        .rp-drawer.open li:nth-child(5)   { transition-delay: .20s; }
        .rp-drawer.open li:nth-child(6)   { transition-delay: .24s; }
        .rp-drawer.open li:nth-child(7)   { transition-delay: .28s; }

        .rp-drawer li button {
          width: 100%; background: none;
          border: none; border-left: 2.5px solid transparent;
          color: #94a3b8;
          font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
          padding: 13px 24px; cursor: pointer; text-align: left;
          display: flex; align-items: center; gap: 12px;
          transition: color .22s, border-color .22s, padding-left .22s, background .22s;
        }
        .rp-drawer li button:hover,
        .rp-drawer li button.active {
          color: var(--green); border-left-color: var(--green);
          padding-left: 30px; background: rgba(34,197,94,.05);
        }
        .rp-drawer li button .idx {
          font-size: 10px; color: var(--green); opacity: .55;
          font-weight: 600; min-width: 20px;
        }

        .rp-drawer-footer {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 24px 22px;
          border-top: 1px solid rgba(255,255,255,.07);
        }
        .rp-soc {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(34,197,94,.25);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.5); text-decoration: none;
          transition: color .2s, border-color .2s, background .2s;
        }
        .rp-soc:hover { color: var(--green); border-color: var(--green); background: rgba(34,197,94,.1); }

        /* ══ Desktop nav links ═════════════════════════════════ */
        .rp-navlink {
          background: none; border: none; color: #94a3b8;
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px;
          padding: 6px 0; cursor: pointer; position: relative;
          text-transform: uppercase; letter-spacing: .06em; white-space: nowrap;
          transition: color .2s;
        }
        .rp-navlink::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 2px; background: var(--green);
          border-radius: 2px; transition: width .25s ease;
        }
        .rp-navlink:hover, .rp-navlink.active { color: var(--green); }
        .rp-navlink:hover::after, .rp-navlink.active::after { width: 100%; }

        /* ══ Overlay ═══════════════════════════════════════════ */
        .rp-overlay {
          position: fixed; top: var(--nav-h); inset: 0;
          background: rgba(0,0,0,.5); z-index: 996;
          opacity: 0; pointer-events: none; transition: opacity .3s;
        }
        .rp-overlay.show { opacity: 1; pointer-events: all; }

        /* ══ Hero extras ════════════════════════════════════════ */
        .rp-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(34,197,94,.08); border: 1px solid rgba(34,197,94,.28);
          padding: 5px 14px 5px 10px; border-radius: 999px;
          font-family: 'Inter', sans-serif; font-size: 11px; color: var(--green);
          letter-spacing: .07em; margin-bottom: 1.5rem;
        }
        .rp-badge::before {
          content: ''; width: 7px; height: 7px; border-radius: 50%;
          background: var(--green); flex-shrink: 0;
          animation: rp-pulse 1.8s ease-in-out infinite;
        }
        @keyframes rp-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,.55); }
          50%      { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }

        .rp-cursor {
          display: inline-block; width: 3px; height: 1em;
          background: var(--green); margin-left: 3px;
          vertical-align: middle; border-radius: 1px;
          animation: rp-blink .8s step-end infinite;
        }
        @keyframes rp-blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

        .rp-grad-line {
          height: 2px; width: 110px;
          background: linear-gradient(90deg, transparent, var(--green), transparent);
          border-radius: 999px; margin-bottom: 1.75rem;
        }

        .rp-stat {
          background: rgba(34,197,94,.06); border: 1px solid rgba(34,197,94,.18);
          padding: .9rem 1.1rem; border-radius: 12px;
          transition: background .25s, border-color .25s; cursor: default;
        }
        .rp-stat:hover { background: rgba(34,197,94,.13); border-color: rgba(34,197,94,.4); }

        .rp-btn-primary {
          display: inline-flex; align-items: center; gap: 7px;
          padding: .72rem 1.8rem; border-radius: 999px;
          border: 1.5px solid var(--green); background: var(--green);
          color: #040d07; font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: .93rem; cursor: pointer; letter-spacing: .02em;
          transition: background .2s, color .2s, box-shadow .2s, transform .15s;
        }
        .rp-btn-primary:hover {
          background: transparent; color: var(--green);
          box-shadow: 0 0 22px rgba(34,197,94,.3); transform: translateY(-2px);
        }

        .rp-btn-secondary {
          display: inline-flex; align-items: center; gap: 7px;
          padding: .72rem 1.8rem; border-radius: 999px;
          border: 1.5px solid var(--yellow); background: transparent;
          color: var(--yellow); font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: .93rem; cursor: pointer; letter-spacing: .02em;
          text-decoration: none;
          transition: background .2s, box-shadow .2s, transform .15s;
        }
        .rp-btn-secondary:hover {
          background: rgba(250,204,21,.1);
          box-shadow: 0 0 22px rgba(250,204,21,.2); transform: translateY(-2px);
        }

        .rp-social-link {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid rgba(34,197,94,.22);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.55); text-decoration: none;
          transition: color .2s, border-color .2s, background .2s;
        }
        .rp-social-link:hover {
          color: var(--green); border-color: var(--green); background: rgba(34,197,94,.1);
        }

        .rp-scroll-hint {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 5px;
          opacity: .45; animation: rp-bounce 2.2s ease-in-out infinite;
        }
        @keyframes rp-bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(9px); }
        }

        /* ══ Responsive ════════════════════════════════════════ */
        @media (max-width: 767px) {
          .rp-desktop-nav { display: none !important; }
        }
        @media (min-width: 768px) {
          .rp-ham     { display: none !important; }
          .rp-drawer  { display: none !important; }
          .rp-overlay { display: none !important; }
        }
      `}</style>

      {/* ════════════════════════ SECTION ════════════════════════ */}
      <section
        id="home"
        style={{ position: "relative", fontFamily: "'Inter',sans-serif", background: "#040a06" }}
      >
        {/* Three.js canvas */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.55} />
            <pointLight position={[5, 5, 5]} intensity={1.1} />
            <pointLight position={[-5, -3, 3]} color="#16a34a" intensity={0.45} />
            <Particles />
          </Canvas>
        </div>

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg,rgba(4,9,6,.93) 0%,rgba(5,14,8,.86) 60%,rgba(4,9,6,.93) 100%)",
        }} />

        {/* ═══════════════════ NAVBAR ═══════════════════════════ */}
        <header style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          height: "var(--nav-h)", zIndex: 999,
          background: scrolled ? "rgba(3,7,5,.96)" : "rgba(3,7,5,.72)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(34,197,94,.14)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 28px rgba(0,0,0,.45)" : "none",
          transition: "background .35s, border-color .35s, box-shadow .35s",
        }}>
          <div style={{
            maxWidth: 1280, margin: "0 auto", height: "100%",
            padding: "0 clamp(1rem,4vw,4rem)",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
          }}>

            {/* Logo */}
            <img
              src={logo04}
              alt="Ravi Patel"
              onClick={() => scrollToSection("home")}
              style={{
                height: 40, cursor: "pointer", flexShrink: 0,
                filter: "drop-shadow(0 0 8px rgba(34,197,94,.28))",
              }}
            />

            {/* Desktop nav */}
            <nav className="rp-desktop-nav" style={{ display: "flex", gap: "clamp(.5rem,2vw,2.25rem)" }}>
              {NAV_ITEMS.map(([name, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`rp-navlink ${active === id ? "active" : ""}`}
                >
                  {name}
                </button>
              ))}
            </nav>

            {/* Hamburger — mobile only */}
            <button
              className={`rp-ham ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="rpDrawer"
            >
              <span /><span /><span />
            </button>
          </div>
        </header>

        {/* ═══════════════════ OVERLAY ══════════════════════════ */}
        <div
          className={`rp-overlay ${menuOpen ? "show" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* ═══════════════════ MOBILE DRAWER ════════════════════ */}
        <nav
          id="rpDrawer"
          className={`rp-drawer ${menuOpen ? "open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          <ul>
            {NAV_ITEMS.map(([name, id], i) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={active === id ? "active" : ""}
                >
                  <span className="idx">0{i + 1}</span>
                  {name}
                </button>
              </li>
            ))}
          </ul>

          <div className="rp-drawer-footer">
            {[
              { href: "https://github.com", icon: <GithubIcon />, label: "GitHub" },
              { href: "https://linkedin.com", icon: <LinkedinIcon />, label: "LinkedIn" },
              { href: "https://twitter.com", icon: <TwitterIcon />, label: "Twitter" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="rp-soc" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </nav>

        {/* ═══════════════════ HERO CONTENT ═════════════════════ */}
        <div style={{
          position: "relative", zIndex: 10, minHeight: "100dvh",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "calc(var(--nav-h) + 3rem) clamp(1.25rem,5vw,5rem) 6rem",
          maxWidth: 1280, margin: "0 auto",
        }}>

          {/* Badge */}
          <div className="rp-badge">AVAILABLE FOR WORK</div>

          {/* Greeting */}
          <p style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 600,
            fontSize: "clamp(1rem,2vw,1.1rem)", color: "#94a3b8",
            letterSpacing: ".08em", marginBottom: ".5rem",
          }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: "clamp(2.4rem,6vw,4.6rem)", lineHeight: 1.08,
            color: "#f1f5f9", margin: 0, marginBottom: ".45rem", letterSpacing: "-.02em",
          }}>
            Ravi{" "}
            <span style={{ color: "var(--green)", textShadow: "0 0 40px rgba(34,197,94,.3)" }}>
              Patel
            </span>
          </h1>

          {/* Typewriter */}
          <h2 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 700,
            fontSize: "clamp(1.15rem,3vw,2rem)", color: "#94a3b8",
            marginBottom: "1.6rem", minHeight: "2.5rem",
          }}>
            I'm a <span style={{ color: "var(--green)" }}>{display}</span>
            <span className="rp-cursor" />
          </h2>

          <div className="rp-grad-line" />

          {/* Bio */}
          <p style={{
            fontFamily: "'Inter',sans-serif", fontWeight: 400,
            fontSize: "clamp(.88rem,1.5vw,1.03rem)", color: "#94a3b8",
            maxWidth: 570, lineHeight: 1.82, marginBottom: "2.25rem",
          }}>
            Full Stack Developer crafting scalable web applications with the MERN
            stack and SQL-based systems. I design secure REST APIs, optimise
            database performance, and lead end-to-end delivery—from clean
            architecture to polished UI/UX.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
            {[
              { v: "1+", l: "Years Exp." },
              { v: "15+", l: "Projects" },
              { v: "MERN", l: "Stack" },
            ].map(({ v, l }) => (
              <div key={l} className="rp-stat">
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.55rem", color: "var(--green)" }}>{v}</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: ".75rem", color: "#64748b", letterSpacing: ".07em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+91 9754976040">
              <button className="rp-btn-primary">
                <PhoneIcon /> Hire Me
              </button>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=10-psWC6a4GGVOS54Zt1rmBvQNdqxubiA"
              target="_blank" rel="noopener noreferrer"
              onClick={handleDownload}
              className="rp-btn-secondary"
            >
              <DownloadIcon/>Download CV
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: ".75rem", marginTop: "2.25rem" }}>
            {[
              { href: "https://github.com/Ravipatel6040?tab=repositories", icon: <GithubIcon />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/ravi6040/", icon: <LinkedinIcon />, label: "LinkedIn" },
              { href: "https://twitter.com", icon: <TwitterIcon />, label: "Twitter" },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="rp-social-link" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="rp-scroll-hint" style={{ zIndex: 10 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="rgba(34,197,94,.55)" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <span style={{
            fontFamily: "'Syne',sans-serif", fontSize: ".68rem",
            color: "rgba(34,197,94,.45)", letterSpacing: ".14em",
          }}>SCROLL</span>
        </div>
      </section>
    </>
  );
}