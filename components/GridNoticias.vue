<template>
  <div class="grid gap-12 w-full">
    <!-- <Noticia :data="campo" v-for="campo in data" /> -->
    <Noticia />
    <Noticia />
    <Noticia />
  </div>
</template>

<script setup>
import Noticia from "~~/components/Noticia.vue";
// const { data } = await useFetch("https://api.nuxtjs.dev/posts");
</script>

<style scoped>
.grid {
  grid-template-columns: 1.5fr 1fr 1fr;
}
</style>
