<script setup lang="ts">
/**
 * SandstoneLogo.vue
 * ------------------
 * Nuxt 4.3 + Tailwind 4.1 conversion of the animated SVG handwriting logo.
 *
 * Props:
 * - className: additional Tailwind classes (mainly width control)
 * - animate: enables write‑on animation (default true)
 * - compact: hides the underline for navbar usage (default false)
 *
 * Hydration safety:
 * - SVG + CSS animations are SSR‑safe
 * - No DOM access, no client‑only logic
 */

interface Props {
  className?: string
  animate?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  animate: true,
  compact: false
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 3040 825" aria-label="Sandstone"
    :class="[
      'sandstone-svg',
      props.animate ? 'sandstone-animate' : 'sandstone-static',
      props.className
    ]">
    <!-- “S” letterform -->
    <path id="s-path" class="sandstone-letter"
      d="M519 333s-21 17 32 15c38-1 167-41 255-82 106-49 151-97 171-138 28-59-23-95-84-100-77-7-236 2-433 70a743 743 0 0 0-311 186c-26 25-56 74-8 115 47 40 312 64 349 85 45 27 83 71 33 142-51 72-203 142-240 152-62 17-182 39-231-5-57-52 6-123 70-147" />

    <!-- “andstone” continuous letterforms -->
    <path id="andstone-path" class="sandstone-letter"
      d="M778 430c-24-4-28-3-59 8-50 25-117 89-115 134 3 62 76-6 137-72 37-39 52-49 76-80 23-10-49 38-66 114-11 51 41 49 58 44 58-16 134-65 183-114 25-25 36-38 55-52 9-7-108 143-116 185-9 46 48-86 154-152 97-60-10 62-18 112-2 16 0 48 41 29 54-25 89-50 125-73 40-26 99-84 140-94 0 0 46-3-28 24-47 17-86 88-95 121-12 49 48 31 73 10 16-13 82-79 145-152 77-90 152-188 175-229 47-86 1-78-50-26a955 955 0 0 0-197 320c-25 77 5 100 31 97 27-4 74-26 110-46 70-38 146-126 188-140 11-4-24 18-24 18-124 131-61 251-117 198-18-20-29-28-61-53-7-5 76 76 190 18 46-23 177-104 202-136 76-95 167-258 188-296 26-45-60 61-111 157-47 86-65 129-86 168-17 32-19 46-35 88-22 55 27 68 72 46 29-13 125-61 190-111 56-43 75-61 102-73 33-15-33 35-33 35-33 43-66 81-56 119 11 37 66 1 75-7 26-22 53-52 77-95 19-36 15-54-8-47-10 3-22 20-13 38 10 22 58 22 80 12 74-33 87-31 97-42 27-31 27-26 27-26s-75 100-109 172 59-63 82-85c17-16 86-75 103-69 17 7-46 79-55 130-11 68 68 17 68 17l66-40s53-33 67-45c13-13 3 8-10 29 0 0 23 5 49 0 26-6 79-56 90-70 16-23 6-56-38-27-141 92-71 76-98 106-22 25-16 85 85 46 59-22 84-40 111-57l79-52 47-32" />

    <!-- “t” crossbar -->
    <path id="t-cross-path" class="sandstone-letter" d="m 1390,307 c 0,0 148,-3 374,-5 h 350 c 163,2 8,17 8,17" />

    <!-- Decorative underline (hidden in compact mode) -->
    <path v-if="!props.compact" id="underline" class="sandstone-underline"
      d="m 523.65355,805.62082 c 0,0 365.40658,-143.86084 2203.94845,-120.84311" />
  </svg>
</template>

<style scoped>
/* -------------------------------------------------------
   Sandstone Logo Animation Styles
   These can be moved to utilities.css if preferred.
------------------------------------------------------- */

/* Base stroke styling */
.sandstone-letter,
.sandstone-underline {
  fill: none;
  stroke: currentColor;
  stroke-width: 40;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Write-on animation */
.sandstone-animate .sandstone-letter,
.sandstone-animate .sandstone-underline {
  stroke-dasharray: 4000;
  stroke-dashoffset: 4000;
  animation: sandstone-write 4s ease forwards;
}

/* Static mode (no animation) */
.sandstone-static .sandstone-letter,
.sandstone-static .sandstone-underline {
  stroke-dasharray: 0;
  stroke-dashoffset: 0;
}

@keyframes sandstone-write {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
