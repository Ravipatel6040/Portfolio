import React from "react";
import { motion } from "framer-motion";

// Images
import ProjectBg1 from "../assets/Images/project01.png";
import ProjectBg2 from "../assets/Images/project02.png";
import ProjectBg3 from "../assets/Images/project03.png";

const projects = [
  {
    title: "IEFP India – Organic Products E-Commerce Platform",
    description:
      "Built a responsive organic products e-commerce platform with product catalog and order management features. Integrated product and category APIs with validation, error handling, optimized performance, and fully responsive UI.",
    image: ProjectBg1,
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "https://iefpindia.com/",
    github: "https://github.com/your-repo",
  },
  {
    title: "DatePe Admin Dashboard",
    description:
      "Designed and developed a modern admin dashboard with user management, subscriptions, abuse reports, and analytics overview.",
    image: ProjectBg2,
    tech: ["React.js", "Tailwind CSS", "MUI"],
    demo: "https://date-pe-admin-dasboard.vercel.app/",
    github: "https://github.com/Ravipatel6040/DatePe_Admin_Dasboard",
  },
  {
    title: "Ice-Cream-Shop",
    description:
      "A responsive ice-cream shop website showcasing multiple flavors, categories, and offers. Built with clean UI, smooth animations, and mobile-friendly design to provide an engaging user experience.",
    image: ProjectBg3,
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    demo: "https://ice-cream-shop-red.vercel.app/",
    github: "https://github.com/Ravipatel6040/ice-cream-shop",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col bg-white border border-slate-200 rounded-lg
                         transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-40 m-2 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="px-4 py-3">
                <h6 className="mb-2 text-slate-800 text-lg font-semibold">
                  {project.title}
                </h6>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full
                                 transition group-hover:bg-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="px-4 pb-4 mt-auto flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-slate-800 py-2 px-4 text-sm text-white
                             transition-all duration-300 hover:bg-slate-700 hover:scale-105"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-800 py-2 px-4 text-sm text-slate-800
                             transition-all duration-300 hover:bg-slate-100 hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
