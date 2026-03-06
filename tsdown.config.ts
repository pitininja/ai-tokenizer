import { defineConfig, type UserConfig } from "tsdown";

const commonConfig: UserConfig = {
  deps: {
    neverBundle: [/\/tokenizer(\.ts)?$/]
  },
  outExtensions: (info) => {
    if (info.format === "cjs") {
      return { js: ".cjs" };
    }
    return { js: ".js" };
  }
}

export default defineConfig([{
  entry: "./src/index.ts",
  outDir: "./dist",
  dts: true,
  format: ["esm", "cjs"],
  target: "es2020",
  sourcemap: true,
  ...commonConfig
}, {
  entry: "./src/sdk.ts",
  outDir: "./dist",
  dts: true,
  format: ["esm", "cjs"],
  target: "es2020",
  sourcemap: true,
  ...commonConfig
}, {
  entry: "./src/encoding/*",
  outDir: "./dist/encoding/",
  format: ["esm", "cjs"],
  target: "es2020",
  dts: true,
  sourcemap: false,
  minify: false,
  ...commonConfig
}, {
  entry: "./src/tokenizer.ts",
  outDir: "./dist",
  dts: true,
  format: ["esm", "cjs"],
  target: "es2020",
  sourcemap: true,
  ...commonConfig
}]);
