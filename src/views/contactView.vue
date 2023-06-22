<template>
  <div class="flex flex-wrap">
    <div class="pr-4 w-full md:w-[50%] mb-6">
      <h2 class="f text-3xl">Contact Us</h2>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        veniam itaque nulla fugit aliquam ullam mollitia deleniti ab,
        consequuntur similique doloremque quod eius voluptas voluptatibus eum.
        Vitae, deserunt sed? Nihil quis natus, maxime exercitationem, dolores
        nisi quia recusandae molestias, quidem nobis distinctio aspernatur nemo
        modi deleniti dolorem soluta officia rem praesentium explicabo cumque
        ipsam culpa neque quibusdam. Laborum et, placeat repellat molestiae
        expedita, eum doloribus tenetur aliquid aut iusto consectetur mollitia
        sapiente eius obcaecati repellendus architecto, numerendis aperiam
        ipsam. Fugiat dolorum facere ipsum sint repudiandae, tenetur consequatur
        distinctio earum molestiae quod?
      </p>
    </div>
    <div class="w-full md:w-[50%]">
      <form action="" class="flex flex-col">
        <label for="" class="block">Name</label>
        <div class="flex justify-between">
          <div class="flex flex-col w-6/12 mr-2">
            <input
              type="text"
              class="bg-[#fafafa] border border-[#ccc] outline-none p-2"
            />
            <label for="">First Name</label>
          </div>
          <div class="flex flex-col w-6/12">
            <input
              type="text"
              class="bg-[#fafafa] border border-[#ccc] outline-none p-2"
            />
            <label for="">Last Name</label>
          </div>
        </div>
        <br />
        <label for="" class="block">Email</label>
        <input
          class="bg-[#fafafa] border border-[#ccc] outline-none p-2"
          type="text"
          name=""
          id=""
        />
        <br />
        <label for="" class="block">Subject</label>
        <input
          class="bg-[#fafafa] border border-[#ccc] outline-none p-2"
          type="text"
          name=""
          id=""
        />
        <br />
        <label for="" class="block">Message</label>
        <textarea
          class="bg-[#fafafa] border border-[#ccc] outline-none p-2"
          name=""
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <button
          type="submit"
          class="my-4 self-start hover:bg-[#b9b9b9] bg-[#888888] p-2 px-4 text-white font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  <thefooter />
</template>

<script setup>
import thefooter from "../components/theFooter.vue";
</script>