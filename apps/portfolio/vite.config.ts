import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "PUBLIC_",

  plugins: [react(), tsconfigPaths(), nodePolyfills({ protocolImports: true })],

  server: { host: true, port: 4200 },
  preview: { host: true, port: 4300 },
});
