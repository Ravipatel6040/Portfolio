import React, { useEffect, useState } from "react";

const experiences = [
  {
    role: "Full Stack Intern",
    company: "Bheema Infotech Pvt Ltd",
    companyLink: "https://www.bheemainfotech.in/",
    period: "Present",
    description:
      "Contributing to end-to-end application features, including core modules, REST APIs, admin dashboards, authentication flows, and performance optimizations for client projects.",
    type: "Full Time",
  },
  {
    role: "Full Stack Developer",
    company: "Appneural Pvt. Ltd.",
    companyLink: "https://appneural.com/",
    period: "3 Months Intern",
    description:
      "Working on web applications such as resume builder, analytics dashboards, and internal tools. Implementing secure APIs, SSR, role-based access, and third-party integrations.",
    type: "Internship",
  },
  {
    role: "Freelance Developer",
    company: "Self Employed",
    companyLink: "https://patelravi.com",
    period: "2023 – Present",
    description:
      "Designing and delivering modern web solutions — landing pages, portfolio sites, e-commerce flows, job tracking tools, and admin dashboards with a focus on clean UI and scalable code.",
    type: "Freelance",
  },
];

const ExperienceSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* floating background particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="animate-ping absolute top-10 left-20 h-16 w-16 rounded-full bg-blue-600 blur-2xl" />
        <div className="animate-pulse absolute bottom-20 right-10 h-24 w-24 rounded-full bg-cyan-400 blur-2xl" />
        <div className="animate-pulse absolute top-1/2 left-1/3 h-20 w-20 rounded-full bg-blue-500 blur-2xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* heading animation */}
        <div
          className={`text-center mb-14 transform transition-all duration-700 ${
            mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-6 scale-95"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400/80 mb-2">
            Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Experience
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            Roles where I delivered real-world features, solved problems, and
            grew as a developer.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-slate-600 to-blue-400 opacity-60" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isLast = index === experiences.length - 1;

              return (
                <div
                  key={index}
                  className={`relative flex items-start md:items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* animated timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                    <div className="h-4 w-4 rounded-full bg-blue-500 border-4 border-slate-900 shadow-[0_0_25px_rgba(59,130,246,1)] animate-pulse" />
                    {!isLast && (
                      <div className="hidden md:block w-px flex-1 bg-gradient-to-b from-blue-500/70 to-blue-400/0 mt-1" />
                    )}
                  </div>

                  {/* animated card */}
                  <div
                    style={{ transitionDelay: `${index * 150}ms` }}
                    className={`
                      relative w-full md:w-1/2 mt-4 md:mt-0 
                      transform transition-all duration-700 ease-out
                      ${
                        mounted
                          ? isLeft
                            ? "opacity-100 translate-x-0"
                            : "opacity-100 translate-x-0"
                          : isLeft
                          ? "opacity-0 -translate-x-10"
                          : "opacity-0 translate-x-10"
                      }
                    `}
                  >
                    <div
                      className="
                        group bg-slate-900/70 backdrop-blur-xl border border-slate-800
                        rounded-2xl p-6 shadow-xl
                        hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
                        hover:scale-[1.03] hover:-translate-y-2
                        transition-all duration-500 ease-out
                      "
                    >
                      {/* role + company */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-blue-300">
                            {exp.role}
                          </h3>

                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/40 hover:decoration-blue-300 transition"
                          >
                            {exp.company}
                          </a>
                        </div>

                        <div className="text-right">
                          <span className="inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                            {exp.type}
                          </span>
                          <p className="text-slate-300/70 text-xs mt-1">
                            {exp.period}
                          </p>
                        </div>
                      </div>

                      {/* description */}
                      <p className="text-slate-200/90 text-[15px] leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 group-hover:opacity-100 transition" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
