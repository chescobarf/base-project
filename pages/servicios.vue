<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="En que consisten nuestros servicios?"
          headingType="h2"
          class="mb-5"
        />
        <Heading
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          headingType="h4"
          class="mb-5"
        />
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
    <Servicios
      descriptionVendedores="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illum distinctio quasi reiciendis, magni sequi, omnis illo id ad ullam facilis fugit, obcaecati debitis iste. Blanditiis eaque amet dolorum delectus?"
      descriptionCompradores="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates illum distinctio quasi reiciendis, magni sequi, omnis illo id ad ullam facilis fugit, obcaecati debitis iste. Blanditiis eaque amet dolorum delectus?"
      :title="false"
    />
    <Comentarios />
    <Hablemos />
  </Container>
</template>

<script setup>
import Container from "~~/layouts/Container.vue";
import Servicios from "~~/layouts/Servicios.vue";
import BannerHome from "~~/layouts/BannerHome.vue";
import Heading from "~~/components/Heading.vue";
import Button from "~~/components/Button.vue";
import Comentarios from "~~/layouts/Comentarios.vue";
import Hablemos from "~~/layouts/Hablemos.vue";
</script>

<style scoped></style>
