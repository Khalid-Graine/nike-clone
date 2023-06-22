

<template>
 <div class="w-full relative flex flex-col mb-16">
    <div class="w-full flex justify-between items-center h-[20%]">
      <div class="w-6/12 flex items-center">
        <div class="hidden md:block">
          <RouterLink to="/" class="mr-3">Home</RouterLink>
          <RouterLink to="/about" class="mr-3">About</RouterLink>
          <RouterLink to="/contact" class="mr-3">contact</RouterLink>
        </div>
        <i
          @click="toggleShowMenu"
          class="fa-solid fa-grip-lines text-3xl cursor-pointer md:hidden"
        ></i>
      </div>

      <div class="w-6/12 flex justify-between items-center">
        <img src="./assets/img/nike-log.jpg" class="w-12" alt="" />
        <div class="flex items-center text-xl" title="Bag_items">
          <RouterLink to="/bag">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="ml-1">{{ store.bagNumbers }}</span>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- responsive links for small screens -->
    <div
      class="fixed h-screen w-7/12 bg-white opacity-95 top-0 z-50 transition-all duration-500 ease-linear"
      :class="showMenu === true ? 'left-0' : '-left-full'"
    >
      <div class="menu pt-20 w-full relative flex">
        <i
          @click="closeMenu()"
          class="fa-solid fa-xmark text-3xl text-start absolute top-4 right-4 cursor-pointer"
        ></i>
        <div class="flex gap-3 mx-auto">
          <RouterLink @click="closeMenu()" to="/">Home</RouterLink>
          <RouterLink @click="closeMenu()" to="/about">About</RouterLink>
          <RouterLink @click="closeMenu()" to="/contact">contact</RouterLink>
        </div>
      </div>
    </div>

    <!-- overlay -->
    <div
      v-if="showMenu"
      @click="closeMenu()"
      class="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-10"
    ></div>
  </div>
  <RouterView />
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { defineStore } from "pinia";
import { useProductsStore } from "./stores/products";

const store = useProductsStore();

const showMenu = ref(false);

function toggleShowMenu() {
  showMenu.value = !showMenu.value;
}
function closeMenu() {
  showMenu.value = !showMenu.value;
}
</script>

