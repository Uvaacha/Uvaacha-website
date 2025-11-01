import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* ==============================
          HERO SECTION (PARALLAX)
      =============================== */}
      <section className="home-hero">
        <video
          className="home-video"
          autoPlay
          loop
          muted
          playsInline
          src="/Home.mp4"
          type="video/mp4"
        ></video>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1>Where Every Expression Finds Its Voice</h1>
          <p>Innovation • Technology • Growth</p>
        </motion.div>
      </section>

      {/* ==============================
          SECTION 2.1 — FUTURE PROOFING
      =============================== */}
      <section className="future-section white-theme">
        <div className="future-container">
          <motion.div
            className="future-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2>
              Future-Proofing Business: The Power of Flexibility and Creativity
            </h2>
            <p>
              The global business environment is changing faster than ever and
              companies that stay flexible and creative are the ones that
              succeed. Agility helps them adjust quickly when challenges arise,
              while innovation gives them the tools to find new solutions and
              opportunities.
            </p>
          </motion.div>

          <motion.div
            className="future-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src="/Home-1.jpg" alt="Future-Proofing Business" />
          </motion.div>
        </div>
      </section>

      {/* ==============================
          SECTION 2.2 — 360° VALUE
      =============================== */}
      <section className="value-section-alt">
        <motion.div
          className="value-container-alt"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="value-image-alt">
            <img src="/360.jpg" alt="360° Value" />
          </div>

          <div className="value-text-alt">
            <h2>360° Value: More Than Business Results</h2>
            <p>
              At Uvaacha Enterprises Pvt Ltd, we believe that success is measured
              not only by numbers, but by impact. Our 360° approach creates value
              through innovation, human connection and sustainability — building
              businesses that are agile, resilient and ready for the future.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ==============================
          SECTION 2.3 — REDEFINING PERFORMANCE
      =============================== */}
      <section className="performance-section">
        <motion.div
          className="performance-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* TEXT ON LEFT */}
          <div className="performance-text">
            <h2>Redefining Performance and Efficiency</h2>
            <p>
              Redefining performance and efficiency is at the heart of everything
              we do. We empower your business to reach new heights by maximizing
              productivity, optimizing processes and delivering measurable results.
            </p>
          </div>

          {/* IMAGE ON RIGHT */}
          <div className="performance-image">
            <img
              src="/Home-3.jpg"
              alt="Redefining Performance and Efficiency"
            />
          </div>
        </motion.div>
      </section>

      {/* ==============================
          SECTION 2.5 — FUTURE CTA
      =============================== */}
      <section className="future-cta">
        <motion.div
          className="future-cta-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Let’s Shape the Future — Together</h2>
          <p>
            Creating innovative digital solutions that help businesses grow,
            connect and lead.
          </p>

          {/* ✅ Direct link for instant navigation (no scroll animation) */}
          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Uvaacha Enterprises Pvt Ltd. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
