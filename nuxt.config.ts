// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: [
    // '~/assets/css/main.css'
    // '~/assets/css/main-vanilla.css'
    "~/assets/css/main-tailwind.css",
  ],
});
