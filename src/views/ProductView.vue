<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/products.js'
import { useCartStore } from '@/stores/cart.js'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FilteredProductList from '@/components/FilteredProductList.vue'

const cart = useCartStore()

function handleAddToCart(product) {
  cart.addToCart(product)
}
</script>

<template>
  <DefaultLayout>
    <FilteredProductList />
  </DefaultLayout>
</template>
