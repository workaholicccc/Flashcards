import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  "deploy": "gh-pages -d dist",  // Change from 'build' to 'dist'
  "build": "vite build",
  base: '/Flashcards/',
})
