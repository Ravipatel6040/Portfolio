import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Right Content */}
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I’m <span className="text-blue-400 font-semibold">Ravi Patel</span>,  
            a passionate MERN Stack Developer who loves creating modern, fast, and 
            user-friendly web applications. I enjoy turning ideas into real projects  
            using clean code and scalable architecture.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I focus on building full-stack applications with smooth performance,
            secure backend logic, and pixel-perfect responsive UI. I enjoy solving 
            real-world problems using JavaScript, React, Node.js, and MongoDB, and 
            I constantly work on improving my skills through hands-on projects.
          </p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-400">Name:</p>
              <p className="font-semibold">Ravi Patel</p>
            </div>
            <div>
              <p className="text-gray-400">Experience:</p>
              <p className="font-semibold">1+ Years</p>
            </div>
            <div>
              <p className="text-gray-400">Role:</p>
              <p className="font-semibold">MERN Stack Developer</p>
            </div>
            <div>
              <p className="text-gray-400">Location:</p>
              <p className="font-semibold">Indore, India</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/ravi6040/"
              target="_blank"
              className="text-blue-500 text-3xl hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Ravipatel6040"
              target="_blank"
              className="text-gray-300 text-3xl hover:text-white transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="inline-block bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
