import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Careers.css";

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers-page">
      {/* ===============================
          HERO SECTION (Parallax)
      =============================== */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(9, 9, 9, 0.6), rgba(20, 5, 5, 0.7)), url('/carrer1.webp')",
        }}
      >
        <div className="hero-overlay">
          <div className="hero-text">
            <h2>Join Our Team</h2>
            <p>
              At Uvaacha Enterprises Pvt Ltd, we empower passionate professionals
              to drive innovation in telecom and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
          CURRENT OPENINGS
      =============================== */}
      <section className="openings-section">
        <h2 className="section-title">Current Openings</h2>

        <div className="job-list">
          {/* JOB 1 - Play School Educator */}
          <div className="job-card">
            <h3>Play School Educator</h3>
            <div className="job-details">
              <p><strong>Organization:</strong> The Uvaacha International School</p>
              <p><strong>Location:</strong> India</p>
              <p><strong>Department:</strong> Early Childhood Education</p>
              <p><strong>Employment Type:</strong> Full-Time</p>
            </div>

            <h4>Role Overview</h4>
            <p>
              Passionate about nurturing young children through play, stories,
              activities and creative classroom experiences? Join our team to
              help build a modern play school where early learners feel safe,
              confident and excited to learn.
            </p>

            <h4>Requirements</h4>
            <ul>
              <li>A passion for early childhood education and child development</li>
              <li>A background in preschool teaching, childcare, education or a related field</li>
              <li>Ability to lead play-based activities, stories, art, music and basic learning routines</li>
            </ul>

            <h4>How to Apply</h4>
            <p>
              Send your CV to: <a href="mailto:info@uvaacha.co.in" className="email-link">info@uvaacha.co.in</a>
            </p>
          </div>

          {/* JOB 2 - BSC Chemistry Intern */}
          <div className="job-card">
            <h3>BSC Chemistry Intern</h3>
            <div className="job-details">
              <p><strong>Organization:</strong> Uvaacha Enterprises Pvt Ltd</p>
              <p><strong>Location:</strong> India</p>
              <p><strong>Department:</strong> Research & Development</p>
              <p><strong>Employment Type:</strong> Internship</p>
            </div>

            <h4>Role Overview</h4>
            <p>
              Passionate about applying your Chemistry knowledge in a real-world 
              environment? We have an opportunity for you! Join our research team 
              to gain hands-on experience in laboratory work and contribute to 
              innovative projects.
            </p>

            <h4>Requirements</h4>
            <ul>
              <li>Currently pursuing a BSc in Chemistry</li>
              <li>Basic laboratory skills and familiarity with lab equipment</li>
              <li>Eagerness to learn and assist in research projects</li>
            </ul>

            <h4>How to Apply</h4>
            <p>
              Send your CV to: <a href="mailto:info@uvaacha.co.in" className="email-link">info@uvaacha.co.in</a>
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
          CTA SECTION (same as Banking)
      =============================== */}
      <section className="careers-footer">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Be Part of Our Growth Story</h2>
          <p>
            Build a future where innovation and technology empower people and
            businesses to connect, create and grow. Join our journey today.
          </p>

          {/* ✅ Same Get in Touch Button as Banking.jsx */}
          <motion.a
            href="/contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Uvaacha Enterprises Pvt Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
