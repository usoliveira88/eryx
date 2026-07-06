import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { renderPageHtml } from "./site.js";

const siteOrigin = process.env.VITE_SITE_URL || "https://advmartinsfernandes.com.br";

const pageInputs = {
  main: resolve("index.html"),
  about: resolve("quem-somos/index.html"),
  contact: resolve("contato/index.html"),
  practice: resolve("atuacao/index.html"),
  workerLabor: resolve("atuacao/direito-trabalhista-trabalhadores/index.html"),
  companyLabor: resolve("atuacao/direito-trabalhista-empresas/index.html"),
  realEstate: resolve("atuacao/direito-imobiliario/index.html"),
  familyLaw: resolve("atuacao/direito-de-familia/index.html"),
  articles: resolve("artigos/index.html"),
  rescisaoIndirectArticle: resolve("artigos/rescisao-indireta-sorocaba/index.html"),
  laborArticle: resolve("artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica/index.html"),
  realEstateArticle: resolve("artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar/index.html"),
  familyArticle: resolve("artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca/index.html")
};

const pageRoutes = new Map([
  [pageInputs.main, "/"],
  [pageInputs.about, "/quem-somos"],
  [pageInputs.contact, "/contato"],
  [pageInputs.practice, "/atuacao"],
  [pageInputs.workerLabor, "/atuacao/direito-trabalhista-trabalhadores"],
  [pageInputs.companyLabor, "/atuacao/direito-trabalhista-empresas"],
  [pageInputs.realEstate, "/atuacao/direito-imobiliario"],
  [pageInputs.familyLaw, "/atuacao/direito-de-familia"],
  [pageInputs.articles, "/artigos"],
  [pageInputs.rescisaoIndirectArticle, "/artigos/rescisao-indireta-sorocaba"],
  [pageInputs.laborArticle, "/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica"],
  [pageInputs.realEstateArticle, "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar"],
  [pageInputs.familyArticle, "/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca"]
]);

const routeImages = new Map([
  ["/quem-somos", "/home-retrato-advogado.jpg"],
  ["/contato", "/home-retrato-advogado.jpg"],
  ["/artigos/rescisao-indireta-sorocaba", "/artigos/rescisao-indireta-sorocaba.jpg"],
  ["/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica", "/artigos/artigo-trabalhista-rescisao.jpg"],
  ["/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar", "/artigos/artigo-imobiliario.jpg"],
  ["/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca", "/artigos/artigo-familia-divorcio-guarda.jpg"]
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

function legalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Eryx Fernandes Advocacia",
    legalName: "Eryx Fernandes Advocacia",
    url: siteOrigin,
    logo: absoluteUrl("/favicon-512.png"),
    image: absoluteUrl("/home-cta-advogado.jpg"),
    telephone: "+55 15 99687-4689",
    email: "eryx@advmartinsfernandes.com",
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
    sameAs: ["https://www.instagram.com/adv.eryxfernandes/"],
    availableLanguage: "pt-BR"
  };
}

function staticSeoTags(route, html) {
  const title = readTitle(html);
  const description = readDescription(html);
  const type = route.startsWith("/artigos/") ? "article" : "website";
  const canonical = absoluteUrl(route);
  const image = absoluteUrl(routeImages.get(route) || "/home-cta-advogado.jpg");
  const schemaJson = JSON.stringify(legalServiceSchema()).replace(/</g, "\\u003c");

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

function prerenderPages() {
  return {
    name: "prerender-static-html",
    transformIndexHtml: {
      order: "pre",
      handler(html, context) {
        const route = pageRoutes.get(resolve(context.filename));
        if (!route) return html;

        const bodyClass = route === "/" ? "page-home" : "page-internal";
        const staticHtml = renderPageHtml(route).trim();

        return html
          .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
          .replace(/<meta\s+name=["']description["'][\s\S]*?\/>\s*/i, "")
          .replace("</head>", `    ${staticSeoTags(route, html)}\n  </head>`)
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
