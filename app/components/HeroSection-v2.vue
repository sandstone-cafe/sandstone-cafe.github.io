<script setup lang="ts">
/**
 * HeroSection.vue
 * ----------------
 * Nuxt 4.3 + Tailwind 4.1 + Reka‑UI 2.8 conversion of the original React HeroSection.
 *
 * Key improvements:
 * - Radial overlay implemented correctly (top-left → transparent).
 * - No hydration mismatches (no opacity:0 on SSR).
 * - Smooth scrolling implemented safely.
 * - Tailwind v4.1 token classes preserved (text-accent, bg-foreground/40, etc.).
 * - Fully SSR‑compatible.
 */

import heroImg from '~/assets/images/hero-breakfast.jpg'
import image from '@store/03-upscale/interior-front-facing-v3-153kb_Lnn.jpeg';
import SandstoneLogo from "@/components/SandstoneLogo";
/**
 * Smooth scroll helper.
 * Runs only on client, but safe because it does not affect SSR DOM.
 */
function scrollToId(id: string) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden">

    <!-- Background image -->
    <div class="absolute inset-0">
      <img :src="image" alt="Beautifully plated breakfast with eggs, sausages and toast"
        class="w-full h-full object-cover" loading="eager" />

      <!-- Correct radial overlay -->
      <div class="absolute inset-0 pointer-events-none" style="
          background:
            radial-gradient(
              circle at top left,
              rgba(255,255,255,0.92) 0%,
              rgba(255,255,255,0.85) 25%,
              rgba(255,255,255,0.70) 40%,
              transparent 75%
            );
        " />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
      <div class="max-w-xl">

        <!--         <Sandstone name="dave" />-->

        <!-- Tagline -->
        <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-4 animate-fade-up"
          style="animation-delay: 0ms;">
          Eat In or Take Out
        </p>

        <!-- Main heading -->
        <h1 class="font-serif text-5xl sm:text-6xl lg:text-8xl text-foreground leading-[0.95] animate-fade-up"
          style="animation-delay: 100ms;">
          Start your<br />
          morning<br />
          <span class="text-accent">right</span>
        </h1>

        <!-- Description -->
        <p class="mt-6 text-lg text-muted-foreground font-sans max-w-md leading-relaxed animate-fade-up"
          style="animation-delay: 200ms;">
          Fresh breakfasts, artisan sandwiches, and the perfect latte — crafted daily with love.
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex flex-wrap gap-4 animate-fade-up" style="animation-delay: 300ms;">
          <button type="button"
            class="bg-accent text-accent-foreground font-sans text-sm font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            @click="scrollToId('#menu')">
            View Menu
          </button>

          <button type="button"
            class="border border-border text-foreground font-sans text-sm font-semibold px-8 py-4 rounded-lg hover:bg-muted/50 transition-colors"
            @click="scrollToId('#contact')">
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