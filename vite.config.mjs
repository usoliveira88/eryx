import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { renderPageHtml } from "./site.js";
import { LOCAL_LABOR_CITIES, LOCAL_LABOR_CITY_BY_ROUTE } from "./local-cities.js";

const siteOrigin = process.env.VITE_SITE_URL || "https://www.advmartinsfernandes.com.br";
const googleAdsId = "AW-17500415588";

function googleAdsTag(html) {
  if (html.includes(googleAdsId)) return "";

  return `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${googleAdsId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${googleAdsId}');
    </script>`;
}

function googleAdsConversionTag(html) {
  if (html.includes("AW-17500415588/GkJ8CPCG8OMcEOTM7JhB")) return "";

  return `<!-- Event snippet for Clique no Whatsapp (1) conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-17500415588/GkJ8CPCG8OMcEOTM7JhB',
      'event_callback': callback
  });
  return false;
}
</script>`;
}

const pageInputs = {
  main: resolve("index.html"),
  about: resolve("quem-somos/index.html"),
  contact: resolve("contato/index.html"),
  practice: resolve("atuacao/index.html"),
  workerLabor: resolve("atuacao/direito-trabalhista-trabalhadores/index.html"),
  indirectTermination: resolve("atuacao/rescisao-indireta/index.html"),
  terminationPayments: resolve("atuacao/verbas-rescisorias/index.html"),
  missingFgts: resolve("atuacao/fgts-nao-depositado/index.html"),
  overtime: resolve("atuacao/horas-extras/index.html"),
  workplaceHarassment: resolve("atuacao/assedio-moral-no-trabalho/index.html"),
  workplaceAccident: resolve("atuacao/acidente-de-trabalho/index.html"),
  companyLabor: resolve("atuacao/direito-trabalhista-empresas/index.html"),
  realEstate: resolve("atuacao/direito-imobiliario/index.html"),
  familyLaw: resolve("atuacao/direito-de-familia/index.html"),
  alimony: resolve("atuacao/pensao-alimenticia/index.html"),
  articles: resolve("artigos/index.html"),
  overtimeUnpaidArticle: resolve("artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar/index.html"),
  harassmentArticle: resolve("artigos/assedio-moral-no-trabalho-como-identificar/index.html"),
  workplaceAccidentArticle: resolve("artigos/acidente-de-trabalho-direitos-do-trabalhador/index.html"),
  nr01CompaniesArticle: resolve("artigos/nr-01-novas-exigencias-empresas-sorocaba/index.html"),
  missingFgtsArticle: resolve("artigos/fgts-nao-depositado-como-conferir/index.html"),
  rescisaoIndirectArticle: resolve("artigos/rescisao-indireta-sorocaba/index.html"),
  laborArticle: resolve("artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica/index.html"),
  realEstateArticle: resolve("artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar/index.html"),
  familyArticle: resolve("artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca/index.html"),
  alimonyLateArticle: resolve("artigos/pensao-alimenticia-atrasada-como-cobrar/index.html")
};

pageInputs.servedCities = resolve("cidades-atendidas/index.html");

for (const city of LOCAL_LABOR_CITIES) {
  pageInputs[`localLabor_${city.slug.replaceAll("-", "_")}`] = resolve(`advogado-trabalhista/${city.slug}/index.html`);
}

const pageRoutes = new Map([
  [pageInputs.main, "/"],
  [pageInputs.about, "/quem-somos"],
  [pageInputs.contact, "/contato"],
  [pageInputs.practice, "/atuacao"],
  [pageInputs.workerLabor, "/atuacao/direito-trabalhista-trabalhadores"],
  [pageInputs.indirectTermination, "/atuacao/rescisao-indireta"],
  [pageInputs.terminationPayments, "/atuacao/verbas-rescisorias"],
  [pageInputs.missingFgts, "/atuacao/fgts-nao-depositado"],
  [pageInputs.overtime, "/atuacao/horas-extras"],
  [pageInputs.workplaceHarassment, "/atuacao/assedio-moral-no-trabalho"],
  [pageInputs.workplaceAccident, "/atuacao/acidente-de-trabalho"],
  [pageInputs.companyLabor, "/atuacao/direito-trabalhista-empresas"],
  [pageInputs.realEstate, "/atuacao/direito-imobiliario"],
  [pageInputs.familyLaw, "/atuacao/direito-de-familia"],
  [pageInputs.alimony, "/atuacao/pensao-alimenticia"],
  [pageInputs.articles, "/artigos"],
  [pageInputs.overtimeUnpaidArticle, "/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar"],
  [pageInputs.harassmentArticle, "/artigos/assedio-moral-no-trabalho-como-identificar"],
  [pageInputs.workplaceAccidentArticle, "/artigos/acidente-de-trabalho-direitos-do-trabalhador"],
  [pageInputs.nr01CompaniesArticle, "/artigos/nr-01-novas-exigencias-empresas-sorocaba"],
  [pageInputs.missingFgtsArticle, "/artigos/fgts-nao-depositado-como-conferir"],
  [pageInputs.rescisaoIndirectArticle, "/artigos/rescisao-indireta-sorocaba"],
  [pageInputs.laborArticle, "/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"],
  [pageInputs.realEstateArticle, "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar"],
  [pageInputs.familyArticle, "/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca"],
  [pageInputs.alimonyLateArticle, "/artigos/pensao-alimenticia-atrasada-como-cobrar"]
]);

pageRoutes.set(pageInputs.servedCities, "/cidades-atendidas");

for (const city of LOCAL_LABOR_CITIES) {
  pageRoutes.set(pageInputs[`localLabor_${city.slug.replaceAll("-", "_")}`], city.route);
}

const routeImages = new Map([
  ["/cidades-atendidas", "/home-hero-fallback-desktop.webp"],
  ["/quem-somos", "/home-retrato-advogado.jpg"],
  ["/contato", "/home-retrato-advogado.jpg"],
  ["/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar", "/artigos/hora-extra-qual-valor-sorocaba.jpg"],
  ["/artigos/assedio-moral-no-trabalho-como-identificar", "/artigos/assedio-moral-trabalho-sorocaba.webp"],
  ["/artigos/acidente-de-trabalho-direitos-do-trabalhador", "/artigos/acidente-trabalho-sorocaba.webp"],
  ["/artigos/nr-01-novas-exigencias-empresas-sorocaba", "/artigos/nr-01-sorocaba.jpg"],
  ["/artigos/fgts-nao-depositado-como-conferir", "/artigos/fgts-nao-depositado.jpg"],
  ["/artigos/rescisao-indireta-sorocaba", "/artigos/rescisao-indireta-sorocaba.jpg"],
  ["/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica", "/artigos/artigo-trabalhista-rescisao.jpg"],
  ["/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar", "/artigos/artigo-imobiliario.jpg"],
  ["/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca", "/artigos/artigo-familia-divorcio-guarda.jpg"]
  ,["/artigos/pensao-alimenticia-atrasada-como-cobrar", "/artigos/pensao-alimenticia-atrasada.webp"]
]);

const seoByRoute = new Map([
  ["/cidades-atendidas", {
    title: "Cidades Atendidas | Advogado Trabalhista | Dr. Eryx Fernandes",
    description: "Confira as cidades atendidas pelo Dr. Eryx Fernandes em Direito Trabalhista. Atendimento a trabalhadores em Sorocaba, Votorantim, Itu, Jundiaí e outras cidades de São Paulo."
  }],
  ["/", {
    title: "Escritório de Advocacia em Sorocaba | Eryx Fernandes",
    description: "Escritório de advocacia em Sorocaba com atuação em Direito Trabalhista, Trabalhista Empresarial, Direito de Família e Direito Imobiliário. Fale conosco."
  }],
  ["/quem-somos", {
    title: "Eryx Fernandes Advocacia em Sorocaba | Quem Somos",
    description: "Conheça Eryx Fernandes Advocacia, escritório em Sorocaba com atendimento jurídico claro, próximo e direcionado às necessidades de cada cliente."
  }],
  ["/atuacao/direito-trabalhista-trabalhadores", {
    title: "Advogado Trabalhista em Sorocaba | Eryx Fernandes",
    description: "Advogado trabalhista em Sorocaba para rescisão indireta, justa causa, FGTS, horas extras, assédio, acidente de trabalho e verbas rescisórias."
  }],
  ["/atuacao/direito-trabalhista-empresas", {
    title: "Advogado Trabalhista Empresarial em Sorocaba | Eryx",
    description: "Advogado trabalhista empresarial em Sorocaba para defesa em reclamações, consultoria preventiva, contratos, jornada, demissões e redução de riscos."
  }],
  ["/atuacao/direito-de-familia", {
    title: "Advogado de Família em Sorocaba | Eryx Fernandes",
    description: "Advogado de família em Sorocaba para divórcio, pensão alimentícia, guarda, convivência, partilha de bens e reconhecimento de união estável."
  }],
  ["/atuacao/pensao-alimenticia", {
    title: "Advogado para Pensão Alimentícia em Sorocaba | Eryx",
    description: "Advogado para pensão alimentícia em Sorocaba em casos de pedido, cobrança, atraso, revisão, exoneração e descumprimento de acordo. Fale com o escritório."
  }],
  ["/atuacao/direito-imobiliario", {
    title: "Advogado Imobiliário em Sorocaba | Eryx Fernandes",
    description: "Advogado imobiliário em Sorocaba para contratos, compra e venda, locações, despejo, regularização de imóveis e conflitos condominiais."
  }],
  ["/artigos", { title: "Artigos Jurídicos | Eryx Fernandes Advocacia" }],
  ["/artigos/horas-extras-nao-pagas-como-comprovar-e-cobrar", { title: "Horas Extras Não Pagas: Como Comprovar e Cobrar? | Eryx Fernandes", description: "Entenda como comprovar horas extras não pagas, quais provas podem ser utilizadas e quais cuidados o trabalhador deve tomar para buscar seus direitos." }],
  ["/artigos/assedio-moral-no-trabalho-como-identificar", { title: "Assédio Moral no Trabalho: Como Identificar? | Eryx Fernandes", description: "Saiba quais situações podem caracterizar assédio moral no trabalho, como reunir provas e quando buscar orientação jurídica." }],
  ["/artigos/acidente-de-trabalho-direitos-do-trabalhador", { title: "Acidente de Trabalho: Quais São os Direitos? | Eryx Fernandes", description: "Entenda quais direitos podem existir após um acidente de trabalho, a importância da CAT, documentos, afastamento e análise jurídica do caso." }],
  ["/artigos/pensao-alimenticia-atrasada-como-cobrar", { title: "Pensão Alimentícia Atrasada: Como Cobrar? | Eryx Fernandes", description: "A pensão alimentícia está atrasada ou sendo paga parcialmente? Entenda como funciona a cobrança, quais documentos reunir e quando procurar orientação jurídica." }],
  ["/contato", {
    title: "Contato | Escritório de Advocacia em Sorocaba",
    description: "Fale com Eryx Fernandes Advocacia, escritório de advocacia em Sorocaba. Atendimento pelo WhatsApp, telefone, e-mail ou formulário."
  }]
]);

function absoluteUrl(path) {
  return new URL(path, siteOrigin).href;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function readTitle(html) {
  return html.match(/<title>([\s\S]*?)<\/title>/i)?.[1].trim() || "Eryx Fernandes Advocacia";
}

function readDescription(html) {
  return (
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']\s*\/?>/i)?.[1].trim() ||
    "Advocacia estrategica em Sorocaba/SP."
  );
}

function organizationGraph(route) {
  const organizationId = absoluteUrl("/#organization");
  const personId = absoluteUrl("/quem-somos#eryx-fernandes");
  const graph = [
    {
      "@type": "LegalService",
      "@id": organizationId,
      name: "Eryx Fernandes Advocacia",
      legalName: "Eryx Fernandes Advocacia",
      url: siteOrigin,
      logo: absoluteUrl("/favicon-512.png"),
      image: absoluteUrl("/home-cta-advogado.jpg"),
      telephone: "+55 15 99687-4689",
      email: "eryx@advmartinsfernandes.com",
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
      sameAs: ["https://www.instagram.com/adv.eryxfernandes/"],
      availableLanguage: "pt-BR"
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Eryx Fernandes",
      honorificPrefix: "Dr.",
      jobTitle: "Advogado",
      identifier: "OAB/SP nº 530.983",
      url: absoluteUrl("/quem-somos"),
      worksFor: { "@id": organizationId },
      sameAs: ["https://www.instagram.com/adv.eryxfernandes/"]
    }
  ];

  if (route === "/") {
    graph.push({
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: "Eryx Fernandes Advocacia",
      alternateName: "Eryx Fernandes Advocacia",
      url: siteOrigin,
      publisher: { "@id": organizationId },
      inLanguage: "pt-BR"
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

function staticSeoTags(route, html) {
  const city = LOCAL_LABOR_CITY_BY_ROUTE.get(route);
  const configuredSeo = city ? {
    title: `Advogado Trabalhista em ${city.name} | Dr. Eryx Fernandes`,
    description: `Advogado Trabalhista em ${city.name} especializado em Horas Extras, Demissão por Justa Causa, Demissão sem Justa Causa, Assédio Moral, Assédio Sexual, FGTS e outros direitos do trabalhador. Fale com o Dr. Eryx Fernandes.`
  } : seoByRoute.get(route);
  const title = configuredSeo?.title || readTitle(html);
  const description = configuredSeo?.description || readDescription(html);
  const type = route.startsWith("/artigos/") ? "article" : "website";
  const canonical = absoluteUrl(route);
  const image = absoluteUrl(city?.image || routeImages.get(route) || "/home-cta-advogado.jpg");
  const schemaJson = JSON.stringify(organizationGraph(route)).replace(/</g, "\\u003c");

  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:site_name" content="Eryx Fernandes Advocacia" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `<script type="application/ld+json" id="legal-service-schema">${schemaJson}</script>`
  ].join("\n    ");
}

function commercialHomeHtml(html) {
  const commercialBlock = `
      <section class="home-commercial-intro" aria-labelledby="home-commercial-title">
        <div class="section-shell">
          <div class="section-heading">
            <h2 id="home-commercial-title">Escritório de Advocacia em Sorocaba com atuação em diferentes áreas do Direito</h2>
            <p>Eryx Fernandes Advocacia oferece atendimento jurídico em Sorocaba para trabalhadores, empresas, famílias, proprietários, compradores, vendedores e condomínios. O escritório atua em Direito Trabalhista, Trabalhista Empresarial, Direito de Família e Direito Imobiliário, com orientação individualizada e análise responsável de cada situação.</p>
          </div>
        </div>
      </section>`;

  return html
    .replace(/<p class="hero-kicker">[\s\S]*?<\/p>/, '<p class="hero-kicker">ESCRITÓRIO DE ADVOCACIA EM SOROCABA</p>')
    .replace(
      /(<h1>[\s\S]*?<\/h1>\s*)<p>[\s\S]*?<\/p>/,
      "$1<p>Advocacia estratégica em Direito Trabalhista, Trabalhista Empresarial, Direito de Família e Direito Imobiliário, com técnica, clareza e proximidade.</p>"
    )
    .replace('</section>\n\n      <section class="practice-section"', `</section>${commercialBlock}\n\n      <section class="practice-section"`);
}

const commercialH1ByRoute = new Map([
  ["/quem-somos", "Eryx Fernandes Advocacia em Sorocaba"],
  ["/contato", "Fale com um Escritório de Advocacia em Sorocaba"],
  ["/atuacao/direito-trabalhista-trabalhadores", "Advogado Trabalhista em Sorocaba"]
]);

function commercialRouteHtml(route, html) {
  const h1 = commercialH1ByRoute.get(route);
  if (!h1) return html;
  return html.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/, `<h1$1>${h1}</h1>`);
}

function prerenderPages() {
  return {
    name: "prerender-static-html",
    transformIndexHtml: {
      order: "pre",
      handler(html, context) {
        const route = pageRoutes.get(resolve(context.filename));
        if (!route) return html;

        const bodyClass = route === "/" ? "page-home" : "page-internal";
        const renderedHtml = renderPageHtml(route).trim();
        const staticHtml = commercialRouteHtml(route, route === "/" ? commercialHomeHtml(renderedHtml) : renderedHtml);
        const trackingTag = googleAdsTag(html);
        const conversionTag = googleAdsConversionTag(html);

        return html
          .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
          .replace(/<meta\s+name=["']description["'][\s\S]*?\/>\s*/i, "")
          .replace("</head>", `    ${staticSeoTags(route, html)}\n    ${trackingTag}\n    ${conversionTag}\n  </head>`)
          .replace("<body>", `<body class="${bodyClass}">`)
          .replace('<div id="app"></div>', `<div id="app" data-static-rendered="true">\n${staticHtml}\n    </div>`);
      }
    }
  };
}

function copySeoFiles() {
  return {
    name: "copy-seo-files",
    apply: "build",
    async closeBundle() {
      await mkdir("dist", { recursive: true });
      await Promise.all([
        copyFile("robots.txt", "dist/robots.txt"),
        copyFile("sitemap.xml", "dist/sitemap.xml")
      ]);
    }
  };
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: pageInputs
    }
  },
  plugins: [prerenderPages(), copySeoFiles()]
});
