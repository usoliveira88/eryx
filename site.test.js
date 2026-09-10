import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { getWhatsAppUrl, isWhatsAppUrl, professionalRegistrationLink, renderPageHtml, restoreLocalDocumentMeta, SITE_CONFIG } from "./site.js";
import { LOCAL_LABOR_CITIES } from "./local-cities.js";

const routes = [
  "/",
  "/quem-somos",
  "/atuacao",
  "/atuacao/direito-trabalhista-trabalhadores",
  "/atuacao/rescisao-indireta",
  "/atuacao/verbas-rescisorias",
  "/atuacao/fgts-nao-depositado",
  "/atuacao/horas-extras",
  "/atuacao/assedio-moral-no-trabalho",
  "/atuacao/acidente-de-trabalho",
  "/atuacao/direito-trabalhista-empresas",
  "/atuacao/direito-imobiliario",
  "/atuacao/direito-de-familia",
  "/atuacao/pensao-alimenticia",
  "/artigos",
  "/artigos/contrato-compra-venda-imovel-cuidados",
  "/artigos/usucapiao-regularizacao-imovel",
  "/artigos/demissao-por-justa-causa-empresa",
  "/artigos/empresa-pode-proibir-celular-trabalho",
  "/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar",
  "/artigos/assedio-moral-no-trabalho-como-identificar",
  "/artigos/acidente-de-trabalho-direitos-do-trabalhador",
  "/artigos/fgts-nao-depositado-como-conferir",
  "/artigos/nr-01-novas-exigencias-empresas-sorocaba",
  "/artigos/rescisao-indireta-sorocaba",
  "/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica",
  "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar",
  "/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca",
  "/artigos/pensao-alimenticia-atrasada-como-cobrar",
  "/contato",
  "/cidades-atendidas",
  ...LOCAL_LABOR_CITIES.map((city) => city.route)
];

const expectedUrl =
  `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

test("gera a URL centralizada com número e mensagem corretos", () => {
  assert.equal(SITE_CONFIG.whatsappNumber, "5515996874689");
  assert.equal(SITE_CONFIG.whatsappMessage, "Vim pelo Google e quero mais informações.");
  assert.equal(getWhatsAppUrl(), expectedUrl);
});

test("identifica todas as variantes de URL do WhatsApp", () => {
  assert.equal(isWhatsAppUrl("https://wa.me/5515996874689"), true);
  assert.equal(isWhatsAppUrl("https://api.whatsapp.com/send?phone=5515996874689"), true);
  assert.equal(isWhatsAppUrl("https://web.whatsapp.com/send?phone=5515996874689"), true);
  assert.equal(isWhatsAppUrl("https://example.com/whatsapp"), false);
});

test("mantém todos os links de WhatsApp cobertos pelo rastreamento global", () => {
  const siteSource = readFileSync(new URL("./site.js", import.meta.url), "utf8");
  const viteConfig = readFileSync(new URL("./vite.config.mjs", import.meta.url), "utf8");
  let whatsappLinkCount = 0;

  for (const route of routes) {
    const html = renderPageHtml(route);
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
    whatsappLinkCount += hrefs.filter(isWhatsAppUrl).length;
  }

  assert.ok(whatsappLinkCount >= 187);
  assert.match(siteSource, /document\.addEventListener\("click"/);
  assert.match(siteSource, /event\.isTrusted/);
  assert.match(siteSource, /window\.gtag_report_conversion\(link\.href\)/);
  assert.match(siteSource, /window\.gtag_report_conversion\(whatsappUrl\)/);
  assert.match(siteSource, /window\.open\(whatsappUrl, "_blank", "noopener,noreferrer"\)/);
  assert.match(viteConfig, /'send_to': 'AW-17500415588\/GkJ8CPCG8OMcEOTM7JhB'/);
});

test("mantém o domínio canônico com www nos dados institucionais", () => {
  assert.equal(SITE_CONFIG.siteUrl, "https://www.advmartinsfernandes.com.br");
  for (const route of routes) {
    const html = renderPageHtml(route);
    assert.doesNotMatch(html, /https:\/\/advmartinsfernandes\.com\.br/);
  }
});

test("declara a política global de URLs sem barra final", () => {
  const vercelConfig = JSON.parse(readFileSync(new URL("./vercel.json", import.meta.url), "utf8"));
  assert.deepEqual(vercelConfig.redirects[0], {
    source: "/:path+/",
    destination: "/:path+",
    permanent: true
  });
});

test("mantém sitemap e links internos na variante sem barra final", () => {
  const sitemap = readFileSync(new URL("./sitemap.xml", import.meta.url), "utf8");
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  for (const url of sitemapUrls) {
    const pathname = new URL(url).pathname;
    assert.ok(pathname === "/" || !pathname.endsWith("/"), url);
  }

  for (const route of routes) {
    const html = renderPageHtml(route);
    const internalLinks = [...html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)].map((match) => match[1]);
    for (const href of internalLinks) {
      assert.ok(href === "/" || !href.endsWith("/"), `${route}: ${href}`);
    }
  }
});

test("exibe exatamente um botão flutuante acessível em cada página pública", () => {
  for (const route of routes) {
    const html = renderPageHtml(route);
    assert.equal((html.match(/class="floating-whatsapp"/g) || []).length, 1, route);
    assert.match(html, /target="_blank"/);
    assert.match(html, /rel="noopener noreferrer"/);
    assert.match(html, /aria-label="Falar com o Dr\. Eryx Fernandes pelo WhatsApp"/);
    assert.ok(html.includes(expectedUrl), route);
  }
});

test("mantém links de navegação interna importantes", () => {
  const home = renderPageHtml("/");
  assert.match(home, /href="\/atuacao">Conhecer áreas de atuação/);
  assert.match(home, /href="\/quem-somos">Conheça o escritório/);
  assert.match(home, /href="\/artigos">Ver todos os artigos/);
  assert.match(home, /href="\/contato">Contato/);
});

test("direciona os CTAs comerciais do cabeçalho e da Home ao WhatsApp", () => {
  const home = renderPageHtml("/");
  assert.match(home, new RegExp(`href="${expectedUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}" target="_blank" rel="noopener noreferrer">Fale conosco`));
  assert.match(home, new RegExp(`href="${expectedUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}" target="_blank" rel="noopener noreferrer">Falar com o escritório`));
  assert.match(home, new RegExp(`href="${expectedUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}" target="_blank" rel="noopener noreferrer">Entrar em contato`));
});

test("liga cada card da Home ao artigo correspondente", () => {
  const home = renderPageHtml("/");
  assert.doesNotMatch(home, /href="\/artigos">Ler artigo<\/a>/);

  for (const route of routes.filter((route) => route.startsWith("/artigos/") && route !== "/artigos/pensao-alimenticia-atrasada-como-cobrar")) {
    assert.match(home, new RegExp(`href="${route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), route);
  }
});

test("inclui autoria e datas completas nos dados estruturados dos artigos", () => {
  for (const route of routes.filter((route) => route.startsWith("/artigos/"))) {
    const html = renderPageHtml(route);
    assert.match(html, /"datePublished":"2026-/);
    assert.match(html, /"dateModified":"2026-/);
    assert.match(html, /"name":"Eryx Fernandes"/);
    assert.match(html, /"url":"https:\/\/www\.advmartinsfernandes\.com\.br\/quem-somos"/);
  }
});

test("gera o link institucional da inscrição profissional sem alterar o texto", () => {
  const link = professionalRegistrationLink();
  assert.match(link, /href="https:\/\/www2\.oabsp\.org\.br\/asp\/consultainscritos\/consulta01\.asp"/);
  assert.match(link, /target="_blank"/);
  assert.match(link, /rel="noopener noreferrer"/);
  assert.match(link, />OAB\/SP nº 530\.983<\/a>/);
  assert.match(link, /class="professional-registration-link"/);
});

test("torna clicáveis todas as ocorrências visíveis exatas da inscrição", () => {
  for (const route of routes) {
    const html = renderPageHtml(route);
    const exactOccurrences = (html.match(/>OAB\/SP nº 530\.983</g) || []).length;
    const linkedOccurrences = (html.match(/class="professional-registration-link"[^>]*>OAB\/SP nº 530\.983<\/a>/g) || []).length;
    assert.ok(exactOccurrences > 0, route);
    assert.equal(linkedOccurrences, exactOccurrences, route);
  }
});

test("preserva a cor do link da inscrição em todos os estados", async () => {
  const css = await import("node:fs/promises").then((fs) => fs.readFile(new URL("./site.css", import.meta.url), "utf8"));
  assert.match(css, /\.professional-registration-link:visited[\s\S]*?color:\s*inherit;/);
  assert.match(css, /\.professional-registration-link:hover[\s\S]*?color:\s*inherit;/);
  assert.match(css, /\.professional-registration-link:active[\s\S]*?color:\s*inherit;/);
  assert.match(css, /\.professional-registration-link:focus[\s\S]*?color:\s*inherit;/);
  assert.match(css, /\.professional-registration-link:focus-visible[\s\S]*?outline:\s*2px solid currentColor;/);
});

test("mantém as recomendações de artigos totalmente opacas", async () => {
  const css = await import("node:fs/promises").then((fs) => fs.readFile(new URL("./site.css", import.meta.url), "utf8"));
  assert.match(css, /\.editorial-article-card\s*\{[\s\S]*?background:\s*var\(--white\);/);
  assert.match(css, /\.article-recommendations\.reveal-block\s*\{[\s\S]*?animation:\s*none;[\s\S]*?opacity:\s*1;/);
});

test("renderiza LPs trabalhistas com conteúdo, conversão e dados estruturados próprios", () => {
  const landingRoutes = routes.filter((route) =>
    ["/atuacao/rescisao-indireta", "/atuacao/verbas-rescisorias", "/atuacao/fgts-nao-depositado", "/atuacao/horas-extras", "/atuacao/assedio-moral-no-trabalho", "/atuacao/acidente-de-trabalho"].includes(route)
  );
  for (const route of landingRoutes) {
    const html = renderPageHtml(route);
    assert.match(html, /class="labor-landing-page"/);
    assert.match(html, /<h1>.+<\/h1>/);
    assert.match(html, /"@type":"Service"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /home-retrato-advogado/);
    assert.match(html, /href="\/atuacao\/direito-trabalhista-trabalhadores"/);
  }
});

test("concentra a conversão da página trabalhista para trabalhadores no WhatsApp", () => {
  const html = renderPageHtml("/atuacao/direito-trabalhista-trabalhadores");
  assert.match(html, /<h1 class="worker-hero-display-title">Advogado Trabalhista em Sorocaba<\/h1>/);
  assert.match(html, /class="worker-hero-trust"/);
  for (const route of ["/atuacao/rescisao-indireta", "/atuacao/verbas-rescisorias", "/atuacao/fgts-nao-depositado", "/atuacao/horas-extras", "/atuacao/assedio-moral-no-trabalho", "/atuacao/acidente-de-trabalho"]) {
    assert.doesNotMatch(html, new RegExp(`href="${route}"`), route);
  }
  assert.equal((html.match(/class="worker-service-card"/g) || []).length, 6);
  for (const text of [
    "Defesa dos seus direitos quando a empresa comete uma falta grave e a continuidade do vínculo de trabalho se torna insustentável.",
    "Atuação para cobrar diferenças, parcelas não pagas e valores que possam ter sido deixados de fora da sua rescisão.",
    "Defesa do trabalhador quando a empresa deixa de realizar corretamente os depósitos de FGTS durante o contrato.",
    "Atuação para buscar o pagamento de horas trabalhadas além da jornada e outras diferenças relacionadas ao controle de horário.",
    "Defesa firme diante de humilhações, constrangimentos, perseguições e outras práticas abusivas no ambiente de trabalho.",
    "Atuação na defesa dos direitos do trabalhador após acidente ou adoecimento relacionado ao trabalho."
  ]) {
    assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.equal((html.match(/Falar com o Dr\. Eryx →/g) || []).length, 6);
  assert.doesNotMatch(html, /Documentos que podem ajudar na análise trabalhista/);
  assert.doesNotMatch(html, /Não sabe se tem todos os documentos/);
  assert.doesNotMatch(html, /Ir para contato/);
  assert.doesNotMatch(html, /Veja também as/);
  assert.match(html, /home-retrato-advogado/);
  assert.match(html, /Atendimento direto com o Dr\. Eryx Fernandes/);
  assert.match(html, /class="worker-local-benefits"/);
});

test("apresenta análise trabalhista firme em quatro etapas e remove o bloco de dúvida", () => {
  const affectedRoutes = [
    "/atuacao/direito-trabalhista-trabalhadores",
    ...LOCAL_LABOR_CITIES.map((city) => city.route)
  ];
  const expectedSteps = [
    "Entender quais direitos foram violados",
    "Preparar as provas",
    "Organizar o processo",
    "Defender seus direitos"
  ];

  for (const route of affectedRoutes) {
    const html = renderPageHtml(route);
    assert.doesNotMatch(html, /Nem todo conflito trabalhista começa no processo/, route);
    assert.match(html, /buscar a responsabilização da empresa e proteger os direitos do trabalhador/, route);
    assert.equal((html.match(/class="worker-analysis-steps"/g) || []).length, 1, route);
    for (const step of expectedSteps) assert.match(html, new RegExp(step), `${route}: ${step}`);
  }
});

test("publica as 23 páginas locais trabalhistas com SEO local completo", () => {
  const sitemap = readFileSync(new URL("./sitemap.xml", import.meta.url), "utf8");
  assert.equal(LOCAL_LABOR_CITIES.length, 23);

  for (const city of LOCAL_LABOR_CITIES) {
    const html = renderPageHtml(city.route);
    assert.match(html, new RegExp(`<h1 class="worker-hero-display-title">Advogado Trabalhista em ${city.name}</h1>`));
    assert.match(html, new RegExp(`Atendimento trabalhista em ${city.name}`));
    assert.match(html, new RegExp(`Pontos de atenção para trabalhadores de ${city.name}`));
    assert.match(html, new RegExp(`Cidades próximas de ${city.name}`));
    assert.ok(city.workContext.length > 100, `${city.route}: contexto laboral próprio`);
    assert.ok(city.practicalContext.length > 80, `${city.route}: contexto de atendimento próprio`);
    assert.equal(city.related.length, 3, `${city.route}: três conexões regionais`);
    for (const relatedSlug of city.related) {
      const relatedRoute = relatedSlug === "sorocaba"
        ? "/atuacao/direito-trabalhista-trabalhadores"
        : `/advogado-trabalhista/${relatedSlug}`;
      assert.match(html, new RegExp(`href="${relatedRoute}"`), `${city.route} -> ${relatedRoute}`);
    }
    assert.match(html, new RegExp(`Vista de ${city.name} SP para página de advogado trabalhista`));
    assert.match(html, new RegExp(`src="${city.image.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
    assert.match(html, new RegExp(`Mapa de ${city.name}`));
    assert.match(html, /"@type":"Service"/);
    assert.match(html, /"@type":"BreadcrumbList"/);
    assert.ok(sitemap.includes(`${SITE_CONFIG.siteUrl}${city.route}`), city.route);
  }
});

test("preserva no DOM os metadados estáticos das 23 páginas municipais", () => {
  const viteConfig = readFileSync(new URL("./vite.config.mjs", import.meta.url), "utf8");
  assert.match(viteConfig, /title: `Advogado Trabalhista em \$\{city\.name\} \| Dr\. Eryx Fernandes`/);
  assert.match(viteConfig, /description: `Advogado Trabalhista em \$\{city\.name\} especializado em Horas Extras/);

  const originalDocument = globalThis.document;
  const descriptionMeta = {
    content: "",
    getAttribute(name) {
      return name === "content" ? this.content : null;
    },
    setAttribute(name, value) {
      if (name === "content") this.content = value;
    }
  };

  try {
    globalThis.document = {
      title: "",
      head: { querySelector: () => descriptionMeta }
    };

    for (const city of LOCAL_LABOR_CITIES) {
      const initialTitle = `Advogado Trabalhista em ${city.name} | Dr. Eryx Fernandes`;
      const initialDescription = `Advogado Trabalhista em ${city.name} especializado em Horas Extras, Demissão por Justa Causa, Demissão sem Justa Causa, Assédio Moral, Assédio Sexual, FGTS e outros direitos do trabalhador. Fale com o Dr. Eryx Fernandes.`;
      document.title = "Advogado em Sorocaba | Eryx Fernandes Advocacia";
      descriptionMeta.content = "Advocacia em Sorocaba";

      assert.equal(restoreLocalDocumentMeta(city.route, initialTitle, initialDescription), true, city.route);
      assert.equal(document.title, initialTitle, city.route);
      assert.equal(descriptionMeta.content, initialDescription, city.route);
    }

    const sorocabaTitle = "Advogado Trabalhista em Sorocaba | Eryx Fernandes Advocacia";
    const sorocabaDescription = "Orientação trabalhista em Sorocaba para trabalhadores em casos de rescisão, horas extras, assédio, acidente de trabalho, FGTS e outros direitos.";
    document.title = sorocabaTitle;
    descriptionMeta.content = sorocabaDescription;
    assert.equal(restoreLocalDocumentMeta("/atuacao/direito-trabalhista-trabalhadores", sorocabaTitle, sorocabaDescription), true);
    assert.equal(document.title, sorocabaTitle);
    assert.equal(descriptionMeta.content, sorocabaDescription);
  } finally {
    globalThis.document = originalDocument;
  }
});

test("publica o hub de cidades com 24 cards e links rastreáveis", () => {
  const html = renderPageHtml("/cidades-atendidas");
  assert.match(html, /<h1>Advogado Trabalhista nas cidades da região<\/h1>/);
  assert.equal((html.match(/class="served-city-card"/g) || []).length, 24);
  assert.match(html, /href="\/atuacao\/direito-trabalhista-trabalhadores"/);
  for (const city of LOCAL_LABOR_CITIES) {
    assert.match(html, new RegExp(`href="${city.route}"`), city.route);
    assert.match(html, new RegExp(`src="${city.image.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), city.image);
  }
  assert.match(html, /Ol%C3%A1%2C%20Dr\.%20Eryx\.%20Vim%20pelo%20site/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /href="\/cidades-atendidas">Cidades Atendidas<\/a>/);
});

test("liga as páginas municipais de volta ao hub de cidades", () => {
  for (const city of LOCAL_LABOR_CITIES) {
    assert.match(renderPageHtml(city.route), /href="\/cidades-atendidas">Ver outras cidades atendidas →<\/a>/, city.route);
  }
});

test("renderiza a landing page de pensão alimentícia com SEO, CTA e conteúdo visível", () => {
  const html = renderPageHtml("/atuacao/pensao-alimenticia");
  assert.equal((html.match(/<h1>/g) || []).length, 1);
  assert.match(html, /Advogado para Pensão Alimentícia em Sorocaba/);
  assert.match(html, /text=Vim%20pelo%20Google%20e%20quero%20informa%C3%A7%C3%B5es%20sobre%20pens%C3%A3o%20aliment%C3%ADcia\./);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /Dr\. Eryx Fernandes, advogado em Sorocaba/);
  assert.match(html, /href="\/atuacao\/direito-de-familia"/);
  assert.doesNotMatch(html, /especialista em pensão alimentícia/i);
});

test("mantém todas as LPs sem barreira documental e com SEO comercial local", () => {
  const expectedTitles = new Map([
    ["/atuacao/rescisao-indireta", "Rescisão Indireta"],
    ["/atuacao/verbas-rescisorias", "Verbas Rescisórias"],
    ["/atuacao/fgts-nao-depositado", "FGTS Não Depositado"],
    ["/atuacao/horas-extras", "Horas Extras"],
    ["/atuacao/assedio-moral-no-trabalho", "Assédio Moral no Trabalho"],
    ["/atuacao/acidente-de-trabalho", "Acidente de Trabalho"]
  ]);

  for (const [route, subject] of expectedTitles) {
    const html = renderPageHtml(route);
    assert.doesNotMatch(html, /Documentos úteis/i, route);
    assert.match(html, /Você não precisa reunir documentos antes de entrar em contato/, route);
    assert.match(html, /class="labor-lp-related-grid"/, route);
    assert.match(html, /<h1>[^<]+<\/h1>/, `${route}: ${subject}`);
  }
});

test("publica o artigo de FGTS com fontes oficiais e linkagem interna", () => {
  const html = renderPageHtml("/artigos/fgts-nao-depositado-como-conferir");
  assert.match(html, /FGTS não depositado: como conferir e o que o trabalhador pode fazer\?/);
  assert.match(html, /\/artigos\/fgts-nao-depositado\.jpg/);
  assert.match(html, /Trabalhadora consultando o aplicativo FGTS no celular/);
  assert.match(html, /https:\/\/www\.tst\.jus\.br\/documents\/10157\/0\/IRR070/);
  assert.match(html, /https:\/\/www\.planalto\.gov\.br\/ccivil_03\/leis\/l8036compilada\.htm/);
  assert.match(html, /https:\/\/www\.caixa\.gov\.br\/atendimento\/aplicativos\/fgts/);
  assert.match(html, /https:\/\/www\.gov\.br\/pt-br\/servicos\/realizar-denuncia-trabalhista/);
  assert.match(html, /href="\/atuacao\/fgts-nao-depositado"/);
  assert.match(html, /href="\/atuacao\/rescisao-indireta"/);
  assert.match(html, /href="\/atuacao\/direito-trabalhista-trabalhadores"/);
  assert.match(html, /"@type":"BlogPosting"/);
  assert.match(html, /"@type":"FAQPage"/);
});

test("publica os três novos artigos trabalhistas no padrão editorial existente", () => {
  const expected = [
    {
      route: "/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar",
      h1: "Horas extras não pagas: como comprovar e cobrar os valores?",
      image: "/artigos/hora-extra-qual-valor-sorocaba",
      lp: "/atuacao/horas-extras"
    },
    {
      route: "/artigos/assedio-moral-no-trabalho-como-identificar",
      h1: "Assédio moral no trabalho: como identificar e o que fazer?",
      image: "/artigos/assedio-moral-trabalho-sorocaba",
      lp: "/atuacao/assedio-moral-no-trabalho"
    },
    {
      route: "/artigos/acidente-de-trabalho-direitos-do-trabalhador",
      h1: "Acidente de trabalho: quais são os direitos do trabalhador?",
      image: "/artigos/acidente-trabalho-sorocaba",
      lp: "/atuacao/acidente-de-trabalho"
    }
  ];

  for (const item of expected) {
    const html = renderPageHtml(item.route);
    assert.equal((html.match(/<h1>/g) || []).length, 1, item.route);
    assert.match(html, new RegExp(`<h1>${item.h1.replace(/[?]/g, "\\?")}</h1>`));
    assert.match(html, new RegExp(`${item.image}-1200\\.avif`));
    assert.match(html, new RegExp(`href="${item.lp}"`));
    assert.match(html, /href="\/atuacao\/direito-trabalhista-trabalhadores"/);
    assert.match(html, /"@type":"BlogPosting"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /"@type":"BreadcrumbList"/);
    assert.match(html, /OAB\/SP nº 530\.983/);
  }
});

test("lista os três novos artigos com cards rastreáveis", () => {
  const html = renderPageHtml("/artigos");
  for (const route of [
    "/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar",
    "/artigos/assedio-moral-no-trabalho-como-identificar",
    "/artigos/acidente-de-trabalho-direitos-do-trabalhador"
  ]) {
    assert.match(html, new RegExp(`href="${route}"`));
  }
});

test("publica os quatro novos artigos SEO com linkagem interna e schema", () => {
  const expected = [
    {
      route: "/artigos/contrato-compra-venda-imovel-cuidados",
      h1: "Contrato de Compra e Venda de Imóvel: o que verificar antes de assinar?",
      image: "/artigos/artigo-imobiliario",
      links: ["/atuacao/direito-imobiliario", "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar", "/artigos/usucapiao-regularizacao-imovel", "/quem-somos"]
    },
    {
      route: "/artigos/usucapiao-regularizacao-imovel",
      h1: "Usucapião: quando é possível regularizar um imóvel pela posse?",
      image: "/artigos/artigo-imobiliario",
      links: ["/atuacao/direito-imobiliario", "/artigos/contrato-compra-venda-imovel-cuidados", "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar"]
    },
    {
      route: "/artigos/demissao-por-justa-causa-empresa",
      h1: "Demissão por Justa Causa: quando a empresa pode aplicar?",
      image: "/home-detalhe-documentos",
      links: ["/atuacao/direito-trabalhista-empresas", "/artigos/empresa-pode-proibir-celular-trabalho", "/artigos/nr-01-novas-exigencias-empresas-sorocaba", "/quem-somos"]
    },
    {
      route: "/artigos/empresa-pode-proibir-celular-trabalho",
      h1: "Empresa pode proibir o uso de celular no trabalho?",
      image: "/home-detalhe-documentos",
      links: ["/atuacao/direito-trabalhista-empresas", "/artigos/demissao-por-justa-causa-empresa", "/artigos/nr-01-novas-exigencias-empresas-sorocaba"]
    }
  ];

  const listing = renderPageHtml("/artigos");

  for (const item of expected) {
    const html = renderPageHtml(item.route);
    assert.equal((html.match(/<h1>/g) || []).length, 1, item.route);
    assert.match(html, new RegExp(`<h1>${item.h1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</h1>`));
    assert.match(html, new RegExp(`${item.image.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-1200\\.avif`));
    for (const link of item.links) {
      assert.match(html, new RegExp(`href="${link.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), `${item.route} -> ${link}`);
    }
    assert.match(html, /Falar com o Dr\. Eryx/);
    assert.match(html, /"@type":"BlogPosting"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /"@type":"BreadcrumbList"/);
    assert.match(html, /OAB\/SP nº 530\.983/);
    assert.match(listing, new RegExp(`href="${item.route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
  }
});

test("publica artigo de pensão atrasada com imagem, links e schema", () => {
  const html = renderPageHtml("/artigos/pensao-alimenticia-atrasada-como-cobrar");
  assert.match(html, /Pens\u00e3o aliment\u00edcia atrasada: como cobrar e quais medidas podem ser tomadas\?/i);
  assert.match(html, /\/artigos\/pensao-alimenticia-atrasada\.webp/);
  assert.match(html, /href="\/atuacao\/pensao-alimenticia"/);
  assert.match(html, /href="\/atuacao\/direito-de-familia"/);
  assert.match(html, /"@type":"BlogPosting"/);
  assert.match(html, /"@type":"FAQPage"/);
});
