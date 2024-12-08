import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    terserOptions: {
      compress: {
        keep_fargs: true,
        keep_fnames: true
      },
    }
  },
})
