import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function safeJoin(base, requestPath) {
  const decoded = decodeURIComponent(requestPath.split("?")[0]);
  const cleaned = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  return join(base, cleaned);
}

async function exists(path) {
  try {
    const info = await stat(path);
    return info;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    let filePath = safeJoin(root, url.pathname);
    let info = await exists(filePath);

    if (info?.isDirectory()) {
      filePath = join(filePath, "index.html");
      info = await exists(filePath);
    }

    if (!info && !extname(url.pathname)) {
      filePath = join(root, url.pathname, "index.html");
      info = await exists(filePath);
    }

    if (!info) {
      filePath = safeJoin(join(root, "public"), url.pathname);
      info = await exists(filePath);
    }

    if (!info && !url.pathname.includes(".")) {
      filePath = join(root, "index.html");
      info = await exists(filePath);
    }

    if (!info || info.isDirectory()) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("Arquivo nao encontrado.");
      return;
    }

    const ext = extname(filePath).toLowerCase();
    const longCacheAssets = new Set([".ico", ".jpeg", ".jpg", ".mp4", ".png", ".svg", ".webp"]);
    res.writeHead(200, {
      "content-type": types[ext] || "application/octet-stream",
      "cache-control": longCacheAssets.has(ext) ? "public, max-age=31536000, immutable" : "no-cache"
    });
    res.end(await readFile(filePath));
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end(`Erro interno: ${error.message}`);
  }
}).listen(port, () => {
  console.log(`Eryx Fernandes Advocacia: http://localhost:${port}`);
});
