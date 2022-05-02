<template>
  <div
    class="whitespace-nowrap inline-flex gap-1 items-center justify-center py-2 border border-transparent rounded-md shadow-sm text-base px-7 text-white bg-secondary-900 hover:bg-secondary-700 cursor-pointer"
  >
    <button class="font-medium">
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
  type: {
    validator(value) {
      return [
        "primary",
        "secondary",
        "outline-primary",
        "outline-secondary",
        "default",
      ].includes(value);
    },
  },
});
</script>

<style scoped>
.primary {
  background-color: rgb(20, 28, 82);
}
.secondary {
  background-color: rgb(212 15 125);
}
.primary:hover {
  background-color: #141c52cc;
}
.secondary:hover {
  background-color: #d40f7dcc;
}
.outline-primary {
  border: 2px solid rgb(20, 28, 82);
  background-color: transparent;
  color: rgb(20, 28, 82);
}
.outline-primary:hover {
  background-color: rgb(20, 28, 82);
  color: white;
}
.outline-secondary {
  border: 2px solid rgb(212 15 125);
  background-color: transparent;
  color: rgb(212 15 125);
}
.outline-secondary:hover {
  background-color: rgb(212 15 125);
  color: white;
}
.default {
  background-color: #141c5299;
}
.default:hover {
  background-color: #141c52cc;
}
</style>
