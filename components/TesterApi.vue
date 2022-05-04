<template>
  <div class="flex gap-1 flex-col">
    <!-- <div v-for="(marca, index) in marcas.data" :key="index">
      <p>{{ marca }}</p>
    </div> -->
    <p v-if="marca">Marca ID:</p>

    <p v-else>No hay nada</p>
    <p>{{ modelos }}</p>
    <!-- <p>{{ data.data }}</p> -->
    <!-- <button @click="changeState">Click</button> -->
  </div>
</template>

<script setup>
import { onUpdated, ref } from "vue";

const modelos = ref(0);
const marca = useMarca();

onUpdated(async () => {
  try {
    const { data } = await useFetch(
      `http://dev.autocred.cl/api/utilities/vehicles/brands/${marca.value.id}/models`
    );
    modelos.value = data.value.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style lang="scss" scoped></style>
