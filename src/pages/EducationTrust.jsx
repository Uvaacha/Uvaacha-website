import React from "react";
import "./EducationTrust.css";

function EducationTrust() {
  const heroImage = process.env.PUBLIC_URL + "/education-hero.jpeg";

  // ✅ Smooth scroll to Robotics, AI & Emerging Technologies section
  const scrollToTechSection = () => {
    const section = document.getElementById("education-tech");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="education-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="education-overlay">
          <div className="education-content">
            <h1>
              Empowering Minds Through{" "}
              <span className="highlight">Technology & Innovation</span>
            </h1>
            <p>
              At Uvaacha Vision, education meets innovation — nurturing young
              thinkers to become creators of tomorrow’s world.
            </p>

            {/* ✅ Scroll to "Robotics, AI & Emerging Technologies" */}
            <button className="cta-btn" onClick={scrollToTechSection}>
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* ============ TRANSFORMING EDUCATION SECTION ============ */}
      <section className="education-transform">
        <div className="transform-container">
          <h2>Transforming Education Through Innovation</h2>
          <p className="intro">
            At <span className="bold-blue">Uvaacha Vision</span>, we believe
            education is the greatest investment a society can make in its
            future. Our mission is to bridge the gap between traditional learning
            and the rapidly changing demands of a digital world.
          </p>

          <p className="secondary">
            We are redefining the classroom experience by integrating
            technology, creativity and emotional intelligence into every
            lesson — ensuring that students not only learn but also{" "}
            <span className="highlight-text">think, explore and innovate.</span>
          </p>

          <div className="cards-grid">
            <div className="edu-card bordered">
              <h3>🌍 Holistic Learning</h3>
              <p>
                A balanced approach combining academics, personal growth and
                moral values for complete character development.
              </p>
            </div>

            <div className="edu-card bordered">
              <h3>💡 Innovation-Driven</h3>
              <p>
                Advanced methodologies, robotics education and AI-integrated
                learning make students creators, not just learners.
              </p>
            </div>

            <div className="edu-card bordered">
              <h3>🤝 Empowering Educators</h3>
              <p>
                Teacher training programs that inspire educators to lead with
                creativity, technology and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ROBOTICS, AI & TECHNOLOGY SECTION ============ */}
      <section id="education-tech" className="education-tech">
        <div className="tech-container">
          <h2>Robotics, AI & Emerging Technologies</h2>
          <p className="tech-intro">
            Preparing students for the technology-driven world through hands-on
            learning, creativity and innovation across multiple domains of modern
            science and engineering.
          </p>

          <div className="tech-grid">
            <div className="tech-card">
              <img
                src={process.env.PUBLIC_URL + "/education1.jpg"}
                alt="AI & Coding"
              />
              <h3>AI & Coding</h3>
              <p>
                Learn to think algorithmically and build intelligent systems that
                can solve real-world problems using Artificial Intelligence.
              </p>
            </div>

            <div className="tech-card">
              <img
                src={process.env.PUBLIC_URL + "/education2.1.jpg"}
                alt="Hands-on Robotics"
              />
              <h3>Hands-on Robotics</h3>
              <p>
                Build and program robots using interactive kits, sensors and
                motors — learning mechanical, electrical and software design
                fundamentals.
              </p>
            </div>

            <div className="tech-card">
              <img
                src={process.env.PUBLIC_URL + "/education3.jpeg"}
                alt="Drone Technology"
              />
              <h3>Drone Technology</h3>
              <p>
                Understand aerodynamics, sensors and flight programming through
                drone kits — inspiring next-gen aerospace innovators.
              </p>
            </div>

            <div className="tech-card">
              <img
                src={process.env.PUBLIC_URL + "/3d1.JPG"}
                alt="3D Printing & Design"
              />
              <h3>3D Printing & Design</h3>
              <p>
                Learn the future of manufacturing with digital modeling and 3D
                printing — turning ideas into real prototypes through creative
                design.
              </p>
            </div>

            <div className="tech-card">
              <img
                src={process.env.PUBLIC_URL + "/education5.jpg"}
                alt="STEM Innovation Labs"
              />
              <h3>STEM Innovation Labs</h3>
              <p>
                Bridge science, technology, engineering and art with collaborative
                projects that spark imagination and teamwork.
              </p>
            </div>

            <div className="tech-card">
              <img
                src={process.env.PUBLIC_URL + "/edu-ai.JPG"}
                alt="AI in Education"
              />
              <h3>AI in Education</h3>
              <p>
                Explore how Artificial Intelligence is transforming classrooms,
                personalizing learning and empowering teachers with smart tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BUILDING IMPACT SECTION ============ */}
      <section className="impact-section">
        <div className="impact-simple">
          <h2>Building Impact That Lasts</h2>
          <p>
            Every great change begins with a small step — at{" "}
            <span className="highlight">Uvaacha Vision</span>, we’re on a mission
            to make learning more connected, creative and meaningful.
          </p>

          <p>
            As a growing startup, our focus isn’t just on technology — it’s on
            people. We work closely with schools, students and educators to bring
            hands-on innovation into classrooms, helping young minds learn by
            doing, imagining and creating.
          </p>

          <p>
            From early experiments with robotics and AI education to building
            real-world problem-solving programs, every project we take up brings us
            closer to shaping a more confident, skilled and curious generation.
          </p>

          <p className="impact-sub">
            We believe education should spark ideas, not just grades — and this
            belief drives everything we do.
          </p>
        </div>
      </section>

      {/* ============ FINAL CTA SECTION (MATCHING HEALTHCARE STYLE) ============ */}
      <section className="educationtrust-cta">
        <h2>Let’s Shape the Future — Together</h2>
        <p>
          Join us in redefining education for the next generation. Together, we can
          empower every child to dream, create and lead.
        </p>

        {/* ✅ Redirect to Contact page */}
        <a href="/contact" className="cta-btn">
          Contact Us
        </a>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Uvaacha Enterprises Pvt Ltd. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default EducationTrust;
