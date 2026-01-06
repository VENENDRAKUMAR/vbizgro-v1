import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    // 👇 this is the key for local dev routing
    fs: {
      strict: true,
    },
    // 👇 fallback for React Router
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
  },
  preview: {
    port: 4173,
    strictPort: true,
    // 👇 fallback for preview server too
    historyApiFallback: true,
  },
  base: '/', // 👈 important for production
})
