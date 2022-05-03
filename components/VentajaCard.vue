<template>
  <div class="flex flex-col justify-between gap-4">
    <div class="flex flex-col gap-4">
      <img
        src="https://api.lorem.space/image/car?w=80&h=50"
        alt=""
        class="w-full"
      />
      <Heading1 headingType="h3" content="Un coopiloto todo terreno" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        officia, voluptatibus earum corporis illum consequuntur velit eos quam
        voluptas aut molestiae dolorem recusandae, asperiores eius obcaecati
        placeat amet exercitationem vitae?
      </p>
    </div>

    <Button1 text="Agenda tu servicio" secondary class="w-fit self-center" />
  </div>
</template>

<script setup>
import Heading1 from "./Heading.vue";
import Button1 from "./Button.vue";
</script>

<style lang="scss" scoped></style>
