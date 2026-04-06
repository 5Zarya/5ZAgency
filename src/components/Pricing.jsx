import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const plans = [

  {
    name: "Basic",

    price: "Rp 300.000",

    desc: "Cocok untuk personal, UMKM, dan bisnis yang baru mulai online",

    features: [
      "1 Halaman Website (Landing Page)",
      "Desain Modern & Responsive",
      "Animasi Dasar",
      "Integrasi WhatsApp",
      "Form Kontak",
      "Gratis Revisi 2x",
      "Waktu Pengerjaan 2–4 Hari"
    ],

    highlight: false,
  },

  {
    name: "Pro",

    price: "Rp 1.300.000",

    desc: "🔥 Paket paling populer untuk bisnis yang ingin berkembang",

    features: [
      "Hingga 5 Halaman Website",
      "Desain UI/UX Modern",
      "Animasi Profesional",
      "Optimasi SEO Dasar",
      "Integrasi WhatsApp & Sosial Media",
      "Form Dinamis",
      "Gratis Revisi 4x",
      "Waktu Pengerjaan 5–10 Hari"
    ],

    highlight: true,

    badge: "PALING POPULER",
  },

  {
    name: "Premium",

    price: "Custom",

    desc: "Untuk sistem website kompleks dan kebutuhan khusus website",

    features: [
      "Custom Design Sesuai Kebutuhan",
      "Database & Backend System",
      "Dashboard Admin",
      "Login & Authentication",
      "Web Application / Sistem Khusus",
      "API Integration (Opsional)",
      "Support & Maintenance",
      "Estimasi Harga Berdasarkan Fitur"
    ],

    highlight: false,
  },

];

  const navigate = useNavigate();
  return (
    <section id="pricing" className="pricing-section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pricing-title"
      >
        Pricing <span>Plans</span>
      </motion.h2>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >

            {/* 🔥 BADGE */}
            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

            <h3>{plan.name}</h3>
            <p className="plan-desc">{plan.desc}</p>

            <div className="price">{plan.price}</div>

            <ul>
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>

            <span
  className="btn-pricing"
  onClick={() => {
    navigate("/contact");
  }}
>
  Konsultasi Sekarang 🚀
</span>

            <div className="pricing-glow"></div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}