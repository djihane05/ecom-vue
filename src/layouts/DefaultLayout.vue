<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Navbar -->
    <header class="bg-[#00353F] h-20 shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <RouterLink to="/">
          <img :src="Logo" alt="Logo" class="h-14" />
        </RouterLink>

        <!-- Hamburger Icon for mobile -->
        <button class="md:hidden text-[#FFBF66] focus:outline-none" @click="isOpen = !isOpen">
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Links (desktop) -->
        <nav
          class="hidden md:flex space-x-6 text-gray-300 font-semibold text-lg relative items-center"
        >
          <RouterLink
            to="/"
            class="hover:text-[#FFBF66] transition duration-200"
            active-class="text-[#FFBF66] font-bold"
            >Accueil</RouterLink
          >
          <RouterLink
            to="/boutique"
            class="hover:text-[#FFBF66] transition duration-200"
            active-class="text-[#FFBF66] font-bold"
            >Boutique</RouterLink
          >
          <RouterLink
            to="/panier"
            class="relative hover:text-[#FFBF66] transition duration-200"
            active-class="text-[#FFBF66] font-bold"
          >
            Panier
          </RouterLink>
          <RouterLink
            to="/panier"
            class="relative hover:text-[#FFBF66] transition duration-200"
            active-class="text-[#FFBF66] font-bold"
          >
            <!-- Icône panier (SVG) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m0 0h14m-14 0a1 1 0 001 1h12a1 1 0 001-1m-4-9v6"
              />
            </svg>

            <!-- Badge -->
            <span
              v-if="cart.itemCount > 0"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full"
            >
              {{ cart.itemCount }}
            </span>
          </RouterLink>
        </nav>
      </div>

      <!-- Links (mobile) -->
      <div
        v-if="isOpen"
        class="md:hidden bg-[#00353F] text-gray-300 font-semibold px-6 pb-4 space-y-2"
      >
        <RouterLink
          to="/"
          class="block hover:text-[#FFBF66] transition duration-200"
          active-class="text-[#FFBF66] font-bold"
          @click="isOpen = false"
          >Accueil</RouterLink
        >
        <RouterLink
          to="/boutique"
          class="block hover:text-[#FFBF66] transition duration-200"
          active-class="text-[#FFBF66] font-bold"
          @click="isOpen = false"
          >Boutique</RouterLink
        >
        <RouterLink
          to="/panier"
          class="block relative hover:text-[#FFBF66] transition duration-200"
          active-class="text-[#FFBF66] font-bold"
          @click="isOpen = false"
        >
          Panier
        </RouterLink>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-[#00353F] h-16 text-white flex items-center justify-center text-sm">
      © 2025 Créé par djihane. Tous droits réservés.
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from '@/assets/images/logo.png'
import { useCartStore } from '@/stores/cart'

const isOpen = ref(false)

const cart = useCartStore()
const cartCount = computed(() => cart.items.length)
</script>
