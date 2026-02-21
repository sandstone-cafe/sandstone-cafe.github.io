<script setup lang="ts">
const categories = [
  {
    value: 'electronics',
    name: 'Electronics',
    items: [
      'Smartphones & Accessories',
      'Laptops & Computers',
      'Headphones & Audio',
      'Smart Home Devices',
    ],
  },
  {
    value: 'clothing',
    name: 'Clothing & Fashion',
    items: [
      'Men\'s Apparel',
      'Women\'s Apparel',
      'Shoes & Sneakers',
      'Accessories',
    ],
  },
  {
    value: 'books',
    name: 'Books & Media',
    items: [
      'Fiction & Literature',
      'Non-Fiction',
      'Children\'s Books',
      'E-books & Audiobooks',
    ],
  },
] as const
</script>

<template>

  <section id="menu" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


      <AccordionRoot type="single" collapsible default-value="electronics"
        class="w-full max-w-2xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">

        <AccordionItem v-for="category in categories" :key="category.value" :value="category.value" class="group">

          <!-- Header / Trigger -->
          <AccordionHeader>

            <AccordionTrigger
              class="group flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 data-[state=open]:bg-gray-50">

              <span>{{ category.name }}X</span>

              <!-- Chevron -->

              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-500 transition-transform duration-500 ease-out group-data-[state=open]:rotate-180"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <Icon name="radix-icons:chevron-down" class="w-5 h-5 text-muted-foreground" />
            </AccordionTrigger>
          </AccordionHeader>

          <!-- Content with professional smooth animation -->
          <AccordionContent class="accordion-content overflow-hidden px-6 pb-6 text-gray-600">
            <ul class="space-y-2.5 pl-1 pt-1">
              <li v-for="(item, i) in category.items" :key="i"
                class="flex items-center gap-2 text-sm before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-300">
                {{ item }}
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>


    </div>
  </section>

</template>

<style scoped>
/* Smooth, slow, professional collapse/expand */
/* .accordion-content {
  overflow: hidden;
}

.accordion-content[data-state="open"] {
  animation: slideDown 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.accordion-content[data-state="closed"] {
  animation: slideUp 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes slideDown {
  from {
    height: 0;
    opacity: 0;
  }

  to {
    height: var(--reka-accordion-content-height);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
    opacity: 1;
  }

  to {
    height: 0;
    opacity: 0;
  }
} */
</style>