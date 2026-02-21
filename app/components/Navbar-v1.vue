<script setup lang="ts">
/**
 * Navbar.vue
 * ----------
 * Nuxt 4.3 conversion of the original React Navbar.
 *
 * Features:
 * - Smooth scrolling to anchors
 * - Dark mode toggle (adds/removes `.dark` on <html>)
 * - Mobile menu with animated height
 * - Scroll detection for background blur
 * - Lucide icons via `lucide-vue-next`
 * - Hydration-safe: all DOM access wrapped in onMounted()
 */

import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'

/** Navigation links */
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Catering', href: '#catering' },
  { label: "Corporate", href: "#corporate-showcase" },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Find Us', href: '#find-us' }
]

/** Mobile menu open/closed */
const open = ref(false)

/** Navbar background blur when scrolling */
const scrolled = ref(false)

/** Dark mode state */
const dark = ref(false)

/**
 * Smooth scroll helper
 */
function scrollToId(href: string) {
  open.value = false
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Scroll listener — hydration-safe because it runs only onMounted()
 */
onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20
  }

  window.addEventListener('scroll', onScroll)
  onScroll()

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
})

/**
 * Dark mode toggle — hydration-safe because it runs only onMounted()
 */
onMounted(() => {
  document.documentElement.classList.toggle('dark', dark.value)
})

watch(dark, (value) => {
  document.documentElement.classList.toggle('dark', value)
})
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled
    ? 'bg-background/95 backdrop-blur-md shadow-md'
    : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo -->
        <a href="#home" class="font-serif text-2xl md:text-3xl text-foreground tracking-tight cursor-pointer"
          @click.prevent="scrollToId('#home')">
          Sandstone<span class="text-accent">.</span>
        </a>

        <!-- Desktop navigation -->
        <div class="hidden md:flex items-center gap-1">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click.prevent="scrollToId(link.href)" class="px-3 py-2 text-sm font-sans font-medium text-muted-foreground
                   hover:text-foreground transition-colors rounded-md hover:bg-muted/50">
            {{ link.label }}
          </a>

          <!-- Dark mode toggle -->
          <button @click="dark = !dark"
            class="ml-2 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle dark mode">
            <Sun v-if="dark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>
        </div>

        <!-- Mobile buttons -->
        <div class="flex md:hidden items-center gap-2">
          <button @click="dark = !dark"
            class="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle dark mode">
            <Sun v-if="dark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <button @click="open = !open" class="p-2 rounded-lg text-foreground" aria-label="Toggle menu">
            <X v-if="open" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md"
      :class="open ? 'max-h-96 border-b border-border' : 'max-h-0'">
      <div class="px-4 py-3 space-y-1">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" @click.prevent="scrollToId(link.href)" class="block px-4 py-3 text-sm font-sans font-medium text-muted-foreground
                 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
