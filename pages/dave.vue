<script lang="ts" setup>
// alert('hi')
const route = useRoute()
// console.log('route.path ' + route.path)
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
// console.log('page ' + page.value.title)
// console.dir(page)

// console.log('data')
// console.dir(data)


// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })

// const { data: home } = await useAsyncData( 
//   () => queryCollection('content').path('/').first()
// )
</script>

<template>
  <section>
  <h1>DAVE</h1>
  <h1>DAVE</h1>
  <h1>DAVE</h1>
  <div>
    <!-- <header>...</header> -->

    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Home not found</div>
  <!-- <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div> -->

  <!-- <footer>...</footer> -->
  </div>
  </section>
</template>

<style scoped></style>

<script setup lang="ts">



</script>

<!-- <template> -->
  <!-- <ContentRenderer v-if="home" :value="home" /> -->
  <!-- <div v-else>Home not found</div> -->
<!-- </template> -->