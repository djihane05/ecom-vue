import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/boutique', name: 'boutique', component: ProductView },
  { path: '/panier', name: 'panier', component: CartView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
