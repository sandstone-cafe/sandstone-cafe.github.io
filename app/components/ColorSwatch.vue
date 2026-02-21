<script setup lang="ts">
/**
 * ColorSwatch.vue
 * ----------------
 * Nuxt 4.3 conversion of the original React ColorSwatch.tsx.
 *
 * Features:
 * - Fade-up animation with staggered delay
 * - Hydration-safe: animation delay applied only onMounted()
 * - Tailwind v4 CSS-first utilities
 * - Dynamic background color using CSS variables
 */

import { ref, onMounted } from 'vue'

interface Props {
  name: string
  description: string
  cssVar: string
  hex: string
  index: number
}

const props = defineProps<Props>()

/**
 * Determine if the swatch uses a light color.
 * Used to choose foreground text color.
 */
const isLight = [
  'butter',
  'egg-yolk',
  'golden',
  'cream',
  'eggshell',
  'latte'
].includes(props.cssVar)

/**
 * Animation delay — applied only onMounted() to avoid hydration mismatch.
 */
const delay = ref('0ms')

onMounted(() => {
  delay.value = `${props.index * 80}ms`
})
</script>

<template>
  <div class="group animate-fade-up" :style="{ animationDelay: delay }">
    <!-- Swatch block -->
    <div class="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md
             transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.03]
             cursor-pointer" :style="{ backgroundColor: `hsl(var(--${props.cssVar}))` }">
      <!-- Text overlay -->
      <div class="absolute bottom-0 inset-x-0 p-4 transition-opacity duration-300"
        :class="isLight ? 'text-foreground' : 'text-eggshell'">
        <p class="font-serif text-lg leading-tight">{{ props.name }}</p>
        <p class="text-xs mt-1 font-sans opacity-70 uppercase tracking-widest">
          {{ props.hex }}
        </p>
      </div>
    </div>

    <!-- Description -->
    <p class="mt-3 text-sm text-muted-foreground font-sans leading-snug">
      {{ props.description }}
    </p>
  </div>
</template>
