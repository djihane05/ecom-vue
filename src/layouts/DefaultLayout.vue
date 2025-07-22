<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Navbar -->
    <header class="bg-[#00353F] h-20 shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <RouterLink to="/">
          <img :src="Logo" alt="Logo" class="h-14" />
        </RouterLink>
        <nav class="space-x-6 text-gray-300 font-semibold text-lg">
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
            class="hover:text-[#FFBF66] transition duration-200"
            active-class="text-[#FFBF66] font-bold"
            >Panier</RouterLink
          >
        </nav>
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
import { RouterLink } from 'vue-router'
import Logo from '@/assets/images/logo.png'
</script>
