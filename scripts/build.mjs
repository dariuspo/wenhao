// Assembles dist/ — the only thing that should ever be uploaded to a host.
// Deliberately excludes claude.md, .mcp.json, .qa/, node_modules/, and scripts/.
//
//   npm run build
//
// The page is served as index.html (hosts use it as the directory default);
// the working copy keeps whatever filename you prefer.

import { cp, mkdir, rm, writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIST = path.join(ROOT, "dist");

const PAGE = "wenhao.html"; // source filename of the page

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

await writeFile(path.join(DIST, "index.html"), await readFile(path.join(ROOT, PAGE)));
await cp(path.join(ROOT, "styles.css"), path.join(DIST, "styles.css"));
await cp(path.join(ROOT, "assets"), path.join(DIST, "assets"), { recursive: true });

// tells GitHub Pages to serve files as-is rather than running them through Jekyll
await writeFile(path.join(DIST, ".nojekyll"), "");

console.log(`dist/ ready — ${PAGE} → index.html, styles.css, assets/`);
