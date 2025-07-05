// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  // ... 
  css: [
    // '~/assets/css/main.css'
    // '~/assets/css/main-vanilla.css'
    '~/assets/css/main-tailwind.css'
  ],

  // ...
  vite: {
    plugins: [
      tailwindcss(),
      {
        // https://github.com/tailwindlabs/tailwindcss/discussions/16119
        name: "vite-plugin-ignore-sourcemap-warnings",
        apply: "build",
        configResolved(config) {
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (
              warning.code === "SOURCEMAP_BROKEN" &&
              warning.plugin === "@tailwindcss/vite:generate:build"
            ) {
              return;
            }

            warn(warning);
          };
        },
      }
    ],
  },
  // ...
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    'nuxt-gtag'
  ],
  // content: {
  //   experimental: { nativeSqlite: true },
  // },
  gtag: {
    id: 'G-CZ7GYPR1YD'
  },
  googleFonts: {
// │ [nuxt:google-fonts] ℹ Montserrat-italic-300_500-cyrillic
// │ [nuxt:google-fonts] ℹ Montserrat-italic-300_500
// │ [nuxt:google-fonts] ℹ Montserrat-italic-300_500-latin
// │ [nuxt:google-fonts] ℹ Montserrat-normal-300_700-cyrillic
// │ [nuxt:google-fonts] ℹ Montserrat-normal-300_700
// │ [nuxt:google-fonts] ℹ Montserrat-normal-300_700-latin
// │ [nuxt:google-fonts] ✔ Download fonts completed.
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
          ital: '300..500'
          // ,
          // subsets: ['latin']
        },
        // https://fonts.google.com/selection/embed
        'Voltaire': {
          wght: '300..500'
          // ,
          // subsets: ['latin']
        }
      }
  },
  // ... other Nuxt configurations
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})