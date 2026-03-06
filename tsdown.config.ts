import { defineConfig, type UserConfig } from "tsdown";

const commonConfig: UserConfig = {
  dts: true,
  format: ["esm", "cjs"],
  target: "es2020",
  sourcemap: true,
  deps: {
    neverBundle: [/\/tokenizer(\.ts)?$/]
  },
  outExtensions: (info) => {
    if (info.format === "cjs") {
      return { js: ".cjs" };
    }
    return { js: ".js" };
  },
  outputOptions: (_options, format) => ({
    paths: (id: string) => {
      if (/\/src\/tokenizer(\.ts)?$/.test(id)) {
        return `./tokenizer${format === "cjs" ? ".cjs" : ".js"}`;
      }
      return id;
    }
  })
}

export default defineConfig([{
  entry: "./src/index.ts",
  outDir: "./dist",
  ...commonConfig
}, {
  entry: "./src/sdk.ts",
  outDir: "./dist",
  ...commonConfig
}, {
  entry: "./src/encoding/*",
  outDir: "./dist/encoding/",
  sourcemap: false,
  minify: false,
  ...commonConfig
}, {
  entry: "./src/tokenizer.ts",
  outDir: "./dist",
  ...commonConfig
}]);
