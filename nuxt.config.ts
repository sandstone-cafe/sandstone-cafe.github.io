// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // ... 
  css: [
    // '~/assets/css/main.css'
    // '~/assets/css/main-vanilla.css'
    '~/assets/css/main-tailwind.css'
  ],

  // ...
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  // ...
  modules: [
  '@nuxtjs/google-fonts',

  ],
  googleFonts: {
      display: 'swap',
      useStylesheet: true,
      inject: true,
      download: true,
      families: {
        // 'Montserrat': [300, 400, 500, 600, 700],
        // 'Montserrat/ligth': [300, 400, 500],
        // // 'Inter': [300, 400, 500, 600, 700],
        // // 'Open Sans': [300, 400, 500, 600, 700]
        'Montserrat': {
          wght: '300..700',
          ital: '300..500',
        },
        // https://fonts.google.com/selection/embed
        'Voltaire': {
          wght: '300..500'
        }
      }
  },
  // ... other Nuxt configurations
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})