// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ... 
  css: ['~/assets/css/main.css'],

  // ...
  // vite: {
  //   plugins: [tailwindcss()],
  // },

  // ...
  // modules: ['@nuxtjs/tailwindcss'],

  // ... other Nuxt configurations
  compatibilityDate: '2025-05-15',

  devtools: { enabled: true }
})
