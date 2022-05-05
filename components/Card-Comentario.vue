<template>
  <div class="bg-[#F9FAFB] shadow-lg rounded-xl py-8 px-12">
    <div class="flex flex-row gap-4 justify-center items-center mb-4">
      <img
        src="https://api.lorem.space/image/face?w=150&h=150"
        alt="profile"
        class="rounded-full h-20 w-20"
      />
      <div>
        <Paragraph1 class="font-bold text-xl"> Nombre </Paragraph1>
        <Paragraph1 class="text-secondary-900 font-medium text-base">
          @username
        </Paragraph1>
      </div>
    </div>
    <Paragraph1 class="font-medium text-base text-left">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde debitis
      quisquam harum dignissimos a dolorem exercitationem neque, quia facere ad
      provident quidem saepe nesciunt.
    </Paragraph1>
  </div>
</template>

<script setup>
import Paragraph1 from "./Paragraph.vue";
</script>

<style lang="scss" scoped></style>
