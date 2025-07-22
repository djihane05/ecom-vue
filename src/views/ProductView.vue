<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products.js'
import { useCartStore } from '@/stores/cart.js'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const cart = useCartStore()

function handleAddToCart(product) {
  cart.addToCart(product)
}
</script>

<template>
  <DefaultLayout>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 class="text-4xl font-extrabold text-center text-[#00353F] mb-10">Nos Produits</h1>

      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </section>
  </DefaultLayout>
</template>
