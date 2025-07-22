<template>
  <DefaultLayout>
    <div class="max-w-5xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">🛒 Votre panier</h1>

      <div v-if="cart.items.length === 0" class="text-center text-gray-500">
        Votre panier est vide.
      </div>

      <div v-else class="space-y-6">
        <div
          v-for="item in cart.items"
          :key="item.product.id"
          class="flex items-center gap-4 p-4 bg-white rounded shadow"
        >
          <img
            :src="item.product.image"
            alt="Image produit"
            class="w-20 h-20 object-cover rounded"
          />
          <div class="flex-1">
            <h2 class="text-lg font-semibold">{{ item.product.name }}</h2>
            <p class="text-sm text-gray-500">Quantité : {{ item.quantity }}</p>
            <p class="text-sm text-gray-600">Prix unitaire : {{ item.product.price }} DA</p>
          </div>
          <div class="text-right font-bold text-lg">
            {{ item.product.price * item.quantity }} DA
          </div>
        </div>

        <!-- Total -->
        <div class="text-right text-xl font-bold mt-6 border-t pt-4">
          Montant total : {{ total }} DA
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const cart = useCartStore()

const total = computed(() =>
  cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
)
</script>
