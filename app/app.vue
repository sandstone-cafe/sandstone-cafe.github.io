<script setup lang="ts">
/**
 * app.vue
 * -------
 * Nuxt 4.3 replacement for React's App.tsx.
 *
 * Responsibilities:
 * - Wraps the entire app in TooltipProvider (Reka-UI)
 * - Registers Vue Query (via plugin)
 * - Registers Vue Sonner toast system (via plugin)
 * - Renders the active page via <NuxtPage />
 * - Renders the active layout via <NuxtLayout />
 *
 * No router setup is needed — Nuxt handles routing automatically.
 */
import { Toaster as VSonner } from 'vue-sonner';
</script>

<template>
  <!-- Global tooltip provider -->
  <TooltipProvider>
    <NuxtLayout>
      <NuxtPage />

      <!-- Toast system (client-only to avoid hydration mismatches) -->
      <ClientOnly>
        <VSonner />
      </ClientOnly>
    </NuxtLayout>
  </TooltipProvider>
</template>
