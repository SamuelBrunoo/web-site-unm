"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { CATEGORIES, HERO_HIGHLIGHTS, waLink } from "@/lib/data";
import { useQuote } from "@/context/QuoteContext";
import hidraulica from "@/public/images//hero-hidraulica.jpg";
import gas from "@/public/images//hero-gas.jpg";
import projetos from "@/public/images//hero-projetos.jpg";
import { StaticImageData } from "next/image"

const IMAGES: Record<string, StaticImageData> = { hidraulica, gas, projetos };

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { goToPricing } = useQuote();

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % CATEGORIES.length), 6500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = CATEGORIES[index]!;

  const drag = useRef<{ x: number; active: boolean }>({ x: 0, active: false });

  const onDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, active: true };
  };

  const onUp = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.x;
    drag.current.active = false;
    if (Math.abs(dx) > 60) {
      setIndex((i) =>
        dx < 0
          ? (i + 1) % CATEGORIES.length
          : (i - 1 + CATEGORIES.length) % CATEGORIES.length,
      );
    }
  };

  return (
    <section
      id="top"
      ref={ref}
      onPointerDown={onDown}
      onPointerUp={onUp}
      onPointerCancel={() => (drag.current.active = false)}
      className="relative min-h-[100svh] touch-pan-y overflow-hidden bg-primary-dark"
    >

      {CATEGORIES.map((c, i) => (
        <div
          key={c.id}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-[900ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={IMAGES[c.id].src}
            alt={c.label}
            draggable={false}
            width={1600}
            height={1104}
            loading={i === 0 ? "eager" : "lazy"}
            style={{ transform: `translate3d(0, ${offset * 0.28}px, 0) scale(1.12)` }}
            className="h-full w-full object-cover will-change-transform"
          />
        </div>
      ))}

      {/* depth layers: text sits between image and foreground veil */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/80 to-primary-dark/10" />

      <div
        style={{ transform: `translate3d(0, ${offset * -0.1}px, 0)` }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1200px] flex-col justify-end px-5 pb-24 pt-32 lg:pb-28"
      >
        <div key={active.id} className="max-w-2xl">
          <div className="rise-in flex items-center gap-3">
            <span className="brand-gradient h-px w-10" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              {active.kicker}
            </span>
          </div>
          <h1
            className="rise-in mt-4 whitespace-pre-line text-[clamp(2.4rem,7vw,4.6rem)] leading-[0.98] text-white"
            style={{ animationDelay: "80ms" }}
          >
            {active.title}
          </h1>
          <p
            className="rise-in mt-4 max-w-lg text-[15px] leading-relaxed text-white/70"
            style={{ animationDelay: "160ms" }}
          >
            {active.desc}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {HERO_HIGHLIGHTS[active.id].map((h, i) => (
              <span
                key={h.name}
                className="rise-in flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-[12.5px] text-white/85 backdrop-blur-sm"
                style={{ animationDelay: `${260 + i * 120}ms` }}
              >
                {h.name}
                <strong className="font-semibold text-accent">{h.price}</strong>
              </span>
            ))}
          </div>

          <div
            className="rise-in mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "560ms" }}
          >
            <button
              onClick={() => goToPricing(active.id)}
              className="brand-gradient group flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Ver mais orçamentos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={waLink(
                `Olá, Udson! Vim pelo site e preciso de um serviço de ${active.label}.`,
              )}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button
            aria-label="Slide anterior"
            onClick={() => setIndex((i) => (i - 1 + CATEGORIES.length) % CATEGORIES.length)}
            className="rounded-full border border-white/25 p-2 text-white/80 transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            aria-label="Próximo slide"
            onClick={() => setIndex((i) => (i + 1) % CATEGORIES.length)}
            className="rounded-full border border-white/25 p-2 text-white/80 transition-colors hover:bg-white/10"
          >
            <ArrowRight className="size-4" />
          </button>
          <div className="flex flex-1 gap-2">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setIndex(i)}
                aria-label={c.label}
                className="group relative h-[3px] flex-1 overflow-hidden bg-white/20"
              >
                <span
                  className={`absolute inset-y-0 left-0 brand-gradient transition-[width] duration-500 ${
                    i === index ? "w-full" : "w-0 group-hover:w-1/3"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-white/45 sm:block">
            Grande Florianópolis · desde 2016
          </span>
        </div>
      </div>
      <div className="brand-rule absolute inset-x-0 bottom-0" />
    </section>
  );
}
