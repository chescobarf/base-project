import { NuxtLink } from '../.nuxt/components';
<template>
  <div
    class="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-primary-900 to-secondary-900"
  >
    <div class="px-40 py-20 bg-white rounded-md shadow-xl">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-secondary-800 text-9xl">404</h1>

        <h6
          class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
        >
          <span class="text-red-500">Oops!</span> Page not found
        </h6>

        <p class="mb-8 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>

        <NuxtLink
          to="/"
          class="bg-secondary-900 px-3 py-2 rounded-md text-white font-medium"
        >
          Go back
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
