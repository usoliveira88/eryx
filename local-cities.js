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

export const LOCAL_LABOR_CITY_BY_ROUTE = new Map(LOCAL_LABOR_CITIES.map((city) => [city.route, city]));
