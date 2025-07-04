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
  <slot />
  <FooterSection />
</template>

<style scoped></style>
