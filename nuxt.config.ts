import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [['cookie-universal-nuxt', { alias: 'cookiz' }]],

  vite: {
    server: {
      proxy: {
        '/api/': {
          target: 'https://api.notion.com',
          changeOrigin: true,
          secure: false,
          ws: true,
        }
      }
    }
  },
})
