<script setup lang="ts">
/**
 * MapSection.vue
 * ----------------
 * Nuxt 4.3 conversion of the original React MapSection.tsx.
 *
 * Features:
 * - Embedded Google Maps iframe
 * - Responsive height and rounded card styling
 * - Tailwind v4 CSS-first utilities
 * - Hydration-safe: no DOM access, no client-only logic
 *
 * Notes:
 * - The iframe is static and identical on SSR + CSR, so no hydration mismatch.
 * - No packages required.
 */
</script>

<template>
  <section id="find-us" class="py-20 md:py-28 bg-card">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-10">
        <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-2">
          Find Us
        </p>

        <h2 class="font-serif text-4xl md:text-5xl text-foreground leading-tight">
          Come say hello
        </h2>
      </div>

      <!-- Map container -->
      <div class="rounded-2xl overflow-hidden shadow-lg border border-border h-80 md:h-[28rem]">
        <iframe title="Sandstone location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.710901541589!2d-2.7266992227208773!3d53.294713578584854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ae3de8866b879%3A0x699e8e975bce371b!2sSandstone%20-%20Eat%20In%20or%20Takeaway!5e0!3m2!1sen!2suk!4v1771278518223!5m2!1sen!2suk"
          class="w-full h-full border-0" allowfullscreen loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
<!--        <iframe title="The Morning Café location"-->
<!--          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9040968285706!2d-0.15868908422928793!3d51.52065267963736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf3398c643%3A0xb2e4a2be5a9d1643!2sBaker%20St%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"-->
<!--          class="w-full h-full border-0" allowfullscreen loading="lazy"-->
<!--          referrerpolicy="no-referrer-when-downgrade"></iframe>-->
      </div>

    </div>
  </section>
</template>
