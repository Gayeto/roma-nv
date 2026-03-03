import Image from "next/image";
import { siteContent } from "@/lib/content";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative overflow-hidden" style={{ height: "100dvh", minHeight: "560px" }}>
      {/* Background image */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-roma-dark/45" />

      {/* Side label left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <span className="text-white/60 text-xs font-inter tracking-[0.2em] uppercase">
          {hero.label}
        </span>
      </div>

      {/* Explore button — right side */}
      <a
        href="#nosotros"
        className="group absolute right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer select-none"
      >
        {/* Texto + flecha en la misma fila */}
        <div className="flex items-center gap-2">
          <span className="text-white/55 text-[10px] font-inter tracking-[0.25em] uppercase">
            Explorar
          </span>

          {/* Una sola flecha — clipa la animación */}
          <div className="relative overflow-hidden" style={{ height: "1.1rem", width: "0.85rem" }}>
            {/* Flecha saliente: visible → baja y desaparece en hover */}
            <span
              className="absolute inset-0 flex items-center justify-center text-white/55 text-sm leading-none
                group-hover:translate-y-5 group-hover:opacity-0 transition-all duration-300 ease-in-out"
            >
              ↓
            </span>
            {/* Flecha entrante: oculta arriba → baja y aparece en hover */}
            <span
              className="absolute inset-0 flex items-center justify-center text-white/85 text-sm leading-none
                -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-300 ease-in-out"
            >
              ↓
            </span>
          </div>
        </div>

        {/* Línea horizontal debajo — subraya texto + flecha */}
        <div className="h-px w-full bg-white/0 group-hover:bg-white/55 transition-all duration-400" />
      </a>

      {/* Bottom large title */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12">
        <h1
          className="text-white font-inter font-normal uppercase tracking-tight"
          style={{
            fontSize: "clamp(5rem, 15.5vw, 14rem)",
            lineHeight: "0.88",
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          {hero.title}
        </h1>
      </div>
    </section>
  );
}
