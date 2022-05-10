<template>
  <div class="mb-24">
    <Heading1 content="Ventajas de viajar juntos" class="mb-4" />
    <div class="w-full grid grid-cols-3 gap-32 mb-20">
      <VentajaCard src="/_nuxt/assets/img/copiloto.png" />
      <VentajaCard src="/_nuxt/assets/img/mejor-ruta.png" />
      <VentajaCard src="/_nuxt/assets/img/copiloto.png" />
    </div>
  </div>
</template>

<script setup>
import VentajaCard from "~~/components/VentajaCard.vue";
import Heading1 from "~~/components/Heading.vue";
</script>

<style lang="scss" scoped></style>
