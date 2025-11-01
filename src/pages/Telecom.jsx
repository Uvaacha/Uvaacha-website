import React, { useEffect } from "react";
import "./Telecom.css";

const Telecom = () => {
  const services = [
    {
      img: "/Anteena.jpg",
      title: "Radio Access Network (RAN)",
      desc: "Delivering high-performance RAN with Open RAN, vRAN and advanced antenna systems for seamless connectivity.",
    },
    {
      img: "/5g.jpeg",
      title: "5G Core (5GC)",
      desc: "A cloud-native, secure and ultra-scalable 5G Core ensuring low latency and new digital possibilities.",
    },
    {
      img: "/transmission.jpeg",
      title: "Transmission Networks",
      desc: "Our transport networks ensure speed, capacity and reliability across RAN, Core and Cloud.",
    },
    {
      img: "/AI.jpg",
      title: "Automation & AI",
      desc: "AI-driven automation and analytics for predictive, intelligent and efficient telecom operations.",
    },
    {
      img: "/cloud.jpg",
      title: "Cloud in Telecom",
      desc: "Empowering telecom with agility, scalability and edge innovations through cloud adoption.",
    },
    {
      img: "/OBS.jpg",
      title: "OSS/BSS Systems",
      desc: "Integrated OSS/BSS for seamless network operations, real-time insights and improved customer experiences.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="telecom-wrapper">
      {/* ================= HERO SECTION ================= */}
      <section className="telecom-hero reveal">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          aria-hidden
        >
          <source src="/net-1.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <h1>Smarter Connectivity for a Digital Future</h1>
          <p>
            Empowering telecom transformation with innovation, intelligence and
            reliability.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="telecom-intro reveal">
        <div className="intro-content">
          <h2>Transforming Networks. Empowering Tomorrow.</h2>
          <p>
            We help telecom operators build agile, intelligent and
            high-performing networks powered by 5G, AI, Cloud and Automation —
            ensuring seamless connectivity and exceptional customer experiences.
          </p>
        </div>
      </section>

      {/* ================= FLIP CARDS ================= */}
      <section className="telecom-flip-section reveal">
        <h2>Our Key Focus Areas</h2>
        <div className="flip-card-grid">
          {services.map((item, idx) => (
            <article
              key={idx}
              className="flip-card reveal-card reveal"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flip-front">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="front-gradient" />
                <div className="front-title">
                  <h3>{item.title}</h3>
                </div>
              </div>
              <div className="flip-back">
                <div className="back-inner">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= MANAGED SERVICES ================= */}
      <section className="telecom-managed reveal">
        <div className="managed-content">
          <div className="managed-text">
            <h2>Managed Services that Redefine Performance</h2>
            <p>
              Our Managed Services empower telecom operators to focus on
              innovation while we handle operations, automation and performance
              management with AI-driven insights.
            </p>
            <p>
              We proactively manage networks, ensuring reliability,
              cost-efficiency and seamless service delivery in the 5G era and
              beyond.
            </p>
          </div>
          <div className="managed-image">
            <img
              src="/manged service.JPG"
              alt="Managed Services"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="telecom-cta reveal">
        <div className="cta-content">
          <h2>Building Intelligent Networks - Together</h2>
          <p>
            Partnering with enterprises to deliver next-gen telecom ecosystems
            that connect people, devices and businesses with speed and
            reliability.
          </p>
          {/* ✅ Instant redirect without scroll animation */}
          <a href="/contact" className="cta-btn">
            Let’s Collaborate
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2025 Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Telecom;
