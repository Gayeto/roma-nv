import Image from "next/image";

const ROW1 = Array.from({ length: 10 }, (_, i) => `/logos_marcas/Imagen${i + 4}.png`);   // 4-13
const ROW2 = Array.from({ length: 10 }, (_, i) => `/logos_marcas/Imagen${i + 14}.png`);  // 14-23
const ROW3 = [
  ...Array.from({ length: 8 }, (_, i) => `/logos_marcas/Imagen${i + 24}.png`), // 24-31
  `/logos_marcas/Imagen33.png`,                                                  // skip 32 (missing)
  `/logos_marcas/Imagen34.png`,
];
const ROW4 = Array.from({ length: 10 }, (_, i) => `/logos_marcas/Imagen${i + 35}.png`);  // 35-44

const ROWS: { logos: string[]; dir: "right" | "left" }[] = [
  { logos: ROW1, dir: "right" },
  { logos: ROW2, dir: "left"  },
  { logos: ROW3, dir: "right" },
  { logos: ROW4, dir: "left"  },
];

export default function Clientes() {
  return (
    <>
    <style>{`
      @keyframes scroll-right {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @keyframes scroll-left {
        from { transform: translateX(-50%); }
        to   { transform: translateX(0); }
      }
    `}</style>
    <section
      style={{ paddingInline: "clamp(0.75rem, 4vw, 5rem)", scrollMarginTop: "8rem" }}
      className="py-24"
      id="clientes"
    >
      {/* Heading */}
      <h2
        className="font-playfair font-normal uppercase leading-none text-roma-dark mb-16"
        style={{ fontSize: "clamp(3rem, 7.5vw, 7rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        NUESTROS CLIENTES
      </h2>

      {/* 4 infinite carousels */}
      <div className="flex flex-col gap-8">
        {ROWS.map((row, ri) => (
          <div key={ri} className="overflow-hidden">
            {/* Track duplicated for seamless loop */}
            <div
              style={{
                display: "flex",
                width: "max-content",
                animation: `${row.dir === "right" ? "scroll-right" : "scroll-left"} 28s linear infinite`,
              }}
            >
              {[...row.logos, ...row.logos].map((src, i) => (
                <div
                  key={i}
                  style={{ flexShrink: 0, width: "140px", padding: "0 1.5rem" }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt=""
                    width={110}
                    height={55}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
