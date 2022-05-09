<template>
  <Heading1
    content="Descubre la experiencia de nuestro ultimo piloto"
    class="mb-14"
  />
  <div class="grid gap-12 justify-between mb-24">
    <CardExperiencia1 />
    <Video src="/assets/video/lorem.mp4" height="100%" controls class="pl-20" />
  </div>
</template>

<script setup>
import Video from "~~/components/Video.vue";
import CardExperiencia1 from "~~/components/CardExperiencia.vue";
import Heading1 from "~~/components/Heading.vue";
</script>

<style scoped>
.grid {
  grid-template-columns: 0.3fr 1fr;
}
</style>
