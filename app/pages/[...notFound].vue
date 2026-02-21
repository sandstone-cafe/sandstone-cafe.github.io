<script setup lang="ts">
/**
 * pages/[...notFound].vue
 * ------------------------
 * Nuxt 4.3 replacement for React's NotFound.tsx.
 *
 * Features:
 * - Uses Nuxt's file-based routing for the catch‑all 404 page.
 * - Logs the missing route on the client only (SSR-safe).
 * - Tailwind v4 tokens preserved (bg-muted, text-muted-foreground, etc.).
 * - No hydration mismatches: no inline opacity, no client-only DOM changes.
 */

import { onMounted } from 'vue'
import { useRoute } from '#imports'

const route = useRoute()

/**
 * Log the 404 error on the client only.
 * Avoids hydration mismatches by not running during SSR.
 */
onMounted(() => {
  console.error(
    '404 Error: User attempted to access non-existent route:',
    route.fullPath
  )
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-muted">
    <div class="text-center">
      <h1 class="mb-4 text-4xl font-bold">404</h1>

      <p class="mb-4 text-xl text-muted-foreground">
        Oops! Page not found
      </p>

      <!-- NuxtLink replaces <a href="/"> -->
      <NuxtLink to="/" class="text-primary underline hover:text-primary/90">
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>
