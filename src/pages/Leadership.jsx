import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Leadership.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Leadership() {
  useEffect(() => window.scrollTo(0, 0), []);

  const directors = [
    {
      name: "Bhavya Kora",
      title: "Managing Director & Chief Financial Officer (CFO)",
      img: "/bhavya.png",
      desc:
        "Oversees financial planning, strategy and compliance — ensuring sustainable growth through efficient fiscal management and governance.",
    },
    {
      name: "Likitha Tunga",
      title: "Director, Business Strategy & Partnerships",
      img: "/Liki.png",
      desc:
        "Focuses on strategic growth initiatives, business alliances and long-term partnerships that strengthen Uvaacha’s industry leadership.",
    },
    // {
    //   name: "Harika Ravitla",
    //   title: "Director, Operations & Delivery",
    //   img: "/harika.png",
    //   desc:
    //     "Leads operational excellence and project delivery, ensuring every client engagement meets Uvaacha’s high standards of quality and timeliness.",
    // },
    // {
    //   name: "Vignesh Tunga",
    //   title: "Vice Director, Marketing & Growth",
    //   img: "/vignesh.png",
    //   desc:
    //     "Guides global marketing and brand positioning efforts — expanding Uvaacha’s visibility through innovation and strategic outreach.",
    // },
  ];

  return (
    <div className="leadership">
      {/* ===========================
          HERO SECTION (PARALLAX FIXED)
      ============================ */}
      <section
        className="lead-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,26,51,0.7), rgba(0,43,91,0.8)), url('/Leadership.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // ✅ Parallax effect
        }}
        
      >
        <div className="lead-hero-content">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lead-title"
          >
            Leadership at <span>Uvaacha Enterprises</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lead-subtitle"
          >
            A dynamic team of leaders combining vision, innovation and
            excellence to drive sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* ===========================
          PHILOSOPHY SECTION
      ============================ */}
      <section className="lead-philosophy">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="section-heading"
        >
          Our Leadership Philosophy
        </motion.h2>

        <div className="philosophy-grid">
          <motion.div className="philosophy-card" variants={fadeUp}>
            <h3>Collaborative Decision-Making</h3>
            <p>
              Our directors combine cross-functional expertise to make balanced,
              informed strategic decisions that guide the company’s growth.
            </p>
          </motion.div>

          <motion.div className="philosophy-card" variants={fadeUp}>
            <h3>People-Centered Approach</h3>
            <p>
              We empower teams and clients alike, fostering a culture of
              inclusivity, integrity and innovation.
            </p>
          </motion.div>

          <motion.div className="philosophy-card" variants={fadeUp}>
            <h3>Future-Driven Vision</h3>
            <p>
              Our leadership stays ahead of industry trends to ensure Uvaacha
              remains agile, adaptive and value-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===========================
          DIRECTORS SECTION
      ============================ */}
      <section className="directors-section">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="section-heading"
        >
          Our Directors
        </motion.h2>

        <div className="directors-grid">
          {directors.map((d) => (
            <motion.div
              key={d.name}
              className="director-card"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
            >
              <img src={d.img} alt={d.name} className="director-img" />
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
              <p>{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===========================
          CTA SECTION
      ============================ */}
      <section className="leadership-cta white-theme">
        <h2>Ready to Lead the Future of Innovation?</h2>
        <p>Join forces with Uvaacha’s leadership — where ideas become impact.</p>
        <a href="/contact" className="cta-btn">
          Meet Our Team
        </a>
      </section>

      {/* ===========================
          FOOTER
      ============================ */}
      <footer className="footer">
        <p>© 2025 Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
