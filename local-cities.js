export const LOCAL_LABOR_CITIES = [
  { name: "Votorantim", slug: "votorantim", population: "127.923", imageSource: "votorantim-administradora-condominio.jpg", economy: "indústrias, comércio e serviços ligados à Região Metropolitana de Sorocaba" },
  { name: "Itu", slug: "itu", population: "168.240", imageSource: "itu-administradora-condominio.jpg", economy: "indústrias, logística, comércio, turismo e prestação de serviços" },
  { name: "Tatuí", slug: "tatui", population: "123.942", imageSource: "tatui-administradora-condominio.webp", economy: "indústrias, comércio, serviços e atividades ligadas ao agronegócio" },
  { name: "Porto Feliz", slug: "porto-feliz", population: "56.497", imageSource: "porto-feliz-administradora-condominio.jpg", economy: "indústrias, comércio, serviços e atividades rurais" },
  { name: "Salto de Pirapora", slug: "salto-de-pirapora", population: "46.331", imageSource: "salto-de-pirapora-administradora-condominio.webp", economy: "indústrias, mineração, comércio e prestação de serviços" },
  { name: "Araçoiaba da Serra", slug: "aracoiaba-da-serra", population: "34.776", economy: "comércio, serviços, atividades rurais e deslocamentos profissionais pela região de Sorocaba" },
  { name: "Iperó", slug: "ipero", population: "30.140", economy: "indústrias, serviços, comércio e atividades ligadas ao polo tecnológico da região" },
  { name: "Boituva", slug: "boituva", population: "61.081", economy: "indústrias, logística, comércio, serviços e turismo" },
  { name: "Salto", slug: "salto", population: "134.319", economy: "indústrias, comércio, logística e prestação de serviços" },
  { name: "São Roque", slug: "sao-roque", population: "79.484", economy: "turismo, comércio, serviços, indústria e produção rural" },
  { name: "Mairinque", slug: "mairinque", population: "47.441", economy: "indústrias, logística, comércio e prestação de serviços" },
  { name: "Piedade", slug: "piedade", population: "52.970", economy: "agricultura, comércio, serviços e pequenas indústrias" },
  { name: "Cerquilho", slug: "cerquilho", population: "44.695", economy: "indústrias, comércio e prestação de serviços" },
  { name: "Tietê", slug: "tiete", population: "39.719", economy: "indústrias, comércio, serviços e atividades agropecuárias" },
  { name: "Itapetininga", slug: "itapetininga", population: "157.790", economy: "serviços, comércio, indústrias e agronegócio" },
  { name: "Indaiatuba", slug: "indaiatuba", population: "255.748", economy: "indústrias, tecnologia, logística, comércio e serviços" },
  { name: "Cabreúva", slug: "cabreuva", population: "47.877", economy: "indústrias, logística, comércio e serviços" },
  { name: "Itupeva", slug: "itupeva", population: "70.616", economy: "indústrias, logística, comércio, serviços e turismo" },
  { name: "Jundiaí", slug: "jundiai", population: "443.116", economy: "indústrias, logística, tecnologia, comércio e serviços" },
  { name: "Campo Limpo Paulista", slug: "campo-limpo-paulista", population: "77.632", economy: "indústrias, comércio, serviços e integração econômica com a região de Jundiaí" },
  { name: "Vargem Grande Paulista", slug: "vargem-grande-paulista", population: "50.346", economy: "comércio, serviços, logística e indústrias próximas ao eixo da Rodovia Raposo Tavares" },
  { name: "Cotia", slug: "cotia", population: "274.413", economy: "serviços, comércio, logística, tecnologia e indústrias no eixo da Rodovia Raposo Tavares" },
  { name: "Ibiúna", slug: "ibiuna", population: "71.217", economy: "agricultura, turismo, comércio e prestação de serviços" }
].map((city) => ({
  ...city,
  route: `/advogado-trabalhista/${city.slug}`,
  image: `/cidades/advogado-trabalhista-${city.slug}-sp.webp`
}));

const LOCAL_CITY_CONTENT = {
  votorantim: {
    workContext: "A proximidade e a integração cotidiana com Sorocaba fazem com que muitos trabalhadores circulem entre as duas cidades. Indústria, comércio e serviços criam rotinas diversas de jornada, remuneração e deslocamento.",
    practicalContext: "O atendimento pode começar de forma digital, com envio dos documentos disponíveis, e seguir presencialmente no escritório em Sorocaba quando necessário.",
    related: ["salto-de-pirapora", "piedade", "aracoiaba-da-serra"]
  },
  itu: {
    workContext: "O mercado de trabalho local combina indústria, centros logísticos, comércio, turismo e serviços. Essa diversidade envolve desde jornadas por turnos até remuneração variável e contratos ligados a atividades sazonais.",
    practicalContext: "Quem mora ou trabalha em Itu pode apresentar documentos e relatar o caso por atendimento digital, sem precisar se deslocar para a conversa inicial.",
    related: ["salto", "porto-feliz", "boituva"]
  },
  tatui: {
    workContext: "Além do comércio e dos serviços urbanos, Tatuí mantém relações de emprego ligadas à indústria e ao agronegócio. Cada setor pode ter formas diferentes de controle de jornada, exposição a riscos e pagamento de adicionais.",
    practicalContext: "Contracheques, cartões de ponto, mensagens e documentos da rescisão podem ser encaminhados digitalmente para uma avaliação inicial organizada.",
    related: ["itapetininga", "cerquilho", "tiete"]
  },
  "porto-feliz": {
    workContext: "Em Porto Feliz, atividades industriais convivem com comércio, serviços e trabalho rural. O enquadramento da função e a rotina efetivamente praticada são importantes para analisar jornada, adicionais e verbas de desligamento.",
    practicalContext: "O atendimento remoto permite organizar o histórico do vínculo antes de definir se será necessário encontro presencial em Sorocaba.",
    related: ["itu", "boituva", "tiete"]
  },
  "salto-de-pirapora": {
    workContext: "A presença de indústria e mineração cria situações de trabalho que podem envolver turnos, equipamentos de proteção, condições ambientais e adicionais, além das questões comuns de rescisão e FGTS.",
    practicalContext: "A análise começa pelos fatos e documentos do caso; atendimento digital e presencial em Sorocaba podem ser combinados conforme a necessidade.",
    related: ["votorantim", "piedade", "aracoiaba-da-serra"]
  },
  "aracoiaba-da-serra": {
    workContext: "O município reúne atividades rurais, comércio e serviços, além de moradores que se deslocam para trabalhar em outras cidades da região. Por isso, local da prestação, horários e forma de contratação precisam ser considerados em conjunto.",
    practicalContext: "O atendimento digital facilita a conversa inicial para quem trabalha fora do município ou tem dificuldade de comparecer ao escritório em horário comercial.",
    related: ["sorocaba", "votorantim", "salto-de-pirapora"]
  },
  ipero: {
    workContext: "Indústria, serviços e atividades ligadas ao polo tecnológico regional convivem com relações de trabalho técnicas e operacionais. Registros de função, jornada e treinamentos podem ser relevantes para compreender o vínculo.",
    practicalContext: "Documentos podem ser enviados por meio digital para que o relato seja confrontado com holerites, ponto e registros mantidos pelo trabalhador.",
    related: ["boituva", "tatui", "cerquilho"]
  },
  boituva: {
    workContext: "Boituva combina indústria e logística com comércio, serviços e turismo. Turnos, controle de jornada, comissões e trabalho em períodos de maior movimento podem exigir análises diferentes.",
    practicalContext: "A conversa inicial pode ocorrer online, permitindo reunir documentos antes de eventual atendimento presencial na sede em Sorocaba.",
    related: ["ipero", "porto-feliz", "cerquilho"]
  },
  salto: {
    workContext: "A atividade industrial e logística tem peso relevante ao lado do comércio e dos serviços. Para o trabalhador, é importante registrar horários, função real, pagamentos e condições de desligamento.",
    practicalContext: "O atendimento digital permite avaliar inicialmente o contrato e os registros do vínculo, mesmo com a sede física do escritório em Sorocaba.",
    related: ["itu", "indaiatuba", "cabreuva"]
  },
  "sao-roque": {
    workContext: "Turismo, comércio, serviços, indústria e produção rural geram vínculos com características bastante diferentes. Sazonalidade, trabalho aos fins de semana e forma de registro da jornada merecem atenção conforme a atividade.",
    practicalContext: "A orientação pode começar online, com explicação da rotina e envio dos documentos que ajudem a reconstruir o histórico de trabalho.",
    related: ["mairinque", "ibiuna", "vargem-grande-paulista"]
  },
  mairinque: {
    workContext: "A posição regional de Mairinque favorece atividades industriais e logísticas, além do comércio e dos serviços. Deslocamentos, turnos e divergências entre a função registrada e a rotina real podem influenciar a análise.",
    practicalContext: "O primeiro atendimento pode ser digital e concentrar-se na cronologia do vínculo, nos comprovantes de pagamento e nos documentos da rescisão.",
    related: ["sao-roque", "ibiuna", "vargem-grande-paulista"]
  },
  piedade: {
    workContext: "Agricultura, comércio, serviços e pequenas indústrias compõem um mercado com trabalho urbano e rural. A natureza da atividade e a forma como o serviço era dirigido ajudam a definir quais direitos devem ser avaliados.",
    practicalContext: "Quem está em área rural ou distante do centro pode iniciar o atendimento digitalmente e organizar documentos sem deslocamento imediato.",
    related: ["ibiuna", "votorantim", "salto-de-pirapora"]
  },
  cerquilho: {
    workContext: "A presença industrial, somada ao comércio e aos serviços, envolve funções operacionais, administrativas e de atendimento. Jornada, banco de horas e verbas rescisórias devem ser conferidos de acordo com a rotina comprovável.",
    practicalContext: "Uma avaliação inicial remota ajuda a separar documentos relevantes e dúvidas antes da definição dos próximos passos.",
    related: ["tiete", "tatui", "boituva"]
  },
  tiete: {
    workContext: "Tietê reúne indústria, comércio, serviços e atividades agropecuárias. Essa combinação torna importante distinguir o tipo de vínculo, o local efetivo do trabalho e as condições de jornada.",
    practicalContext: "O trabalhador pode iniciar o contato online e encaminhar contrato, holerites, extratos e documentos de desligamento para organização do caso.",
    related: ["cerquilho", "porto-feliz", "tatui"]
  },
  itapetininga: {
    workContext: "Como polo regional de serviços e comércio, com presença industrial e do agronegócio, Itapetininga reúne vínculos urbanos e rurais. Função, horários, adicionais e forma de rescisão precisam ser analisados conforme cada contexto.",
    practicalContext: "O atendimento digital reduz a necessidade de deslocamento até Sorocaba e permite uma primeira análise baseada em documentos e relato cronológico.",
    related: ["tatui", "piedade", "cerquilho"]
  },
  indaiatuba: {
    workContext: "Indústria, tecnologia e logística convivem com um setor amplo de comércio e serviços. Turnos, metas, remuneração variável, banco de horas e mudanças de função são pontos que podem surgir nesses ambientes.",
    practicalContext: "Como o escritório está em Sorocaba, o atendimento para Indaiatuba é oferecido inicialmente por canais digitais, sem afirmar a existência de unidade física na cidade.",
    related: ["salto", "cabreuva", "itupeva"]
  },
  cabreuva: {
    workContext: "As atividades industriais e logísticas se somam ao comércio e aos serviços locais. Documentos de jornada, descrição da função e comprovantes de pagamento ajudam a avaliar diferenças entre o contrato e a prática.",
    practicalContext: "O caso pode ser apresentado remotamente, com organização prévia das informações antes de qualquer decisão sobre medida jurídica.",
    related: ["itupeva", "jundiai", "indaiatuba"]
  },
  itupeva: {
    workContext: "Itupeva combina indústria e logística com comércio, serviços e turismo. A variedade de atividades pode envolver escalas, trabalho em fins de semana, comissões e diferentes sistemas de controle de jornada.",
    practicalContext: "Atendimento digital e envio remoto de documentos permitem analisar o caso sem confundir atendimento na cidade com uma unidade física do escritório.",
    related: ["jundiai", "cabreuva", "indaiatuba"]
  },
  jundiai: {
    workContext: "O porte do mercado de Jundiaí e a presença de indústria, logística, tecnologia, comércio e serviços produzem relações de emprego variadas. Metas, turnos, cargos de confiança e bancos de horas exigem leitura cuidadosa dos fatos.",
    practicalContext: "O escritório atende trabalhadores de Jundiaí por meios digitais; a sede e o atendimento presencial permanecem exclusivamente em Sorocaba.",
    related: ["itupeva", "cabreuva", "campo-limpo-paulista"]
  },
  "campo-limpo-paulista": {
    workContext: "A integração econômica com Jundiaí faz parte da rotina de muitos trabalhadores, ao lado da indústria, do comércio e dos serviços locais. Município de residência, local de trabalho e deslocamento não devem ser confundidos na análise.",
    practicalContext: "O atendimento remoto permite apresentar uma demanda sem sugerir que o escritório possui endereço físico em Campo Limpo Paulista.",
    related: ["jundiai", "itupeva", "cabreuva"]
  },
  "vargem-grande-paulista": {
    workContext: "Comércio, serviços, logística e atividades próximas ao eixo da Rodovia Raposo Tavares favorecem deslocamentos entre municípios. Horários de trajeto não se confundem automaticamente com jornada, e cada rotina precisa ser comprovada.",
    practicalContext: "A orientação é iniciada digitalmente, com a sede física mantida em Sorocaba e sem indicação de unidade local.",
    related: ["cotia", "sao-roque", "ibiuna"]
  },
  cotia: {
    workContext: "O mercado de Cotia reúne serviços, comércio, logística, tecnologia e indústria ao longo de diferentes eixos urbanos. Metas, controle remoto de jornada, trabalho externo e remuneração variável podem exigir documentação específica.",
    practicalContext: "O atendimento trabalhista é realizado inicialmente online; o escritório não anuncia unidade física em Cotia.",
    related: ["vargem-grande-paulista", "sao-roque", "ibiuna"]
  },
  ibiuna: {
    workContext: "Agricultura e turismo convivem com comércio e serviços, formando relações de trabalho rurais, urbanas e sazonais. É importante identificar quem dirigia a atividade, como ocorria o pagamento e quais horários eram praticados.",
    practicalContext: "O atendimento digital facilita a análise para moradores de áreas afastadas e preserva a informação correta de que a sede física fica em Sorocaba.",
    related: ["piedade", "sao-roque", "vargem-grande-paulista"]
  }
};

for (const city of LOCAL_LABOR_CITIES) {
  Object.assign(city, LOCAL_CITY_CONTENT[city.slug]);
}

export const LOCAL_LABOR_CITY_BY_ROUTE = new Map(LOCAL_LABOR_CITIES.map((city) => [city.route, city]));
