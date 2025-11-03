import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://busbook-b518.vercel.app",
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
