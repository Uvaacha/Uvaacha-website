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
          {/* JOB 1 */}
          <div className="job-card">
            <h3>Telecom Billing Specialist</h3>
            <div className="job-details">
              <p><strong>Location:</strong> India</p>
              <p><strong>Department:</strong> IT / OSS-BSS</p>
              <p><strong>Employment Type:</strong> Full-Time</p>
            </div>

            <h4>Role Overview</h4>
            <p>
              We are seeking an experienced Telecom Billing Specialist to
              support, manage and enhance our billing systems. You’ll work with
              cross-functional teams to ensure billing accuracy, resolve disputes,
              and improve revenue assurance.
            </p>

            <h4>Key Responsibilities</h4>
            <ul>
              <li>Manage billing platforms (Amdocs, Ericsson BSCS, Oracle BRM, Huawei CBS).</li>
              <li>Analyze CDRs and identify billing anomalies.</li>
              <li>Configure pricing plans, discounts and promotions.</li>
              <li>Monitor and troubleshoot mediation, rating and invoicing modules.</li>
              <li>Collaborate with IT & Finance for revenue assurance.</li>
              <li>Participate in billing migrations, audits and compliance.</li>
            </ul>

            <h4>Requirements</h4>
            <ul>
              <li>3+ years in telecom billing systems (postpaid/prepaid).</li>
              <li>Strong knowledge of OSS/BSS frameworks.</li>
              <li>Familiar with SQL, Linux, APIs, billing databases.</li>
              <li>Understanding of mediation and charging mechanisms.</li>
              <li>Excellent problem-solving and communication skills.</li>
            </ul>
          </div>

          {/* JOB 2 */}
          <div className="job-card">
            <h3>Telecom Core Network Operations Engineer</h3>
            <div className="job-details">
              <p><strong>Location:</strong> India</p>
              <p><strong>Department:</strong> Network Operations</p>
              <p><strong>Employment Type:</strong> Full-Time | On-Call Rotation Required</p>
            </div>

            <h4>Role Overview</h4>
            <p>
              We’re looking for a Core Network Operations Engineer to oversee,
              maintain and optimize our core telecom infrastructure. You'll
              ensure high availability and performance across voice, data and
              signaling services.
            </p>

            <h4>Key Responsibilities</h4>
            <ul>
              <li>Operate and support MSC, MGW, HLR/HSS, STP, PCRF, IMS and EPC (MME, SGW, PGW).</li>
              <li>Monitor KPIs, alarms and network health.</li>
              <li>Perform maintenance, upgrades and patch management.</li>
              <li>Collaborate with vendors to resolve network issues.</li>
              <li>Execute failover testing and ensure DR readiness.</li>
              <li>Support integration of new services and expansions.</li>
            </ul>

            <h4>Requirements</h4>
            <ul>
              <li>5+ years in telecom core network operations.</li>
              <li>Hands-on with Ericsson, Nokia, Huawei and ZTE equipment.</li>
              <li>Deep understanding of 2G/3G/4G/5G Core Networks.</li>
              <li>Knowledge of SS7, Diameter, SIP, IP/MPLS networks.</li>
              <li>Excellent troubleshooting and 24x7 operational skills.</li>
            </ul>
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
