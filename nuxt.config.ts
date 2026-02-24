// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

const sharedAssets = resolve(__dirname, "../../shared-assets");
const store = resolve(__dirname, "../../shared-assets/images/store_");
const drinks = resolve(__dirname, "../../shared-assets/images/drinks_/05-webp");
// const store = resolve(__dirname, "../../shared-assets/images/store_");

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  debug: true,
  devtools: { enabled: true },

  modules: ["@nuxt/icon", "@nuxtjs/color-mode", "reka-ui/nuxt"],

  alias: {
    // Note: The path is relative to the *root* of the mono-repo,
    // or relative to the workspace, you may need to adjust the '../../'
    // based on your exact file structure.
    // "~shared-assets": "../../shared-assets",
    "@shared-assets": sharedAssets,
    "@store": store,
    "@drinks": drinks,
    // Alternatively, an absolute path is safer, e.g.,
    // '~shared-assets': path.resolve(__dirname, '../../shared-assets'),
  },
  css: [
    "~/assets/css/main.css",
    // "~/assets/css/all.css",
    // "~/assets/css/sandstone-3.css",
    // '~/assets/css/main-vanilla.css'
    // "~/assets/css/main.css",
  ],
  // Disable the manifest to stop the 404s in dev
  experimental: {
    appManifest: false,
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: { include: ["lucide-vue-next"] },
    resolve: { dedupe: ["vue", "lucide-vue-next"] },
    // server: {
    //   fs: {
    //     // Allow serving files from one level up to the project root
    //     allow: [".."],
    //   },
    // },
  },

  // ssr: true, // keep SSR enabled — static generation still works

  // nitro: {
  //   preset: "github_pages", // IMPORTANT
  // },

  // app: {
  //   baseURL: "/sandstone-cafe.github.io/", // REQUIRED for GitHub Pages
  // },
});
