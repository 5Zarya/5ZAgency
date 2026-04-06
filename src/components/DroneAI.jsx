import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, Suspense } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// ================= DRONE =================
function JarvisDrone({ combat }) {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/happy_drone.glb");
  const { actions } = useAnimations(animations, group);

  // ▶️ PLAY ANIMATION
  useEffect(() => {
    if (!actions) return;

    console.log("🎬 Animations:", actions);

    Object.values(actions).forEach((action) => {
      action.reset().fadeIn(0.5).play();
    });
  }, [actions]);

  // FLOAT + ROTATE
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (!group.current) return;

    group.current.position.y = Math.sin(t) * 0.15;
    group.current.rotation.y += combat ? 0.01 : 0.003;
  });

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={6}
        position={[0, -0.5, 0]}
      />
    </group>
  );
}

// preload
useGLTF.preload("/models/happy_drone.glb");

// ================= MAIN =================
export default function DroneAI() {
  const [text, setText] = useState("AI Assistant Ready");
  const [chatOpen, setChatOpen] = useState(false);
  const [combat, setCombat] = useState(false);
  const [visible, setVisible] = useState(true);
const [minimized, setMinimized] = useState(false);

  const droneRef = useRef(null);

  // ================= AI TEXT SYSTEM =================
const typingRef = useRef(null);

const typeText = (newText) => {
  clearInterval(typingRef.current);
  let i = 0;
  setText("");

  typingRef.current = setInterval(() => {
    i++;
    setText(newText.slice(0, i));

    if (i >= newText.length) {
      clearInterval(typingRef.current);
    }
  }, 15);
};

useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY;

    if (y < 600) {
      typeText("🚀 Welcome. Initializing intelligent system...");
    } 
    else if (y < 1200) {
      typeText("⚡ Services detected. High-performance solutions ready.");
    } 
    else if (y < 1800) {
      typeText("📊 Portfolio loaded. Analyzing previous projects...");
    } 
    else if (y < 2400) {
      typeText("💰 Pricing module active. Optimizing value...");
    } 
    else {
      typeText("📡 Contact channel open. Awaiting your command.");
    }
  };

  handleScroll(); // run pertama
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // DRAG
  const handleMouseDown = (e) => {
    const offsetX = e.clientX - droneRef.current.offsetLeft;
    const offsetY = e.clientY - droneRef.current.offsetTop;

    const move = (e) => {
      droneRef.current.style.left = `${e.clientX - offsetX}px`;
      droneRef.current.style.top = `${e.clientY - offsetY}px`;
    };

    window.addEventListener("mousemove", move);
    window.addEventListener(
      "mouseup",
      () => window.removeEventListener("mousemove", move),
      { once: true }
    );
  };

  return (
  <>
    {/* 🔥 BUTTON MUNCUL LAGI */}
    {!visible && (
      <div className="drone-toggle" onClick={() => setVisible(true)}>
        🤖
      </div>
    )}

    {/* 🔥 DRONE */}
    {visible && (
      <div
        className={`drone-ai ${minimized ? "minimized" : ""}`}
        ref={droneRef}
        onMouseDown={handleMouseDown}
        onMouseEnter={() => setCombat(true)}
        onMouseLeave={() => setCombat(false)}
      >
        {/* 🔥 CONTROL BUTTON */}
        <div className="drone-controls">
          <button onClick={() => setMinimized(!minimized)}>—</button>
          <button onClick={() => setVisible(false)}>✕</button>
        </div>

        {/* 🔥 CONTENT (HIDE SAAT MINIMIZE) */}
        {!minimized && (
          <>
            {/* 3D DRONE */}
            <div className="drone-3d">
              <Canvas camera={{ position: [0, 0, 2] }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={2} />
                  <directionalLight position={[2, 2, 2]} intensity={3} />
                  <pointLight position={[0, 0, 2]} intensity={5} />

                  <JarvisDrone combat={combat} />
                </Suspense>
              </Canvas>
            </div>

            {/* UI */}
            <div className="drone-ui">
              <div className="drone-status">
                <span className="dot"></span>
                AI ONLINE
              </div>

              <div className="drone-text">
                {text}
                <span className="cursor">|</span>
              </div>

              <button
                className="drone-btn"
                onClick={() => setChatOpen(!chatOpen)}
              >
                ⚡ Activate Assistant
              </button>

              {chatOpen && (
                <div className="drone-chat">
                  <p>👁 AI Assistant Connected</p>

                  <button
                    onClick={() =>
                      window.open("https://wa.me/6287743903013")
                    }
                  >
                    Start Communication
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    )}
  </>
);
}