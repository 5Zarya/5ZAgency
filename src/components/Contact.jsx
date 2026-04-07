import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
  name: "",
  service: "Basic",
  message: "",
});

// 🔥 placeholder dinamis
const [messagePlaceholder, setMessagePlaceholder] = useState(
  "Contoh: Saya ingin membuat landing page untuk bisnis saya..."
);

  const handleChange = (e) => {
  const { name, value } = e.target;

  // Update form value
  setForm({
    ...form,
    [name]: value,
  });

  // 🔥 Update placeholder berdasarkan paket
  if (name === "service") {

    if (value === "Basic") {
      setMessagePlaceholder(
        "Contoh: Saya ingin membuat landing page untuk bisnis saya."
      );
    }

    if (value === "Pro") {
      setMessagePlaceholder(
        "Contoh: Saya ingin membuat website bisnis dengan sistem login dan beberapa halaman seperti Home, About, dan Contact."
      );
    }

    if (value === "Premium") {
      setMessagePlaceholder(
        "Contoh: Saya ingin membuat website custom dengan fitur login, database, atau sistem khusus."
      );
    }

  }
};

  const handleWhatsApp = () => {
  const phone = "6287743903013";

  const text = `Halo 5Z 👋
Nama saya ${form.name || "-"}

Saya tertarik dengan paket:
${form.service}

Kebutuhan saya:
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

        <select
  name="service"
  value={form.service}
  onChange={handleChange}
>

  <option value="Basic">
    Paket Basic (Landing Page)
  </option>

  <option value="Pro">
    Paket Pro (Website Bisnis)
  </option>

  <option value="Premium">
    Paket Custom / Web App
  </option>

</select>

        <textarea
  name="message"
  placeholder={messagePlaceholder}
  rows="4"
  value={form.message}
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