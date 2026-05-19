import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: process.env.PORT ? Number(process.env.PORT) : 4173,

    // 👇 DAS HIER NEU
    allowedHosts: ['fitnesstrainer-frontend.onrender.com'],
  },
})
