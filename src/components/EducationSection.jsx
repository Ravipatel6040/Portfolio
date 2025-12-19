import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Computer Science (CS)",
    school: "Awadhesh Pratap Singh University, Rewa (M.P.)",
    link: "https://apsurewa.ac.in/en/",
    year: "2021 – 2023",
    description:
      "Completed Master's degree with a focus on advanced computer science concepts and real-world application development.",
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white" id="education">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-5xl font-extrabold text-center mb-16 tracking-wide">
          Education
        </h2>

        <div className="relative border-l border-gray-700">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-14 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -left-3 border-2 border-white shadow-lg shadow-blue-500/50"></div>

              {/* Card */}
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10
                              hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20
                              transition-all duration-300">
                
                <h3 className="text-2xl font-bold text-blue-400 drop-shadow-sm">
                  {edu.degree}
                </h3>

                {/* Clickable University Link */}
                <a 
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-300 mt-1 inline-block hover:text-purple-400 transition-colors duration-300"
                >
                  {edu.school}
                </a>

                <span className="text-sm text-gray-400 block mt-1">
                  {edu.year}
                </span>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
