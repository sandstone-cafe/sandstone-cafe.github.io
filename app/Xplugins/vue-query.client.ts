/**
 * Vue Query Plugin
 * ----------------
 * Provides a global QueryClient instance to the Nuxt app.
 * Equivalent to <QueryClientProvider> in React.
 */

import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("QueryClient");
  const queryClient = new QueryClient();

  nuxtApp.vueApp.use(VueQueryPlugin, { queryClient });
});
