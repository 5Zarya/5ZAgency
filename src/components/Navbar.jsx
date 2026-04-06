import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 AUTO CLOSE MENU SAAT PINDAH PAGE
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // 🔥 NAVIGATION
  const goTo = (path) => {
    navigate(path);
  };

  const goLanding = () => {
    navigate("/");
  };

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="nav-inner">

        {/* 🔥 LOGO */}
        <div className="logo" onClick={goLanding}>
          <img src="/logo.png" alt="logo" />
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="nav-links desktop">
          <span onClick={() => goTo("/services")} className={location.pathname === "/services" ? "active" : ""}>
            Services
          </span>
          <span onClick={() => goTo("/portfolio")} className={location.pathname === "/portfolio" ? "active" : ""}>
            Portfolio
          </span>
          <span onClick={() => goTo("/pricing")} className={location.pathname === "/pricing" ? "active" : ""}>
            Pricing
          </span>
          <span onClick={() => goTo("/contact")} className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </span>
        </div>

        {/* 🔥 CTA DESKTOP */}
        <span className="nav-cta desktop" onClick={() => goTo("/contact")}>
          Get Website 🚀
        </span>

        {/* ================= HAMBURGER ================= */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <span onClick={() => goTo("/services")}>Services</span>
        <span onClick={() => goTo("/portfolio")}>Portfolio</span>
        <span onClick={() => goTo("/pricing")}>Pricing</span>
        <span onClick={() => goTo("/contact")}>Contact</span>

        <span className="mobile-cta" onClick={() => goTo("/contact")}>
          Get Website 🚀
        </span>
      </div>

      <div className="nav-bottom-line"></div>
    </div>
  );
}