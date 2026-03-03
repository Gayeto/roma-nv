"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [phase, setPhase] = useState<"in" | "hold" | "flip" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 700);
    const t2 = setTimeout(() => setPhase("flip"), 1500);
    const t3 = setTimeout(() => setPhase("done"), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      <style>{`
        @keyframes roma-letter-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/*
        perspective-origin: bottom → el punto de fuga está abajo,
        así el giro parece que la cara B sube y se va hacia atrás
        dejando ver la cara A desde abajo (efecto cubo exacto).
      */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          perspective: "1000px",
          perspectiveOrigin: "50% 100%",
          pointerEvents: "none",
        }}
      >
        {/* Cara B — pivota en su borde inferior y sube hacia atrás */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#1b1e1c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "50% 100%",
            transform: phase === "flip" ? "rotateX(-90deg)" : "rotateX(0deg)",
            transition: phase === "flip"
              ? "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)"
              : "none",
          }}
        >
          {/* ROMA 2×2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {(["r", "o", "m", "a"] as const).map((letter, i) => (
              <span
                key={letter}
                style={{
                  width: "52px",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "1.9rem",
                  fontWeight: 600,
                  color: "white",
                  opacity: 0,
                  animation: "roma-letter-in 0.38s ease forwards",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
