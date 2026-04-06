import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="hero-container">

      {/* Background */}
      <ParticleBackground />

      {/* Overlay Gradient */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          Build The Future <br />
          <span>With 5Z AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-subtitle"
        >
          Website modern, cepat, cinematic, dan berteknologi tinggi
          untuk bisnis & personal branding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="hero-buttons"
        >
          <a href="#contact" className="btn-primary">
            🚀 Mulai Sekarang
          </a>
          <a href="#portfolio" className="btn-secondary">
            Lihat Portfolio
          </a>
        </motion.div>

      </div>

      {/* LIGHT EFFECT */}
      <div className="hero-light" />

    </section>
  );
}