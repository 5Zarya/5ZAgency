import { useEffect, useState } from "react";

export default function LoaderOne({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Booting Neural Core...",
    "Syncing AI Matrix...",
    "Injecting Data Stream...",
    "Optimizing Interface...",
    "Launching 5Z Intelligence...",
  ];

  useEffect(() => {
    let p = 0;

    const interval = setInterval(() => {
      p += Math.random() * 8 + 2;

      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(onFinish, 700);
      }

      setProgress(p);
    }, 120);

    const textLoop = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textLoop);
    };
  }, [onFinish]);

  return (
    <div className="loader-container">

      {/* GRID */}
      <div className="grid-bg" />

      {/* ENERGY ORBS */}
      <div className="orb orb1" />
      <div className="orb orb2" />

      {/* CENTER BOX (GLASS UI) */}
      <div className="loader-card">

        {/* LOGO */}
        <h1 className="loader-title">
          5Z Agency
        </h1>

        {/* RING LOADER */}
        <div className="circle-loader">
          <svg>
  <defs>
    <linearGradient id="gradientStroke">
      <stop offset="0%" stopColor="cyan" />
      <stop offset="50%" stopColor="#3b82f6" />
      <stop offset="100%" stopColor="#9333ea" />
    </linearGradient>
  </defs>

  <circle cx="70" cy="70" r="52" />
  <circle
    cx="70"
    cy="70"
    r="52"
    className="progress-ring"
    style={{
      strokeDashoffset: 327 - (327 * progress) / 100,
    }}
  />
</svg>
          <div className="circle-text">
            {Math.floor(progress)}%
          </div>
        </div>

        {/* STATUS */}
        <p className="loader-status">
          {texts[textIndex]}
        </p>

        {/* LINE PROGRESS */}
        <div className="progress-wrapper">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

      {/* SCAN EFFECT */}
      <div className="scan-line" />

      {/* BOTTOM TECH LINE */}
      <div className="loader-footer">
        5Z AI • NEURAL ENGINE • SYSTEM ONLINE
      </div>

    </div>
  );
}