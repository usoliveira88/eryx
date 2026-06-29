const SITE_CONFIG = {
  firmName: "Eryx Fernandes Advocacia",
  responsible: "Dr. Eryx Fernandes",
  oab: "OAB/SP nº 530.983",
  phone: "(15) 99687-4689",
  whatsapp: "(15) 99687-4689",
  whatsappUrl: "https://wa.me/5515996874689",
  email: "eryx@advmartinsfernandes.com",
  address: "Rua Darcy Fruet, 284 – Wanel Ville 5, Sorocaba/SP – CEP 18057-063",
  instagram: "@adv.eryxfernandes",
  instagramUrl: "https://www.instagram.com/adv.eryxfernandes/",
  city: "Sorocaba/SP"
};

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
    title: "Direitos trabalhistas: quando procurar orientação jurídica?",
    excerpt:
      "Uma leitura inicial sobre sinais de risco, documentação e momentos em que a análise técnica pode evitar perdas.",
    image: "/artigos/artigo-trabalhista-rescisao.jpg",
    alt: "Documentos trabalhistas sobre mesa para artigo sobre direitos trabalhistas",
    href: "/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica",
    readingTime: "4 min de leitura",
    date: "Publicação semanal"
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
    date: "Publicação semanal"
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
    date: "Publicação semanal"
  }
];

const articleFilters = ["Todos", "Trabalhista", "Trabalhista Empresarial", "Condominial", "Família"];

const optimizedImageVariants = new Map([
  ["/home-reuniao-juridica.jpg", "/home-reuniao-juridica"],
  ["/home-retrato-advogado.jpg", "/home-retrato-advogado"],
  ["/home-atendimento-cliente.jpg", "/home-atendimento-cliente"],
  ["/home-cta-advogado.jpg", "/home-cta-advogado"],
  ["/home-detalhe-documentos.jpg", "/home-detalhe-documentos"],
  ["/home-escritorio-ambiente.jpg", "/home-escritorio-ambiente"],
  ["/artigos/artigo-trabalhista-rescisao.jpg", "/artigos/artigo-trabalhista-rescisao"],
  ["/artigos/artigo-imobiliario.jpg", "/artigos/artigo-imobiliario"],
  ["/artigos/artigo-familia-divorcio-guarda.jpg", "/artigos/artigo-familia-divorcio-guarda"]
]);

function optimizedPicture(src, alt, options = {}) {
  const base = optimizedImageVariants.get(src);
  const className = options.className ? ` ${options.className}` : "";
  const loading = options.lazy === false ? "" : ' loading="lazy"';
  const decoding = options.decoding === false ? "" : ' decoding="async"';
  const priority = options.fetchPriority ? ` fetchpriority="${options.fetchPriority}"` : "";

  if (!base) {
    return `<img src="${src}" alt="${alt}"${loading}${decoding}${priority} />`;
  }

  return `
    <picture class="optimized-picture${className}">
      <source media="(max-width: 767px)" srcset="${base}-720.avif" type="image/avif" />
      <source media="(max-width: 767px)" srcset="${base}-720.webp" type="image/webp" />
      <source srcset="${base}-1200.avif" type="image/avif" />
      <source srcset="${base}-1200.webp" type="image/webp" />
      <img src="${base}-1200.webp" alt="${alt}"${loading}${decoding}${priority} />
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
  ["01", "Escuta inicial", "Compreensão do que ocorreu, do tipo de vínculo e dos principais pontos de dúvida."],
  [
    "02",
    "Análise de documentos",
    "Avaliação de contrato, holerites, extratos, mensagens, controles de jornada, termo de rescisão e demais documentos disponíveis."
  ],
  [
    "03",
    "Leitura de riscos e possibilidades",
    "Identificação dos direitos envolvidos, dos prazos, das provas necessárias e dos caminhos possíveis."
  ],
  ["04", "Definição dos próximos passos", "Orientação sobre medidas extrajudiciais ou judiciais, conforme o caso concreto."]
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
    "Não necessariamente. Documentos ajudam, mas a análise pode começar pelo relato dos fatos. Depois, o escritório orienta quais informações podem ser reunidas."
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
    points: [SITE_CONFIG.responsible, SITE_CONFIG.oab, SITE_CONFIG.city]
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
    points: [SITE_CONFIG.whatsapp, SITE_CONFIG.email, SITE_CONFIG.address, SITE_CONFIG.oab],
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
        <a class="header-contact" href="/contato">Fale conosco</a>
        <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" data-menu-toggle>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="mobile-panel" data-mobile-panel>
        <nav aria-label="Menu mobile">
          ${mobileNav}
          <a class="mobile-contact" href="/contato">Fale conosco</a>
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
          <p>${SITE_CONFIG.responsible} · ${SITE_CONFIG.oab}</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${SITE_CONFIG.firmName}. Todos os direitos reservados.</span>
        <span>${SITE_CONFIG.city} · Atendimento presencial e digital.</span>
      </div>
    </footer>
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
            <a class="button button-primary" href="/contato">Falar com o escritório</a>
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
          ${articles.map(articleCardTemplate).join("")}
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
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
      <a href="/artigos">Ler artigo</a>
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
          <a class="button button-primary" href="/contato">Entrar em contato</a>
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
            <span>OAB/SP nº 530.983</span>
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
          <a class="button button-dark" href="/contato">Entrar em contato</a>
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

function workerLaborTemplate() {
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
          <h1 class="worker-hero-seo-title">Advogado Trabalhista em Sorocaba</h1>
          <h2 class="worker-hero-display-title">Direito Trabalhista Para Trabalhadores</h2>
          <p>Atuação na defesa de trabalhadores em demandas envolvendo rescisão, verbas trabalhistas, horas extras, assédio, acidente de trabalho, FGTS, vínculo empregatício e demais conflitos da relação de trabalho.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar com um advogado trabalhista</a>
            <a class="button button-ghost" href="#analise-do-caso">Entender como funciona a análise</a>
          </div>
        </div>
      </section>

      <section class="worker-manifest reveal-block">
        <div>
          <h2>Nem todo conflito trabalhista começa no processo. Muitas vezes, começa na dúvida.</h2>
          <p>Quando há insegurança sobre verbas, jornada, ambiente de trabalho ou forma de desligamento, a análise jurídica ajuda a entender riscos, direitos e próximos passos.</p>
        </div>
      </section>

      <section class="attention-section reveal-block">
        <div class="section-heading">
          <p>Direitos trabalhistas em Sorocaba</p>
          <h2>Situações que merecem atenção</h2>
          <span>Alguns sinais indicam que a relação de trabalho pode exigir análise jurídica individualizada.</span>
        </div>
        <div class="attention-grid">
          ${workerAttentionItems
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
        "Tem dúvida sobre seus direitos trabalhistas?",
        "Conte brevemente o que aconteceu. A análise inicial ajuda a entender se há pontos que merecem atenção jurídica.",
        "Falar pelo WhatsApp"
      )}

      <section class="worker-analysis-section reveal-block" id="analise-do-caso">
        <div class="worker-analysis-copy">
          <p class="eyebrow">Análise do caso</p>
          <h2>Como funciona a análise do caso</h2>
          <p>A orientação trabalhista começa pela compreensão dos fatos, dos documentos e do histórico da relação de trabalho.</p>
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

      <section class="worker-documents-section reveal-block">
        <div class="worker-documents-copy">
          <p class="eyebrow">Documentos</p>
          <h2>Documentos que podem ajudar na análise trabalhista</h2>
          <p>A ausência de algum documento não impede a análise inicial, mas reunir informações facilita a compreensão do caso.</p>
        </div>
        <div class="worker-documents-list">
          ${workerDocuments.map((documentName) => `<span>${documentName}</span>`).join("")}
        </div>
      </section>

      ${workerInlineCtaTemplate(
        "Não sabe se tem todos os documentos?",
        "Mesmo com informações incompletas, é possível iniciar uma conversa para entender o contexto e orientar os próximos passos.",
        "Enviar mensagem ao escritório"
      )}

      <section class="worker-local-section reveal-block">
        <div class="worker-local-image">
          ${optimizedPicture("/home-atendimento-cliente.jpg", "Atendimento trabalhista em Sorocaba")}
        </div>
        <div class="worker-local-copy">
          <p class="eyebrow">Sorocaba/SP</p>
          <h2>Atendimento trabalhista em Sorocaba e região</h2>
          <p>Com sede em Sorocaba/SP, o Eryx Fernandes Advocacia presta atendimento a trabalhadores da cidade e região, com suporte presencial e digital para análise de demandas trabalhistas.</p>
          <address>${SITE_CONFIG.address}</address>
          <p class="worker-local-links">
            Veja também as <a href="/atuacao">áreas de atuação</a>, <a href="/quem-somos">conheça o escritório</a> ou <a href="/contato">fale com o escritório</a>.
          </p>
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

      <section class="related-practices-section reveal-block">
        <div class="section-heading">
          <p>Linkagem interna</p>
          <h2>Outras áreas de atuação</h2>
          <span>Conheça outras frentes jurídicas do escritório.</span>
        </div>
        <div class="related-practices-grid">
          <a href="/atuacao/direito-trabalhista-empresas">
            <strong>Direito Trabalhista para Empresas</strong>
            <span>Consultoria preventiva, documentos internos, desligamentos e defesa em reclamações trabalhistas.</span>
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
          ${optimizedPicture("/home-cta-advogado.jpg", "Orientação sobre direitos trabalhistas")}
        </div>
        <div class="worker-final-copy">
          <p class="eyebrow">Orientação trabalhista para trabalhadores</p>
          <h2>Precisa de orientação sobre direitos trabalhistas?</h2>
          <p>Fale com o Eryx Fernandes Advocacia e conte brevemente o seu caso. A orientação adequada começa pela escuta e pela análise do contexto.</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
            <a class="button button-ghost" href="/contato">Ir para contato</a>
          </div>
        </div>
      </section>
    </main>
    ${workerFaqSchemaTemplate()}
    ${footerTemplate()}
  `;
}

function workerInlineCtaTemplate(title, text, buttonText) {
  return `
    <section class="worker-inline-cta reveal-block">
      <div>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
      <a class="button button-primary" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer">${buttonText}</a>
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
    "https://www.google.com/maps?q=Rua%20Darcy%20Fruet%2C%20284%20-%20Wanel%20Ville%205%2C%20Sorocaba%20-%20SP%2C%2018057-063&output=embed";
  const mapsSearch =
    "https://www.google.com/maps/search/?api=1&query=Rua%20Darcy%20Fruet%2C%20284%20-%20Wanel%20Ville%205%2C%20Sorocaba%20-%20SP%2C%2018057-063";
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

function laborRightsArticleTemplate() {
  const article = articles[0];
  const recommendations = [articles[1], articles[2]];

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
                <span>${SITE_CONFIG.oab}</span>
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
    author: {
      "@type": "Person",
      name: SITE_CONFIG.responsible
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.firmName
    },
    image: article.image,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.href
    }
  };

  return `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
}

function realEstateContractsArticleTemplate() {
  const article = articles[1];
  const recommendations = [articles[0], articles[2]];

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
                <span>${SITE_CONFIG.oab}</span>
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

function familyDecisionsArticleTemplate() {
  const article = articles[2];
  const recommendations = [articles[0], articles[1]];

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
                <span>${SITE_CONFIG.oab}</span>
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
                  <span>${SITE_CONFIG.responsible} · ${SITE_CONFIG.oab}</span>
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_CONFIG.firmName,
    legalName: SITE_CONFIG.firmName,
    url: window.location.origin,
    logo: absoluteUrl("/favicon-512.png"),
    image: absoluteUrl("/home-cta-advogado.jpg"),
    telephone: "+55 15 99687-4689",
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Darcy Fruet, 284 - Wanel Ville 5",
      addressLocality: "Sorocaba",
      addressRegion: "SP",
      postalCode: "18057-063",
      addressCountry: "BR"
    },
    areaServed: {
      "@type": "City",
      name: "Sorocaba"
    },
    sameAs: [SITE_CONFIG.instagramUrl],
    availableLanguage: "pt-BR"
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

function updateDocumentMeta(path) {
  const page = internalPages[path];
  const description = ensureMetaByName("description");
  document.title = page ? `${page.label} | ${SITE_CONFIG.firmName}` : `${SITE_CONFIG.firmName} | Advogado em Sorocaba/SP`;
  document.body.className = path === "/" ? "page-home" : "page-internal";
  description.setAttribute(
    "content",
    "Advocacia estratégica em Sorocaba/SP nas áreas trabalhista, imobiliária, família e empresarial, com atendimento próximo, comunicação clara e condução responsável."
  );
  if (path === "/atuacao") {
    document.title = `Áreas de Atuação | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Conheça as áreas de atuação do Eryx Fernandes Advocacia em Sorocaba/SP: Direito Trabalhista para trabalhadores e empresas, Direito Imobiliário e Direito de Família."
    );
  }
  if (path === "/atuacao/direito-trabalhista-trabalhadores") {
    document.title = `Advogado Trabalhista em Sorocaba | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Advogado trabalhista em Sorocaba. Atuação na defesa de trabalhadores em rescisões, horas extras, assédio, acidente de trabalho, FGTS e demais direitos trabalhistas."
    );
  }
  if (path === "/atuacao/direito-trabalhista-empresas") {
    document.title = `Advogado Trabalhista Empresarial em Sorocaba | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Advogado trabalhista empresarial em Sorocaba. Consultoria preventiva, análise de riscos, documentos internos, desligamentos e defesa em reclamações trabalhistas para empresas."
    );
  }
  if (path === "/atuacao/direito-imobiliario") {
    document.title = `Advogado Imobiliário em Sorocaba | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Advogado imobiliário em Sorocaba. Atuação em contratos imobiliários, compra e venda, locação, regularização, cobranças, notificações e conflitos condominiais."
    );
  }
  if (path === "/atuacao/direito-de-familia") {
    document.title = `Advogado de Família em Sorocaba | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Advogado de família em Sorocaba. Atuação em divórcio, guarda, alimentos, partilha de bens, união estável e demandas familiares sensíveis."
    );
  }
  if (path === "/contato") {
    document.title = `Contato | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Entre em contato com o Eryx Fernandes Advocacia em Sorocaba/SP. Atendimento jurídico presencial e digital nas áreas trabalhista, imobiliária e de família."
    );
  }
  if (path === "/artigos") {
    document.title = `Artigos Jurídicos | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Artigos jurídicos do Eryx Fernandes Advocacia sobre Direito Trabalhista, Trabalhista Empresarial, Condominial e Direito de Família em Sorocaba/SP."
    );
  }
  if (path === "/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica") {
    document.title = `Direitos trabalhistas: quando procurar orientação jurídica? | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Entenda quando procurar orientação jurídica trabalhista em Sorocaba, quais sinais merecem atenção e quais documentos podem ajudar na análise do caso."
    );
  }
  if (path === "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar") {
    document.title = `Contratos imobiliários: pontos de atenção antes de assinar | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Entenda quais pontos merecem atenção antes de assinar contratos imobiliários, contratos de locação, compra e venda, distratos e documentos envolvendo imóveis."
    );
  }
  if (path === "/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca") {
    document.title = `Divórcio, guarda e partilha: como tomar decisões com segurança | ${SITE_CONFIG.firmName}`;
    description.setAttribute(
      "content",
      "Entenda pontos importantes sobre divórcio, guarda, pensão alimentícia e partilha de bens, com orientação jurídica familiar em Sorocaba/SP."
    );
  }
  if (path === "/quem-somos") {
    description.setAttribute(
      "content",
      "Conheça o Eryx Fernandes Advocacia, escritório em Sorocaba/SP com atuação estratégica, atendimento próximo e acompanhamento transparente em demandas trabalhistas, imobiliárias e familiares."
    );
  }
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

    // TODO: substituir o envio via WhatsApp por integração de backend, se o projeto adotar envio de formulário.
    window.open(`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
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

export function renderPageHtml(pathname) {
  const path = normalizePath(pathname);

  return path === "/"
    ? homeTemplate()
    : path === "/quem-somos"
      ? aboutTemplate()
      : path === "/atuacao"
        ? practiceOverviewTemplate()
        : path === "/artigos"
          ? articlesTemplate()
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

