<script setup lang="ts">
/**
 * pages/index.vue
 * ----------------
 * Nuxt 4.3 equivalent of React's pages/Index.tsx.
 *
 * Notes:
 * - Nuxt automatically imports components from /components.
 * - No router setup required (file-based routing).
 * - No hydration mismatches: no inline opacity, no client-only logic.
 * - Tailwind v4 tokens (bg-background, text-foreground, etc.) work because
 *   they are defined in your unified main.css.
 *
 * Components used:
 * - Navbar
 * - HeroSection
 * - GallerySection
 * - CateringSection
 * - MenuSection
 * - AboutSection
 * - ContactSection
 * - MapSection
 * - Footer
 */
</script>

<template>
  <!-- Main page wrapper -->
  <main class="min-h-screen bg-background scroll-smooth">

    <!-- Global navigation -->
    <Navbar />

    <!-- Hero / Landing -->
    <HeroSection />
    <!-- <HeroSectionV1 /> -->

    <!-- Gallery -->
    <GallerySection />
    <h6>Catering</h6>
    <!-- Catering -->
    <CateringSection />
    <!--    <h6>CAS</h6>-->
    <!--    <CorporateAsymmetricSection />-->

    <!--    <h6>CCS</h6>-->
    <!--    <CorporateCardsSection />-->

    <!--    <h6>CSS</h6>-->
    <CorporateShowcaseSection />

    <!-- Menu -->
    <MenuSection />

    <!-- About -->
    <AboutSection />

    <!-- Contact -->
    <ContactSection />

    <!-- Map -->
    <MapSection />

    <!-- Footer -->
    <Footer />

  </main>
</template>