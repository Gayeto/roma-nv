import { siteContent } from "@/lib/content";

const STEP_ICONS = [
  /* 1 - Requerimientos: clipboard con check */
  <svg key="req" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  /* 2 - Programar fecha: calendario */
  <svg key="fecha" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4" />
  </svg>,
  /* 3 - Documentación: archivo con líneas */
  <svg key="doc" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>,
  /* 4 - Pago: signo de dólar */
  <svg key="pago" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M14.5 9.5a2.5 2.5 0 0 0-5 0c0 1.5 1 2 2.5 2.5s2.5 1 2.5 2.5a2.5 2.5 0 0 1-5 0" />
  </svg>,
];

export default function Metodologia() {
  const { metodologia } = siteContent;

  return (
    <section
      id="metodologia"
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        paddingInline: "clamp(0.75rem, 4vw, 5rem)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        scrollMarginTop: "8rem",
      }}
    >
      {/* Content */}
      <div>

        {/* Heading */}
        <h2
          className="font-playfair font-normal uppercase leading-[0.9] whitespace-pre-line"
          style={{
            fontSize: "clamp(3rem, 7.5vw, 7rem)",
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#1b1e1c",
            marginBottom: "3rem",
          }}
        >
          {metodologia.headline}
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {metodologia.steps.map((step, i) => (
            <div key={step.number} style={{ position: "relative", paddingTop: "1.25rem" }}>

              {/* Number badge — sits on top edge of card */}
              <div style={{
                position: "absolute",
                top: 0,
                left: "1.5rem",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#1b1e1c",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}>
                <span style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "white",
                }}>
                  {i + 1}
                </span>
              </div>

              {/* Card */}
              <div style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                border: "2px solid #03c516",
                padding: "2rem 1.5rem 1.75rem",
                height: "100%",
              }}>
                {/* Green icon box */}
                <div style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "#03c516",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  {STEP_ICONS[i]}
                </div>

                <h3 style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "clamp(0.8rem, 1.1vw, 1rem)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "#1b1e1c",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.02em",
                }}>
                  {step.name}
                </h3>

                <p style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "clamp(0.78rem, 0.95vw, 0.875rem)",
                  color: "#4a4a4a",
                  lineHeight: 1.65,
                }}>
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
