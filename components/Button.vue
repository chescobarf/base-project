<template>
  <button
    class="whitespace-nowrap inline-flex items-center justify-center py-2 border border-transparent rounded-md shadow-sm text-base font-medium px-7 text-white bg-secondary-900 hover:bg-secondary-700"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String,
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
