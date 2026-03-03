"use client";

import Image from "next/image";
import { siteContent } from "@/lib/content";

export default function Servicios() {
  const { servicios } = siteContent;

  return (
    <>
      <style>{`
        @keyframes ticker-services {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .services-track {
          display: flex;
          width: max-content;
          animation: ticker-services 22s linear infinite;
        }
      `}</style>

      <section
        style={{ scrollMarginTop: "8rem" }}
        className="py-16 md:py-24"
        id="servicios"
      >
        {/* Heading */}
        <h2
          className="font-playfair font-normal uppercase leading-none text-roma-dark"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 6rem)",
            fontFamily: "'Playfair Display', Georgia, serif",
            paddingInline: "clamp(0.75rem, 4vw, 5rem)",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {servicios.heading}
        </h2>

        {/* ── MOBILE: ticker automático ── */}
        <div className="md:hidden" style={{ overflow: "hidden" }}>
          <div className="services-track">
            {[...servicios.cards, ...servicios.cards].map((card, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: "38vw",
                  maxWidth: "200px",
                  marginRight: "0.875rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                  <div style={{
                    position: "absolute", top: "0.65rem", left: "0.65rem", zIndex: 10,
                    width: "1.75rem", height: "1.75rem", borderRadius: "50%",
                    backgroundColor: "#03c516",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "white", lineHeight: 1 }}>
                      {(i % servicios.cards.length) + 1}
                    </span>
                  </div>
                  <Image src={card.image} alt={card.imageAlt} fill className="object-cover" sizes="38vw" />
                </div>

                {/* Info */}
                <div style={{ backgroundColor: "#1b1e1c", padding: "0.85rem 1rem", flex: 1 }}>
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.1em", color: "white", marginBottom: "0.35rem",
                  }}>
                    {card.name}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.5 }}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: grid 3 columnas ── */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-6"
          style={{ paddingInline: "clamp(0.75rem, 4vw, 5rem)", paddingTop: "3rem" }}
        >
          {servicios.cards.map((card, i) => (
            <div key={card.id} className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] overflow-visible">
                <div
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-roma-green"
                  style={{ top: 0, width: "2.75rem", height: "2.75rem" }}
                >
                  <span className="font-inter font-bold text-white text-base leading-none">{i + 1}</span>
                </div>
                <div className="relative w-full h-full overflow-hidden">
                  <Image src={card.image} alt={card.imageAlt} fill className="object-cover" sizes="33vw" />
                </div>
              </div>
              <div className="bg-roma-dark px-6 py-6 flex-1">
                <h3 className="font-inter font-bold text-white uppercase tracking-wide text-sm mb-3 text-center">
                  {card.name}
                </h3>
                <p className="font-inter text-white/70 text-sm leading-relaxed text-center">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
