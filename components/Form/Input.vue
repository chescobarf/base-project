<template>
  <div class="relative py-6 w-fit">
    <span v-show="focus" class="absolute top-0 left-0 text-sm">
      {{ placeholder }}
    </span>
    <span v-show="hover" class="block absolute top-0 right-0 text-black-100">{{
      hoverText
    }}</span>
    <input
      type="text"
      :placeholder="placeholder"
      class="px-2 py-1 border border-solid focus-visible:outline-primary-700 rounded"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @focusin="focus = true"
      @focusout="focus = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  placeholder: String,
  hoverText: String,
});
const hover = ref(false);
let focus = ref(false);
</script>

<style scoped></style>
