<script setup lang="ts">
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
const menuCategories = [
  {
    title: 'Breakfast',
    items: [
      { name: 'The Full Morning', desc: 'Two eggs, artisan sausages, sourdough toast, butter & beans', price: '£12.50' },
      { name: 'Eggs Benedict', desc: 'Poached eggs, smoked ham, hollandaise on English muffin', price: '£11.00' },
      { name: 'Avocado Smash', desc: 'Crushed avocado, poached egg, chilli flakes on sourdough', price: '£10.50' },
      { name: 'Granola Bowl', desc: 'House granola, Greek yoghurt, seasonal fruit, honey', price: '£8.50' },
    ],
  },
  {
    title: 'Sandwiches',
    items: [
      { name: 'Club Sandwich', desc: 'Chicken, bacon, lettuce, tomato, mayo on triple-deck toast', price: '£11.00' },
      { name: 'Reuben', desc: 'Salt beef, Swiss cheese, sauerkraut, mustard on rye', price: '£12.00' },
      { name: 'Caprese Ciabatta', desc: 'Buffalo mozzarella, tomato, basil, balsamic glaze', price: '£9.50' },
      { name: 'Sausage Bap', desc: 'Cumberland sausages, caramelised onion, brown sauce', price: '£8.00' },
    ],
  },
  {
    title: 'Coffee & Drinks',
    items: [
      { name: 'Flat White', desc: 'Double ristretto, velvety microfoam', price: '£3.80' },
      { name: 'House Latte', desc: 'Single-origin espresso, steamed milk, vanilla option', price: '£4.20' },
      { name: 'Fresh Orange Juice', desc: 'Pressed to order', price: '£4.00' },
      { name: 'Chai Latte', desc: 'Spiced chai, steamed oat milk', price: '£4.50' },
    ],
  },
  {
    title: 'Pastries & Sides',
    items: [
      { name: 'Butter Croissant', desc: 'Baked fresh each morning', price: '£3.50' },
      { name: 'Pain au Chocolat', desc: 'Dark chocolate, flaky pastry', price: '£3.80' },
      { name: 'Sourdough Toast', desc: 'Two slices with butter & jam', price: '£3.00' },
      { name: 'Hash Browns', desc: 'Crispy golden, served in pairs', price: '£2.50' },
    ],
  },
]
</script>

<template>
  <AccordionRoot type="single" collapsible default-value="Breakfast" class="space-y-3">
    <AccordionItem v-for="cat in menuCategories" :key="cat.title" :value="cat.title"
      class="border border-border rounded-xl px-6 overflow-hidden data-[state=open]:bg-card">
      <AccordionTrigger
        class="group flex items-center justify-between gap-4 font-serif text-xl md:text-2xl text-foreground hover:no-underline py-5">
        <span>{{ cat.title }}</span>
        <ChevronDown
          class="w-4 h-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </AccordionTrigger>

      <AccordionContent>
        <!-- items… -->
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
