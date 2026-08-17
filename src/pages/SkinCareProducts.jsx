import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import "./ProductPages.css";

export default function SkinCareProducts() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="product-page">
      <section
        className="product-hero skincare-hero"
        style={{ backgroundImage: "url('/Mnaufacture5.webp')" }}
      >
        <div className="product-hero-content">
          <motion.span
            className="product-eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Manufacturing Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skin Care Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Coming Soon
          </motion.p>
        </div>
      </section>

      <section className="product-overview">
        <motion.div
          className="product-section-heading coming-soon-panel"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaLeaf />
          <h2>Coming Soon</h2>
        </motion.div>
      </section>

      <section className="product-cta">
        <h2>Skin Care Products</h2>
        <p>Coming Soon</p>
        <a href="/contact">Get in Touch</a>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
