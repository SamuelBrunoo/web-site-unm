"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { serviceCategories, buildWhatsappLink, type ServiceItem, CategoryId, Service } from "@/lib/data"

type QuoteContextValue = {
  isOpen: boolean
  openDrawer: (category?: CategoryId) => void
  closeDrawer: () => void
  selectedIds: Set<string>
  toggleItem: (item: ServiceItem) => void
  total: number
  itemCount: number
  whatsappHref: string
  pageCategory: CategoryId
  setPageCategory: (c: CategoryId) => void
  goToPricing: (c: CategoryId) => void
  category: CategoryId
  items: Service[]
  setCategory: (c: CategoryId) => void
  remove: (id: string) => void
  has: (id: string) => boolean
}

const QuoteContext = createContext<QuoteContextValue | null>(null)

const allItems = serviceCategories.flatMap((c) => c.items)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState<CategoryId>("hidraulica")
  const [pageCategory, setPageCategory] = useState<CategoryId>("hidraulica")
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [items, setItems] = useState<Service[]>([])

  const openDrawer = useCallback((c?: CategoryId) => {
    if (c) setCategory(c)
    setIsOpen(true)
  }, [])
  const closeDrawer = useCallback(() => setIsOpen(false), [])

  const toggleItem = useCallback((item: ServiceItem) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(item.id)) {
        next.delete(item.id)
      } else {
        next.add(item.id)
      }
      return next
    })
  }, [])

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const goToPricing = useCallback((c: CategoryId) => {
    setPageCategory(c)
    document.getElementById("orcamentos")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const selectedItems = useMemo(
    () => allItems.filter((item) => selectedIds.has(item.id)),
    [selectedIds]
  )

  const total = useMemo(
    () => selectedItems.reduce((sum, item) => sum + item.price, 0),
    [selectedItems]
  )

  const whatsappHref = useMemo(() => {
    if (selectedItems.length === 0) {
      return buildWhatsappLink(
        "Olá, Udson! Vim pelo site da UNM Serviços e preciso de um orçamento."
      )
    }
    const lines = selectedItems
      .map((item) => `- ${item.name} (R$ ${item.price.toFixed(2).replace(".", ",")})`)
      .join("\n")
    const message = `Olá, Udson! Montei um orçamento no site da UNM Serviços:\n\n${lines}\n\nTotal estimado: a partir de R$ ${total
      .toFixed(2)
      .replace(".", ",")}\n\nPode confirmar disponibilidade?`
    return buildWhatsappLink(message)
  }, [selectedItems, total])

  const value: QuoteContextValue = {
    isOpen,
    openDrawer,
    closeDrawer,
    selectedIds,
    toggleItem,
    total: items.reduce((a, b) => a + b.price, 0),
    itemCount: selectedItems.length,
    whatsappHref,
    pageCategory,
    setPageCategory,
    goToPricing,
    items,
    remove,
    category,
    setCategory,
    has: (id: string) => items.some((i) => i.id === id),
  }

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider")
  return ctx
}
