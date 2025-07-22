<template>
  <div class="flex justify-between items-center bg-white p-4 shadow mb-2 rounded">
    <div>
      <h3 class="font-medium">{{ item.name }}</h3>
      <p>Quantité : {{ item.quantity }}</p>
    </div>
    <button class="text-red-500" @click="remove">Supprimer</button>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const props = defineProps({ item: Object })
const cart = useCartStore()

function remove() {
  cart.removeFromCart(props.item.id)
}
</script>
