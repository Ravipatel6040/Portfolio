import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function validate() {
    const e = {};

    if (!form.name.trim()) {
      e.name = "Name is required";
    }

    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Enter valid email";
    }

    if (!form.message.trim() || form.message.length < 10) {
      e.message = "Message must be at least 10 characters";
    }

    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const v = validate();
    setErrors(v);

    if (Object.keys(v).length) return;

    setStatus("sending");

    const mailto = `mailto:patelravi60404121@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    window.location.href = mailto;

    setStatus("success");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  const contactItems = [
    {
      icon: <FaEnvelope size={16} />,
      label: "Email",
      value: "patelravi60404121@gmail.com",
    },
    {
      icon: <FaPhone size={16} />,
      label: "Phone",
      value: "+91 9754976040",
    },
    {
      icon: <FaMapMarkerAlt size={16} />,
      label: "Location",
      value: "Indore, India",
    },
  ];

  const socials = [
    {
      Icon: FaGithub,
      href: "#",
      label: "GitHub",
    },
    {
      Icon: FaLinkedin,
      href: "#",
      label: "LinkedIn",
    },
    {
      Icon: FaTwitter,
      href: "#",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" style={s.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *{
          box-sizing:border-box;
        }

        .contact-section-bg {
          background-image:
            linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .cf-card {
          padding: 35px;
          border-radius: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          transition: 0.3s;
        }

        .cf-card:hover{
          border-color: rgba(34,197,94,0.25);
          box-shadow: 0 0 30px rgba(34,197,94,0.08);
        }

        .cf-input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          outline: none;
          color: white;
          font-size: 14px;
          transition: 0.3s;
        }

        .cf-input::placeholder{
          color: rgba(255,255,255,0.35);
        }

        .cf-input:focus{
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.1);
        }

        .cf-input.error{
          border-color:#f87171;
        }

        .info-item{
          display:flex;
          align-items:center;
          gap:15px;
          padding:14px;
          border-radius:14px;
          transition:0.3s;
        }

        .info-item:hover{
          background:rgba(34,197,94,0.05);
          transform:translateX(4px);
        }

        .social-btn{
          width:42px;
          height:42px;
          border-radius:12px;
          display:flex;
          align-items:center;
          justify-content:center;
          color:white;
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          transition:0.3s;
          text-decoration:none;
        }

        .social-btn:hover{
          background:#22c55e;
          color:black;
          transform:translateY(-3px);
        }

        .submit-btn{
          width:100%;
          padding:14px;
          border:none;
          border-radius:12px;
          background:#22c55e;
          color:black;
          font-size:15px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s;
        }

        .submit-btn:hover{
          background:#16a34a;
          transform:translateY(-2px);
        }

        .contact-grid{
          display:grid;
          grid-template-columns:1fr 1.2fr;
          gap:20px;
        }

        .contact-form-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 992px){

          .contact-grid{
            grid-template-columns:1fr;
          }

        }

        @media (max-width:768px){

          .contact-section{
            padding:70px 18px !important;
          }

          .cf-card{
            padding:24px 18px;
          }

          .contact-form-grid{
            grid-template-columns:1fr;
          }

          .footer-responsive{
            flex-direction:column;
            gap:6px;
            text-align:center;
          }

          .title-responsive{
            font-size:38px !important;
          }

        }

        @media (max-width:480px){

          .cf-card{
            padding:20px 15px;
          }

          .cf-input{
            font-size:13px;
            padding:12px 14px;
          }

          .submit-btn{
            font-size:13px;
          }

          .title-responsive{
            font-size:32px !important;
          }

        }
      `}</style>

      <div className="contact-section-bg" style={s.gridBg}></div>

      <div style={s.content}>
        {/* HEADER */}

        <div style={s.header}>
          <div style={s.label}>
            <span style={s.dot}></span>
            Let's Connect
          </div>

          <h2 style={s.title} className="title-responsive">
            Get In <span style={{ color: "#22c55e" }}>Touch</span>
          </h2>

          <p style={s.subtitle}>
            Have a project or opportunity? Let's build something great together.
          </p>
        </div>

        {/* GRID */}

        <div className="contact-grid">
          {/* LEFT */}

          <div className="cf-card">
            <h3 style={s.cardTitle}>Contact Info</h3>

            <p style={s.cardSub}>
              Feel free to reach out through any channel.
            </p>

            <div style={{ marginTop: 30 }}>
              {contactItems.map((item) => (
                <div className="info-item" key={item.label}>
                  <div style={s.iconBox}>{item.icon}</div>

                  <div>
                    <div style={s.infoLabel}>{item.label}</div>

                    <div style={s.infoValue}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={s.divider}></div>

            <div style={{ display: "flex", gap: 12 }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="social-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="cf-card">
            <h3 style={s.cardTitle}>Send Message</h3>

            <p style={s.cardSub}>
              I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ marginTop: 25 }}>
              <div className="contact-form-grid">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`cf-input ${
                      errors.name ? "error" : ""
                    }`}
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                  />

                  {errors.name && (
                    <p style={s.errText}>{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`cf-input ${
                      errors.email ? "error" : ""
                    }`}
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />

                  {errors.email && (
                    <p style={s.errText}>{errors.email}</p>
                  )}
                </div>
              </div>

              <div style={{ marginTop: 12 }}>
                <input
                  type="text"
                  placeholder="Subject"
                  className="cf-input"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      subject: e.target.value,
                    })
                  }
                />
              </div>

              <div style={{ marginTop: 12 }}>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className={`cf-input ${
                    errors.message ? "error" : ""
                  }`}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                ></textarea>

                {errors.message && (
                  <p style={s.errText}>{errors.message}</p>
                )}
              </div>

              <div style={{ marginTop: 16 }}>
                <button className="submit-btn">
                  {status === "sending"
                    ? "Opening..."
                    : "Send Message"}
                </button>
              </div>

              {status === "success" && (
                <div style={s.successMsg}>
                  ✅ Email client opened successfully!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FOOTER */}

        <div style={s.footer} className="footer-responsive">
          <span>© 2026 Ravi Patel</span>
          <span>Built with React ❤️</span>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    background: "#050a05",
    overflow: "hidden",
    padding: "90px 30px",
    color: "white",
  },

  gridBg: {
    position: "absolute",
    inset: 0,
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1100px",
    margin: "0 auto",
  },

  header: {
    textAlign: "center",
    marginBottom: "60px",
  },

  label: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 14px",
    borderRadius: "30px",
    border: "1px solid rgba(34,197,94,0.3)",
    color: "#22c55e",
    fontSize: 12,
    marginBottom: 18,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#22c55e",
  },

  title: {
    fontSize: "55px",
    fontWeight: 800,
    marginBottom: 12,
    lineHeight: 1.1,
  },

  subtitle: {
    maxWidth: 550,
    margin: "0 auto",
    color: "rgba(255,255,255,0.6)",
    lineHeight: 1.7,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 6,
  },

  cardSub: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    background: "rgba(34,197,94,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#22c55e",
  },

  infoLabel: {
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
  },

  infoValue: {
    fontSize: 14,
    marginTop: 4,
  },

  divider: {
    height: 1,
    background: "rgba(255,255,255,0.08)",
    margin: "24px 0",
  },

  errText: {
    fontSize: 12,
    color: "#f87171",
    marginTop: 4,
  },

  successMsg: {
    marginTop: 14,
    padding: "12px",
    borderRadius: 12,
    background: "rgba(34,197,94,0.08)",
    border: "1px solid rgba(34,197,94,0.25)",
    color: "#4ade80",
    fontSize: 14,
  },

  footer: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    color: "rgba(255,255,255,0.5)",
    fontSize: 14,
  },
};