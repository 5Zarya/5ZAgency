import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Pricing() {

  const getCurrentMonthPromo = () => {

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];

  const currentMonth =
    months[new Date().getMonth()];

  return `🔥 Promo Spesial ${currentMonth}`;
};

  const plans = [

  {
    name: "Basic",

    price: "Rp 300.000",
    originalPrice: "Rp 500.000",
    discount: "HEMAT 40%",

    desc: "Solusi terbaik untuk personal, UMKM, dan bisnis yang ingin mulai tampil profesional di internet",

    features: [
      "1 Halaman Website (Landing Page)",
      "Desain Modern & Mobile Friendly",
      "Animasi Dasar Modern",
      "Integrasi WhatsApp Langsung",
      "Form Kontak Interaktif",
      "Optimasi Kecepatan Website",
      "Gratis Revisi Hingga 2x",
      "Estimasi Pengerjaan 2–4 Hari"
    ],

    highlight: false,
  },

  {
    name: "Pro",

    price: "Rp 1.300.000",
    originalPrice: "Rp 1.800.000",
    discount: "HEMAT 28%",

    desc: "🔥 Paket paling direkomendasikan untuk bisnis yang ingin berkembang dan terlihat profesional",

    features: [
      "Hingga 5 Halaman Website",
      "Desain UI/UX Premium",
      "Animasi Profesional & Modern",
      "Sistem Login",
      "Optimasi SEO Dasar",
      "Integrasi WhatsApp & Sosial Media",
      "Form Dinamis & Interaktif",
      "Optimasi Kecepatan Website",
      "Gratis Revisi Hingga 4x",
      "Estimasi Pengerjaan 5–10 Hari"
    ],

    highlight: true,
    badge: "PALING POPULER",
  },

  {
    name: "Premium",

    price: "Custom",

    desc: "Solusi terbaik untuk website kompleks, sistem khusus, atau web application seperti platform digital, sistem booking, atau aplikasi online",

    features: [
      "Desain Custom Sesuai Kebutuhan",
      "Database & Backend System",
      "Dashboard Admin Profesional",
      "Login & Authentication System",
      "Web Application / Sistem Khusus",
      "Integrasi API (Opsional)",
      "Optimasi Performa & Security",
      "Support & Maintenance Awal",
      "Estimasi Harga Disesuaikan Fitur"
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

            <div className="price-wrapper">

  {plan.originalPrice && (
    <div className="original-price">
      {plan.originalPrice}
    </div>
  )}

  <div className="price">
    {plan.price}
  </div>

  {plan.discount && (
    <div className="discount-badge">
      {plan.discount}
    </div>
  )}

  {plan.discount && (
  <div className="promo-text">
  {getCurrentMonthPromo()}
</div>
)}

</div>

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