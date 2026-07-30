import assert from "node:assert/strict";
import test from "node:test";
import { getWhatsAppUrl, professionalRegistrationLink, renderPageHtml, SITE_CONFIG } from "./site.js";

const routes = [
  "/",
  "/quem-somos",
  "/atuacao",
  "/atuacao/direito-trabalhista-trabalhadores",
  "/atuacao/direito-trabalhista-empresas",
  "/atuacao/direito-imobiliario",
  "/atuacao/direito-de-familia",
  "/artigos",
  "/artigos/nr-01-novas-exigencias-empresas-sorocaba",
  "/artigos/rescisao-indireta-sorocaba",
  "/artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica",
  "/artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar",
  "/artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca",
  "/contato"
];

const expectedUrl =
  `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

test("gera a URL centralizada com número e mensagem corretos", () => {
  assert.equal(SITE_CONFIG.whatsappNumber, "5515996874689");
  assert.equal(SITE_CONFIG.whatsappMessage, "Vim pelo Google e quero mais informações.");
  assert.equal(getWhatsAppUrl(), expectedUrl);
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

  for (const route of routes.filter((route) => route.startsWith("/artigos/"))) {
    assert.match(home, new RegExp(`href="${route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`), route);
  }
});

test("inclui autoria e datas completas nos dados estruturados dos artigos", () => {
  for (const route of routes.filter((route) => route.startsWith("/artigos/"))) {
    const html = renderPageHtml(route);
    assert.match(html, /"datePublished":"2026-/);
    assert.match(html, /"dateModified":"2026-/);
    assert.match(html, /"name":"Eryx Fernandes"/);
    assert.match(html, /"url":"https:\/\/advmartinsfernandes\.com\.br\/quem-somos"/);
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
