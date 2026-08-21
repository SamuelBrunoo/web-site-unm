"use client"

import { MessageCircle, Clock } from "lucide-react"
import { waLink } from "@/lib/data"
import { CITIES } from "@/lib/cities"
import { useQuote } from "@/context/QuoteContext"

export default function Contact() {
  const { openDrawer } = useQuote()

  return (
    <section id="contato" className="scroll-mt-20 bg-primary-50">
      <div className="mx-auto grid max-w-[1400px] gap-0 lg:grid-cols-2">
        <div className="relative flex items-center justify-center overflow-hidden bg-primary px-6 py-14 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 70% 50% at 20% 0%, oklch(0.735 0.183 51 / 0.28), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, oklch(0.617 0.196 32 / 0.3), transparent 60%)",
            }}
          />
          <div className="relative w-full max-w-[540px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              Santa Catarina · Brasil
            </p>
            <h2 className="mt-2 text-2xl text-primary-foreground">Grande Florianópolis</h2>
            <p className="mt-1 text-xs text-primary-foreground/55">
              Limites municipais da região atendida
            </p>
            <svg
              viewBox="0 0 1000 1000"
              role="img"
              aria-label="Mapa dos municípios atendidos na Grande Florianópolis"
              className="mt-6 w-full overflow-visible drop-shadow-[0_30px_60px_oklch(0.215_0.075_269_/_0.55)]"
            >
              {CITIES.map((m, i) => (
                <path
                  key={m.name}
                  d={m.d}
                  strokeWidth={1.6}
                  strokeLinejoin="round"
                  className={`rise-in transition-[fill,stroke,filter] duration-300 ${m.hq
                    ? "fill-flame-400/30 stroke-flame-400 hover:fill-flame-400/50"
                    : "fill-neutral-50/10 stroke-neutral-50/30 hover:fill-neutral-50/20 hover:stroke-white/70"
                    }`}
                  style={{ paintOrder: "stroke fill", animationDelay: `${i * 70 + 120}ms` }}
                >
                  <title>{m.name}</title>
                </path>
              ))}
              {CITIES.map((m) => (
                <text
                  key={m.name}
                  x={m.x}
                  y={m.y}
                  textAnchor="middle"
                  className={`pointer-events-none uppercase ${m.hq ? "fill-accent" : "fill-white/85"
                    }`}
                  style={{
                    fontSize: `${m.size}px`,
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.045em",
                    fontWeight: m.hq ? 700 : 500,
                    stroke: "oklch(0.215 0.075 269 / 0.6)",
                    strokeWidth: 3,
                    strokeLinejoin: "round",
                    paintOrder: "stroke fill",
                  }}
                >
                  {m.lines.map((line, li) => (
                    <tspan key={line} x={m.x} dy={li === 0 ? 0 : m.size * 1.15}>
                      {line}
                    </tspan>
                  ))}
                </text>
              ))}
            </svg>
            <p className="mt-6 flex items-center gap-2 text-[11px] tracking-wide text-primary-foreground/55">
              <span className="inline-block size-1.5 rounded-full bg-accent/70" />9 municípios
              atendidos · sede em Florianópolis
            </p>
          </div>
        </div>


        <div className="flex items-center px-6 py-14 lg:px-14 lg:py-20">
          <div className="max-w-[460px]">
            <h2 className="text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.05]">
              Atendimento rápido em toda a Grande Florianópolis.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Fale direto com o Udson: você descreve o problema, recebe o orçamento e agenda
              a visita. Sem intermediário, sem espera.
            </p>
            <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              Seg a sáb, 8h às 18h · emergências sob consulta
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink("Olá, Udson! Vim pelo site da UNM Serviços e preciso de um orçamento.")}
                target="_blank"
                rel="noopener"
                className="brand-gradient flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" /> Conversar no WhatsApp
              </a>
              <button
                onClick={() => openDrawer()}
                className="rounded-md border border-primary px-5 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Montar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
