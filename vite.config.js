import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@sse-editor/icons",
      fileName: "index",
    },
    emptyOutDir: false,
  },
  plugins: [dts()],
});
