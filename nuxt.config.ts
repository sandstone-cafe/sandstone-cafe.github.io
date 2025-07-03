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
  modules: [
  '@nuxtjs/google-fonts', // '@nuxtjs/google-analytics',

  ],
  googleFonts: {
      display: 'swap',
      useStylesheet: true,
      inject: true,
      download: true,
      families: {
        'Montserrat': [300, 400, 500, 600, 700],
        // 'Inter': [300, 400, 500, 600, 700],
        // 'Open Sans': [300, 400, 500, 600, 700]
      }
  },
  // ... other Nuxt configurations
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})