<script setup lang="ts">
/**
 * CateringSection.vue
 * --------------------
 * Nuxt 4.3 conversion of the original React CateringSection.tsx.
 *
 * Features:
 * - Responsive two-column layout
 * - Decorative floating badge
 * - Icon-based catering packages
 * - Hydration-safe (no DOM access during SSR)
 * - Tailwind v4 CSS-first utilities
 * - Lucide icons via `lucide-vue-next`
 */

import { Building2, Users, PartyPopper } from 'lucide-vue-next'

/* Nuxt/Vite asset import */
import cateringImg from '~/assets/images/demo/catering-corporate.jpg'

/** Catering package definitions */
const packages = [
  {
    icon: Building2,
    title: 'Corporate Meetings',
    description:
      'Impress clients and fuel your team with our curated breakfast and lunch platters.',
    price: 'From £12/head'
  },
  {
    icon: Users,
    title: 'Team Lunches',
    description:
      'Artisan sandwich boards, fresh salads, and barista coffee delivered to your office.',
    price: 'From £15/head'
  },
  {
    icon: PartyPopper,
    title: 'Events & Celebrations',
    description:
      'Bespoke menus for launches, celebrations, and private dining — we handle everything.',
    price: 'Custom quote'
  }
]
</script>

<template>
  <section id="catering" class="py-20 md:py-28 bg-card">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Image with floating badge -->
        <div class="relative">
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img :src="cateringImg" alt="Corporate catering spread" class="w-full h-80 md:h-[28rem] object-cover"
              loading="lazy" />
          </div>

          <!-- Floating badge -->
          <div class="absolute -bottom-6 -right-4 md:-right-8 bg-accent text-accent-foreground
                   rounded-xl p-5 shadow-lg">
            <p class="font-serif text-3xl leading-none">500+</p>
            <p class="font-sans text-xs mt-1 font-medium">Events catered</p>
          </div>
        </div>

        <!-- Content -->
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-2">
            Corporate Catering
          </p>

          <h2 class="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
            We bring the café<br />to you
          </h2>

          <p class="text-muted-foreground font-sans leading-relaxed mb-10">
            From boardroom breakfasts to company celebrations, our catering service brings the same
            warmth and quality you'd find in our café, right to your door.
          </p>

          <!-- Package list -->
          <div class="space-y-6">
            <div v-for="pkg in packages" :key="pkg.title" class="flex gap-4 p-5 rounded-xl border border-border bg-background
                     hover:shadow-md transition-shadow">
              <!-- Icon container -->
              <div class="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <component :is="pkg.icon" class="w-6 h-6 text-accent" />
              </div>

              <!-- Text content -->
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <h3 class="font-serif text-lg text-foreground">{{ pkg.title }}</h3>
                  <span class="text-xs font-sans font-semibold text-accent">{{ pkg.price }}</span>
                </div>

                <p class="text-sm text-muted-foreground font-sans">
                  {{ pkg.description }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
