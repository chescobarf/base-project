<template>
  <div class="py-6 mb-24">
    <Heading1 content="Donde estamos" class="mb-8" />
    <div class="grid grid-cols-2 w-full justify-between">
      <div class="flex flex-row justify-end">
        <ul class="flex flex-col gap-2 px-6 border-r-2">
          <!-- <Heading
            v-for="(direccion, index) in direcciones"
            :key="index"
            :content="direccion.name"
            headingType="h5"
            class="cursor-pointer text-primary-700"
            :class="{
              'text-secondary-900': activeDirection == direccion.name,
            }"
            @click="active"
          /> -->
          <Paragraph1
            v-for="(direccion, index) in direcciones"
            :key="index"
            class="cursor-pointer text-lg"
            :class="{
              'text-secondary-900 font-bold': activeDirection == direccion.name,
              'text-primary-700 font-medium': activeDirection != direccion.name,
            }"
            @click="active"
          >
            {{ direccion.name }}
          </Paragraph1>
        </ul>
        <div
          class="flex flex-col px-6 border-r-2 gap-2"
          v-for="(direccion, index) in direcciones"
          v-show="direccion.name == unref(activeDirection)"
          :key="index"
        >
          <div class="flex-col">
            <div class="flex gap-1 items-center">
              <CheckIcon class="text-secondary-900 w-5 h-5" />
              <Paragraph class="text-lg font-bold text-secondary-900">
                Presencial
              </Paragraph>
            </div>
            <div class="subcontent flex-col pl-6">
              <Paragraph class="text-base font-medium text-primary-900">
                {{ direccion.direccion }}
              </Paragraph>
              <Paragraph class="text-base font-medium text-primary-900">
                {{ direccion.correo }}
              </Paragraph>
              <Paragraph class="text-base font-medium text-primary-900">
                {{ direccion.telefono }}
              </Paragraph>
            </div>
          </div>
          <div class="flex-col">
            <div class="flex gap-1 items-center">
              <CheckIcon class="text-secondary-900 w-5 h-5" />
              <Paragraph class="text-lg font-bold text-secondary-900">
                Servicio 100% online
              </Paragraph>
            </div>
          </div>
          <div class="flex-col">
            <div class="flex gap-1 items-center">
              <CheckIcon class="text-secondary-900 w-5 h-5" />
              <Paragraph class="text-lg font-bold text-secondary-900">
                Servicio Movil
              </Paragraph>
            </div>
            <div class="subcontent subcontent flex-col pl-6">
              <Paragraph class="text-base font-medium text-primary-900">
                Vamos a domicilio
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div class="w-11/12 h-96 px-8">
        <Map1 />
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading1 from "~~/components/Heading.vue";
import Map1 from "~~/components/Map.vue";
import { ref, unref } from "vue";
import { direcciones } from "~~/assets/helpers/API";
import Paragraph1 from "~~/components/Paragraph.vue";
import { CheckIcon } from "@heroicons/vue/solid";
const activeDirection = ref("R.Metropolitana");
const active = (e) => {
  activeDirection.value = e.target.innerText;
};
</script>

<style scoped>
.active {
  color: rgb(212, 15, 125);
}
</style>
