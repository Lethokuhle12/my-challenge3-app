import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Lethokuhle12/my-challenge3-app', 
})
