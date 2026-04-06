import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    service: "Landing Page",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const phone = "6287743903013";

    const text = `Halo 5Z Agency 👋
Saya ${form.name || "-"}

Saya tertarik dengan:
${form.service}

Detail:
${form.message || "-"}

Mohon info lebih lanjut ya 🚀`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="contact-section">

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="contact-title"
      >
        Let's Build <span>Your Website</span>
      </motion.h2>

      {/* 🔥 FORM */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="contact-box"
      >

        <input
          type="text"
          name="name"
          placeholder="Nama kamu..."
          onChange={handleChange}
        />

        <select name="service" onChange={handleChange}>
          <option>Landing Page</option>
          <option>Company Profile</option>
          <option>Web App</option>
        </select>

        <textarea
          name="message"
          placeholder="Ceritakan kebutuhan kamu..."
          rows="4"
          onChange={handleChange}
        />

        <button onClick={handleWhatsApp} className="btn-contact">
          🚀 Mulai Project Sekarang
        </button>

        {/* 🔥 TRUST TEXT */}
        <small className="contact-note">
          ⚡ Respon cepat • Gratis konsultasi • Tanpa ribet
        </small>

      </motion.div>

      {/* 🔥 SOCIAL MEDIA */}
      <div className="contact-social">
        <p>Atau hubungi saya di:</p>

        <div className="social-links">
          <a href="https://instagram.com/faizz5z" target="_blank">
            Instagram
          </a>
          <a href="https://tiktok.com/@5zclipper" target="_blank">
            TikTok
          </a>
        </div>
      </div>

      <div className="contact-glow"></div>
    </section>
  );
}