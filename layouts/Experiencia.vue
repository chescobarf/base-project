<template>
  <div class="grid gap-12 justify-between mb-24">
    <CardExperiencia1 />
    <Video src="/assets/video/lorem.mp4" height="100%" controls />
  </div>
</template>

<script setup>
import Video from "~~/components/Video.vue";
import CardExperiencia1 from "~~/components/CardExperiencia.vue";
</script>

<style scoped>
.grid {
  grid-template-columns: 0.3fr 1fr;
}
</style>
