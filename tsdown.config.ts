import { defineConfig } from "tsdown";

const tokenizerExternalRegex = /\/tokenizer(\.ts)?$/;

export default defineConfig([{
  entry: "./src/index.ts",
  outDir: "./dist",
  dts: true,
  format: ["esm", "cjs"],
  target: "es2020",
  sourcemap: true,
  external: [tokenizerExternalRegex]
}, {
  entry: "./src/sdk.ts",
  outDir: "./dist",
  dts: true,
  format: ["esm", "cjs"],
  target: "es2020",
  sourcemap: true,
  external: [tokenizerExternalRegex]
}, {
  entry: "./src/encoding/*",
  outDir: "./dist/encoding/",
  format: ["esm", "cjs"],
  target: "es2020",
  dts: true,
  sourcemap: false,
  minify: false,
}, {
  entry: "./src/tokenizer.ts",
  outDir: "./dist",
  dts: true,
  format: ["esm", "cjs"],
  target: "es2020",
  sourcemap: true,
}]);
