<template>
  <div class="bg-slate-100 py-6 mb-24">
    <Heading
      content="Con el respaldo de:"
      class="mb-4 text-black-100"
      headingType="h3"
    />
    <Carousel
      :itemsToShow="4"
      :wrap-around="true"
      snapAlign="start"
      :autoplay="500"
      :transition="3000"
    >
      <Slide v-for="slide in brands" :key="slide">
        <div class="carousel__item">
          <img
            :src="slide.url"
            :alt="slide.alt"
            class="grayscale w-fit h-14 object-contain"
          />
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
import { brands } from "~~/assets/helpers/constants";
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

.carousel__slide.carousel__slide--active.carousel__slide--visible {
  transform: scale(1);
}

.carousel__slide.carousel__slide--prev,
.carousel__slide.carousel__slide--visible {
  transform: scale(1);
}
</style>
