import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Rp 300K",
      desc: "Cocok untuk personal / UMKM",
      features: [
        "1 Landing Page",
        "Responsive Design",
        "Basic Animation",
        "Fast Loading",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "Rp 1.3JT",
      desc: "🔥 Paling banyak dipilih client",
      features: [
        "Up to 5 Pages",
        "System Login",
        "Modern UI/UX",
        "Advanced Animation",
        "SEO Optimization",
      ],
      highlight: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Premium",
      price: "Custom",
      desc: "Untuk bisnis & startup serius",
      features: [
        "Unlimited Pages",
        "Custom Web App",
        "Database & Backend",
        "Full Support",
        "All Everything Web App"
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
  Order Now 🚀
</span>

            <div className="pricing-glow"></div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}