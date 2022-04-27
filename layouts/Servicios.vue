<template>
  <div class="mb-28">
    <Heading content="En que consisten nuestros servicios?" class="mb-8" />
    <Heading content="Vendedores" class="pb-8 border-b mb-8" />
    <ServiciosList :data="serviciosVendores" right class="mb-8" />
    <Heading content="Compradores" class="pb-8 border-b mb-8" />
    <ServiciosList :data="serviciosCompradores" />
  </div>
</template>

<script setup>
import Heading from "~~/components/Heading.vue";
import ServiciosList from "~~/components/ServiciosList.vue";

const serviciosVendores = [
  {
    name: "Transferencias",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus officia enim dignissimos repellendus, saepe maxime minima. Veritatis deleniti possimus rem sapiente magnam sed magni recusandae dicta modi. Sequi, voluptates libero",
    img: "https://uilogos.co/img/logomark/lighting.png",
  },
  {
    name: "Tag",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus officia enim dignissimos repellendus, saepe maxime minima. Veritatis deleniti possimus rem sapiente magnam sed magni recusandae dicta modi. Sequi, voluptates libero",
    img: "https://uilogos.co/img/logomark/lighting.png",
  },
  {
    name: "Seguro Mecanico",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus officia enim dignissimos repellendus, saepe maxime minima. Veritatis deleniti possimus rem sapiente magnam sed magni recusandae dicta modi. Sequi, voluptates libero",
    img: "https://uilogos.co/img/logomark/lighting.png",
  },
];
const serviciosCompradores = [
  {
    name: "Financiamiento",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus officia enim dignissimos repellendus, saepe maxime minima. Veritatis deleniti possimus rem sapiente magnam sed magni recusandae dicta modi. Sequi, voluptates libero",
    img: "https://uilogos.co/img/logomark/lighting.png",
  },
  {
    name: "Seguro Automotriz",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus officia enim dignissimos repellendus, saepe maxime minima. Veritatis deleniti possimus rem sapiente magnam sed magni recusandae dicta modi. Sequi, voluptates libero",
    img: "https://uilogos.co/img/logomark/lighting.png",
  },
  {
    name: "Seguro Mecanico",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus officia enim dignissimos repellendus, saepe maxime minima. Veritatis deleniti possimus rem sapiente magnam sed magni recusandae dicta modi. Sequi, voluptates libero",
    img: "https://uilogos.co/img/logomark/lighting.png",
  },
];
</script>

<style lang="scss" scoped></style>
