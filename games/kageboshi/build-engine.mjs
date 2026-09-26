// Bundles src/ (three.js included) into engine.js, which index.tsx imports.
// Run from this directory: node build-engine.mjs  (needs three and esbuild in ./node_modules)
import { build } from "esbuild";
await build({
  entryPoints: ["src/game.js"], bundle: true, format: "esm", target: "es2020", minify: true,
  loader: { ".json": "json" }, outfile: "engine.js", legalComments: "eof",
  nodePaths: [new URL("./node_modules", import.meta.url).pathname, ...(process.env.NODE_PATH || "").split(":").filter(Boolean)],
});
console.log("engine.js built");
