<template>
  <div class="bg-white shadow-xl py-6 px-12 rounded-xl w-fit my-0 mx-auto">
    <Heading1 content="Crea tu cuenta" headingType="h3" class="border-b pb-2" />
    <div
      class="grid items-center justify-items-center gap-4 border-b pb-4 mb-6"
    >
      <InputRut1 label="Rut" id="rut" class="input" />
      <Input label="Nombre" id="nombre" class="input" />
      <Input label="Apellidos" id="apellido" class="input" />
      <InputEmail1 label="Correo electronico" id="email" class="input" />
      <Input isPhone label="Telefono" id="phone" class="input" />
      <Input password label="Contraseña" id="password" class="input" />
      <Input password label="Repetir contraseña" id="password2" class="input" />

      <Button1
        text="Crear Cuenta"
        secondary
        class="justify-self-center w-fit"
      />
    </div>
  </div>
</template>

<script setup>
import Heading1 from "~~/components/Heading.vue";
import InputRut1 from "~~/components/Input-Rut.vue";
import Input from "./Form/Input.vue";
import Button1 from "./Button.vue";
import InputEmail1 from "./Input-Email.vue";
</script>

<style scoped>
.grid .input {
  padding-bottom: 0;
}
</style>
