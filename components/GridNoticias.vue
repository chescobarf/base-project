<template>
  <div class="grid gap-12">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.grid {
  grid-template-columns: 40% 30% 30%;
}
.box {
  height: 300px;
  width: auto;
  background-color: aquamarine;
}
</style>
