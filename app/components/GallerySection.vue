<script setup lang="ts">
/**
 * GallerySection.vue
 * -------------------
 * Nuxt 4.3 conversion of the original React GallerySection.tsx.
 *
 * Features:
 * - Horizontal scrollable gallery with snap points
 * - Smooth scroll buttons (left/right)
 * - Hydration-safe: DOM access only inside onMounted()
 * - Tailwind v4 CSS-first utilities
 * - Lucide icons via `lucide-vue-next`
 */

import { ref, onMounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

/* Nuxt/Vite asset imports */
import foodLatte from '~/assets/images/demo/food-latte.jpg'
import foodSandwiches from '~/assets/images/demo/food-sandwiches.jpg'
import foodPastries from '~/assets/images/demo/food-pastries.jpg'
import foodBrunch from '~/assets/images/demo/food-brunch.jpg'
import cafeInterior from '~/assets/images/demo/cafe-interior.jpg'

// import foodLatte from '@drinks/fb-202-smoothies-double-v3-1920x1440.webp';

/** Image list */
const images = [
  { src: foodLatte, alt: 'Artisan latte with beautiful latte art' },
  { src: foodSandwiches, alt: 'Gourmet sandwiches on artisan bread' },
  { src: foodPastries, alt: 'Fresh golden croissants and pastries' },
  { src: foodBrunch, alt: 'Brunch spread with eggs benedict' },
  { src: cafeInterior, alt: 'Warm modern café interior' }
]

/** Scroll container reference */
const scrollRef = ref<HTMLDivElement | null>(null)

/**
 * Scroll the gallery left or right.
 * Hydration-safe: only runs after mount.
 */
function scroll(dir: 'left' | 'right') {
  const el = scrollRef.value
  if (!el) return

  const amount = el.offsetWidth * 0.7
  el.scrollBy({
    left: dir === 'left' ? -amount : amount,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section id="gallery" class="py-20 md:py-28 overflow-hidden">
    <!-- Header -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div class="flex items-end justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-2">
            Gallery
          </p>

          <h2 class="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            A taste of what
            <br class="hidden sm:block" />
            we serve
          </h2>
        </div>

        <!-- Scroll buttons (desktop only) -->
        <div class="hidden sm:flex gap-2">
          <button @click="scroll('left')"
            class="p-3 rounded-full border border-border text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Scroll left">
            <ChevronLeft class="w-5 h-5" />
          </button>

          <button @click="scroll('right')"
            class="p-3 rounded-full border border-border text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Scroll right">
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Scrollable gallery -->
    <div ref="scrollRef" class="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide
             px-4 sm:px-6 lg:pl-[calc((100vw-80rem)/2+2rem)]" style="scrollbar-width: none">
      <div v-for="(img, i) in images" :key="i" class="snap-start shrink-0 rounded-2xl overflow-hidden" :class="i % 2 === 0
        ? 'w-72 h-80 md:w-96 md:h-[28rem]'
        : 'w-60 h-72 md:w-80 md:h-96'">
        <img :src="img.src" :alt="img.alt"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>

      <!-- Spacer to allow final snap alignment -->
      <div class="shrink-0 w-4" />
    </div>
  </section>
</template>
