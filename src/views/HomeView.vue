<template>
  <DefaultLayout>
    <div
      class="min-h-screen bg-cover bg-center flex items-center justify-center"
      :style="{
        backgroundImage: `url(${Image})`,
      }"
    >
      <transition name="fade-up" appear>
        <h2
          class="text-2xl font-semibold text-white bg-black/50 px-6 py-4 rounded-lg shadow-md md:text-4xl"
        >
          Bienvenue dans DJIHANE TECH
        </h2>
      </transition>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Image from '@/assets/images/Image.jpg'
</script>

<style scoped>
.fade-up-enter-active {
  transition: all 0.8s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
