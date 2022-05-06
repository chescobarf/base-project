<template>
  <div class="bg-gray-100 mb-24">
    <div v-if="data" class="grid grid-cols-4 gap-8 mb-10">
      <div v-for="item in data.data" class="flex flex-col items-center gap-4">
        <img src="https://picsum.photos/id/237/220/150" alt="" />
        <Paragraph1
          class="text-xl"
          :class="{
            'font-medium': elementActive != item.toLowerCase(),
            'font-bold': elementActive == item.toLowerCase(),
          }"
        >
          {{ item }}
        </Paragraph1>
        <Button1
          text="Mas informacion"
          outlineSecondary
          class="w-full"
          @click="active(item)"
        />
      </div>
    </div>
    <Loading v-else />
    <div v-for="element in dataServicios">
      <div v-if="element.id == elementActive">
        <Heading :content="element.title" />
        <div class="grid grid-cols-2 p-16">
          <div class="py-16 -ml-6 justify-self-end">
            <img :src="element.img" :alt="element.title" class="w-full" />
          </div>
          <div
            class="bg-white rounded-xl shadow-xl pt-16 pb-10 px-8 flex flex-col justify-between"
          >
            <Paragraph class="text-primary-900 font-medium text-base">
              {{ element.content }}
            </Paragraph>
            <Button
              :text="element.buttonText"
              secondary
              class="w-fit self-center"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from "~~/components/Loading.vue";
import Paragraph1 from "~~/components/Paragraph.vue";
import Button1 from "~~/components/Button.vue";
import { isObjEmpty } from "~~/assets/helpers/validate";
import { dataServicios } from "~~/assets/helpers/constants";
import { ref } from "vue";
import Heading from "~~/components/Heading.vue";
import { Paragraph, Button } from "../.nuxt/components";
const route = useRoute();
const { data } = await useFetch(
  "http://dev.autocred.cl/api/utilities/others/services"
);

const elementActive = ref(
  isObjEmpty(route.query) ? "" : Object.keys(route.query)[0].toLowerCase()
);

const active = (element) => {
  elementActive.value = element.toLowerCase();
};
console.log(route.query);
</script>

<style lang="scss" scoped></style>
