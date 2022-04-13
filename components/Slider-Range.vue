<template>
  <div class="w-52 mx-auto">
    <Slider
      v-model="value"
      class="slider-red"
      :max="100"
      :min="10"
      :merge="100"
      :step="10"
      :format="{ prefix: '$' }"
    />
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data: () => ({
    value: 0,
  }),
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
.slider-red {
  --slider-connect-bg: #29235f;
  --slider-tooltip-bg: #ef44bc;
  --slider-handle-ring-color: #ef44bc;
}
</style>
