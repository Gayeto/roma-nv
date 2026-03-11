"use client";

import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
          60% { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
        }
        .wa-btn { animation: wa-pulse 2.2s ease-out infinite; }
      `}</style>

      <a
        href="https://wa.me/5548009797"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        title="Escríbenos por WhatsApp · 55-4800-9797"
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 9999,
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "50%",
          backgroundColor: "#25d366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          transition: "transform 0.2s, background-color 0.2s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1ebe5d";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#25d366";
        }}
      >
        <IoLogoWhatsapp size={32} color="white" />
      </a>
    </>
  );
}
