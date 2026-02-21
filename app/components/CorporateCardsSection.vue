<script setup lang="ts">
/**
 * CorporateCardsSection.vue
 * --------------------------
 * Nuxt 4.3 + Tailwind 4.1 conversion of the original React component.
 *
 * Features:
 * - Responsive card grid (1 → 2 → 3 columns)
 * - Hover zoom on images (scale-110)
 * - Semantic design tokens for dark mode
 * - Hydration-safe (no DOM access, no client-only logic)
 */

import { Coffee, Briefcase, PartyPopper, Download } from 'lucide-vue-next'

import corporateMeeting from '~/assets/images/demo/corporate-meeting.jpg'
import corporateSocial from '~/assets/images/demo/corporate-social.jpg'
import cateringImg from '~/assets/images/demo/catering-corporate.jpg'

interface PackageCard {
  icon: any
  title: string
  description: string
  price: string
  image: string
  alt: string
}

/** Package data for each corporate offering */
const packages: PackageCard[] = [
  {
    icon: Coffee,
    title: 'Meetings & Boardrooms',
    description:
      'Teas, coffees, biscuits & cakes served on elegant tiered stands. Keep your team energised and your clients impressed.',
    price: 'From £8/head',
    image: corporateMeeting,
    alt: 'Corporate meeting with tea and coffee service'
  },
  {
    icon: Briefcase,
    title: 'Office Events & Socials',
    description:
      'Buffet platters, canapés, and drinks packages for team socials, launches, and networking events.',
    price: 'From £18/head',
    image: corporateSocial,
    alt: 'Office social event with buffet spread'
  },
  {
    icon: PartyPopper,
    title: 'Private Parties',
    description:
      'Bespoke menus for birthdays, celebrations, and private dining — we handle everything from set-up to clear-down.',
    price: 'Custom quote',
    image: cateringImg,
    alt: 'Private party catering spread'
  }
]
</script>

<template>
  <section id="corporate-cards" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-14">
        <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-2">
          Corporate &amp; Events
        </p>

        <h2 class="font-serif text-4xl md:text-5xl text-foreground leading-tight">
          Packages for every occasion
        </h2>

        <p class="mt-4 text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
          From intimate board meetings to large-scale celebrations, we craft
          menus that match your moment.
        </p>
      </div>

      <!-- Card grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="pkg in packages" :key="pkg.title" class="group rounded-2xl border border-border bg-card overflow-hidden
                 hover:shadow-xl transition-shadow duration-300">
          <!-- Image with hover zoom -->
          <div class="overflow-hidden h-56 md:h-64">
            <img :src="pkg.image" :alt="pkg.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy" />
          </div>

          <!-- Card body -->
          <div class="p-6">
            <!-- Icon + title -->
            <div class="flex items-center gap-3 mb-3">
<!--              <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">-->
<!--                <component :is="pkg.icon" class="w-5 h-5 text-accent" />-->
<!--              </div>-->

<!--              <h3 class="font-serif text-xl text-foreground">-->
<!--                {{ pkg.title }}-->
<!--              </h3>-->
            </div>

<!--            <p class="text-sm text-muted-foreground font-sans leading-relaxed mb-4">-->
<!--              {{ pkg.description }}-->
<!--            </p>-->

            <!-- Price badge -->
<!--            <span-->
<!--              class="inline-block text-xs font-sans font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-full">-->
<!--              {{ pkg.price }}-->
<!--            </span>-->
          </div>
        </div>
      </div>

      <!-- Download CTA -->
      <!-- 
      <div class="mt-12 text-center">
        <a href="/catering-menu.pdf" download class="inline-flex items-center gap-2 bg-accent text-accent-foreground
                 font-sans text-sm font-semibold px-6 py-3 rounded-lg
                 hover:opacity-90 transition-opacity">
          <Download class="w-4 h-4" />
          Download Catering Menu
        </a>
      </div>
 -->
    </div>
  </section>
</template>
