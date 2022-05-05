<template>
  <div class="bg-gray-100 py-12 px-12 mb-12">
    <Heading1 content="Hablemos" />
    <div class="bg-white rounded-xl card px-6 py-7">
      <Heading content="Formulario" headingType="h4" class="border-b pb-4" />
      <div class="grid grid-cols-2">
        <div class="left pr-8 border-r">
          <Input
            placeholder="Ingresa tu nombre completo"
            label="Nombre"
            id="name"
          />
          <InputEmail
            placeholder="Ingresa tu correo de contacto"
            label="Correo Electronico"
            id="email"
          />
          <Input
            placeholder="Ingresa tu numero"
            label="Telefono"
            id="phone"
            isPhone
          />
        </div>
        <div class="right pl-8">
          <SelectServicios label="Que servicios necesitas?" class="w-full" />
          <SelectServicios label="Que servicios necesitas?" class="w-full" />

          <TextArea1 label="Como te podemos ayudar?" id="textarea" />
          <div class="flex justify-end">
            <ButtonVue text="Enviar" outlinePrimary />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-white rounded-xl px-6 py-7">
        <Heading
          content="Informacion de contacto"
          headingType="h4"
          class="border-b pb-4 mb-4"
        />
        <div class="border-b pb-4 mb-4">
          <Heading :content="direcciones[0].direccion" headingType="h5" />
          <Heading :content="direcciones[0].correo" headingType="h5" />
          <Heading :content="direcciones[0].telefono" headingType="h5" />
        </div>
        <div class="h-96">
          <Map />
        </div>
      </div> -->
  </div>
</template>

<script setup>
import Heading1 from "~~/components/Heading.vue";
import Input from "~~/components/Form/Input.vue";
import InputEmail from "~~/components/Input-Email.vue";
import SelectServicios from "~~/components/SelectServicios.vue";
import TextArea1 from "~~/components/TextArea.vue";
import Map from "~~/components/Map.vue";
import { direcciones } from "~~/assets/helpers/API";
import ButtonVue from "~~/components/Button.vue";
</script>

<style scoped></style>
