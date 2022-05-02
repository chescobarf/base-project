<template>
  <div
    class="whitespace-nowrap inline-flex gap-1 items-center justify-center py-2 border border-transparent rounded-lg shadow-sm text-lg px-5 cursor-pointer"
    :class="{
      'bg-secondary-900 hover:bg-secondary-700 text-white': secondary,
      'bg-primary-900 hover:bg-secondary-700 text-white': primary,
      'bg-transparent text-primary-900 border-2 border-primary-900 hover:bg-primary-900 hover:text-white':
        outlinePrimary,
      'bg-transparent text-secondary-900 border-2 border-secondary-900 hover:bg-secondary-900 hover:text-white':
        outlineSecondary,
      'py-1': user,
    }"
  >
    <button class="font-semibold">
      {{ text }}
    </button>
    <UserIcon class="h-5 w-5" v-if="user" />
  </div>
</template>

<script setup>
import { UserIcon } from "@heroicons/vue/outline";
defineProps({
  text: String,
  user: Boolean,
  primary: Boolean,
  secondary: Boolean,
  outlinePrimary: Boolean,
  outlineSecondary: Boolean,
});
</script>

<style scoped></style>
