<template>
  <div class="flex gap-4 flex-col">
    <img
      src="~~/assets/img/Pedro.jpg"
      alt=""
      class="w-40 h-40 rounded-full self-center object-cover"
    />
    <Heading content="Pedro Engel" headingType="h3" secondary />
    <Paragraph1 class="font-bold text-base">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus
      impedit doloribus, deleniti, odit, consequatur eum dicta obcaecati
    </Paragraph1>
  </div>
</template>

<script setup>
import Heading from "~~/components/Heading";
import Paragraph1 from "~~/components/Paragraph";

defineProps({
  data: Object,
});
</script>

<style scoped></style>
