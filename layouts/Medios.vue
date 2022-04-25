<template>
  <div>
    <Heading content="Autocred en Medios" />
    <div class="showMore w-full text-right">
      <Heading
        content="Ver todas las apariciones"
        headingType="h4"
        secondary
        class="cursor-pointer mb-4"
      />
      <GridNoticias />
    </div>
  </div>
</template>

<script setup>
import Heading from "~~/components/Heading.vue";
import GridNoticias from "~~/components/GridNoticias.vue";
</script>

<style lang="scss" scoped></style>
