<template>
  <DefaultLayout>
    <div class="relative h-screen w-full overflow-hidden">
      <!-- Slideshow optimisé -->
      <transition name="slide-fade" tag="div" class="absolute inset-0 w-full h-full">
        <img
          :src="images[current]"
          :key="current"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </transition>

      <!-- Texte d'accueil -->
      <div class="absolute inset-0 flex items-center justify-center z-10">
        <h1
          class="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFBF66] via-white to-[#FFBF66] animate-gradient"
        >
          Bienvenue dans DJIHANE TECH
        </h1>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import image1 from '../assets/images/Image.jpg'
import image2 from '../assets/images/manette.jpg'
import image3 from '../assets/images/Image3.jpg'

const images = [image1, image2, image3]
const current = ref(0)
let interval

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % images.length
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1s ease;
  position: absolute;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
@keyframes gradientMove {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}

.animate-gradient {
  background-size: 200%;
  animation: gradientMove 6s linear infinite;
}
</style>
