import Image from "next/image";
import { siteContent } from "@/lib/content";

export default function Diferenciador() {
  const { diferenciador } = siteContent;

  const pointRow = (point: typeof diferenciador.points[0], i: number, isLast: boolean, mobile = false) => (
    <div
      key={i}
      style={{
        display: "flex",
        alignItems: "center",
        gap: mobile ? "0.85rem" : "1.25rem",
        padding: mobile ? "1rem 0" : "1.35rem 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: isLast ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      {/* Green number */}
      <span style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: mobile ? "0.58rem" : "0.62rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        color: "#03c516",
        flexShrink: 0,
        width: "1.6rem",
      }}>
        {String(i + 1).padStart(2, "0")}
      </span>

      {/* Icon in a subtle green-tinted box */}
      <div style={{
        flexShrink: 0,
        width: mobile ? "2rem" : "2.25rem",
        height: mobile ? "2rem" : "2.25rem",
        backgroundColor: "rgba(3,197,22,0.1)",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Image
          src={point.icon}
          alt=""
          width={mobile ? 18 : 20}
          height={mobile ? 18 : 20}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Text */}
      <p style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: mobile ? "0.9rem" : "clamp(0.95rem, 1.35vw, 1.1rem)",
        color: "rgba(255,255,255,0.6)",
        lineHeight: 1.4,
        margin: 0,
        flex: 1,
      }}>
        {point.prefix}
        <strong style={{ color: "white", fontWeight: 600 }}>{point.bold}</strong>
      </p>

      {/* Subtle arrow */}
      {!mobile && (
        <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.9rem", flexShrink: 0 }}>
          →
        </span>
      )}
    </div>
  );

  return (
    <section id="diferenciador" style={{ scrollMarginTop: "8rem" }}>

      {/* ── DESKTOP: split — video left | content right ── */}
      <div className="hidden md:flex" style={{ minHeight: "100vh" }}>

        {/* Left panel: video full-bleed */}
        <div style={{ position: "relative", width: "45%", flexShrink: 0, overflow: "hidden" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(27,30,28,0.1) 0%, rgba(27,30,28,0.5) 100%)",
          }} />
        </div>

        {/* Right panel: dark content */}
        <div style={{
          flex: 1,
          backgroundColor: "#1b1e1c",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5rem clamp(2.5rem, 6vw, 6rem)",
        }}>

          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#03c516",
            marginBottom: "1.75rem",
          }}>
            Nuestro diferenciador
          </p>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.5rem, 4.5vw, 5rem)",
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: 0.92,
            color: "white",
            whiteSpace: "pre-line",
            marginBottom: "3rem",
          }}>
            {diferenciador.headline}
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {diferenciador.points.map((point, i) =>
              pointRow(point, i, i === diferenciador.points.length - 1)
            )}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <a
              href={diferenciador.cta.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "white",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.35)",
                paddingBottom: "0.3rem",
              }}
            >
              {diferenciador.cta.label}
              <span style={{ fontSize: "0.9rem" }}>→</span>
            </a>
          </div>

        </div>
      </div>

      {/* ── MOBILE: video top → fade into dark content ── */}
      <div className="md:hidden" style={{ backgroundColor: "#1b1e1c" }}>

        <div style={{ position: "relative", height: "58vw", minHeight: "220px", overflow: "hidden" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(27,30,28,0.1) 0%, rgba(27,30,28,1) 100%)",
          }} />
        </div>

        <div style={{ padding: "0 clamp(0.75rem, 4vw, 2rem) 3.5rem" }}>

          <p style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#03c516",
            marginBottom: "1rem",
          }}>
            Nuestro diferenciador
          </p>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.4rem, 11vw, 3.8rem)",
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: 0.93,
            color: "white",
            whiteSpace: "pre-line",
            marginBottom: "2.5rem",
          }}>
            {diferenciador.headline}
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {diferenciador.points.map((point, i) =>
              pointRow(point, i, i === diferenciador.points.length - 1, true)
            )}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <a
              href={diferenciador.cta.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.65rem",
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "white",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.35)",
                paddingBottom: "0.25rem",
              }}
            >
              {diferenciador.cta.label}
              <span>→</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
