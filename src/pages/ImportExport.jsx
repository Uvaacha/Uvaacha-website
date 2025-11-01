import React from "react";
import { motion } from "framer-motion";
import "./ImportExport.css";

export default function ImportExport() {
  return (
    <div className="importexport-page">
      {/* ================================
          HERO SECTION
      ================================= */}
      <section
        className="importexport-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Import-hero.jpg)`,
        }}
      >
        <div className="importexport-overlay">
          <motion.div
            className="importexport-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Empowering Global Trade Through Trust & Technology</h1>
            <p>
              Uvaacha connects producers, buyers and markets across borders
              with transparency and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================
          GLOBAL CONNECTIONS SECTION
      ================================= */}
      <section className="global-connections">
        <motion.div
          className="connections-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Global Connections. Local Integrity.</h2>
          <p>
            Uvaacha stands as a bridge between continents — enabling efficient,
            transparent and responsible international trade. Our approach is
            rooted in reliability, ethics and precision — empowering both
            established businesses and first-time exporters to succeed in
            today’s competitive global markets.
          </p>
        </motion.div>

        <div className="connection-grid">
          <motion.div
            className="connection-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>🌍 Global Reach</h3>
            <p>
              From Asia to Europe, we connect suppliers, buyers and
              distributors through a trusted global network.
            </p>
          </motion.div>

          <motion.div
            className="connection-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>🤝 Ethical Partnerships</h3>
            <p>
              We prioritize transparency, fair trade practices and lasting
              business relationships that build shared success.
            </p>
          </motion.div>

          <motion.div
            className="connection-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>⚙️ Operational Excellence</h3>
            <p>
              Our processes are driven by innovation, precision and quality
              control that exceed global standards.
            </p>
          </motion.div>

          <motion.div
            className="connection-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>💡 Sustainable Growth</h3>
            <p>
              Our commitment to responsible, scalable trade ensures prosperity
              for all stakeholders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================
          OUR CORE SERVICES SECTION
      ================================= */}
      <section className="core-services">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Core Services
        </motion.h2>

        <div className="services-grid">
          {/* 1️⃣ Global Sourcing */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Global-Sourcing-Services.jpg`}
              alt="Global Sourcing"
            />
            <h3>Global Sourcing</h3>
            <p>
              We partner with verified suppliers to deliver top-quality goods,
              maintaining integrity and trust throughout every trade.
            </p>
          </motion.div>

          {/* 2️⃣ Logistics & Warehousing */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Warehouse-logistics.jpg`}
              alt="Logistics and Warehousing"
            />
            <h3>Logistics & Warehousing</h3>
            <p>
              From customs clearance to delivery, we ensure seamless logistics
              and coordination.
            </p>
          </motion.div>

          {/* 3️⃣ Contract Negotiation */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/contract negotiation.jpg`}
              alt="Contract Negotiation"
            />
            <h3>Contract Negotiation</h3>
            <p>
              Our experts facilitate trade agreements with clarity, compliance,
              and precision.
            </p>
          </motion.div>

          {/* 4️⃣ Market Expansion */}
          <motion.div
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/Market expansion.jpg`}
              alt="Market Expansion"
            />
            <h3>Market Expansion</h3>
            <p>
              We help businesses explore new territories and build a global
              footprint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================
          FUTURE OF GLOBAL TRADE SECTION
      ================================= */}
      <section
        className="future-trade-section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/import1.jpeg)`,
        }}
      >
        <div className="future-overlay">
          <motion.div
            className="future-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2>Empowering the Future of Global Trade</h2>
            <p>
              We simplify global commerce through technology, innovation and
              trust — empowering businesses to expand confidently and ethically.
            </p>
          </motion.div>

          <div className="future-grid">
            <motion.div
              className="future-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>🌐 Global Market Access</h3>
              <p>
                We connect local producers with international buyers through our
                trusted ecosystem.
              </p>
            </motion.div>

            <motion.div
              className="future-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>⚙️ Operational Precision</h3>
              <p>
                Automation ensures accuracy, compliance and timely delivery
                every time.
              </p>
            </motion.div>

            <motion.div
              className="future-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>🤝 Ethical Trade Practices</h3>
              <p>
                We foster transparency and fairness across every transaction.
              </p>
            </motion.div>

            <motion.div
              className="future-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>🚀 Sustainable Growth</h3>
              <p>
                Through innovation and responsibility, we drive long-term growth
                for our partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================
          CALL TO ACTION SECTION
      ================================= */}
      <section className="trade-cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Trade Beyond Borders with Uvaacha</h2>
          <p>
            Partner with us to build sustainable, transparent and profitable
            international trade relationships.
          </p>

          {/* ✅ Direct instant redirect to Contact Us */}
          <a href="/contact" className="cta-button">
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2025 Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}

