<script setup lang="ts">
/**
 * MenuSection.vue
 * ----------------
 * Nuxt 4 + Vue 3 conversion of the original React MenuSection.tsx.
 *
 * Key points:
 * - Uses Reka‑UI v2.8.0 Accordion primitives:
 *     AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent
 * - Uses @nuxt/icon for icons (e.g., radix-icons:chevron-down)
 * - Fully SSR‑safe (no hydration mismatches)
 * - Tailwind 4 classes preserved exactly
 * - Static image imports handled by Nuxt/Vite
 */

import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent
} from 'reka-ui'

import foodSandwiches from '~/assets/images/demo/food-sandwiches.jpg'
import foodBrunch from '~/assets/images/demo/food-brunch.jpg'

interface MenuItem {
  name: string
  desc: string
  price: string
}

interface MenuCategory {
  title: string
  value: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    title: 'Breakfastx',
    value: 'item-1',
    items: [
      { name: 'The Full Morning', desc: 'Two eggs, artisan sausages, sourdough toast, butter & beans', price: '£12.50' },
      { name: 'Eggs Benedict', desc: 'Poached eggs, smoked ham, hollandaise on English muffin', price: '£11.00' },
      { name: 'Avocado Smash', desc: 'Crushed avocado, poached egg, chilli flakes on sourdough', price: '£10.50' },
      // { name: 'Granola Bowl', desc: 'House granola, Greek yoghurt, seasonal fruit, honey', price: '£8.50' }
    ]
  },
  {
    title: 'Sandwiches',
    value: 'item-2',
    items: [
      { name: 'Club Sandwich', desc: 'Chicken, bacon, lettuce, tomato, mayo on triple-deck toast', price: '£11.00' },
      { name: 'Reuben', desc: 'Salt beef, Swiss cheese, sauerkraut, mustard on rye', price: '£12.00' },
      { name: 'Caprese Ciabatta', desc: 'Buffalo mozzarella, tomato, basil, balsamic glaze', price: '£9.50' },
      { name: 'Sausage Bap', desc: 'Cumberland sausages, caramelised onion, brown sauce', price: '£8.00' }
    ]
  },
  {
    title: 'Coffee & Drinks',
    value: 'item-3',
    items: [
      { name: 'Flat White', desc: 'Double ristretto, velvety microfoam', price: '£3.80' },
      { name: 'House Latte', desc: 'Single-origin espresso, steamed milk, vanilla option', price: '£4.20' },
      { name: 'Fresh Orange Juice', desc: 'Pressed to order', price: '£4.00' },
      { name: 'Chai Latte', desc: 'Spiced chai, steamed oat milk', price: '£4.50' }
    ]
  },
  {
    title: 'Pastries & Sides',
    value: 'item-4',
    items: [
      { name: 'Butter Croissant', desc: 'Baked fresh each morning', price: '£3.50' },
      { name: 'Pain au Chocolat', desc: 'Dark chocolate, flaky pastry', price: '£3.80' },
      { name: 'Sourdough Toast', desc: 'Two slices with butter & jam', price: '£3.00' },
      { name: 'Hash Browns', desc: 'Crispy golden, served in pairs', price: '£2.50' }
    ]
  }
]
</script>

<template>
  <section id="menu" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><!-- SectionContainer -->

      <!-- Header -->
      <div class="text-center mb-14">
        <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-2">
          Our Menu
        </p>
        <h2 class="font-serif text-4xl md:text-5xl text-foreground leading-tight">
          Crafted with care
        </h2>
      </div>

      <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16"><!-- Body -->

        <!-- Accordion -->

        <div><!-- Div -->

          <AccordionRoot type="single" collapsible default-value="Breakfast" class="space-y-3">

            <AccordionItem v-for="cat in menuCategories" :key="cat.title" :value="cat.title" :id="cat.value"
              class="border border-border rounded-xl px-6 overflow-hidden data-[state=open]:bg-card accordian-item">

              <AccordionHeader>

                <AccordionTrigger
                  class="font-serif text-xl md:text-2xl text-foreground hover:no-underline py-5 flex items-center justify-between w-full">
                  {{ cat.title }}x

                  <!-- h-5 w-5 text-gray-500 transition-transform duration-500 ease-out group-data-[state=open]:rotate-180 -->

                  <Icon name="radix-icons:chevron-down" class="w-5 h-5 text-muted-foreground" />

                </AccordionTrigger>
              </AccordionHeader>

              <AccordionContent>
                <div class="space-y-4 pb-2">
                  <div v-for="item in cat.items" :key="item.name" class="flex items-start justify-between gap-4">
                    <div>
                      <h4 class="font-sans font-semibold text-foreground">
                        {{ item.name }}
                      </h4>
                      <p class="text-sm text-muted-foreground font-sans">
                        {{ item.desc }}
                      </p>
                    </div>

                    <span class="shrink-0 font-sans font-bold text-accent">
                      {{ item.price }}
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>

        </div><!-- Div -->

        <!-- Side images -->
        <div class="hidden lg:flex flex-col gap-6 w-72">
          <div class="rounded-2xl overflow-hidden h-64 shadow-lg">
            <img :src="foodSandwiches" alt="Gourmet sandwiches" class="w-full h-full object-cover" loading="lazy" />
          </div>

          <div class="rounded-2xl overflow-hidden h-48 shadow-lg ml-8">
            <img :src="foodBrunch" alt="Brunch spread" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

      </div><!-- Body -->

    </div><!-- SectionContainer -->

  </section>
</template>

<style>
/* 


.group-data-\[state\=open\]\:rotate-180 {
  &:is(:where(.group)[data-state="open"] *) {
    rotate: 180deg;
  }
}
  
.group-data-\[state\=open\]\:rotate-180 {
  &:is(:where(.group)[data-state="open"] *) {
    rotate: 180deg;
  }
}

.ease-out {
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
}

.duration-500 {
  --tw-duration: 500ms;
  transition-duration: 500ms;
}

.text-gray-500 {
  color: var(--color-gray-500);
}

.transition-transform {
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
} */
</style>