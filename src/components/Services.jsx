import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Landing Page",
    desc: "Website cepat, modern, dan fokus konversi.",
    icon: "🚀",
    detail:
      "Cocok untuk promosi produk/jasa dengan desain menarik dan optimasi conversion tinggi.",
  },
  {
    title: "Company Profile",
    desc: "Tampilan profesional untuk brand kamu.",
    icon: "🏢",
    detail:
      "Website resmi perusahaan untuk meningkatkan trust & kredibilitas bisnis.",
  },
  {
    title: "Custom Web App",
    desc: "Sistem sesuai kebutuhan bisnis.",
    icon: "⚙️",
    detail:
      "Dashboard, sistem booking, hingga platform startup berbasis kebutuhan spesifik.",
  },
];

// FAQ
const faqs = [
  {
    q: "Berapa lama pembuatan website?",
    a: "Sekitar 3–10 hari tergantung kompleksitas dan revisi.",
  },
  {
    q: "Apakah bisa custom design?",
    a: "Ya, semua design bisa disesuaikan dengan kebutuhan brand kamu.",
  },
  {
    q: "Apakah dapat revisi?",
    a: "Tentu, revisi disediakan agar hasil sesuai keinginan kamu.",
  },
  {
    q: "Apakah mobile friendly?",
    a: "Semua website sudah responsive di semua device.",
  },
];

// 🔥 FAQ COMPONENT
function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "active" : ""}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <h4>{item.q}</h4>
        <span>{open ? "−" : "+"}</span>
      </div>

      <div className="faq-answer">
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function Services({ variant = "landing" }) {
    const navigate = useNavigate();
  return (
    <section className="services-section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="services-title"
      >
        Our <span>Services</span>
      </motion.h2>

      {/* ================= LANDING ================= */}
      {variant === "landing" && (
        <>
          <div className="services-grid">
            {services.map((item, i) => (
              <motion.div
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="services-cta">
      <p>Butuh website profesional?</p>
      <button
  className="cta-btn"
  onClick={() => navigate("/contact")}
>
  Mulai Sekarang 🚀
</button>
    </div>
        </>
      )}

      {/* ================= FULL ================= */}
      {variant === "full" && (
        <>
          {/* SERVICES DETAIL */}
          <div className="services-grid">
            {services.map((item, i) => (
              <motion.div
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <small>{item.detail}</small>
              </motion.div>
            ))}
          </div>

          {/* 🔥 ADVANTAGES (UPGRADE) */}
          <div className="services-advantages">
            <h3>Kenapa pilih saya?</h3>

            <div className="adv-grid">
              <div className="adv-card">⚡ Cepat & modern</div>
              <div className="adv-card">🎯 Fokus conversion</div>
              <div className="adv-card">📱 100% responsive</div>
              <div className="adv-card">💡 Custom sesuai kebutuhan</div>
            </div>
          </div>

          {/* 🔥 FAQ MODERN */}
          <div className="services-faq">
            <h3>Frequently Asked Questions</h3>

            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}