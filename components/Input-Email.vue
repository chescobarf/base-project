<template>
  <div class="relative py-6 w-full">
    <label :for="id">{{ label }}</label>
    <!-- <span v-show="focus" class="absolute top-0 left-0 text-sm">
      {{ placeholder }}
    </span>
    <span v-show="hover" class="block absolute top-0 right-0 text-black-100">{{
      hoverText
    }}</span> -->
    <input
      required
      class="px-2 py-1 border border-solid focus-visible:outline-primary-700 rounded w-full"
      type="email"
      :placeholder="placeholder"
      v-model="email"
      @focusin="focus = true"
      @focusout="focus = false"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :id="id"
    />
    <span class="text-red-600 block">{{ validated }}</span>
  </div>
</template>

<script setup>
import { validateEmail } from "~~/assets/helpers/validate";
import { ref, computed, onUpdated, unref } from "vue";
defineProps({
  placeholder: String,
  hoverText: String,
  id: String,
  label: String,
});
const email = ref("");
const focus = ref(false);
const hover = ref(false);

const validated = computed(() => {
  if (unref(email) == "") {
    return "";
  } else {
    return validateEmail(email.value)
      ? ""
      : "Por favor ingresa una direccion de correo valida";
  }
});

const isError = computed(() => {
  return validateEmail(unref(email)) ? false : true;
});

onUpdated(() => {
  isError;
});
</script>

<style scoped></style>
