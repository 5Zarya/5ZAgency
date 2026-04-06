import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Portfolio
import p1 from "../assets/portfolio/p1.png";
import p2 from "../assets/portfolio/p2.png";
import p3 from "../assets/portfolio/p3.png";
import p4 from "../assets/portfolio/p4.png";

// 5Znexa
import z1 from "../assets/5znexa/z1.png";
import z2 from "../assets/5znexa/z2.png";
import z3 from "../assets/5znexa/z3.png";

// Ecommerce
import e1 from "../assets/ecommerce/e1.png";
import e2 from "../assets/ecommerce/e2.png";
import e3 from "../assets/ecommerce/e3.png";
import e4 from "../assets/ecommerce/e4.png";

export default function Portfolio() {

  const [activeProject, setActiveProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  /* ================= PROJECT DATA ================= */

  const projects = [

    {
      title: "Faiz Portfolio",
      category: "Personal Portfolio",

      images: [p1, p2, p3, p4],

      descriptions: [
        "Landing page modern futuristic.",
        "Services section with animation.",
        "Portfolio showcase interface.",
        "Contact system integration."
      ],

      link: "https://faizaryaputra.vercel.app",
      hasLink: true
    },

    {
      title: "5Znexa",
      category: "AI Web Platform",

      images: [z1, z2, z3],

      descriptions: [
        "AI system dashboard.",
        "Automation module interface.",
        "User interaction system."
      ],

      hasLink: false
    },

    {
      title: "E-Commerce Laravel",
      category: "Web App",

      images: [e1, e2, e3, e4],

      descriptions: [
        "Homepage product catalog.",
        "Shopping cart system.",
        "Checkout process.",
        "Admin dashboard."
      ],

      hasLink: false
    }

  ];

  /* ================= OPEN OVERLAY ================= */

  const openProject = (project) => {
    setActiveProject(project);
    setCurrentImage(0);
  };

  const closeProject = () => {
    setActiveProject(null);
  };

  /* ================= NEXT IMAGE ================= */

  const nextImage = () => {
    setCurrentImage(
      (prev) =>
        (prev + 1) % activeProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + activeProject.images.length) %
        activeProject.images.length
    );
  };

  return (

    <section id="portfolio" className="portfolio-section">

      {/* TITLE */}

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="portfolio-title"
      >
        Our <span>Portfolio</span>
      </motion.h2>

      {/* GRID */}

      <div className="portfolio-grid">

        {projects.map((item, i) => (

          <motion.div
            key={i}
            className="portfolio-card"
            onClick={() => openProject(item)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >

            <img src={item.images[0]} />

            <div className="portfolio-overlay">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>

            <div className="portfolio-glow"></div>

          </motion.div>

        ))}

      </div>

      {/* ================= OVERLAY ================= */}

<AnimatePresence>

  {activeProject && (

    <motion.div
      className="portfolio-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* CLOSE BUTTON */}

      <button
        className="modal-close"
        onClick={closeProject}
      >
        ✕
      </button>

      {/* 🔥 CONTAINER UTAMA (WAJIB ADA) */}

      <div className="modal-content">

        {/* IMAGE */}

        <div className="modal-image-wrapper">

          <button
            className="nav-btn left"
            onClick={prevImage}
          >
            ‹
          </button>

          <img
            src={
              activeProject.images[
                currentImage
              ]
            }
            alt="preview"
          />

          <button
            className="nav-btn right"
            onClick={nextImage}
          >
            ›
          </button>

        </div>

        {/* INFO */}

        <div className="modal-info">

          <h3>
            {activeProject.title}
          </h3>

          <p>
            {
              activeProject.descriptions[
                currentImage
              ]
            }
          </p>

          {/* BUTTON KHUSUS PROJECT YANG ADA LINK */}

          {activeProject.hasLink && (

            <button
              className="visit-btn"
              onClick={() =>
                window.open(
                  activeProject.link,
                  "_blank"
                )
              }
            >
              🚀 Visit Website
            </button>

          )}

        </div>

      </div>

    </motion.div>

  )}

</AnimatePresence>

    </section>

  );
}