<template>
  <component
    :is="headingType"
    class="font-semibold text-primary-900"
    :class="{
      'text-primary-900': primary,
      'text-secondary-900': secondary,
      'text-white': white,
    }"
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
  white: Boolean,
});
</script>

<style scoped>
h1 {
  font-size: 50px;
}
h2 {
  font-size: 48px;
}
h3 {
  font-size: 26px;
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
.text-white {
  color: white;
}
</style>
