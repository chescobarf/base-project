<template>
  <component
    :is="headingType"
    class="font-bold text-primary-900"
    :class="{ 'text-primary-900': primary, 'text-secondary-900': secondary }"
  >
    {{ content }}
  </component>
</template>

<script setup>
defineProps({
  headingType: {
    type: String,
    default: "h2", // you can pass anything from 'h1' to 'h6' here
  },
  content: {
    type: String,
  },
  primary: Boolean,
  secondary: Boolean,
});
</script>

<style>
h1 {
  font-size: xxx-large;
}
h2 {
  font-size: xx-large;
}
h3 {
  font-size: x-large;
}
h4 {
  font-size: larger;
}
h5 {
  font-size: large;
}
h6 {
  font-size: medium;
}
</style>
