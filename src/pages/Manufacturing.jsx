import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaLeaf,
  FaRobot,
  FaGlobe,
  FaIndustry,
  FaRegCheckCircle,
  FaSprayCan,
  FaVial,
} from "react-icons/fa";
import { GiSoap, GiPerfumeBottle, GiChemicalDrop } from "react-icons/gi";
import "./Manufacturing.css";

/* ===============================
   🔹 Animation variants for bullets
   =============================== */
const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Manufacturing() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const cosmeticIcons = [<FaFlask />, <FaLeaf />, <FaRobot />, <FaRegCheckCircle />];
  const perfumeIcons = [<GiPerfumeBottle />, <FaIndustry />, <FaSprayCan />, <FaVial />];
  const detergentIcons = [<GiSoap />, <GiChemicalDrop />, <FaFlask />, <FaGlobe />];
  const futureIcons = [<FaGlobe />, <FaIndustry />, <FaLeaf />, <FaRobot />];

  return (
    <div className="manufacturing-page">
      {/* ==============================
          HERO SECTION WITH FIXED VIDEO
      =============================== */}
      <div className="hero-video-container">
        <video
          className="hero-video"
          src="/Manufacture-Hero-1.webm"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      <section className="manufacturing-hero">
        <div className="hero-overlay">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1>Manufacturing Excellence</h1>
            <p>
              Precision, innovation and craftsmanship — redefining global
              manufacturing standards across cosmetics and perfumes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==============================
          INNOVATION MEETS PRECISION
      =============================== */}
      <section className="upgraded-overview">
        <h2>Innovation Meets Precision</h2>
        <p>
          We merge innovation, automation and precision engineering to craft
          solutions that transform the future of manufacturing — where every
          process is guided by data, design and excellence.
        </p>

        <div className="overview-card-grid">
          <div className="info-card">
            <h3>💡 Innovation</h3>
            <p>
              We drive innovation across every process — from material science
              to digital integration — ensuring superior product quality and
              sustainable growth.
            </p>
          </div>

          <div className="info-card">
            <h3>⚙️ Automation</h3>
            <p>
              Through intelligent automation, we enhance efficiency, reduce
              human error and empower scalable manufacturing that adapts to
              market demands.
            </p>
          </div>

          <div className="info-card">
            <h3>🧠 Intelligence</h3>
            <p>
              Our systems are built on AI and data-driven insights, enabling
              precision, predictive maintenance and smart manufacturing
              intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================
          COSMETICS MANUFACTURING
      =============================== */}
      <section className="feature-section light-bg">
        <div className="feature-content">
          <motion.div
            className="text-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Cosmetics Manufacturing</h2>
            <p>
              We blend scientific innovation with artistic formulation to
              produce exceptional skincare, haircare and beauty products —
              crafted to meet international standards of safety, quality and
              performance.
            </p>

            <motion.ul
              className="feature-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Custom R&D Formulations",
                "Organic & Vegan Options",
                "Automated Filling & Labeling",
                "Global Regulatory Compliance",
              ].map((item, i) => (
                <motion.li key={i} custom={i} variants={listVariants}>
                  <span className="icon">{cosmeticIcons[i]}</span> {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="image-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/Mnaufacture5.webp" alt="Cosmetics Manufacturing" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* ==============================
          PERFUME MANUFACTURING
      =============================== */}
      <section className="feature-section dark-bg perfume-section">
        <div className="feature-content reverse">
          <motion.div
            className="text-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Perfume Manufacturing</h2>
            <p>
              We capture emotion through scent — merging traditional perfumery
              with modern precision to create long-lasting, elegant fragrances
              for global brands.
            </p>

            <motion.ul
              className="feature-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Fragrance Development & Blending",
                "Private & White Label Solutions",
                "Luxury Packaging & Bottling",
                "IFRA Compliance & Quality Testing",
              ].map((item, i) => (
                <motion.li key={i} custom={i} variants={listVariants}>
                  <span className="icon">{perfumeIcons[i]}</span> {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="image-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/Mnaufacture6.webp" alt="Perfume Manufacturing" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* ==============================
          DETERGENT MANUFACTURING
      =============================== */}
      <section className="feature-section light-bg detergent-section">
        <div className="feature-content">
          <motion.div
            className="text-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Detergent Manufacturing</h2>
            <p>
              We engineer performance and sustainability into every formula —
              producing eco-friendly, high-efficiency cleaning solutions for
              homes and industries.
            </p>

            <motion.ul
              className="feature-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Biodegradable & Phosphate-Free Formulas",
                "Enzyme-Based Cleaning Systems",
                "Custom Packaging Solutions",
                "REACH & CLP Certification",
              ].map((item, i) => (
                <motion.li key={i} custom={i} variants={listVariants}>
                  <span className="icon">{detergentIcons[i]}</span> {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="image-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/Mnaufacture7.webp" alt="Detergent Manufacturing" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* ==============================
          FUTURE OF MANUFACTURING
      =============================== */}
      <section className="feature-section dark-bg future-section">
        <div className="feature-content">
          <motion.div
            className="text-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>The Future of Manufacturing</h2>
            <p>
              Uvaacha Enterprises is pioneering the next generation of
              manufacturing through AI integration, digital twins and smart
              analytics. Our facilities are built on sustainability, automation,
              and data-driven innovation — creating precision-engineered
              products that shape tomorrow's industries.
            </p>

            <motion.ul
              className="feature-list future-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "AI-Driven Production",
                "Real-Time Data Analytics",
                "Sustainable Smart Factories",
                "Global-Scale Automation",
              ].map((item, i) => (
                <motion.li key={i} custom={i} variants={listVariants}>
                  <span className="icon">{futureIcons[i]}</span> {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="image-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/Mnaufacture8.webp" alt="The Future of Manufacturing" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section light-bg">
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Innovating the Future of Manufacturing</h2>
          <p>
            With sustainability, automation and intelligence at the core — we're
            shaping smarter, more efficient industries.
          </p>
          <a href="/contact" className="cta-button">
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}