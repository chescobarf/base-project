<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="Tu mejor copiloto para la compra y venta de autos usados entre personas"
          headingType="h1"
          class="mb-5"
        />
        <Heading
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          headingType="h4"
          class="mb-5"
        />
        <div>
          <Heading
            content="En que viaje te guiamos?"
            headingType="h4"
            class="mb-3"
          />
          <div class="flex flex-row gap-4">
            <NuxtLink to="/vendedores">
              <Button text="Quiero vender" secondary />
            </NuxtLink>
            <NuxtLink to="/compradores">
              <Button text="Quiero comprar" outlinePrimary />
            </NuxtLink>
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
    <Ventajas />
    <Servicios />
    <Respaldo />
    <Experiencia />
    <Comentarios />
    <DondeEstamos />
    <Medios />
    <div id="contacto"></div>
    <Hablemos />
  </Container>
</template>

<script setup>
import Container from "~~/layouts/Container.vue";
import Servicios from "~~/layouts/Servicios.vue";
import BannerHome from "~~/layouts/BannerHome.vue";
import Ventajas from "~~/layouts/Ventajas.vue";
import Respaldo from "~~/layouts/Respaldo.vue";
import Heading from "~~/components/Heading.vue";
import Button from "~~/components/Button.vue";
import Comentarios from "~~/layouts/Comentarios.vue";
import DondeEstamos from "~~/layouts/DondeEstamos.vue";
import Medios from "~~/layouts/Medios.vue";
import Hablemos from "~~/layouts/Hablemos.vue";
import Experiencia from "~~/layouts/Experiencia.vue";
import { NuxtLink } from "../.nuxt/components";
</script>

<style scoped></style>
