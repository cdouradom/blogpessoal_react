import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: {
      overlay: false, // Desabilita overlay pode ajudar
    },
  },
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'], // Exclua plugins do Vite
  },
})