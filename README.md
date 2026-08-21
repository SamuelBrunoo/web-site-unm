# UNM Serviços — versão Next.js

Reconstrução em Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion do
site institucional feito originalmente no Lovable (`build-flow-unm.lovable.app`).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## O que foi replicado

- Header fixo com transição de fundo ao rolar + drawer de navegação mobile animado
- Hero em slides por área de atuação (Hidráulica / Gás / Projetos) com autoplay,
  preços em destaque com fade-in e Ken Burns sutil na imagem
- Tabela de referência de preços com abas por categoria, seleção de itens e
  painel de "Informações complementares" (mão de obra, deslocamento, etc.)
- Drawer lateral de orçamento ("Montar orçamento") com resumo dos itens
  selecionados, total "a partir de R$ X" e CTA que monta a mensagem de
  WhatsApp automaticamente com os itens escolhidos
- Seção "Sobre" com o texto institucional
- Carrossel autoplay de depoimentos (marquee infinito, pausa no hover)
- Seção de área de atendimento com os 9 municípios
- CTA final de contato + footer com redes sociais

## O que precisa de atenção antes de publicar

1. **Imagens reais**: os arquivos em `public/images/hero-*.svg` e `og-cover.svg`
   são placeholders gerados localmente — não foi possível baixar as fotos
   originais do CDN do Lovable a partir deste ambiente (fora da rede
   liberada). Troque por fotos reais dos serviços (mesmo nome de arquivo,
   pode usar `.jpg`/`.webp`, só ajustar a extensão em `lib/data.ts`).
2. **Mapa da região atendida**: a versão original usa uma ilustração de mapa
   com limites municipais (referência visual do Depositphotos, que não pode
   ser reproduzida por direitos autorais). Troquei por uma grade de badges
   com os 9 municípios — dá pra substituir por um mapa próprio (ex: Mapbox,
   SVG customizado) se quiser recriar o visual original.
3. **Domínio real**: troque `https://www.unmservicos.com.br` em
   `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts` pelo domínio final.
4. **JSON-LD**: o schema `Plumber` em `app/layout.tsx` já cobre Local
   Business/SEO local básico — vale revisar telefone, endereço e horários
   quando tiver o domínio publicado no Google Search Console.

## Stack

- Next.js 14 (App Router, Server Components onde possível)
- TypeScript
- Tailwind CSS (tokens de cor navy/flame definidos em `tailwind.config.ts`)
- Framer Motion (animações de entrada, slides do hero, drawer)
- next/font (Inter + Plus Jakarta Sans, self-hosted via Google Fonts)
- Metadata API do Next para SEO (Open Graph, Twitter Card, sitemap, robots)

## Estrutura

```
app/            layout, page, metadata, sitemap, robots
components/     Header, Hero, PricingTable, QuoteDrawer, About,
                Testimonials, ServiceArea, ContactCTA, Footer
context/        QuoteContext (estado do orçamento compartilhado)
lib/data.ts     conteúdo do site (serviços, preços, depoimentos, hero)
public/images/  imagens estáticas (placeholders — ver acima)
```
