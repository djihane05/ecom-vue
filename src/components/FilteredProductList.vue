<template>
  <div class="max-w-7xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Nos Produits</h1>

    <!-- Filtres -->
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        :class="[
          'px-4 py-2 rounded-full border font-medium',
          activeCategory === cat
            ? 'bg-[#00353F] text-white border-[#00353F]'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Liste produits filtrés -->
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const activeCategory = ref('Tous')

// Génère la liste des catégories uniques (avec "Tous" en premier)
const categories = ['Tous', ...new Set(products.map((p) => p.category))]

const filteredProducts = computed(() => {
  if (activeCategory.value === 'Tous') return products
  return products.filter((p) => p.category === activeCategory.value)
})

function handleAddToCart(product) {
  cart.addToCart(product)
}
</script>
