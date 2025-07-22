<template>
  <div
    class="relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
  >
    <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover rounded" />

    <div class="p-4 flex flex-col justify-between min-h-[220px]">
      <div>
        <h2 class="text-xl font-bold text-gray-800 truncate">{{ product.title }}</h2>
        <p class="text-sm text-gray-600 mt-2 line-clamp-2">{{ product.description }}</p>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <span class="text-lg text-[#430C05]font-bold">{{ product.price }} DA</span>
        <button
          @click="handleAddToCart"
          class="px-4 py-2 bg-[#08C5D1] text-white text-sm font-semibold rounded-lg hover:bg-[#00353F] transition"
        >
          Ajouter
        </button>
      </div>
    </div>

    <transition name="fade-slide">
      <div
        v-if="showNotification"
        class="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-2 rounded-lg shadow-md"
      >
        Produit ajouté au panier !
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  product: Object,
})

const emit = defineEmits(['add-to-cart'])

const showNotification = ref(false)

const handleAddToCart = () => {
  emit('add-to-cart', props.product)
  showNotification.value = true

  setTimeout(() => {
    showNotification.value = false
  }, 1500)
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
