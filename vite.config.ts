import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true,
    port: 3001,
  },
  resolve: {
    alias: {
      '@layout': '/src/Layout',
    },
  },
   build: {
    // Optional - prevents native rollup plugins
    target: 'esnext'
  }
})
