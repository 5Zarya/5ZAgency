import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let mouse = { x: null, y: null };
    let scrollY = 0;

    // 📱 DETECT DEVICE SIZE
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    // 🎯 RESPONSIVE CONFIG
    const CONFIG = {
      PARTICLE_COUNT: isMobile
        ? 30
        : isTablet
        ? 50
        : 75,

      CONNECT_DISTANCE: isMobile
        ? 45
        : isTablet
        ? 60
        : 75,

      SPEED: isMobile ? 0.3 : 0.5,
    };

    // 🔥 RESIZE
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // 🧠 MOUSE
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // 🔥 SCROLL TRACK
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
    });

    // 🔥 CREATE PARTICLES
    particles = Array.from({
      length: CONFIG.PARTICLE_COUNT,
    }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * CONFIG.SPEED,
      vy: (Math.random() - 0.5) * CONFIG.SPEED,
      r: Math.random() * 2 + 0.5,
      depth: Math.random() * 2,
    }));

    // 🎬 DRAW LOOP
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const hue = (scrollY * 0.1) % 360;

      particles.forEach((p, i) => {
        // 🧠 PARALLAX
        if (mouse.x && mouse.y && !isMobile) {
          p.x +=
            (mouse.x - canvas.width / 2) *
            0.0004 *
            p.depth;

          p.y +=
            (mouse.y - canvas.height / 2) *
            0.0004 *
            p.depth;
        }

        // 🔥 SCROLL SPEED
        const speedBoost =
          1 + scrollY * 0.0005;

        p.x += p.vx * speedBoost;
        p.y += p.vy * speedBoost;

        // bounce
        if (p.x < 0 || p.x > canvas.width)
          p.vx *= -1;

        if (p.y < 0 || p.y > canvas.height)
          p.vy *= -1;

        // 🔥 GLOW PARTICLE
        const gradient =
          ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.r * 4
          );

        gradient.addColorStop(
          0,
          `hsla(${hue},100%,60%,0.8)`
        );

        gradient.addColorStop(
          1,
          `hsla(${hue},100%,60%,0)`
        );

        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          p.r * 2,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;
        ctx.fill();

        // 🔗 CONNECTION
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];

          const dist = Math.hypot(
            p.x - q.x,
            p.y - q.y
          );

          if (dist < CONFIG.CONNECT_DISTANCE) {
            ctx.strokeStyle = `hsla(${hue},100%,70%,${
              1 - dist / CONFIG.CONNECT_DISTANCE
            })`;

            ctx.lineWidth = 0.6;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-bg"
    />
  );
}