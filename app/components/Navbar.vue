<script setup lang="ts">
/**
 * Navbar.vue — Nuxt 4.3 + Tailwind 4.1 + colorMode + lucide-vue-next
 * ------------------------------------------------------------------
 * - Scroll-aware compact SandstoneLogo
 * - Smooth-scroll navigation
 * - Dark mode toggle using Nuxt colorMode (SSR-safe)
 * - Mobile menu with animated height
 * - Hydration-safe icon rendering via <ClientOnly>
 */

import { Menu, X, Sun, Moon } from 'lucide-vue-next'
import SandstoneLogo from '~/components/SandstoneLogo.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useColorMode } from '#imports'

/** Navigation links */
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Catering', href: '#catering' },
  { label: 'Corporate', href: '#corporate-showcase' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Find Us', href: '#find-us' }
]

/** Reactive state */
const open = ref(false)
const scrolled = ref(false)
const showLogo = ref(false)

/** Nuxt color mode (SSR-safe) */
const colorMode = useColorMode()

/** Smooth scroll */
function scrollToId(href: string) {
  open.value = false
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth' })
}

/** Scroll listener */
function handleScroll() {
  scrolled.value = window.scrollY > 20
  showLogo.value = window.scrollY > window.innerHeight * 0.4
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-background/95 backdrop-blur-2xl shadow-md' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- showLogo {{ showLogo }} -->
        <!-- Logo wrapper -->
        <a href="#home" @click.prevent="scrollToId('#home')" class="relative flex items-center h-16 overflow-hiddenx">
          <!-- Text logo -->
          <span
            class="font-serif text-2xl md:text-3xl text-foreground tracking-tight transition-all duration-500 absolute"
            :class="showLogo ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'">
            The Morning<span class="text-accent">.</span>
          </span>

          <!-- Compact SVG logo -->
          <div class="transition-all duration-500 absolute"
            :class="showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'">
            <SandstoneLogo class="h-10 md:h-12 w-auto" :animate="false" compact />
          </div>
        </a>

        <!-- Desktop navigation -->
        <div class="hidden md:flex items-center gap-1">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click.prevent="scrollToId(link.href)"
            class="px-3 py-2 text-sm font-sans font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50">
            {{ link.label }}
          </a>

          <!-- Dark mode toggle -->
          <button @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
            class="ml-2 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle dark mode">
            <ClientOnly>
              <Sun v-if="colorMode.value === 'dark'" class="w-5 h-5" />
              <Moon v-else class="w-5 h-5" />
            </ClientOnly>
          </button>
        </div>

        <!-- Mobile buttons -->
        <div class="flex md:hidden items-center gap-2">
          <button @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
            class="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle dark mode">
            <ClientOnly>
              <Sun v-if="colorMode.value === 'dark'" class="w-5 h-5" />
              <Moon v-else class="w-5 h-5" />
            </ClientOnly>
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
        <a v-for="link in navLinks" :key="link.href" :href="link.href" @click.prevent="scrollToId(link.href)"
          class="block px-4 py-3 text-sm font-sans font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
