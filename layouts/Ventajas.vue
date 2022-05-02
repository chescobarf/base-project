<template>
  <div class="mb-4">
    <Heading1 content="Ventajas de viajar juntos" class="mb-4" />
    <div class="w-full grid grid-cols-3 gap-8 mb-20">
      <VentajaCard />
      <VentajaCard />
      <VentajaCard />
    </div>
  </div>
</template>

<script setup>
import VentajaCard from "~~/components/VentajaCard.vue";
import Heading1 from "~~/components/Heading.vue";
import ButtonVue from "~~/components/Button.vue";
</script>

<style lang="scss" scoped></style>
