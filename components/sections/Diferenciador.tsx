import Image from "next/image";
import { siteContent } from "@/lib/content";

const STAGGER = ["0rem", "clamp(0rem, 5vw, 5rem)", "clamp(0rem, 9vw, 10rem)", "clamp(0rem, 13vw, 15rem)"];

export default function Diferenciador() {
  const { diferenciador } = siteContent;

  return (
    <section
      id="diferenciador"
      style={{ paddingInline: "clamp(0.75rem, 4vw, 5rem)", scrollMarginTop: "8rem" }}
      className="py-16 md:py-32"
    >

      {/* ── MOBILE ── */}
      <div className="md:hidden">
        <h2
          className="font-playfair font-normal uppercase leading-none whitespace-pre-line text-roma-dark mb-10"
          style={{ fontSize: "clamp(2.8rem, 12vw, 4.5rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {diferenciador.headline}
        </h2>

        {/* 2×2 grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
          {diferenciador.points.map((point, i) => (
            <div
              key={i}
              style={{
                borderTop: "3px solid #03c516",
                backgroundColor: "#f8faf8",
                padding: "1.25rem 1rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {/* Icon */}
              <div style={{ position: "relative", width: "2.2rem", height: "2.2rem", flexShrink: 0 }}>
                <Image src={point.icon} alt="" fill className="object-contain" />
              </div>
              {/* Text */}
              <p style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.82rem",
                color: "rgba(27,30,28,0.75)",
                lineHeight: 1.5,
              }}>
                {point.prefix}
                <strong style={{ fontWeight: 700, color: "#1b1e1c" }}>{point.bold}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-row gap-20 items-stretch mb-16">
        {/* Left: headline + staggered points */}
        <div className="flex-1 min-w-0 flex flex-col">
          <h2
            className="font-playfair font-normal uppercase leading-none whitespace-pre-line text-roma-dark"
            style={{ fontSize: "clamp(3rem, 7.5vw, 7rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {diferenciador.headline}
          </h2>

          <div className="flex-1 flex items-center">
            <ul className="space-y-8 w-full">
              {diferenciador.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4"
                  style={{ paddingLeft: STAGGER[i] }}
                >
                  <div className="relative shrink-0" style={{ width: "2.6rem", height: "2.6rem" }}>
                    <Image src={point.icon} alt="" fill className="object-contain" />
                  </div>
                  <span
                    className="font-inter text-roma-dark/80 leading-relaxed"
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
                  >
                    {point.prefix}
                    <strong className="font-bold text-roma-dark">{point.bold}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative w-96 aspect-[3/4] overflow-hidden shrink-0">
          <Image
            src={diferenciador.image}
            alt={diferenciador.imageAlt}
            fill
            className="object-cover"
            sizes="384px"
          />
        </div>
      </div>

    </section>
  );
}
