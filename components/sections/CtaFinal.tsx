import Image from "next/image";
import { siteContent } from "@/lib/content";
import { ArrowLink } from "@/components/ui/ArrowLink";

export default function CtaFinal() {
  const { ctaFinal } = siteContent;

  return (
    <section style={{ paddingInline: "clamp(0.75rem, 4vw, 5rem)" }} className="py-24 border-t border-roma-muted/25">
      {/* Split layout: text left + image right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start mb-0">
        {/* Left: large headline */}
        <div>
          <h2
            className="font-cormorant uppercase leading-[1.02] text-roma-dark whitespace-pre-line"
            style={{ fontSize: "clamp(2.4rem, 4.8vw, 4.8rem)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {ctaFinal.headline}
          </h2>
        </div>

        {/* Right: image */}
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src={ctaFinal.image}
            alt={ctaFinal.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Bottom: body text + CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 border-t border-roma-muted/25 pt-8">
        <div>
          <p className="text-sm font-inter text-roma-dark/70 leading-[1.8] max-w-sm">
            {ctaFinal.body}
          </p>
        </div>
        <div className="flex md:justify-end items-start">
          <ArrowLink href={ctaFinal.cta.href} className="text-base">
            {ctaFinal.cta.label}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
