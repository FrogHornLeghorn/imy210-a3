export default defineNuxtConfig({
  compatibilityDate: '2026-05-10',

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:1337'
    }
  }
})