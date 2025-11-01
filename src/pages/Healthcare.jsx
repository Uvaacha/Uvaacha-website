import React from "react";
import "./Healthcare.css";

const Healthcare = () => {
  // Smooth scroll to the Core section
  const scrollToCoreSolutions = () => {
    const section = document.getElementById("core-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section
        className="healthcare-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Health-Hero.jpg)`,
        }}
      >
        <div className="healthcare-overlay">
          <div className="healthcare-content">
            <h1>Digital Health. Human Touch.</h1>
            <p>
              Empowering healthcare providers to deliver smarter, faster and
              more compassionate care through technology and innovation.
            </p>

            <button className="healthcare-btn" onClick={scrollToCoreSolutions}>
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* ================= INNOVATION SECTION ================= */}
      <section className="innovation-section">
        <div className="innovation-container">
          <div className="innovation-text">
            <h2>Transforming Healthcare Systems with Innovation</h2>
            <p>
              We collaborate with hospitals, clinics and health-tech innovators
              to create digital ecosystems that enhance patient outcomes,
              streamline operations and safeguard medical data integrity.
            </p>
          </div>

          <div className="innovation-image">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare1.jpg`}
              alt="Transforming Healthcare Systems"
            />
          </div>
        </div>
      </section>

      {/* ================= CORE HEALTHCARE SOLUTIONS ================= */}
      <section id="core-section" className="core-section">
        <h2 className="core-heading">Our Core Healthcare Solutions</h2>
        <div className="core-container">
          <div className="core-card">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare2.jpeg`}
              alt="EHR & Telemedicine"
            />
            <div className="core-text">
              <h3>EHR & Telemedicine</h3>
              <p>
                Unified electronic health records and teleconsultation platforms
                for efficient, connected patient management.
              </p>
            </div>
          </div>

          <div className="core-card">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare3.jpeg`}
              alt="Patient Experience Platforms"
            />
            <div className="core-text">
              <h3>Patient Experience Platforms</h3>
              <p>
                Empower patients through mobile-first apps, portals and
                self-service solutions for better accessibility and satisfaction.
              </p>
            </div>
          </div>

          <div className="core-card">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare4.jpg`}
              alt="AI & Predictive Analytics"
            />
            <div className="core-text">
              <h3>AI & Predictive Analytics</h3>
              <p>
                AI-driven insights that improve diagnostics, predict outcomes,
                and enable proactive healthcare decisions.
              </p>
            </div>
          </div>

          <div className="core-card">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare5.jpg`}
              alt="IoT & Smart Medical Devices"
            />
            <div className="core-text">
              <h3>IoT & Smart Medical Devices</h3>
              <p>
                Real-time monitoring through connected devices and wearables for
                smarter, continuous patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DATA-DRIVEN INSIGHTS SECTION ================= */}
      <section className="data-section">
        <div className="data-container">
          <div className="data-text">
            <h2>Data-Driven Insights for Smarter Decisions</h2>
            <p>
              Turn medical data into meaningful insights with AI and analytics,
              optimizing clinical workflows and enhancing care quality across
              your healthcare ecosystem.
            </p>
          </div>

          <div className="data-image">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare6.jpg`}
              alt="Data-Driven Insights"
            />
          </div>
        </div>
      </section>

      {/* ================= DRIVING INNOVATION SECTION ================= */}
      <section className="innovation-domains-section">
        <h2 className="domain-heading">
          Driving Innovation Across Healthcare Domains
        </h2>

        {/* Card 1 - Image Left */}
        <div className="domain-card">
          <div className="domain-image">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare7.jpeg`}
              alt="Hospital & Clinical Operations"
            />
          </div>
          <div className="domain-text">
            <h3>Hospital & Clinical Operations</h3>
            <p>
              Digitalize hospital operations from scheduling and billing to
              patient discharge with secure, integrated systems.
            </p>
          </div>
        </div>

        {/* Card 2 - Image Right */}
        <div className="domain-card reverse">
          <div className="domain-image">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare8.jpeg`}
              alt="Telehealth & Virtual Care"
            />
          </div>
          <div className="domain-text">
            <h3>Telehealth & Virtual Care</h3>
            <p>
              Empower virtual care with HIPAA-compliant, high-quality
              teleconsultation platforms for remote patient engagement.
            </p>
          </div>
        </div>

        {/* Card 3 - Image Left */}
        <div className="domain-card">
          <div className="domain-image">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare9.jpg`}
              alt="Health Data & Interoperability"
            />
          </div>
          <div className="domain-text">
            <h3>Health Data & Interoperability</h3>
            <p>
              Seamlessly connect EHRs, labs and IoT devices with interoperable,
              data-driven healthcare solutions.
            </p>
          </div>
        </div>

        {/* Card 4 - Image Right */}
        <div className="domain-card reverse">
          <div className="domain-image">
            <img
              src={`${process.env.PUBLIC_URL}/Healthcare10.jpg`}
              alt="Medical Device & IoT Integration"
            />
          </div>
          <div className="domain-text">
            <h3>Medical Device & IoT Integration</h3>
            <p>
              Integrate connected wearables and smart sensors to enhance
              diagnostics and real-time monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="healthcare-cta">
        <h2>Ready to revolutionize patient care?</h2>
        <p>Let’s build smarter healthcare systems — together.</p>
        <a href="/contact" className="cta-btn">
          Get in Touch
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2025 Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Healthcare;
