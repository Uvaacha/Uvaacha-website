import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_nt903ej", "template_rokwm0p", form.current, {
        publicKey: "GaZQ7ciywACXfY5-J",
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
        }
      );
  };

  return (
    <div className="contact-modern">
      {/* ================= HERO SECTION ================= */}
      <section
        className="hero-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 26, 51, 0.7), rgba(0, 43, 91, 0.8)), url('/contactus.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay">
          <div className="hero-center">
            <h1>Contact Us</h1>
            <p>
              Let’s connect — we’re always open to new ideas, collaborations
              and opportunities. Reach out and our team will get back to you
              soon.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-container">
            {/* LEFT SIDE */}
            <div className="contact-info">
              <h2>Contact</h2>

              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Address</h3>
                  <p>
                    3-89/15-22/9-101, KB Nilayam, <br />
                    Vigneshwar Nagar, Tiruchanur <br />
                    Tirupati, Andhra Pradesh – 517503 <br />
                    India
                  </p>
                </div>
              </div>

              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+919010999144" className="phone-link">
                      +91 90109 99144
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>
                    <a
                      href="mailto:info@uvaacha.co.in"
                      className="email-link"
                    >
                      info@uvaacha.co.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="contact-form">
              <h2 className="form-title">Reach Out to Us</h2>
              <p className="form-subtitle">
                Have questions, collaborations or opportunities? Drop us a
                message and we’ll get back to you soon.
              </p>

              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Name" required />
                <div className="form-row">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                  <input type="tel" name="user_phone" placeholder="Phone" />
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us how we can help"
                  rows="4"
                  required
                ></textarea>

                <button type="submit" disabled={status === "sending"}>
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "✅ Sent Successfully!"
                    : "Submit"}
                </button>

                {status === "error" && (
                  <p className="error-msg">
                    ❌ Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2025 Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
