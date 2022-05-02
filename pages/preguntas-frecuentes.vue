<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="Hacer un buen negocio es un camino en que muchos se pierden. Para llegar a destino, confia en un coopiloto experto"
          headingType="h2"
          class="mb-5"
        />
        <Heading
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          headingType="h3"
          class="mb-5"
        />
        <div>
          <div class="flex flex-row gap-4">
            <Button text="Viajemos juntos" class="secondary" />
          </div>
        </div>
      </template>
      <template #image>
        <div class="grid place-content-center">
          <img
            src="https://picsum.photos/id/199/536/354"
            alt="lorem"
            class=""
          />
        </div>
      </template>
    </BannerHome>
    <PreguntasList vendedor secondary />
    <PreguntasList comprador primary />
    <Hablemos />
  </Container>
</template>

<script setup>
import Container from "~~/layouts/Container.vue";
import BannerHome from "~~/layouts/BannerHome.vue";
import Heading from "~~/components/Heading.vue";
import Button from "~~/components/Button.vue";
import Hablemos from "~~/layouts/Hablemos.vue";
import PreguntasList from "~~/layouts/preguntas/PreguntasList.vue";
</script>

<style scoped></style>
