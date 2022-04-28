<template>
  <div class="w-full">
    <Slider
      v-model="value"
      class="slider-red"
      :max="100"
      :min="10"
      :merge="100"
      :step="10"
      :format="{ prefix: '$' }"
    />
    <Input :value="formatValue" disabled />
  </div>
</template>

<script setup>
import Slider from "@vueform/slider";
import Input from "./Form/Input.vue";
import { ref, unref, computed } from "vue";

const value = ref(0);
const formatValue = computed(() => "$" + unref(value));
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
.slider-red {
  --slider-connect-bg: #29235f;
  --slider-tooltip-bg: #ef44bc;
  --slider-handle-ring-color: #ef44bc;
}
</style>
