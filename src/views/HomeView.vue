
<template>
  <div class="flex flex-col justify-center my-2">
    <img src="/src/assets/img/intro.webp" alt="" />
    <div class="mx-auto font-bold text-2xl sm:text-4xl my-3">
      FIND YOU PERFECT SHOE
    </div>
    <button class="mx-auto bg-black text-white w-fit p-2 px-4 rounded-full">
      Find a store
    </button>
  </div>
  <hr />
  <p class="text-xl sm:text-3xl font-semibold mt-2">Our Products</p>
  <card :products="store.products" />
  <theFooter />
</template>

<script setup>
import { defineStore } from "pinia";
import { useProductsStore } from "../stores/products";
import card from "../components/card.vue";
import theFooter from "../components/theFooter.vue";

const store = useProductsStore();
</script>
