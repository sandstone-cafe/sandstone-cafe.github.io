<script lang="ts" setup>
console.log('Raise.vue')
const route = useRoute()
console.log('route.query ' + route.query.dave)

// if (! route.query.hasOwnProperty('dave') ) {
//   console.log('Throw Error')
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

<template>
    <section>
      <h1>DAVE</h1>
      <h1>DAVE</h1>
      <h1>DAVE</h1>
      <div>
        ERE        
      </div>
    </section>

</template>

<style scoped></style>

<!-- 

// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })
-->

<!-- <template> -->
  <!-- <ContentRenderer v-if="home" :value="home" /> -->
  <!-- <div v-else>Home not found</div> -->
<!-- </template> -->