import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LoaderOne from "./components/LoaderOne";
import LoaderTwo from "./components/LoaderTwo";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

// 🔥 CONTENT CONTROLLER
function AppContent() {
  const location = useLocation();

  const [mode, setMode] = useState("landing");

  // 🔥 AUTO MODE DETECT
  useEffect(() => {
    if (location.pathname === "/") {
      setMode("landing");
    } else {
      setMode("page");
    }
  }, [location]);

  return (
    <div className="app-container">
      <ParticleBackground />

      <Navbar />

      <div className="main-content fade-in">

        {/* ================= LANDING ================= */}
        {mode === "landing" && (
          <>
            <Hero />
            <Services variant="landing" />
            <Portfolio />
            <Pricing />
            <Contact />
          </>
        )}

        {/* ================= PAGE ================= */}
        {mode === "page" && (
          <Routes>
            <Route path="/services" element={<Services variant="full" />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}

      </div>
    </div>
  );
}

// 🔥 MAIN APP (LOADER + ROUTER)
export default function App() {
  const [step, setStep] = useState(1);
  const [fade, setFade] = useState(false);

  const nextStep = (next) => {
    setFade(true);
    setTimeout(() => {
      setStep(next);
      setFade(false);
    }, 600);
  };

  // ================= LOADER =================
  if (step === 1) {
    return (
      <div className={`fade-wrapper ${fade ? "fade-out" : ""}`}>
        <LoaderOne onFinish={() => nextStep(2)} />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className={`fade-wrapper ${fade ? "fade-out" : ""}`}>
        <LoaderTwo onFinish={() => nextStep(3)} />
      </div>
    );
  }

  // ================= APP =================
  return (
    <Router>
      <AppContent />
    </Router>
  );
}