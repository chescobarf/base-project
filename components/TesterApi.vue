<template>
  <div class="flex gap-1 flex-col">
    <div v-for="(marca, index) in marcas.data" :key="index">
      <p>{{ marca }}</p>
    </div>
  </div>
</template>

<script setup>
const { data: marcas } = await useFetch(
  "http://dev.autocred.cl/api/utilities/vehicles/brands",
  { pick: ["data"] }
);
</script>

<style lang="scss" scoped></style>
