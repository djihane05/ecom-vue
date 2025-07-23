// ⬆️ Import en haut du fichier
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // chaque item : { product, quantity }
  }),
  getters: {
    // ➕ Getter pour le compteur d'articles
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const existing = this.items.find((item) => item.product.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ product, quantity: 1 })
      }
    },
    getTotal() {
      return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0)
    },
  },
})
