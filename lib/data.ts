export type ServiceItem = {
  id: string;
  name: string;
  price: number;
};

export type ServiceCategory = {
  id: "hidraulica" | "gas" | "projetos";
  label: string;
  items: ServiceItem[];
  hasFixedPricing: boolean;
};

export const WHATSAPP_NUMBER = "5548998176620";

export type CategoryId = "hidraulica" | "gas" | "projetos";

export type Service = { id: string; name: string; price: number };

export const CATEGORIES: {
  id: CategoryId;
  label: string;
  kicker: string;
  title: string;
  desc: string;
}[] = [
  {
    id: "hidraulica",
    label: "Hidráulica",
    kicker: "Água fria, água quente e PPR",
    title: "Reparos e instalações\nhidráulicas",
    desc: "Vazamentos, torneiras, descargas, desentupimento e limpeza de caixa d'água. Diagnóstico no mesmo dia.",
  },
  {
    id: "gas",
    label: "Gás",
    kicker: "Segurança certificada",
    title: "Instalação e manutenção\nde sistemas de gás",
    desc: "Troca de botijão, válvulas e mangueiras com teste de estanqueidade e execução dentro da norma.",
  },
  {
    id: "projetos",
    label: "Projetos Residenciais",
    kicker: "Sob medida, sob orçamento",
    title: "Projetos residenciais\npersonalizados",
    desc: "Do banheiro à casa inteira: dimensionamento, tubulação PPR e execução acompanhada de ponta a ponta.",
  },
];

export const SERVICES: Record<CategoryId, Service[]> = {
  hidraulica: [
    { id: "h1", name: "Substituir ou consertar vazamento em sifão (vedantes)", price: 60 },
    { id: "h2", name: "Substituir ou consertar torneira simples (vedantes/unidade)", price: 55 },
    { id: "h3", name: "Substituir ou consertar torneira com misturador", price: 75 },
    { id: "h4", name: "Reparo em descarga ou caixa acoplada (parcial)", price: 70 },
    { id: "h5", name: "Reparo em descarga ou caixa acoplada (completo)", price: 90 },
    { id: "h6", name: "Substituir reparo de válvula Hydra / Docol / Oriente", price: 90 },
    { id: "h7", name: "Desentupimento de vaso sanitário e mictório", price: 220 },
    { id: "h8", name: "Instalação ou substituição de vaso sanitário", price: 190 },
    { id: "h9", name: "Instalação de ducha higiênica", price: 70 },
    { id: "h10", name: "Substituir ou instalar tampa de vaso sanitário", price: 60 },
    { id: "h11", name: "Instalar ponto de água adicional (externo, na parede)", price: 90 },
    { id: "h12", name: "Instalar ponto de água adicional (interno, na parede)", price: 130 },
    { id: "h13", name: "Instalar máquina de lavar roupa", price: 80 },
    { id: "h14", name: "Instalar máquina de lavar louça", price: 80 },
    { id: "h15", name: "Instalar torneira elétrica", price: 100 },
    { id: "h16", name: "Instalar filtro ou purificador de água", price: 120 },
    { id: "h17", name: "Instalar ou substituir tanque (porcelana, resina ou plástico)", price: 180 },
    { id: "h18", name: "Substituir boia da caixa d'água", price: 100 },
    { id: "h19", name: "Limpeza de caixa de gordura residencial", price: 130 },
    { id: "h20", name: "Limpeza de caixa d'água (telhado, casa térrea, até 1.000L)", price: 250 },
    { id: "h21", name: "Limpeza de caixa d'água (telhado, sobrado, até 1.000L)", price: 300 },
  ],
  gas: [
    { id: "g1", name: "Substituir ou instalar botijão de gás", price: 60 },
    { id: "g2", name: "Substituir válvula ou mangueira de gás", price: 70 },
  ],
  projetos: [],
};

export const HERO_HIGHLIGHTS: Record<CategoryId, { name: string; price: string }[]> = {
  hidraulica: [
    { name: "Instalação de torneira", price: "R$ 55" },
    { name: "Reparo de descarga", price: "R$ 70" },
    { name: "Desentupimento de vaso", price: "R$ 220" },
  ],
  gas: [
    { name: "Troca de botijão", price: "R$ 60" },
    { name: "Válvula ou mangueira", price: "R$ 70" },
  ],
  projetos: [
    { name: "Visita técnica", price: "sob consulta" },
    { name: "Projeto personalizado", price: "sob orçamento" },
  ],
};

export const EXTRAS = [
  { item: "Mão de obra por hora", value: "R$ 60,00" },
  { item: "Mão de obra por dia", value: "R$ 480,00" },
  { item: "Deslocamento (10 a 15 km)", value: "R$ 25,00" },
  { item: "Deslocamento (15 a 25 km)", value: "R$ 40,00" },
  { item: "Deslocamento (25 a 35 km)", value: "R$ 70,00" },
  { item: "Serviços em raio de até 10 km", value: "Sem taxa" },
  { item: "Peças de reposição", value: "Sob orçamento" },
];

export const WHATSAPP = "5548998176620";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });


export const serviceCategories: ServiceCategory[] = [
  {
    id: "hidraulica",
    label: "Hidráulica",
    hasFixedPricing: true,
    items: [
      { id: "h1", name: "Substituir ou consertar vazamento em sifão (vedantes)", price: 60 },
      { id: "h2", name: "Substituir ou consertar torneira simples (vedantes/unidade)", price: 55 },
      { id: "h3", name: "Substituir ou consertar torneira com misturador", price: 75 },
      { id: "h4", name: "Reparo em descarga ou caixa acoplada (parcial)", price: 70 },
      { id: "h5", name: "Reparo em descarga ou caixa acoplada (completo)", price: 90 },
      { id: "h6", name: "Substituir reparo de válvula Hydra / Docol / Oriente", price: 90 },
      { id: "h7", name: "Desentupimento de vaso sanitário e mictório", price: 220 },
      { id: "h8", name: "Instalação ou substituição de vaso sanitário", price: 190 },
      { id: "h9", name: "Instalação de ducha higiênica", price: 70 },
      { id: "h10", name: "Substituir ou instalar tampa de vaso sanitário", price: 60 },
      { id: "h11", name: "Instalar ponto de água adicional (externo, na parede)", price: 90 },
      { id: "h12", name: "Instalar ponto de água adicional (interno, na parede)", price: 130 },
      { id: "h13", name: "Instalar máquina de lavar roupa", price: 80 },
      { id: "h14", name: "Instalar máquina de lavar louça", price: 80 },
      { id: "h15", name: "Instalar torneira elétrica", price: 100 },
      { id: "h16", name: "Instalar filtro ou purificador de água", price: 120 },
      { id: "h17", name: "Instalar ou substituir tanque (porcelana, resina ou plástico)", price: 180 },
      { id: "h18", name: "Substituir boia da caixa d'água", price: 100 },
      { id: "h19", name: "Limpeza de caixa de gordura residencial", price: 130 },
      { id: "h20", name: "Limpeza de caixa d'água (telhado, casa térrea, até 1.000L)", price: 250 },
      { id: "h21", name: "Limpeza de caixa d'água (telhado, sobrado, até 1.000L)", price: 300 },
    ],
  },
  {
    id: "gas",
    label: "Gás",
    hasFixedPricing: true,
    items: [
      { id: "g1", name: "Instalação de botijão de gás", price: 60 },
      { id: "g2", name: "Teste de vazamento de gás", price: 70 },
      { id: "g3", name: "Troca de mangueira e registro", price: 50 },
      { id: "g4", name: "Instalação de fogão a gás", price: 90 },
      { id: "g5", name: "Manutenção preventiva de instalação de gás", price: 130 },
    ],
  },
  {
    id: "projetos",
    label: "Projetos Residenciais",
    hasFixedPricing: false,
    items: [],
  },
];

export const referenceInfo = [
  { label: "Mão de obra por hora", value: "R$ 60,00" },
  { label: "Mão de obra por dia", value: "R$ 480,00" },
  { label: "Deslocamento (10 a 15 km)", value: "R$ 25,00" },
  { label: "Deslocamento (15 a 25 km)", value: "R$ 40,00" },
  { label: "Deslocamento (25 a 35 km)", value: "R$ 70,00" },
  { label: "Serviços em raio de até 10 km", value: "Sem taxa" },
  { label: "Peças de reposição", value: "Sob orçamento" },
];

export const testimonials = [
  {
    service: "Desentupimento de vaso sanitário",
    quote:
      "Liguei de manhã e o Udson apareceu no mesmo dia. Resolveu em uma hora e ainda explicou o que tinha causado o entupimento.",
    name: "Carla Menezes",
    location: "Trindade, Florianópolis",
  },
  {
    service: "Instalação de sistema de gás",
    quote:
      "Trocou a válvula e a mangueira, testou tudo e só saiu depois de conferir vazamento. Segurança em primeiro lugar mesmo.",
    name: "Rafael Bittencourt",
    location: "São José",
  },
  {
    service: "Projeto residencial personalizado",
    quote:
      "Refizemos toda a hidráulica do apartamento. O orçamento veio detalhado e o valor final ficou exatamente no combinado.",
    name: "Juliana Prates",
    location: "Campeche",
  },
  {
    service: "Limpeza de caixa d'água",
    quote:
      "Trabalho limpo e rápido, mandou fotos do antes e depois. Já virou o hidráulico fixo do condomínio.",
    name: "Marcos Vilela",
    location: "Palhoça",
  },
  {
    service: "Reparo em caixa acoplada",
    quote:
      "Adorei saber o preço antes pelo site. Sem surpresa, sem enrolação, atendimento super educado.",
    name: "Débora Kunz",
    location: "Biguaçu",
  },
];

export const serviceAreaCities = [
  "Florianópolis",
  "São José",
  "Palhoça",
  "Biguaçu",
  "Antônio Carlos",
  "Santo Amaro da Imperatriz",
  "Águas Mornas",
  "São Pedro de Alcântara",
  "Governador Celso Ramos",
];

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
