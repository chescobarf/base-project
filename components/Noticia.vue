<template>
  <div class="flex flex-col gap-2">
    <img src="https://api.lorem.space/image/furniture?w=300&h=200" alt="" />
    <p class="text-slate-500">Medio prensa 03-02-22</p>
    <Heading1
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aspernatur optio quas modi assumenda in"
      headingType="h4"
    />
    <Button text="Ver mas" class="w-min" secondary />
  </div>
</template>

<script setup>
import Heading1 from "~~/components/Heading.vue";
import Button from "~~/components/Button.vue";
</script>

<style scoped>
img {
  border-bottom-right-radius: 25%;
  width: 100%;
  object-fit: cover;
}
</style>
