<template>
  <div class="bg-slate-50 py-6">
    <Heading1 content="Donde estamos" class="mb-8" />
    <div class="grid grid-cols-2 w-full justify-between">
      <div class="flex flex-row justify-end">
        <ul class="flex flex-col gap-2 px-6 border-r-2">
          <Heading
            v-for="(direccion, index) in direcciones"
            :key="index"
            :content="direccion.name"
            headingType="h5"
            class="cursor-pointer"
            :class="{ active: activeDirection == direccion.name }"
            @click="sayHello"
          />
        </ul>
        <div
          class="flex flex-col px-6 border-r-2"
          v-for="(direccion, index) in direcciones"
          v-show="direccion.name == unref(activeDirection)"
        >
          <div class="flex-col">
            <Heading
              content="Presencial"
              class="text-secondary-900"
              headingType="h5"
            />
            <p>{{ direccion.direccion }}</p>
            <p>{{ direccion.correo }}</p>
            <p>{{ direccion.telefono }}</p>
          </div>
          <div class="flex-col">
            <Heading
              content="Servicio 100% online"
              class="text-secondary-900"
              headingType="h5"
            />
          </div>
          <div class="flex-col">
            <Heading
              content="Servicio Movil"
              class="text-secondary-900"
              headingType="h5"
            />
            <p>{Vamos a domicilio}</p>
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
const activeDirection = ref("R.Metropolitana");
const sayHello = (e) => {
  console.log(e.target.innerText);
  activeDirection.value = e.target.innerText;
};
</script>

<style scoped>
.active {
  color: rgb(212, 15, 125);
}
</style>
