"use client"

import { useEffect } from "react"
import { X, Plus, Check, Trash2, MessageCircle } from "lucide-react"
import { CATEGORIES, SERVICES, brl, waLink } from "@/lib/data"
import { useQuote } from "@/context/QuoteContext"

export default function QuoteDrawer() {
  const { isOpen, closeDrawer, category, setCategory, items, toggleItem, remove, has, total } =
    useQuote()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeDrawer()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, closeDrawer])

  const list = SERVICES[category]

  const message = () => {
    const lines = items.map((i) => `• ${i.name} — ${brl(i.price)}`).join("\n")
    return `Olá, Udson! Montei um orçamento no site da UNM Serviços:\n\n${lines}\n\nTotal estimado: a partir de ${brl(total)}\n\nPode confirmar disponibilidade?`
  }

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[70] ${isOpen ? "" : "pointer-events-none"}`}
    >
      <div
        onClick={closeDrawer}
        className={`absolute inset-0 bg-primary-dark/60 backdrop-blur-[2px] transition-opacity duration-400 ${isOpen ? "opacity-100" : "opacity-0"
          }`}
      />
      <aside
        role="dialog"
        aria-label="Montar orçamento"
        className={`absolute bottom-0 right-0 flex h-[92dvh] w-full flex-col bg-background shadow-2xl transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] sm:h-full sm:max-w-[460px] ${isOpen
            ? "translate-y-0 sm:translate-x-0"
            : "translate-y-full sm:translate-y-0 sm:translate-x-full"
          }`}
      >
        <div className="brand-rule shrink-0" />
        <header className="flex items-start justify-between gap-4 px-6 pb-4 pt-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              UNM Serviços
            </p>
            <h2 className="mt-1 text-2xl">Montar orçamento</h2>
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Fechar"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        </header>

        <div className="flex gap-1 px-6">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`flex-1 rounded-t-md border-b-2 px-2 py-2 text-xs font-semibold transition-colors ${category === c.id
                  ? "border-accent text-primary"
                  : "border-border text-muted-foreground hover:text-primary"
                }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div key={category} className="rise-in flex-1 overflow-y-auto px-6 py-4">
          {category === "projetos" ? (
            <div className="rounded-lg bg-primary-50 p-5">
              <h3 className="text-lg">Projeto sob medida</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cada projeto residencial é único. Descreva seu espaço no WhatsApp e o Udson
                retorna com um orçamento personalizado.
              </p>
              <a
                href={waLink(
                  "Olá, Udson! Quero um orçamento para um projeto residencial personalizado.",
                )}
                target="_blank"
                rel="noopener"
                className="brand-gradient mt-4 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white"
              >
                <MessageCircle className="size-4" /> Falar com o Udson
              </a>
            </div>
          ) : (
            <ul className="space-y-1.5">
              {list.map((s) => {
                const active = has(s.id)
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => toggleItem(s)}
                      className={`flex w-full items-center gap-3 rounded-md border px-3 py-2.5 text-left transition-colors ${active
                          ? "border-accent bg-accent/8"
                          : "border-border hover:border-primary/40"
                        }`}
                    >
                      <span
                        className={`grid size-5 shrink-0 place-items-center rounded border ${active
                            ? "brand-gradient border-transparent text-white"
                            : "border-border text-muted-foreground"
                          }`}
                      >
                        {active ? <Check className="size-3" /> : <Plus className="size-3" />}
                      </span>
                      <span className="flex-1 text-[13px] leading-snug">{s.name}</span>
                      <span className="text-sm font-semibold text-primary">
                        {brl(s.price)}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <footer className="shrink-0 border-t border-border bg-primary-50/70 px-6 pb-5 pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Resumo do orçamento
          </p>
          {items.length === 0 ? (
            <p className="mt-2 text-sm text-muted-foreground">
              Nenhum serviço selecionado ainda. Escolha os itens acima para montar o seu
              orçamento.
            </p>
          ) : (
            <ul className="mt-2 max-h-32 space-y-1 overflow-y-auto">
              {items.map((i) => (
                <li key={i.id} className="rise-in flex items-center gap-2 text-[13px]">
                  <span className="flex-1 truncate">{i.name}</span>
                  <span className="font-medium">{brl(i.price)}</span>
                  <button
                    onClick={() => remove(i.id)}
                    aria-label={`Remover ${i.name}`}
                    className="text-muted-foreground transition-colors hover:text-accent-deep"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">A partir de</span>
            <span key={total} className="rise-in text-2xl font-bold text-primary">
              {brl(total)}
            </span>
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            Os valores podem sofrer alterações após avaliação técnica presencial. Peças e
            materiais não estão inclusos, salvo indicação contrária.
          </p>
          <a
            href={waLink(message())}
            target="_blank"
            rel="noopener"
            aria-disabled={items.length === 0}
            className={`brand-gradient mt-3 flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white transition-opacity ${items.length === 0 ? "pointer-events-none opacity-40" : "hover:opacity-92"
              }`}
          >
            <MessageCircle className="size-4" /> Confirmar orçamento no WhatsApp
          </a>
        </footer>
      </aside>
    </div>
  )
}
