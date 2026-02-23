<script setup lang="ts">
/**
 * HeroSection.vue
 * ----------------
 * Nuxt 4.3 + Tailwind 4.1 hero with animated handwritten SandstoneLogo.
 * Fully SSR‑safe. Smooth scrolling handled client‑side only.
 */

import SandstoneLogo from '~/components/SandstoneLogo.vue'
// import heroImg from '~/assets/images/demo/hero-breakfast.jpg'
// interior-front-facing-v3-153kb_Lnn.webp
// interior-front-facing-v5-153kb_Lnn.webp
import heroImg from '~/assets/images/hero-section/interior-front-facing-v3-153kb_Lnn.webp'
// import heroImg from '@store/03-upscale/interior-front-facing-v3-153kb_Lnn.jpeg';

/**
 * Hydration‑safe smooth scroll.
 * Runs only on click (client-side), never during SSR.
 */
function scrollToId(id: string) {
  const el = document.querySelector(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- <section id="home" class="relative min-h-screen flex items-center overflow-hidden"> -->
  <section id="home" class="dark force-light-content relative min-h-screen flex items-center overflow-hidden">



    <!-- Background image -->
    <div class="absolute inset-0">
      <img :src="heroImg" alt="Beautifully plated breakfast with eggs, sausages and toast"
        class="w-full h-full object-cover" loading="eager" />

      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      <!-- <div class="absolute inset-0 bg-gradient-to-r from-background/95  to-transparent" /> -->
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
      <div class="max-w-2xl">

        <!-- Animated handwritten logo -->
        <div class="animate-fade-up delay-0">
          <SandstoneLogo class="w-full max-w-xl" :animate="true" />
        </div>

        <!-- Subtitle -->
        <p class="mt-6 text-lg text-muted-foreground font-sans max-w-md leading-relaxed animate-fade-up delay-200">
          Fresh breakfasts, artisan sandwiches, and the perfect latte — crafted daily with love.
        </p>

        <!-- CTA buttons -->
        <div class="mt-8 flex flex-wrap gap-4 animate-fade-up delay-300">
          <button type="button" @click="scrollToId('#menu')"
            class="bg-accent text-accent-foreground font-sans text-sm font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
            View Menu
          </button>

          <button type="button" @click="scrollToId('#contact')"
            class="border border-border text-foreground font-sans text-sm font-semibold px-8 py-4 rounded-lg hover:bg-muted/50 transition-colors">
            Book a Table
          </button>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
        <div class="w-1.5 h-3 rounded-full bg-foreground/40" />
      </div>
    </div>

  </section>
</template>

<style scoped>
/**
 * Tailwind v4 removed delay utilities, so we add tiny helpers.
 * These are SSR‑safe because they do not set opacity.
 */
.delay-0 {
  animation-delay: 0ms
}

.delay-200 {
  animation-delay: 200ms
}

.delay-300 {
  animation-delay: 300ms
}
</style>
