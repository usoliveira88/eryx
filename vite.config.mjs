import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "vite";

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
  laborArticle: resolve("artigos/direitos-trabalhistas-quando-procurar-orientacao-juridica/index.html"),
  realEstateArticle: resolve("artigos/contratos-imobiliarios-pontos-de-atencao-antes-de-assinar/index.html"),
  familyArticle: resolve("artigos/divorcio-guarda-partilha-como-tomar-decisoes-com-seguranca/index.html")
};

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
  plugins: [copySeoFiles()]
});
