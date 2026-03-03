"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navColumns = [
  [
    { label: "¿Quiénes somos?", href: "#nosotros", active: false },
    { label: "Nuestro diferenciador", href: "#diferenciador", active: false },
    { label: "Servicios", href: "#servicios", active: false },
  ],
  [
    { label: "Nuestros clientes", href: "#clientes", active: false },
    { label: "Proyectos", href: "#proyectos", active: false },
    { label: "Metodología", href: "#metodologia", active: false },
  ],
  [
    { label: "Contacto", href: "#contacto", active: false },
  ],
];

const mobileLinks = navColumns.flat();

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const textCol = scrolled ? "text-roma-dark" : "text-white";
  const isHovering = hoveredHref !== null;
  const burgerColor = menuOpen ? "#1b1e1c" : (scrolled ? "#1b1e1c" : "white");

  return (
    <>
      <nav
        style={{
          paddingLeft: "clamp(1.25rem, 8vw, 10rem)",
          paddingRight: "clamp(1.25rem, 8vw, 10rem)",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-start justify-between transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        {/* Brand */}
        <a
          href="/"
          className={`flex-none text-xl font-inter font-medium tracking-[0.15em] transition-colors duration-300 ${textCol}`}
        >
          Andamios ROMA
        </a>

        {/* Roma mark — centered */}
        <div className="flex-1 flex items-start justify-center">
          <div
            className={`grid grid-cols-2 font-inter font-semibold leading-none transition-colors duration-300 ${textCol}`}
            style={{ gap: "4px", fontSize: "1.25rem" }}
          >
            {["r", "o", "m", "a"].map((l) => (
              <span key={l} className="w-[22px] h-[22px] flex items-center justify-center">
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop nav columns */}
        <div className="hidden md:flex items-start gap-20">
          {navColumns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-[7px]">
              {col.map((link) => {
                const isHovered = hoveredHref === link.href;
                const opacity = isHovering
                  ? isHovered ? 1 : 0.28
                  : link.active ? 1 : 0.52;
                const showDot = isHovered || (!isHovering && link.active);

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{ opacity }}
                    className={`text-[17px] font-inter flex items-center gap-2 transition-opacity duration-200 ${textCol}`}
                    onMouseEnter={() => setHoveredHref(link.href)}
                    onMouseLeave={() => setHoveredHref(null)}
                  >
                    <span
                      className="w-[5px] h-[5px] rounded-full bg-current shrink-0 transition-opacity duration-150"
                      style={{ opacity: showDot ? 1 : 0 }}
                    />
                    {link.label}
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 items-end"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span style={{
            display: "block", width: "20px", height: "1.5px",
            backgroundColor: burgerColor,
            transition: "transform 0.25s, opacity 0.2s",
            transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block", width: "13px", height: "1.5px",
            backgroundColor: burgerColor,
            transition: "opacity 0.15s",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: "20px", height: "1.5px",
            backgroundColor: burgerColor,
            transition: "transform 0.25s, opacity 0.2s",
            transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 z-40"
        style={{
          backgroundColor: "rgba(27,30,28,0.45)",
          backdropFilter: "blur(2px)",
          pointerEvents: menuOpen ? "auto" : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer — slides in from right */}
      <div
        className="md:hidden fixed top-0 right-0 bottom-0 z-50 bg-white flex flex-col"
        style={{
          width: "min(300px, 82vw)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "-4px 0 32px rgba(0,0,0,0.12)",
        }}
      >
        {/* Drawer header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.5rem 1.5rem 1.25rem",
          borderBottom: "1px solid rgba(174,177,174,0.2)",
        }}>
          {/* Logo + name */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div style={{ position: "relative", width: "32px", height: "32px", flexShrink: 0 }}>
              <Image
                src="/logo.png"
                alt="ROMA"
                fill
                className="object-contain"
              />
            </div>
            <span style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#1b1e1c",
            }}>
              Andamios ROMA
            </span>
          </div>

          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            style={{
              width: "32px", height: "32px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#575a57",
              background: "none",
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "0.5rem 0" }}>
          {mobileLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.85rem 1.5rem",
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.88rem",
                fontWeight: link.active ? 600 : 400,
                color: link.active ? "#1b1e1c" : "#575a57",
                borderBottom: "1px solid rgba(174,177,174,0.15)",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              {link.label}
              <svg viewBox="0 0 8 12" width="6" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.35, flexShrink: 0 }}>
                <path d="M1 1l6 5-6 5" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Drawer footer */}
        <div style={{
          padding: "1.25rem 1.5rem",
          borderTop: "1px solid rgba(174,177,174,0.2)",
        }}>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.7rem",
            color: "#aeb1ae",
            letterSpacing: "0.06em",
          }}>
            info@romaandamios.com
          </p>
        </div>
      </div>
    </>
  );
}
