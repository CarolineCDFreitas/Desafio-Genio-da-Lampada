import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Desafio-Genio-da-Lampada/',
  plugins: [react()],
})
