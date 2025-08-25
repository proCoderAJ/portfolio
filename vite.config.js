import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    sourcemap: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'styled-components', 'framer-motion']
  }
})