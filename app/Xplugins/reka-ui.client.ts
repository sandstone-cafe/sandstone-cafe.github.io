/**
 * Reka UI Provider Plugin
 * -----------------------
 * Registers TooltipProvider globally.
 */

import { TooltipProvider } from "reka-ui";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("TooltipProvider", TooltipProvider);
});
