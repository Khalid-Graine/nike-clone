<template>
  <!-- parent -->
  <div
    class="bg-black tracking-wide leading-8  text-white w-full overflow-hidden relative fshadow mt-10 py-10 sm:flex  sm:items-start sm:justify-between"
  >
    <h3 class="font-semibold text-lg py-1 sm:p-0 ">FIND A STORE</h3>
            <hr class="h-[0.5px] bg-gray-200 border-0 my-1 sm:hidden" />
    <div>
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-lg py-1 sm:p-0">GET HELP</h3>
        <i
        v-if="hiddeAll === false"
          @click="toggleShowHelpLinks"
          class="fa-solid cursor-pointer"
          :class="showHelpLinks === false ? 'fa-plus' : 'fa-minus'"
        ></i>
      </div>
      <div v-if="showHelpLinks" class="text-[#ccc] text-sm leading-6">
        <p class="cursor-pointer hover:text-white">Returns</p>
        <p class="cursor-pointer hover:text-white">Contact us</p>
       <hr class="h-[0.5px] bg-gray-200 border-0 my-1 sm:hidden" />
      </div>
    </div>
    <div>
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-lg py-1 sm:p-0 ">ABOUT</h3>
        <i
          v-if="hiddeAll === false"
          @click="toggleShowAbout"
          class="fa-solid cursor-pointer"
          :class="showAbout === false ? 'fa-plus' : 'fa-minus'"
        ></i>
      </div>
      <div v-if="showAbout" class="text-[#ccc] text-sm leading-6">
        <p class="cursor-pointer hover:text-white">News</p>
        <p class="cursor-pointer hover:text-white">Careers</p>
        <p class="cursor-pointer hover:text-white">Investors</p>
        <p class="cursor-pointer hover:text-white">Sustainability</p>
       <hr class="h-[0.5px] bg-gray-200 border-0 my-1 sm:hidden" />
      </div>
    </div>
    
    <!-- social media links -->
    <div class="text-center text-3xl mt-4 sm:mt-0 ">
      <a href=""
        ><i
          class="fa-brands fa-instagram  mr-3 hover:text-[#FE0B5A]"
          title="instagram"
        ></i
      ></a>
      <a href="">
        <i
          class="fa-brands fa-facebook mr-3 hover:text-[#49659F]"
          title="facebook"
        ></i
      ></a>
      <a href="">
        <i
          class="fa-brands fa-twitter mr-3 hover:text-[#1D9BF0]"
          title="twitter"
        ></i
      ></a>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const hiddeAll = ref(false)
const showHelpLinks = ref(false);
const showAbout = ref(false);

const toggleShowAbout = () => {
  showAbout.value = !showAbout.value;
};
const toggleShowHelpLinks = () => {
  showHelpLinks.value = !showHelpLinks.value;
};

const logWindowWidth = () => {
  console.log(window.innerWidth);
  if(window.innerWidth > 640) {
    hiddeAll.value = true
    showHelpLinks.value = true
    showAbout.value = true
  } else {
     hiddeAll.value = false
     showHelpLinks.value = false
    showAbout.value = false
  }
};

onMounted(() => {
  // Call logWindowWidth function when component is mounted
  logWindowWidth();

  // Add event listener to update the window width value when the window is resized
  window.addEventListener("resize", logWindowWidth);
});

onUnmounted(() => {
  // Remove event listener when component is unmounted
  window.removeEventListener("resize", logWindowWidth);
});
</script>

<style scoped>
.fshadow {
  box-shadow: 120px 0px black, -120px 0 0px black;
}
</style>