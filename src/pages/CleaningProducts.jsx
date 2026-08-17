import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBath,
  FaHandSparkles,
  FaSprayCan,
  FaTint,
  FaCheckCircle,
} from "react-icons/fa";
import { GiSoap } from "react-icons/gi";
import "./ProductPages.css";

const cleaningProducts = [
  {
    title: "Floor Cleaning",
    icon: <FaSprayCan />,
    image: "/floorcleaner.png",
    description:
      "High-performance floor cleaning solutions made for shine, hygiene and everyday durability across homes and facilities.",
    points: ["Fresh fragrance", "Fast stain removal", "Safe daily use"],
  },
  {
    title: "Bathroom Cleaning",
    icon: <FaBath />,
    image: "/Toiletcleaner.png",
    description:
      "Powerful bathroom cleaners designed to remove scale, soap deposits and odour while leaving surfaces visibly fresh.",
    points: ["Limescale control", "Surface-safe formula", "Long-lasting freshness"],
  },
  {
    title: "Dishwash",
    icon: <GiSoap />,
    image: "/dishwash (2).png",
    description:
      "Dishwash liquids and gels that cut through grease quickly while staying gentle for routine kitchen use.",
    points: ["Grease cutting", "Easy rinse", "Pleasant aroma"],
  },
  {
    title: "Hand Wash",
    icon: <FaHandSparkles />,
    image: "/handwash.png",
    description:
      "Hand wash products crafted for cleanliness, comfort and a soft after-feel for repeated daily washing.",
    points: ["Gentle cleansing", "Skin-friendly feel", "Hygienic packaging"],
  },
];

export default function CleaningProducts() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="product-page">
      <section
        className="product-hero cleaning-hero"
        style={{ backgroundImage: "url('/cleaning hero.png')" }}
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
            Cleaning Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Reliable cleaning formulations for floor care, bathroom hygiene,
            dishwashing and hand wash needs.
          </motion.p>
        </div>
      </section>

      <section className="product-overview">
        <div className="product-section-heading">
          <FaTint />
          <h2>Our Cleaning Range</h2>
          <p>
            Built for consistent cleaning performance, clean fragrances and
            practical packaging across home and commercial use.
          </p>
        </div>

        <div className="product-card-grid">
          {cleaningProducts.map((product, index) => (
            <motion.article
              className="product-card"
              key={product.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <img src={product.image} alt={product.title} loading="lazy" />
              <div className="product-card-body">
                <div className="product-card-icon">{product.icon}</div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul>
                  {product.points.map((point) => (
                    <li key={point}>
                      <FaCheckCircle /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="product-cta">
        <h2>Need custom cleaning product manufacturing?</h2>
        <p>
          Talk to Uvaacha about formulations, packaging and private-label
          cleaning product production.
        </p>
        <a href="/contact">Get in Touch</a>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Uvaacha Enterprises Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
