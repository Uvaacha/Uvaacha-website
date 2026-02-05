import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
  const navigate = useNavigate();

  // ✅ Redirect to Contact page when button is clicked
  const handleContactRedirect = () => {
    navigate("/contact");
  };

  return (
    <div className="about-page">
      {/* ===============================
          HERO SECTION
      =============================== */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url("/About-image1.webp")`,
        }}
      >
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1>
              Empowering Innovation. Enabling Growth.
              <br />
              <span>
                At Uvaacha Enterprises Pvt Ltd, we blend technology and vision
                to create impactful solutions.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ===============================
          WHO WE ARE SECTION
      =============================== */}
      <section className="who-we-are">
        <div className="who-container">
          <div className="who-text">
            <h2>Who We Are</h2>
            <p>
              Uvaacha Enterprises Pvt Ltd is a forward-thinking technology and
              business solutions company committed to driving transformation,
              innovation and success for organizations worldwide.
            </p>
            <p>
              Our expertise spans software development, digital transformation,
              telecom and enterprise solutions. We bring clarity, creativity and
              commitment to every project — ensuring measurable results and
              long-term impact.
            </p>
          </div>
          <div className="who-image">
            <img src="/question.webp" alt="Who We Are" />
          </div>
        </div>
      </section>

      {/* ===============================
          MISSION, VISION & CORE VALUES
      =============================== */}
      <section className="mission-vision">
        <h2>Our Mission, Vision & Core Values</h2>
        <div className="mission-container">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To empower businesses with cutting-edge technology that enhances
              efficiency, drives innovation and improves customer experiences.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              To be a trusted global technology partner recognized for
              innovation, reliability and excellence in every solution we
              deliver.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Core Values</h3>
            <ul>
              <li>Clarity & Transparency</li>
              <li>Innovation-Driven Thinking</li>
              <li>Inclusivity & Empowerment</li>
              <li>Quality Excellence</li>
              <li>Integrity in Action</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===============================
          INDUSTRIES SECTION
      =============================== */}
      <section className="industries">
        <h2>Driving Digital Transformation Across Industries</h2>
        <div className="industries-grid">
          <div className="industry-card">
            <span className="industry-icon">🤖</span>
            <h3>Artificial Intelligence & Automation</h3>
            <p>
              Harnessing AI and intelligent automation to drive efficiency,
              innovation and predictive decision-making across enterprise
              systems.
            </p>
          </div>

          <div className="industry-card">
            <span className="industry-icon">📡</span>
            <h3>5G & Telecom Solutions</h3>
            <p>
              Building advanced communication infrastructure and network systems
              that power the connected world through 5G and IoT integration.
            </p>
          </div>

          <div className="industry-card">
            <span className="industry-icon">☁️</span>
            <h3>Cloud & Digital Infrastructure</h3>
            <p>
              Designing scalable cloud ecosystems, enabling secure data flow and
              digital agility for businesses in the modern economy.
            </p>
          </div>

          <div className="industry-card">
            <span className="industry-icon">💼</span>
            <h3>Enterprise Transformation</h3>
            <p>
              Empowering organizations with agile solutions, smart analytics,
              and custom enterprise systems that accelerate digital
              transformation.
            </p>
          </div>

          <div className="industry-card">
            <span className="industry-icon">🧬</span>
            <h3>Healthcare Technology</h3>
            <p>
              Delivering advanced healthcare IT systems and digital health
              solutions that improve patient care and operational efficiency.
            </p>
          </div>

          <div className="industry-card">
            <span className="industry-icon">🏭</span>
            <h3>Manufacturing & Industrial Innovation</h3>
            <p>
              Merging IoT, automation and smart production lines to create
              sustainable, efficient and future-ready manufacturing systems.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
          SUSTAINABILITY SECTION
      =============================== */}
      <section
        className="sustainability-section"
        style={{
          backgroundImage: `url("/Aboutus2.webp")`,
        }}
      >
        <div className="sustainability-overlay">
          <div className="sustainability-content">
            <h2>Building a Smarter, Sustainable Future Together</h2>
            <p>
              At Uvaacha, sustainability is at the core of our mission. We
              integrate responsible practices and innovative technologies to
              ensure every solution contributes to a more connected, efficient,
              and environmentally conscious world.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
          FINAL CTA SECTION
      =============================== */}
      <section className="final-cta">
        <h2>Partner with Uvaacha — where innovation meets integrity.</h2>
        <button className="cta-button" onClick={handleContactRedirect}>
          Let’s Connect
        </button>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2025 Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
