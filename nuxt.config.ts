// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  ssr: false,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['@heroicons/vue']
  }
}
