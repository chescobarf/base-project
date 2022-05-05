<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
useHead({
  title: "Autocred",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content:
        "Autocred lo hace fácil. Postula simultáneamente tu crédito con diferentes crediticias y obtén una aprobación en segundos",
    },
    //TODO: Descomentar con el paso a produccion.
    // {
    //   "http-equiv": "Content-Security-Policy",
    //   content: "upgrade-insecure-requests",
    // },
  ],
});
</script>
