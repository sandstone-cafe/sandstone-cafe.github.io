<script setup lang="ts">
/**
 * AboutSection.vue
 * -----------------
 * Nuxt 4.3 + Vue 3 conversion of the original React AboutSection.tsx.
 *
 * Key improvements:
 * - Tailwind v4 CSS-first classes preserved exactly.
 * - Floating badge styling fixed (React's className → Vue's class).
 * - SSR-safe: no client-only logic, no hydration mismatches.
 * - Uses Nuxt/Vite asset import for images.
 */

import cafeInterior from '~/assets/images/demo/cafe-interior.jpg'
</script>

<template>
  <section id="about" class="py-20 md:py-28 bg-card">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Text Column -->
        <div class="order-2 lg:order-1">
          <!-- Section label -->
          <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-2">
            Our Story
          </p>

          <!-- Heading -->
          <h2 class="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
            More than just<br />a café
          </h2>

          <!-- Description paragraphs -->
          <div class="space-y-4 text-muted-foreground font-sans leading-relaxed">
            <p>
              The Morning was born from a simple belief: that the first meal of the day deserves to be extraordinary.
              We source our ingredients from local farms, roast our beans in-house, and bake our bread fresh every
              morning.
            </p>
            <p>
              Whether you're grabbing a quick coffee, settling in for a long brunch, or ordering catering for your team
              —
              we bring the same care, warmth, and quality to everything we do.
            </p>
          </div>

          <!-- Stats -->
          <div class="mt-8 grid grid-cols-3 gap-6">
            <div>
              <p class="font-serif text-3xl text-foreground">7am</p>
              <p class="text-sm text-muted-foreground font-sans mt-1">Doors open daily</p>
            </div>

            <div>
              <p class="font-serif text-3xl text-foreground">100%</p>
              <p class="text-sm text-muted-foreground font-sans mt-1">Locally sourced</p>
            </div>

            <div>
              <p class="font-serif text-3xl text-foreground">5★</p>
              <p class="text-sm text-muted-foreground font-sans mt-1">Google rating</p>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="order-1 lg:order-2 relative">

          <!-- Main image -->
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img :src="cafeInterior" alt="The Morning café interior" class="w-full h-80 md:h-[30rem] object-cover"
              loading="lazy" />
          </div>

          <!-- Floating badge -->
          <div class="absolute -top-4 -left-4 md:-left-8 bg-primary text-primary-foreground
                   rounded-xl p-4 shadow-lg">
            <p class="font-serif text-lg leading-none">Since</p>
            <p class="font-serif text-3xl leading-none mt-1">2024</p>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
