"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useQuote } from "@/context/QuoteContext"

const NAV = [
  { label: "Orçamentos", href: "#orcamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)
  const { openDrawer } = useQuote()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (href: string) => {
    setMenu(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${solid
          ? "bg-primary-dark/95 shadow-[0_1px_0_0_oklch(1_0_0/0.08),0_10px_40px_-24px_oklch(0_0_0/0.7)] backdrop-blur-md"
          : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5 lg:h-20">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex items-baseline gap-2 text-white"
          >
            <span className="font-display text-xl font-bold tracking-tight">UNM</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
              Serviços
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                className="relative text-sm font-medium text-white/80 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openDrawer()}
              className="brand-gradient cta-pulse rounded-md px-4 py-2.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Pedir Orçamento
            </button>
            <button
              onClick={() => setMenu(true)}
              aria-label="Abrir menu"
              className="rounded-md border border-white/25 p-2 text-white lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — rises from the bottom */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${menu ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setMenu(false)}
          className={`absolute inset-0 bg-primary-dark/50 backdrop-blur-[2px] transition-opacity duration-400 ${menu ? "opacity-100" : "opacity-0"
            }`}
        />
        <div
          className={`absolute inset-x-0 bottom-0 rounded-t-2xl bg-primary-dark px-6 pb-8 pt-5 text-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${menu ? "translate-y-0" : "translate-y-full"
            }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
              Navegação
            </span>
            <button onClick={() => setMenu(false)} aria-label="Fechar menu">
              <X className="size-5" />
            </button>
          </div>
          <nav className="mt-5 flex flex-col">
            {NAV.map((n, i) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                style={{ animationDelay: menu ? `${100 + i * 60}ms` : "0ms" }}
                className={`border-b border-white/10 py-4 text-left font-display text-2xl ${menu ? "rise-in" : "opacity-0"}`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => {
              setMenu(false)
              openDrawer()
            }}
            className="brand-gradient mt-6 w-full rounded-md py-3.5 font-semibold"
          >
            Pedir Orçamento
          </button>
        </div>
      </div>
    </>
  )
}