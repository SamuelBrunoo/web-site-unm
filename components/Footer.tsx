import { Instagram, MessageCircle } from "lucide-react"
import { WHATSAPP } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="brand-rule" />
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/50">
          © 2026 UNM Serviços. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/unmservicos"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-accent"
          >
            <Instagram className="size-4" /> @unmservicos
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-accent"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
