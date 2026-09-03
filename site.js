export const SITE_CONFIG = {
  firmName: "Eryx Fernandes Advocacia",
  siteUrl: "https://www.advmartinsfernandes.com.br",
  authorName: "Eryx Fernandes",
  responsible: "Dr. Eryx Fernandes",
  oab: "OAB/SP nº 530.983",
  oabConsultationUrl: "https://www2.oabsp.org.br/asp/consultainscritos/consulta01.asp",
  phone: "(15) 99687-4689",
  whatsappNumber: "5515996874689",
  whatsappDisplay: "(15) 99687-4689",
  whatsappMessage: "Vim pelo Google e quero mais informações.",
  get whatsapp() {
    return this.whatsappDisplay;
  },
  get whatsappUrl() {
    return getWhatsAppUrl();
  },
  email: "eryx@advmartinsfernandes.com",
  address: "Av. Américo de Carvalho, 65 - Sala 1 - Jardim Europa, Sorocaba - SP, 18045-000",
  instagram: "@adv.eryxfernandes",
  instagramUrl: "https://www.instagram.com/adv.eryxfernandes/",
  city: "Sorocaba/SP"
};

export function getWhatsAppUrl(message = SITE_CONFIG.whatsappMessage) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function isWhatsAppUrl(value) {
  try {
    const hostname = new URL(value, SITE_CONFIG.siteUrl).hostname.toLowerCase();
    return hostname === "wa.me" || hostname === "whatsapp.com" || hostname.endsWith(".whatsapp.com");
  } catch {
    return false;
  }
}

export function professionalRegistrationLink() {
  return `<a class="professional-registration-link" href="${SITE_CONFIG.oabConsultationUrl}" target="_blank" rel="noopener noreferrer" aria-label="Consultar inscrição ${SITE_CONFIG.oab} no site oficial da OAB São Paulo">${SITE_CONFIG.oab}</a>`;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Atuação", href: "/atuacao", hasDropdown: true },
  { label: "Artigos", href: "/artigos" },
  { label: "Contato", href: "/contato" }
];

const practiceItems = [
  {
    title: "Trabalhadores",
    shortTitle: "Trabalhista - Trabalhadores",
    href: "/atuacao/direito-trabalhista-trabalhadores",
    eyebrow: "Relações de trabalho",
    phrase: "Quando seus direitos precisam ser reconhecidos.",
    text:
      "Verbas rescisórias, horas extras, assédio, acidente de trabalho, vínculo empregatício, FGTS e demais conflitos da relação de trabalho.",
    cta: "Ver atuação para trabalhadores",
    icon: "person"
  },
  {
    title: "Empresas",
    shortTitle: "Trabalhista - Empresas",
    href: "/atuacao/direito-trabalhista-empresas",
    eyebrow: "Prevenção e defesa",
    phrase: "Quando decisões trabalhistas precisam de segurança.",
    text:
      "Consultoria preventiva, contratos, documentos internos, defesa em reclamações trabalhistas e redução de riscos.",
    cta: "Ver atuação para empresas",
    icon: "building"
  },
  {
    title: "Imobiliário",
    shortTitle: "Direito Imobiliário",
    href: "/atuacao/direito-imobiliario",
    eyebrow: "Patrimônio e contratos",
    phrase: "Quando patrimônio, contratos e imóveis exigem proteção.",
    text:
      "Compra e venda, locação, regularização, cobranças, conflitos condominiais e análise contratual.",
    cta: "Ver Direito Imobiliário",
    icon: "property"
  },
  {
    title: "Família",
    shortTitle: "Direito de Família",
    href: "/atuacao/direito-de-familia",
    eyebrow: "Cuidado técnico",
    phrase: "Quando decisões pessoais exigem cuidado e técnica.",
    text:
      "Divórcio, guarda, alimentos, partilha de bens, união estável e conflitos familiares sensíveis.",
    cta: "Ver Direito de Família",
    icon: "family"
  }
];

const articles = [
  {
    category: "Trabalhista",
    filterCategory: "Trabalhista",
    homeCategory: "Trabalhista",
    eyebrow: "ARTIGO | TRABALHISTA",
    title: "Horas extras não pagas: como comprovar e cobrar os valores?",
    seoTitle: "Horas Extras Não Pagas: Como Comprovar e Cobrar? | Eryx Fernandes",
    seoDescription:
      "Entenda como comprovar horas extras não pagas, quais provas podem ser utilizadas e quais cuidados o trabalhador deve tomar para buscar seus direitos.",
    excerpt:
      "Entenda quando pode existir direito a horas extras, quais registros ajudam a demonstrar a jornada e por que cada caso exige análise individual.",
    image: "/artigos/hora-extra-qual-valor-sorocaba.jpg",
    alt: "Relógio analógico representando o controle da jornada de trabalho",
    href: "/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar",
    readingTime: "8 min de leitura",
    date: "15 de agosto de 2026",
    publishedAt: "2026-08-15",
    modifiedAt: "2026-08-15",
    authorRole: "Advogado Trabalhista"
  },
  {
    category: "Trabalhista",
    filterCategory: "Trabalhista",
    homeCategory: "Trabalhista",
    eyebrow: "ARTIGO | TRABALHISTA",
    title: "Assédio moral no trabalho: como identificar e o que fazer?",
    seoTitle: "Assédio Moral no Trabalho: Como Identificar? | Eryx Fernandes",
    seoDescription:
      "Saiba quais situações podem caracterizar assédio moral no trabalho, como reunir provas e quando buscar orientação jurídica.",
    excerpt:
      "Veja como diferenciar uma cobrança profissional de condutas abusivas, preservar registros e avaliar quando procurar orientação.",
    image: "/artigos/assedio-moral-trabalho-sorocaba.webp",
    alt: "Trabalhadora preocupada diante de colegas em um ambiente de escritório",
    href: "/artigos/assedio-moral-no-trabalho-como-identificar",
    readingTime: "8 min de leitura",
    date: "15 de agosto de 2026",
    publishedAt: "2026-08-15",
    modifiedAt: "2026-08-15",
    authorRole: "Advogado Trabalhista"
  },
  {
    category: "Trabalhista",
    filterCategory: "Trabalhista",
    homeCategory: "Trabalhista",
    eyebrow: "ARTIGO | TRABALHISTA",
    title: "Acidente de trabalho: quais são os direitos do trabalhador?",
    seoTitle: "Acidente de Trabalho: Quais São os Direitos? | Eryx Fernandes",
    seoDescription:
      "Entenda quais direitos podem existir após um acidente de trabalho, a importância da CAT, documentos, afastamento e análise jurídica do caso.",
    excerpt:
      "Saiba por que registrar o ocorrido, reunir documentos médicos e analisar os requisitos legais é importante após um acidente de trabalho.",
    image: "/artigos/acidente-trabalho-sorocaba.webp",
    alt: "Trabalhador recebendo atendimento após ferimento no joelho",
    href: "/artigos/acidente-de-trabalho-direitos-do-trabalhador",
    readingTime: "8 min de leitura",
    date: "15 de agosto de 2026",
    publishedAt: "2026-08-15",
    modifiedAt: "2026-08-15",
    authorRole: "Advogado Trabalhista"
  },
  {
    category: "Trabalhista",
    filterCategory: "Trabalhista",
    homeCategory: "Trabalhista",
    eyebrow: "ARTIGO | TRABALHISTA",
    title: "FGTS não depositado: como conferir e o que o trabalhador pode fazer?",
    seoTitle: "FGTS não depositado: como conferir e o que fazer",
    seoDescription:
      "Saiba como consultar o extrato do FGTS, identificar depósitos ausentes e entender quais providências o trabalhador pode avaliar.",
    excerpt:
      "Veja como conferir os depósitos do FGTS, o que fazer ao encontrar meses em aberto e quando a irregularidade merece orientação trabalhista.",
    image: "/artigos/fgts-nao-depositado.jpg",
    alt: "Trabalhadora consultando o aplicativo FGTS no celular",
    href: "/artigos/fgts-nao-depositado-como-conferir",
    readingTime: "8 min de leitura",
    date: "30 de julho de 2026",
    publishedAt: "2026-07-30",
    modifiedAt: "2026-07-30",
    authorRole: "Advogado Trabalhista"
  },
  {
    category: "Trabalhista Empresarial",
    filterCategory: "Trabalhista Empresarial",
    homeCategory: "Trabalhista Empresarial",
    eyebrow: "ARTIGO | TRABALHISTA EMPRESARIAL",
    title: "NR-01 em 2026: quais são as novas exigências para as empresas?",
    seoTitle: "NR-01 em 2026: novas exigências para empresas",
    seoDescription:
      "Entenda as novas exigências da NR-01, os riscos psicossociais e como as empresas de Sorocaba devem atualizar o PGR e suas práticas internas.",
    excerpt:
      "Entenda as novas exigências da NR-01, os riscos psicossociais e como as empresas de Sorocaba devem atualizar o PGR e suas práticas internas.",
    image: "/artigos/nr-01-sorocaba.jpg",
    alt: "Ilustração de equipamentos de segurança e placa NR-01 para artigo sobre novas exigências da norma",
    href: "/artigos/nr-01-novas-exigencias-empresas-sorocaba",
    readingTime: "13 min de leitura",
    date: "15 de julho de 2026",
    publishedAt: "2026-07-15",
    modifiedAt: "2026-07-15",
    authorRole: "Advogado Trabalhista Empresarial"
  },
  {
    category: "Trabalhista",
    filterCategory: "Trabalhista",
    homeCategory: "Trabalhista",
    eyebrow: "ARTIGO | TRABALHISTA",
    title: "Rescisão Indireta em Sorocaba: Guia Completo para o Trabalhador",
    excerpt:
      "Entenda o que é a Rescisão Indireta, quando ela pode ser aplicada e por que cada caso exige análise individual antes de qualquer decisão.",
    image: "/artigos/rescisao-indireta-sorocaba.jpg",
    alt: "Carteira de trabalho para artigo sobre Rescisão Indireta em Sorocaba",
    href: "/artigos/rescisao-indireta-sorocaba",
    readingTime: "9 min de leitura",
    date: "6 de julho de 2026",
    publishedAt: "2026-07-06",
    modifiedAt: "2026-07-06",
    authorRole: "Advogado Trabalhista"
  },
  {
    category: "Trabalhista",
    filterCategory: "Trabalhista",
    homeCategory: "Trabalhista",
    title: "Direitos trabalhistas: quando procurar orientação jurídica?",
    excerpt:
      "Uma leitura inicial sobre sinais de risco, documentação e momentos em que a análise técnica pode evitar perdas.",
    image: "/artigos/artigo-trabalhista-rescisao.jpg",
    alt: "Documentos trabalhistas sobre mesa para artigo sobre direitos trabalhistas",
    href: "/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica",
    readingTime: "4 min de leitura",
    date: "25 de junho de 2026",
    publishedAt: "2026-06-25",
    modifiedAt: "2026-06-25",
    authorRole: "Advogado Trabalhista"
  },
  {
    category: "Condominial",
    filterCategory: "Condominial",
    homeCategory: "Imobiliário",
    title: "Contratos imobiliários: pontos de atenção antes de assinar.",
    excerpt:
      "Cláusulas, garantias, prazos e cuidados que ajudam a tornar uma decisão patrimonial mais segura.",
    image: "/artigos/artigo-imobiliario.jpg",
    alt: "Ambiente profissional para artigo sobre contratos imobiliários",
    href: "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar",
    readingTime: "5 min de leitura",
    date: "25 de junho de 2026",
    publishedAt: "2026-06-25",
    modifiedAt: "2026-06-25",
    authorRole: "Advogado Imobiliário"
  },
  {
    category: "Família",
    filterCategory: "Família",
    homeCategory: "Família",
    eyebrow: "ARTIGO | DIREITO DE FAMÍLIA",
    title: "Pensão alimentícia atrasada: como cobrar e quais medidas podem ser tomadas?",
    seoTitle: "Pensão Alimentícia Atrasada: Como Cobrar? | Eryx Fernandes",
    seoDescription: "A pensão alimentícia está atrasada ou sendo paga parcialmente? Entenda como funciona a cobrança, quais documentos reunir e quando procurar orientação jurídica.",
    excerpt: "Entenda o que pode ser considerado atraso, como organizar os comprovantes e quais caminhos podem ser avaliados para cobrar a pensão.",
    image: "/artigos/pensao-alimenticia-atrasada.webp",
    alt: "Orientação jurídica sobre pensão alimentícia atrasada",
    href: "/artigos/pensao-alimenticia-atrasada-como-cobrar",
    readingTime: "8 min de leitura",
    date: "6 de agosto de 2026",
    publishedAt: "2026-08-06",
    modifiedAt: "2026-08-06",
    authorRole: "Advogado de Família"
  },
  {
    category: "Família",
    filterCategory: "Família",
    homeCategory: "Família",
    title: "Divórcio, guarda e partilha: como tomar decisões com segurança?",
    excerpt:
      "Aspectos jurídicos e humanos que merecem atenção em processos familiares sensíveis.",
    image: "/artigos/artigo-familia-divorcio-guarda.jpg",
    alt: "Cena familiar ao pôr do sol para artigo sobre divórcio guarda e partilha",
    href: "/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca",
    readingTime: "5 min de leitura",
    date: "25 de junho de 2026",
    publishedAt: "2026-06-25",
    modifiedAt: "2026-06-25",
    authorRole: "Advogado de Família"
  }
];

function articleByHref(href) {
  return articles.find((article) => article.href === href);
}

const articleFilters = ["Todos", "Trabalhista", "Trabalhista Empresarial", "Condominial", "Família"];

const optimizedImageVariants = new Map([
  ["/home-reuniao-juridica.jpg", "/home-reuniao-juridica"],
  ["/home-retrato-advogado.jpg", "/home-retrato-advogado"],
  ["/home-atendimento-cliente.jpg", "/home-atendimento-cliente"],
  ["/home-cta-advogado.jpg", "/home-cta-advogado"],
  ["/home-detalhe-documentos.jpg", "/home-detalhe-documentos"],
  ["/home-escritorio-ambiente.jpg", "/home-escritorio-ambiente"],
  ["/artigos/nr-01-sorocaba.jpg", "/artigos/nr-01-sorocaba"],
  ["/artigos/rescisao-indireta-sorocaba.jpg", "/artigos/rescisao-indireta-sorocaba"],
  ["/artigos/fgts-nao-depositado.jpg", "/artigos/fgts-nao-depositado"],
  ["/artigos/artigo-trabalhista-rescisao.jpg", "/artigos/artigo-trabalhista-rescisao"],
  ["/artigos/artigo-imobiliario.jpg", "/artigos/artigo-imobiliario"],
  ["/artigos/artigo-familia-divorcio-guarda.jpg", "/artigos/artigo-familia-divorcio-guarda"],
  ["/artigos/hora-extra-qual-valor-sorocaba.jpg", "/artigos/hora-extra-qual-valor-sorocaba"],
  ["/artigos/assedio-moral-trabalho-sorocaba.webp", "/artigos/assedio-moral-trabalho-sorocaba"],
  ["/artigos/acidente-trabalho-sorocaba.webp", "/artigos/acidente-trabalho-sorocaba"]
]);

function optimizedPicture(src, alt, options = {}) {
  const base = optimizedImageVariants.get(src);
  const className = options.className ? ` ${options.className}` : "";
  const loading = options.lazy === false ? "" : ' loading="lazy"';
  const decoding = options.decoding === false ? "" : ' decoding="async"';
  const priority = options.fetchPriority ? ` fetchpriority="${options.fetchPriority}"` : "";
  const dimensions = options.width && options.height ? ` width="${options.width}" height="${options.height}"` : "";

  if (!base) {
    return `<img src="${src}" alt="${alt}"${dimensions}${loading}${decoding}${priority} />`;
  }

  return `
    <picture class="optimized-picture${className}">
      <source media="(max-width: 767px)" srcset="${base}-720.avif" type="image/avif" />
      <source media="(max-width: 767px)" srcset="${base}-720.webp" type="image/webp" />
      <source srcset="${base}-1200.avif" type="image/avif" />
      <source srcset="${base}-1200.webp" type="image/webp" />
      <img src="${base}-1200.webp" alt="${alt}"${dimensions}${loading}${decoding}${priority} />
    </picture>
  `;
}

function authorAvatarTemplate() {
  return `
    <picture class="optimized-picture article-author-avatar">
      <source srcset="/home-retrato-advogado-avatar.avif" type="image/avif" />
      <source srcset="/home-retrato-advogado-avatar.webp" type="image/webp" />
      <img src="/home-retrato-advogado-avatar.jpg" alt="Dr. Eryx Fernandes" decoding="async" />
    </picture>
  `;
}

const integratedAreas = [
  ["Trabalhadores", "Relações de trabalho com leitura técnica dos direitos e das verbas envolvidas."],
  ["Empresas", "Prevenção, defesa e orientação trabalhista para decisões mais seguras."],
  ["Direito Imobiliário", "Contratos, imóveis e patrimônio com atenção jurídica estratégica."],
  ["Direito de Família", "Decisões pessoais sensíveis conduzidas com técnica e cuidado."]
];

const thinkingPillars = [
  [
    "01",
    "Clareza",
    "O cliente precisa compreender o caminho, os riscos e as possibilidades.",
    `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M10 14h20M10 21h14M10 28h18"/><path d="M30 8v6h-6"/></svg>`
  ],
  [
    "02",
    "Estratégia",
    "Cada caso exige leitura técnica, timing e escolha adequada de rota.",
    `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 30 30 8"/><path d="M14 8h16v16"/><path d="M10 22h8v8h-8z"/></svg>`
  ],
  [
    "03",
    "Acompanhamento",
    "A atuação jurídica não termina no protocolo. Ela exige presença, atualização e responsabilidade.",
    `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 7v26"/><path d="M12 15h16M12 25h16"/><path d="M8 11h8v8H8zM24 21h8v8h-8z"/></svg>`
  ]
];

const practicePathways = [
  {
    title: "Trabalhadores",
    href: "/atuacao/direito-trabalhista-trabalhadores",
    eyebrow: "Direito Trabalhista",
    phrase: "Quando direitos precisam ser reconhecidos com análise técnica e condução responsável.",
    text:
      "Atuação em demandas envolvendo rescisão, verbas trabalhistas, horas extras, assédio, acidente de trabalho, vínculo empregatício, FGTS e demais conflitos da relação de trabalho.",
    keywords: "Rescisão · Horas extras · Assédio · Acidente de trabalho · FGTS · Vínculo empregatício",
    cta: "Ver atuação para trabalhadores"
  },
  {
    title: "Empresas",
    href: "/atuacao/direito-trabalhista-empresas",
    eyebrow: "Direito Trabalhista",
    phrase: "Quando decisões trabalhistas exigem prevenção, estratégia e segurança jurídica.",
    text:
      "Atuação consultiva e contenciosa para empresas, com análise de riscos, documentos internos, contratos, rotinas de trabalho, desligamentos e defesa em reclamações trabalhistas.",
    keywords: "Consultoria preventiva · Contratos · Documentos internos · Desligamentos · Defesa trabalhista",
    cta: "Ver atuação para empresas"
  },
  {
    title: "Direito Imobiliário",
    href: "/atuacao/direito-imobiliario",
    eyebrow: "Patrimônio e contratos",
    phrase: "Quando patrimônio, contratos e imóveis exigem proteção jurídica.",
    text:
      "Atuação em compra e venda, locação, regularização, cobranças, conflitos condominiais, notificações, análise contratual e demandas envolvendo imóveis.",
    keywords: "Contratos · Locação · Compra e venda · Regularização · Condomínios · Cobranças",
    cta: "Ver Direito Imobiliário"
  },
  {
    title: "Direito de Família",
    href: "/atuacao/direito-de-familia",
    eyebrow: "Cuidado técnico",
    phrase: "Quando decisões pessoais sensíveis precisam de técnica, cuidado e discrição.",
    text:
      "Atuação em divórcio, guarda, convivência, alimentos, partilha de bens, união estável e demais demandas familiares que exigem condução responsável.",
    keywords: "Divórcio · Guarda · Alimentos · Partilha · União estável · Convivência familiar",
    cta: "Ver Direito de Família"
  }
];

const demandSteps = [
  ["01", "Entendimento", "Compreensão inicial do contexto, dos fatos e dos objetivos do cliente."],
  ["02", "Análise", "Leitura técnica dos documentos, riscos, prazos e possibilidades jurídicas."],
  ["03", "Estratégia", "Definição do caminho mais adequado para a demanda, seja na esfera preventiva ou contenciosa."],
  ["04", "Acompanhamento", "Comunicação clara sobre os próximos passos, movimentações relevantes e evolução do caso."]
];

const workerAttentionItems = [
  [
    "Rescisão mal calculada",
    "Quando há dúvida sobre verbas, descontos, aviso prévio, férias, 13º salário, multa do FGTS ou prazos de pagamento."
  ],
  [
    "Horas extras e jornada",
    "Quando a rotina de trabalho não corresponde aos registros formais ou quando há excesso de jornada sem pagamento adequado."
  ],
  [
    "Assédio moral",
    "Quando o ambiente profissional envolve pressão abusiva, constrangimentos, humilhações ou situações recorrentes de desgaste."
  ],
  [
    "Acidente de trabalho",
    "Quando a atividade profissional causa lesão, afastamento ou redução da capacidade de trabalho."
  ],
  [
    "FGTS",
    "Quando há suspeita de ausência de depósitos, valores incorretos ou problemas no acesso aos direitos relacionados ao fundo."
  ],
  [
    "Reconhecimento de vínculo",
    "Quando a prestação de serviços tem características de relação de emprego, mas não há registro formal."
  ],
  [
    "Justa causa",
    "Quando a forma de desligamento precisa ser analisada com cuidado, especialmente diante de penalidades graves."
  ],
  [
    "Adicionais trabalhistas",
    "Quando há exposição a condições que podem gerar direito a adicional de insalubridade, periculosidade ou outras verbas específicas."
  ]
];

const workerAnalysisSteps = [
  [
    "01",
    "Entender quais direitos foram violados",
    "Análise objetiva dos fatos para identificar irregularidades na jornada, nos pagamentos, na rescisão ou nas condições de trabalho."
  ],
  [
    "02",
    "Preparar as provas",
    "Reunião e organização de documentos, mensagens, registros e testemunhas que possam demonstrar o que aconteceu."
  ],
  [
    "03",
    "Organizar o processo",
    "Definição da estratégia, dos pedidos e das medidas jurídicas adequadas para apresentar o caso com clareza e consistência."
  ],
  [
    "04",
    "Defender seus direitos",
    "Atuação firme para buscar a responsabilização da empresa e proteger os direitos do trabalhador durante cada etapa do caso."
  ]
];

const workerDocuments = [
  "Carteira de trabalho",
  "Contrato de trabalho",
  "Holerites",
  "Termo de rescisão",
  "Extrato do FGTS",
  "Controles de ponto",
  "Mensagens, e-mails ou comunicados",
  "Atestados e documentos médicos, quando houver acidente ou afastamento",
  "Advertências ou documentos disciplinares",
  "Comprovantes de pagamento"
];

const workerFaqItems = [
  [
    "Quando devo procurar um advogado trabalhista em Sorocaba?",
    "Quando houver dúvida sobre rescisão, verbas trabalhistas, horas extras, assédio, acidente de trabalho, FGTS, vínculo empregatício ou qualquer conflito relacionado à relação de trabalho."
  ],
  [
    "Preciso ter todos os documentos para iniciar a análise?",
    "Não. A conversa pode começar pelo relato do trabalhador, e o advogado orientará posteriormente quais documentos e informações são necessários."
  ],
  [
    "O que pode ser analisado em uma rescisão trabalhista?",
    "Podem ser analisados aviso prévio, saldo de salário, férias, 13º salário, FGTS, multa rescisória, descontos, prazos de pagamento e demais verbas relacionadas ao encerramento do contrato."
  ],
  [
    "Horas extras sempre geram direito a pagamento?",
    "Depende da jornada, dos registros, da função exercida e das provas disponíveis. Por isso, cada situação precisa ser analisada individualmente."
  ],
  [
    "Assédio moral no trabalho pode gerar indenização?",
    "Em determinadas situações, condutas abusivas, repetitivas ou humilhantes podem gerar responsabilidade jurídica. A análise depende dos fatos, provas e contexto."
  ],
  [
    "Acidente de trabalho pode gerar direitos trabalhistas?",
    "Sim. Dependendo do caso, podem existir direitos relacionados à estabilidade, indenizações, afastamento, benefícios previdenciários e outras consequências jurídicas."
  ],
  [
    "Tenho prazo para entrar com ação trabalhista?",
    "Sim. Em regra, existem prazos legais para reivindicar direitos trabalhistas após o encerramento do contrato. A análise do prazo deve ser feita conforme o caso concreto."
  ],
  [
    "O atendimento pode ser feito de forma digital?",
    "Sim. O escritório oferece suporte presencial em Sorocaba/SP e atendimento digital para análise inicial, envio de documentos e acompanhamento da demanda."
  ]
];

const companyRiskItems = [
  [
    "Contratação",
    "Análise de contratos, funções, modalidade de trabalho, jornada, remuneração e documentos iniciais da relação empregatícia."
  ],
  [
    "Rotina interna",
    "Orientação sobre controle de jornada, advertências, políticas internas, comunicação com colaboradores e práticas recorrentes da empresa."
  ],
  [
    "Documentos trabalhistas",
    "Revisão de contratos, termos, recibos, comunicados, políticas internas e registros que sustentam decisões empresariais."
  ],
  [
    "Desligamentos",
    "Apoio jurídico em rescisões, justa causa, acordos, verbas devidas, prazos e documentação necessária."
  ],
  [
    "Reclamações trabalhistas",
    "Defesa técnica em demandas judiciais, com organização de documentos, análise de provas, audiências e estratégia processual."
  ],
  [
    "Terceirização e prestação de serviços",
    "Análise de riscos em contratos com prestadores, parceiros e terceiros, com atenção à caracterização de vínculo e responsabilidades."
  ],
  [
    "Ambiente de trabalho",
    "Orientação sobre condutas internas, prevenção de conflitos, relatos de assédio, medidas disciplinares e deveres da empresa."
  ],
  [
    "Adequação preventiva",
    "Acompanhamento jurídico para revisar práticas, corrigir fragilidades e organizar rotinas com maior segurança."
  ]
];

const companyAnalysisSteps = [
  ["01", "Diagnóstico", "Compreensão da situação apresentada, da rotina empresarial e dos riscos envolvidos."],
  [
    "02",
    "Análise documental",
    "Avaliação de contratos, registros, comunicados, controles de jornada, políticas internas e documentos relacionados."
  ],
  [
    "03",
    "Orientação estratégica",
    "Indicação dos caminhos possíveis, com clareza sobre riscos, prazos, impactos e medidas recomendadas."
  ],
  [
    "04",
    "Condução da demanda",
    "Atuação consultiva ou contenciosa, com acompanhamento próximo e comunicação objetiva sobre os próximos passos."
  ]
];

const companyDocuments = [
  "Contratos de trabalho",
  "Fichas de registro",
  "Holerites",
  "Controles de ponto",
  "Advertências e suspensões",
  "Comunicados internos",
  "Políticas internas",
  "Termos de rescisão",
  "Comprovantes de pagamento",
  "Mensagens, e-mails ou documentos relacionados ao caso",
  "Contratos com prestadores ou terceiros, quando houver"
];

const companyFaqItems = [
  [
    "Quando uma empresa deve procurar um advogado trabalhista empresarial em Sorocaba?",
    "Quando precisa tomar decisões sobre contratação, desligamento, documentos internos, jornada, medidas disciplinares, terceirização, acordos ou defesa em reclamações trabalhistas."
  ],
  [
    "A consultoria trabalhista ajuda a prevenir processos?",
    "A consultoria auxilia na identificação de riscos, revisão de documentos e orientação de condutas. Isso pode reduzir fragilidades, mas cada situação deve ser analisada conforme a realidade da empresa."
  ],
  [
    "O escritório atua em defesa de reclamações trabalhistas?",
    "Sim. O escritório atua na defesa de empresas em reclamações trabalhistas, com análise dos pedidos, organização de documentos, definição de estratégia e acompanhamento processual."
  ],
  [
    "Quais documentos a empresa deve manter organizados?",
    "Contratos, registros de empregados, holerites, controles de ponto, recibos, comunicados internos, advertências, documentos de rescisão e comprovantes de pagamento são exemplos importantes."
  ],
  [
    "A empresa pode consultar um advogado antes de demitir um empregado?",
    "Sim. A análise prévia ajuda a avaliar riscos, verbas envolvidas, documentos necessários, prazos e a forma mais adequada de conduzir o desligamento."
  ],
  [
    "Como funciona a atuação preventiva trabalhista?",
    "A atuação preventiva envolve revisão de documentos, orientação sobre práticas internas, análise de riscos e apoio na tomada de decisões trabalhistas relevantes."
  ],
  [
    "O atendimento pode ser feito de forma digital?",
    "Sim. O escritório oferece atendimento presencial em Sorocaba/SP e suporte digital para reuniões, envio de documentos e acompanhamento das demandas."
  ],
  [
    "Empresas pequenas também precisam de assessoria trabalhista?",
    "Sim. Empresas menores também enfrentam riscos trabalhistas em contratações, jornadas, pagamentos, documentos e desligamentos. A orientação jurídica pode ajudar a organizar decisões e reduzir fragilidades."
  ]
];

const realEstateAttentionItems = [
  [
    "Compra e venda de imóvel",
    "Análise de contrato, documentos, obrigações das partes, prazos, valores, garantias e riscos antes da assinatura."
  ],
  [
    "Contratos de locação",
    "Orientação sobre direitos e deveres de locadores e locatários, garantias, reajustes, rescisão, multas e descumprimentos."
  ],
  [
    "Regularização imobiliária",
    "Análise de documentos, propriedade, posse, pendências, registros e caminhos jurídicos para maior segurança."
  ],
  [
    "Cobranças e notificações",
    "Elaboração e análise de notificações, cobranças, descumprimentos contratuais e medidas extrajudiciais."
  ],
  [
    "Conflitos condominiais",
    "Atuação em demandas envolvendo moradores, síndicos, regras internas, cobranças, convivência e responsabilidades."
  ],
  [
    "Distratos imobiliários",
    "Análise de encerramento contratual, devolução de valores, multas, obrigações pendentes e riscos envolvidos."
  ],
  [
    "Relação entre proprietário e inquilino",
    "Condução de conflitos envolvendo pagamento, conservação do imóvel, rescisão, garantias e entrega das chaves."
  ],
  [
    "Análise preventiva de documentos",
    "Revisão de contratos e documentos antes da decisão, buscando reduzir riscos e trazer clareza às partes envolvidas."
  ]
];

const realEstateSteps = [
  [
    "01",
    "Entendimento da situação",
    "Compreensão do imóvel, das partes envolvidas, dos documentos existentes e do objetivo do cliente."
  ],
  [
    "02",
    "Análise documental",
    "Avaliação de contratos, matrículas, notificações, comprovantes, mensagens, registros e demais documentos relevantes."
  ],
  [
    "03",
    "Leitura de riscos",
    "Identificação de obrigações, prazos, responsabilidades, pendências e pontos que podem gerar conflito."
  ],
  [
    "04",
    "Estratégia e condução",
    "Definição do melhor caminho jurídico, seja preventivo, extrajudicial ou judicial, conforme o caso concreto."
  ]
];

const realEstateDocuments = [
  "Contrato de compra e venda",
  "Contrato de locação",
  "Matrícula do imóvel",
  "Escritura",
  "Comprovantes de pagamento",
  "Notificações recebidas ou enviadas",
  "Boletos e cobranças condominiais",
  "Convenção e regimento interno do condomínio",
  "Mensagens, e-mails ou comunicados",
  "Fotos, laudos ou registros relacionados ao imóvel",
  "Documentos pessoais das partes envolvidas"
];

const realEstateFaqItems = [
  [
    "Quando procurar um advogado imobiliário em Sorocaba?",
    "Quando houver dúvida sobre contrato, compra e venda, locação, regularização, cobrança, notificação, condomínio ou qualquer conflito envolvendo imóvel."
  ],
  [
    "É importante analisar o contrato antes de assinar?",
    "Sim. A análise prévia ajuda a compreender cláusulas, prazos, multas, garantias, obrigações das partes e possíveis riscos."
  ],
  [
    "O escritório atua em conflitos de locação?",
    "Sim. O escritório atua em questões envolvendo locadores e locatários, como inadimplência, rescisão, multas, garantias, conservação do imóvel e entrega das chaves."
  ],
  [
    "Conflitos condominiais também entram no Direito Imobiliário?",
    "Sim. Demandas envolvendo condomínio, moradores, síndicos, cobranças, regras internas e convivência podem exigir análise jurídica imobiliária e condominial."
  ],
  [
    "Posso buscar orientação antes de comprar um imóvel?",
    "Sim. A orientação prévia pode ajudar na análise de documentos, contrato, matrícula, pendências e riscos da operação."
  ],
  [
    "O que fazer ao receber uma notificação imobiliária?",
    "O ideal é analisar o conteúdo, os prazos, os documentos relacionados e as consequências jurídicas antes de responder ou tomar qualquer medida."
  ],
  [
    "O atendimento pode ser digital?",
    "Sim. O escritório oferece atendimento presencial em Sorocaba/SP e suporte digital para análise de documentos, reuniões e acompanhamento da demanda."
  ],
  [
    "A ausência de matrícula ou escritura impede a análise?",
    "Não necessariamente. A análise pode começar com os documentos disponíveis, e o escritório orienta quais informações podem ser necessárias para avançar."
  ]
];

const familyAttentionItems = [
  [
    "Divórcio",
    "Orientação jurídica para encerramento da relação, análise de bens, responsabilidades, acordos e medidas necessárias."
  ],
  [
    "Guarda",
    "Análise das responsabilidades parentais, rotina dos filhos, tomada de decisões e organização jurídica da convivência."
  ],
  [
    "Convivência familiar",
    "Definição ou revisão de períodos de convivência, visitas, responsabilidades e formas de organização da rotina familiar."
  ],
  [
    "Pensão alimentícia",
    "Atuação em fixação, revisão, cobrança ou exoneração de alimentos, conforme a realidade e os documentos de cada caso."
  ],
  [
    "Partilha de bens",
    "Análise patrimonial, regime de bens, documentos, direitos envolvidos e divisão responsável do patrimônio."
  ],
  [
    "União estável",
    "Orientação sobre reconhecimento, dissolução, efeitos patrimoniais e documentos relacionados à relação."
  ],
  [
    "Acordos familiares",
    "Construção e revisão de acordos com segurança jurídica, clareza de obrigações e redução de conflitos futuros."
  ],
  [
    "Demandas familiares sensíveis",
    "Condução responsável de situações que exigem discrição, escuta e atenção aos impactos pessoais envolvidos."
  ]
];

const familySteps = [
  [
    "01",
    "Escuta inicial",
    "Compreensão da situação, das pessoas envolvidas, dos documentos disponíveis e dos objetivos do cliente."
  ],
  [
    "02",
    "Análise jurídica",
    "Leitura técnica dos fatos, direitos envolvidos, riscos, possibilidades e medidas cabíveis."
  ],
  [
    "03",
    "Estratégia de condução",
    "Definição do caminho mais adequado, considerando a possibilidade de acordo, negociação ou medida judicial."
  ],
  [
    "04",
    "Acompanhamento próximo",
    "Comunicação clara sobre documentos, prazos, movimentações relevantes e próximos passos."
  ]
];

const familyDocuments = [
  "Situação familiar atual",
  "Existência de filhos",
  "Rotina de convivência",
  "Necessidades financeiras",
  "Documentos patrimoniais",
  "Regime de bens",
  "Comprovantes de renda",
  "Acordos já existentes",
  "Mensagens ou registros relevantes",
  "Documentos pessoais",
  "Decisões judiciais anteriores, quando houver"
];

const familyFaqItems = [
  [
    "Quando procurar um advogado de família em Sorocaba?",
    "Quando houver dúvida sobre divórcio, guarda, convivência familiar, pensão alimentícia, partilha de bens, união estável ou qualquer situação familiar que exija orientação jurídica."
  ],
  [
    "Preciso ter todos os documentos para iniciar a análise?",
    "Não necessariamente. A análise pode começar pelo relato da situação. Depois, o escritório orienta quais documentos podem ser necessários."
  ],
  [
    "O divórcio sempre precisa ser judicial?",
    "Depende do caso. Algumas situações podem ser resolvidas de forma extrajudicial, enquanto outras exigem processo judicial, especialmente quando há conflito, filhos menores ou pontos sem acordo."
  ],
  [
    "Como funciona a definição de guarda?",
    "A análise considera a realidade da criança ou adolescente, a rotina familiar, as responsabilidades dos pais e os elementos necessários para organizar a convivência."
  ],
  [
    "A pensão alimentícia pode ser revisada?",
    "Sim. Em algumas situações, mudanças na renda, nas necessidades ou no contexto familiar podem justificar pedido de revisão. Cada caso deve ser analisado individualmente."
  ],
  [
    "Como é feita a partilha de bens?",
    "A partilha depende do regime de bens, dos documentos patrimoniais, da data de aquisição dos bens e das características da relação."
  ],
  [
    "União estável gera direitos patrimoniais?",
    "Pode gerar, conforme o caso. A análise depende da relação, do período de convivência, dos bens envolvidos e dos documentos disponíveis."
  ],
  [
    "O atendimento pode ser feito de forma digital?",
    "Sim. O escritório oferece atendimento presencial em Sorocaba/SP e suporte digital para reuniões, envio de documentos e acompanhamento da demanda."
  ]
];

const internalPages = {
  "/quem-somos": {
    title: "Advocacia feita com técnica, clareza e proximidade.",
    subtitle:
      "O Eryx Fernandes Advocacia atua em demandas que exigem análise cuidadosa, comunicação transparente e condução estratégica.",
    label: "Quem Somos",
    bodyTitle: "Antes de falar em processo, falamos em decisão.",
    body:
      "O Eryx Fernandes Advocacia atua com técnica, escuta e responsabilidade na condução de demandas jurídicas pessoais, empresariais e patrimoniais.",
    points: [SITE_CONFIG.responsible, professionalRegistrationLink(), SITE_CONFIG.city]
  },
  "/atuacao": {
    title: "Soluções jurídicas para pessoas, empresas e patrimônios.",
    subtitle:
      "Atuação em Direito Trabalhista, Direito Imobiliário e Direito de Família com estratégia adequada ao contexto de cada cliente.",
    label: "Atuação",
    bodyTitle: "Áreas conectadas por método e clareza.",
    body:
      "Cada demanda é analisada a partir dos fatos, documentos, objetivos e riscos envolvidos. A atuação busca indicar caminhos possíveis com responsabilidade, clareza e segurança jurídica.",
    points: ["Trabalhadores", "Empresas", "Imóveis", "Famílias"],
    showPracticeLinks: true
  },
  "/atuacao/direito-trabalhista-trabalhadores": {
    title: "Defesa de direitos trabalhistas com estratégia e responsabilidade.",
    subtitle:
      "Orientação para trabalhadores em verbas rescisórias, horas extras, assédio, acidente de trabalho, vínculo empregatício e demais conflitos laborais.",
    label: "Trabalhista - Trabalhadores",
    bodyTitle: "Análise técnica para reconhecer e proteger direitos.",
    body:
      "A atuação envolve avaliação de documentos, histórico da relação de trabalho, provas disponíveis e possibilidades jurídicas. O objetivo é oferecer orientação clara para que cada decisão seja tomada com consciência sobre riscos e próximos passos.",
    points: ["Verbas rescisórias", "Horas extras", "Assédio", "Acidente de trabalho", "Vínculo empregatício"]
  },
  "/atuacao/direito-trabalhista-empresas": {
    title: "Segurança jurídica para decisões trabalhistas empresariais.",
    subtitle:
      "Consultoria preventiva, contratos, documentos internos e defesa em reclamações trabalhistas com foco em redução de riscos.",
    label: "Trabalhista - Empresas",
    bodyTitle: "Prevenção e defesa com visão prática do negócio.",
    body:
      "O trabalho jurídico empresarial deve apoiar decisões internas com técnica, previsibilidade e organização documental. A atuação contempla orientação preventiva, revisão de práticas, preparação de contratos e defesa em demandas trabalhistas.",
    points: ["Consultoria preventiva", "Contratos", "Políticas internas", "Defesa trabalhista", "Gestão de riscos"]
  },
  "/atuacao/direito-imobiliario": {
    title: "Proteção jurídica para imóveis, contratos e condomínios.",
    subtitle:
      "Atuação em compra e venda, locação, regularização, cobranças, conflitos condominiais e análise contratual.",
    label: "Direito Imobiliário",
    bodyTitle: "Segurança em decisões patrimoniais importantes.",
    body:
      "Questões imobiliárias exigem cuidado com documentos, prazos, obrigações e riscos contratuais. A atuação busca prevenir conflitos, estruturar negociações e orientar soluções juridicamente seguras.",
    points: ["Contratos imobiliários", "Locação", "Regularização", "Condomínios", "Cobranças"]
  },
  "/atuacao/direito-de-familia": {
    title: "Orientação jurídica para decisões familiares sensíveis.",
    subtitle:
      "Atuação em divórcio, guarda, alimentos, partilha de bens, união estável e conflitos familiares que exigem cuidado técnico.",
    label: "Direito de Família",
    bodyTitle: "Técnica, cuidado e clareza em momentos delicados.",
    body:
      "Demandas familiares envolvem decisões de impacto pessoal e patrimonial. A condução jurídica deve ser clara, responsável e sensível, sem perder a precisão técnica necessária para proteger direitos e organizar próximos passos.",
    points: ["Divórcio", "Guarda", "Alimentos", "Partilha de bens", "União estável"]
  },
  "/artigos": {
    title: "Artigos jurídicos",
    subtitle:
      "Conteúdos sobre Direito Trabalhista, Imobiliário, Família, Empresas e Condomínios para apoiar decisões mais seguras.",
    label: "Artigos",
    bodyTitle: "Uma base editorial em construção.",
    body:
      "Esta página receberá artigos semanais com linguagem clara, foco prático e cuidado técnico. A estrutura já está pronta para organizar conteúdos por área de atuação.",
    points: ["Trabalhista", "Imobiliário", "Família", "Empresas", "Condomínios"],
    showArticles: true
  },
  "/contato": {
    title: "Fale com o escritório",
    subtitle:
      "Conte brevemente o seu caso para que seja possível indicar os próximos passos com clareza e responsabilidade.",
    label: "Contato",
    bodyTitle: "Canais de atendimento",
    body:
      "Fale com o escritório para apresentar brevemente o seu caso. O atendimento pode ser presencial em Sorocaba/SP ou digital, com orientação clara sobre os próximos passos.",
    points: [SITE_CONFIG.whatsapp, SITE_CONFIG.email, SITE_CONFIG.address, professionalRegistrationLink()],
    isContact: true
  }
};

const iconMap = {
  person: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 21c5 0 9 4 9 9v2H11v-2c0-5 4-9 9-9Z"/><path d="M20 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>`,
  building: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M10 33V9l20-3v27"/><path d="M15 14h3M22 14h3M15 20h3M22 20h3M15 26h3M22 26h3"/><path d="M7 33h26"/></svg>`,
  property: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 20 20 9l12 11"/><path d="M12 18v15h16V18"/><path d="M17 33V22h6v11"/></svg>`,
  family: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M14 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M26 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M7 31c1-6 4-9 8-9 2 0 4 1 5 3 1-2 3-3 5-3 4 0 7 3 8 9"/></svg>`
};

function normalizePath(pathname) {
  const path = pathname.replace(/\/index\.html$/, "").replace(/\/$/, "");
  return path || "/";
}

function isActivePath(href, currentPath) {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

function headerTemplate(currentPath) {
  const desktopNav = navItems
    .map((item) => {
      const active = isActivePath(item.href, currentPath) ? "is-active" : "";
      if (!item.hasDropdown) {
        return `<a class="${active}" href="${item.href}">${item.label}</a>`;
      }

      return `
        <div class="nav-dropdown ${active}">
          <a href="${item.href}" class="dropdown-trigger" aria-haspopup="true">
            ${item.label}
            <span aria-hidden="true">⌄</span>
          </a>
          <div class="dropdown-panel" aria-label="Submenu Atuação">
            ${practiceItems
              .map((practice) => `<a href="${practice.href}">${practice.shortTitle}</a>`)
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");

  const mobileNav = `
    ${navItems
      .filter((item) => !item.hasDropdown)
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("")}
    <a href="/atuacao">Atuação</a>
    ${practiceItems.map((practice) => `<a class="mobile-subitem" href="${practice.href}">${practice.shortTitle}</a>`).join("")}
  `;

  return `
    <header class="site-header" data-header>
      <div class="header-inner">
        <a class="brand" href="/" aria-label="${SITE_CONFIG.firmName}">
          <img src="/monograma-mf-branco.png" alt="" aria-hidden="true" />
          <span>
            <strong>Eryx Fernandes</strong>
            <small>Advocacia</small>
          </span>
        </a>
        <nav class="desktop-nav" aria-label="Navegação principal">
          ${desktopNav}
        </nav>
        <a class="header-contact" href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer">Fale conosco</a>
        <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" data-menu-toggle>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="mobile-panel" data-mobile-panel>
        <nav aria-label="Menu mobile">
          ${mobileNav}
          <a class="mobile-contact" href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer">Fale conosco</a>
        </nav>
      </div>
    </header>
  `;
}

function footerTemplate() {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/monograma-mf-branco.png" alt="" aria-hidden="true" />
            <span>
              <strong>Eryx Fernandes</strong>
              <small>Advocacia</small>
            </span>
          </div>
          <p>Advocacia estratégica em Direito Trabalhista, Imobiliário e de Família.</p>
        </div>
        <div>
          <h2>Menu</h2>
          <a href="/">Home</a>
          <a href="/quem-somos">Quem Somos</a>
          <a href="/atuacao">Atuação</a>
          <a href="/cidades-atendidas">Cidades Atendidas</a>
          <a href="/artigos">Artigos</a>
          <a href="/contato">Contato</a>
        </div>
        <div>
          <h2>Áreas de atuação</h2>
          ${practiceItems.map((item) => `<a href="${item.href}">${item.shortTitle}</a>`).join("")}
        </div>
        <div>
          <h2>Contato</h2>
          <p>${SITE_CONFIG.address}</p>
          <a href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">WhatsApp: ${SITE_CONFIG.whatsapp}</a>
          <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>
          <p>${SITE_CONFIG.responsible} · ${professionalRegistrationLink()}</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${SITE_CONFIG.firmName}. Todos os direitos reservados.</span>
        <span>${SITE_CONFIG.city} · Atendimento presencial e digital.</span>
      </div>
    </footer>
    ${floatingWhatsAppTemplate()}
  `;
}

function floatingWhatsAppTemplate() {
  return `
    <a
      class="floating-whatsapp"
      href="${getWhatsAppUrl()}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Dr. Eryx Fernandes pelo WhatsApp"
      title="Falar pelo WhatsApp">
      <span class="floating-whatsapp-tooltip" aria-hidden="true">Fale conosco pelo WhatsApp</span>
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M16.04 3A12.94 12.94 0 0 0 5 22.7L3 29l6.48-1.93A12.98 12.98 0 1 0 16.04 3Zm0 23.58c-2.1 0-4.15-.62-5.9-1.8l-.42-.27-3.84 1.14 1.17-3.73-.28-.44a10.58 10.58 0 1 1 9.27 5.1Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.31-.16-1.33-.49-2.54-1.57a9.5 9.5 0 0 1-1.76-2.19c-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.15-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.31-1.1 1.07-1.1 2.62s1.13 3.04 1.28 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.75.24 1.44.21 1.98.13.6-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z"/>
      </svg>
    </a>
  `;
}

function homeTemplate() {
  return `
    ${headerTemplate("/")}
    <main id="conteudo">
      <section class="hero-home" aria-label="Apresentação">
        <picture class="hero-poster" aria-hidden="true">
          <source media="(max-width: 767px)" srcset="/home-hero-fallback-mobile.avif" type="image/avif" />
          <source media="(max-width: 767px)" srcset="/home-hero-fallback-mobile.webp" type="image/webp" />
          <source srcset="/home-hero-fallback-desktop.avif" type="image/avif" />
          <source srcset="/home-hero-fallback-desktop.webp" type="image/webp" />
          <img src="/home-hero-fallback-desktop.webp" alt="" fetchpriority="high" decoding="async" />
        </picture>
        <video
          class="hero-video"
          muted
          loop
          playsinline
          preload="none"
          data-src-mobile="/home-hero-video-mobile.mp4"
          data-src-desktop="/home-hero-video.mp4"
          aria-hidden="true"></video>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <p class="hero-kicker">Eryx Fernandes Advocacia</p>
          <h1>
            <span>Defendemos os direitos de</span>
            <strong data-rotating-word>trabalhadores</strong>
          </h1>
          <p>
            Advocacia estratégica em Direito Trabalhista, Imobiliário e de Família, com técnica, clareza e proximidade.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer">Falar com o escritório</a>
            <a class="button button-ghost" href="/atuacao">Conhecer áreas de atuação</a>
          </div>
        </div>
        <a class="hero-scroll" href="#areas" aria-label="Ir para áreas de atuação"></a>
      </section>

      <section class="practice-section" id="areas">
        <div class="section-shell">
          <div class="section-heading light">
            <p>Áreas de atuação</p>
            <h2>O que você precisa resolver?</h2>
            <span>Cada situação exige uma estratégia jurídica diferente. Escolha o contexto que mais se aproxima do seu momento.</span>
          </div>
          <div class="signal-field" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="practice-grid">
            ${practiceItems.map(practiceCardTemplate).join("")}
          </div>
        </div>
      </section>

      <section class="intro-section">
        <div class="intro-media">
          ${optimizedPicture("/home-retrato-advogado.jpg", "Advogado em ambiente institucional")}
          <img class="intro-mark" src="/monograma-mf.png" alt="" aria-hidden="true" />
        </div>
        <div class="intro-copy">
          <p class="eyebrow">O escritório</p>
          <h2>Advocacia com técnica, clareza e proximidade.</h2>
          <p>
            O Eryx Fernandes Advocacia atua em questões trabalhistas, imobiliárias e familiares com uma abordagem estratégica, responsável e próxima. Cada caso é analisado com atenção aos detalhes, linguagem clara e compromisso com decisões juridicamente seguras.
          </p>
          <a class="button button-dark" href="/quem-somos">Conheça o escritório</a>
        </div>
      </section>

      <section class="method-section">
        <div class="method-copy">
          <p class="eyebrow">Método de trabalho</p>
          <h2>Um método claro para decisões importantes.</h2>
          <div class="steps">
            ${[
              ["01", "Entendimento do caso", "Análise inicial dos fatos, documentos e objetivos envolvidos."],
              [
                "02",
                "Estratégia jurídica",
                "Definição do melhor caminho, com clareza sobre riscos, possibilidades e próximos passos."
              ],
              [
                "03",
                "Condução próxima",
                "Acompanhamento técnico, comunicação objetiva e atuação responsável durante todo o processo."
              ]
            ]
              .map(
                ([number, title, text]) => `
                  <article class="step-item">
                    <span>${number}</span>
                    <div>
                      <h3>${title}</h3>
                      <p>${text}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="method-media">
          ${optimizedPicture("/home-reuniao-juridica.jpg", "Reunião jurídica em ambiente profissional")}
        </div>
      </section>

      <section class="articles-section">
        <div class="section-heading">
          <p>Artigos recentes</p>
          <h2>Conteúdos jurídicos para decisões mais seguras.</h2>
          <span>Artigos semanais sobre Direito Trabalhista, Imobiliário, Família, Empresas e Condomínios.</span>
        </div>
        <div class="article-grid">
          ${articles.filter((article) => article.href !== "/artigos/pensao-alimenticia-atrasada-como-cobrar").map(articleCardTemplate).join("")}
        </div>
        <div class="center-action">
          <a class="button button-dark" href="/artigos">Ver todos os artigos</a>
        </div>
      </section>

      ${finalCtaTemplate()}
    </main>
    ${footerTemplate()}
  `;
}

function practiceCardTemplate(item) {
  return `
    <article class="practice-card">
      <div class="practice-icon">${iconMap[item.icon]}</div>
      <p>${item.eyebrow}</p>
      <h3>${item.title}</h3>
      <strong>${item.phrase}</strong>
      <span>${item.text}</span>
      <a href="${item.href}">${item.cta}</a>
    </article>
  `;
}

function articleCardTemplate(article) {
  return `
    <article class="article-card">
      <span>${article.homeCategory || article.category}</span>
      <h3><a class="article-card-title-link" href="${article.href}">${article.title}</a></h3>
      <p>${article.excerpt}</p>
      <a href="${article.href}">Ler artigo</a>
    </article>
  `;
}

function finalCtaTemplate() {
  return `
    <section class="final-cta">
      <div class="final-cta-image">
        ${optimizedPicture("/home-cta-advogado.jpg", "Advogado em atendimento")}
      </div>
      <div class="final-cta-copy">
        <p class="eyebrow">Atendimento</p>
        <h2>Precisa de orientação jurídica?</h2>
        <p>
          Fale com o escritório e conte brevemente o seu caso. A partir das informações iniciais, será possível indicar os próximos passos com clareza e responsabilidade.
        </p>
        <div class="cta-actions">
          <a class="button button-primary" href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
          <a class="button button-ghost" href="/atuacao">Ver áreas de atuação</a>
        </div>
      </div>
    </section>
  `;
}

function aboutTemplate() {
  return `
    ${headerTemplate("/quem-somos")}
    <main id="conteudo" class="about-page">
      <section class="about-hero">
        <div class="about-hero-mark" aria-hidden="true">
          <img src="/monograma-mf-branco.png" alt="" />
        </div>
        <div class="about-lines" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="about-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Quem Somos</span>
          </nav>
          <h1>Advocacia feita com técnica, clareza e proximidade.</h1>
          <p>O Eryx Fernandes Advocacia atua em demandas que exigem análise cuidadosa, comunicação transparente e condução estratégica.</p>
        </div>
      </section>

      <section class="manifest-section reveal-block">
        <div class="manifest-lines">
          <p><span>Cada caso carrega uma decisão importante.</span></p>
          <p><span>Cada documento revela um risco.</span></p>
          <p><span>Cada orientação pode mudar o caminho.</span></p>
        </div>
        <p class="manifest-note">
          Por isso, o escritório atua com técnica, escuta e responsabilidade na condução de demandas jurídicas pessoais, empresariais e patrimoniais.
        </p>
      </section>

      <section class="about-institutional reveal-block">
        <div class="about-institutional-copy">
          <p class="eyebrow">Antes do processo</p>
          <h2>Falamos sobre decisões, riscos e caminhos possíveis.</h2>
          <div class="split-text">
            <p>O escritório Eryx Fernandes Advocacia atua com foco em soluções jurídicas estratégicas, atendimento próximo e acompanhamento transparente em cada etapa.</p>
            <p>O escritório combina análise técnica, comunicação clara e condução responsável das demandas, oferecendo suporte tanto na prevenção de conflitos quanto na atuação contenciosa.</p>
            <p>Com atendimento em Sorocaba e região, também presta suporte digital para clientes que buscam orientação jurídica com segurança, organização e confiança.</p>
          </div>
        </div>
        <div class="about-image-frame">
          ${optimizedPicture("/home-atendimento-cliente.jpg", "Atendimento jurídico em ambiente profissional")}
        </div>
      </section>

      <section class="thinking-section reveal-block">
        <div class="section-heading light">
          <p>Método e postura</p>
          <h2>Como pensamos o Direito</h2>
          <span>A atuação jurídica precisa ser clara para quem decide e precisa ser técnica para quem conduz.</span>
        </div>
        <div class="pillar-line" aria-hidden="true"></div>
        <div class="pillar-grid">
          ${thinkingPillars
            .map(
              ([number, title, text, icon]) => `
                <article class="pillar-item">
                  <div class="pillar-icon">${icon}</div>
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="leadership-section reveal-block">
        <div class="leadership-media">
          ${optimizedPicture("/home-retrato-advogado.jpg", "Dr. Eryx Fernandes")}
          <img class="leadership-mark" src="/monograma-mf.png" alt="" aria-hidden="true" />
        </div>
        <div class="leadership-copy">
          <p class="eyebrow">Responsável técnico</p>
          <h2>À frente do escritório</h2>
          <p>O Dr. Eryx Fernandes, inscrito na OAB/SP sob o nº 530.983, conduz o escritório com atuação voltada à segurança jurídica, comunicação objetiva e construção de soluções adequadas para cada cliente.</p>
          <p>Sua atuação reúne análise técnica, proximidade no atendimento e acompanhamento transparente das demandas, com suporte presencial em Sorocaba/SP e atendimento digital.</p>
          <div class="credentials-list">
            <span>Dr. Eryx Fernandes</span>
            <span>${professionalRegistrationLink()}</span>
            <span>Sorocaba/SP</span>
            <span>Atendimento presencial e digital</span>
          </div>
        </div>
      </section>

      <section class="integrated-section reveal-block">
        <div class="integrated-copy">
          <p class="eyebrow">Visão integrada</p>
          <h2>Atuação com visão integrada</h2>
          <p>O escritório atua em demandas que exigem leitura técnica, clareza na comunicação e condução responsável, com foco em quatro frentes centrais de atuação.</p>
          <a class="button button-dark" href="/atuacao">Conhecer áreas de atuação</a>
        </div>
        <div class="area-tags">
          ${integratedAreas.map(([area, text]) => `<div><strong>${area}</strong><span>${text}</span></div>`).join("")}
        </div>
      </section>

      <section class="location-section reveal-block">
        <div class="location-image">
          ${optimizedPicture("/home-reuniao-juridica.jpg", "Atendimento jurídico presencial e digital")}
        </div>
        <div class="location-copy">
          <p class="eyebrow">Sorocaba/SP</p>
          <h2>Presença em Sorocaba. Atendimento também digital.</h2>
          <p>Com sede em Sorocaba/SP, o escritório atende clientes da região e oferece suporte digital para acompanhamento de demandas, troca de documentos e comunicação sobre os próximos passos.</p>
          <address>${SITE_CONFIG.address}</address>
          <a class="button button-dark" href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
        </div>
      </section>

      <section class="about-final-cta">
        <div>
          <p class="eyebrow">Próximo passo</p>
          <h2>Precisa tomar uma decisão jurídica com segurança?</h2>
          <p>Fale com o escritório e conte brevemente o seu caso. A orientação adequada começa pela escuta.</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
            <a class="button button-ghost" href="/atuacao">Ver áreas de atuação</a>
          </div>
        </div>
      </section>
    </main>
    ${footerTemplate()}
  `;
}

function practiceOverviewTemplate() {
  const activeArea = practicePathways[0];

  return `
    ${headerTemplate("/atuacao")}
    <main id="conteudo" class="practice-overview-page">
      <section class="practice-hero">
        <div class="practice-hero-mark" aria-hidden="true">
          <img src="/monograma-mf-branco.png" alt="" />
        </div>
        <div class="practice-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="practice-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Atuação</span>
          </nav>
          <p class="eyebrow">Áreas de atuação</p>
          <h1>Estratégia jurídica para diferentes momentos da vida, do trabalho e do patrimônio.</h1>
          <p>O escritório atua em demandas que exigem leitura técnica, comunicação clara e condução responsável.</p>
        </div>
      </section>

      <section class="practice-manifest reveal-block">
        <div>
          <h2>Cada demanda exige uma leitura jurídica própria.</h2>
          <p>Antes de definir o caminho, é preciso compreender o contexto, os documentos, os riscos e os objetivos envolvidos.</p>
        </div>
      </section>

      <section class="pathway-panel-section reveal-block" data-practice-panel>
        <div class="section-shell">
          <div class="section-heading light">
            <p>Central de caminhos</p>
            <h2>Escolha o seu contexto jurídico</h2>
            <span>Quatro frentes de atuação para situações que exigem técnica, clareza e estratégia.</span>
          </div>

          <div class="pathway-panel">
            <div class="pathway-tabs" role="tablist" aria-label="Áreas de atuação">
              ${practicePathways
                .map(
                  (area, index) => `
                    <button
                      class="pathway-tab ${index === 0 ? "is-active" : ""}"
                      type="button"
                      role="tab"
                      aria-selected="${index === 0 ? "true" : "false"}"
                      data-practice-index="${index}"
                    >
                      <span>${String(index + 1).padStart(2, "0")}</span>
                      ${area.title}
                    </button>
                  `
                )
                .join("")}
            </div>

            <article class="pathway-detail" data-practice-detail>
              ${pathwayDetailTemplate(activeArea)}
            </article>
          </div>

          <div class="pathway-mobile-list">
            ${practicePathways
              .map(
                (area, index) => `
                  <article class="pathway-mobile-item ${index === 0 ? "is-open" : ""}" data-mobile-practice-item>
                    <button type="button" data-mobile-practice-toggle aria-expanded="${index === 0 ? "true" : "false"}">
                      <span>${String(index + 1).padStart(2, "0")}</span>
                      ${area.title}
                    </button>
                    <div class="pathway-mobile-content">
                      ${pathwayDetailTemplate(area)}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="demand-method-section reveal-block">
        <div class="demand-method-copy">
          <p class="eyebrow">Método</p>
          <h2>Como conduzimos cada demanda</h2>
          <p>A atuação jurídica começa com escuta, passa pela análise técnica e segue com acompanhamento próximo.</p>
        </div>
        <div class="demand-method-grid">
          ${demandSteps
            .map(
              ([number, title, text]) => `
                <article class="demand-step">
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="demand-method-image">
          ${optimizedPicture("/home-detalhe-documentos.jpg", "Documentos analisados em contexto jurídico")}
        </div>
      </section>

      <section class="preventive-section reveal-block">
        <div class="preventive-heading">
          <p class="eyebrow">Prevenção e condução</p>
          <h2>Prevenir quando possível. Atuar com firmeza quando necessário.</h2>
          <p>O escritório presta suporte tanto antes do conflito surgir quanto em demandas já instauradas, sempre com análise individualizada e condução responsável.</p>
        </div>
        <div class="preventive-panels">
          <article>
            <span>01</span>
            <h3>Atuação preventiva</h3>
            <p>Orientação jurídica para reduzir riscos, revisar documentos, estruturar decisões e evitar conflitos desnecessários.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Atuação contenciosa</h3>
            <p>Condução técnica de demandas judiciais e extrajudiciais, com estratégia, organização documental e acompanhamento transparente.</p>
          </article>
        </div>
      </section>

      <section class="practice-final-cta">
        <div class="practice-final-image">
          ${optimizedPicture("/home-cta-advogado.jpg", "Atendimento jurídico")}
        </div>
        <div class="practice-final-copy">
          <p class="eyebrow">Orientação jurídica</p>
          <h2>Precisa entender qual caminho jurídico seguir?</h2>
          <p>Fale com o escritório e conte brevemente o seu caso. A orientação adequada começa pela análise do contexto.</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
            <a class="button button-ghost" href="/contato">Ir para contato</a>
          </div>
        </div>
      </section>
    </main>
    ${footerTemplate()}
  `;
}

function pathwayDetailTemplate(area) {
  return `
    <p>${area.eyebrow}</p>
    <h3>${area.title}</h3>
    <strong>${area.phrase}</strong>
    <span>${area.text}</span>
    <small>${area.keywords}</small>
    <a class="button button-primary" href="${area.href}">${area.cta}</a>
  `;
}

const laborLandingPages = {
  "/atuacao/rescisao-indireta": {
    shortTitle: "Rescisão Indireta",
    eyebrow: "Direito do trabalhador",
    title: "Rescisão Indireta do Contrato de Trabalho",
    subtitle:
      "Entenda quando uma falta grave do empregador pode permitir o encerramento do contrato com direitos semelhantes aos da dispensa sem justa causa.",
    seoTitle: "Rescisão Indireta | Advogado Trabalhista em Sorocaba",
    seoDescription:
      "Orientação sobre rescisão indireta para trabalhadores de Sorocaba: falta de FGTS, atraso salarial, assédio e outras faltas graves do empregador.",
    whatsapp: "Vim pela página de Rescisão Indireta e gostaria de analisar meu caso.",
    introTitle: "Quando continuar trabalhando deixa de ser uma decisão simples",
    intro:
      "A rescisão indireta pode ser discutida quando o empregador descumpre obrigações relevantes do contrato. Como a saída precipitada pode gerar consequências, cada situação precisa ser analisada antes de qualquer decisão.",
    situations: [
      ["Salário atrasado ou não pago", "Atrasos reiterados ou ausência de pagamento podem comprometer a continuidade do vínculo."],
      ["FGTS sem depósitos", "A falta recorrente de recolhimentos pode representar descumprimento contratual relevante."],
      ["Assédio ou tratamento abusivo", "Humilhações, ameaças e constrangimentos exigem avaliação dos fatos e das possíveis provas."],
      ["Risco à saúde e à segurança", "Exposição indevida a perigo ou ausência de proteção pode demandar providências."],
      ["Mudança prejudicial do contrato", "Redução indevida, alteração de função ou transferência abusiva podem afetar direitos."],
      ["Descumprimentos reiterados", "O conjunto de irregularidades pode ser tão importante quanto um episódio isolado."]
    ],
    rightsTitle: "O que pode ser discutido em uma rescisão indireta",
    rights: ["Saldo de salário", "Aviso-prévio", "Férias vencidas e proporcionais", "13º salário proporcional", "Liberação do FGTS e multa de 40%", "Seguro-desemprego, quando preenchidos os requisitos"],
    documents: ["Carteira de trabalho e contrato", "Holerites e extratos bancários", "Extrato analítico do FGTS", "Mensagens, e-mails e comunicados", "Registros de jornada", "Atestados, laudos ou testemunhas"],
    faq: [
      ["Posso simplesmente parar de trabalhar?", "Essa decisão não deve ser tomada sem análise individual. O afastamento feito de forma inadequada pode gerar discussão sobre abandono ou pedido de demissão."],
      ["FGTS não depositado pode justificar rescisão indireta?", "A ausência reiterada de depósitos pode ser relevante, mas o histórico do vínculo e as provas precisam ser avaliados."],
      ["Quais direitos posso receber?", "Quando reconhecida, a rescisão indireta pode produzir efeitos semelhantes aos da dispensa sem justa causa, conforme o caso concreto."],
      ["Preciso ter todos os documentos?", "Não. A conversa inicial pode começar com as informações disponíveis, e a documentação necessária é definida durante a análise."]
    ],
    article: ["/artigos/rescisao-indireta-sorocaba", "Leia também: guia completo sobre rescisão indireta"]
  },
  "/atuacao/verbas-rescisorias": {
    shortTitle: "Verbas Rescisórias",
    eyebrow: "Encerramento do contrato",
    title: "Verbas Rescisórias: conferência e cobrança",
    subtitle:
      "Análise dos valores pagos no desligamento para identificar diferenças, parcelas ausentes e possíveis irregularidades.",
    seoTitle: "Verbas Rescisórias | Advogado Trabalhista em Sorocaba",
    seoDescription:
      "Conferência de verbas rescisórias em Sorocaba: aviso-prévio, férias, 13º salário, FGTS, multa de 40% e diferenças no desligamento.",
    whatsapp: "Vim pela página de Verbas Rescisórias e gostaria de conferir meu desligamento.",
    introTitle: "O acerto rescisório precisa refletir a realidade do contrato",
    intro:
      "O tipo de desligamento, o salário, as médias, a jornada e o tempo de serviço interferem no cálculo. Uma conferência técnica ajuda a comparar o termo de rescisão com o que ocorreu durante o vínculo.",
    situations: [
      ["Valor menor que o esperado", "Diferenças podem decorrer de bases de cálculo, médias ou parcelas não consideradas."],
      ["Pagamento fora do prazo", "O atraso na quitação pode produzir consequências que precisam ser verificadas."],
      ["Aviso-prévio incorreto", "A modalidade e a proporcionalidade do aviso influenciam outras parcelas."],
      ["Férias ou 13º ausentes", "Períodos vencidos e parcelas proporcionais devem ser conferidos."],
      ["FGTS e multa de 40%", "Extratos e chave de saque ajudam a verificar depósitos e indenização."],
      ["Descontos questionáveis", "Descontos no termo rescisório precisam ter fundamento e documentação."]
    ],
    rightsTitle: "Parcelas normalmente conferidas",
    rights: ["Saldo de salário", "Aviso-prévio", "Férias + 1/3", "13º salário", "FGTS e multa rescisória", "Horas extras e outras médias"],
    documents: ["Termo de rescisão", "Carteira de trabalho", "Holerites", "Extrato do FGTS", "Aviso de desligamento", "Comprovantes de pagamento"],
    faq: [
      ["Qual é o prazo para pagamento da rescisão?", "Em regra, a quitação deve observar o prazo legal contado do término do contrato. As datas e a modalidade de desligamento precisam ser confirmadas."],
      ["Como saber se o cálculo está correto?", "É necessário confrontar o termo com salário, médias, jornada, férias, depósitos e forma de encerramento do vínculo."],
      ["Assinei a rescisão. Ainda posso questionar?", "A assinatura, por si só, não impede necessariamente a análise de diferenças, mas os documentos e circunstâncias devem ser avaliados."],
      ["Posso analisar apenas os documentos?", "Sim. O primeiro passo pode ser a conferência do termo de rescisão e dos comprovantes disponíveis."]
    ]
  },
  "/atuacao/fgts-nao-depositado": {
    shortTitle: "FGTS Não Depositado",
    eyebrow: "Regularidade dos depósitos",
    title: "FGTS não depositado pelo empregador",
    subtitle:
      "Verificação dos recolhimentos do contrato de trabalho e orientação sobre medidas possíveis quando existem períodos sem depósito.",
    seoTitle: "FGTS Não Depositado | Advogado Trabalhista em Sorocaba",
    seoDescription:
      "Descubra o que fazer quando a empresa não deposita o FGTS. Atendimento trabalhista em Sorocaba para análise de extratos e períodos em aberto.",
    whatsapp: "Vim pela página de FGTS Não Depositado e gostaria de verificar meu extrato.",
    introTitle: "O saldo do aplicativo nem sempre conta toda a história",
    intro:
      "O empregador deve realizar os recolhimentos correspondentes ao vínculo. A análise do extrato analítico permite identificar competências ausentes, atrasos e divergências entre o contrato e os depósitos.",
    situations: [
      ["Meses sem recolhimento", "Lacunas no extrato podem indicar competências não depositadas."],
      ["Depósitos feitos com atraso", "Recolhimentos posteriores precisam ser comparados com todo o período trabalhado."],
      ["Valor abaixo do esperado", "Salário e parcelas remuneratórias podem influenciar a base de cálculo."],
      ["Contrato não aparece corretamente", "Dados cadastrais ou ausência de registro podem afetar a visualização."],
      ["Dificuldade para sacar", "Chave, modalidade de desligamento e regularidade dos depósitos devem ser conferidas."],
      ["FGTS e rescisão indireta", "A ausência reiterada pode ter reflexos além da cobrança dos valores."]
    ],
    rightsTitle: "O que a análise pode verificar",
    rights: ["Períodos sem depósito", "Diferenças de base de cálculo", "Recolhimentos em atraso", "Reflexos no desligamento", "Multa rescisória", "Relação com outras irregularidades"],
    documents: ["Extrato analítico do FGTS", "Carteira de trabalho", "Holerites", "Termo de rescisão", "Comprovantes bancários", "Documentos do vínculo"],
    faq: [
      ["Como consultar se o FGTS foi depositado?", "O extrato analítico disponibilizado pelos canais da Caixa permite conferir os recolhimentos por competência."],
      ["A empresa pode depositar tudo apenas na demissão?", "Os recolhimentos seguem periodicidade própria. Pagamentos posteriores não eliminam automaticamente a necessidade de conferir diferenças e consequências."],
      ["FGTS atrasado dá direito à rescisão indireta?", "A irregularidade reiterada pode ser relevante, mas a medida exige análise do histórico e das provas antes de qualquer decisão."],
      ["Posso cobrar depósitos de um emprego antigo?", "Pode haver possibilidade de cobrança, sujeita à análise dos períodos e dos prazos aplicáveis ao caso."]
    ]
  },
  "/atuacao/horas-extras": {
    shortTitle: "Horas Extras",
    eyebrow: "Jornada de trabalho",
    title: "Horas Extras e controle de jornada",
    subtitle:
      "Análise de horários, intervalos, banco de horas e registros para verificar diferenças na remuneração da jornada.",
    seoTitle: "Horas Extras | Advogado Trabalhista em Sorocaba",
    seoDescription:
      "Orientação sobre horas extras em Sorocaba: jornada sem registro, intervalo, banco de horas, trabalho externo e diferenças nos pagamentos.",
    whatsapp: "Vim pela página de Horas Extras e gostaria de analisar minha jornada de trabalho.",
    introTitle: "A jornada real pode ser diferente daquela registrada",
    intro:
      "Horários antes ou depois do ponto, intervalos incompletos, mensagens fora do expediente e bancos de horas irregulares podem alterar o cálculo. A análise parte da rotina efetivamente cumprida.",
    situations: [
      ["Trabalho antes ou depois do ponto", "Atividades fora do horário registrado podem integrar a jornada."],
      ["Intervalo reduzido", "A pausa efetivamente usufruída deve ser comparada com as regras aplicáveis."],
      ["Banco de horas sem transparência", "Acordos, compensações e saldo precisam ser verificáveis."],
      ["Mensagens fora do expediente", "Ordens e atividades remotas podem ajudar a demonstrar a rotina."],
      ["Cargo de confiança questionável", "O nome do cargo não define sozinho o enquadramento da jornada."],
      ["Trabalho externo ou remoto", "A possibilidade de controle deve ser analisada conforme a realidade da atividade."]
    ],
    rightsTitle: "Pontos avaliados no cálculo da jornada",
    rights: ["Horários de entrada e saída", "Intervalos", "Adicionais aplicáveis", "Banco de horas", "Reflexos em férias, 13º e FGTS", "Registros e meios de prova"],
    documents: ["Espelhos de ponto", "Holerites", "Escalas", "Mensagens e e-mails", "Registros de acesso ou localização", "Testemunhas da rotina"],
    faq: [
      ["Sem cartão de ponto posso provar horas extras?", "Outros elementos podem ajudar, como mensagens, escalas, registros de acesso e testemunhas, conforme o caso."],
      ["Quem trabalha em casa tem direito?", "O trabalho remoto não exclui automaticamente o controle de jornada. A rotina e os meios de acompanhamento precisam ser verificados."],
      ["Banco de horas pode substituir o pagamento?", "A validade da compensação depende da forma adotada, dos registros e do cumprimento das regras aplicáveis."],
      ["Hora extra gera reflexos em outras verbas?", "Valores habituais podem repercutir em outras parcelas, conforme a natureza e o período analisado."]
    ]
  },
  "/atuacao/assedio-moral-no-trabalho": {
    shortTitle: "Assédio Moral",
    eyebrow: "Ambiente de trabalho",
    title: "Assédio Moral no Trabalho",
    subtitle:
      "Orientação para identificar condutas abusivas, preservar provas e avaliar medidas jurídicas com cautela e confidencialidade.",
    seoTitle: "Assédio Moral no Trabalho | Advogado Trabalhista em Sorocaba",
    seoDescription:
      "Orientação sobre assédio moral no trabalho em Sorocaba: humilhações, ameaças, isolamento, cobranças abusivas, provas e medidas possíveis.",
    whatsapp: "Vim pela página de Assédio Moral no Trabalho e gostaria de relatar uma situação com confidencialidade.",
    introTitle: "Cobrança profissional e violência psicológica não são a mesma coisa",
    intro:
      "Nem todo conflito caracteriza assédio, mas humilhações, perseguições e práticas abusivas recorrentes merecem atenção. O contexto, a frequência, as pessoas envolvidas e as provas disponíveis orientam a análise.",
    situations: [
      ["Humilhações públicas", "Exposição vexatória, insultos ou ridicularização podem ultrapassar o poder de direção."],
      ["Ameaças e intimidação", "Pressões abusivas e medo constante precisam ser contextualizados e documentados."],
      ["Metas com constrangimento", "A cobrança pode se tornar ilícita quando utiliza práticas ofensivas ou discriminatórias."],
      ["Isolamento deliberado", "Retirada injustificada de tarefas ou exclusão podem integrar um quadro de perseguição."],
      ["Punições repetidas", "Advertências e mudanças prejudiciais sem fundamento merecem verificação."],
      ["Adoecimento relacionado", "Atestados e acompanhamento de saúde podem ser relevantes para compreender os impactos."]
    ],
    rightsTitle: "Como uma análise responsável é construída",
    rights: ["Cronologia dos acontecimentos", "Identificação das pessoas envolvidas", "Frequência das condutas", "Comunicações e documentos", "Possíveis testemunhas", "Impactos profissionais e pessoais"],
    documents: ["Mensagens e e-mails", "Comunicados e advertências", "Relatos com datas", "Atestados e prontuários", "Protocolos internos", "Nomes de possíveis testemunhas"],
    faq: [
      ["Toda cobrança de meta é assédio moral?", "Não. É preciso avaliar a forma, a frequência e o contexto da cobrança. Métodos humilhantes ou intimidatórios podem alterar essa conclusão."],
      ["Posso gravar uma conversa da qual participo?", "A utilização de gravações depende das circunstâncias e da forma de obtenção. O material deve ser analisado antes de ser divulgado ou utilizado."],
      ["Preciso denunciar internamente primeiro?", "Canais internos podem ser úteis, mas a melhor sequência depende do risco, das provas e da situação concreta."],
      ["O assédio pode justificar indenização ou rescisão indireta?", "Conforme a gravidade e a prova, podem existir diferentes consequências jurídicas, que precisam ser avaliadas individualmente."]
    ]
  },
  "/atuacao/acidente-de-trabalho": {
    shortTitle: "Acidente de Trabalho",
    eyebrow: "Saúde e segurança",
    title: "Acidente de Trabalho e doença ocupacional",
    subtitle:
      "Orientação sobre afastamento, estabilidade, documentação e possíveis direitos após acidente ou adoecimento relacionado ao trabalho.",
    seoTitle: "Acidente de Trabalho | Advogado Trabalhista em Sorocaba",
    seoDescription:
      "Orientação em acidente de trabalho e doença ocupacional em Sorocaba: CAT, INSS, estabilidade, despesas, sequelas e documentação.",
    whatsapp: "Vim pela página de Acidente de Trabalho e gostaria de analisar minha situação.",
    introTitle: "O cuidado com a saúde vem antes da discussão jurídica",
    intro:
      "Depois do atendimento médico, é importante organizar informações sobre o ocorrido, comunicação à empresa, afastamento e evolução clínica. Acidentes típicos e doenças relacionadas ao trabalho podem produzir efeitos distintos.",
    situations: [
      ["Acidente durante a atividade", "O local, a dinâmica e as medidas adotadas após o fato devem ser registrados."],
      ["Acidente no trajeto", "As circunstâncias do deslocamento precisam ser compreendidas individualmente."],
      ["Doença causada ou agravada pelo trabalho", "Nexo, atividades e histórico médico são pontos centrais da análise."],
      ["CAT não emitida", "A ausência de comunicação pela empresa não encerra a possibilidade de orientação e providências."],
      ["Retorno com limitações", "Restrições, readaptação e condições de retorno merecem acompanhamento."],
      ["Dispensa após afastamento", "Espécie do benefício, datas e possível estabilidade precisam ser conferidas."]
    ],
    rightsTitle: "Questões que podem exigir verificação",
    rights: ["Emissão da CAT", "Benefício previdenciário", "Estabilidade provisória", "Despesas e prejuízos", "Sequelas e redução da capacidade", "Condições de retorno ao trabalho"],
    documents: ["Atestados e exames", "Prontuários e receitas", "CAT, se existente", "Comunicações com a empresa", "Documentos do INSS", "Fotos, vídeos e relatos do acidente"],
    faq: [
      ["A empresa não emitiu CAT. O que fazer?", "A falta de emissão deve ser analisada, mas não impede necessariamente outras providências. Preserve os documentos médicos e as informações do ocorrido."],
      ["Doença ocupacional pode ser acidente de trabalho?", "Determinadas doenças causadas ou agravadas pelas condições laborais podem receber tratamento jurídico semelhante, conforme a prova do nexo."],
      ["Existe estabilidade depois do afastamento?", "A existência e o período de estabilidade dependem do enquadramento, do benefício e das circunstâncias do caso."],
      ["Fui dispensado depois do acidente. Ainda posso buscar orientação?", "Sim. Datas, documentos médicos, benefício e condições da dispensa podem ser analisados mesmo após o encerramento do vínculo."]
    ]
  }
};

const laborLandingRoutes = Object.keys(laborLandingPages);

function laborLandingFaqSchemaTemplate(page) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: page.shortTitle,
        provider: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
        areaServed: { "@type": "City", name: "Sorocaba" }
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer }
        }))
      }
    ]
  };
  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
}

function laborLandingPageTemplate(path) {
  const page = laborLandingPages[path];
  const whatsappUrl = getWhatsAppUrl(page.whatsapp);
  const relatedPages = laborLandingRoutes.filter((route) => route !== path).slice(0, 3);

  return `
    ${headerTemplate(path)}
    <main id="conteudo" class="labor-landing-page">
      <section class="labor-lp-hero">
        <div class="labor-lp-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span>
            <a href="/atuacao">Atuação</a><span>/</span>
            <a href="/atuacao/direito-trabalhista-trabalhadores">Trabalhadores</a><span>/</span>
            <span>${page.shortTitle}</span>
          </nav>
          <p class="eyebrow">${page.eyebrow}</p>
          <h1>${page.title}</h1>
          <p class="labor-lp-lead">${page.subtitle}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Conversar sobre meu caso</a>
            <a class="button button-ghost" href="#entenda">Entender a situação</a>
          </div>
          <div class="labor-lp-trust" aria-label="Informações do atendimento">
            <span>Atendimento em Sorocaba e região</span>
            <span>${professionalRegistrationLink()}</span>
            <span>Presencial e digital</span>
          </div>
        </div>
      </section>

      <section class="labor-lp-intro reveal-block" id="entenda">
        <p class="eyebrow">Análise individual</p>
        <h2>${page.introTitle}</h2>
        <p>${page.intro}</p>
      </section>

      <section class="labor-lp-situations reveal-block">
        <div class="section-heading">
          <p>Sinais de atenção</p>
          <h2>Situações que podem exigir orientação</h2>
          <span>Os exemplos abaixo ajudam a reconhecer sinais de atenção, mas cada situação precisa ser compreendida individualmente.</span>
        </div>
        <div class="labor-lp-card-grid">
          ${page.situations.map(([title, text], index) => `
            <article>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>`).join("")}
        </div>
      </section>

      <section class="labor-lp-checklist reveal-block">
        <div>
          <p class="eyebrow">Pontos da análise</p>
          <h2>${page.rightsTitle}</h2>
          <p class="labor-lp-reassurance">Você não precisa reunir documentos antes de entrar em contato. A conversa pode começar pelo seu relato, e o escritório orientará os próximos passos conforme a situação.</p>
          <div class="labor-lp-list">${page.rights.map((item) => `<span>${item}</span>`).join("")}</div>
        </div>
      </section>

      <section class="labor-lp-lawyer reveal-block">
        <div class="labor-lp-lawyer-image">
          ${optimizedPicture("/home-retrato-advogado.jpg", "Dr. Eryx Fernandes, advogado em Sorocaba")}
        </div>
        <div>
          <p class="eyebrow">Responsável pelo atendimento</p>
          <h2>Orientação direta com o Dr. Eryx Fernandes</h2>
          <p>O atendimento é conduzido com escuta, compreensão do contexto e explicação clara sobre riscos e caminhos possíveis, sem promessas de resultado.</p>
          <div class="labor-lp-credentials">
            <strong>Dr. Eryx Fernandes</strong>
            <span>${professionalRegistrationLink()}</span>
            <span>${SITE_CONFIG.address}</span>
          </div>
          <a class="button button-dark" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o escritório</a>
        </div>
      </section>

      <section class="worker-faq-section labor-lp-faq reveal-block">
        <div class="section-heading">
          <p>FAQ</p>
          <h2>Perguntas frequentes sobre ${page.shortTitle.toLowerCase()}</h2>
        </div>
        <div class="faq-list">
          ${page.faq.map(([question, answer], index) => `
            <article class="faq-item ${index === 0 ? "is-open" : ""}" data-faq-item>
              <button type="button" data-faq-toggle aria-expanded="${index === 0 ? "true" : "false"}">
                <span>${String(index + 1).padStart(2, "0")}</span>${question}
              </button>
              <div class="faq-answer"><p>${answer}</p></div>
            </article>`).join("")}
        </div>
      </section>

      <section class="labor-lp-related reveal-block">
        <div class="section-heading">
          <p>Direitos do trabalhador</p>
          <h2>Outras situações trabalhistas</h2>
        </div>
        <div class="labor-lp-related-grid">
          ${relatedPages.map((route) => `<a href="${route}"><strong>${laborLandingPages[route].shortTitle}</strong><span>Conhecer esta área de atuação</span></a>`).join("")}
          <a href="/atuacao/direito-trabalhista-trabalhadores"><strong>Direito Trabalhista para Trabalhadores</strong><span>Ver todas as frentes de atuação</span></a>
        </div>
        ${page.article ? `<a class="labor-lp-article-link" href="${page.article[0]}">${page.article[1]} →</a>` : ""}
      </section>

      <section class="labor-lp-final">
        <div>
          <p class="eyebrow">Próximo passo</p>
          <h2>Quer entender como essas informações se aplicam ao seu caso?</h2>
          <p>Conte brevemente o que aconteceu. O primeiro contato serve para compreender o contexto e organizar os próximos passos.</p>
          <a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Iniciar uma conversa</a>
        </div>
      </section>
    </main>
    ${laborLandingFaqSchemaTemplate(page)}
    ${footerTemplate()}
  `;
}

function workerLaborTemplate() {
  const workerWhatsappUrl = getWhatsAppUrl("Olá, Dr. Eryx. Vim pelo site e gostaria de conversar sobre um problema trabalhista.");
  const workerTopicMessages = {
    "/atuacao/rescisao-indireta": "Olá, Dr. Eryx. Vim pelo site e gostaria de conversar sobre um possível caso de rescisão indireta.",
    "/atuacao/verbas-rescisorias": "Olá, Dr. Eryx. Vim pelo site e gostaria de conversar sobre minhas verbas rescisórias.",
    "/atuacao/fgts-nao-depositado": "Olá, Dr. Eryx. Vim pelo site e gostaria de conversar sobre depósitos de FGTS.",
    "/atuacao/horas-extras": "Olá, Dr. Eryx. Vim pelo site e gostaria de conversar sobre horas extras que acredito não terem sido pagas corretamente.",
    "/atuacao/assedio-moral-no-trabalho": "Olá, Dr. Eryx. Vim pelo site e gostaria de conversar sobre uma situação de assédio moral no trabalho.",
    "/atuacao/acidente-de-trabalho": "Olá, Dr. Eryx. Vim pelo site e gostaria de conversar sobre um acidente de trabalho."
  };
  const workerCardCopy = {
    "/atuacao/rescisao-indireta": "Defesa dos seus direitos quando a empresa comete uma falta grave e a continuidade do vínculo de trabalho se torna insustentável.",
    "/atuacao/verbas-rescisorias": "Atuação para cobrar diferenças, parcelas não pagas e valores que possam ter sido deixados de fora da sua rescisão.",
    "/atuacao/fgts-nao-depositado": "Defesa do trabalhador quando a empresa deixa de realizar corretamente os depósitos de FGTS durante o contrato.",
    "/atuacao/horas-extras": "Atuação para buscar o pagamento de horas trabalhadas além da jornada e outras diferenças relacionadas ao controle de horário.",
    "/atuacao/assedio-moral-no-trabalho": "Defesa firme diante de humilhações, constrangimentos, perseguições e outras práticas abusivas no ambiente de trabalho.",
    "/atuacao/acidente-de-trabalho": "Atuação na defesa dos direitos do trabalhador após acidente ou adoecimento relacionado ao trabalho."
  };

  return `
    ${headerTemplate("/atuacao/direito-trabalhista-trabalhadores")}
    <main id="conteudo" class="worker-labor-page">
      <section class="worker-hero">
        <div class="worker-hero-mark" aria-hidden="true">
          <img src="/monograma-mf-branco.png" alt="" />
        </div>
        <div class="worker-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="worker-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/atuacao">Atuação</a>
            <span>/</span>
            <span>Trabalhadores</span>
          </nav>
          <p class="worker-hero-seo-title eyebrow">Direito Trabalhista para trabalhadores</p>
          <h1 class="worker-hero-display-title">Advogado Trabalhista em Sorocaba</h1>
          <p>Atuação na defesa de trabalhadores em demandas envolvendo rescisão, verbas trabalhistas, horas extras, assédio, acidente de trabalho, FGTS, vínculo empregatício e demais conflitos da relação de trabalho.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${workerWhatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o Dr. Eryx</a>
            <a class="button button-ghost" href="#servicos-trabalhistas">Encontrar meu problema</a>
          </div>
          <div class="worker-hero-trust" aria-label="Informações do atendimento">
            <span>Atendimento em Sorocaba e região</span>
            <span>${professionalRegistrationLink()}</span>
            <span>Atendimento presencial e digital</span>
          </div>
        </div>
      </section>

      <section class="attention-section reveal-block" id="servicos-trabalhistas">
        <div class="section-heading">
          <p>Serviços para trabalhadores</p>
          <h2>Encontre solução para o seu problema trabalhista</h2>
          <span>Escolha a situação mais próxima da sua realidade e converse diretamente com o Dr. Eryx.</span>
        </div>
        <div class="attention-grid">
          ${laborLandingRoutes
            .map(
              (route, index) => `
                <a class="worker-service-card" href="${getWhatsAppUrl(workerTopicMessages[route])}" target="_blank" rel="noopener noreferrer">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${laborLandingPages[route].shortTitle}</h3>
                  <p>${workerCardCopy[route]}</p>
                  <strong>Falar com o Dr. Eryx →</strong>
                </a>
              `
            )
            .join("")}
        </div>
      </section>

      ${workerInlineCtaTemplate(
        "Seu problema trabalhista merece ser analisado com atenção.",
        "Conte ao Dr. Eryx o que aconteceu. Uma conversa inicial permite compreender a situação e identificar quais caminhos jurídicos podem ser avaliados.",
        "Fale agora com o Dr. Eryx",
        workerWhatsappUrl
      )}

      <section class="worker-analysis-section reveal-block" id="analise-do-caso">
        <div class="worker-analysis-copy">
          <p class="eyebrow">Análise do caso</p>
          <h2>Como funciona a análise do caso</h2>
          <p>Uma defesa trabalhista consistente exige identificar as violações, reunir provas e estruturar a estratégia adequada. O caso é preparado para buscar a responsabilização da empresa e proteger os direitos do trabalhador com firmeza, agilidade e atuação prática.</p>
        </div>
        <div class="worker-analysis-steps">
          ${workerAnalysisSteps
            .map(
              ([number, title, text]) => `
                <article>
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="worker-local-section reveal-block">
        <div class="worker-local-image">
          ${optimizedPicture("/home-retrato-advogado.jpg", "Dr. Eryx Fernandes, advogado em Sorocaba")}
        </div>
        <div class="worker-local-copy">
          <p class="eyebrow">Sorocaba/SP</p>
          <h2>Atendimento direto com o Dr. Eryx Fernandes</h2>
          <p>O atendimento é conduzido diretamente pelo Dr. Eryx Fernandes, ${professionalRegistrationLink()}, com análise individual de cada situação e comunicação direta com o cliente, de forma presencial em Sorocaba ou digital.</p>
          <ul class="worker-local-benefits">
            <li>Rapidez no atendimento</li>
            <li>Contato direto com o advogado</li>
            <li>Defesa firme dos direitos do trabalhador</li>
            <li>Busca pela solução jurídica mais adequada ao caso</li>
            <li>Clareza sobre riscos e próximos passos</li>
          </ul>
          <address>${SITE_CONFIG.address}</address>
          <a class="button button-dark" href="${workerWhatsappUrl}" target="_blank" rel="noopener noreferrer">Fale agora com o Dr. Eryx</a>
        </div>
      </section>

      <section class="worker-faq-section reveal-block">
        <div class="section-heading">
          <p>FAQ</p>
          <h2>Perguntas frequentes sobre Direito Trabalhista para trabalhadores</h2>
        </div>
        <div class="faq-list">
          ${workerFaqItems
            .map(
              ([question, answer], index) => `
                <article class="faq-item ${index === 0 ? "is-open" : ""}" data-faq-item>
                  <button type="button" data-faq-toggle aria-expanded="${index === 0 ? "true" : "false"}">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    ${question}
                  </button>
                  <div class="faq-answer">
                    <p>${answer}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="worker-final-cta">
        <div class="worker-final-image">
          ${optimizedPicture("/home-cta-advogado.jpg", "Orientação sobre direitos trabalhistas")}
        </div>
        <div class="worker-final-copy">
          <p class="eyebrow">Orientação trabalhista para trabalhadores</p>
          <h2>Precisa falar com um advogado trabalhista?</h2>
          <p>Conte ao Dr. Eryx o que aconteceu e receba orientação sobre os próximos passos possíveis para o seu caso.</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${workerWhatsappUrl}" target="_blank" rel="noopener noreferrer">Fale agora com o Dr. Eryx</a>
          </div>
        </div>
      </section>
    </main>
    ${workerFaqSchemaTemplate()}
    ${footerTemplate()}
  `;
}

function workerInlineCtaTemplate(title, text, buttonText, whatsappUrl = SITE_CONFIG.whatsappUrl) {
  return `
    <section class="worker-inline-cta reveal-block">
      <div>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      <a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">${buttonText}</a>
    </section>
  `;
}

function workerFaqSchemaTemplate() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: workerFaqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
}

function companyLaborTemplate() {
  return `
    ${headerTemplate("/atuacao/direito-trabalhista-empresas")}
    <main id="conteudo" class="worker-labor-page">
      <section class="worker-hero company-hero">
        <div class="worker-hero-mark" aria-hidden="true">
          <img src="/monograma-mf-branco.png" alt="" />
        </div>
        <div class="worker-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="worker-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/atuacao">Atuação</a>
            <span>/</span>
            <span>Empresas</span>
          </nav>
          <h1 class="worker-hero-seo-title">Advogado Trabalhista Empresarial em Sorocaba</h1>
          <h2 class="worker-hero-display-title">Direito Trabalhista para Empresas</h2>
          <p>Consultoria preventiva, análise de riscos, documentos internos, desligamentos e defesa em demandas trabalhistas para empresas que precisam tomar decisões com segurança jurídica.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o escritório</a>
            <a class="button button-ghost company-hero-secondary" href="#atuacao-empresarial">Entender a atuação empresarial</a>
          </div>
        </div>
      </section>

      <section class="worker-manifest reveal-block">
        <div>
          <h2>O risco trabalhista nem sempre começa no processo. Muitas vezes, começa em uma decisão mal documentada.</h2>
          <p>Contratações, rotinas internas, advertências, jornadas e desligamentos exigem leitura técnica para reduzir riscos e orientar decisões empresariais com responsabilidade.</p>
        </div>
      </section>

      <section class="attention-section reveal-block">
        <div class="section-heading">
          <p>Gestão de risco trabalhista</p>
          <h2>Onde o risco trabalhista costuma surgir</h2>
          <span>A atuação preventiva ajuda a identificar pontos de atenção antes que eles se transformem em conflito.</span>
        </div>
        <div class="attention-grid">
          ${companyRiskItems
            .map(
              ([title, text], index) => `
                <article>
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      ${workerInlineCtaTemplate(
        "Sua empresa precisa tomar uma decisão trabalhista?",
        "Antes de agir, vale entender os riscos, os documentos necessários e o caminho juridicamente mais seguro.",
        "Falar pelo WhatsApp"
      )}

      <section class="worker-analysis-section reveal-block" id="atuacao-empresarial">
        <div class="worker-analysis-copy">
          <p class="eyebrow">Assessoria trabalhista empresarial</p>
          <h2>Como o escritório atua com empresas</h2>
          <p>A assessoria trabalhista empresarial combina prevenção, análise documental e condução estratégica de demandas.</p>
        </div>
        <div class="worker-analysis-steps">
          ${companyAnalysisSteps
            .map(
              ([number, title, text]) => `
                <article>
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="preventive-section reveal-block">
        <div class="preventive-heading">
          <p class="eyebrow">Consultivo e contencioso</p>
          <h2>Prevenção e defesa trabalhista para empresas</h2>
          <p>O escritório presta suporte tanto antes do conflito surgir quanto em demandas trabalhistas já instauradas.</p>
        </div>
        <div class="preventive-panels">
          <article>
            <span>01</span>
            <h3>Consultoria preventiva</h3>
            <p>Orientação para estruturar decisões, revisar documentos, reduzir fragilidades e organizar práticas internas com maior segurança jurídica.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Defesa em reclamações trabalhistas</h3>
            <p>Atuação em processos trabalhistas com análise dos pedidos, organização de provas, definição de estratégia e acompanhamento das etapas processuais.</p>
          </article>
        </div>
      </section>

      <section class="worker-documents-section reveal-block">
        <div class="worker-documents-copy">
          <p class="eyebrow">Documentos internos</p>
          <h2>Documentos que podem ajudar na análise empresarial</h2>
          <p>A documentação correta é parte essencial da estratégia trabalhista. Ela permite compreender o histórico, avaliar riscos e definir a melhor condução.</p>
        </div>
        <div class="worker-documents-list">
          ${companyDocuments.map((documentName) => `<span>${documentName}</span>`).join("")}
        </div>
      </section>

      ${workerInlineCtaTemplate(
        "Precisa revisar uma decisão antes de executá-la?",
        "A orientação jurídica prévia pode ajudar a reduzir riscos e organizar os documentos necessários.",
        "Enviar mensagem ao escritório"
      )}

      <section class="worker-local-section reveal-block">
        <div class="worker-local-image">
          ${optimizedPicture("/home-reuniao-juridica.jpg", "Atendimento trabalhista empresarial em Sorocaba")}
        </div>
        <div class="worker-local-copy">
          <p class="eyebrow">Sorocaba/SP</p>
          <h2>Atendimento trabalhista empresarial em Sorocaba e região</h2>
          <p>Com sede em Sorocaba/SP, o Eryx Fernandes Advocacia presta suporte jurídico a empresas da cidade e região, com atendimento presencial e digital para demandas consultivas e contenciosas.</p>
          <address>${SITE_CONFIG.address}</address>
          <p class="worker-local-links">
            Veja também as <a href="/atuacao">áreas de atuação</a>, <a href="/quem-somos">conheça o escritório</a> ou <a href="/contato">fale com o escritório</a>.
          </p>
        </div>
      </section>

      <section class="worker-faq-section reveal-block">
        <div class="section-heading">
          <p>FAQ</p>
          <h2>Perguntas frequentes sobre Direito Trabalhista Empresarial</h2>
        </div>
        <div class="faq-list">
          ${companyFaqItems
            .map(
              ([question, answer], index) => `
                <article class="faq-item ${index === 0 ? "is-open" : ""}" data-faq-item>
                  <button type="button" data-faq-toggle aria-expanded="${index === 0 ? "true" : "false"}">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    ${question}
                  </button>
                  <div class="faq-answer">
                    <p>${answer}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="related-practices-section reveal-block">
        <div class="section-heading">
          <p>Linkagem interna</p>
          <h2>Outras áreas de atuação</h2>
          <span>Conheça outras frentes jurídicas do escritório.</span>
        </div>
        <div class="related-practices-grid">
          <a href="/atuacao/direito-trabalhista-trabalhadores">
            <strong>Direito Trabalhista para Trabalhadores</strong>
            <span>Defesa de direitos em rescisões, horas extras, assédio, acidente de trabalho, FGTS e vínculo empregatício.</span>
          </a>
          <a href="/atuacao/direito-imobiliario">
            <strong>Direito Imobiliário</strong>
            <span>Contratos, locações, regularização, cobranças e conflitos envolvendo imóveis e condomínios.</span>
          </a>
          <a href="/atuacao/direito-de-familia">
            <strong>Direito de Família</strong>
            <span>Divórcio, guarda, alimentos, partilha de bens e demandas familiares sensíveis.</span>
          </a>
        </div>
      </section>

      <section class="worker-final-cta">
        <div class="worker-final-image">
          ${optimizedPicture("/home-cta-advogado.jpg", "Orientação trabalhista para empresas")}
        </div>
        <div class="worker-final-copy">
          <p class="eyebrow">Consultoria trabalhista para empresas</p>
          <h2>Sua empresa precisa de orientação trabalhista?</h2>
          <p>Fale com o Eryx Fernandes Advocacia e conte brevemente a situação. A orientação adequada começa pela análise do contexto, dos documentos e dos riscos envolvidos.</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
            <a class="button button-ghost" href="/contato">Ir para contato</a>
          </div>
        </div>
      </section>
    </main>
    ${companyFaqSchemaTemplate()}
    ${footerTemplate()}
  `;
}

function companyFaqSchemaTemplate() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: companyFaqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
}

function realEstateTemplate() {
  return `
    ${headerTemplate("/atuacao/direito-imobiliario")}
    <main id="conteudo" class="worker-labor-page real-estate-page">
      <section class="worker-hero real-estate-hero">
        <div class="worker-hero-mark" aria-hidden="true">
          <img src="/monograma-mf-branco.png" alt="" />
        </div>
        <div class="worker-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="worker-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/atuacao">Atuação</a>
            <span>/</span>
            <span>Direito Imobiliário</span>
          </nav>
          <h1 class="worker-hero-seo-title">Advogado Imobiliário em Sorocaba</h1>
          <h2 class="worker-hero-display-title">Direito Imobiliário</h2>
          <p>Atuação em contratos, imóveis, locações, regularizações, cobranças e conflitos condominiais, com análise técnica e condução estratégica.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o escritório</a>
            <a class="button button-ghost real-estate-hero-secondary" href="#atuacao-imobiliaria">Entender a atuação imobiliária</a>
          </div>
        </div>
      </section>

      <section class="worker-manifest reveal-block">
        <div>
          <h2>Antes de assinar, comprar, vender ou discutir, analise o risco.</h2>
          <p>Contratos imobiliários, locações, cobranças e conflitos envolvendo imóveis exigem atenção aos detalhes. Uma cláusula mal compreendida pode gerar insegurança, prejuízo e conflito futuro.</p>
        </div>
      </section>

      <section class="attention-section reveal-block">
        <div class="section-heading">
          <p>Direito imobiliário em Sorocaba</p>
          <h2>Situações que merecem atenção</h2>
          <span>Questões imobiliárias costumam envolver patrimônio, documentos e decisões que exigem análise individualizada.</span>
        </div>
        <div class="attention-grid real-estate-grid">
          ${realEstateAttentionItems
            .map(
              ([title, text], index) => `
                <article>
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      ${workerInlineCtaTemplate(
        "Vai assinar ou discutir um contrato imobiliário?",
        "Antes de tomar uma decisão, vale entender os riscos, as obrigações e os documentos envolvidos.",
        "Falar pelo WhatsApp"
      )}

      <section class="worker-analysis-section reveal-block" id="atuacao-imobiliaria">
        <div class="worker-analysis-copy">
          <p class="eyebrow">Análise imobiliária</p>
          <h2>Como o escritório atua em Direito Imobiliário</h2>
          <p>A atuação imobiliária começa pela leitura dos documentos e pela compreensão dos riscos envolvidos.</p>
        </div>
        <div class="worker-analysis-steps">
          ${realEstateSteps
            .map(
              ([number, title, text]) => `
                <article>
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="worker-documents-section reveal-block">
        <div class="worker-documents-copy">
          <p class="eyebrow">Documentos</p>
          <h2>Documentos que podem ajudar na análise imobiliária</h2>
          <p>Reunir documentos facilita a compreensão do caso, mas a ausência de algum item não impede uma análise inicial.</p>
        </div>
        <div class="worker-documents-list">
          ${realEstateDocuments.map((documentName) => `<span>${documentName}</span>`).join("")}
        </div>
      </section>

      ${workerInlineCtaTemplate(
        "Não sabe se o contrato está seguro?",
        "A análise jurídica pode ajudar a identificar cláusulas, riscos e obrigações antes que o problema cresça.",
        "Enviar mensagem ao escritório"
      )}

      <section class="worker-local-section reveal-block">
        <div class="worker-local-image">
          ${optimizedPicture("/home-escritorio-ambiente.jpg", "Atendimento em Direito Imobiliário em Sorocaba")}
        </div>
        <div class="worker-local-copy">
          <p class="eyebrow">Sorocaba/SP</p>
          <h2>Atendimento em Direito Imobiliário em Sorocaba e região</h2>
          <p>Com sede em Sorocaba/SP, o Eryx Fernandes Advocacia presta suporte jurídico em demandas imobiliárias da cidade e região, com atendimento presencial e digital.</p>
          <address>${SITE_CONFIG.address}</address>
          <p class="worker-local-links">
            Veja também as <a href="/atuacao">áreas de atuação</a>, <a href="/quem-somos">conheça o escritório</a> ou <a href="/contato">fale com o escritório</a>.
          </p>
        </div>
      </section>

      <section class="worker-faq-section reveal-block">
        <div class="section-heading">
          <p>FAQ</p>
          <h2>Perguntas frequentes sobre Direito Imobiliário</h2>
        </div>
        <div class="faq-list">
          ${realEstateFaqItems
            .map(
              ([question, answer], index) => `
                <article class="faq-item ${index === 0 ? "is-open" : ""}" data-faq-item>
                  <button type="button" data-faq-toggle aria-expanded="${index === 0 ? "true" : "false"}">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    ${question}
                  </button>
                  <div class="faq-answer">
                    <p>${answer}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="related-practices-section reveal-block">
        <div class="section-heading">
          <p>Linkagem interna</p>
          <h2>Outras áreas de atuação</h2>
          <span>Conheça outras frentes jurídicas do escritório.</span>
        </div>
        <div class="related-practices-grid">
          <a href="/atuacao/direito-trabalhista-trabalhadores">
            <strong>Direito Trabalhista para Trabalhadores</strong>
            <span>Defesa de direitos em rescisões, horas extras, assédio, acidente de trabalho, FGTS e vínculo empregatício.</span>
          </a>
          <a href="/atuacao/direito-trabalhista-empresas">
            <strong>Direito Trabalhista para Empresas</strong>
            <span>Consultoria preventiva, documentos internos, desligamentos e defesa em reclamações trabalhistas.</span>
          </a>
          <a href="/atuacao/direito-de-familia">
            <strong>Direito de Família</strong>
            <span>Divórcio, guarda, alimentos, partilha de bens e demandas familiares sensíveis.</span>
          </a>
        </div>
      </section>

      <section class="worker-final-cta">
        <div class="worker-final-image">
          ${optimizedPicture("/home-cta-advogado.jpg", "Orientação em Direito Imobiliário")}
        </div>
        <div class="worker-final-copy">
          <p class="eyebrow">Contratos, imóveis e condomínios</p>
          <h2>Precisa de orientação sobre imóvel, contrato ou condomínio?</h2>
          <p>Fale com o Eryx Fernandes Advocacia e conte brevemente a situação. A orientação adequada começa pela análise dos documentos e do contexto.</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
            <a class="button button-ghost" href="/contato">Ir para contato</a>
          </div>
        </div>
      </section>
    </main>
    ${realEstateFaqSchemaTemplate()}
    ${footerTemplate()}
  `;
}

function realEstateFaqSchemaTemplate() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: realEstateFaqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
}

function familyLawTemplate() {
  return `
    ${headerTemplate("/atuacao/direito-de-familia")}
    <main id="conteudo" class="worker-labor-page family-law-page">
      <section class="worker-hero family-hero">
        <div class="worker-hero-mark" aria-hidden="true">
          <img src="/monograma-mf-branco.png" alt="" />
        </div>
        <div class="worker-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="worker-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/atuacao">Atuação</a>
            <span>/</span>
            <span>Direito de Família</span>
          </nav>
          <h1 class="worker-hero-seo-title">Advogado de Família em Sorocaba</h1>
          <h2 class="worker-hero-display-title">Direito de Família</h2>
          <p>Atuação em demandas familiares que exigem discrição, clareza, responsabilidade e condução técnica.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o escritório</a>
            <a class="button button-ghost family-hero-secondary" href="#atuacao-familiar">Entender a atuação familiar</a>
          </div>
        </div>
      </section>

      <section class="worker-manifest family-manifest reveal-block">
        <div>
          <h2>Decisões familiares pedem técnica, escuta e cuidado.</h2>
          <p>Divórcio, guarda, alimentos e partilha envolvem mais do que documentos. São decisões que impactam rotinas, vínculos, patrimônio e responsabilidades.</p>
        </div>
      </section>

      <section class="attention-section family-attention reveal-block">
        <div class="section-heading">
          <p>Direito de Família em Sorocaba</p>
          <h2>Situações que merecem atenção</h2>
          <span>Demandas familiares exigem análise individualizada, cuidado com informações sensíveis e clareza sobre os próximos passos.</span>
        </div>
        <div class="attention-grid family-attention-grid">
          ${familyAttentionItems
            .map(
              ([title, text], index) => `
                <article>
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      ${workerInlineCtaTemplate(
        "Precisa resolver uma questão familiar com segurança?",
        "Conte brevemente a situação. A orientação adequada começa pela escuta e pela análise cuidadosa do contexto.",
        "Falar pelo WhatsApp"
      )}

      <section class="worker-analysis-section family-analysis reveal-block" id="atuacao-familiar">
        <div class="worker-analysis-copy">
          <p class="eyebrow">Método familiar</p>
          <h2>Como o escritório atua em Direito de Família</h2>
          <p>A condução de uma demanda familiar exige clareza, organização e atenção aos impactos de cada decisão.</p>
        </div>
        <div class="worker-analysis-steps">
          ${familySteps
            .map(
              ([number, title, text]) => `
                <article>
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="worker-documents-section family-documents reveal-block">
        <div class="worker-documents-copy">
          <p class="eyebrow">Análise prática</p>
          <h2>Pontos analisados em demandas familiares</h2>
          <p>Cada caso familiar tem características próprias. A análise jurídica considera documentos, histórico da relação, responsabilidades e objetivos envolvidos.</p>
          <p class="worker-local-links">
            A atuação em família dialoga com outras <a href="/atuacao">áreas de atuação</a> do escritório quando há impactos patrimoniais, contratuais ou trabalhistas.
          </p>
        </div>
        <div class="worker-documents-list">
          ${familyDocuments.map((documentName) => `<span>${documentName}</span>`).join("")}
        </div>
      </section>

      ${workerInlineCtaTemplate(
        "Não sabe por onde começar?",
        "Mesmo sem todos os documentos reunidos, é possível iniciar a conversa para entender o contexto e orientar os próximos passos.",
        "Enviar mensagem ao escritório"
      )}

      <section class="worker-local-section family-local reveal-block">
        <div class="worker-local-image">
          ${optimizedPicture("/home-atendimento-cliente.jpg", "Atendimento em Direito de Família em Sorocaba")}
        </div>
        <div class="worker-local-copy">
          <p class="eyebrow">Sorocaba/SP</p>
          <h2>Atendimento em Direito de Família em Sorocaba e região</h2>
          <p>Com sede em Sorocaba/SP, o Eryx Fernandes Advocacia presta suporte jurídico em demandas familiares da cidade e região, com atendimento presencial e digital.</p>
          <address>${SITE_CONFIG.address}</address>
          <p class="worker-local-links">
            Para entender a forma de condução, <a href="/quem-somos">conheça o escritório</a> ou <a href="/contato">fale com o escritório</a>.
          </p>
          <p class="worker-local-links">Em questões de alimentos, conheça a <a href="/atuacao/pensao-alimenticia">atuação em casos de pensão alimentícia</a>.</p>
        </div>
      </section>

      <section class="worker-faq-section reveal-block">
        <div class="section-heading">
          <p>FAQ</p>
          <h2>Perguntas frequentes sobre Direito de Família</h2>
        </div>
        <div class="faq-list">
          ${familyFaqItems
            .map(
              ([question, answer], index) => `
                <article class="faq-item ${index === 0 ? "is-open" : ""}" data-faq-item>
                  <button type="button" data-faq-toggle aria-expanded="${index === 0 ? "true" : "false"}">
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    ${question}
                  </button>
                  <div class="faq-answer">
                    <p>${answer}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="related-practices-section reveal-block">
        <div class="section-heading">
          <p>Linkagem interna</p>
          <h2>Outras áreas de atuação</h2>
          <span>Conheça outras frentes jurídicas do escritório.</span>
        </div>
        <div class="related-practices-grid">
          <a href="/atuacao/direito-trabalhista-trabalhadores">
            <strong>Direito Trabalhista para Trabalhadores</strong>
            <span>Defesa de direitos em rescisões, horas extras, assédio, acidente de trabalho, FGTS e vínculo empregatício.</span>
          </a>
          <a href="/atuacao/direito-trabalhista-empresas">
            <strong>Direito Trabalhista para Empresas</strong>
            <span>Consultoria preventiva, documentos internos, desligamentos e defesa em reclamações trabalhistas.</span>
          </a>
          <a href="/atuacao/direito-imobiliario">
            <strong>Direito Imobiliário</strong>
            <span>Contratos, locações, regularização, cobranças e conflitos envolvendo imóveis e condomínios.</span>
          </a>
        </div>
      </section>

      <section class="worker-final-cta family-final-cta">
        <div class="worker-final-image">
          ${optimizedPicture("/home-cta-advogado.jpg", "Orientação sobre questão familiar")}
        </div>
        <div class="worker-final-copy">
          <p class="eyebrow">Orientação familiar</p>
          <h2>Precisa de orientação sobre uma questão familiar?</h2>
          <p>Fale com o Eryx Fernandes Advocacia e conte brevemente a situação. A orientação adequada começa pela escuta, pela clareza e pela análise responsável do contexto.</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
            <a class="button button-ghost" href="/contato">Ir para contato</a>
          </div>
        </div>
      </section>
    </main>
    ${familyFaqSchemaTemplate()}
    ${footerTemplate()}
  `;
}

function familyFaqSchemaTemplate() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: familyFaqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
}

function contactIconTemplate(name) {
  const icons = {
    whatsapp: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M12 30 9 34l5-1.4a14 14 0 1 0-4-4.2Z"/><path d="M15 16c1 5 4 8 9 9l2-2-3-3-2 2c-2-1-4-3-5-5l2-2-3-3-2 2Z"/></svg>`,
    email: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 12h24v17H8z"/><path d="m9 13 11 9 11-9"/></svg>`,
    instagram: `<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="10" y="10" width="20" height="20" rx="6"/><path d="M16 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"/><path d="M26 15.5h.1"/></svg>`,
    address: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 34s10-9 10-17a10 10 0 0 0-20 0c0 8 10 17 10 17Z"/><path d="M16 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"/></svg>`
  };

  return icons[name] || icons.address;
}

function contactTemplate() {
  const mapsEmbed =
    "https://www.google.com/maps?q=Av.%20Am%C3%A9rico%20de%20Carvalho%2C%2065%20-%20Sala%201%20-%20Jardim%20Europa%2C%20Sorocaba%20-%20SP%2C%2018045-000&output=embed";
  const mapsSearch =
    "https://www.google.com/maps/search/?api=1&query=Av.%20Am%C3%A9rico%20de%20Carvalho%2C%2065%20-%20Sala%201%20-%20Jardim%20Europa%2C%20Sorocaba%20-%20SP%2C%2018045-000";
  const channels = [
    ["whatsapp", "WhatsApp", SITE_CONFIG.whatsapp, SITE_CONFIG.whatsappUrl, true],
    ["email", "E-mail", SITE_CONFIG.email, `mailto:${SITE_CONFIG.email}`, false],
    ["instagram", "Instagram", SITE_CONFIG.instagram, SITE_CONFIG.instagramUrl, true],
    ["address", "Endereço", SITE_CONFIG.address, "#localizacao", false]
  ];
  const pillars = [
    ["01", "Presencial em Sorocaba", "Atendimento no endereço do escritório, mediante alinhamento prévio."],
    ["02", "Suporte digital", "Envio de documentos, reuniões e acompanhamento de demandas por canais digitais."],
    ["03", "Comunicação objetiva", "Orientação sobre próximos passos, documentos necessários e andamento das demandas."]
  ];

  return `
    ${headerTemplate("/contato")}
    <main id="conteudo" class="contact-page">
      <section class="contact-hero">
        <div class="contact-hero-mark" aria-hidden="true">
          <img src="/monograma-mf-branco.png" alt="" />
        </div>
        <div class="contact-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="contact-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contato</span>
          </nav>
          <p class="eyebrow">Contato</p>
          <h1>Fale com o escritório</h1>
          <p>Conte brevemente a sua situação. A orientação adequada começa pela escuta, pela análise do contexto e pela condução responsável dos próximos passos.</p>
          <div class="hero-actions">
            <a class="button button-primary contact-hero-button" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
            <a class="button button-ghost contact-hero-button" href="#localizacao">Ver localização</a>
          </div>
        </div>
      </section>

      <section class="contact-main-section reveal-block">
        <div class="contact-channel-copy">
          <p class="eyebrow">Canais de atendimento</p>
          <h2>Escolha o melhor canal de atendimento</h2>
          <p>O escritório atende em Sorocaba/SP e também oferece suporte digital para reuniões, envio de documentos e acompanhamento de demandas.</p>
          <p class="contact-link-note">
            Veja também as <a href="/atuacao">áreas de atuação</a>, <a href="/quem-somos">conheça o escritório</a> e acompanhe os <a href="/artigos">artigos jurídicos</a>.
          </p>
          <div class="contact-channel-list">
            ${channels
              .map(
                ([icon, title, text, href, external]) => `
                  <a href="${href}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
                    <span>${contactIconTemplate(icon)}</span>
                    <strong>${title}</strong>
                    <small>${text}</small>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>

        <aside class="contact-whatsapp-card">
          <p class="eyebrow">Atendimento inicial</p>
          <h2>Precisa de orientação jurídica?</h2>
          <p>Envie uma mensagem com um breve resumo da situação. O escritório poderá indicar os próximos passos a partir das informações iniciais.</p>
          <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          <small>Atendimento presencial em Sorocaba/SP e suporte digital.</small>
        </aside>
      </section>

      <section class="contact-form-section reveal-block">
        <div class="contact-form-heading">
          <p class="eyebrow">Mensagem</p>
          <h2>Envie uma mensagem</h2>
          <p>Preencha os dados abaixo para que o escritório possa retornar o contato.</p>
        </div>
        <form class="contact-form" data-contact-form>
          <div class="form-field">
            <label for="contact-name">Nome completo</label>
            <input id="contact-name" name="name" type="text" autocomplete="name" required />
          </div>
          <div class="form-field">
            <label for="contact-phone">Telefone / WhatsApp</label>
            <input id="contact-phone" name="phone" type="tel" autocomplete="tel" required />
          </div>
          <div class="form-field">
            <label for="contact-email">E-mail</label>
            <input id="contact-email" name="email" type="email" autocomplete="email" required />
          </div>
          <div class="form-field">
            <label for="contact-area">Área de interesse</label>
            <select id="contact-area" name="area" required>
              <option value="">Selecione uma opção</option>
              <option>Direito Trabalhista para Trabalhadores</option>
              <option>Direito Trabalhista para Empresas</option>
              <option>Direito Imobiliário</option>
              <option>Direito de Família</option>
              <option>Outro assunto</option>
            </select>
          </div>
          <div class="form-field form-field-full">
            <label for="contact-message">Mensagem</label>
            <textarea id="contact-message" name="message" rows="6" required></textarea>
          </div>
          <div class="contact-form-footer">
            <button class="button button-primary" type="submit">Enviar mensagem</button>
            <p>O envio de mensagem não cria automaticamente vínculo contratual. As informações serão analisadas para orientação sobre os próximos passos.</p>
          </div>
        </form>
      </section>

      <section class="contact-map-section reveal-block" id="localizacao">
        <div class="section-heading">
          <p>Sorocaba/SP</p>
          <h2>Localização</h2>
          <span>Atendimento presencial em Sorocaba/SP, com suporte digital para clientes da região.</span>
        </div>
        <address>${SITE_CONFIG.address}</address>
        <div class="contact-map-frame">
          <iframe
            src="${mapsEmbed}"
            title="Localização do Eryx Fernandes Advocacia em Sorocaba/SP"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen></iframe>
        </div>
        <a class="button button-ghost" href="${mapsSearch}" target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>
      </section>

      <section class="contact-pillars-section reveal-block">
        <div class="section-heading">
          <p>Atendimento</p>
          <h2>Atendimento claro, próximo e organizado</h2>
        </div>
        <div class="contact-pillars-grid">
          ${pillars
            .map(
              ([number, title, text]) => `
                <article>
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="worker-final-cta contact-final-cta">
        <div class="worker-final-image">
          ${optimizedPicture("/home-cta-advogado.jpg", "Atendimento jurídico em Sorocaba")}
        </div>
        <div class="worker-final-copy">
          <p class="eyebrow">Contato</p>
          <h2>Vamos conversar sobre o seu caso?</h2>
          <p>Fale com o Eryx Fernandes Advocacia e conte brevemente a situação. A orientação adequada começa pela compreensão do contexto.</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
            <a class="button button-ghost" href="/atuacao">Conhecer áreas de atuação</a>
          </div>
        </div>
      </section>
    </main>
    ${footerTemplate()}
  `;
}

function articleListingCardTemplate(article) {
  return `
    <article class="editorial-article-card" data-article-card data-category="${article.filterCategory}">
      <a class="editorial-article-image" href="${article.href}" aria-label="Ler artigo: ${article.title}">
        ${optimizedPicture(article.image, article.alt)}
      </a>
      <div class="editorial-article-body">
        <span>${article.category}</span>
        <h2>${article.title}</h2>
        <p>${article.excerpt}</p>
        <div class="editorial-article-meta">
          <small>${article.date}</small>
          <small>${article.readingTime}</small>
        </div>
        <a href="${article.href}">Ler artigo</a>
      </div>
    </article>
  `;
}

function articlesTemplate() {
  return `
    ${headerTemplate("/artigos")}
    <main id="conteudo" class="editorial-page">
      <section class="editorial-hero">
        <div class="editorial-hero-mark" aria-hidden="true">
          <img src="/monograma-mf.png" alt="" />
        </div>
        <div class="editorial-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="editorial-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Artigos</span>
          </nav>
          <p class="eyebrow">Conteúdo jurídico</p>
          <h1>Artigos jurídicos</h1>
          <p>Conteúdos sobre temas trabalhistas, empresariais, condominiais e familiares para ajudar na compreensão de direitos, riscos e decisões importantes.</p>
        </div>
      </section>

      <section class="editorial-intro reveal-block">
        <div>
          <h2>Informação jurídica com clareza e responsabilidade.</h2>
          <p>Os artigos do escritório abordam temas recorrentes da prática jurídica com linguagem clara, visão técnica e atenção aos impactos de cada decisão.</p>
        </div>
      </section>

      <section class="editorial-listing-section reveal-block">
        <div class="article-filter-bar" aria-label="Filtrar artigos por categoria">
          ${articleFilters
            .map(
              (filter, index) => `
                <button type="button" class="${index === 0 ? "is-active" : ""}" data-article-filter="${filter}" aria-pressed="${index === 0 ? "true" : "false"}">${filter}</button>
              `
            )
            .join("")}
        </div>

        <div class="editorial-article-grid" data-article-grid>
          ${articles.map(articleListingCardTemplate).join("")}
        </div>

        <div class="article-empty-state" data-article-empty hidden>
          <h2>Nenhum artigo publicado nesta categoria ainda.</h2>
          <p>Novos conteúdos serão publicados em breve. Enquanto isso, conheça as áreas de atuação do escritório.</p>
          <a class="button button-primary" href="/atuacao">Conhecer áreas de atuação</a>
        </div>
      </section>

      <section class="editorial-inline-cta reveal-block">
        <div>
          <h2>Precisa de orientação jurídica?</h2>
          <p>A leitura de um artigo ajuda a compreender o tema, mas cada caso exige análise individualizada.</p>
        </div>
        <div class="cta-actions">
          <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          <a class="button button-ghost" href="/atuacao">Conhecer áreas de atuação</a>
        </div>
      </section>

      <section class="editorial-related-section reveal-block">
        <div class="section-heading">
          <p>Atuação</p>
          <h2>Áreas relacionadas</h2>
        </div>
        <div class="editorial-related-grid">
          <a href="/atuacao/direito-trabalhista-trabalhadores">
            <strong>Trabalhista para Trabalhadores</strong>
          </a>
          <a href="/atuacao/direito-trabalhista-empresas">
            <strong>Trabalhista para Empresas</strong>
          </a>
          <a href="/atuacao/direito-imobiliario">
            <strong>Direito Imobiliário</strong>
          </a>
          <a href="/atuacao/direito-de-familia">
            <strong>Direito de Família</strong>
          </a>
        </div>
      </section>
    </main>
    ${footerTemplate()}
  `;
}

function articleInlineCtaTemplate(title, text, buttonText) {
  return `
    <aside class="article-inline-cta">
      <div>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">${buttonText}</a>
    </aside>
  `;
}

const rescisaoIndirectFaqItems = [
  {
    question: "O que é Rescisão Indireta no direito trabalhista?",
    answer:
      "É a possibilidade de o Trabalhador encerrar o contrato de trabalho quando a Empresa comete uma falta grave, prevista no artigo 483 da CLT, gerando, em regra, direitos semelhantes aos de uma demissão sem justa causa."
  },
  {
    question: "Atraso de salário gera direito à Rescisão Indireta?",
    answer:
      "Não necessariamente. É preciso avaliar a frequência, a gravidade e o impacto do atraso na vida do Trabalhador, além de reunir provas. Cada caso deve ser analisado individualmente."
  },
  {
    question: "A falta de depósito do FGTS pode justificar a Rescisão Indireta?",
    answer:
      "Pode ser um dos elementos considerados, especialmente quando há um padrão de descumprimento por parte da Empresa. A análise depende do conjunto de provas e das circunstâncias do caso."
  },
  {
    question: "Posso parar de trabalhar assim que perceber a falta grave da Empresa?",
    answer:
      "Não é recomendado interromper o trabalho por conta própria sem orientação jurídica, pois isso pode ser interpretado como abandono de emprego. O ideal é buscar um Advogado antes de qualquer decisão."
  },
  {
    question: "Quais documentos devo guardar se penso em pedir Rescisão Indireta?",
    answer:
      "Contracheques, extratos do FGTS, mensagens ou e-mails relacionados às irregularidades, além de identificar possíveis testemunhas, podem ser úteis na construção do caso."
  },
  {
    question: "A Rescisão Indireta garante o recebimento de todos os direitos trabalhistas?",
    answer:
      "Não há garantia automática. O reconhecimento da Rescisão Indireta e a extensão dos direitos dependem da análise judicial do caso concreto, considerando provas e fundamentos jurídicos apresentados."
  },
  {
    question: "Como um Advogado Trabalhista em Sorocaba pode ajudar nesse processo?",
    answer:
      "O advogado pode avaliar se a situação se enquadra nas hipóteses legais, orientar sobre a coleta de provas e indicar o melhor caminho jurídico, sempre com base nas particularidades do caso."
  }
];

function siteAbsoluteUrl(path) {
  return new URL(path, SITE_CONFIG.siteUrl).href;
}

function articleStructuredDataTemplate(article, faqItems, currentLabel) {
  const pageUrl = siteAbsoluteUrl(article.href);
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seoDescription || article.excerpt,
    image: siteAbsoluteUrl(article.image),
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl
    },
    author: {
      "@type": "Person",
      "@id": siteAbsoluteUrl("/quem-somos#eryx-fernandes"),
      name: SITE_CONFIG.authorName,
      honorificPrefix: "Dr.",
      jobTitle: article.authorRole || "Advogado Trabalhista",
      identifier: SITE_CONFIG.oab,
      url: siteAbsoluteUrl("/quem-somos")
    },
    publisher: {
      "@type": "Organization",
      "@id": siteAbsoluteUrl("/#organization"),
      name: SITE_CONFIG.firmName,
      url: siteAbsoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: siteAbsoluteUrl("/favicon-512.png")
      }
    },
    articleSection: article.category,
    inLanguage: "pt-BR",
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteAbsoluteUrl("/")
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artigos",
        item: siteAbsoluteUrl("/artigos")
      },
      {
        "@type": "ListItem",
        position: 3,
        name: currentLabel,
        item: pageUrl
      }
    ]
  };

  return [blogPosting, faqPage, breadcrumbList]
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`)
    .join("");
}

const nr01FaqItems = [
  {
    question: "O que mudou na NR-01 em 2026?",
    answer:
      "Desde 26 de maio de 2026, o capítulo 1.5 da NR-01 passou a mencionar expressamente os fatores de riscos psicossociais relacionados ao trabalho no Gerenciamento de Riscos Ocupacionais. As empresas devem identificar os perigos, avaliar os riscos, adotar medidas preventivas e acompanhar o processo."
  },
  {
    question: "Toda empresa precisa avaliar os riscos psicossociais?",
    answer:
      "O MTE orienta que todas as empresas realizem ações de prevenção por meio da Avaliação Ergonômica Preliminar, conforme a NR-17, considerando os fatores psicossociais no contexto do GRO. As obrigações documentais podem variar conforme o porte, o grau de risco e as hipóteses de dispensa previstas na NR-01."
  },
  {
    question: "Os riscos psicossociais precisam constar no PGR?",
    answer:
      "Quando a empresa está obrigada a elaborar PGR, os resultados aplicáveis devem ser incorporados ao inventário de riscos e ao plano de ação. A AEP também pode documentar o processo de gestão dos riscos ergonômicos, incluindo os fatores psicossociais relacionados ao trabalho."
  },
  {
    question: "A empresa precisa contratar psicólogo para cumprir a NR-01?",
    answer:
      "A NR-01 e a NR-17 não estabelecem, de forma geral, uma categoria profissional exclusiva para conduzir a avaliação. A empresa deve designar pessoas com conhecimento técnico compatível com a natureza e a complexidade das condições avaliadas. Em casos específicos, uma equipe multidisciplinar pode ser necessária."
  },
  {
    question: "Aplicar um questionário aos empregados é suficiente?",
    answer:
      "Não. O questionário pode ser uma ferramenta de levantamento, mas seus resultados precisam ser analisados tecnicamente e incorporados à AEP e/ou ao inventário de riscos. A empresa também deve definir medidas, responsáveis, prazos e formas de acompanhamento."
  },
  {
    question: "O trabalho remoto e híbrido entram na avaliação?",
    answer:
      "Sim. A avaliação deve considerar as condições aplicáveis ao trabalho remoto, híbrido e ao teletrabalho, incluindo isolamento, comunicação, carga de trabalho, controle da jornada, conexão permanente e dificuldades de organização das pausas."
  },
  {
    question: "A fiscalização analisará apenas documentos?",
    answer:
      "Não. A fiscalização pode combinar análise do inventário, plano de ação, AEP, metodologias e registros com inspeção das condições reais de trabalho, entrevistas e escuta dos trabalhadores. A coerência entre documentos e prática será um ponto relevante."
  },
  {
    question: "Quais medidas a empresa pode adotar?",
    answer:
      "As medidas dependem dos riscos identificados e podem incluir revisão de metas, redistribuição de tarefas, mudanças na jornada, treinamento de gestores, melhoria dos canais de denúncia, prevenção ao assédio, revisão de políticas internas e acompanhamento de setores críticos."
  },
  {
    question: "A empresa dispensada do PGR não precisa fazer nada?",
    answer:
      "Não. A dispensa de elaboração do PGR não elimina todas as obrigações preventivas. O MTE esclarece que ME e EPP dos graus de risco 1 e 2 dispensadas do PGR devem documentar a AEP para evidenciar a gestão dos riscos ergonômicos, incluindo os fatores psicossociais quando aplicáveis."
  },
  {
    question: "Qual é o papel do advogado trabalhista empresarial na adequação?",
    answer:
      "O advogado pode revisar políticas, metas, jornadas, canais de denúncia, protocolos de investigação, procedimentos disciplinares e documentos trabalhistas. Também pode verificar a coerência jurídica entre as práticas internas, a AEP, o PGR e o plano de ação, atuando em conjunto com os profissionais de SST."
  }
];

function nr01CompaniesArticleTemplate() {
  const article = articleByHref("/artigos/nr-01-novas-exigencias-empresas-sorocaba");
  const recommendations = [
    articleByHref("/artigos/rescisao-indireta-sorocaba"),
    articleByHref("/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"),
    articleByHref("/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar")
  ];

  return `
    ${headerTemplate("/artigos")}
    <main id="conteudo" class="article-page">
      <section class="article-hero">
        <div class="editorial-hero-mark" aria-hidden="true">
          <img src="/monograma-mf.png" alt="" />
        </div>
        <div class="editorial-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="article-hero-inner">
          <div class="article-hero-copy">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/artigos">Artigos</a>
              <span>/</span>
              <span>NR-01</span>
            </nav>
            <p class="article-type-label">Artigo jurídico</p>
            <p class="eyebrow article-category-label">${article.eyebrow}</p>
            <h1>${article.title}</h1>
            <p>${article.excerpt}</p>
            <div class="article-author">
              ${authorAvatarTemplate()}
              <div>
                <strong>${SITE_CONFIG.responsible}</strong>
                <span>${article.authorRole}</span>
                <span>OAB/SP 530.983</span>
              </div>
            </div>
            <div class="article-hero-meta">
              <span>${article.readingTime}</span>
              <span>${article.date}</span>
            </div>
          </div>
          <figure class="article-hero-image">
            ${optimizedPicture(article.image, article.alt, { lazy: false, fetchPriority: "high" })}
          </figure>
        </div>
      </section>

      <section class="article-shell">
        <aside class="article-summary" aria-label="Sumário do artigo">
          <span>Sumário</span>
          <a href="#o-que-e">O que é a NR-01?</a>
          <a href="#mudancas">O que mudou em 2026?</a>
          <a href="#riscos-psicossociais">Riscos psicossociais</a>
          <a href="#adequacao">Como se adequar</a>
          <a href="#documentos">Documentos</a>
          <a href="#fiscalizacao">Fiscalização</a>
          <a href="#pgr">PGR</a>
          <a href="#consultoria">Consultoria de SST</a>
          <a href="#riscos">Riscos jurídicos</a>
          <a href="#advogado">Advogado empresarial</a>
          <a href="#sorocaba">Empresas de Sorocaba</a>
          <a href="#faq">FAQ</a>
        </aside>

        <article class="article-content">
          <p class="article-lead">Desde 26 de maio de 2026, a nova redação do capítulo 1.5 da NR-01 está em vigor. A mudança tornou expressa a obrigação de considerar os fatores de riscos psicossociais relacionados ao trabalho no Gerenciamento de Riscos Ocupacionais, o GRO.</p>
          <p>Para as empresas, a adequação não se resume a inserir o termo “saúde mental” no Programa de Gerenciamento de Riscos. É necessário analisar a organização do trabalho, identificar perigos, avaliar os riscos, definir medidas preventivas, registrar as decisões e acompanhar os resultados.</p>
          <p>Empresas de Sorocaba e região precisam tratar o tema de forma integrada. Diretoria, Recursos Humanos, lideranças, profissionais de Segurança e Saúde no Trabalho, CIPA e <a href="/atuacao/direito-trabalhista-empresas">assessoria jurídica trabalhista empresarial</a> devem atuar com critérios coerentes e documentação compatível com a realidade da organização.</p>

          ${articleInlineCtaTemplate(
            "Sua empresa já revisou o PGR e os procedimentos internos?",
            "A adequação à nova NR-01 exige integração entre Segurança do Trabalho, Recursos Humanos e assessoria jurídica trabalhista empresarial.",
            "Falar com o escritório"
          )}

          <h2 id="o-que-e">O que é a NR-01?</h2>
          <p>A Norma Regulamentadora nº 1 estabelece disposições gerais aplicáveis às Normas Regulamentadoras e disciplina o Gerenciamento de Riscos Ocupacionais. O GRO é o processo pelo qual a organização identifica perigos, avalia riscos ocupacionais, adota medidas de prevenção e acompanha a execução dessas medidas.</p>
          <p>Quando exigido, esse processo é materializado no Programa de Gerenciamento de Riscos, o PGR. Entre os documentos centrais estão o inventário de riscos ocupacionais, o plano de ação e o registro dos critérios utilizados para classificar os riscos e tomar decisões.</p>
          <p>A redação atual do capítulo 1.5 foi aprovada pela Portaria MTE nº 1.419/2024 e passou a produzir efeitos em 26 de maio de 2026, após a prorrogação definida pela Portaria MTE nº 765/2025.</p>

          <h2 id="mudancas">O que mudou na NR-01 em 2026?</h2>
          <p>A principal mudança foi a inclusão expressa dos fatores de riscos psicossociais relacionados ao trabalho no GRO. Esses fatores devem ser analisados como parte dos riscos ergonômicos, em articulação com a NR-17.</p>
          <p>Na prática, a empresa deve examinar a forma como o trabalho é concebido, distribuído, supervisionado, cobrado e executado. A análise precisa considerar os processos reais, e não apenas aquilo que está descrito nos regulamentos, manuais ou organogramas.</p>
          <p>O foco não é investigar a personalidade ou a vida particular do empregado. A avaliação recai sobre as condições e a organização do trabalho que podem causar ou agravar danos à saúde física ou mental.</p>

          <h2 id="riscos-psicossociais">O que são fatores de riscos psicossociais relacionados ao trabalho?</h2>
          <p>São situações ligadas à concepção, à organização, à gestão e às relações de trabalho que podem aumentar a probabilidade de adoecimento ou de outros agravos à saúde. A análise deve observar a atividade, o setor, as funções exercidas, as formas de controle e o contexto de cada organização.</p>
          <p>Entre os fatores que podem exigir atenção estão:</p>
          <ul>
            <li>sobrecarga de trabalho e volume de tarefas incompatível com o tempo disponível;</li>
            <li>metas inalcançáveis, contraditórias ou impostas sem recursos adequados;</li>
            <li>jornadas prolongadas, horas extras recorrentes e falta de períodos de recuperação;</li>
            <li>assédio moral, assédio sexual, discriminação ou violência no trabalho;</li>
            <li>baixa autonomia, ausência de apoio das lideranças e comunicação interna deficiente;</li>
            <li>conflitos frequentes, indefinição de papéis e mudanças constantes sem orientação;</li>
            <li>trabalho isolado, repetitivo ou com elevada carga emocional;</li>
            <li>desequilíbrio entre esforço, reconhecimento e recompensa;</li>
            <li>insegurança quanto à manutenção do emprego ou mudanças organizacionais mal conduzidas.</li>
          </ul>
          <p>A lista não é fechada. Uma indústria, um escritório, uma transportadora, uma clínica e uma empresa de tecnologia podem apresentar riscos distintos. Por isso, modelos genéricos devem ser usados com cautela.</p>

          <h2 id="saude-mental">A empresa precisa avaliar a saúde mental individual dos empregados?</h2>
          <p>Não. A avaliação prevista na NR-01 e na NR-17 não corresponde a um diagnóstico clínico individual e não pode ser substituída pelo exame médico periódico.</p>
          <p>A empresa deve analisar as condições de trabalho, a organização das tarefas, as exigências cognitivas e emocionais, as relações profissionais, os sistemas de cobrança e outros elementos relacionados ao ambiente ocupacional. Informações médicas individuais permanecem sujeitas ao sigilo e possuem finalidade própria.</p>

          <h2 id="adequacao">O que as empresas precisam fazer para se adequar à NR-01?</h2>
          <p>A adequação deve ser estruturada como um processo contínuo. Uma palestra, uma campanha interna ou a aplicação isolada de um questionário não substituem as etapas exigidas pelo GRO.</p>

          <h3>1. Planejar o processo e definir responsabilidades</h3>
          <p>A organização deve estabelecer quem conduzirá cada etapa, quais áreas participarão e quais profissionais possuem conhecimento técnico compatível com a natureza e a complexidade dos riscos avaliados.</p>
          <p>A NR-01 e a NR-17 não impõem, de forma geral, uma categoria profissional exclusiva para executar a identificação e a avaliação. A responsabilidade legal pelo processo, pelo PGR e pela Avaliação Ergonômica Preliminar permanece com a empresa.</p>

          <h3>2. Realizar a Avaliação Ergonômica Preliminar</h3>
          <p>As ações de prevenção devem ser desenvolvidas por meio da Avaliação Ergonômica Preliminar, a AEP, prevista na NR-17. Nessa etapa, a empresa precisa considerar os fatores psicossociais relacionados ao trabalho dentro do contexto do GRO.</p>
          <p>Quando a AEP indicar a necessidade de aprofundamento ou quando estiverem presentes as hipóteses previstas na NR-17, poderá ser necessária a Análise Ergonômica do Trabalho, a AET.</p>

          <h3>3. Identificar os perigos na realidade de cada setor</h3>
          <p>A identificação deve abranger estabelecimentos, processos, atividades, setores, funções e grupos de trabalhadores. O levantamento pode considerar observação do trabalho, entrevistas, reuniões, oficinas, documentos internos, indicadores e instrumentos técnicos compatíveis com a realidade avaliada.</p>
          <p>É recomendável analisar informações como afastamentos, rotatividade, horas extras, acidentes, queixas internas, denúncias, conflitos, produtividade, absenteísmo, mudanças de equipe e ações trabalhistas relacionadas a assédio, jornada ou adoecimento.</p>

          <h3>4. Incluir trabalho remoto, híbrido e teletrabalho</h3>
          <p>A identificação dos perigos e a avaliação dos riscos também devem abranger as atividades realizadas em regime remoto, híbrido ou de teletrabalho. A empresa precisa considerar aspectos como isolamento, excesso de conexão, comunicação deficiente, controle permanente, ausência de pausas e dificuldade de separação entre jornada e vida pessoal.</p>

          <h3>5. Ouvir os trabalhadores e considerar sua percepção</h3>
          <p>A participação dos trabalhadores integra o processo de gerenciamento. A escuta pode ocorrer por entrevistas, reuniões, grupos de discussão, pesquisas, formulários, manifestações da CIPA ou outros meios adequados.</p>
          <p>O procedimento deve ser planejado para gerar informações confiáveis. Quando forem utilizados questionários, os resultados precisam ser analisados tecnicamente e incorporados à AEP e/ou ao inventário de riscos. O questionário, sozinho, não comprova a gestão dos riscos psicossociais.</p>

          <h3>6. Avaliar e classificar os riscos</h3>
          <p>Depois da identificação dos perigos, a organização deve avaliar a probabilidade de ocorrência de danos e a severidade das possíveis consequências. A metodologia escolhida precisa ser tecnicamente fundamentada, coerente com as condições avaliadas e compatível com a natureza dos riscos.</p>
          <p>Não existe uma ferramenta única obrigatória. A fiscalização tende a examinar a consistência do processo, a capacidade de identificar os perigos e a relação entre os riscos encontrados e as medidas adotadas.</p>

          <h3>7. Atualizar o inventário de riscos ocupacionais</h3>
          <p>Os fatores identificados e os riscos avaliados devem constar no inventário de riscos, quando aplicável. O documento precisa retratar os ambientes, os processos, as atividades, os grupos expostos, os perigos, as possíveis consequências, as medidas existentes e a classificação dos riscos.</p>
          <p>A empresa também deve documentar os critérios das gradações de severidade e probabilidade, os níveis de risco, os critérios de classificação e as regras utilizadas para tomar decisões preventivas.</p>

          <h3>8. Elaborar um plano de ação com responsáveis e prazos</h3>
          <p>Identificar o problema sem definir providências não atende à lógica do GRO. O plano de ação deve indicar as medidas que serão introduzidas, aprimoradas ou mantidas, com responsáveis, cronograma, formas de acompanhamento e critérios de verificação.</p>
          <p>Dependendo dos riscos encontrados, as medidas podem envolver:</p>
          <ul>
            <li>revisão de metas e indicadores de desempenho;</li>
            <li>redistribuição de tarefas e dimensionamento das equipes;</li>
            <li>mudanças na jornada, nas pausas e nos sistemas de controle;</li>
            <li>treinamento de lideranças e revisão das práticas de gestão;</li>
            <li>criação ou aprimoramento de canais de denúncia;</li>
            <li>protocolos para prevenção e apuração de assédio e discriminação;</li>
            <li>revisão de regulamentos, políticas internas e procedimentos disciplinares;</li>
            <li>melhoria da comunicação e da participação dos trabalhadores;</li>
            <li>acompanhamento de setores com maior incidência de conflitos, afastamentos ou rotatividade.</li>
          </ul>
          <p>A prioridade deve ser a intervenção na origem organizacional do risco. Medidas individuais de apoio podem ter utilidade, mas não substituem a correção dos fatores existentes no trabalho.</p>

          <h3>9. Implementar, acompanhar e revisar as medidas</h3>
          <p>O gerenciamento não termina com a elaboração do documento. A empresa deve comprovar que as medidas foram implementadas, verificar se permanecem em funcionamento e revisar as ações quando os resultados forem insuficientes.</p>
          <p>A avaliação de riscos deve ser revista nos prazos e nas situações previstas pela NR-01, como mudanças nos processos, acidentes, doenças relacionadas ao trabalho, falhas nas medidas de prevenção, alterações legais ou solicitação justificada de trabalhadores ou da CIPA.</p>

          ${articleInlineCtaTemplate(
            "A prevenção costuma custar menos que a correção de um passivo trabalhista.",
            "Uma revisão preventiva pode identificar inconsistências antes de fiscalizações ou reclamações trabalhistas.",
            "Solicitar orientação jurídica"
          )}

          <h2 id="documentos">Quais documentos podem demonstrar a adequação?</h2>
          <p>A gestão não se resume à documentação, mas os registros são fundamentais para organizar o processo e produzir evidências. Entre os principais documentos estão:</p>
          <ul>
            <li>inventário de riscos ocupacionais;</li>
            <li>plano de ação;</li>
            <li>documento dos critérios adotados no GRO;</li>
            <li>Avaliação Ergonômica Preliminar;</li>
            <li>Análise Ergonômica do Trabalho, quando necessária;</li>
            <li>registros das metodologias utilizadas;</li>
            <li>resultados de entrevistas, oficinas ou questionários, com a análise técnica correspondente;</li>
            <li>registros de participação dos trabalhadores e da CIPA;</li>
            <li>comprovantes de implementação, acompanhamento e revisão das medidas;</li>
            <li>políticas internas, treinamentos e protocolos relacionados aos riscos identificados.</li>
          </ul>
          <p>Os registros precisam guardar coerência entre si. Um documento que descreve metas moderadas, por exemplo, poderá perder credibilidade caso mensagens, relatórios e depoimentos revelem cobranças incompatíveis com a descrição formal.</p>

          <h2 id="fiscalizacao">Como será a fiscalização da NR-01?</h2>
          <p>A fiscalização pode combinar análise documental e verificação das condições reais de trabalho. O Auditor-Fiscal do Trabalho poderá examinar o inventário de riscos, o plano de ação, a AEP, os critérios e metodologias, os registros de acompanhamento e as revisões realizadas.</p>
          <p>Também podem ser realizadas inspeções no local, entrevistas e escuta dos trabalhadores. O objetivo é verificar se a empresa estruturou e implementou o GRO de forma tecnicamente consistente e se as medidas preventivas correspondem aos perigos identificados.</p>
          <p>A mera existência de um PGR formal não garante conformidade. A empresa deve demonstrar que analisou a organização do trabalho, envolveu os trabalhadores, estabeleceu medidas, atribuiu responsabilidades, definiu prazos e acompanhou os resultados.</p>

          <h2 id="pgr">Todas as empresas precisam elaborar PGR?</h2>
          <p>A aplicação das Normas Regulamentadoras alcança os empregadores abrangidos por seu campo de incidência. A NR-01 prevê tratamentos diferenciados para o Microempreendedor Individual, microempresas e empresas de pequeno porte.</p>
          <p>O MEI possui dispensa da elaboração do PGR. Algumas microempresas e empresas de pequeno porte enquadradas nos graus de risco 1 e 2 também podem ser dispensadas, desde que cumpram os requisitos normativos.</p>
          <p>A dispensa do PGR não significa dispensa geral das obrigações de prevenção. O documento oficial de perguntas e respostas do MTE esclarece que, para ME e EPP dos graus de risco 1 e 2 dispensadas do PGR, a AEP se torna documento obrigatório para evidenciar a gestão dos riscos ergonômicos, incluindo os fatores psicossociais quando aplicáveis.</p>

          <h2 id="consultoria">A contratação de uma consultoria de Segurança do Trabalho resolve toda a obrigação?</h2>
          <p>A participação de profissionais de Segurança e Saúde no Trabalho é indispensável em muitos casos, mas a responsabilidade legal continua sendo da organização. A empresa deve assegurar que o diagnóstico técnico corresponda às práticas efetivamente adotadas.</p>
          <p>O tema possui reflexos jurídicos, trabalhistas e de governança. Metas, jornadas, sistemas de controle, procedimentos disciplinares, canais de denúncia, investigações internas, políticas contra assédio e condutas das lideranças podem influenciar o risco e a exposição da empresa.</p>
          <p>Por isso, a adequação deve integrar o trabalho técnico de SST com a análise do Recursos Humanos, da administração, da CIPA, do compliance e da assessoria jurídica trabalhista empresarial.</p>

          <h2 id="riscos">Quais são os riscos do descumprimento?</h2>
          <p>O descumprimento das obrigações previstas na NR-01 e na NR-17 pode resultar em fiscalização, notificação, exigência de adequação e autuação administrativa, conforme as circunstâncias verificadas.</p>
          <p>Falhas na gestão dos riscos também podem influenciar ações trabalhistas individuais ou coletivas, investigações, pedidos de indenização e discussões sobre doenças ocupacionais. Documentos incompletos ou incompatíveis com a rotina empresarial podem aumentar a dificuldade de defesa.</p>
          <p>A NR-01 não cria responsabilidade automática por qualquer episódio de adoecimento. Cada situação depende da análise dos fatos, das condições de trabalho, do nexo causal, das medidas adotadas e das provas disponíveis. Contudo, a ausência de um processo consistente pode ampliar a exposição jurídica.</p>

          <h2 id="advogado">Como o Advogado Trabalhista Empresarial pode auxiliar?</h2>
          <p>O advogado trabalhista empresarial pode atuar em conjunto com os profissionais de SST para revisar a conformidade jurídica das medidas e reduzir contradições entre os documentos técnicos e as práticas internas.</p>
          <p>A assessoria pode incluir:</p>
          <ul>
            <li>revisão de políticas internas e regulamentos empresariais;</li>
            <li>análise de metas, cobranças, jornadas e sistemas de controle;</li>
            <li>estruturação de canais de denúncia e fluxos de apuração;</li>
            <li>elaboração de protocolos de prevenção ao assédio e à discriminação;</li>
            <li>treinamento jurídico de gestores e lideranças;</li>
            <li>orientação em investigações internas;</li>
            <li>revisão da coerência entre AEP, PGR, plano de ação e documentos trabalhistas;</li>
            <li>organização de evidências de implementação e acompanhamento;</li>
            <li>análise preventiva de setores com afastamentos, conflitos ou rotatividade elevados;</li>
            <li>apoio em fiscalizações e na gestão de passivos trabalhistas.</li>
          </ul>
          <p>Esse apoio não substitui a atuação técnica dos profissionais responsáveis pelas avaliações de SST. O objetivo é integrar as dimensões técnica, documental, trabalhista e de governança.</p>

          <h2 id="sorocaba">Por que as empresas de Sorocaba devem agir agora?</h2>
          <p>Sorocaba possui um ambiente empresarial diversificado, com indústrias, empresas de logística, comércio, serviços, tecnologia e estruturas administrativas de diferentes portes. Cada setor apresenta formas próprias de organização do trabalho e, consequentemente, riscos que exigem análise específica.</p>
          <p>Como a nova redação da NR-01 já está em vigor, a empresa não deve aguardar uma fiscalização ou uma reclamação trabalhista para revisar seus procedimentos. A adequação preventiva permite identificar falhas, priorizar medidas e produzir registros coerentes com a realidade operacional.</p>
          <p>A <a href="/quem-somos">Eryx Fernandes Advocacia</a> presta assessoria trabalhista empresarial em Sorocaba, com atuação voltada à prevenção de passivos, revisão de práticas internas e orientação jurídica para adequação das relações de trabalho.</p>

          <h2 id="preparada">Sua empresa está preparada para a NR-01?</h2>
          <p>A inclusão expressa dos fatores psicossociais no GRO exige uma mudança de postura. A organização precisa conhecer seus riscos, ouvir os trabalhadores, revisar práticas de gestão, estabelecer medidas concretas e acompanhar os resultados.</p>
          <p>Um PGR padronizado e desconectado da rotina não oferece a segurança esperada. A conformidade depende da coerência entre documentos, decisões, práticas de liderança e condições reais de trabalho.</p>
          <p>Empresas de Sorocaba e região podem buscar orientação de um advogado trabalhista empresarial para integrar a adequação técnica à prevenção jurídica, revisar políticas internas e estruturar evidências de conformidade. Para iniciar uma análise, <a href="/contato">fale com o escritório</a>.</p>

          <h2 id="faq">Perguntas frequentes sobre a NR-01 e os riscos psicossociais</h2>
          <ul>
            ${nr01FaqItems.map((item) => `<li><strong>${item.question}</strong> ${item.answer}</li>`).join("")}
          </ul>

          <h2 id="fontes">Fontes oficiais consultadas</h2>
          <ul>
            <li>Ministério do Trabalho e Emprego — página oficial da NR-01 e textos vigentes</li>
            <li>MTE — Perguntas e Respostas sobre o Capítulo 1.5 da NR-01 (GRO/PGR), maio de 2026</li>
            <li>MTE — Manual de interpretação e aplicação do capítulo 1.5 da NR-01, 2026</li>
            <li>MTE — Inclusão de fatores de risco psicossociais no GRO</li>
          </ul>

          <aside class="article-final-cta">
            <h2>Sua empresa está preparada para as novas exigências da NR-01?</h2>
            <p>A revisão preventiva das políticas internas, documentos e práticas de gestão pode reduzir riscos jurídicos e fortalecer a conformidade.</p>
            <div class="cta-actions">
              <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Conversar com um advogado</a>
            </div>
          </aside>
        </article>
      </section>

      <section class="article-recommendations reveal-block">
        <div class="section-heading">
          <p>Leitura</p>
          <h2>Outras leituras recomendadas</h2>
        </div>
        <div class="editorial-article-grid article-recommendations-grid">
          ${recommendations.map(articleListingCardTemplate).join("")}
        </div>
      </section>
    </main>
    ${articleStructuredDataTemplate(article, nr01FaqItems, "NR-01 em 2026")}
    ${footerTemplate()}
  `;
}

function rescisaoIndirectArticleTemplate() {
  const article = articleByHref("/artigos/rescisao-indireta-sorocaba");
  const recommendations = [
    articleByHref("/artigos/assedio-moral-no-trabalho-como-identificar"),
    articleByHref("/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"),
    articleByHref("/artigos/fgts-nao-depositado-como-conferir")
  ];

  return `
    ${headerTemplate("/artigos")}
    <main id="conteudo" class="article-page">
      <section class="article-hero">
        <div class="editorial-hero-mark" aria-hidden="true">
          <img src="/monograma-mf.png" alt="" />
        </div>
        <div class="editorial-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="article-hero-inner">
          <div class="article-hero-copy">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/artigos">Artigos</a>
              <span>/</span>
              <span>Rescisão Indireta</span>
            </nav>
            <p class="article-type-label">Artigo jurídico</p>
            <p class="eyebrow article-category-label">${article.eyebrow}</p>
            <h1>Rescisão Indireta em Sorocaba:<br />Guia Completo para o Trabalhador</h1>
            <p>${article.excerpt}</p>
            <div class="article-author">
              ${authorAvatarTemplate()}
              <div>
                <strong>${SITE_CONFIG.responsible}</strong>
                <span>Advogado Trabalhista</span>
                <span>OAB/SP 530.983</span>
              </div>
            </div>
            <div class="article-hero-meta">
              <span>${article.readingTime}</span>
              <span>${article.date}</span>
            </div>
          </div>
          <figure class="article-hero-image">
            ${optimizedPicture(article.image, article.alt, { lazy: false, fetchPriority: "high" })}
          </figure>
        </div>
      </section>

      <section class="article-shell">
        <aside class="article-summary" aria-label="Sumário do artigo">
          <span>Sumário</span>
          <a href="#introducao">Introdução</a>
          <a href="#o-que-e">O que é Rescisão Indireta?</a>
          <a href="#diferenca">Diferenças entre as rescisões</a>
          <a href="#artigo-483">Artigo 483 da CLT</a>
          <a href="#situacoes">Situações comuns</a>
          <a href="#direitos">Direitos envolvidos</a>
          <a href="#provas">Provas importantes</a>
          <a href="#abandono">Abandono de emprego</a>
          <a href="#advogado">Advogado Trabalhista</a>
          <a href="#atendimento">Atendimento em Sorocaba</a>
          <a href="#conclusao">Conclusão</a>
          <a href="#faq">FAQ</a>
        </aside>

        <article class="article-content">
          <h2 id="introducao">Introdução</h2>
          <p class="article-lead">Se você trabalha em Sorocaba ou em cidades da região, como Votorantim, Salto, Itu ou Iperó, e está enfrentando uma situação difícil no emprego, como atraso constante de salário, falta de depósito do FGTS, ausência de recolhimento do INSS, assédio moral ou assédio sexual, é natural pensar: “Eu não aguento mais essa empresa, mas se eu pedir demissão vou perder meus direitos.”</p>
          <p>Essa preocupação faz sentido, mas existe um caminho que muita gente desconhece. A Rescisão Indireta, um instituto previsto na Consolidação das Leis do Trabalho (CLT), permite ao Trabalhador romper o contrato de trabalho quando a Empresa comete uma falta grave. Muitos Trabalhadores em Sorocaba já passaram por essa dúvida, mas poucos conhecem sobre este direito.</p>
          <p>Neste artigo, vamos explicar de forma clara o que é a Rescisão Indireta, quando ela pode ser aplicada, quais direitos estão envolvidos e por que cada caso precisa de uma análise individual antes de qualquer decisão.</p>

          ${articleInlineCtaTemplate(
            "Está enfrentando problemas no trabalho?",
            "Antes de pedir demissão ou abandonar o emprego, procure orientação jurídica para avaliar a possibilidade de Rescisão Indireta.",
            "Falar pelo WhatsApp"
          )}

          <h2 id="o-que-e">O que é Rescisão Indireta?</h2>
          <p>A Rescisão Indireta é, popularmente, conhecida como a "justa causa do empregador". Isso significa que, assim como a Empresa pode demitir o Trabalhador por justa causa quando ele comete uma falta grave, o Trabalhador também pode buscar o rompimento do contrato quando é a Empresa quem descumpre suas obrigações de forma grave.</p>
          <p>Na prática, a Rescisão Indireta funciona como uma proteção legal: ela reconhece que a relação de emprego não pode continuar quando a Empresa deixa de cumprir deveres essenciais, como pagar salários em dia, depositar o FGTS ou garantir um ambiente de trabalho digno.</p>
          <p>É importante destacar que a Rescisão Indireta não é automática. Ela normalmente depende de reconhecimento judicial, ou seja, é necessário que a Justiça do Trabalho analise a situação e confirme que houve, de fato, uma falta grave por parte da Empresa.</p>

          <h2 id="diferenca">Pedido de demissão, justa causa e Rescisão Indireta: qual a diferença?</h2>
          <p>Para entender melhor o tema, é fundamental compreender as três formas mais comuns de encerramento do contrato de trabalho:</p>
          <ul>
            <li><strong>Pedido de demissão:</strong> é quando o próprio Trabalhador decide encerrar o vínculo, sem que a Empresa tenha cometido nenhuma irregularidade. Nesse caso, o Trabalhador tem direitos reduzidos, como não ter acesso ao saque do FGTS nem ao seguro-desemprego.</li>
            <li><strong>Justa causa:</strong> ocorre quando é a Empresa quem demite o Trabalhador em razão de uma falta grave cometida por ele (como insubordinação, abandono de emprego ou improbidade). Aqui, o Trabalhador perde a maior parte dos direitos rescisórios.</li>
            <li><strong>Rescisão Indireta:</strong> é o caminho inverso da justa causa. É o Trabalhador quem solicita o encerramento do contrato porque a Empresa cometeu uma falta grave. Se reconhecida, a Rescisão Indireta gera, em regra, os mesmos direitos de uma demissão sem justa causa feita pela Empresa.</li>
          </ul>
          <p>Essa diferença é fundamental, porque o tipo de rescisão impacta diretamente nos valores e direitos que o Trabalhador pode receber ao final do contrato.</p>

          <h2 id="artigo-483">O que diz o artigo 483 da CLT?</h2>
          <p>O fundamento legal da Rescisão Indireta está no artigo 483 da CLT. Em linhas gerais, esse artigo lista situações em que o Trabalhador pode considerar o contrato rescindido por culpa da Empresa, entre elas:</p>
          <ul>
            <li>exigir do Trabalhador serviços superiores às suas forças, proibidos por lei, contrários aos bons costumes, ou alheios ao contrato;</li>
            <li>tratar o Trabalhador com rigor excessivo;</li>
            <li>expor o Trabalhador a perigo manifesto de mal considerável;</li>
            <li>não cumprir as obrigações do contrato de trabalho;</li>
            <li>praticar ato lesivo à honra e à boa fama do Trabalhador ou de pessoas de sua família;</li>
            <li>ofender o Trabalhador fisicamente, salvo em caso de legítima defesa;</li>
            <li>reduzir o trabalho do empregado sendo este por peça ou tarefa, de forma a afetar sensivelmente a importância dos salários.</li>
          </ul>
          <p>Em resumo: sempre que a Empresa falha em cumprir compromissos essenciais do contrato de trabalho, como pagar salários, depositar o FGTS ou preservar a dignidade do Trabalhador, pode haver espaço para discutir a Rescisão Indireta.</p>
          <p>Mas é essencial reforçar: cada situação deve ser analisada individualmente, considerando provas, contexto e gravidade dos fatos.</p>

          <h2 id="situacoes">Principais situações que podem justificar a Rescisão Indireta</h2>
          <p>A seguir, listamos algumas das situações mais comuns que podem, dependendo do caso concreto, justificar um pedido de Rescisão Indireta:</p>
          <ul>
            <li><strong>Atraso de salário:</strong> quando a Empresa atrasa reiteradamente o pagamento do salário, compromete o sustento do Trabalhador e pode configurar descumprimento contratual grave.</li>
            <li><strong>Ausência de depósito do FGTS:</strong> a falta de recolhimento do FGTS é uma das obrigações mais básicas da relação de emprego. A ausência recorrente desses depósitos pode ser um forte indício de falta grave da Empresa.</li>
            <li><strong>Assédio moral:</strong> humilhações constantes, cobranças abusivas, exposição do Trabalhador a situações vexatórias diante de colegas ou clientes são exemplos de assédio moral que podem justificar o rompimento do contrato.</li>
            <li><strong>Excesso de jornada:</strong> jornadas extenuantes, sem os devidos intervalos ou compensações, especialmente quando colocam em risco a saúde do Trabalhador, também podem ser consideradas.</li>
            <li><strong>Cobrança abusiva de metas:</strong> metas inatingíveis, associadas a ameaças de demissão ou constrangimento público, ultrapassam o exercício regular do poder diretivo da Empresa.</li>
            <li><strong>Desvio ou acúmulo de função:</strong> quando o Trabalhador passa a exercer atividades muito diferentes das combinadas no contrato, sem o devido ajuste salarial ou funcional.</li>
            <li><strong>Rebaixamento de função:</strong> a alteração unilateral e prejudicial do cargo ou das atribuições do Trabalhador, sem justificativa legítima, pode configurar descumprimento contratual.</li>
            <li><strong>Falta de condições mínimas de trabalho:</strong> ambientes insalubres, sem equipamentos de proteção adequados ou estrutura mínima para o exercício da função.</li>
            <li><strong>Tratamento humilhante ou discriminatório:</strong> discriminação por gênero, raça, idade, orientação sexual ou qualquer outra condição pessoal é uma violação grave dos direitos do Trabalhador.</li>
            <li><strong>Descumprimento grave do contrato:</strong> qualquer outra falha relevante da Empresa em cumprir cláusulas contratuais, como benefícios prometidos, condições de trabalho combinadas ou obrigações legais.</li>
          </ul>
          <p><strong>Importante:</strong> a existência de uma dessas situações não gera, automaticamente, o direito à Rescisão Indireta. É necessário avaliar a gravidade, a frequência dos fatos e as provas disponíveis em cada caso.</p>

          ${articleInlineCtaTemplate(
            "Cada caso exige uma análise individual.",
            "A existência de atraso salarial, FGTS ou assédio não gera automaticamente o direito à Rescisão Indireta. A análise jurídica é fundamental.",
            "Solicitar uma avaliação"
          )}

          <h2 id="direitos">Quais direitos o Trabalhador pode receber se a Rescisão Indireta for reconhecida?</h2>
          <p>Se a Justiça do Trabalho reconhecer a Rescisão Indireta, o Trabalhador pode ter direito, em regra, às mesmas verbas de uma demissão sem justa causa, tais como:</p>
          <ul>
            <li>saldo de salário;</li>
            <li>aviso prévio;</li>
            <li>13º salário proporcional;</li>
            <li>férias vencidas e proporcionais, acrescidas de 1/3;</li>
            <li>saque do FGTS;</li>
            <li>multa de 40% sobre o FGTS;</li>
            <li>guias para requerimento do seguro-desemprego, quando aplicável.</li>
          </ul>
          <p>Vale reforçar que o reconhecimento e a extensão desses direitos dependem da análise judicial do caso concreto, não havendo garantia de resultado.</p>

          <h2 id="provas">Quais provas podem ajudar o Trabalhador?</h2>
          <p>A prova é um dos pontos mais importantes em uma ação de Rescisão Indireta. Alguns exemplos de elementos que podem ser úteis:</p>
          <ul>
            <li>Comprovantes de pagamento (contracheques, extratos bancários) que demonstrem atraso salarial;</li>
            <li>Extrato do FGTS, mostrando ausência ou irregularidade nos depósitos;</li>
            <li>Mensagens, e-mails ou áudios que evidenciem cobranças abusivas ou assédio moral;</li>
            <li>Testemunhas, como colegas de trabalho que presenciaram os fatos;</li>
            <li>Registros médicos ou psicológicos, quando há impacto na saúde do Trabalhador;</li>
            <li>Documentos internos da Empresa, como comunicados sobre metas, mudança de função ou jornada.</li>
          </ul>
          <p>Reunir esse tipo de documentação com antecedência pode fazer diferença na análise do caso por um Advogado e, posteriormente, pela Justiça do Trabalho.</p>

          <h2 id="abandono">Por que o Trabalhador não deve simplesmente abandonar o emprego</h2>
          <p>Um erro comum é o Trabalhador, diante de uma situação insustentável, simplesmente parar de comparecer ao trabalho. Essa atitude pode ser interpretada pela Empresa como abandono de emprego, o que pode resultar em demissão por justa causa, justamente o cenário mais prejudicial para o Trabalhador.</p>
          <p>O caminho juridicamente mais seguro é buscar orientação profissional de um <a href="/atuacao/direito-trabalhista-trabalhadores">Advogado Trabalhista em Sorocaba</a> antes de tomar qualquer decisão. Em muitos casos, é possível continuar prestando serviços enquanto se reúnem provas e se avalia a viabilidade de uma ação de Rescisão Indireta, ou, dependendo da gravidade da situação, requerer uma medida judicial específica para rescisão imediata com garantia de salários até o fim do processo.</p>

          <h2 id="advogado">Quando procurar um Advogado Trabalhista em Sorocaba?</h2>
          <p>Se você mora ou trabalha em Sorocaba e vive uma das situações descritas acima, o momento de buscar orientação jurídica é antes de tomar qualquer atitude drástica, como parar de ir ao trabalho ou pedir demissão por conta própria.</p>
          <p>Um Advogado Trabalhista pode ajudar o Trabalhador a:</p>
          <ul>
            <li>entender se a situação vivida se enquadra nas hipóteses do artigo 483 da CLT;</li>
            <li>organizar as provas necessárias;</li>
            <li>avaliar os riscos e possibilidades do caso concreto;</li>
            <li>orientar sobre a melhor estratégia, seja a Rescisão Indireta, uma reclamação trabalhista específica ou outra medida cabível.</li>
          </ul>
          <p>Buscar orientação em Sorocaba, com um profissional que conhece a realidade da região e das empresas locais, pode facilitar o acompanhamento presencial do caso, além de agilizar o diálogo em audiências na Justiça do Trabalho local.</p>

          <h2 id="atendimento">Atendimento jurídico trabalhista em Sorocaba com o Dr. Eryx Fernandes</h2>
          <p>O Dr. Eryx Fernandes, Advogado Trabalhista inscrito na ${professionalRegistrationLink()}, atua em Sorocaba e região atendendo Trabalhadores que enfrentam situações como atraso salarial, ausência de depósito do FGTS, assédio moral, excesso de jornada e outras condutas irregulares por parte da Empresa.</p>
          <p>O atendimento é pautado pela análise cuidadosa de cada caso, sempre respeitando a individualidade das circunstâncias vividas pelo Trabalhador.</p>
          <p>O compromisso é oferecer uma avaliação técnica, honesta e fundamentada na legislação trabalhista, ajudando o Trabalhador a entender seus direitos e as possibilidades legais diante da situação enfrentada.</p>

          <h2 id="conclusao">Conclusão</h2>
          <p>A Rescisão Indireta é um instrumento importante para proteger o Trabalhador quando a Empresa deixa de cumprir suas obrigações de forma grave. No entanto, cada caso tem particularidades que precisam ser avaliadas com cuidado, desde a gravidade dos fatos até a existência de provas suficientes.</p>
          <p>Se você está em Sorocaba e enfrenta uma situação como atraso de salário, falta de FGTS, assédio moral ou qualquer outra irregularidade no ambiente de trabalho, o primeiro passo é buscar orientação jurídica especializada antes de tomar qualquer decisão.</p>
          <p><a href="${getWhatsAppUrl()}" target="_blank" rel="noopener noreferrer">Entre em contato</a> com o Dr. Eryx Fernandes, Advogado Trabalhista em Sorocaba, ${professionalRegistrationLink()}, e agende uma orientação jurídica sobre o seu caso.</p>

          <h2 id="faq">Perguntas Frequentes (FAQ)</h2>
          <ul>
            ${rescisaoIndirectFaqItems.map((item) => `<li><strong>${item.question}</strong> ${item.answer}</li>`).join("")}
          </ul>

          <aside class="article-final-cta">
            <h2>Precisa analisar sua situação?</h2>
            <p>Entre em contato com o Dr. Eryx Fernandes para uma avaliação técnica do seu caso.</p>
            <div class="cta-actions">
              <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
            </div>
          </aside>
        </article>
      </section>

      <section class="article-recommendations reveal-block">
        <div class="section-heading">
          <p>Leitura</p>
          <h2>Outras leituras recomendadas</h2>
        </div>
        <div class="editorial-article-grid article-recommendations-grid">
          ${recommendations.map(articleListingCardTemplate).join("")}
        </div>
      </section>
    </main>
    ${articleStructuredDataTemplate(article, rescisaoIndirectFaqItems, "Rescisão Indireta em Sorocaba")}
    ${footerTemplate()}
  `;
}

const missingFgtsArticleFaqItems = [
  {
    question: "Como saber se a empresa está depositando o FGTS?",
    answer:
      "O trabalhador pode acompanhar os lançamentos pelo Aplicativo FGTS e consultar o extrato de cada conta vinculada. É importante comparar os meses do vínculo com os depósitos apresentados."
  },
  {
    question: "Qual é o valor mensal do FGTS?",
    answer:
      "Para a maioria dos contratos regidos pela CLT, a Lei nº 8.036/1990 estabelece depósito correspondente a 8% da remuneração paga ou devida no mês anterior. Situações específicas podem ter regras diferentes."
  },
  {
    question: "O que fazer quando aparecem meses sem depósito?",
    answer:
      "Primeiro, confira se existe outra conta vinculada ao mesmo contrato e se os dados estão corretos. Confirmada a ausência, é possível buscar esclarecimento da empresa, registrar denúncia trabalhista e avaliar orientação jurídica."
  },
  {
    question: "FGTS não depositado pode gerar rescisão indireta?",
    answer:
      "O TST firmou entendimento de que a ausência ou irregularidade dos depósitos caracteriza descumprimento contratual suficiente para configurar rescisão indireta. Ainda assim, a forma de agir e os efeitos no caso concreto devem ser analisados antes de qualquer afastamento."
  },
  {
    question: "A empresa pode regularizar os depósitos atrasados?",
    answer:
      "A empresa pode recolher valores em atraso com os encargos aplicáveis. A regularização precisa aparecer na conta vinculada, e seus efeitos sobre outras medidas dependem do histórico e do momento do caso."
  },
  {
    question: "Preciso ter todos os documentos para pedir orientação?",
    answer:
      "Não. A conversa pode começar pelo relato e pelas informações disponíveis. O escritório pode orientar quais consultas ou registros serão úteis conforme a situação."
  }
];

function missingFgtsArticleTemplate() {
  const article = articleByHref("/artigos/fgts-nao-depositado-como-conferir");
  const recommendations = [
    articleByHref("/artigos/rescisao-indireta-sorocaba"),
    articleByHref("/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"),
    articleByHref("/artigos/nr-01-novas-exigencias-empresas-sorocaba")
  ];
  const whatsappUrl = getWhatsAppUrl("Vim pelo artigo sobre FGTS não depositado e gostaria de entender minha situação.");

  return `
    ${headerTemplate("/artigos")}
    <main id="conteudo" class="article-page">
      <section class="article-hero">
        <div class="editorial-hero-mark" aria-hidden="true">
          <img src="/monograma-mf.png" alt="" />
        </div>
        <div class="editorial-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="article-hero-inner">
          <div class="article-hero-copy">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a><span>/</span>
              <a href="/artigos">Artigos</a><span>/</span>
              <span>FGTS não depositado</span>
            </nav>
            <p class="article-type-label">Artigo jurídico</p>
            <p class="eyebrow article-category-label">${article.category}</p>
            <h1>${article.title}</h1>
            <p>${article.excerpt}</p>
            <div class="article-author">
              ${authorAvatarTemplate()}
              <div>
                <strong>${SITE_CONFIG.responsible}</strong>
                <span>${professionalRegistrationLink()}</span>
              </div>
            </div>
            <div class="article-hero-meta">
              <span>${article.readingTime}</span>
              <span>${article.date}</span>
            </div>
          </div>
          <figure class="article-hero-image">
            ${optimizedPicture(article.image, article.alt, { lazy: false, fetchPriority: "high" })}
          </figure>
        </div>
      </section>

      <section class="article-shell">
        <aside class="article-summary" aria-label="Sumário do artigo">
          <span>Sumário</span>
          <a href="#obrigacao">Obrigação da empresa</a>
          <a href="#consultar">Como consultar</a>
          <a href="#faltando">Meses sem depósito</a>
          <a href="#providencias">O que fazer</a>
          <a href="#rescisao-indireta">Rescisão indireta</a>
          <a href="#regularizacao">Regularização</a>
          <a href="#orientacao">Quando buscar orientação</a>
          <a href="#faq">Perguntas frequentes</a>
        </aside>

        <article class="article-content">
          <p class="article-lead">O FGTS não é descontado do salário do trabalhador: o recolhimento é uma obrigação do empregador.</p>
          <p>Mesmo assim, meses sem lançamento, depósitos feitos com atraso ou valores aparentemente menores podem passar despercebidos por bastante tempo. A consulta periódica do extrato ajuda o trabalhador a identificar diferenças enquanto ainda consegue reconstruir com mais facilidade o histórico do contrato.</p>
          <p>Encontrar uma lacuna no aplicativo não significa que o trabalhador deva abandonar o emprego ou tomar uma decisão imediata. O primeiro passo é confirmar as informações e compreender o conjunto da situação.</p>

          <h2 id="obrigacao">Qual é a obrigação da empresa em relação ao FGTS?</h2>
          <p>O artigo 15 da <a href="https://www.planalto.gov.br/ccivil_03/leis/l8036compilada.htm" target="_blank" rel="noopener noreferrer">Lei nº 8.036/1990</a> determina, para a maioria dos contratos regidos pela CLT, que o empregador deposite até o dia 20 de cada mês o equivalente a 8% da remuneração paga ou devida no mês anterior.</p>
          <p>Esse valor não deve ser retirado do salário. Ele é depositado em uma conta vinculada ao contrato de trabalho e pode ser movimentado nas hipóteses previstas em lei.</p>
          <p>Existem relações de trabalho com regras próprias, como o contrato de aprendizagem. Por isso, uma diferença de valor deve ser analisada considerando o tipo de contrato, a remuneração e as parcelas que compõem a base de cálculo.</p>

          <h2 id="consultar">Como conferir se os depósitos estão sendo feitos?</h2>
          <p>A forma mais direta é consultar o extrato pelo <a href="https://www.caixa.gov.br/atendimento/aplicativos/fgts/paginas/default.aspx" target="_blank" rel="noopener noreferrer">Aplicativo FGTS da Caixa</a>. O serviço permite visualizar saldo e movimentações das contas vinculadas.</p>
          <p>Ao conferir, observe:</p>
          <ul>
            <li>se o contrato correto aparece no aplicativo;</li>
            <li>se há depósito correspondente a cada mês trabalhado;</li>
            <li>se existem lançamentos posteriores referentes a competências antigas;</li>
            <li>se o salário e outras parcelas remuneratórias parecem compatíveis com a base utilizada;</li>
            <li>se há mais de uma conta vinculada relacionada ao mesmo vínculo.</li>
          </ul>
          <p>A própria <a href="https://www.caixa.gov.br/beneficios-trabalhador/fgts/extrato-fgts/Paginas/default.aspx" target="_blank" rel="noopener noreferrer">Caixa disponibiliza orientações sobre o extrato do FGTS</a> e permite acompanhar os lançamentos pelo aplicativo.</p>

          ${articleInlineCtaTemplate(
            "Encontrou períodos sem depósito no extrato?",
            "A análise pode começar pelo seu relato. Você não precisa reunir todos os documentos antes do primeiro contato.",
            "Conversar sobre o FGTS"
          )}

          <h2 id="faltando">Por que podem aparecer meses sem depósito?</h2>
          <p>A ausência de lançamento pode decorrer de falta de recolhimento, atraso, inconsistência cadastral, existência de outra conta vinculada ou necessidade de processamento de uma regularização.</p>
          <p>Por isso, é prudente verificar se o aplicativo apresenta todas as contas ligadas ao contrato. O Ministério do Trabalho orienta que o trabalhador confira a existência de outras contas vinculadas na Caixa antes de concluir que o recolhimento não ocorreu.</p>
          <p>Se a ausência for confirmada, a responsabilidade pela regularização é do empregador.</p>

          <h2 id="providencias">O que o trabalhador pode fazer ao encontrar diferenças?</h2>
          <p>As providências dependem do momento do contrato, do número de meses em aberto e de outras irregularidades existentes. Entre os caminhos possíveis estão:</p>
          <ol>
            <li>guardar o extrato ou registrar as competências que aparecem sem depósito;</li>
            <li>verificar se há outra conta vinculada ao mesmo contrato;</li>
            <li>pedir esclarecimento à empresa por um canal que permita registrar a resposta;</li>
            <li>acompanhar se uma regularização prometida efetivamente entrou na conta;</li>
            <li>utilizar o serviço oficial para <a href="https://www.gov.br/pt-br/servicos/realizar-denuncia-trabalhista" target="_blank" rel="noopener noreferrer">registrar denúncia trabalhista</a>, quando adequado;</li>
            <li>buscar orientação para avaliar cobrança, prazos e possíveis reflexos no contrato.</li>
          </ol>
          <p>O canal de denúncia e uma eventual medida judicial têm funções diferentes. A denúncia permite comunicar a irregularidade à fiscalização; já a cobrança de valores e a discussão sobre consequências contratuais dependem da análise jurídica do caso.</p>

          <h2 id="rescisao-indireta">FGTS não depositado pode justificar rescisão indireta?</h2>
          <p>Pode. Em 2025, o Tribunal Superior do Trabalho firmou no <a href="https://www.tst.jus.br/documents/10157/0/IRR070%2B%282%29.pdf/072c0e8c-14a3-e7bd-11f1-6129709de35e?t=1741873916739" target="_blank" rel="noopener noreferrer">Tema Repetitivo 70</a> a tese de que a ausência ou irregularidade no recolhimento do FGTS caracteriza descumprimento de obrigação contratual suficiente para configurar a rescisão indireta, sem exigir imediatidade.</p>
          <p>Isso não significa que o trabalhador deva simplesmente parar de comparecer ao trabalho. A estratégia, o momento do afastamento e os pedidos envolvidos precisam ser avaliados com cuidado, porque uma saída conduzida de forma inadequada pode gerar discussão sobre pedido de demissão ou abandono.</p>
          <p>Para compreender essa modalidade de encerramento do contrato, consulte também a página sobre <a href="/atuacao/rescisao-indireta">rescisão indireta</a> e o <a href="/artigos/rescisao-indireta-sorocaba">guia completo para o trabalhador</a>.</p>

          <h2 id="regularizacao">A empresa pode depositar o FGTS atrasado depois?</h2>
          <p>Sim. O empregador pode regularizar recolhimentos em atraso, com os encargos aplicáveis. Para o trabalhador, o ponto central é confirmar se os valores efetivamente apareceram na conta vinculada e se todas as competências foram abrangidas.</p>
          <p>A regularização posterior pode resolver o débito, mas seus efeitos sobre outras discussões dependem do histórico, da duração da irregularidade e do momento em que ocorreu. Não existe uma resposta única para todos os contratos.</p>

          <h2 id="orientacao">Quando procurar orientação trabalhista?</h2>
          <p>A orientação pode ser especialmente útil quando existem vários meses sem depósito, a empresa não esclarece a situação, a regularização prometida não aparece, o contrato já terminou ou o trabalhador avalia uma rescisão indireta.</p>
          <p>Não é necessário ter todos os documentos para iniciar a conversa. O relato, o período aproximado do vínculo e o que aparece no aplicativo já permitem organizar as primeiras perguntas.</p>
          <p>Conheça a atuação do escritório em <a href="/atuacao/fgts-nao-depositado">FGTS não depositado</a> ou veja outras situações atendidas na página de <a href="/atuacao/direito-trabalhista-trabalhadores">Direito Trabalhista para trabalhadores</a>.</p>

          <h2 id="faq">Perguntas frequentes</h2>
          ${missingFgtsArticleFaqItems.map((item) => `
            <h3>${item.question}</h3>
            <p>${item.answer}</p>
          `).join("")}

          <aside class="article-final-cta">
            <h2>Identificou meses sem depósito do FGTS?</h2>
            <p>Conte brevemente o que aparece no aplicativo. A conversa inicial serve para compreender o contexto e indicar quais verificações podem ser úteis.</p>
            <div class="cta-actions">
              <a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
              <a class="button button-ghost" href="/atuacao/fgts-nao-depositado">Ver atuação em FGTS</a>
            </div>
          </aside>
        </article>
      </section>

      <section class="article-recommendations reveal-block">
        <div class="section-heading">
          <p>Leitura</p>
          <h2>Outras leituras recomendadas</h2>
        </div>
        <div class="editorial-article-grid article-recommendations-grid">
          ${recommendations.map(articleListingCardTemplate).join("")}
        </div>
      </section>
    </main>
    ${articleStructuredDataTemplate(article, missingFgtsArticleFaqItems, "FGTS não depositado")}
    ${footerTemplate()}
  `;
}

function laborRightsArticleTemplate() {
  const article = articleByHref("/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica");
  const recommendations = [
    articleByHref("/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar"),
    articleByHref("/artigos/acidente-de-trabalho-direitos-do-trabalhador"),
    articleByHref("/artigos/rescisao-indireta-sorocaba"),
  ];

  return `
    ${headerTemplate("/artigos")}
    <main id="conteudo" class="article-page">
      <section class="article-hero">
        <div class="editorial-hero-mark" aria-hidden="true">
          <img src="/monograma-mf.png" alt="" />
        </div>
        <div class="editorial-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="article-hero-inner">
          <div class="article-hero-copy">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/artigos">Artigos</a>
              <span>/</span>
              <span>Direitos trabalhistas</span>
            </nav>
            <p class="article-type-label">Artigo jurídico</p>
            <p class="eyebrow article-category-label">${article.category}</p>
            <h1>${article.title}</h1>
            <p>${article.excerpt}</p>
            <div class="article-author">
              ${authorAvatarTemplate()}
              <div>
                <strong>${SITE_CONFIG.responsible}</strong>
                <span>${professionalRegistrationLink()}</span>
              </div>
            </div>
            <div class="article-hero-meta">
              <span>${article.readingTime}</span>
              <span>${article.date}</span>
            </div>
          </div>
          <figure class="article-hero-image">
            ${optimizedPicture(article.image, article.alt, { lazy: false, fetchPriority: "high" })}
          </figure>
        </div>
      </section>

      <section class="article-shell">
        <aside class="article-summary" aria-label="Sumário do artigo">
          <span>Sumário</span>
          <a href="#rescisao">Rescisão</a>
          <a href="#horas-extras">Horas extras</a>
          <a href="#assedio">Assédio moral</a>
          <a href="#acidente">Acidente de trabalho</a>
          <a href="#fgts">FGTS e vínculo</a>
          <a href="#documentos">Documentos</a>
          <a href="#processo">Processo</a>
          <a href="#conclusao">Conclusão</a>
        </aside>

        <article class="article-content">
          <p class="article-lead">Nem toda dúvida trabalhista começa com uma ação judicial.</p>
          <p>Muitas vezes, ela aparece no momento da rescisão, em uma jornada que não fecha, em um desconto inesperado, em um ambiente de trabalho desgastante ou na sensação de que algo não foi conduzido corretamente.</p>
          <p>Nesses casos, procurar orientação jurídica não significa necessariamente entrar com processo. Significa compreender o cenário, analisar documentos, identificar riscos e entender quais caminhos são possíveis.</p>
          <p>Para trabalhadores em Sorocaba e região, a análise individualizada pode ajudar a esclarecer dúvidas sobre direitos trabalhistas, prazos, verbas e documentos importantes. A atuação de um <a href="/atuacao/direito-trabalhista-trabalhadores">advogado trabalhista em Sorocaba</a> começa pela leitura do contexto concreto.</p>

          ${articleInlineCtaTemplate(
            "Tem dúvida sobre seus direitos trabalhistas?",
            "Conte brevemente a situação. A análise inicial ajuda a entender se há pontos que merecem atenção jurídica.",
            "Falar pelo WhatsApp"
          )}

          <h2 id="rescisao">Quando a rescisão merece atenção?</h2>
          <p>A rescisão é um dos momentos em que mais surgem dúvidas trabalhistas.</p>
          <p>É comum que o trabalhador tenha dificuldade para conferir se todos os valores foram pagos corretamente, especialmente quando há aviso prévio, férias vencidas ou proporcionais, 13º salário, saldo de salário, multa do FGTS, descontos e prazos envolvidos.</p>
          <p>Alguns sinais merecem atenção:</p>
          <ul>
            <li>pagamento realizado fora do prazo;</li>
            <li>descontos não explicados;</li>
            <li>ausência de entrega de documentos;</li>
            <li>dúvida sobre multa do FGTS;</li>
            <li>divergência entre salário real e valores pagos;</li>
            <li>falta de clareza sobre aviso prévio;</li>
            <li>rescisão por justa causa sem compreensão dos motivos.</li>
          </ul>
          <p>Cada caso deve ser analisado de forma individual, considerando documentos, histórico da relação de trabalho e forma de desligamento.</p>

          <h2 id="horas-extras">Horas extras e jornada de trabalho</h2>
          <p>Outro ponto recorrente envolve a jornada.</p>
          <p>Quando o trabalhador cumpre horários superiores aos registrados, realiza atividades antes ou depois do expediente, trabalha em intervalos ou não recebe corretamente pelas horas prestadas, pode existir uma situação que exige análise jurídica.</p>
          <p>A avaliação depende de fatores como:</p>
          <ul>
            <li>registros de ponto;</li>
            <li>mensagens;</li>
            <li>escala;</li>
            <li>função exercida;</li>
            <li>rotina real de trabalho;</li>
            <li>formas de controle da empresa.</li>
          </ul>
          <p>Nem toda diferença de horário gera automaticamente direito a pagamento, mas inconsistências entre a rotina real e a documentação formal merecem atenção.</p>

          <h2 id="assedio">Assédio moral e ambiente de trabalho</h2>
          <p>Situações de pressão abusiva, humilhações, exposição pública, cobranças desproporcionais ou constrangimentos recorrentes podem indicar um ambiente de trabalho juridicamente sensível.</p>
          <p>O assédio moral exige análise cuidadosa.</p>
          <p>Não basta o desconforto isolado. É necessário compreender a repetição das condutas, o contexto, as provas possíveis e os impactos na relação de trabalho.</p>
          <p>Registros de mensagens, testemunhas, comunicados internos e documentos podem ajudar na avaliação.</p>

          ${articleInlineCtaTemplate(
            "O ambiente de trabalho se tornou insustentável?",
            "Antes de tomar qualquer decisão, procure entender os riscos, documentos e caminhos possíveis para o seu caso.",
            "Enviar mensagem ao escritório"
          )}

          <h2 id="acidente">Acidente de trabalho e afastamento</h2>
          <p>Quando o trabalhador sofre acidente durante a atividade profissional ou desenvolve condição relacionada ao trabalho, podem surgir consequências trabalhistas e previdenciárias.</p>
          <p>A análise pode envolver:</p>
          <ul>
            <li>comunicação de acidente;</li>
            <li>atestados;</li>
            <li>laudos;</li>
            <li>afastamento;</li>
            <li>estabilidade;</li>
            <li>retorno ao trabalho;</li>
            <li>redução da capacidade;</li>
            <li>possível indenização, conforme o caso.</li>
          </ul>
          <p>A documentação médica e os registros do vínculo de trabalho são especialmente importantes nessa análise.</p>

          <h2 id="fgts">FGTS, vínculo empregatício e outros pontos de atenção</h2>
          <p>A ausência de depósitos de FGTS, diferenças salariais, pagamento por fora, contratação sem registro ou prestação de serviços com características de emprego também podem gerar dúvidas relevantes.</p>
          <p>Em situações de possível vínculo empregatício, a análise considera elementos como habitualidade, subordinação, pessoalidade e remuneração.</p>
          <p>Por isso, antes de concluir que há ou não direito envolvido, é importante organizar as informações e compreender a realidade da relação de trabalho.</p>

          <h2 id="documentos">Quais documentos podem ajudar?</h2>
          <p>Alguns documentos costumam auxiliar na análise inicial:</p>
          <ul>
            <li>carteira de trabalho;</li>
            <li>contrato de trabalho;</li>
            <li>holerites;</li>
            <li>termo de rescisão;</li>
            <li>extrato do FGTS;</li>
            <li>controles de ponto;</li>
            <li>mensagens e e-mails;</li>
            <li>advertências;</li>
            <li>atestados médicos;</li>
            <li>documentos de afastamento;</li>
            <li>comprovantes de pagamento.</li>
          </ul>
          <p>A falta de algum documento não impede necessariamente a conversa inicial. O escritório pode orientar quais informações são mais importantes para cada situação. Para uma visão mais ampla, <a href="/atuacao">conheça as áreas de atuação</a> do escritório.</p>

          <h2 id="processo">Procurar orientação jurídica significa entrar com processo?</h2>
          <p>Não necessariamente.</p>
          <p>A orientação jurídica serve para compreender o caso, avaliar documentos, identificar riscos e indicar caminhos possíveis.</p>
          <p>Em algumas situações, pode haver tentativa de solução extrajudicial. Em outras, a medida judicial pode ser avaliada. A escolha depende dos fatos, dos documentos, dos prazos e dos objetivos do trabalhador.</p>
          <p>O mais importante é evitar decisões precipitadas sem compreender o cenário.</p>

          <h2 id="conclusao">Conclusão</h2>
          <p>Direitos trabalhistas envolvem prazos, documentos e detalhes que podem mudar a leitura do caso.</p>
          <p>Quando houver dúvida sobre rescisão, jornada, FGTS, assédio, acidente de trabalho, vínculo empregatício ou qualquer situação relacionada ao trabalho, a orientação jurídica ajuda a organizar as informações e entender os próximos passos.</p>
          <p>O <a href="/quem-somos">Eryx Fernandes Advocacia</a> atende trabalhadores em Sorocaba e região, com suporte presencial e digital para análise de demandas trabalhistas. Para iniciar uma conversa, <a href="/contato">fale com o escritório</a>.</p>

          <aside class="article-final-cta">
            <h2>Precisa analisar uma situação trabalhista?</h2>
            <p>Fale com o Eryx Fernandes Advocacia e conte brevemente o que aconteceu. A orientação adequada começa pela escuta e pela análise do contexto.</p>
            <div class="cta-actions">
              <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
              <a class="button button-ghost" href="/atuacao/direito-trabalhista-trabalhadores">Ver atuação trabalhista</a>
            </div>
          </aside>
        </article>
      </section>

      <section class="article-recommendations reveal-block">
        <div class="section-heading">
          <p>Leitura</p>
          <h2>Outras leituras recomendadas</h2>
        </div>
        <div class="editorial-article-grid article-recommendations-grid">
          ${recommendations.map(articleListingCardTemplate).join("")}
        </div>
      </section>
    </main>
    ${laborRightsArticleSchemaTemplate(article)}
    ${footerTemplate()}
  `;
}

function laborRightsArticleSchemaTemplate(article) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    url: siteAbsoluteUrl(article.href),
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    articleSection: article.category,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      "@id": siteAbsoluteUrl("/quem-somos#eryx-fernandes"),
      name: SITE_CONFIG.authorName,
      honorificPrefix: "Dr.",
      jobTitle: article.authorRole,
      identifier: SITE_CONFIG.oab,
      url: siteAbsoluteUrl("/quem-somos")
    },
    publisher: {
      "@type": "Organization",
      "@id": siteAbsoluteUrl("/#organization"),
      name: SITE_CONFIG.firmName,
      url: siteAbsoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: siteAbsoluteUrl("/favicon-512.png")
      }
    },
    image: siteAbsoluteUrl(article.image),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteAbsoluteUrl(article.href)
    }
  };

  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
}

function realEstateContractsArticleTemplate() {
  const article = articleByHref("/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar");
  const recommendations = [
    articleByHref("/artigos/rescisao-indireta-sorocaba"),
    articleByHref("/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"),
    articleByHref("/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca")
  ];

  return `
    ${headerTemplate("/artigos")}
    <main id="conteudo" class="article-page">
      <section class="article-hero">
        <div class="editorial-hero-mark" aria-hidden="true">
          <img src="/monograma-mf.png" alt="" />
        </div>
        <div class="editorial-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="article-hero-inner">
          <div class="article-hero-copy">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/artigos">Artigos</a>
              <span>/</span>
              <span>Contratos imobiliários</span>
            </nav>
            <p class="article-type-label">Artigo jurídico</p>
            <p class="eyebrow article-category-label">${article.category}</p>
            <h1>${article.title}</h1>
            <p>${article.excerpt}</p>
            <div class="article-author">
              ${authorAvatarTemplate()}
              <div>
                <strong>${SITE_CONFIG.responsible}</strong>
                <span>${professionalRegistrationLink()}</span>
              </div>
            </div>
            <div class="article-hero-meta">
              <span>${article.readingTime}</span>
              <span>${article.date}</span>
            </div>
          </div>
          <figure class="article-hero-image">
            ${optimizedPicture(article.image, article.alt, { lazy: false, fetchPriority: "high" })}
          </figure>
        </div>
      </section>

      <section class="article-shell">
        <aside class="article-summary" aria-label="Sumário do artigo">
          <span>Sumário</span>
          <a href="#observar">Pontos de atenção</a>
          <a href="#compra-venda">Compra e venda</a>
          <a href="#locacao">Locação</a>
          <a href="#distratos">Distratos</a>
          <a href="#condominios">Condomínios</a>
          <a href="#documentos">Documentos</a>
          <a href="#orientacao">Antes de assinar</a>
          <a href="#conclusao">Conclusão</a>
        </aside>

        <article class="article-content">
          <p class="article-lead">Assinar um contrato imobiliário é uma decisão que costuma envolver patrimônio, prazo, responsabilidade e risco.</p>
          <p>Na compra e venda de um imóvel, em uma locação, em um distrato ou em uma negociação envolvendo condomínio, pequenos detalhes podem gerar grandes consequências.</p>
          <p>Por isso, a análise jurídica antes da assinatura não deve ser vista como excesso de cuidado. Ela ajuda a compreender obrigações, prazos, multas, garantias e pontos que podem gerar conflito no futuro.</p>
          <p>Em Sorocaba e região, quem está diante de uma decisão envolvendo imóvel pode buscar orientação para entender melhor o contrato e avaliar os riscos antes de assumir compromissos. A análise de um <a href="/atuacao/direito-imobiliario">advogado imobiliário em Sorocaba</a> pode trazer mais clareza sobre documentos, cláusulas contratuais e obrigações das partes.</p>

          ${articleInlineCtaTemplate(
            "Vai assinar um contrato imobiliário?",
            "Antes de assumir uma obrigação, vale entender cláusulas, prazos, garantias e riscos envolvidos.",
            "Falar pelo WhatsApp"
          )}

          <h2 id="observar">O que observar em um contrato imobiliário?</h2>
          <p>Contratos imobiliários não devem ser analisados apenas pelo valor da negociação.</p>
          <p>É importante observar a identificação das partes, a descrição do imóvel, as obrigações assumidas, os prazos, as multas, as garantias e as consequências em caso de descumprimento.</p>
          <p>Alguns pontos merecem atenção:</p>
          <ul>
            <li>identificação correta das partes;</li>
            <li>descrição detalhada do imóvel;</li>
            <li>valor, forma de pagamento e reajustes;</li>
            <li>prazos de entrega, posse ou desocupação;</li>
            <li>multas por atraso ou descumprimento;</li>
            <li>garantias exigidas;</li>
            <li>responsabilidades por taxas, tributos e despesas;</li>
            <li>regras para rescisão;</li>
            <li>documentos anexos;</li>
            <li>assinatura e validade das obrigações.</li>
          </ul>
          <p>Uma cláusula mal compreendida pode gerar insegurança e dificultar a solução de conflitos futuros.</p>

          <h2 id="compra-venda">Compra e venda de imóvel</h2>
          <p>Na compra e venda, a atenção deve começar antes da assinatura.</p>
          <p>O contrato precisa ser analisado junto aos documentos do imóvel e das partes envolvidas. A matrícula, a escritura, eventuais pendências, dívidas, restrições e obrigações assumidas podem influenciar diretamente a segurança da operação.</p>
          <p>Pontos importantes incluem:</p>
          <ul>
            <li>situação da matrícula;</li>
            <li>existência de ônus ou restrições;</li>
            <li>forma de pagamento;</li>
            <li>prazo para transferência;</li>
            <li>entrega da posse;</li>
            <li>responsabilidade por despesas;</li>
            <li>existência de financiamento;</li>
            <li>consequências em caso de desistência.</li>
          </ul>
          <p>A compra de um imóvel não deve ser tratada apenas como uma negociação comercial. Ela envolve uma operação jurídica que precisa ser compreendida com clareza.</p>

          <h2 id="locacao">Contrato de locação</h2>
          <p>O contrato de locação também exige atenção.</p>
          <p>Locador e locatário assumem deveres que precisam estar bem definidos, especialmente em relação a aluguel, reajuste, garantia, multa, conservação do imóvel, prazo contratual e entrega das chaves.</p>
          <p>Alguns pontos que costumam gerar dúvida:</p>
          <ul>
            <li>tipo de garantia locatícia;</li>
            <li>reajuste do aluguel;</li>
            <li>multa por rescisão antecipada;</li>
            <li>vistoria inicial e final;</li>
            <li>responsabilidade por reparos;</li>
            <li>condomínio, IPTU e encargos;</li>
            <li>prazo para desocupação;</li>
            <li>regras para renovação.</li>
          </ul>
          <p>Quando esses pontos não ficam claros, a locação pode se transformar em conflito.</p>

          ${articleInlineCtaTemplate(
            "Tem dúvida sobre locação, multa ou garantia?",
            "A análise do contrato ajuda a entender obrigações e riscos antes que o problema avance.",
            "Enviar mensagem ao escritório"
          )}

          <h2 id="distratos">Distratos e encerramento de contratos</h2>
          <p>Nem todo contrato chega ao fim da forma prevista inicialmente.</p>
          <p>Em algumas situações, as partes precisam discutir distrato, devolução de valores, multa, prazos, obrigações pendentes ou responsabilidade por descumprimento.</p>
          <p>Antes de assinar um distrato, é importante compreender:</p>
          <ul>
            <li>quais obrigações permanecem;</li>
            <li>se há multa aplicável;</li>
            <li>se existe valor a devolver;</li>
            <li>quais documentos devem ser assinados;</li>
            <li>se há quitação total ou parcial;</li>
            <li>quais riscos continuam existindo.</li>
          </ul>
          <p>Um distrato mal redigido pode encerrar uma negociação, mas abrir outra discussão.</p>

          <h2 id="condominios">Conflitos condominiais e documentos internos</h2>
          <p>Questões envolvendo condomínios também podem exigir análise jurídica.</p>
          <p>Cobranças, notificações, regras internas, multas, convivência entre moradores, responsabilidade do síndico e aplicação da convenção condominial precisam ser analisadas com cuidado.</p>
          <p>Nesses casos, documentos como convenção, regimento interno, atas, boletos, comunicados e notificações ajudam a compreender o contexto. Para conhecer outras frentes jurídicas do escritório, veja as <a href="/atuacao">áreas de atuação</a>.</p>

          <h2 id="documentos">Quais documentos podem ajudar na análise?</h2>
          <p>A análise contratual imobiliária costuma ficar mais clara quando alguns documentos estão disponíveis.</p>
          <p>Podem ajudar:</p>
          <ul>
            <li>contrato de compra e venda;</li>
            <li>contrato de locação;</li>
            <li>matrícula do imóvel;</li>
            <li>escritura;</li>
            <li>comprovantes de pagamento;</li>
            <li>notificações recebidas ou enviadas;</li>
            <li>boletos e cobranças;</li>
            <li>convenção e regimento interno do condomínio;</li>
            <li>mensagens e e-mails relacionados;</li>
            <li>fotos, laudos ou registros do imóvel;</li>
            <li>documentos pessoais das partes.</li>
          </ul>
          <p>A falta de algum documento não impede a análise inicial. O escritório pode orientar quais informações são mais importantes conforme o caso.</p>

          <h2 id="orientacao">Por que buscar orientação antes de assinar?</h2>
          <p>Muitas pessoas procuram orientação apenas depois que o conflito já apareceu.</p>
          <p>Mas, em contratos imobiliários, a prevenção costuma ser decisiva. Entender o que está sendo assinado permite tomar uma decisão mais consciente e reduzir riscos.</p>
          <p>A análise jurídica pode ajudar a esclarecer:</p>
          <ul>
            <li>o que cada parte está assumindo;</li>
            <li>quais são as consequências do descumprimento;</li>
            <li>quais documentos faltam;</li>
            <li>quais cláusulas merecem ajuste;</li>
            <li>quais pontos podem gerar conflito.</li>
          </ul>
          <p>Antes de assinar, comprar, vender, alugar ou encerrar um contrato, a leitura técnica pode trazer mais segurança para a decisão.</p>

          <h2 id="conclusao">Conclusão</h2>
          <p>Contratos imobiliários envolvem patrimônio, prazos e obrigações que precisam ser analisados com cuidado.</p>
          <p>Se há dúvida sobre compra e venda, locação, distrato, cobrança, condomínio ou qualquer documento relacionado a imóvel, a orientação jurídica pode ajudar a compreender riscos e próximos passos.</p>
          <p>O <a href="/quem-somos">Eryx Fernandes Advocacia</a> atua em Direito Imobiliário em Sorocaba e região, com suporte presencial e digital para análise de contratos, documentos e conflitos envolvendo imóveis. Para iniciar uma conversa, <a href="/contato">fale com o escritório</a>.</p>

          <aside class="article-final-cta">
            <h2>Precisa analisar um contrato imobiliário?</h2>
            <p>Fale com o Eryx Fernandes Advocacia e conte brevemente a situação. A orientação adequada começa pela leitura dos documentos e pela compreensão do contexto.</p>
            <div class="cta-actions">
              <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
              <a class="button button-ghost" href="/atuacao/direito-imobiliario">Ver atuação em Direito Imobiliário</a>
            </div>
          </aside>
        </article>
      </section>

      <section class="article-recommendations reveal-block">
        <div class="section-heading">
          <p>Leitura</p>
          <h2>Outras leituras recomendadas</h2>
        </div>
        <div class="editorial-article-grid article-recommendations-grid">
          ${recommendations.map(articleListingCardTemplate).join("")}
        </div>
      </section>
    </main>
    ${laborRightsArticleSchemaTemplate(article)}
    ${footerTemplate()}
  `;
}

const overtimeArticleFaqItems = [
  { question: "Como provar que eu fazia horas extras?", answer: "Cartões de ponto, mensagens, e-mails, escalas, registros de acesso, comprovantes de atividades e testemunhas podem ajudar. A utilidade de cada elemento depende da rotina e das circunstâncias do caso." },
  { question: "A empresa pode não registrar todas as horas no ponto?", answer: "O registro deve refletir a jornada efetivamente cumprida. Se houver divergência entre o ponto e a rotina real, outros documentos e depoimentos podem ser avaliados." },
  { question: "Testemunha pode ajudar a comprovar a jornada?", answer: "Pode. Uma pessoa que tenha acompanhado a rotina pode contribuir para esclarecer horários e atividades, mas a prova é analisada em conjunto com os demais elementos." },
  { question: "Banco de horas elimina o direito a horas extras?", answer: "Não automaticamente. É necessário verificar a forma de instituição, os registros, as compensações realizadas e o cumprimento das regras legais e coletivas aplicáveis." }
];

const harassmentArticleFaqItems = [
  { question: "Toda cobrança no trabalho é assédio moral?", answer: "Não. Cobranças profissionais, metas razoáveis e avaliações podem fazer parte da gestão. O método utilizado, a repetição, o contexto e a existência de humilhação ou abuso precisam ser avaliados." },
  { question: "Como provar assédio moral?", answer: "Mensagens, e-mails, comunicados, registros de ocorrências, documentos médicos e testemunhas podem ajudar a reconstruir o contexto. A análise considera o conjunto dos fatos." },
  { question: "Mensagens podem ser usadas como prova?", answer: "Podem ser relevantes quando preservadas de forma íntegra e contextualizada. Antes de divulgar ou editar o material, é prudente buscar orientação sobre a forma adequada de conservação." },
  { question: "O que fazer diante de humilhações recorrentes?", answer: "Registre datas, locais, pessoas presentes e o que ocorreu; preserve comunicações e avalie os canais internos disponíveis. A melhor providência depende do risco e do caso concreto." }
];

const workplaceAccidentArticleFaqItems = [
  { question: "O que é considerado acidente de trabalho?", answer: "Em termos gerais, é o evento relacionado ao trabalho que provoca lesão ou alteração funcional com perda ou redução, temporária ou permanente, da capacidade. A lei também prevê situações equiparadas." },
  { question: "A empresa precisa emitir CAT?", answer: "A empresa deve comunicar o acidente nos prazos legais. Se ela não fizer a comunicação, outras pessoas e entidades previstas em lei podem formalizá-la, sem que isso substitua a análise do caso." },
  { question: "Acidente de trabalho sempre gera estabilidade?", answer: "Não. A estabilidade depende dos requisitos legais e das circunstâncias do afastamento e do benefício. Existem situações específicas reconhecidas pela legislação e pela jurisprudência." },
  { question: "Quais documentos devem ser guardados?", answer: "Atestados, exames, prontuários, receitas, CAT, documentos do INSS, fotos, mensagens, comunicações com a empresa e dados de testemunhas podem ser relevantes." }
];

function laborTopicArticleTemplate({ articleHref, breadcrumbLabel, summary, body, faqItems, recommendations, whatsappMessage, finalTitle, finalText, lpHref, lpLabel, imageWidth, imageHeight }) {
  const article = articleByHref(articleHref);
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return `
    ${headerTemplate("/artigos")}
    <main id="conteudo" class="article-page">
      <section class="article-hero">
        <div class="editorial-hero-mark" aria-hidden="true"><img src="/monograma-mf.png" alt="" /></div>
        <div class="editorial-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="article-hero-inner">
          <div class="article-hero-copy">
            <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/artigos">Artigos</a><span>/</span><span>${breadcrumbLabel}</span></nav>
            <p class="article-type-label">Artigo jurídico</p>
            <p class="eyebrow article-category-label">${article.category}</p>
            <h1>${article.title}</h1>
            <p>${article.excerpt}</p>
            <div class="article-author">${authorAvatarTemplate()}<div><strong>${SITE_CONFIG.responsible}</strong><span>${professionalRegistrationLink()}</span></div></div>
            <div class="article-hero-meta"><span>${article.readingTime}</span><span>${article.date}</span></div>
          </div>
          <figure class="article-hero-image">${optimizedPicture(article.image, article.alt, { lazy: false, fetchPriority: "high", width: imageWidth, height: imageHeight })}</figure>
        </div>
      </section>
      <section class="article-shell">
        <aside class="article-summary" aria-label="Sumário do artigo"><span>Sumário</span>${summary.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}</aside>
        <article class="article-content">
          ${body}
          <h2 id="faq">Perguntas frequentes</h2>
          <div class="faq-list">${faqItems.map((item, index) => `<article class="faq-item ${index === 0 ? "is-open" : ""}" data-faq-item><button type="button" data-faq-toggle aria-expanded="${index === 0}"><span>${String(index + 1).padStart(2, "0")}</span>${item.question}</button><div class="faq-answer"><p>${item.answer}</p></div></article>`).join("")}</div>
          <aside class="article-final-cta"><h2>${finalTitle}</h2><p>${finalText}</p><div class="cta-actions"><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a><a class="button button-ghost" href="${lpHref}">${lpLabel}</a></div></aside>
        </article>
      </section>
      <section class="article-recommendations reveal-block"><div class="section-heading"><p>Leitura</p><h2>Outras leituras recomendadas</h2></div><div class="editorial-article-grid article-recommendations-grid">${recommendations.map(articleListingCardTemplate).join("")}</div></section>
    </main>
    ${articleStructuredDataTemplate(article, faqItems, breadcrumbLabel)}
    ${footerTemplate()}
  `;
}

function overtimeUnpaidArticleTemplate() {
  return laborTopicArticleTemplate({
    articleHref: "/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar",
    breadcrumbLabel: "Horas extras não pagas",
    summary: [["direito", "Quando existe direito"], ["controle", "Controle de jornada"], ["provas", "Provas da jornada"], ["banco", "Banco de horas"], ["calculo", "Cálculo e reflexos"], ["orientacao", "Quando buscar orientação"], ["faq", "Perguntas frequentes"]],
    body: `
      <p class="article-lead">Horas extras podem ser devidas quando o trabalhador permanece à disposição da empresa além da jornada aplicável e esse tempo não é corretamente compensado ou pago.</p>
      <p>A conclusão depende do contrato, da categoria profissional, dos horários efetivamente cumpridos e das regras de compensação. O primeiro passo não é estimar um valor isolado, mas reconstruir a rotina e comparar os registros com o trabalho realizado.</p>
      <h2 id="direito">Quando pode existir direito a horas extras?</h2>
      <p>A <a href="https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452compilado.htm" target="_blank" rel="noopener noreferrer">CLT</a> estabelece limites gerais para a jornada e permite serviço extraordinário dentro das condições legais. Podem merecer análise atividades antes da marcação de entrada, tarefas depois da saída, intervalos não usufruídos adequadamente, reuniões fora do horário e ordens executadas por mensagens ou sistemas remotos.</p>
      <p>Nem todo contato fora do expediente representa automaticamente tempo de trabalho. É necessário entender se havia efetiva atividade, disponibilidade exigida, frequência e possibilidade de controle.</p>
      ${articleInlineCtaTemplate("Sua jornada registrada não corresponde à rotina real?", "Organize os horários aproximados e os registros disponíveis. A análise individual ajuda a identificar quais informações são relevantes.", "Solicitar uma análise")}
      <h2 id="controle">Como funciona o controle de jornada?</h2>
      <p>O controle pode ocorrer por cartão manual, relógio eletrônico, aplicativo, sistema de acesso ou outro meio adotado pela empresa. O ponto deve representar os horários efetivamente praticados, inclusive as variações de entrada, saída e intervalos.</p>
      <p>Registros invariáveis, alterações sem explicação, marcações feitas por terceiros ou orientação para registrar um horário e continuar trabalhando são circunstâncias que precisam ser examinadas junto com as demais provas.</p>
      <h2 id="provas">Quais documentos e provas podem demonstrar a jornada?</h2>
      <p>Cartões de ponto e holerites são importantes, mas não são os únicos elementos possíveis. Mensagens, e-mails, escalas, agendas, registros de acesso ao prédio ou a sistemas, relatórios de atividade, localização e testemunhas podem ajudar a reconstruir a rotina.</p>
      <p>O material deve ser preservado com contexto, datas e identificação de origem. Capturas isoladas ou arquivos editados podem dificultar a compreensão. Também é útil registrar, de forma organizada, os dias da semana, os horários aproximados e as tarefas realizadas.</p>
      <h2 id="banco">Banco de horas elimina o pagamento?</h2>
      <p>Não necessariamente. É preciso verificar como o banco foi instituído, quais regras coletivas se aplicam, se o trabalhador conseguia acompanhar o saldo e se as horas foram compensadas dentro do período válido.</p>
      <p>Créditos que desaparecem, compensações que não ocorreram ou diferenças entre o sistema e a jornada real podem justificar uma conferência. A existência de um banco de horas, por si só, não resolve todas as divergências.</p>
      <h2 id="calculo">Como são calculadas as horas extras e seus reflexos?</h2>
      <p>O cálculo considera salário, divisor aplicável, adicional legal ou previsto em norma coletiva, quantidade de horas e período discutido. Quando habituais e juridicamente reconhecidas, horas extras podem repercutir em outras parcelas, conforme a natureza de cada verba e o caso concreto.</p>
      <p>Por isso, uma estimativa sem os registros e sem conhecer a categoria pode ser imprecisa. Diferenças também podem aparecer nas <a href="/atuacao/verbas-rescisorias">verbas rescisórias</a> quando a jornada não foi corretamente considerada durante o vínculo.</p>
      <h2 id="orientacao">Quando buscar orientação jurídica?</h2>
      <p>Vale buscar orientação quando o ponto não reflete a rotina, existem tarefas frequentes fora do horário, o banco de horas não é transparente ou os pagamentos não correspondem aos registros. Conheça a <a href="/atuacao/horas-extras">atuação em casos de horas extras</a> e veja também a página de <a href="/atuacao/direito-trabalhista-trabalhadores">Direito Trabalhista para Trabalhadores</a>.</p>
    `,
    faqItems: overtimeArticleFaqItems,
    recommendations: [articleByHref("/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"), articleByHref("/artigos/fgts-nao-depositado-como-conferir")],
    whatsappMessage: "Vim pelo artigo sobre horas extras não pagas e gostaria de analisar minha jornada.",
    finalTitle: "Precisa conferir horas extras não pagas?",
    finalText: "A análise considera a jornada real, os registros, as regras de compensação e as provas disponíveis, sem promessas de resultado.",
    lpHref: "/atuacao/horas-extras",
    lpLabel: "Ver atuação em horas extras",
    imageWidth: 1200,
    imageHeight: 620
  });
}

function workplaceHarassmentArticleTemplate() {
  return laborTopicArticleTemplate({
    articleHref: "/artigos/assedio-moral-no-trabalho-como-identificar",
    breadcrumbLabel: "Assédio moral no trabalho",
    summary: [["conceito", "Como identificar"], ["cobranca", "Cobrança ou abuso"], ["exemplos", "Condutas de atenção"], ["contexto", "Repetição e contexto"], ["provas", "Como preservar provas"], ["orientacao", "O que fazer"], ["faq", "Perguntas frequentes"]],
    body: `
      <p class="article-lead">Assédio moral no trabalho não é qualquer conflito ou cobrança: a análise considera a forma da conduta, seu contexto, sua repetição e o impacto sobre a dignidade do trabalhador.</p>
      <p>Humilhações, perseguições, ameaças, isolamento deliberado e exposição pública podem formar um quadro abusivo. Uma situação desconfortável isolada, porém, não deve ser classificada automaticamente sem compreender os fatos e as provas.</p>
      <h2 id="conceito">O que pode caracterizar assédio moral no trabalho?</h2>
      <p>O assédio pode ocorrer por comportamentos abusivos que degradam o ambiente de trabalho, desqualificam a pessoa ou criam pressão por meio de medo, constrangimento ou exclusão. Pode partir de superiores, colegas, subordinados ou até estar relacionado a práticas organizacionais.</p>
      <p>O <a href="https://www.tst.jus.br/pt/materiais-educativos" target="_blank" rel="noopener noreferrer">Tribunal Superior do Trabalho</a> disponibiliza materiais que ajudam a diferenciar práticas de gestão de situações de violência, assédio e discriminação.</p>
      <h2 id="cobranca">Qual é a diferença entre cobrança profissional e conduta abusiva?</h2>
      <p>A empresa pode distribuir tarefas, avaliar desempenho, cobrar prazos e estabelecer metas razoáveis. Essas medidas não constituem assédio por si mesmas. O problema pode surgir quando a cobrança utiliza insultos, ameaças, exposição vexatória, comparações humilhantes ou critérios discriminatórios.</p>
      <p>É necessário avaliar não apenas o conteúdo da cobrança, mas o modo como ela ocorre, sua frequência, as pessoas atingidas e se existe finalidade de punir, desqualificar ou excluir.</p>
      ${articleInlineCtaTemplate("O ambiente de trabalho se tornou hostil?", "Preserve os registros e organize uma cronologia antes de tomar uma decisão. Cada situação precisa ser analisada com cuidado e confidencialidade.", "Conversar com o escritório")}
      <h2 id="exemplos">Quais condutas merecem atenção?</h2>
      <p>Humilhações diante de colegas, apelidos ofensivos, ameaças reiteradas, divulgação pública de resultados para constranger, retirada injustificada de tarefas, isolamento, boatos e punições sem fundamento podem ser relevantes.</p>
      <p>Também merecem análise mensagens enviadas para intimidar, cobranças reiteradas em tom ofensivo e exigências usadas para perseguir uma pessoa específica. A presença de um exemplo não determina, sozinha, a conclusão jurídica.</p>
      <h2 id="contexto">Por que repetição e contexto são importantes?</h2>
      <p>O assédio moral costuma ser compreendido a partir de um processo, e não apenas de uma frase retirada do contexto. Datas, frequência, duração, hierarquia, testemunhas e consequências profissionais ou pessoais ajudam a formar o quadro.</p>
      <p>Um episódio grave também pode produzir outras consequências jurídicas, mesmo quando não se encaixa no padrão reiterado normalmente associado ao assédio moral. A qualificação depende do caso concreto.</p>
      <h2 id="provas">Como preservar mensagens, documentos e testemunhas?</h2>
      <p>Guarde mensagens e e-mails completos, comunicados, advertências, avaliações e protocolos internos. Registre uma cronologia com datas, locais, pessoas presentes e descrição objetiva dos fatos. Documentos médicos podem ser relevantes quando houver impacto na saúde.</p>
      <p>Evite editar arquivos ou divulgar acusações publicamente. Identificar colegas que presenciaram os acontecimentos também pode ajudar, mas não se deve pressionar testemunhas nem produzir versões combinadas.</p>
      <h2 id="orientacao">O que fazer e quando buscar orientação?</h2>
      <p>Dependendo do risco, canais internos, sindicato e autoridades competentes podem ser considerados. Antes de pedir demissão, abandonar o emprego ou expor o material, é prudente compreender as consequências de cada caminho.</p>
      <p>Conheça a <a href="/atuacao/assedio-moral-no-trabalho">orientação em casos de assédio moral</a> e a atuação mais ampla em <a href="/atuacao/direito-trabalhista-trabalhadores">Direito Trabalhista para Trabalhadores</a>. Quando as condutas tornam inviável a continuidade do vínculo, também pode ser útil entender, sem presumir seu cabimento, como funciona a <a href="/artigos/rescisao-indireta-sorocaba">rescisão indireta</a>.</p>
    `,
    faqItems: harassmentArticleFaqItems,
    recommendations: [articleByHref("/artigos/rescisao-indireta-sorocaba"), articleByHref("/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica")],
    whatsappMessage: "Vim pelo artigo sobre assédio moral no trabalho e gostaria de relatar minha situação.",
    finalTitle: "Precisa avaliar uma situação de assédio moral?",
    finalText: "A orientação parte do contexto, da repetição das condutas e das provas disponíveis. O atendimento é individual e confidencial.",
    lpHref: "/atuacao/assedio-moral-no-trabalho",
    lpLabel: "Ver atuação em assédio moral",
    imageWidth: 1012,
    imageHeight: 675
  });
}

function workplaceAccidentRightsArticleTemplate() {
  return laborTopicArticleTemplate({
    articleHref: "/artigos/acidente-de-trabalho-direitos-do-trabalhador",
    breadcrumbLabel: "Acidente de trabalho",
    summary: [["conceito", "O que é acidente"], ["registro", "Registro do ocorrido"], ["cat", "CAT"], ["afastamento", "Afastamento e INSS"], ["direitos", "Possíveis direitos"], ["documentos", "Documentos e provas"], ["orientacao", "Quando buscar orientação"], ["faq", "Perguntas frequentes"]],
    body: `
      <p class="article-lead">Após um acidente de trabalho, a prioridade é o atendimento de saúde. Em seguida, registrar o ocorrido e preservar documentos ajuda a esclarecer as repercussões trabalhistas e previdenciárias.</p>
      <p>Nem todo acidente produz os mesmos direitos. A relação com o trabalho, a gravidade da lesão, o afastamento, o benefício concedido e as consequências para a capacidade profissional precisam ser avaliados individualmente.</p>
      <h2 id="conceito">O que é considerado acidente de trabalho?</h2>
      <p>A <a href="https://www.planalto.gov.br/ccivil_03/leis/l8213compilado.htm" target="_blank" rel="noopener noreferrer">Lei nº 8.213/1991</a> define, em termos gerais, o acidente ocorrido pelo exercício do trabalho que provoca lesão corporal ou alteração funcional capaz de causar morte ou perda ou redução, temporária ou permanente, da capacidade.</p>
      <p>A legislação também contempla doenças profissionais ou relacionadas às condições de trabalho e algumas situações equiparadas, como determinados eventos durante serviço externo, viagem a trabalho ou percurso. O enquadramento exige verificar o nexo e as circunstâncias concretas.</p>
      <h2 id="registro">Por que registrar o ocorrido?</h2>
      <p>Informar a empresa, identificar testemunhas, guardar fotos do local e anotar a dinâmica do acidente contribuem para preservar a memória dos fatos. Quando houver atendimento médico, relate com precisão como o evento aconteceu e quais atividades eram realizadas.</p>
      <p>Registros feitos próximos ao ocorrido costumam ser mais úteis do que uma reconstrução tardia. Isso não significa divulgar imagens sensíveis, mas conservar o material de forma segura.</p>
      <h2 id="cat">O que é a CAT e quem pode emitir?</h2>
      <p>A Comunicação de Acidente de Trabalho registra o evento perante a Previdência Social. A empresa tem dever legal de comunicar, mas a lei prevê que, na falta dessa providência, o próprio acidentado, dependentes, sindicato, médico ou autoridade pública também possam formalizar a comunicação.</p>
      <p>A emissão da CAT é importante, mas não determina sozinha todos os direitos nem substitui a avaliação médica, previdenciária e jurídica.</p>
      ${articleInlineCtaTemplate("Sofreu um acidente relacionado ao trabalho?", "Cuide da saúde, preserve os documentos e organize as informações do ocorrido. A análise jurídica pode começar com o material disponível.", "Solicitar orientação")}
      <h2 id="afastamento">Como funciona o afastamento e a análise do INSS?</h2>
      <p>Atestados, duração da incapacidade e categoria do segurado influenciam o caminho previdenciário. Quando o afastamento ultrapassa o período de responsabilidade do empregador, pode haver necessidade de requerimento e avaliação pelo INSS.</p>
      <p>A espécie do benefício reconhecido pode produzir efeitos trabalhistas diferentes. Por isso, cartas de concessão, decisões, laudos e comunicações do INSS devem ser guardados.</p>
      <h2 id="direitos">Quais direitos podem existir após o acidente?</h2>
      <p>Conforme os requisitos, podem ser discutidos benefício previdenciário, manutenção de depósitos de FGTS durante afastamento acidentário, estabilidade após a cessação do benefício, retorno compatível com limitações e eventuais reparações quando houver fundamento jurídico.</p>
      <p>Estabilidade, indenização e benefício não são automáticos em todo acidente. A Lei nº 8.213/1991 prevê garantia de manutenção do contrato em condições específicas, e outras situações dependem da prova do nexo, do dano e das circunstâncias.</p>
      <h2 id="documentos">Quais documentos e provas devem ser preservados?</h2>
      <p>Guarde atestados, exames, prontuários, receitas, relatórios, CAT, documentos do INSS, holerites e carteira de trabalho. Fotos, vídeos, comunicações com a empresa, ordens de serviço, registros de treinamento e nomes de testemunhas também podem ser relevantes.</p>
      <p>Se houver sequelas ou limitações no retorno, conserve as recomendações médicas e os registros das atividades atribuídas. A evolução clínica ao longo do tempo pode ser tão importante quanto o atendimento inicial.</p>
      <h2 id="orientacao">Quando buscar orientação jurídica?</h2>
      <p>A orientação pode ser útil quando a CAT não foi emitida, há dúvida sobre o benefício, ocorreu dispensa após o afastamento, existem limitações no retorno ou o acidente deixou prejuízos relevantes. Conheça a <a href="/atuacao/acidente-de-trabalho">atuação em casos de acidente de trabalho</a> e veja também <a href="/atuacao/direito-trabalhista-trabalhadores">Direito Trabalhista para Trabalhadores</a>.</p>
    `,
    faqItems: workplaceAccidentArticleFaqItems,
    recommendations: [articleByHref("/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"), articleByHref("/artigos/nr-01-novas-exigencias-empresas-sorocaba")],
    whatsappMessage: "Vim pelo artigo sobre acidente de trabalho e gostaria de analisar minha situação.",
    finalTitle: "Precisa entender os efeitos de um acidente de trabalho?",
    finalText: "Documentos médicos, registros do ocorrido, afastamento e benefício precisam ser examinados conforme as circunstâncias individuais.",
    lpHref: "/atuacao/acidente-de-trabalho",
    lpLabel: "Ver atuação em acidente de trabalho",
    imageWidth: 1200,
    imageHeight: 632
  });
}

function alimonyLateArticleTemplate() {
  const article = articleByHref("/artigos/pensao-alimenticia-atrasada-como-cobrar");
  const whatsappUrl = getWhatsAppUrl("Vim pelo Google e quero informações sobre pensão alimentícia atrasada.");
  const faq = [["Um mês de pensão atrasada já pode ser cobrado?","O atraso pode ser analisado desde o descumprimento da obrigação, considerando o acordo ou decisão e as circunstâncias do caso."],["Pagamento parcial conta como atraso?","Pode deixar um saldo em aberto. Guardar os comprovantes ajuda a identificar o que foi pago e o que ainda é devido."],["É possível cobrar pensão sem acordo judicial?","Acordos verbais podem trazer dificuldade de prova, mas mensagens, transferências e outros registros podem ser relevantes."],["A pensão atrasada pode gerar prisão?","A prisão civil não é automática. Existem requisitos específicos, e a via adequada depende das parcelas e da análise do caso."],["O valor pode ser reduzido por conta própria?","Não. Uma alteração relevante pode justificar revisão, mas a obrigação vigente não deve ser modificada unilateralmente."],["Quando procurar um advogado?","Quando há atraso, pagamento incompleto, acordo descumprido ou dúvida sobre o caminho adequado para cobrar ou regularizar a situação."]];
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))};
  const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${SITE_CONFIG.siteUrl}/`},{"@type":"ListItem",position:2,name:"Artigos",item:`${SITE_CONFIG.siteUrl}/artigos`},{"@type":"ListItem",position:3,name:"Direito de Família",item:`${SITE_CONFIG.siteUrl}/atuacao/direito-de-familia`},{"@type":"ListItem",position:4,name:"Pensão alimentícia atrasada",item:`${SITE_CONFIG.siteUrl}${article.href}/`} ]};
  return `${headerTemplate("/artigos")}
    <main id="conteudo" class="article-page"><section class="article-hero"><div class="editorial-hero-mark" aria-hidden="true"><img src="/monograma-mf.png" alt="" /></div><div class="article-hero-inner"><div class="article-hero-copy"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/artigos">Artigos</a><span>/</span><a href="/atuacao/direito-de-familia">Direito de Família</a><span>/</span><span>Pensão alimentícia atrasada</span></nav><p class="article-type-label">Artigo jurídico</p><p class="eyebrow article-category-label">Direito de Família</p><h1>${article.title}</h1><p>${article.excerpt}</p><div class="article-author">${authorAvatarTemplate()}<div><strong>${SITE_CONFIG.responsible}</strong><span>${professionalRegistrationLink()}</span></div></div><div class="article-hero-meta"><span>${article.readingTime}</span><span>${article.date}</span></div></div><figure class="article-hero-image"><img src="${article.image}" alt="${article.alt}" width="1200" height="628" fetchpriority="high" decoding="async" /></figure></div></section>
      <section class="article-shell"><aside class="article-summary" aria-label="Sumário do artigo"><span>Sumário</span><a href="#atraso">O que é atraso</a><a href="#acordo">Acordo verbal</a><a href="#documentos">Documentos</a><a href="#cobranca">Cobrança judicial</a><a href="#prisao">Prisão e patrimônio</a><a href="#revisao">Revisão</a><a href="#sorocaba">Atendimento</a><a href="#faq">Perguntas frequentes</a></aside><article class="article-content"><p class="article-lead">A pensão não foi paga no dia combinado, veio menor do que deveria ou está acumulando mês após mês?</p><p>Essas situações podem gerar uma dívida e precisam ser vistas com atenção. A cobrança depende do acordo ou da decisão existente, do período em aberto e dos comprovantes disponíveis. Deixar as parcelas acumularem costuma tornar tudo mais difícil. Neste artigo, explicamos as principais medidas que podem ser avaliadas e quais informações ajudam a entender o problema.</p><h2 id="atraso">O que é considerado atraso da pensão alimentícia?</h2><p>Há atraso quando o pagamento não acontece no prazo e na forma definidos. Isso pode ser falta total de pagamento, valor menor, pagamento depois do vencimento ou despesas previstas que não foram cumpridas. Nem toda diferença leva à mesma medida, por isso é preciso conferir o que foi acordado ou decidido.</p><h2>Pagamento parcial também pode gerar dívida?</h2><p>Sim. Pagar apenas uma parte não significa que a obrigação foi quitada. O saldo deve ser calculado e os comprovantes guardados, principalmente quando as diferenças se repetem.</p><h2 id="acordo">É possível cobrar pensão definida apenas por acordo verbal?</h2><p>Um acordo de boca não é automaticamente ignorado, mas pode ser mais difícil de provar e cobrar. Conversas, transferências, recibos e mensagens podem ajudar a mostrar o compromisso. A formalização jurídica traz mais segurança para todos.</p><h2 id="documentos">Quais documentos reunir antes de cobrar?</h2><p>Normalmente são analisados documento de identificação, certidão de nascimento, acordo ou decisão, comprovantes bancários, extratos, planilha das parcelas, mensagens, comprovantes de despesas, dados do devedor e registros de pagamentos parciais. A documentação varia conforme o caso.</p><h2 id="cobranca">Como funciona a cobrança judicial?</h2><p>A cobrança pode seguir caminhos diferentes conforme as parcelas, o período da dívida, o título existente e a situação de inadimplemento. Um advogado pode avaliar qual medida faz sentido e explicar os próximos passos sem tratar todos os casos da mesma forma.</p>${articleInlineCtaTemplate("A pensão não está sendo paga corretamente?","Organize os comprovantes, o acordo ou a decisão existente e apresente a situação ao escritório para compreender quais medidas podem ser avaliadas.","Falar com o escritório")}<h2 id="prisao">Qual é a diferença entre prisão e cobrança patrimonial?</h2><p>A prisão civil não é consequência automática de qualquer dívida de pensão: há requisitos específicos. Em outras situações, podem ser avaliadas medidas patrimoniais. Bloqueio, penhora e outras providências dependem de decisão e análise do processo.</p><h2>Quantas parcelas atrasadas podem ser cobradas?</h2><p>Parcelas recentes e antigas podem receber tratamentos diferentes. A extensão da cobrança deve ser avaliada com o acordo, a decisão e a data de cada parcela.</p><h2>O que acontece se o devedor paga apenas parte?</h2><p>O saldo não desaparece. Registrar cada pagamento e organizar a diferença ajuda a evitar confusão e permite uma avaliação mais correta.</p><h2 id="revisao">E se a pessoa diz que não pode mais pagar?</h2><p>Perda de emprego, redução de renda, doença ou novas despesas podem justificar uma análise de revisão. Ainda assim, a pensão não deve ser reduzida ou interrompida por decisão unilateral.</p><h2>Quando procurar um advogado?</h2><p>Procure orientação quando houver atraso, pagamento parcial, descumprimento de acordo ou dúvidas sobre cobrança. Para conhecer o serviço, veja a <a href="/atuacao/pensao-alimenticia">atuação em casos de pensão alimentícia</a> e fale com um <a href="/atuacao/pensao-alimenticia">advogado para pensão alimentícia em Sorocaba</a>.</p><h2 id="sorocaba">Atendimento para pensão alimentícia em Sorocaba</h2><p>O escritório atende casos de pedido, cobrança, revisão, exoneração, defesa e descumprimento de acordo em Sorocaba e região. Conheça também a <a href="/atuacao/direito-de-familia">atuação em Direito de Família</a>.</p><h2 id="faq">Perguntas frequentes</h2><div class="faq-list">${faq.map(([q,a],i)=>`<article class="faq-item ${i===0?"is-open":""}" data-faq-item><button type="button" data-faq-toggle aria-expanded="${i===0}"><span>${String(i+1).padStart(2,"0")}</span>${q}</button><div class="faq-answer"><p>${a}</p></div></article>`).join("")}</div><aside class="article-final-cta"><h2>Precisa cobrar pensão alimentícia atrasada?</h2><p>A medida adequada depende do acordo ou decisão existente, das parcelas em atraso, dos comprovantes e das circunstâncias de cada família. Fale com o escritório para compreender os próximos passos possíveis.</p><div class="cta-actions"><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar sobre pensão alimentícia</a><a class="button button-ghost" href="/atuacao/pensao-alimenticia">Conhecer a atuação em pensão alimentícia</a></div></aside></article></section><section class="article-recommendations reveal-block"><div class="section-heading"><p>Leituras relacionadas</p><h2>Outros conteúdos de Direito de Família</h2></div><div class="editorial-article-grid article-recommendations-grid">${[articleByHref("/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca")].map(articleListingCardTemplate).join("")}</div></section></main>${laborRightsArticleSchemaTemplate(article)}<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@graph":[breadcrumbSchema,faqSchema]}).replace(/</g,"\\u003c")}</script>${footerTemplate()}`;
}

function familyDecisionsArticleTemplate() {
  const article = articleByHref("/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca");
  const recommendations = [
    articleByHref("/artigos/rescisao-indireta-sorocaba"),
    articleByHref("/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"),
    articleByHref("/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar")
  ];

  return `
    ${headerTemplate("/artigos")}
    <main id="conteudo" class="article-page">
      <section class="article-hero">
        <div class="editorial-hero-mark" aria-hidden="true">
          <img src="/monograma-mf.png" alt="" />
        </div>
        <div class="editorial-hero-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="article-hero-inner">
          <div class="article-hero-copy">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/artigos">Artigos</a>
              <span>/</span>
              <span>Divórcio, guarda e partilha</span>
            </nav>
            <p class="article-type-label">Artigo jurídico</p>
            <p class="eyebrow article-category-label">${article.category}</p>
            <h1>${article.title}</h1>
            <p>${article.excerpt}</p>
            <div class="article-author">
              ${authorAvatarTemplate()}
              <div>
                <strong>${SITE_CONFIG.responsible}</strong>
                <span>${professionalRegistrationLink()}</span>
              </div>
            </div>
            <div class="article-hero-meta">
              <span>${article.readingTime}</span>
              <span>${article.date}</span>
            </div>
          </div>
          <figure class="article-hero-image">
            ${optimizedPicture(article.image, article.alt, { lazy: false, fetchPriority: "high" })}
          </figure>
        </div>
      </section>

      <section class="article-shell">
        <aside class="article-summary" aria-label="Sumário do artigo">
          <span>Sumário</span>
          <a href="#divorcio">Divórcio</a>
          <a href="#guarda">Guarda</a>
          <a href="#pensao">Pensão</a>
          <a href="#partilha">Partilha</a>
          <a href="#uniao-estavel">União estável</a>
          <a href="#acordos">Acordos</a>
          <a href="#documentos">Documentos</a>
          <a href="#orientacao">Antes de decidir</a>
          <a href="#conclusao">Conclusão</a>
        </aside>

        <article class="article-content">
          <p class="article-lead">Decisões familiares raramente envolvem apenas documentos.</p>
          <p>Divórcio, guarda, pensão alimentícia e partilha de bens costumam tocar rotina, vínculos, patrimônio, responsabilidades e expectativas. Por isso, a condução jurídica precisa ser técnica, mas também cuidadosa.</p>
          <p>Buscar orientação antes de tomar decisões importantes ajuda a compreender direitos, deveres, riscos e caminhos possíveis.</p>
          <p>Em Sorocaba e região, quem enfrenta uma demanda familiar pode contar com análise jurídica individualizada para organizar informações, documentos e próximos passos. A orientação de um <a href="/atuacao/direito-de-familia">advogado de família em Sorocaba</a> ajuda a compreender o contexto antes de assumir compromissos ou definir acordos.</p>

          ${articleInlineCtaTemplate(
            "Precisa resolver uma questão familiar com segurança?",
            "Conte brevemente a situação. A orientação adequada começa pela escuta e pela análise cuidadosa do contexto.",
            "Falar pelo WhatsApp"
          )}

          <h2 id="divorcio">Divórcio: por onde começar?</h2>
          <p>O divórcio pode envolver diferentes caminhos, dependendo da existência de consenso, filhos menores, bens a dividir e documentos disponíveis.</p>
          <p>Antes de iniciar qualquer medida, é importante compreender:</p>
          <ul>
            <li>se há acordo entre as partes;</li>
            <li>se existem filhos menores;</li>
            <li>qual é o regime de bens;</li>
            <li>quais bens foram adquiridos durante a relação;</li>
            <li>se há dívidas ou obrigações comuns;</li>
            <li>se existe necessidade de pensão alimentícia;</li>
            <li>quais documentos já estão disponíveis.</li>
          </ul>
          <p>Nem todo divórcio precisa seguir o mesmo caminho. Alguns casos podem ser resolvidos de forma extrajudicial, enquanto outros exigem atuação judicial.</p>
          <p>A análise do contexto ajuda a definir a rota mais adequada.</p>

          <h2 id="guarda">Guarda e convivência familiar</h2>
          <p>Quando há filhos, a discussão familiar exige ainda mais cuidado.</p>
          <p>A guarda e a convivência familiar devem considerar a rotina da criança ou adolescente, a participação dos responsáveis, a comunicação entre os pais e as necessidades concretas da família.</p>
          <p>Alguns pontos costumam ser analisados:</p>
          <ul>
            <li>rotina escolar;</li>
            <li>moradia;</li>
            <li>horários de convivência;</li>
            <li>responsabilidades de cada responsável;</li>
            <li>tomada de decisões importantes;</li>
            <li>despesas dos filhos;</li>
            <li>comunicação entre os pais;</li>
            <li>eventuais acordos anteriores.</li>
          </ul>
          <p>O objetivo jurídico é organizar responsabilidades com clareza, evitando incertezas que possam gerar novos conflitos.</p>

          <h2 id="pensao">Pensão alimentícia</h2>
          <p>A pensão alimentícia pode surgir em diferentes contextos familiares.</p>
          <p>Ela pode envolver filhos, ex-cônjuges ou outras situações previstas em lei. A análise costuma considerar necessidade, possibilidade, renda, despesas e realidade familiar.</p>
          <p>A pensão pode envolver:</p>
          <ul>
            <li>fixação inicial;</li>
            <li>revisão;</li>
            <li>cobrança;</li>
            <li>exoneração;</li>
            <li>acordo;</li>
            <li>execução de valores em atraso.</li>
          </ul>
          <p>Mudanças na renda, nas despesas ou na rotina familiar podem justificar nova análise.</p>
          <p>Cada situação precisa ser avaliada conforme documentos, histórico e realidade das partes envolvidas.</p>

          ${articleInlineCtaTemplate(
            "Não sabe quais documentos reunir?",
            "Mesmo sem todos os documentos, é possível iniciar a conversa para entender o contexto e orientar os próximos passos.",
            "Enviar mensagem ao escritório"
          )}

          <h2 id="partilha">Partilha de bens</h2>
          <p>A partilha de bens exige atenção ao regime patrimonial da relação.</p>
          <p>O regime de bens, a data de aquisição do patrimônio, a origem dos recursos, a existência de financiamento, dívidas e documentos de propriedade podem influenciar diretamente a análise.</p>
          <p>Pontos importantes:</p>
          <ul>
            <li>regime de bens;</li>
            <li>imóveis;</li>
            <li>veículos;</li>
            <li>contas bancárias;</li>
            <li>investimentos;</li>
            <li>empresas ou quotas societárias;</li>
            <li>dívidas;</li>
            <li>financiamentos;</li>
            <li>bens adquiridos antes ou durante a relação;</li>
            <li>documentos comprobatórios.</li>
          </ul>
          <p>A partilha não deve ser tratada apenas como divisão de patrimônio. Ela exige leitura jurídica, organização documental e clareza sobre os efeitos de cada escolha.</p>

          <h2 id="uniao-estavel">União estável e efeitos patrimoniais</h2>
          <p>A união estável também pode gerar consequências jurídicas.</p>
          <p>Em alguns casos, é necessário discutir reconhecimento, dissolução, partilha, alimentos ou direitos relacionados ao período de convivência.</p>
          <p>A análise pode envolver:</p>
          <ul>
            <li>tempo de convivência;</li>
            <li>intenção de constituir família;</li>
            <li>documentos em comum;</li>
            <li>patrimônio adquirido;</li>
            <li>dependência econômica;</li>
            <li>filhos;</li>
            <li>registros públicos ou privados;</li>
            <li>provas da relação.</li>
          </ul>
          <p>Quando há dúvida sobre a existência ou os efeitos da união estável, a orientação jurídica ajuda a compreender riscos e possibilidades. Para conhecer outras frentes jurídicas, veja as <a href="/atuacao">áreas de atuação</a> do escritório.</p>

          <h2 id="acordos">Acordos familiares</h2>
          <p>Nem toda demanda familiar precisa começar pelo conflito.</p>
          <p>Quando há possibilidade de diálogo, acordos bem construídos podem trazer mais clareza para as partes e reduzir desgastes futuros.</p>
          <p>Um acordo familiar pode tratar de:</p>
          <ul>
            <li>divórcio;</li>
            <li>guarda;</li>
            <li>convivência;</li>
            <li>alimentos;</li>
            <li>partilha;</li>
            <li>responsabilidades;</li>
            <li>prazos;</li>
            <li>obrigações financeiras.</li>
          </ul>
          <p>Mesmo em acordos, a análise jurídica é importante para evitar cláusulas confusas, obrigações desequilibradas ou pontos sem definição.</p>

          <h2 id="documentos">Quais documentos podem ajudar?</h2>
          <p>Alguns documentos costumam facilitar a análise inicial em demandas familiares.</p>
          <p>Podem ajudar:</p>
          <ul>
            <li>documentos pessoais;</li>
            <li>certidão de casamento;</li>
            <li>documentos dos filhos;</li>
            <li>comprovantes de renda;</li>
            <li>comprovantes de despesas;</li>
            <li>documentos de imóveis;</li>
            <li>documentos de veículos;</li>
            <li>extratos ou comprovantes patrimoniais;</li>
            <li>mensagens ou registros relevantes;</li>
            <li>acordos anteriores;</li>
            <li>decisões judiciais existentes;</li>
            <li>comprovantes de pagamento de pensão, quando houver.</li>
          </ul>
          <p>A falta de algum documento não impede a conversa inicial. O escritório pode orientar quais informações são mais importantes para o caso.</p>

          <h2 id="orientacao">Por que buscar orientação antes de decidir?</h2>
          <p>Em questões familiares, decisões rápidas podem gerar efeitos duradouros.</p>
          <p>Antes de assinar um acordo, sair de casa, definir guarda informalmente, combinar valores de pensão ou discutir patrimônio, é importante entender as consequências jurídicas.</p>
          <p>A orientação ajuda a organizar o cenário, avaliar riscos e definir próximos passos com mais segurança.</p>
          <p>Em muitos casos, a clareza inicial reduz conflitos e evita decisões tomadas apenas pelo impulso do momento.</p>

          <h2 id="conclusao">Conclusão</h2>
          <p>Divórcio, guarda, pensão alimentícia e partilha de bens exigem atenção técnica e condução responsável.</p>
          <p>Cada família tem uma realidade própria. Por isso, a análise deve considerar documentos, rotina, patrimônio, responsabilidades e objetivos envolvidos.</p>
          <p>O <a href="/quem-somos">Eryx Fernandes Advocacia</a> atua em Direito de Família em Sorocaba e região, com suporte presencial e digital para demandas familiares sensíveis. Para iniciar uma conversa, <a href="/contato">fale com o escritório</a>.</p>

          <aside class="article-final-cta">
            <h2>Precisa de orientação sobre uma questão familiar?</h2>
            <p>Fale com o Eryx Fernandes Advocacia e conte brevemente a situação. A orientação adequada começa pela escuta, pela clareza e pela análise responsável do contexto.</p>
            <div class="cta-actions">
              <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
              <a class="button button-ghost" href="/atuacao/direito-de-familia">Ver atuação em Direito de Família</a>
            </div>
          </aside>
        </article>
      </section>

      <section class="article-recommendations reveal-block">
        <div class="section-heading">
          <p>Leitura</p>
          <h2>Outras leituras recomendadas</h2>
        </div>
        <div class="editorial-article-grid article-recommendations-grid">
          ${recommendations.map(articleListingCardTemplate).join("")}
        </div>
      </section>
    </main>
    ${laborRightsArticleSchemaTemplate(article)}
    ${footerTemplate()}
  `;
}

function internalTemplate(path) {
  const page = internalPages[path] || internalPages["/quem-somos"];
  return `
    ${headerTemplate(path)}
    <main id="conteudo">
      <section class="internal-hero">
        <div>
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>${page.label}</span>
          </nav>
          <h1>${page.title}</h1>
          <p>${page.subtitle}</p>
        </div>
      </section>

      <section class="internal-content">
        <div class="internal-main">
          <p class="eyebrow">${page.label}</p>
          <h2>${page.bodyTitle}</h2>
          <p>${page.body}</p>
          ${page.showPracticeLinks ? `<div class="internal-practice-list">${practiceItems.map(internalPracticeLink).join("")}</div>` : ""}
          ${page.showArticles ? `<div class="article-grid compact">${articles.map(articleCardTemplate).join("")}</div>` : ""}
          ${
            page.isContact
              ? `<div class="contact-panel">
                  <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>
                  <a href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">WhatsApp: ${SITE_CONFIG.whatsapp}</a>
                  <a href="tel:+5515996874689">${SITE_CONFIG.phone}</a>
                  <span>${SITE_CONFIG.address}</span>
                  <span>${SITE_CONFIG.responsible} · ${professionalRegistrationLink()}</span>
                </div>`
              : ""
          }
        </div>
        <aside class="internal-aside">
          <img src="/monograma-mf.png" alt="" aria-hidden="true" />
          <h2>Informações principais</h2>
          <ul>
            ${page.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </aside>
      </section>

      ${finalCtaTemplate()}
    </main>
    ${footerTemplate()}
  `;
}

function internalPracticeLink(item) {
  return `
    <a href="${item.href}">
      <span>${item.shortTitle}</span>
      <small>${item.phrase}</small>
    </a>
  `;
}

function absoluteUrl(path) {
  return new URL(path, window.location.origin).href;
}

function ensureMetaByName(name) {
  let meta = document.head.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  return meta;
}

function ensureMetaByProperty(property) {
  let meta = document.head.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  return meta;
}

function setMetaName(name, content) {
  ensureMetaByName(name).setAttribute("content", content);
}

function setMetaProperty(property, content) {
  ensureMetaByProperty(property).setAttribute("content", content);
}

function setCanonical(path) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", absoluteUrl(path));
}

function routeSocialImage(path) {
  const article = articles.find((item) => item.href === path);
  if (article) return article.image;
  if (laborLandingPages[path]) return "/home-retrato-advogado.jpg";
  if (path === "/atuacao/pensao-alimenticia") return "/home-retrato-advogado.jpg";
  if (path === "/contato" || path === "/quem-somos") return "/home-retrato-advogado.jpg";
  return "/home-cta-advogado.jpg";
}

function updateSocialMeta(path) {
  const description = ensureMetaByName("description").getAttribute("content") || "";
  const title = document.title;
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(routeSocialImage(path));
  const type = path.startsWith("/artigos/") ? "article" : "website";

  setCanonical(path);
  setMetaName("robots", "index, follow");
  setMetaProperty("og:locale", "pt_BR");
  setMetaProperty("og:type", type);
  setMetaProperty("og:site_name", SITE_CONFIG.firmName);
  setMetaProperty("og:title", title);
  setMetaProperty("og:description", description);
  setMetaProperty("og:url", canonicalUrl);
  setMetaProperty("og:image", imageUrl);
  setMetaName("twitter:card", "summary_large_image");
  setMetaName("twitter:title", title);
  setMetaName("twitter:description", description);
  setMetaName("twitter:image", imageUrl);
}

function renderGlobalBusinessSchema() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_CONFIG.siteUrl}/#organization`,
    name: SITE_CONFIG.firmName,
    legalName: SITE_CONFIG.firmName,
    url: SITE_CONFIG.siteUrl,
    logo: absoluteUrl("/favicon-512.png"),
    image: absoluteUrl("/home-cta-advogado.jpg"),
    telephone: "+55 15 99687-4689",
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Américo de Carvalho, 65 - Sala 1",
      addressLocality: "Sorocaba",
      addressRegion: "SP",
      postalCode: "18045-000",
      addressCountry: "BR"
    },
    areaServed: {
      "@type": "City",
      name: "Sorocaba"
    },
    sameAs: [SITE_CONFIG.instagramUrl],
    availableLanguage: "pt-BR"
  };
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_CONFIG.siteUrl}/quem-somos#eryx-fernandes`,
    name: SITE_CONFIG.authorName,
    honorificPrefix: "Dr.",
    jobTitle: "Advogado",
    identifier: SITE_CONFIG.oab,
    url: `${SITE_CONFIG.siteUrl}/quem-somos`,
    worksFor: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
    sameAs: [SITE_CONFIG.instagramUrl]
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.siteUrl}/#website`,
    name: SITE_CONFIG.firmName,
    alternateName: "Eryx Fernandes Advocacia",
    url: SITE_CONFIG.siteUrl,
    publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
    inLanguage: "pt-BR"
  };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [legalService, person, ...(normalizePath(window.location.pathname) === "/" ? [website] : [])]
  };
  let script = document.head.querySelector("#legal-service-schema");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "legal-service-schema";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function restoreLocalDocumentMeta(path, initialTitle, initialDescription) {
  if (!LOCAL_LABOR_CITY_BY_ROUTE.has(path)) return false;

  document.title = initialTitle;
  ensureMetaByName("description").setAttribute("content", initialDescription);
  return true;
}

function updateDocumentMeta(path) {
  const commercialSeo = {
    "/": {
      title: "Escritório de Advocacia em Sorocaba | Eryx Fernandes",
      description: "Escritório de advocacia em Sorocaba com atuação em Direito Trabalhista, Trabalhista Empresarial, Direito de Família e Direito Imobiliário. Fale conosco."
    },
    "/quem-somos": {
      title: "Eryx Fernandes Advocacia em Sorocaba | Quem Somos",
      description: "Conheça Eryx Fernandes Advocacia, escritório em Sorocaba com atendimento jurídico claro, próximo e direcionado às necessidades de cada cliente."
    },
    "/atuacao/direito-trabalhista-empresas": {
      title: "Advogado Trabalhista Empresarial em Sorocaba | Eryx",
      description: "Advogado trabalhista empresarial em Sorocaba para defesa em reclamações, consultoria preventiva, contratos, jornada, demissões e redução de riscos."
    },
    "/contato": {
      title: "Contato | Escritório de Advocacia em Sorocaba",
      description: "Fale com Eryx Fernandes Advocacia, escritório de advocacia em Sorocaba. Atendimento pelo WhatsApp, telefone, e-mail ou formulário."
    },
    "/cidades-atendidas": {
      title: "Cidades Atendidas | Advogado Trabalhista | Dr. Eryx Fernandes",
      description: "Confira as cidades atendidas pelo Dr. Eryx Fernandes em Direito Trabalhista. Atendimento a trabalhadores em Sorocaba, Votorantim, Itu, Jundiaí e outras cidades de São Paulo."
    }
  };
  const page = internalPages[path];
  const laborLandingPage = laborLandingPages[path];
  const description = ensureMetaByName("description");
  const initialTitle = document.title;
  const initialDescription = description.getAttribute("content") || "";
  if (commercialSeo[path]) {
    document.title = commercialSeo[path].title;
    description.setAttribute("content", commercialSeo[path].description);
  }
  document.title = laborLandingPage
    ? laborLandingPage.seoTitle
    : page
      ? `${page.label} | ${SITE_CONFIG.firmName}`
      : `Advogado em Sorocaba | ${SITE_CONFIG.firmName}`;
  document.body.className = path === "/" ? "page-home" : "page-internal";
  description.setAttribute(
    "content",
    laborLandingPage?.seoDescription ||
      "Advocacia em Sorocaba nas áreas trabalhista, imobiliária e de família, com atendimento próximo, orientação clara e atuação responsável."
  );
  if (path === "/atuacao") {
    document.title = `Áreas de Atuação | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Conheça a atuação do escritório em Direito Trabalhista, Imobiliário e de Família, com atendimento presencial em Sorocaba e também digital."
    );
  }
  if (path === "/atuacao/direito-trabalhista-trabalhadores") {
    document.title = `Advogado Trabalhista em Sorocaba | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Orientação trabalhista em Sorocaba para trabalhadores em casos de rescisão, horas extras, assédio, acidente de trabalho, FGTS e outros direitos."
    );
  }
  if (path === "/atuacao/direito-trabalhista-empresas") {
    document.title = "Advogado Trabalhista para Empresas em Sorocaba | Eryx Fernandes";
    description.setAttribute(
      "content",
      "Assessoria trabalhista para empresas em Sorocaba: prevenção de riscos, documentos internos, desligamentos e defesa em reclamações trabalhistas."
    );
  }
  if (path === "/atuacao/direito-imobiliario") {
    document.title = `Advogado Imobiliário em Sorocaba | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Atuação imobiliária em Sorocaba em contratos, compra e venda, locação, regularização, cobranças, notificações e conflitos condominiais."
    );
  }
  if (path === "/atuacao/direito-de-familia") {
    document.title = `Advogado de Família em Sorocaba | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Orientação em Direito de Família em Sorocaba para divórcio, guarda, alimentos, partilha de bens, união estável e outras questões familiares."
    );
  }
  if (path === "/atuacao/pensao-alimenticia") {
    document.title = "Advogado para Pensão Alimentícia em Sorocaba | Eryx";
    description.setAttribute(
      "content",
      "Advogado para pensão alimentícia em Sorocaba em casos de pedido, cobrança, atraso, revisão, exoneração e descumprimento de acordo. Fale com o escritório."
    );
  }
  if (path === "/contato") {
    document.title = `Contato | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Fale com o Eryx Fernandes Advocacia em Sorocaba. Atendimento presencial e digital nas áreas trabalhista, imobiliária e de família."
    );
  }
  if (path === "/artigos") {
    document.title = `Artigos Jurídicos | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Artigos sobre Direito Trabalhista, Empresarial, Imobiliário e de Família para compreender riscos, documentos e caminhos jurídicos."
    );
  }
  if (path === "/artigos/nr-01-novas-exigencias-empresas-sorocaba") {
    document.title = "NR-01 em 2026: exigências para empresas | Eryx Fernandes";
    description.setAttribute(
      "content",
      "Entenda as exigências da NR-01 sobre riscos psicossociais e como empresas de Sorocaba devem revisar o PGR e suas práticas internas."
    );
  }
  if (path === "/artigos/rescisao-indireta-sorocaba") {
    document.title = "Rescisão indireta em Sorocaba: guia do trabalhador";
    description.setAttribute(
      "content",
      "Entenda quando atraso salarial, falta de FGTS, assédio e outras faltas do empregador podem justificar a rescisão indireta em Sorocaba."
    );
  }
  if (path === "/artigos/fgts-nao-depositado-como-conferir") {
    document.title = "FGTS não depositado: como conferir e o que fazer";
    description.setAttribute(
      "content",
      "Saiba como consultar o extrato do FGTS, identificar depósitos ausentes e entender quais providências o trabalhador pode avaliar."
    );
  }
  if (path === "/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica") {
    document.title = "Direitos trabalhistas: quando buscar orientação jurídica?";
    description.setAttribute(
      "content",
      "Saiba quais problemas trabalhistas exigem atenção, quando buscar orientação e quais documentos podem ajudar na análise do caso."
    );
  }
  if (path === "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar") {
    document.title = "Contratos imobiliários: cuidados antes de assinar";
    description.setAttribute(
      "content",
      "Veja quais cláusulas, garantias, prazos e documentos analisar antes de assinar contratos de locação, compra e venda ou distratos."
    );
  }
  if (path === "/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca") {
    document.title = "Divórcio, guarda e partilha: decisões com segurança";
    description.setAttribute(
      "content",
      "Entenda aspectos importantes sobre divórcio, guarda, pensão alimentícia e partilha de bens antes de tomar decisões familiares."
    );
  }
  if (path === "/artigos/pensao-alimenticia-atrasada-como-cobrar") {
    document.title = "Pensão Alimentícia Atrasada: Como Cobrar? | Eryx Fernandes";
    description.setAttribute("content", "A pensão alimentícia está atrasada ou sendo paga parcialmente? Entenda como funciona a cobrança, quais documentos reunir e quando procurar orientação jurídica.");
  }
  if (path === "/quem-somos") {
    document.title = `Sobre o escritório | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Conheça o Eryx Fernandes Advocacia, escritório em Sorocaba com atendimento próximo e atuação trabalhista, imobiliária e familiar."
    );
  }
  const articlePage = articleByHref(path);
  if (articlePage?.seoTitle) {
    document.title = articlePage.seoTitle;
    description.setAttribute("content", articlePage.seoDescription || articlePage.excerpt);
  }
  if (commercialSeo[path]) {
    document.title = commercialSeo[path].title;
    description.setAttribute("content", commercialSeo[path].description);
  }
  restoreLocalDocumentMeta(path, initialTitle, initialDescription);
  updateSocialMeta(path);
  renderGlobalBusinessSchema();
}

function initHeader() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const panel = document.querySelector("[data-mobile-panel]");

  if (!header || !toggle || !panel) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  toggle.addEventListener("click", () => {
    const open = !header.classList.contains("is-open");
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initRotatingWord() {
  const element = document.querySelector("[data-rotating-word]");
  if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const words = ["trabalhadores", "empresas", "famílias", "condomínios", "proprietários"];
  let index = 0;

  window.setInterval(() => {
    element.classList.add("is-changing");
    window.setTimeout(() => {
      index = (index + 1) % words.length;
      element.textContent = words[index];
      element.classList.remove("is-changing");
    }, 260);
  }, 2600);
}

function honorReducedMotion() {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("video").forEach((video) => {
    video.removeAttribute("autoplay");
    video.pause();
  });
}

function initHeroVideo() {
  const video = document.querySelector(".hero-video");
  if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const loadVideo = () => {
    if (video.dataset.loaded === "true") return;

    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    const src = isMobile ? video.dataset.srcMobile : video.dataset.srcDesktop;
    if (!src) return;

    video.addEventListener("loadeddata", () => video.classList.add("is-ready"), { once: true });
    video.src = src;
    video.autoplay = true;
    video.dataset.loaded = "true";
    video.load();

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  };

  const scheduleLoad = () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadVideo, { timeout: 1800 });
      return;
    }

    window.setTimeout(loadVideo, 1200);
  };

  if (document.readyState === "complete") {
    scheduleLoad();
  } else {
    window.addEventListener("load", scheduleLoad, { once: true });
  }
}

function initPracticePanel() {
  const panel = document.querySelector("[data-practice-panel]");
  if (!panel) return;

  const tabs = [...panel.querySelectorAll("[data-practice-index]")];
  const detail = panel.querySelector("[data-practice-detail]");

  const activate = (index) => {
    const area = practicePathways[index];
    if (!area || !detail) return;

    tabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === index;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    detail.classList.add("is-changing");
    window.setTimeout(() => {
      detail.innerHTML = pathwayDetailTemplate(area);
      detail.classList.remove("is-changing");
    }, 120);
  };

  tabs.forEach((tab) => {
    const index = Number(tab.dataset.practiceIndex);
    tab.addEventListener("mouseenter", () => activate(index));
    tab.addEventListener("focus", () => activate(index));
    tab.addEventListener("click", () => activate(index));
  });

  panel.querySelectorAll("[data-mobile-practice-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest("[data-mobile-practice-item]");
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function initFaqAccordions() {
  document.querySelectorAll("[data-faq-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest("[data-faq-item]");
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const message = [
      "Olá, Eryx Fernandes Advocacia.",
      "",
      "Gostaria de atendimento jurídico.",
      `Nome: ${data.get("name")}`,
      `Telefone/WhatsApp: ${data.get("phone")}`,
      `E-mail: ${data.get("email")}`,
      `Área de interesse: ${data.get("area")}`,
      "",
      `Mensagem: ${data.get("message")}`
    ].join("\n");

    const whatsappUrl = getWhatsAppUrl(message);

    // TODO: substituir o envio via WhatsApp por integração de backend, se o projeto adotar envio de formulário.
    if (event.isTrusted && typeof window.gtag === "function" && typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(whatsappUrl);
      return;
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

function initWhatsAppConversionTracking() {
  document.addEventListener("click", (event) => {
    if (!event.isTrusted || event.defaultPrevented || event.button !== 0) return;

    const link = event.target.closest("a[href]");
    if (!link || !isWhatsAppUrl(link.href)) return;

    if (typeof window.gtag !== "function" || typeof window.gtag_report_conversion !== "function") {
      return;
    }

    event.preventDefault();
    window.gtag_report_conversion(link.href);
  }, { capture: true });
}

function initArticleFilters() {
  const filters = [...document.querySelectorAll("[data-article-filter]")];
  const cards = [...document.querySelectorAll("[data-article-card]")];
  const emptyState = document.querySelector("[data-article-empty]");
  if (!filters.length || !cards.length || !emptyState) return;

  const applyFilter = (category) => {
    let visibleCount = 0;

    filters.forEach((button) => {
      const isActive = button.dataset.articleFilter === category;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    cards.forEach((card) => {
      const shouldShow = category === "Todos" || card.dataset.category === category;
      card.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    emptyState.hidden = visibleCount > 0;
  };

  filters.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.articleFilter));
  });
}

function alimonyLandingTemplate() {
  const path = "/atuacao/pensao-alimenticia";
  const whatsappUrl = getWhatsAppUrl("Vim pelo Google e quero informações sobre pensão alimentícia.");
  const situations = [
    ["Pedido e fixação", "Pedido de alimentos, definição provisória ou definitiva e formalização de acordos, conforme as necessidades e possibilidades demonstradas."],
    ["Parcelas em atraso", "Cobrança de pensão atrasada, pagamento parcial ou irregular e análise da decisão ou acordo já existente."],
    ["Revisão do valor", "Avaliação de pedido de aumento ou redução quando houver alteração relevante nas circunstâncias e provas disponíveis."],
    ["Exoneração", "Análise da continuidade da obrigação e dos documentos necessários, sem interrupções unilaterais."],
    ["Acordos não cumpridos", "Orientação sobre formalização, descumprimento e os caminhos juridicamente adequados para cada situação."],
    ["Outras situações familiares", "Alimentos durante a gravidez, entre ex-cônjuges ou familiares e defesa em execução, quando presentes os requisitos." ]
  ];
  const faq = [
    ["Como pedir pensão alimentícia?", "O pedido depende da situação familiar, das necessidades de quem recebe e das possibilidades de quem paga. A formalização e os documentos ajudam a definir o caminho adequado."],
    ["Existe percentual fixo para pensão?", "Não há percentual obrigatório aplicável a todos os casos. O valor é analisado de acordo com as circunstâncias concretas e as provas disponíveis."],
    ["É possível cobrar pensão atrasada?", "Pode haver medidas de cobrança, mas é preciso verificar as parcelas, o acordo ou decisão existente e a forma de execução adequada ao caso."],
    ["O que fazer quando o pagamento é parcial?", "É importante organizar os comprovantes e avaliar o que foi ajustado ou decidido antes de tomar qualquer providência."],
    ["Posso pedir aumento ou redução?", "A revisão pode ser avaliada quando houver mudança relevante nas circunstâncias. Alterar o valor por conta própria pode gerar dificuldades."],
    ["A pensão termina automaticamente aos 18 anos?", "A maioridade não encerra a obrigação automaticamente em todas as situações; é necessária análise jurídica das circunstâncias."],
    ["Acordo verbal de pensão tem validade?", "Acordos informais podem gerar dúvidas de prova e execução. A situação deve ser examinada antes de definir os próximos passos."],
    ["Quais documentos devo separar?", "A lista varia conforme o caso, mas comprovantes de renda, despesas, pagamentos, acordos e decisões normalmente são relevantes."],
    ["Quando procurar um advogado?", "Quando houver dúvida sobre pedido, atraso, revisão, exoneração, acordo ou cobrança judicial, a análise pode esclarecer os riscos e possibilidades."],
    ["O escritório atende casos em Sorocaba?", "Sim. O escritório atende casos de pensão alimentícia em Sorocaba e região, de forma presencial e digital."],
    ["O atendimento pode começar pelo WhatsApp?", "Sim. O primeiro contato pode começar pelo WhatsApp para apresentar brevemente a situação e compreender os próximos passos possíveis."]
  ];
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([name,text]) => ({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))};
  const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
    {"@type":"ListItem",position:1,name:"Home",item:`${SITE_CONFIG.siteUrl}/`},
    {"@type":"ListItem",position:2,name:"Atuação",item:`${SITE_CONFIG.siteUrl}/atuacao`},
    {"@type":"ListItem",position:3,name:"Direito de Família",item:`${SITE_CONFIG.siteUrl}/atuacao/direito-de-familia`},
    {"@type":"ListItem",position:4,name:"Pensão Alimentícia",item:`${SITE_CONFIG.siteUrl}/atuacao/pensao-alimenticia/`}
  ]};
  return `
    ${headerTemplate(path)}
    <main id="conteudo" class="labor-landing-page alimony-landing-page">
      <section class="labor-lp-hero">
        <div class="labor-lp-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/atuacao">Atuação</a><span>/</span><a href="/atuacao/direito-de-familia">Direito de Família</a><span>/</span><span>Pensão Alimentícia</span></nav>
          <p class="eyebrow">DIREITO DE FAMÍLIA EM SOROCABA</p>
          <h1>Advogado para Pensão Alimentícia em Sorocaba</h1>
          <p class="labor-lp-lead">Se a pensão não está sendo paga, o valor não é suficiente ou você precisa regularizar a situação, o escritório pode orientar você com clareza e responsabilidade.</p>
          <div class="hero-actions"><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar sobre pensão alimentícia</a><a class="button button-ghost" href="#como-funciona">Entender como funciona</a></div>
          <div class="labor-lp-trust"><span>Atendimento em Sorocaba e região</span><span>${professionalRegistrationLink()}</span><span>Presencial e digital</span></div>
        </div>
      </section>
      <section class="labor-lp-intro reveal-block" id="como-funciona"><p class="eyebrow">Você não precisa lidar com isso sozinho</p><h2>Quando a pensão vira um problema, é importante buscar orientação.</h2><p>Falta de pagamento, valor insuficiente, pagamentos incompletos ou dúvidas sobre um acordo podem trazer preocupação para toda a família. Cada caso tem uma história: o valor da pensão depende das necessidades de quem recebe e da condição de quem paga. Não existe um número igual para todos. Antes de tomar decisões ou aceitar um acordo sem segurança, vale conversar com um advogado. Em Sorocaba e região, o escritório oferece atendimento claro e respeitoso para entender sua situação e mostrar os próximos passos possíveis.</p></section>
      <section class="labor-lp-situations reveal-block"><div class="section-heading"><p>Situações atendidas</p><h2>Em quais situações o escritório pode atuar?</h2><span>A medida adequada pode ser analisada conforme o caso, os documentos e os requisitos jurídicos aplicáveis.</span></div><div class="labor-lp-card-grid">${situations.map(([title,text], i) => `<article><span>${String(i+1).padStart(2,"0")}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
      <section class="labor-lp-checklist reveal-block"><div><p class="eyebrow">Acordo de boca</p><h2>O pagamento da pensão está acordado “de boca”?</h2><p>Quando não há nada formalizado, qualquer mudança pode virar discussão. Não espere o problema crescer: fale com um advogado para entender como proteger o que foi combinado e buscar uma solução mais segura para a sua família.</p><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Conversar sobre meu caso</a></div></section>
      <section class="labor-lp-checklist reveal-block"><div><p class="eyebrow">Cobrança</p><h2>A pensão está atrasada ou vem incompleta?</h2><p>Quando o pagamento falha, a rotina de quem depende desse dinheiro fica ainda mais difícil. O escritório pode analisar o que foi combinado ou decidido e explicar, de forma simples, quais caminhos podem ser avaliados para cobrar as parcelas em aberto.</p><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o escritório</a></div></section>
      <section class="labor-lp-checklist reveal-block"><div><p class="eyebrow">Revisão da pensão</p><h2>O valor da pensão não acompanha mais a sua realidade?</h2><p>Se as despesas aumentaram, se a renda mudou ou se a pensão ficou pesada demais para quem paga, não é preciso tentar resolver isso sozinho. O escritório pode analisar a situação e orientar sobre a possibilidade de pedir a revisão do valor.</p><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar sobre revisão da pensão</a></div></section>
      <section class="worker-analysis-section reveal-block"><div class="worker-analysis-copy"><p class="eyebrow">Atendimento</p><h2>Como funciona o atendimento?</h2><p>Você conta o que está acontecendo. Depois, o escritório explica de forma simples quais podem ser os próximos passos.</p><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Solicitar análise do caso</a></div><div class="worker-analysis-steps">${[["01","Relato inicial","Você explica a situação como ela está hoje."],["02","Entendimento do caso","O escritório confere as informações importantes."],["03","Caminho possível","Você entende o que pode ser feito."],["04","Próximos passos","Recebe orientação clara para decidir com segurança."]].map(([n,t,d])=>`<article><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`).join("")}</div></section>
      <section class="labor-lp-lawyer reveal-block"><div class="labor-lp-lawyer-image">${optimizedPicture("/home-retrato-advogado.jpg", "Dr. Eryx Fernandes, advogado em Sorocaba")}</div><div><p class="eyebrow">Atendimento profissional</p><h2>Converse com quem vai olhar para a sua situação com atenção.</h2><p>Dr. Eryx Fernandes atende casos de pensão alimentícia com escuta, explicações sem linguagem complicada e respeito pela história de cada família. Você pode começar a conversa pelo WhatsApp e entender o que pode ser feito antes de tomar qualquer decisão.</p><div class="labor-lp-credentials"><strong>Dr. Eryx Fernandes</strong><span>${professionalRegistrationLink()}</span><span>${SITE_CONFIG.address}</span></div><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o escritório</a></div></section>
      <section class="worker-faq-section labor-lp-faq reveal-block"><div class="section-heading"><p>FAQ</p><h2>Perguntas frequentes sobre pensão alimentícia</h2></div><div class="faq-list">${faq.map(([q,a],i)=>`<article class="faq-item ${i===0?"is-open":""}" data-faq-item><button type="button" data-faq-toggle aria-expanded="${i===0}"><span>${String(i+1).padStart(2,"0")}</span>${q}</button><div class="faq-answer"><p>${a}</p></div></article>`).join("")}</div></section>
      <section class="labor-lp-related reveal-block"><div class="section-heading"><p>Conteúdos relacionados</p><h2>Saiba mais sobre Direito de Família</h2></div><div class="labor-lp-related-grid"><a href="/atuacao/direito-de-familia"><strong>Direito de Família</strong><span>Conhecer a área de atuação</span></a><a href="/artigos/pensao-alimenticia-atrasada-como-cobrar"><strong>Pensão alimentícia atrasada</strong><span>Entender como funciona a cobrança</span></a><a href="/contato"><strong>Contato</strong><span>Fale com o escritório</span></a></div></section>
      <section class="labor-lp-final"><div><p class="eyebrow">Próximo passo</p><h2>Precisa de orientação sobre pensão alimentícia?</h2><p>Pedido, cobrança, revisão e exoneração exigem análise das circunstâncias e dos documentos. Fale com o escritório para apresentar sua situação e compreender os próximos passos possíveis.</p><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o escritório pelo WhatsApp</a></div></section>
    </main><script type="application/ld+json" id="alimony-schema">${JSON.stringify({"@context":"https://schema.org","@graph":[breadcrumbSchema,faqSchema]}).replace(/</g,"\\u003c")}</script>${footerTemplate()}`;
}

function localLaborCityTemplate(city) {
  const path = city.route;
  const whatsappUrl = getWhatsAppUrl(`Olá, Dr. Eryx. Procuro um advogado trabalhista em ${city.name} e gostaria de conversar sobre meu caso.`);
  const title = `Atendimento trabalhista em ${city.name}`;
  const localText = `${city.name} é um município do interior de São Paulo com cerca de ${city.population} habitantes, conforme o Censo 2022 do IBGE. A dinâmica econômica local, marcada por ${city.economy}, reúne diferentes relações de emprego e situações que podem exigir orientação jurídica. Horas extras não pagas, demissão injusta, FGTS não depositado, assédio, acidente de trabalho e diferenças nas verbas rescisórias estão entre os problemas que merecem análise individual. Se você procura um Advogado Trabalhista em ${city.name}, o Dr. Eryx Fernandes pode ouvir seu relato, avaliar as informações disponíveis e orientar os próximos passos.`;
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_CONFIG.siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Direito Trabalhista", item: `${SITE_CONFIG.siteUrl}/atuacao/direito-trabalhista-trabalhadores` },
      { "@type": "ListItem", position: 3, name: `Advogado Trabalhista em ${city.name}`, item: `${SITE_CONFIG.siteUrl}${path}` }
    ]
  };
  const serviceSchema = {
    "@type": "Service",
    name: `Advogado Trabalhista em ${city.name}`,
    serviceType: "Advocacia trabalhista para trabalhadores",
    provider: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
    areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "São Paulo" } },
    url: `${SITE_CONFIG.siteUrl}${path}`
  };

  return workerLaborTemplate()
    .replaceAll("/atuacao/direito-trabalhista-trabalhadores", path)
    .replaceAll("Advogado Trabalhista em Sorocaba", `Advogado Trabalhista em ${city.name}`)
    .replace("Direito Trabalhista para trabalhadores", `Direito Trabalhista em ${city.name}`)
    .replace("Atuação na defesa de trabalhadores em demandas", `Atendimento a trabalhadores de ${city.name} em demandas`)
    .replace("<span>Trabalhadores</span>", `<span>${city.name}</span>`)
    .replace(
      '<section class="worker-faq-section reveal-block">',
      `<section class="local-city-section reveal-block" aria-labelledby="local-city-title">
        <div class="local-city-copy">
          <p class="eyebrow">${city.name}/SP</p>
          <h2 id="local-city-title">${title}</h2>
          <p>${localText}</p>
          <p class="local-city-source">População: <a href="https://www.ibge.gov.br/cidades-e-estados/sp/${city.slug}.html" target="_blank" rel="noopener noreferrer">IBGE — Censo 2022</a>.</p>
          <p class="local-city-source">Conheça também a página central de <a href="/atuacao/direito-trabalhista-trabalhadores">Direito Trabalhista para trabalhadores</a>.</p>
          <p class="local-city-hub-link"><a href="/cidades-atendidas">Ver outras cidades atendidas →</a></p>
          <a class="button button-dark" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o Dr. Eryx</a>
        </div>
        <div class="local-city-media">
          <img src="${city.image}" alt="Vista de ${city.name} SP para página de advogado trabalhista" width="1200" height="800" loading="lazy" decoding="async" />
          <iframe title="Mapa de ${city.name}, São Paulo" src="https://www.google.com/maps?q=${encodeURIComponent(`${city.name}, São Paulo`)}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </section>

      <section class="worker-faq-section reveal-block">`
    )
    .replace(
      "</main>",
      `</main><script type="application/ld+json" id="local-labor-schema">${JSON.stringify({ "@context": "https://schema.org", "@graph": [breadcrumbSchema, serviceSchema] }).replace(/</g, "\\u003c")}</script>`
    );
}

function servedCitiesTemplate() {
  const path = "/cidades-atendidas";
  const whatsappUrl = getWhatsAppUrl("Olá, Dr. Eryx. Vim pelo site e gostaria de saber se há atendimento trabalhista para minha cidade.");
  const descriptions = [
    "Defesa dos direitos de trabalhadores de Votorantim em rescisões, jornada, FGTS e outras questões do trabalho.",
    "Orientação trabalhista para quem trabalha em Itu e precisa compreender riscos, provas e medidas jurídicas possíveis.",
    "Atuação para trabalhadores de Tatuí em conflitos envolvendo salários, demissão, assédio e direitos contratuais.",
    "Análise individual de problemas trabalhistas vividos por profissionais de Porto Feliz.",
    "Atendimento a trabalhadores de Salto de Pirapora diante de irregularidades na relação de emprego.",
    "Orientação clara para trabalhadores de Araçoiaba da Serra em situações que exigem análise jurídica.",
    "Defesa trabalhista para profissionais de Iperó em questões de jornada, rescisão e ambiente de trabalho.",
    "Atendimento para trabalhadores de Boituva que precisam avaliar direitos e próximos passos.",
    "Atuação trabalhista em favor de profissionais de Salto diante de possíveis violações de direitos.",
    "Orientação para trabalhadores de São Roque sobre FGTS, horas extras, demissões e outras situações.",
    "Análise responsável de demandas trabalhistas apresentadas por profissionais de Mairinque.",
    "Atendimento jurídico para trabalhadores de Piedade em conflitos surgidos durante ou após o emprego.",
    "Defesa de direitos trabalhistas para quem mora ou trabalha em Cerquilho.",
    "Orientação individual para profissionais de Tietê sobre rescisões, jornada e verbas não pagas.",
    "Atuação para trabalhadores de Itapetininga em diferentes conflitos da relação de trabalho.",
    "Atendimento trabalhista para profissionais de Indaiatuba em questões de jornada, FGTS, assédio e rescisão.",
    "Análise de direitos para trabalhadores de Cabreúva que enfrentam problemas no emprego.",
    "Orientação trabalhista para profissionais de Itupeva com atendimento direto e individualizado.",
    "Atuação para trabalhadores de Jundiaí em situações envolvendo jornada, rescisão, FGTS, assédio e outros direitos.",
    "Defesa trabalhista para profissionais de Campo Limpo Paulista diante de irregularidades no vínculo de emprego.",
    "Atendimento para trabalhadores de Vargem Grande Paulista que precisam avaliar uma questão trabalhista.",
    "Orientação a profissionais de Cotia sobre direitos desrespeitados durante ou após a relação de trabalho.",
    "Análise jurídica para trabalhadores de Ibiúna em casos de demissão, jornada, FGTS e assédio."
  ];
  const cards = [
    {
      name: "Sorocaba",
      route: "/atuacao/direito-trabalhista-trabalhadores",
      image: "/home-hero-fallback-desktop.webp",
      alt: "Vista urbana de Sorocaba SP",
      description: "Atendimento trabalhista na cidade onde está localizado o escritório do Dr. Eryx Fernandes."
    },
    ...LOCAL_LABOR_CITIES.map((city, index) => ({
      ...city,
      alt: `Vista de ${city.name} SP`,
      description: descriptions[index]
    }))
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_CONFIG.siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Cidades Atendidas", item: `${SITE_CONFIG.siteUrl}${path}` }
    ]
  };

  return `
    ${headerTemplate(path)}
    <main id="conteudo" class="served-cities-page">
      <section class="served-cities-hero">
        <div class="served-cities-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Cidades Atendidas</span></nav>
          <p class="eyebrow">ATENDIMENTO REGIONAL · CIDADES ATENDIDAS</p>
          <h1>Advogado Trabalhista nas cidades da região</h1>
          <p>O Dr. Eryx Fernandes atende trabalhadores de Sorocaba e de diferentes cidades do interior de São Paulo, com atuação em questões como horas extras, FGTS, verbas rescisórias, assédio, acidente de trabalho e outras violações de direitos trabalhistas.</p>
          <div class="hero-actions"><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com o Dr. Eryx</a><a class="button button-ghost" href="#grade-de-cidades">Encontrar minha cidade</a></div>
        </div>
      </section>
      <section class="served-cities-intro reveal-block"><p class="eyebrow">Atuação regional</p><h2>Atendimento trabalhista com presença regional</h2><p>O atendimento jurídico não precisa estar limitado ao município onde o escritório está localizado. Trabalhadores de diferentes cidades podem conversar diretamente com o Dr. Eryx Fernandes para apresentar sua situação e verificar quais medidas jurídicas podem ser avaliadas.</p><p>As páginas abaixo reúnem informações específicas sobre o atendimento trabalhista em cada município.</p></section>
      <section class="served-cities-directory reveal-block" id="grade-de-cidades">
        <div class="section-heading"><p>Cidades atendidas</p><h2>Encontre atendimento na sua cidade</h2><span>Selecione sua cidade para acessar informações sobre atendimento trabalhista e falar diretamente com o Dr. Eryx Fernandes.</span></div>
        <div class="served-cities-grid">${cards.map((city, index) => `<article class="served-city-card"><a class="served-city-image" href="${city.route}" aria-label="Advogado Trabalhista em ${city.name}"><img src="${city.image}" alt="${city.alt}" width="1200" height="800" loading="lazy" decoding="async" /></a><div><p class="eyebrow">Direito Trabalhista</p><h3>${city.name}</h3><p>${city.description}</p><a class="served-city-link" href="${city.route}">Advogado Trabalhista em ${city.name} →</a></div></article>`).join("")}</div>
      </section>
      <section class="served-cities-missing reveal-block"><div><p class="eyebrow">Outras localidades</p><h2>Não encontrou sua cidade?</h2><p>O Dr. Eryx Fernandes também pode atender trabalhadores de outras localidades. Entre em contato e informe onde você mora ou trabalha.</p></div><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Consultar atendimento na minha cidade</a></section>
      <section class="served-cities-final"><div><p class="eyebrow">Orientação trabalhista</p><h2>Está enfrentando um problema no trabalho?</h2><p>Se seus direitos trabalhistas podem ter sido desrespeitados, conte ao Dr. Eryx o que aconteceu. Cada situação é analisada individualmente antes da definição das medidas jurídicas possíveis.</p><a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar agora com o Dr. Eryx</a></div></section>
    </main><script type="application/ld+json" id="served-cities-schema">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>${footerTemplate()}`;
}

export function renderPageHtml(pathname) {
  const path = normalizePath(pathname);

  if (LOCAL_LABOR_CITY_BY_ROUTE.has(path)) return localLaborCityTemplate(LOCAL_LABOR_CITY_BY_ROUTE.get(path));
  if (path === "/cidades-atendidas") return servedCitiesTemplate();
  if (laborLandingPages[path]) return laborLandingPageTemplate(path);
  if (path === "/atuacao/pensao-alimenticia") return alimonyLandingTemplate();

  return path === "/"
    ? homeTemplate()
    : path === "/quem-somos"
      ? aboutTemplate()
      : path === "/atuacao"
        ? practiceOverviewTemplate()
        : path === "/artigos"
          ? articlesTemplate()
          : path === "/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar"
            ? overtimeUnpaidArticleTemplate()
            : path === "/artigos/assedio-moral-no-trabalho-como-identificar"
              ? workplaceHarassmentArticleTemplate()
              : path === "/artigos/acidente-de-trabalho-direitos-do-trabalhador"
                ? workplaceAccidentRightsArticleTemplate()
          : path === "/artigos/nr-01-novas-exigencias-empresas-sorocaba"
            ? nr01CompaniesArticleTemplate()
            : path === "/artigos/pensao-alimenticia-atrasada-como-cobrar"
              ? alimonyLateArticleTemplate()
            : path === "/artigos/fgts-nao-depositado-como-conferir"
              ? missingFgtsArticleTemplate()
            : path === "/artigos/rescisao-indireta-sorocaba"
                ? rescisaoIndirectArticleTemplate()
                : path === "/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"
                  ? laborRightsArticleTemplate()
                : path === "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar"
                  ? realEstateContractsArticleTemplate()
                  : path === "/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca"
                    ? familyDecisionsArticleTemplate()
                    : path === "/atuacao/direito-trabalhista-trabalhadores"
                      ? workerLaborTemplate()
                      : path === "/atuacao/direito-trabalhista-empresas"
                        ? companyLaborTemplate()
                        : path === "/atuacao/direito-imobiliario"
                          ? realEstateTemplate()
                          : path === "/atuacao/direito-de-familia"
                            ? familyLawTemplate()
                            : path === "/atuacao/pensao-alimenticia"
                              ? alimonyLandingTemplate()
                            : path === "/contato"
                              ? contactTemplate()
                              : internalTemplate(path);
}

function render() {
  const path = normalizePath(window.location.pathname);
  const app = document.querySelector("#app");
  updateDocumentMeta(path);

  if (!app.hasAttribute("data-static-rendered") || !app.children.length) {
    app.innerHTML = renderPageHtml(path);
  }

  initHeader();
  initWhatsAppConversionTracking();
  initRotatingWord();
  initPracticePanel();
  initFaqAccordions();
  initContactForm();
  initArticleFilters();
  initHeroVideo();
  honorReducedMotion();
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  render();
}

import { LOCAL_LABOR_CITIES, LOCAL_LABOR_CITY_BY_ROUTE } from "./local-cities.js";
