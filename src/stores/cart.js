import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // chaque item : { product, quantity }
  }),
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
      return this.items.reduce((total, item) => {
        return total + item.product.price * item.quantity
      }, 0)
    },
  },
})
