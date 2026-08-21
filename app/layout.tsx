import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/context/QuoteContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const SITE_URL = "https://www.unmservicos.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UNM Serviços — Hidráulica e Gás na Grande Florianópolis",
    template: "%s | UNM Serviços",
  },
  description:
    "Reparos e instalações hidráulicas, sistemas de gás e projetos residenciais na Grande Florianópolis. Preços na tabela e orçamento imediato pelo WhatsApp.",
  keywords: [
    "hidráulica Florianópolis",
    "encanador Florianópolis",
    "instalador de gás Florianópolis",
    "desentupimento vaso sanitário",
    "reparo hidráulico Grande Florianópolis",
    "UNM Serviços",
  ],
  authors: [{ name: "UNM Serviços" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "UNM Serviços",
    title: "UNM Serviços — Hidráulica e Gás na Grande Florianópolis",
    description:
      "Reparos e instalações hidráulicas, sistemas de gás e projetos residenciais. Preços na tabela e orçamento imediato pelo WhatsApp.",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "UNM Serviços — Hidráulica e Gás",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNM Serviços — Hidráulica e Gás na Grande Florianópolis",
    description:
      "Reparos e instalações hidráulicas, sistemas de gás e projetos residenciais na Grande Florianópolis.",
    images: ["/images/og-cover.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "UNM Serviços",
  image: `${SITE_URL}/images/og-cover.svg`,
  telephone: "+5548998176620",
  url: SITE_URL,
  areaServed: [
    "Florianópolis",
    "São José",
    "Palhoça",
    "Biguaçu",
    "Antônio Carlos",
    "Santo Amaro da Imperatriz",
    "Águas Mornas",
    "São Pedro de Alcântara",
    "Governador Celso Ramos",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
  sameAs: ["https://instagram.com/unmservicos"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <QuoteProvider>{children}</QuoteProvider>
      </body>
    </html>
  );
}
