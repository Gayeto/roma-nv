import { siteContent } from "@/lib/content";
import Image from "next/image";

export default function QuienesSomos() {
  const { quienesSomos } = siteContent;

  return (
    <section
      className="pb-0 overflow-hidden"
      id="nosotros"
      style={{ scrollMarginTop: "8rem" }}
    >
      <div
        className="flex flex-col md:flex-row items-stretch gap-0"
        style={{ minHeight: "clamp(320px, 38vw, 480px)" }}
      >
        {/* Text column: cambiamos justify-end por justify-start para que suba */}
        <div
          className="flex-1 min-w-0 flex flex-col justify-start gap-8"
          style={{
            paddingLeft: "clamp(0.75rem, 4vw, 5rem)",
            paddingRight: "clamp(1rem, 3vw, 3rem)",
            paddingTop: "1rem", // Ajusta este valor si quieres el texto más o menos pegado al Hero
          }}
        >
          <h2
            className="font-playfair font-normal text-roma-dark uppercase leading-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {quienesSomos.heading}
          </h2>

          <p
            className="font-inter text-roma-dark leading-relaxed max-w-sm"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
          >
            {quienesSomos.body}
          </p>
        </div>

        {/* Right: imagen intacta como la tenías */}
        <div
          className="relative w-full md:w-[44%] shrink-0 aspect-[4/3] md:aspect-auto"
        >
          <Image
            src="/quienes_somos.png"
            alt="Quiénes somos — ROMA Andamios"
            fill
            className="object-contain object-right-top"
            sizes="(max-width: 768px) 100vw, 44vw"
          />
        </div>
      </div>
    </section>
  );
}
