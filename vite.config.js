import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/sgcm14/0523C02-router-params-app/", // Ruta del repositorio
  // base:"/", // para local descomentar aqui y comentar arriba
  plugins: [react()],
})
