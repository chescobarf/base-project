<template>
  <div>
    <Navbar />
    <!-- <Input placeholder="Nombre" hoverText="Nombre" />
    <Tabs1 /> -->
    <!-- <VideoIframe src="https://www.youtube.com/embed/2tudY7PsNAI" /> -->
    <!-- <Video
      controls
      muted
      autoplay
      src="/assets/video/lorem.mp4"
      height="400px"
    /> -->
    <!-- <InputEmail placeholder="Email" />
    <InputRut placeholder="Rut" />
     -->
    <!-- <SliderRange />
    <Carousel /> -->

    <!-- <FormVue /> -->
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import SliderRange from "./components/Slider-Range.vue";
import Carousel from "./components/Carousel.vue";
import Input from "./components/Form/Input.vue";
import Tabs1 from "./components/Tabs.vue";
import VideoIframe from "./components/Video-Iframe.vue";
import Video from "./components/Video.vue";
import InputEmail from "./components/Input-Email.vue";
import FormVue from "./layouts/Form.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
