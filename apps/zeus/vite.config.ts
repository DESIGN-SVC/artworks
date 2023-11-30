import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "PUBLIC_",

  plugins: [react(), tsconfigPaths()],

  server: { host: true, port: 4200 },
  preview: { host: true, port: 4300 },

  build: {
    assetsInlineLimit: 0,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
})
