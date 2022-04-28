<template>
  <div class="mb-28">
    <Heading content="En que consisten nuestros servicios?" class="mb-8" />
    <Heading content="Vendedores" class="pb-8 border-b mb-8" />
    <ServiciosList :data="serviciosVendores" right class="mb-8" />
    <Heading content="Compradores" class="pb-8 border-b mb-8" />
    <ServiciosList :data="serviciosCompradores" />
  </div>
</template>

<script setup>
import Heading from "~~/components/Heading.vue";
import ServiciosList from "~~/components/ServiciosList.vue";
import {
  serviciosVendores,
  serviciosCompradores,
} from "~~/assets/helpers/constants";
</script>

<style lang="scss" scoped></style>
