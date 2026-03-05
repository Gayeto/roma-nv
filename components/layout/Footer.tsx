"use client";

import { siteContent } from "@/lib/content";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Inicio",              href: "/" },
  { label: "¿Quiénes somos?",     href: "#nosotros" },
  { label: "Nuestro diferenciador", href: "#diferenciador" },
  { label: "Servicios",            href: "#servicios" },
  { label: "Nuestros clientes",    href: "#clientes" },
  { label: "Proyectos",           href: "#proyectos" },
  { label: "Metodología",          href: "#metodologia" },
  { label: "Contacto",             href: "#contacto" },
];

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer
      id="contacto"
      style={{
        backgroundColor: "#1b1e1c",
        scrollMarginTop: "8rem",
      }}
    >
      {/* ── Brand bar ── */}
      <div style={{
        paddingInline: "clamp(0.75rem, 4vw, 5rem)",
        paddingTop: "4rem",
        paddingBottom: "3rem",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
      }}>
        <div style={{ position: "relative", width: "48px", height: "48px", flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="ROMA"
            fill
            className="object-contain"
          />
        </div>

        <div>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "white",
            lineHeight: 1,
            marginBottom: "0.35rem",
          }}>
            ROMA
          </p>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.68rem",
            color: "rgba(255,255,255,0.38)",
            letterSpacing: "0.06em",
          }}>
            Empresa mexicana · 15 años de experiencia
          </p>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div
        style={{
          paddingInline: "clamp(0.75rem, 4vw, 5rem)",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "3rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Contact */}
        <div>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "1.25rem",
          }}>
            Contacto
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Emails */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <a
                href="mailto:hector.andrade@andamiosroma.com.mx"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                hector.andrade@andamiosroma.com.mx
              </a>
              <a
                href="mailto:h.cajiga@andamiosroma.com.mx"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                h.cajiga@andamiosroma.com.mx
              </a>
            </div>

            {/* Phones */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <a
                href="tel:3331151251"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                33-3115-1251
              </a>
              <a
                href="tel:5548009797"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                55-4800-9797
              </a>
            </div>

            <p style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: "1.4",
            }}>
              {footer.address}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "1.25rem",
          }}>
            Navegación
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "white")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes */}
        <div>
          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "1.25rem",
          }}>
            Redes sociales
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {footer.socials.map((social) => (
              <li key={social}>
                <a
                  href="#"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "white")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >
                  {social}
                  <svg viewBox="0 0 10 10" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="1.4" style={{ opacity: 0.5 }}>
                    <path d="M2 8L8 2M3 2h5v5" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        paddingInline: "clamp(0.75rem, 4vw, 5rem)",
        paddingTop: "1.5rem",
        paddingBottom: "1.75rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.75rem",
      }}>
        <p style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "0.68rem",
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.04em",
        }}>
          {footer.copyright}
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href="#"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            Política de privacidad
          </a>
          <a
            href="/"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            ↑ Volver al inicio
          </a>
        </div>
      </div>
    </footer>
  );
}
