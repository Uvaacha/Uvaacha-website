import React, { useEffect } from "react";
import "./EducationTrust.css";

function EducationTrust() {
  const heroImage = process.env.PUBLIC_URL + "/education%20hero.png";

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Smooth scroll to the play school ideas section
  const scrollToLearningSection = () => {
    const section = document.getElementById("education-tech");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="education-page">
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
              Starting a Modern{" "}
              <span className="highlight">Play School</span>
            </h1>
            <p>
              At Uvaacha Vision, we are building a play school where children
              learn through play, creativity, care and modern teaching ideas.
            </p>

            {/* Scroll to play school ideas */}
            <button className="cta-btn" onClick={scrollToLearningSection}>
              Explore Our Vision
            </button>
          </div>
        </div>
      </section>

      {/* ============ TRANSFORMING EDUCATION SECTION ============ */}
      <section className="education-transform">
        <div className="transform-container">
          <h2>A Modern Play School for Young Learners</h2>
          <p className="intro">
            At <span className="bold-blue">Uvaacha Vision</span>, we believe
            early childhood education should feel joyful, safe and meaningful.
            Our play school will help children build confidence, curiosity and
            strong foundations through age-appropriate learning experiences.
          </p>

          <p className="secondary">
            We are designing classrooms that combine guided play, storytelling,
            movement, art, nature activities and emotional development so every
            child can{" "}
            <span className="highlight-text">learn, explore and grow.</span>
          </p>

          <div className="cards-grid">
            <div className="edu-card bordered">
              <h3>Holistic Learning</h3>
              <p>
                A balanced approach that supports language, social skills,
                creativity, movement and values from the earliest years.
              </p>
            </div>

            <div className="edu-card bordered">
              <h3>Modern Ideas</h3>
              <p>
                Activity-based methods, child-friendly spaces and creative
                teaching practices make learning natural and engaging.
              </p>
            </div>

            <div className="edu-card bordered">
              <h3>Caring Educators</h3>
              <p>
                Teachers guide children with patience, warmth and structure,
                helping each child feel seen, safe and encouraged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MODERN PLAY SCHOOL SECTION ============ */}
      <section id="education-tech" className="education-tech">
        <div className="tech-container">
          <h2>Play School With Modern Ideas</h2>
          <p className="tech-intro">
            Designed for early childhood, our learning approach blends play,
            discovery, creativity and daily routines that help children become
            confident, curious and school-ready.
          </p>

          <div className="tech-grid">
            <div className="tech-card accent-teal">
              <img
                src={process.env.PUBLIC_URL + "/creativity%20classroom.png"}
                alt="Creative Classrooms"
                loading="lazy"
              />
              <h3>Creative Classrooms</h3>
              <p>
                Bright, welcoming spaces where children can read, draw, build,
                imagine and interact with their teachers and friends.
              </p>
            </div>

            <div className="tech-card accent-sun">
              <img
                src={process.env.PUBLIC_URL + "/activity%20learning.png"}
                alt="Activity-Based Learning"
                loading="lazy"
              />
              <h3>Activity-Based Learning</h3>
              <p>
                Songs, stories, puzzles, games and hands-on activities help
                children understand ideas by doing and experiencing.
              </p>
            </div>

            <div className="tech-card accent-coral">
              <img
                src={process.env.PUBLIC_URL + "/language.png"}
                alt="Language and Confidence"
                loading="lazy"
              />
              <h3>Language & Confidence</h3>
              <p>
                Rhymes, storytelling, conversation circles and role play support
                vocabulary, expression and self-confidence.
              </p>
            </div>

            <div className="tech-card accent-lilac">
              <img
                src={process.env.PUBLIC_URL + "/art%20music.png"}
                alt="Art, Music and Movement"
                loading="lazy"
              />
              <h3>Art, Music & Movement</h3>
              <p>
                Drawing, craft, music, dance and physical play help children
                develop creativity, coordination and joyful expression.
              </p>
            </div>

            <div className="tech-card accent-mint">
              <img
                src={process.env.PUBLIC_URL + "/foundational%20summary.png"}
                alt="Foundational Numeracy"
                loading="lazy"
              />
              <h3>Foundational Numeracy</h3>
              <p>
                Early number sense, shapes, patterns and sorting are introduced
                through simple games and everyday classroom activities.
              </p>
            </div>

            <div className="tech-card accent-blue">
              <img
                src={process.env.PUBLIC_URL + "/parent%20meeting.png"}
                alt="Parent Partnership"
                loading="lazy"
              />
              <h3>Parent Partnership</h3>
              <p>
                Regular communication with families keeps each child's growth,
                habits and milestones supported both at school and at home.
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
            <span className="highlight">Uvaacha Vision</span>, we're on a mission
            to make learning more connected, creative and meaningful.
          </p>

          <p>
            As a growing startup, our focus is on children, families and
            educators. We are creating a warm play school environment where
            young minds learn by doing, imagining and creating.
          </p>

          <p>
            From planning child-friendly classrooms to building meaningful early
            learning programs, every step brings us closer to shaping a more
            confident, happy and curious generation.
          </p>

          <p className="impact-sub">
            We believe education should spark ideas, not just grades — and this
            belief drives everything we do.
          </p>
        </div>
      </section>

      {/* ============ FINAL CTA SECTION ============ */}
      <section className="educationtrust-cta">
        <h2>Let's Shape the Future — Together</h2>
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
    </div>
  );
}

export default EducationTrust;
