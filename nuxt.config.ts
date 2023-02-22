// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  app: {
    head: {
      title: 'homeboard'
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['@heroicons/vue']
  }
})
