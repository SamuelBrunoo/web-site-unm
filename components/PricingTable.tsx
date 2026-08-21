"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { CATEGORIES, SERVICES, EXTRAS, brl } from "@/lib/data"
import { useQuote } from "@/context/QuoteContext"

const LIMIT = 10

export default function Pricing() {
  const { pageCategory, setPageCategory, openDrawer } = useQuote()
  const [expanded, setExpanded] = useState(false)
  const list = SERVICES[pageCategory]
  const collapsible = list.length > LIMIT
  const visible = collapsible && !expanded ? list.slice(0, LIMIT) : list

  const selectCategory = (id: typeof pageCategory) => {
    setPageCategory(id)
    setExpanded(false)
  }

  return (
    <section id="orcamentos" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep">
              Tabela de referência
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.02]">
              Preço na mesa antes
              <br />
              de qualquer visita.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Consulte os valores de referência por tipo de serviço. Para montar um orçamento
            com vários itens, use o botão no fim da seção.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => selectCategory(c.id)}
              className={`rounded-md px-4 py-2.5 text-sm font-semibold transition-all ${pageCategory === c.id
                ? "brand-gradient text-white"
                : "border border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div key={pageCategory} className="rise-in mt-8">
          {list.length === 0 ? (
            <div className="grid items-center gap-8 rounded-xl bg-primary p-8 text-primary-foreground lg:grid-cols-[1.2fr_1fr] lg:p-12">
              <div>
                <h3 className="text-3xl leading-tight">Cada projeto residencial é único.</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/70">
                  Fale com a gente e receba um orçamento personalizado para o seu espaço —
                  dimensionamento de rede, água quente, PPR e execução acompanhada.
                </p>
              </div>
              <button
                onClick={() => openDrawer("projetos")}
                className="brand-gradient group flex items-center justify-center gap-2 rounded-md px-6 py-4 font-semibold text-white lg:justify-self-end"
              >
                Solicitar projeto
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          ) : (
            <div className="relative">
              <ul className="grid gap-x-10 md:grid-cols-2">
                {visible.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-baseline gap-4 border-b border-border py-3.5"
                  >
                    <span className="flex-1 text-[14px] leading-snug">{s.name}</span>
                    <span className="font-display text-base font-semibold text-primary">
                      {brl(s.price)}
                    </span>
                  </li>
                ))}
              </ul>

              {collapsible && !expanded && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/85 to-transparent" />
              )}

              {collapsible && (
                <div className="relative mt-6 flex justify-center">
                  <button
                    onClick={() => setExpanded((v) => !v)}
                    className="group flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent-deep"
                  >
                    {expanded ? "Ver menos" : `Ver mais (${list.length - LIMIT})`}
                    <ChevronDown
                      className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-8 rounded-xl bg-primary-50 p-6 lg:grid-cols-[1fr_1.4fr] lg:p-8">
          <div>
            <h3 className="text-lg">Informações complementares</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              Valores de referência sujeitos a confirmação após avaliação técnica. Peças e
              materiais não estão inclusos, salvo indicação contrária.
            </p>
          </div>
          <dl className="grid gap-x-8 sm:grid-cols-2">
            {EXTRAS.map((e) => (
              <div
                key={e.item}
                className="flex items-baseline justify-between gap-3 border-b border-primary-100 py-2 text-[13px]"
              >
                <dt className="text-muted-foreground">{e.item}</dt>
                <dd className="font-semibold text-primary">{e.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Precisa de mais de um serviço? Monte seu orçamento e receba o total estimado
            direto no WhatsApp.
          </p>
          <button
            onClick={() => openDrawer(pageCategory)}
            className="brand-gradient cta-pulse group mt-5 flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Montar orçamento
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
