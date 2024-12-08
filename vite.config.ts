import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/iframe-content': {
        target: 'http://localhost:5173/',
        changeOrigin: true,
        secure: false,
      }
    },
  }
})
