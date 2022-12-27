<script setup lang='ts'>

</script>

<template>
  <section class="p-0 m-0 h-screen relative">
    <div class="blur-md h-screen w-full bg-cover bg-center bg-black bg-no-repeat bg-[url(/img/banner.webp)]"></div>
    <div class="bg-text min-w-[98%] sm:min-w-fit text-center text-gray-200 border border-white p-1">
      <div class="p-4 border-white border  rounded-md">
        <h1 class="text-4xl">SERVIMAV S.R.L.</h1>
        <h3 class="text-xl mt-4">Servicios variados de jugar Dota</h3>
        <div class="mt-5 flex justify-center">
          <a href="#section-services" class="btn bg-gray-800">Servicios</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
}
</style>