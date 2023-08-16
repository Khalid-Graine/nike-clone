<template>
  <div class="w-full flex flex-wrap justify-center mt-4">

    <div
      v-for="product in products"
      :key="product.id"
      class="card w-full bg-white p-1 sm:w-6/12 lg:w-4/12 rounded-sm overflow-hidden relative"
    > 
      <router-link :to="{ name:'jordanDeatils', params: { id: product.id } }">
      <div class="overflow-hidden">
        <img
    :src="getImagePath(product.picture)"
    alt=""
    class="h-[380px] w-full object-cover"
  />
      </div>
      <div>
        <p v-if="product.bestSeller === true"  class="text-xl text-orange-400 absolute top-2 left-3">Best Seller</p>
        
        <p>{{ product.name }}</p>
        
        <p >${{ product.price }}</p>
      </div>
       </router-link>
    </div>


    
  </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
  products: {
    type: Array,
    deafult: "nothing",
  },
});



const getImagePath = (picture) => {
  return `./src/assets/img/jordan-${picture}1.webp`;
  // return import(`@/assets/img/jordan-${picture}1.webp`).then(module => module.default);
};
 
</script>
