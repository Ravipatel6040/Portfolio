import React, { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiNuxtdotjs,
  SiGithub,
  SiPostman,
} from "react-icons/si";

export default function Skills({
  title = "My Skills",
  skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264DE4" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F0DB4F" },
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#83CD29" },
    { name: "Express", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Vue.js", icon: <SiVuedotjs />, color: "#42B883" },
    { name: "Nuxt.js", icon: <SiNuxtdotjs />, color: "#00C58E" },
    { name: "GitHub", icon: <SiGithub />, color: "#111827" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  ],
}) {
  const cssMarqueeRef = useRef(null);

  return (
    <section className="w-full bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">{title}</h2>

        <div className="relative">
          {/* Marquee for large screens */}
          <div className="hidden sm:block">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="6"
              onMouseOver={(e) => e.target.stop()}
              onMouseOut={(e) => e.target.start()}
              className="w-full"
            >
              <div className="flex items-center gap-4 px-4">
                {skills.map((s, i) => (
                  <div
                    key={s.name + i}
                    className="inline-flex items-center gap-4 px-5 py-3 rounded-full shadow-sm bg-gray-900/40"
                  >
                    <span
                      className="flex items-center justify-center rounded-full text-white shrink-0"
                      style={{ backgroundColor: s.color, width: 40, height: 40 }}
                    >
                      {React.cloneElement(s.icon, { size: 20 })}
                    </span>
                    <span className="text-sm sm:text-base font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </marquee>
          </div>

          {/* Mobile CSS marquee */}
          <div className="block sm:hidden">
            <div className="overflow-hidden">
              <div
                ref={cssMarqueeRef}
                className="inline-flex whitespace-nowrap py-3 animate-marquee"
                onMouseEnter={() => {
                  if (cssMarqueeRef.current)
                    cssMarqueeRef.current.style.animationPlayState = "paused";
                }}
                onMouseLeave={() => {
                  if (cssMarqueeRef.current)
                    cssMarqueeRef.current.style.animationPlayState = "running";
                }}
              >
                {skills.concat(skills).map((s, i) => (
                  <div
                    key={s.name + i}
                    className="mx-4 inline-flex items-center gap-4 px-5 py-3 rounded-full shadow-sm bg-gray-900/40"
                  >
                    <span
                      className="flex items-center justify-center rounded-full text-white shrink-0"
                      style={{ backgroundColor: s.color, width: 40, height: 40 }}
                    >
                      {React.cloneElement(s.icon, { size: 20 })}
                    </span>
                    <span className="text-sm sm:text-base font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Static grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-4 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg shadow-sm text-sm sm:text-base font-medium"
              >
                <span
                  className="flex items-center justify-center rounded-full text-white shrink-0"
                  style={{ backgroundColor: s.color, width: 44, height: 44 }}
                >
                  {React.cloneElement(s.icon, { size: 20 })}
                </span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
