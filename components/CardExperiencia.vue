import Heading1 from '~~/components/Heading';
<template>
  <div class="flex gap-4 flex-col">
    <img
      src="https://api.lorem.space/image/face?w=100&h=100"
      alt=""
      class="rounded-full self-center"
    />
    <Heading content="Pedro Engel" headingType="h3" secondary />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus
      impedit doloribus, deleniti, odit, consequatur eum dicta obcaecati
    </p>
  </div>
</template>

<script setup>
import Heading from "~~/components/Heading";

defineProps({
  data: Object,
});
</script>

<style scoped>
img {
  width: 150px;
}
</style>
