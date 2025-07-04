<script setup lang="ts">
// const route = useRoute()

// if (! route.query.hasOwnProperty('dave') ) {
//   throw createError({
//     statusCode: 500,
//     statusMessage: 'Server Error',
//     // statusCode: 404,
//     // statusMessage: 'Page Not Found',
//     data: {
//       myCustomField: true
//     }
//   })
// }
</script>

<!-- <HeroSVGSection /> -->

<template>
  <HeroSection />  
  <CTASection />
  <CategoriesSection />
  <GallerySection />
  <SocialSection />
  <SubFooterSection />
</template>

<style scoped></style>

<!-- <script lang="ts" setup>
const route = useRoute()

const { data: page, status, error, refresh, clear } = await useAsyncData(route.path, async () => {
  return queryCollection('content').path(route.path).first()
})

</script>

<template>
  <section>
  <h1>DAVE</h1>
  <h1>DAVE</h1>
  <h1>DAVE</h1>
  <div>

  <ContentRenderer v-if="page" :value="page" />
  <div v-else>Home not found</div>
  
  </div>
  </section>
</template>

<style scoped></style> -->
