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
  // modules: [
  //   ['@nuxtjs/google-fonts', {
  //       families: {
  //         Montserrat: true
  //         // Roboto: true,
  //         // Inter: [400, 700],
  //         // 'Josefin+Sans': true,
  //         // Lato: [100, 300],
  //         // Raleway: {
  //         //   wght: [100, 400],
  //         //   ital: [100]
  //         // },
  //         // Inter: '200..700',
  //         // 'Crimson Pro': {
  //         //   wght: '200..900',
  //         //   ital: '200..700',
  //         // }
  //       }
  //   }],
  // ]

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

  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts']
})