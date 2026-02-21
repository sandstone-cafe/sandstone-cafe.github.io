/**
 * Vue Sonner Plugin
 * -----------------
 * Registers the <VSonner /> toast component globally.
 * Must be client-only because it uses browser APIs.
 */

import { Toaster, toast } from "vue-sonner";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VSonner", Toaster);

  // return {
  //   provide: {
  //     toast,
  //   },
  // };

  // return {
  //   provide: {
  //     toast,
  //   },
  // };
});

// export default defineNuxtPlugin({
//   name: "VSonner",
//   enforce: "pre",
//   async setup(nuxtApp) {
//     // Plugin setup logic
//     // const data = await $fetch("/api/config");

//     return {
//       provide: {
//         // config: data,
//         Toaster,
//       },
//     };
//   },
//   hooks: {
//     "app:created"() {
//       console.log("TOAST created!");
//     },
//   },
// });
