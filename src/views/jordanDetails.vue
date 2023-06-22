<template>

  <div class="flex flex-wrap gap-2 min-[700px]:flex-nowrap">

      <!-- Product images -->
      <div class="w-full lg:w-7/12 flex justify-center overflow-hidden">
        <div class="hidden sm:flex sm:justify-between flex-col gap-1 mr-1 h-[430px]">
          <div
            v-for="pic in [1, 2, 3, 4, 5]"
            :key="pic"
            class="flex justify-center items-center w-20 h-20 rounded-md overflow-hidden"
            :class="pic === show ? 'border border-[#c5c5c5]' : ''"
          >
            <img
              :src="'/src/assets/img/jordan-' + obj.picture + pic + '.webp'"
              alt=""
              class="object-fill"
              @mouseenter="move(pic)"
            />
          </div>
        </div>
        <div class="h-[430px] max-w-[500px] sm:max-w-[400px] flex justify-center items-center rounded-xl overflow-hidden relative">
          <span
            @click="swipeToLeft"
            v-if="show > 1"
            class="absolute left-0 sm:hidden bg-[#ccc] hover:text-white w-10 h-10 flex justify-center items-center rounded-full"
          ><i class="fa-solid fa-chevron-left"></i
          ></span>
          <img
            :src="'/src/assets/img/jordan-' + obj.picture + show + '.webp'"
            alt=""
            class="object-contain self-start"
          />
          <span
            @click="swipeToRight"
            v-if="show < 5"
            class="absolute right-0 sm:hidden bg-[#ccc] hover:text-white w-10 h-10 flex justify-center items-center rounded-full"
          ><i class="fa-solid fa-chevron-right"></i
          ></span>
        </div>
      </div>

      <!-- Product details -->
      <div class="flex-shrink w-full lg:w-5/12 mt-2 flex flex-col gap-4">
        <p class="text-xl">{{ obj.name }}</p>
        <p>${{ obj.price }}</p>
        <div class="flex flex-wrap justify-between gap-1">
          <p class="w-full">select size</p>
          <form action="">
            <div v-for="size in obj.sizes" :key="size">
              <input
                v-model="selectedSize"
                type="radio"
                :value="size"
                name="size"
              />
              <label :for="size" class="i">{{ size }}</label>
            </div>
          </form>
        </div>
        <p v-if="noSelecetedSize" class="text-red-500">
          please you must select size
        </p>
        <div class="">
          <button
            @click="handleAddToBag(obj.id)"
            class="w-full bg-black text-white font-semibold py-4 rounded-full"
          >
            Add to Bag
          </button>
          <button
            @click="store.toggleFav(obj.id)"
            class="bg-transparent border-[1.5px] border-[#ccc] w-full p-4 rounded-full mt-1 hover:border-black"
          >
            favorite
            <i v-if="obj.favorite === false" class="fa-regular fa-heart"></i>
            <i v-show="obj.favorite === true" class="fa-solid fa-heart"></i>
          </button>
        </div>
        <p class="w-10/12 mx-auto text-center text-[#757575]">
          This product is excluded from site promotions and discounts.
        </p>
      </div>
  </div>


  <!--  -->
  <div class="mt-10 overflow-hidden">
    <p class="text-center text-xl mb-6">Explore the Air Jordan 1 Low Shoes</p>
    <img src="/src/assets/img/cover1.webp" alt="" />
  </div>
  <div class="mt-16 overflow-hidden">
    <p class="text-center text-xl mb-6">
      Genuine leather in the upper offers durability and a premium look.
    </p>
    <img src="/src/assets/img/cover2.jpg" alt="" />
  </div>
  <div
    class="flex justify-start items-start bg-[#393939] gap-4 p-4 fixed bottom-4  z-50 transition-right duration-500 ease-in-out border-l-4 border-green-400"
    :class="notificationSuccessfully === true ? 'right-1' : '-right-full'"
  >
    <i class="fa-solid fa-circle-check text-green-400 text-xl px-1"></i>
    <div class="text-white">
      <span class="font-semibold">added to bag successfully </span><br />
      <span class="text-sm"
        >You have successfully added you <br />
        item to your bag</span
      >
      <RouterLink to="/bag">
      <p class="border-[1.5px] border-blue-400 w-fit px-4 py-2 mt-3 hover:bg-blue-400 cursor-pointer ">Check it</p>
      </RouterLink>
    </div>
    <i
      @click="closeNotification()"
      class="fa-solid fa-xmark px-1 text-white cursor-pointer"
    ></i>
  </div>
  <thefooter />
</template>

<script setup>
import { defineStore } from "pinia";
import { ref } from "vue";
import { useProductsStore } from "../stores/products";
import thefooter from "../components/theFooter.vue";

const store = useProductsStore();
const props = defineProps(["id"]);
const show = ref(1);
const selectedSize = ref("");
const noSelecetedSize = ref(false);
const notificationSuccessfully = ref(false);

const obj = store.products[props.id];
console.log(obj.favorite);
function move(i) {
  show.value = i;
}
function swipeToLeft() {
  show.value = show.value - 1;
}
function swipeToRight() {
  show.value = show.value + 1;
}
function handleAddToBag(id) {
  if (selectedSize.value.length > 0) {
    store.addToBag(id, selectedSize.value);
    noSelecetedSize.value = false;
    showNotification();
  } else {
    noSelecetedSize.value = true;
  }
}

function showNotification() {
  notificationSuccessfully.value = true;
  setInterval(() => {
    notificationSuccessfully.value = false;
  }, 8000);
}
function closeNotification() {
  notificationSuccessfully.value = false;
}
</script>

<style>
.fr img {
  height: calc(100vh / 5);
  object-fit: cover;
}
.t {
  height: calc(100vh - 50%);
}
.my {
  position: relative;
}
</style>
