<script setup lang="ts">
useHead({
  bodyAttrs: {
    // dataTheme: 'light',
    'data-theme': 'light',
    class: 'font-sans text-gray-800 bg-gray-50',
  },
  htmlAttrs: {
    class: 'hello',
  },
});
</script>

<template>
  <NavigationSection />
  <h1>Layout: defaults</h1>
  <slot />
</template>

<style scoped></style>
