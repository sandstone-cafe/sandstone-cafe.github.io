<script setup lang="ts">
/**
 * ContactSection.vue
 * -------------------
 * Nuxt 4.3 conversion of the original React ContactSection.tsx.
 *
 * Features:
 * - Three-column contact layout (address, form, phone/social)
 * - Lucide icons via `lucide-vue-next`
 * - Hydration-safe: no DOM access, no client-only logic
 * - Tailwind v4 CSS-first utilities
 */

import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="py-20 md:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-14">
        <p class="text-sm uppercase tracking-[0.3em] text-accent font-sans font-medium mb-2">
          Get in Touch
        </p>

        <h2 class="font-serif text-4xl md:text-5xl text-foreground leading-tight">
          We'd love to hear from you
        </h2>
      </div>

      <!-- Grid layout -->
      <div class="grid md:grid-cols-3 gap-6">

        <!-- Address block -->
        <div class="bg-card rounded-2xl p-8 border border-border">
          <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
            <MapPin class="w-6 h-6 text-accent" />
          </div>

          <h3 class="font-serif text-xl text-foreground mb-3">Visit Us</h3>

          <address class="not-italic font-sans text-sm text-muted-foreground leading-relaxed space-y-1">
            <p>42 Baker Street</p>
            <p>London, W1U 7AJ</p>
            <p>United Kingdom</p>
          </address>

          <div class="mt-5 pt-5 border-t border-border">
            <div class="flex items-center gap-2 text-sm text-muted-foreground font-sans">
              <Clock class="w-4 h-4 text-accent" />
              <span>Mon–Fri: 7am – 5pm</span>
            </div>

            <div class="flex items-center gap-2 text-sm text-muted-foreground font-sans mt-2">
              <Clock class="w-4 h-4 text-accent" />
              <span>Sat–Sun: 8am – 4pm</span>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="bg-card rounded-2xl p-8 border border-border">
          <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
            <Mail class="w-6 h-6 text-accent" />
          </div>

          <h3 class="font-serif text-xl text-foreground mb-5">Send a Message</h3>

          <!-- Prevent default submit (no hydration mismatch risk) -->
          <ClientOnly>

            <form class="space-y-4" @submit.prevent>
              <input type="text" placeholder="Your name" class="w-full px-4 py-3 rounded-lg border border-border bg-background
                     text-foreground font-sans text-sm placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring" />

              <input type="email" placeholder="Email address" class="w-full px-4 py-3 rounded-lg border border-border bg-background
                     text-foreground font-sans text-sm placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring" />

              <textarea rows="3" placeholder="Your message" class="w-full px-4 py-3 rounded-lg border border-border bg-background
                     text-foreground font-sans text-sm placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring resize-none" />

              <button type="submit" class="w-full bg-accent text-accent-foreground font-sans text-sm font-semibold
                     px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </ClientOnly>
        </div>

        <!-- Phone + Social -->
        <div class="bg-card rounded-2xl p-8 border border-border flex flex-col">
          <div class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
            <Phone class="w-6 h-6 text-accent" />
          </div>

          <h3 class="font-serif text-xl text-foreground mb-3">Call & Connect</h3>

          <div class="space-y-3 text-sm text-muted-foreground font-sans">
            <a href="tel:+442012345678" class="block hover:text-foreground transition-colors">
              +44 (0) 20 1234 5678
            </a>

            <a href="mailto:hello@themorning.cafe" class="block hover:text-foreground transition-colors">
              hello@themorning.cafe
            </a>
          </div>

          <div class="mt-auto pt-6">
            <p class="text-sm font-sans font-semibold text-foreground mb-3">Follow us</p>

            <div class="flex gap-3">
              <a v-for="s in ['Instagram', 'Facebook', 'X']" :key="s" href="#" class="px-4 py-2 text-xs font-sans font-medium rounded-full border border-border
                       text-muted-foreground hover:text-foreground hover:border-foreground
                       transition-colors">
                {{ s }}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
