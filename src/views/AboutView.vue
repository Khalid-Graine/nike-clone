<template>
  <p class="text-3xl font-semibold my-1">Our Purpose</p>
  <div class="relative z-0 flex">
    <div class="w-6/12 font text-[4vw] bg-[#f6f6f6] font-extrabold p-4">
      BRING INSPIRATION AND INNOVATION TO EVERY ATHLETE* IN THE WORLD
    </div>
    <div class="w-6/12 flex">
      <img
        class="object-cover"
        src="/src/assets/img/world-of-flight-shibuya-05.jpg"
        alt=""
      />
    </div>
  </div>

  <div class="flex flex-wrap justify-between mt-8 md:flex-nowrap">
    <div class="order-2 md:order-1">
      <p class="text-xl md:text-3xl font-medium">
        Keeping athletes at the center of everything we do
      </p>
      <p class="text-[#ccc] cursor-pointer">learn more ></p>
    </div>
    <div class="order-1 md:order-2">
      <img src="/src/assets/img/womenhappy.jpg" alt="" />
    </div>
  </div>

  <div class="flex justify-between flex-wrap md:flex-nowrap md:gap-5 mt-8">
    <div class="w-12/12 md:w-7/12">
      <img src="/src/assets/img/world-of-flight-shibuya-04.jpg" alt="" />
    </div>
    <div class="w-12/12 md:w-5/12">
      <p class="text-xl md:text-3xl font-medium">
        Our purpose is to move the world forward through the power of sport.  
      </p>
      <p class="text-[#ccc] cursor-pointer">learn more ></p>
    </div>
  </div>

  <div class="mt-12">
    <p class="text-3xl font-semibold">Read more</p>

    <div class="flex flex-wrap md:flex-nowrap gap-2 justify-between my-2">
      <div class="my-3 flex-grow flex-shrink cursor-pointer">
        <img
          src="/src/assets/img/world-of-flight-shibuya-09.jpg"
          alt=""
          class="w-full"
        />
        <p class="text-xl">
          How NIKE, Inc.’s Commitment to Progress Champions Women and Girls
        </p>
        <p class="text-[#ccc]">March 23, 2023</p>
      </div>

      <div class="my-3 flex-grow flex-shrink cursor-pointer">
        <img src="/src/assets/img/inspiration1.jpg" alt="" class="w-full" />
        <p class="text-xl">Jordan World of Flight Shibuya Opens in Tokyo</p>
        <p class="text-[#ccc]">March 22, 2023</p>
      </div>

      <div class="my-3 flex-grow flex-shrink cursor-pointer">
        <img src="/src/assets/img/inspiration2.jpg" alt="" class="w-full" />
        <p class="text-xl">Jordan World of Flight Shibuya</p>
        <p class="text-[#ccc]">March 22, 2023</p>
      </div>
    </div>
  </div>

  <thefooter />
</template>

<script setup>
import thefooter from "../components/theFooter.vue";
</script>
