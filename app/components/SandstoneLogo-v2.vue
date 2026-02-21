<script setup lang="ts">
/**
 * SandstoneLogo.vue
 * ------------------
 * Animated handwritten SVG logo with pen‑pressure simulation.
 * Fully SSR‑safe. Animation controlled via CSS classes.
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
    <path id="s-path" class="sandstone-letter" d="M519 333s-21 17 32 15c38-1 167-41 255-82 …" />
    <path id="andstone-path" class="sandstone-letter" d="M778 430c-24-4-28-3-59 8-50 25-117 89 …" />
    <path id="t-cross-path" class="sandstone-letter" d="m 1390,307 c 0,0 148,-3 374,-5 h 350 …" />

    <path v-if="!props.compact" id="underline" class="sandstone-underline"
      d="m 523.65355,805.62082 c 0,0 365.40658,-143.86084 2203.94845,-120.84311" />
  </svg>
</template>
