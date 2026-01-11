import React, { useEffect, useRef, useState } from "react";
import logo04 from "../assets/Images/logo04.png";

export default function HeroSection() {
  const phrases = ["FullStack Developer,"];
  const [display, setDisplay] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  // Typing effect
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

  // Scroll function (SPA)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <section id="home">
      <div
        className="w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607798748738-b15c40d33d57')",
        }}
      >
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur">
          <div className="lg:px-16 px-4 flex items-center justify-between py-4">
            
            {/* LOGO → TOP */}
            <img
              src={logo04}
              alt="Logo"
              className="h-12 cursor-pointer"
              onClick={() => scrollToSection("home")}
            />

            {/* Hamburger */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {/* MENU */}
            <nav
              className={`md:flex md:items-center md:static absolute left-0 top-full
              w-full md:w-auto bg-black md:bg-transparent
              ${menuOpen ? "block" : "hidden"}`}
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
            Full stack developer with strong experience in frontend, backend and
            database development, focused on scalable applications.
          </p>

          <div className="mt-6 flex gap-4 flex-col sm:flex-row">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 rounded-full outline outline-green-500 hover:bg-green-600"
            >
              Hire Me
            </button>

            <button className="px-6 py-2 rounded-full outline outline-yellow-500 hover:bg-yellow-600">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
