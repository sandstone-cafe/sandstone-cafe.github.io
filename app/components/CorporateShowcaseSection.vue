<script setup lang="ts">
/**
 * CorporateShowcaseSection.vue
 * -----------------------------
 * Nuxt 4.3 + Tailwind 4.1 conversion of the Bento/Mosaic corporate platter grid.
 *
 * Features:
 * - Bento-style CSS grid with row-span for hero tiles
 * - Hover zoom + gradient overlay reveal
 * - Tea & Coffee callout tile
 * - Hydration-safe smooth scroll (client-only)
 * - Semantic design tokens for dark mode
 */

import { Download, Coffee, CakeSlice } from 'lucide-vue-next'

import platSandwiches from '~/assets/images/demo/platter-sandwiches.jpg'
import platCharcuterie from '~/assets/images/demo/platter-charcuterie.jpg'
import platSavoury from '~/assets/images/demo/platter-savoury.jpg'
import platBrunch from '~/assets/images/demo/platter-brunch.jpg'
import corporateMeeting from '~/assets/images/demo/corporate-meeting.jpg'

interface Tile {
  title: string
  description: string
  price: string
  image: string
  alt: string
  span: number
}

/** Tile data — `span` controls CSS grid row-span */
const tiles: Tile[] = [
  {
    title: 'Sandwich Platters',
    description: 'Artisan sourdough, ciabatta & rye — premium fillings, beautifully arranged.',
    price: 'From £9/head',
    image: platSandwiches,
    alt: 'Artisan sandwich platter',
    span: 2
  },
  {
    title: 'Savoury Selection',
    description: 'Mini quiches, sausage rolls, Scotch eggs & pastry bites.',
    price: 'From £11/head',
    image: platSavoury,
    alt: 'Savoury selection platter',
    span: 1
  },
  {
    title: 'Charcuterie & Cheese',
    description: 'Italian salumi, British cheeses, crackers & honeycomb.',
    price: 'From £13/head',
    image: platCharcuterie,
    alt: 'Charcuterie and cheese board',
    span: 1
  },
  {
    title: 'Brunch Platter',
    description: 'Eggs benedict, smoked salmon, avocado, fruit & pastries.',
    price: 'From £14/head',
    image: platBrunch,
    alt: 'Full brunch platter',
    span: 1
  }
]

/**
 * Hydration-safe smooth scroll.
 * Runs only on click (client-side), never during SSR.
 */
function scrollToContact() {
  const el = document.querySelector('#contact')
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="corporate-showcase" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="mb-14 max-w-xl">
        <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-2">
          The Spread
        </p>

        <h2 class="font-serif text-4xl md:text-5xl text-foreground leading-tight">
          Choose your platter
        </h2>

        <p class="mt-4 text-muted-foreground font-sans leading-relaxed">
          Mix and match from our curated selection — every platter is prepared
          fresh on the day and delivered ready to serve.
        </p>
      </div>

      <!-- Bento mosaic grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[14rem] md:auto-rows-[16rem]">

        <!-- Main tiles -->
        <div v-for="tile in tiles" :key="tile.title" class="group relative rounded-2xl overflow-hidden cursor-pointer
                 transition-transform duration-300 hover:scale-[1.02]" :class="tile.span === 2 ? 'md:row-span-2' : ''">
          <!-- Background image -->
          <img :src="tile.image" :alt="tile.alt"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy" />

          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent
                   opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

          <!-- Text overlay -->
          <div class="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
            <span class="text-xs font-sans font-semibold text-accent mb-1">
              {{ tile.price }}
            </span>

            <h3 class="font-serif text-xl md:text-2xl text-primary-foreground leading-tight">
              {{ tile.title }}
            </h3>

            <p class="text-sm text-primary-foreground/80 font-sans mt-2
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     translate-y-2 group-hover:translate-y-0">
              {{ tile.description }}
            </p>
          </div>
        </div>

        <!-- Tea & Coffee callout tile -->
        <div class="relative rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1">
          <img :src="corporateMeeting" alt="Tea and coffee service for meetings"
            class="absolute inset-0 w-full h-full object-cover" loading="lazy" />

          <div class="absolute inset-0 bg-primary/85" />

          <div class="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
            <div class="flex gap-3 mb-4">
              <Coffee class="w-6 h-6 text-primary-foreground" />
              <CakeSlice class="w-6 h-6 text-primary-foreground" />
            </div>

            <h3 class="font-serif text-2xl text-primary-foreground mb-2">
              Teas, Coffees &amp; Cakes
            </h3>

            <p class="text-sm text-primary-foreground/80 font-sans max-w-xs">
              Add barista coffee, premium teas, and freshly baked biscuits &amp;
              cakes to any package — from just £4/head.
            </p>
          </div>
        </div>

      </div>

      <!-- Download + Quote CTA -->
      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

        <!-- Download -->
        <a href="/catering-menu.pdf" download class="inline-flex items-center gap-2 bg-accent text-accent-foreground
                 font-sans text-sm font-semibold px-6 py-3 rounded-lg
                 hover:opacity-90 transition-opacity">
          <Download class="w-4 h-4" />
          Download Catering Menu
        </a>

        <!-- Smooth scroll CTA -->
        <!-- 
        <button type="button" @click="scrollToContact" class="inline-flex items-center gap-2 border border-border text-foreground
                 font-sans text-sm font-semibold px-6 py-3 rounded-lg
                 hover:bg-muted/50 transition-colors">
          Get a Quote
        </button>
 -->
      </div>

    </div>
  </section>
</template>
