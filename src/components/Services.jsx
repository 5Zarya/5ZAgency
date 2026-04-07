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
    q: "Berapa lama waktu pembuatan website?",
    a: "Waktu pengerjaan biasanya antara 3 hingga 10 hari kerja, tergantung tingkat kompleksitas fitur dan jumlah revisi. Untuk website sederhana bisa selesai lebih cepat, sedangkan website dengan sistem khusus membutuhkan waktu tambahan."
  },

  {
    q: "Apakah desain bisa disesuaikan dengan brand saya?",
    a: "Ya, semua desain dibuat secara custom sesuai kebutuhan brand Anda. Mulai dari warna, layout, hingga tampilan visual akan disesuaikan agar selaras dengan identitas bisnis Anda."
  },

  {
    q: "Apakah saya mendapatkan revisi?",
    a: "Tentu. Setiap paket sudah termasuk revisi sesuai ketentuan paket. Revisi dilakukan agar hasil akhir benar-benar sesuai dengan kebutuhan dan ekspektasi Anda."
  },

  {
    q: "Apakah website bisa diakses di HP dan tablet?",
    a: "Ya. Semua website yang dibuat sudah responsive dan dioptimalkan untuk berbagai perangkat seperti smartphone, tablet, dan desktop."
  },

  {
    q: "Apakah ada garansi setelah website selesai?",
    a: "Ya, kami memberikan garansi perbaikan bug selama 7–14 hari setelah website selesai. Jika terdapat error atau kendala teknis, akan diperbaiki tanpa biaya tambahan."
  },

  {
    q: "Apakah website bisa dikembangkan di masa depan?",
    a: "Bisa. Website dibuat dengan struktur yang fleksibel sehingga dapat ditambahkan fitur baru seperti sistem login, dashboard, atau integrasi API di kemudian hari."
  },

  {
    q: "Apakah saya akan mendapatkan source code website?",
    a: "Ya, setelah project selesai dan pembayaran lunas, Anda akan mendapatkan akses penuh ke website dan source code."
  },

  {
    q: "Apakah bisa membantu upload ke hosting?",
    a: "Ya, kami juga membantu proses deploy ke hosting atau domain agar website Anda bisa langsung online dan siap digunakan."
  }

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