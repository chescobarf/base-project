<template>
  <div class="bg-slate-100 px-32 pt-10 pb-20 grid">
    <div class="title mb-8">
      <HeadingVue content="Esto nos mueve" />
      <HeadingVue
        content="lorem ipsum dolor sit amet, consectur..."
        headingType="h3"
        class="pb-4 border-b"
      />
    </div>
    <div class="grid gap-24 mb-12">
      <div v-for="(item, index) in valores" :key="index" class="card relative">
        <div class="shadow-xl py-4 px-6 bg-white rounded-2xl">
          <HeadingVue :content="item.title" />
          <p>{{ item.content }}</p>
        </div>
        <img :src="item.src" alt="" class="absolute top-0" />
      </div>
    </div>
    <a href="#contacto" class="justify-self-center">
      <Button1 text="Hablemos" secondary />
    </a>
  </div>
</template>

<script setup>
import HeadingVue from "~~/components/Heading.vue";
import { valores } from "~~/assets/helpers/constants";
import Button1 from "~~/components/Button.vue";
</script>

<style scoped>
.card:nth-child(odd) {
  justify-self: start;
  margin-left: 9rem;
}
.card:nth-child(even) {
  justify-self: end;
  margin-right: 9rem;
}
.card:nth-child(odd) img {
  left: -8rem;
  top: 3rem;
}
.card:nth-child(even) img {
  right: -8rem;
  top: 3rem;
}

img {
  width: 9rem;
}

.card {
  width: 80%;
}
</style>
