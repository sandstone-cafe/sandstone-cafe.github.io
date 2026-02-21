<script setup lang="ts">
/**
 * Footer.vue
 * ----------
 * Nuxt 4.3 conversion of the original React Footer.tsx.
 *
 * Features:
 * - Smooth scrolling to in-page anchors
 * - Responsive 4-column layout
 * - Tailwind v4 CSS-first utilities
 * - Hydration-safe: no DOM access during SSR
 */

import { onMounted } from 'vue'

/**
 * Smooth scroll helper.
 * Runs only on click (client-side), so no hydration mismatch.
 */
function scrollToId(id: string) {
  const el = document.querySelector(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-primary text-primary-foreground py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Brand -->
        <div class="sm:col-span-2 lg:col-span-1">
          <h3 class="font-serif text-2xl mb-3">
            The Morning<span class="text-accent">.</span>
          </h3>

          <p class="font-sans text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            Fresh breakfasts, artisan sandwiches, and the perfect latte — crafted daily with love.
          </p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
            Explore
          </h4>

          <ul class="space-y-2">
            <li v-for="link in [
              { label: 'Menu', href: '#menu' },
              { label: 'Catering', href: '#catering' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' }
            ]" :key="link.href">
              <a :href="link.href" @click.prevent="scrollToId(link.href)"
                class="font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Hours -->
        <div>
          <h4 class="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
            Hours
          </h4>

          <ul class="space-y-2 font-sans text-sm text-primary-foreground/70">
            <li>Mon–Fri: 7am – 5pm</li>
            <li>Sat–Sun: 8am – 4pm</li>
            <li>Bank Holidays: 9am – 3pm</li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
            Stay Updated
          </h4>

          <!-- Prevent default submit (no hydration mismatch) -->
          <ClientOnly>

            <form class="flex gap-2" @submit.prevent>
              <input type="email" placeholder="Your email" class="flex-1 px-4 py-2.5 rounded-lg bg-primary-foreground/10
                     border border-primary-foreground/20 text-primary-foreground
                     font-sans text-sm placeholder:text-primary-foreground/40
                     focus:outline-none focus:ring-2 focus:ring-accent" />

              <button type="submit" class="px-4 py-2.5 rounded-lg bg-accent text-accent-foreground
                     font-sans text-sm font-semibold hover:opacity-90 transition-opacity">
                Join
              </button>
            </form>
          </ClientOnly>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-8 border-t border-primary-foreground/10
                  flex flex-col sm:flex-row items-center justify-between gap-4">

        <p class="font-sans text-xs text-primary-foreground/50">
          © 2024 The Morning Café. All rights reserved.
        </p>

        <div class="flex gap-6">
          <a v-for="t in ['Privacy Policy', 'Terms of Service']" :key="t" href="#"
            class="font-sans text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            {{ t }}
          </a>
        </div>

      </div>

    </div>
  </footer>
</template>
