<script setup lang="ts">
/**
 * CorporateAsymmetricSection.vue
 * --------------------------------
 * Nuxt 4.3 + Tailwind 4.1 conversion of the asymmetric editorial platter layout.
 *
 * Features:
 * - Alternating left/right image layout using index parity
 * - Floating badge with offset positioning
 * - Hover zoom on images
 * - Semantic design tokens for dark mode
 * - Hydration-safe (no DOM access, no client-only logic)
 */

import { Download } from 'lucide-vue-next'

import platSandwiches from '~/assets/images/demo/platter-sandwiches.jpg'
import platCharcuterie from '~/assets/images/demo/platter-charcuterie.jpg'
import platSavoury from '~/assets/images/demo/platter-savoury.jpg'
import platBrunch from '~/assets/images/demo/platter-brunch.jpg'

interface Badge {
  number: string
  label: string
}

interface Platter {
  title: string
  subtitle: string
  description: string
  image: string
  alt: string
  badge: Badge
}

/** Alternating layout is driven by index parity */
const platters: Platter[] = [
  {
    title: 'Sandwich Platters',
    subtitle: 'From £9/head',
    description:
      'A generous selection of artisan sandwiches on sourdough, ciabatta, and rye — filled with premium meats, cheeses, and seasonal salads. Perfect for working lunches and client meetings.',
    image: platSandwiches,
    alt: 'Artisan sandwich platter on wooden board',
    badge: { number: '6–8', label: 'rounds per platter' }
  },
  {
    title: 'Savoury Selection',
    subtitle: 'From £11/head',
    description:
      'Mini quiches, Cumberland sausage rolls, Scotch eggs, and savoury pastries — all baked fresh. Ideal for office socials and afternoon working sessions.',
    image: platSavoury,
    alt: 'Savoury selection with sausage rolls and quiches',
    badge: { number: '12+', label: 'pieces per platter' }
  },
  {
    title: 'Brunch Platter',
    subtitle: 'From £14/head',
    description:
      'Eggs benedict, smoked salmon, avocado smash, fresh fruit, and pastries — a full brunch experience delivered to your door. Great for team celebrations and morning events.',
    image: platBrunch,
    alt: 'Brunch platter with eggs, salmon, and pastries',
    badge: { number: 'Serves', label: '8–12 guests' }
  },
  {
    title: 'Charcuterie & Cheese',
    subtitle: 'From £13/head',
    description:
      'Curated boards of Italian salumi, British farmhouse cheeses, artisan crackers, fruit, and honeycomb. A showstopper for evening receptions and VIP events.',
    image: platCharcuterie,
    alt: 'Charcuterie board with meats, cheeses, and crackers',
    badge: { number: '3+', label: 'cheese varieties' }
  }
]
</script>

<template>
  <section id="corporate-platters" class="py-20 md:py-28 bg-card">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="mb-16">
        <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-2">
          Our Platters
        </p>
        <h2 class="font-serif text-4xl md:text-5xl text-foreground leading-tight">
          Feed the whole team
        </h2>
      </div>

      <!-- Alternating platter rows -->
      <div class="space-y-20 md:space-y-28">
        <div v-for="(platter, i) in platters" :key="platter.title"
          class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <!-- Image column -->
          <div class="relative" :class="i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img :src="platter.image" :alt="platter.alt"
                class="w-full h-72 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy" />
            </div>

            <!-- Floating badge -->
            <div class="absolute -bottom-5 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg"
              :class="i % 2 === 0 ? '-right-3 md:-right-6' : '-left-3 md:-left-6'">
              <p class="font-serif text-2xl leading-none">
                {{ platter.badge.number }}
              </p>
              <p class="font-sans text-xs mt-1 font-medium">
                {{ platter.badge.label }}
              </p>
            </div>
          </div>

          <!-- Copy column -->
          <div :class="i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'">
            <span class="text-xs font-sans font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
              {{ platter.subtitle }}
            </span>

            <h3 class="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-4">
              {{ platter.title }}
            </h3>

            <p class="text-muted-foreground font-sans leading-relaxed">
              {{ platter.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Download CTA -->
      <div class="mt-16 text-center">
        <a href="/catering-menu.pdf" download
          class="inline-flex items-center gap-2 border border-border text-foreground font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-muted/50 transition-colors">
          <Download class="w-4 h-4" />
          Download Full Catering Menu
        </a>
      </div>

    </div>
  </section>
</template>
