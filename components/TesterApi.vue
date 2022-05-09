<template>
  <div class="flex gap-1 flex-col">
    <!-- <div v-for="(marca, index) in marcas.data" :key="index">
      <p>{{ marca }}</p>
    </div> -->
    <!-- <p v-if="marca">Marca ID:</p>

    <p v-else>No hay nada</p>
    <p>{{ modelos }}</p> -->
    <!-- <p>{{ data.data }}</p> -->
    <!-- <button @click="changeState">Click</button> -->
    <div class="grid gap-8 mb-6 bg-black-25">
      <h1>useFetch NUXT</h1>
      <span>{{ marcas.data }} </span>
      <span>{{ anios.data }}</span>
      <span>{{ servicios.data }}</span>
    </div>
    <div class="grid gap-8 mb-6 bg-black-25">
      <h1>Fetch JS</h1>
      <span>{{ marcasFetch.data }} </span>
    </div>
    <div class="grid gap-8 mb-6 bg-black-25">
      <h1>AXIOS</h1>
      <span>{{ marcasAxios.data }} </span>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onUpdated, ref, onMounted } from "vue";

const marcas = await useFetch(
  "http://dev.autocred.cl/api/utilities/vehicles/brands"
);
const anios = await useFetch(
  "http://dev.autocred.cl/api/utilities/others/years"
);
const servicios = await useFetch(
  "http://dev.autocred.cl/api/utilities/others/services"
);

const modelos = ref(0);
const marca = useMarca();

//fetch
const marcasFetch = ref([]);
const marcasAxios = ref([]);

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

onMounted(async () => {
  try {
    const res = await fetch(
      "http://dev.autocred.cl/api/utilities/vehicles/brands"
    );
    marcasFetch.value = await res.json();
  } catch (error) {
    console.log(error);
  }
});

const axiosGet = () => {
  axios
    .get("http://dev.autocred.cl/api/utilities/vehicles/brands")
    .then(function (response) {
      // handle success
      marcasAxios.value = response;
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
axiosGet();
</script>

<style lang="scss" scoped></style>
