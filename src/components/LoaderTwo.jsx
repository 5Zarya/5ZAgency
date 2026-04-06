import { useEffect, useRef } from "react";

export default function LoaderTwo({ onFinish }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let phase = "explode";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const image = new Image();
    image.src = "/logo.png";

    image.onload = () => {
      const temp = document.createElement("canvas");
      const tctx = temp.getContext("2d");

      const size = 220; // 🔥 diperkecil (hemat CPU)
      temp.width = size;
      temp.height = size;

      tctx.drawImage(image, 0, 0, size, size);
      const data = tctx.getImageData(0, 0, size, size).data;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let y = 0; y < size; y += 6) { // 🔥 lebih jarang
        for (let x = 0; x < size; x += 6) {
          const i = (y * size + x) * 4;

          if (data[i + 3] > 150) {
            particles.push({
              x: cx,
              y: cy,
              tx: x + cx - size / 2,
              ty: y + cy - size / 2,
              vx: (Math.random() - 0.5) * 12,
              vy: (Math.random() - 0.5) * 12,
              size: 1.2,
            });
          }
        }
      }

      animate();
    };

    let glow = 0;

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        if (phase === "explode") {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.92;
          p.vy *= 0.92;
        }

        if (phase === "form") {
          p.x += (p.tx - p.x) * 0.06;
          p.y += (p.ty - p.y) * 0.06;
        }

        // 🔥 simple glow (tanpa gradient berat)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.9)";
        ctx.fill();
      });

      // 🔥 RING SIMPLE (tanpa gradient berat)
      if (phase === "glow") {
        glow += 0.04;

        const radius = 160 + Math.sin(glow) * 10;

        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,255,255,0.3)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    }

    // 🎬 TIMELINE
    setTimeout(() => (phase = "form"), 1000);
    setTimeout(() => (phase = "glow"), 2200);
    setTimeout(onFinish, 3500); // 🔥 lebih cepat

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [onFinish]);

  return <canvas ref={canvasRef} className="loader-canvas" />;
}