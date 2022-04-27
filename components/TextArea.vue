<template>
  <div class="w-full">
    <label :for="id" class="block">{{ label }}</label>
    <textarea
      name="comentarios"
      rows="10"
      cols="40"
      class="px-2 py-1 border border-solid focus-visible:outline-primary-700 rounded w-full"
      :id="id"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
});
</script>
