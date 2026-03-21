import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// 🔥 Three.js particles
const Particles = () => {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 5,
            ]}
          >
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial color="#6366f1" />
          </mesh>
        </Float>
      ))}
    </>
  );
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honey: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    if (form.honey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const mailto = `mailto:patelravi60404121@gmail.com?subject=${encodeURIComponent(
        form.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;

      window.location.href = mailto;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", honey: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full py-20 bg-black text-white overflow-hidden"
    >
      {/* 🔥 THREE.JS BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.6} />
          <Particles />
        </Canvas>
      </div>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/80 to-black z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Have a project or opportunity? Let’s connect and build something amazing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* LEFT CARD */}
          <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition">

            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

            <div className="space-y-5">
              {[
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  value: "patelravi60404121@gmail.com",
                },
                {
                  icon: <FaPhone />,
                  label: "Phone",
                  value: "+91 9754976040",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  value: "Indore, India",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-indigo-500/10 transition"
                >
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-lg bg-white/10 hover:bg-indigo-500/30 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-6 sm:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input type="text" className="hidden" />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  placeholder="Name"
                  className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
                <input
                  placeholder="Email"
                  className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>

              <input
                placeholder="Subject"
                className="p-3 w-full rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
              />

              <textarea
                placeholder="Message"
                className="p-3 w-full rounded-lg bg-gray-900 border border-gray-700 min-h-[120px] focus:ring-2 focus:ring-indigo-500"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm">Email client opened ✅</p>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Ravi Patel
        </p>
      </div>
    </section>
  );
}