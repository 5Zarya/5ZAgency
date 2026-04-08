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
  Build Digital Websites <br />
</motion.h1>

  <motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="hero-subtitle"
>
  Bersama 5Z Agency, Kami membantu Anda membangun website modern, cepat, dan berkelas  
  yang meningkatkan kepercayaan pelanggan, memperkuat branding,  
  serta membantu bisnis Anda tampil lebih profesional di dunia digital.
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