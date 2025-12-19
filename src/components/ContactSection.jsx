import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", honey: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    // simple honeypot check (should be empty)
    if (form.honey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      // FRONTEND ONLY: by default we'll open the user's email client as a fallback.
      // If you connect a backend, replace this block with a fetch/post to your API.

      const mailto = `mailto:your-email@example.com?subject=${encodeURIComponent(form.subject || "Contact from portfolio")}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;

      // try to open mail client (this is the safest frontend-only option)
      window.location.href = mailto;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", honey: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="w-full bg-black dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-gray-100">Get in touch</h2>
          <p className="mt-3 text-gray-300 dark:text-gray-300">I'd love to hear about your project or any opportunities. Send a message and I'll reply as soon as I can.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <div className="p-8 bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-md flex flex-col justify-between">
            <div className="rounded-2xl p-6 md:p-8 
                border border-gray-200 dark:border-gray-800
                bg-transparent">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Contact Information
              </h3>

              <p className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed">
                Prefer email? Use the form — or reach me directly at:
              </p>

              <ul className="mt-6 space-y-5">
                {/* Email */}
                <li className="group flex items-start gap-4 p-4 rounded-xl
                   hover:bg-[oklch(72.3%_0.219_149.579)]
                   transition-all duration-300">
                  <div className="p-2 rounded-lg 
                      bg-gray-100/60 dark:bg-gray-800/60
                      group-hover:bg-white/20">
                    <FaEnvelope className="text-gray-700 dark:text-gray-300
                              group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-white/80">
                      Email
                    </div>
                    <a
                      href="mailto:patelravi60404121@gmail.com"
                      className="font-medium group-hover:text-white"
                    >
                      patelravi60404121@gmail.com
                    </a>

                  </div>
                </li>

                {/* Phone */}
                <li className="group flex items-start gap-4 p-4 rounded-xl
                   hover:bg-[oklch(72.3%_0.219_149.579)]
                   transition-all duration-300">
                  <div className="p-2 rounded-lg 
                      bg-gray-100/60 dark:bg-gray-800/60
                      group-hover:bg-white/20">
                    <FaPhone className="text-gray-700 dark:text-gray-300
                            group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-white/80">
                      Phone
                    </div>
                    <div className="font-medium  group-hover:text-white">
                      +91 9754976040
                    </div>
                  </div>
                </li>

                {/* Location */}
                <li className="group flex items-start gap-4 p-4 rounded-xl
                   hover:bg-[oklch(72.3%_0.219_149.579)]
                   transition-all duration-300">
                  <div className="p-2 rounded-lg 
                      bg-gray-100/60 dark:bg-gray-800/60
                      group-hover:bg-white/20">
                    <FaMapMarkerAlt className="text-gray-700 dark:text-gray-300
                                  group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xl text-gray-500 dark:text-gray-400 group-hover:text-white/80">
                      Location
                    </div>
                    <div className="font-medium  group-hover:text-white">
                      Indore, India
                    </div>
                  </div>
                </li>
              </ul>
            </div>



            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-300 dark:text-gray-300">Follow me</h4>
              <div className="mt-3 flex items-center gap-4">
                <a
                  href="https://github.com/Ravipatel6040?tab=repositories"
                  aria-label="GitHub"
                  className="p-2 rounded-lg 
             hover:bg-[oklch(72.3%_0.219_149.579)] 
             transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ravi6040/"
                  aria-label="LinkedIn"
                  className="group p-2 rounded-lg
             hover:bg-[oklch(72.3%_0.219_149.579)]
             transition-all duration-300"
                >
                  <FaLinkedin
                    size={20}
                    className="group-hover:text-white transition-colors duration-300"
                  />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="group p-2 rounded-lg
             hover:bg-[oklch(72.3%_0.219_149.579)]
             transition-all duration-300"
                >
                  <FaTwitter
                    size={20}
                    className="group-hover:text-white transition-colors duration-300"
                  />
                </a>

              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="p-8 bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* honeypot (invisible to users) */}
              <input type="text" name="honey" value={form.honey} onChange={(e) => setForm({ ...form, honey: e.target.value })} autoComplete="off" className="hidden" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-300 dark:text-gray-200">Your name</span>
                  <input
                    className={`mt-2 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-0 dark:bg-gray-900 dark:border-gray-700 ${errors.name ? "border-red-400" : "border-gray-200"
                      }`}
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name}</span>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-300 dark:text-gray-200">Email</span>
                  <input
                    className={`mt-2 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-0 dark:bg-gray-900 dark:border-gray-700 ${errors.email ? "border-red-400" : "border-gray-200"
                      }`}
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email}</span>}
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-300 dark:text-gray-200">Subject</span>
                <input
                  className="mt-2 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 dark:bg-gray-900 dark:border-gray-700"
                  type="text"
                  placeholder="Project / Opportunity"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-300 dark:text-gray-200">Message</span>
                <textarea
                  className={`mt-2 px-3 py-2 rounded-lg border min-h-[140px] focus:outline-none focus:ring-2 focus:ring-offset-0 dark:bg-gray-900 dark:border-gray-700 ${errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message}</span>}
              </label>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                <button
                  type="button"
                  onClick={() => setForm({ name: "", email: "", subject: "", message: "", honey: "" })}
                  className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-200"
                >
                  Reset
                </button>

                {status === "success" && <span className="text-sm text-green-600">Message prep'd in your email client.</span>}
                {status === "error" && <span className="text-sm text-red-600">Something went wrong. Try again.</span>}
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Tip: connect a backend endpoint to send messages directly (replace mailto fallback).</p>
            </form>
          </div>
        </div>

        {/* small footer note */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">© {new Date().getFullYear()} Ravi Patel — Ravi patel Portfolio</p>
      </div>
    </section>
  );
}
