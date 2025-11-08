import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaBalanceScale,
  FaRobot,
  FaDatabase,
} from "react-icons/fa";
import "./Banking.css";

export default function Banking() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToDomain = () => {
    const section = document.getElementById("domain-expertise");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banking-page">
      {/* ==========================
          HERO SECTION
      ========================== */}
      <section className="banking-hero">
        <div
          className="banking-hero-bg"
          style={{
            backgroundImage: `url("/Banking-Hero.webp")`,
          }}
        ></div>

        <div className="banking-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering the Future of Banking & Financial Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Secure. Intelligent. Compliant.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="banking-btn"
            onClick={scrollToDomain}
          >
            Explore Our Capabilities
          </motion.button>
        </div>
      </section>

      {/* ==========================
          DOMAIN EXPERTISE SECTION (CENTERED)
      ========================== */}
      <section className="banking-domain" id="domain-expertise">
        <motion.div
          className="domain-center-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <h2>Domain Expertise You Can Bank On</h2>
          <p>
            In a rapidly evolving financial ecosystem, institutions must innovate
            responsibly — balancing agility with compliance and performance with
            trust. With deep BFS domain expertise, we help banks, insurers and
            financial organizations accelerate transformation, enhance resilience,
            and deliver exceptional customer experiences.
          </p>
        </motion.div>
      </section>

      {/* ==========================
          TESTING SECTION
      ========================== */}
      <section className="banking-testing">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Assuring Quality, Security & Compliance
        </motion.h2>

        <div className="testing-grid">
          {[
            {
              icon: <FaCogs />,
              title: "Functional Testing",
              desc: "Validate every transaction and workflow to ensure accuracy and efficiency.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Security Testing",
              desc: "Protect sensitive data with vulnerability assessments and penetration testing.",
            },
            {
              icon: <FaChartLine />,
              title: "Performance Testing",
              desc: "Ensure stability and responsiveness under high transaction volumes.",
            },
            {
              icon: <FaBalanceScale />,
              title: "Compliance Testing",
              desc: "Stay audit-ready with AML, KYC, GDPR, PCI-DSS and other frameworks.",
            },
            {
              icon: <FaRobot />,
              title: "Automation Testing",
              desc: "Accelerate releases and improve quality through automation frameworks.",
            },
            {
              icon: <FaDatabase />,
              title: "User Acceptance Testing",
              desc: "Validate usability and business alignment with real-world scenarios.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="testing-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="testing-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================
          MANAGED SERVICES SECTION
      ========================== */}
      <section className="banking-managed">
        <div
          className="managed-bg"
          style={{
            backgroundImage: `url("/Banking-3.webp")`,
          }}
        ></div>

        <div className="managed-overlay">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Managed Services for BFS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Empowering banking operations with scalable, secure and reliable managed
            services — ensuring agility and performance across every layer of BFS
            infrastructure.
          </motion.p>

          <div className="managed-grid">
            {[
              {
                img: "/Application-Management.webp",
                title: "Application Management",
                desc: "End-to-end management of core banking and trading platforms for reliability and agility.",
              },
              {
                img: "/Infrastructure-Management.webp",
                title: "Infrastructure Management",
                desc: "24/7 monitoring and cloud readiness for seamless availability and disaster recovery.",
              },
              {
                img: "/Security-banking.webp",
                title: "Security Operations",
                desc: "Continuous threat detection, incident response and vulnerability management.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="managed-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================
          CALL TO ACTION SECTION
      ========================== */}
      <section className="banking-cta">
        <div className="cta-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Redefine Digital Trust?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Let's build the future of banking—together.
          </motion.p>

          <motion.a
            href="/contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}