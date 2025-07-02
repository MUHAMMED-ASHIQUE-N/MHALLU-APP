import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import {VitePWA, type VitePWAOptions} from "vite-plugin-pwa"



const manifestForPlugIn:  Partial<VitePWAOptions> = {
  registerType:'prompt',
  includeAssets:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Nkty-Mahal",
    short_name:"Nkty-Mahal",
    description:"A app for Mahal App",
    icons:[{
      src: '/android-chrome-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/android-chrome-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/maskable_icon.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
} as const


export default defineConfig({
  plugins: [react(), svgr(),VitePWA(manifestForPlugIn)],
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
