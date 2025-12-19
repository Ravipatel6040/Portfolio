import React, { useEffect, useRef, useState } from "react";
import logo04 from "../assets/Images/logo04.png"

export default function HeroSection() {
  const phrases = ["FullStack Developer,"];

  const [display, setDisplay] = useState("");
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer = null;

    function tick() {
      const current = phrases[phraseIndex.current];

      if (!deleting.current) {
        setDisplay(current.slice(0, charIndex.current + 1));
        charIndex.current += 1;

        if (charIndex.current === current.length) {
          deleting.current = true;
          timer = setTimeout(tick, 900);
          return;
        }
        timer = setTimeout(tick, 100);
      } else {
        setDisplay(current.slice(0, charIndex.current - 1));
        charIndex.current -= 1;

        if (charIndex.current === 0) {
          deleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 50);
      }
    }

    timer = setTimeout(tick, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full sm:h-screen h-full bg-black" id="home">
      <div
        className="w-full h-fit bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y29kZXxlbnwwfDB8fHwxNzMyNzk1MjA5fDA&ixlib=rb-4.0.3&q=80&w=1080')",
        }}
      >
        {/* NAVBAR */}
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg bg-black/60">
          <div className="flex-1 flex justify-between items-center">
            <a href="home" className="flex items-center">
              <img
                src={logo04}   // 👉 yahan apna image path set kar lena
                alt="Logo"
                className="h-25 w-auto object-contain"
              />
            </a>
          </div>


          <label
            htmlFor="menu-toggle"
            className="pointer-cursor md:hidden block"
          >
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-white pt-4 md:pt-0">
                <li>
                  <a
                    className="md:p-4 py-3 px-0 block text-green-500 hover:text-green-500 
                 text-lg  font-bold"
                    href="home"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="md:p-4 py-3 px-0 block hover:text-green-500 
                 text-lg  font-bold"
                    href="about"
                  >
                    About Me
                  </a>
                </li>

                <li>
                  <a
                    className="md:p-4 py-3 px-0 block hover:text-green-500 
                 text-lg  font-bold"
                    href="skills"
                  >
                    Skills
                  </a>
                </li>

                <li>
                  <a
                    className="md:p-4 py-3 px-0 block hover:text-green-500 
                 text-lg  font-bold"
                    href="education"
                  >
                    Education
                  </a>
                </li>

                <li>
                  <a
                    className="md:p-4 py-3 px-0 block hover:text-green-500 
                 text-lg  font-bold"
                    href="experience"
                  >
                    Experience
                  </a>
                </li>

                <li>
                  <a
                    className="md:p-4 py-3 px-0 block hover:text-green-500 
                 text-lg  font-bold"
                    href="projects"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="md:p-4 py-3 px-0 block hover:text-green-500 md:mb-0 mb-2 
                 text-lg  font-bold"
                    href="contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>

            </nav>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="w-full h-full relative top-10 pb-20">
          <div className="lg:px-16 px-8 flex sm:flex-row flex-col flex-col-reverse gap-6 justify-center items-center">
            <div className="sm:text-left text-center text-white">
              <h4 className="sm:text-2xl text-3xl font-semibold w-fit bg-gray-900/40 p-3">
                Hello, My name is
                <span className="text-green-500 sm:text-2xl text-xl font-serif">
                  {" "}
                  Ravi Patel
                </span>
              </h4>
              <h1 className="mt-4 sm:text-4xl text-2xl">
                I'm
                <span className="typing libre-baskerville-bold text-green-500">
                  {" "}
                  {display}
                </span>
              </h1>

             <p className="mt-4 text-lg capitalize">
  Full stack developer with strong experience in frontend, backend, and
  database development, focused on building scalable and efficient
  full-stack applications.
</p>
              <div className=" mt-6 flex sm:flex-row flex-col gap-4 sm:justify-start justify-center">
              <a href="/contact">
  <button className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-green-500 hover:bg-green-600 transition ease-in-out delay-150">
    Hire Me
  </button>
</a>

                <button className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-yellow-500 hover:bg-yellow-600 transition ease-in-out delay-150">
                  Download CV
                </button>
              </div>
            </div>

            {/* <img
              className="md:max-w-[30%] sm:max-w-[40%] max-w-[70%] sm:rounded-sm sm:rounded-br-[5rem] sm:rounded-tl-[5rem] rounded-full sm:outline-none outline outline-[.3rem] outline-green-400/60"
              src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg"
              alt="Profile"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
