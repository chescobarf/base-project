<template>
  <div class="bg-white shadow-2xl cardService rounded-3xl py-4 px-4">
    <div class="grid place-content-center">
      <img :src="data.img" :alt="data.name" class="w-full" />
      <div class="content">
        <Heading1 :content="data.name" headingType="h3" />
        <p>
          {{ data.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading1 from "~~/components/Heading";
defineProps({
  data: Object,
});
</script>

<style scoped>
.grid {
  grid-template-columns: 100px 1fr;
  gap: 2rem;
}
</style>
