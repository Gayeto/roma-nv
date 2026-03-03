"use client";

import Image from "next/image";

type City = {
  id: string;
  city: string;
  pin:  { x: number; y: number };
  card: { x: number; y: number };
  projects: string[];
};

const CITIES: City[] = [
  {
    id: "monterrey",
    city: "MONTERREY",
    pin:  { x: 57.7, y: 41.3 },
    card: { x: 70.8, y: 0 },
    projects: ["Planta Cemex", "Planta Terium", "Planta Volvo"],
  },
  {
    id: "leon",
    city: "LEON",
    pin:  { x: 54.3, y: 65.6 },
    card: { x: 29,   y: 0 },
    projects: ["Planta Coca-Cola"],
  },
  {
    id: "guadalajara",
    city: "GUADALAJARA",
    pin:  { x: 47.6, y: 67 },
    card: { x: 2.3,  y: 37.4 },
    projects: ["Metro subterráneo", "Sabritas", "Ikea", "Ferrero Rocher",
               "Almidones Mexicanos", "Boehringer-Ingelheim",
               "Empresa coreana", "Molex", "Union Square"],
  },
  {
    id: "tequila",
    city: "TEQUILA",
    pin:  { x: 43.1, y: 68.6 },
    card: { x: 5.7,  y: 64.6 },
    projects: ["Fábrica José Cuervo", "Fábrica Don Julio", "Fábrica Tequila Espolón"],
  },
  {
    id: "vallarta",
    city: "VALLARTA",
    pin:  { x: 44.7, y: 71 },
    card: { x: 2,    y: 80.4 },
    projects: ["Aeropuerto", "Vidanta"],
  },
  {
    id: "queretaro",
    city: "QUERÉTARO",
    pin:  { x: 56.9, y: 67.8 },
    card: { x: 39.2, y: 83.5 },
    projects: ["Parque industrial"],
  },
  {
    id: "cdmx",
    city: "CDMX",
    pin:  { x: 59.7, y: 72.9 },
    card: { x: 75,   y: 14.9 },
    projects: ["Aeropuerto Benito Juárez", "AIFA", "Miyana", "Tren México-Toluca"],
  },
  {
    id: "puebla",
    city: "PUEBLA",
    pin:  { x: 62.8, y: 77.2 },
    card: { x: 57.9, y: 88.2 },
    projects: ["Autopista Mexico-Puebla"],
  },
  {
    id: "veracruz",
    city: "VERACRUZ",
    pin:  { x: 66.8, y: 72.7 },
    card: { x: 81.1, y: 33.8 },
    projects: ["Planta Stellantis"],
  },
  {
    id: "quintanaroo",
    city: "QUINTANA ROO",
    pin:  { x: 90.4, y: 73 },
    card: { x: 84.9, y: 85.9 },
    projects: ["Tren Maya"],
  },
  {
    id: "tabasco",
    city: "TABASCO",
    pin:  { x: 77.9, y: 79.7 },
    card: { x: 84.3, y: 46.1 },
    projects: ["Refinería Dos Bocas"],
  },
];

export default function Proyectos() {
  return (
    <>
      <style>{`
        @keyframes ping-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          80%  { transform: scale(3.5); opacity: 0; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        @keyframes ticker-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-left 48s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        id="proyectos"
        style={{ scrollMarginTop: "8rem" }}
      >

        {/* ── DESKTOP: mapa con pins, líneas y cards ── */}
        <div className="hidden md:block" style={{ backgroundColor: "#04740f" }}>

          {/* Heading */}
          <div style={{ paddingInline: "clamp(0.75rem, 4vw, 5rem)", paddingTop: "4rem", paddingBottom: "1.5rem" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.8rem, 6vw, 6rem)",
                fontWeight: 400,
                textTransform: "uppercase",
                lineHeight: 1,
                color: "white",
                margin: 0,
              }}
            >
              PROYECTOS
            </h2>
          </div>

          {/* Map — full width */}
          <div style={{ position: "relative", width: "100%", lineHeight: 0, userSelect: "none" }}>

            <Image
              src="/SVG_Mexico.svg"
              alt="Mapa de proyectos ROMA"
              width={476}
              height={300}
              style={{ width: "100%", height: "auto", display: "block" }}
              unoptimized
            />

            {/* Connecting lines */}
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {CITIES.map((c) => (
                <line
                  key={c.id}
                  x1={c.pin.x}
                  y1={c.pin.y}
                  x2={c.card.x + 7}
                  y2={c.card.y + 2}
                  stroke="#f97316"
                  strokeWidth="0.4"
                  strokeDasharray="1.2,1.2"
                  strokeOpacity="0.8"
                />
              ))}
            </svg>

            {/* Pins */}
            {CITIES.map((c, i) => (
              <div
                key={c.id}
                style={{
                  position: "absolute",
                  left: `${c.pin.x}%`,
                  top:  `${c.pin.y}%`,
                  transform: "translate(-50%, -100%)",
                  zIndex: 10,
                }}
              >
                <span style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "0.85rem",
                  height: "0.85rem",
                  borderRadius: "50%",
                  backgroundColor: "#f97316",
                  animation: "ping-ring 2.2s cubic-bezier(0,0,0.2,1) infinite",
                  animationDelay: `${i * 0.18}s`,
                  pointerEvents: "none",
                }} />
                <svg
                  viewBox="0 0 24 34"
                  width="22"
                  height="30"
                  style={{ display: "block", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
                >
                  <path
                    d="M12 0 C5.373 0 0 5.373 0 12 C0 21 12 34 12 34 C12 34 24 21 24 12 C24 5.373 18.627 0 12 0 Z"
                    fill="#f97316"
                  />
                  <circle cx="12" cy="11" r="5" fill="white" fillOpacity="0.85" />
                </svg>
              </div>
            ))}

            {/* Cards — desktop */}
            {CITIES.map((c) => (
              <div
                key={c.id}
                style={{
                  position: "absolute",
                  left: `${c.card.x}%`,
                  top:  `${c.card.y}%`,
                  backgroundColor: "white",
                  padding: "0.65rem 0.9rem",
                  minWidth: "clamp(120px, 14vw, 210px)",
                  maxWidth: "clamp(160px, 19vw, 270px)",
                  zIndex: 20,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.22)",
                }}
              >
                <p style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "clamp(0.6rem, 1vw, 0.85rem)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  color: "#f97316",
                  lineHeight: 1.2,
                  marginBottom: "0.35rem",
                }}>
                  {c.city}
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "1rem", margin: 0 }}>
                  {c.projects.map((proj, pi) => (
                    <li key={pi} style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "clamp(0.5rem, 0.85vw, 0.72rem)",
                      color: "#1b1e1c",
                      lineHeight: 1.55,
                    }}>
                      {proj}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* ── MOBILE: mapa de fondo + carrusel infinito ── */}
        <div
          className="md:hidden"
          style={{ position: "relative", overflow: "hidden", backgroundColor: "#04740f" }}
        >
          {/* Background map */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image
              src="/SVG_Mexico.svg"
              alt=""
              fill
              unoptimized
              style={{ objectFit: "cover", objectPosition: "center", opacity: 0.18 }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(4,116,15,0.85) 100%)",
            }} />
          </div>

          {/* Foreground */}
          <div style={{ position: "relative", zIndex: 1, paddingTop: "3rem", paddingBottom: "3rem" }}>

            {/* Heading */}
            <div style={{ paddingInline: "clamp(0.75rem, 4vw, 5rem)", paddingBottom: "2rem" }}>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.8rem, 12vw, 4rem)",
                fontWeight: 400,
                textTransform: "uppercase",
                lineHeight: 1,
                color: "white",
                margin: 0,
              }}>
                PROYECTOS
              </h2>
              <p style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.5)",
                marginTop: "0.5rem",
                letterSpacing: "0.04em",
              }}>
                11 ciudades · 39+ empresas
              </p>
            </div>

            {/* Infinite carousel */}
            <div style={{ overflow: "hidden" }}>
              <div className="ticker-track">
                {[...CITIES, ...CITIES].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      flexShrink: 0,
                      backgroundColor: "white",
                      padding: "0.85rem 1rem",
                      minWidth: "160px",
                      maxWidth: "220px",
                      marginRight: "0.75rem",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                    }}
                  >
                    <p style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#f97316",
                      marginBottom: "0.4rem",
                      lineHeight: 1.2,
                    }}>
                      {c.city}
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "0.9rem", margin: 0 }}>
                      {c.projects.map((proj, pi) => (
                        <li key={pi} style={{
                          fontFamily: "'Inter', system-ui, sans-serif",
                          fontSize: "0.6rem",
                          color: "#1b1e1c",
                          lineHeight: 1.6,
                        }}>
                          {proj}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}
