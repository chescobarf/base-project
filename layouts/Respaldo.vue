<template>
  <div class="bg-slate-100 py-6 mb-10">
    <Heading
      content="Con el respaldo de:"
      class="mb-4 text-black-100"
      headingType="h3"
    />
    <Carousel :itemsToShow="2.5" :wrap-around="true">
      <Slide v-for="slide in images" :key="slide">
        <div class="carousel__item">
          <img :src="slide.url" :alt="slide.alt" class="w-fit grayscale" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import Heading from "~~/components/Heading.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

const images = [
  {
    alt: "hdi",
    url: "https://www.autocred.cl/images/crediticias-logos/hdi.png",
  },
  {
    alt: "icar",
    url: "https://www.autocred.cl/images/crediticias-logos/icar.png",
  },
  {
    alt: "brand3",
    url: "https://www.autocred.cl/images/crediticias-logos/autofact.png",
  },
  {
    alt: "brand4",
    url: "https://www.autocred.cl/images/landing/logo-autocred-white.png",
  },
];
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: transparent;
  /* color: var(--vc-clr-white); */
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
