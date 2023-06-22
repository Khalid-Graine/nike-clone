<template>
  <div class="w-full flex flex-wrap">
    <!-- Bag Section -->
    <div class="min-w-fit flex-shrink flex-grow">
      <p class="text-xl mb-1">Bag</p>

      <!-- if there's no items in bag., -->
      <div
        v-if="Store.bag.length === 0"
        class="bg-red-100 text-red-600 p-3 pr-4 rounded-md mr-4"
      >
        there is no items in your bag
      </div>

      <!-- Item in bag -->
      <div v-for="p in Store.bag" :key="p.id" class="flex flex-wrap gap-2">
        <router-link :to="{ name: 'jordanDeatils', params: { id: p.id } }">
          <div class="w-[140px] h-[140px] mr-4 overflow-hidden">
            <img
              :src="'/src/assets/img/jordan-' + p.picture + '1.webp'"
              alt=""
            />
          </div>
        </router-link>

        <div class="flex flex-shrink flex-wrap flex-col gap-2">
          <h6 class="flex flex-wrap">{{ p.name }}</h6>
          <p>${{ p.price }}</p>

          <!-- Size select -->
          <div class="flex flex-wrap gap-2">
            <div class="flex">
              <label class="mr-2">size</label>
              <select
                name="sizes"
                id="sizes"
                class="outline-none mr-5 text-[#a9a9a9]"
              >
                <option :value="p.selectedSize">{{ p.selectedsize }}</option>
                <option v-for="size in p.sizes" :key="size" :value="p.size">
                  {{ size }}
                </option>
              </select>
            </div>

            <!-- Quantity select -->
            <div class="flex items-center">
              <p class="mr-3">Quantite</p>
              <i
                @click="Store.updateBagItem(p.id, '-')"
                :class="p.bag > 1 ? 'visible' : 'invisible'"
                class="fa-solid fa-minus w-6 h-6 flex justify-center items-center cursor-pointer rounded-full bg-red-100"
              ></i>
              <p class="mx-2 text-[#a9a9a9]">{{ p.bag }}</p>
              <i
                @click="Store.updateBagItem(p.id, '+')"
                class="fa-solid fa-plus w-6 h-6 flex justify-center items-center rounded-full bg-green-100 cursor-pointer"
              ></i>
            </div>
          </div>

          <!-- Favorite and remove icons -->
          <div class="text-xl">
            <i
              v-if="!p.favorite"
              @click="Store.toggleFav(p.id)"
              class="fa-regular fa-heart"
            ></i>
            <i
              v-if="p.favorite"
              @click="Store.toggleFav(p.id)"
              class="fa-solid fa-heart"
            ></i>
            <i
              @click="Store.removeFromBag(p.id)"
              class="fa-solid fa-trash-can ml-2"
            ></i>
          </div>
        </div>
        <div class="w-full bg-[#ccc] p-[0.5px] my-1"></div>
      </div>
    </div>
    <!-- Summary Section -->
    <div
      class="flex-grow min-w-fit max-w-auto mx-auto mt-6 md:mt-0 md:relative"
    >
      <p class="text-xl">Summary</p>
      <div class="flex justify-between px-3 py-3">
        <p>Estimated Shipping & Handling</p>
        <p>${{ summary.shipping }}</p>
      </div>
      <div class="flex justify-between px-3 py-3">
        <p>Estimated Tax</p>
        <p>${{ summary.tax }}</p>
      </div>
      <div class="flex justify-between px-3 py-3">
        <p>Total</p>
        <p>${{ summary.total }}</p>
      </div>
      <button
        class="w-full mt-3 bg-black text-white font-semibold py-4 rounded-full mb-2"
      >
        Checkout
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineStore } from "pinia";
import { toRefs } from "vue";
import { useProductsStore } from "../stores/products";

const Store = useProductsStore();

const { summary } = toRefs(Store);
</script>
<style>
</style>