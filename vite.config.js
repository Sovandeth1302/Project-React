import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 80,
    host: '0.0.0.0' // Allows the server to be accessed from any network interface
  },
  plugins: [react()],
  css: {
    devSourcemap: false
  },
})

  


