import React, { useEffect, useRef, useState } from "react";
import logo04 from "../assets/Images/logo04.png";
import { toast } from "react-toastify";

// 🔥 Three.js imports
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

// 🔥 Floating particles
const Particles = () => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 5,
            ]}
          >
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#22c55e" />
          </mesh>
        </Float>
      ))}
    </>
  );
};

export default function HeroSection() {
  const phrases = ["FullStack Developer,"];
  const [display, setDisplay] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer;

    function tick() {
      const current = phrases[phraseIndex.current];

      if (!deleting.current) {
        setDisplay(current.slice(0, charIndex.current + 1));
        charIndex.current++;

        if (charIndex.current === current.length) {
          deleting.current = true;
          timer = setTimeout(tick, 900);
          return;
        }
        timer = setTimeout(tick, 100);
      } else {
        setDisplay(current.slice(0, charIndex.current - 1));
        charIndex.current--;

        if (charIndex.current === 0) {
          deleting.current = false;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 50);
      }
    }

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // ✅ close menu
    }
  };

  const handleDownload = () => {
    toast.success("Downloading CV...", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <section id="home" className="relative">
      
      {/* 🔥 THREE.JS BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />
          <Particles />
        </Canvas>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10 w-full min-h-screen bg-black/60">

        {/* 🔥 OVERLAY (click outside to close menu) */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-[999] bg-black/70 backdrop-blur">
  <div className="lg:px-16 px-4 flex items-center justify-between py-4">

    {/* LOGO */}
    <img
      src={logo04}
      alt="Logo"
      className="h-12 cursor-pointer"
      onClick={() => scrollToSection("home")}
    />

    {/* MOBILE MENU BUTTON */}
    <button
      className="md:hidden text-white text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

    {/* MENU */}
    <nav
      className={`
        ${menuOpen ? "block" : "hidden"}
        md:flex md:items-center md:static
        absolute left-0 top-full w-full md:w-auto
        bg-black md:bg-transparent
      `}
    >
      <ul className="md:flex text-white text-center">
        {[
          ["Home", "home"],
          ["About", "about"],
          ["Skills", "skills"],
          ["Education", "education"],
          ["Experience", "experience"],
          ["Projects", "projects"],
          ["Contact", "contact"],
        ].map(([name, id]) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className="block px-6 py-3 text-lg font-bold hover:text-green-500 w-full"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>

  </div>
</header>

        {/* HERO CONTENT */}
        <div className="pt-32 lg:px-16 px-8 text-white">
          <h4 className="text-2xl bg-gray-900/60 inline-block p-3">
            Hello, My name is
            <span className="text-green-500 font-serif"> Ravi Patel</span>
          </h4>

          <h1 className="mt-4 text-4xl">
            I'm <span className="text-green-500">{display}</span>
          </h1>

          <p className="mt-4 text-lg max-w-xl">
            Full Stack Developer with hands-on experience building scalable web applications using the MERN stack and SQL-based systems.
            Skilled in designing secure REST APIs, optimizing database performance, and delivering end-to-end solutions.
            <br /><br />
            I have experience leading development workflows, mentoring junior developers, and implementing clean, maintainable architectures.
            Passionate about creating high-performance applications with modern UI/UX and continuously improving system scalability and efficiency.
          </p>

          <div className="mt-6 flex gap-4 flex-col sm:flex-row">

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-6 py-2 rounded-full outline outline-green-500 hover:bg-green-600"
            >
              Hire Me
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=10-psWC6a4GGVOS54Zt1rmBvQNdqxubiA"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              className="w-full sm:w-auto"
            >
              <button className="w-full px-6 py-2 rounded-full outline outline-yellow-500 hover:bg-yellow-600">
                Download CV
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}