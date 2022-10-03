<script setup lang='ts'>
import { useJsonData } from '@/helpers';
import { computed } from 'vue';

const { site, developer } = await useJsonData();

const bgUrl = computed(() => `url('${site.introImg}')`)
</script>

<template>
  <section class="h-screen p-0 m-0">
    <!-- Slide 1 -->
    <div class="h-full bg-center bg-cover bg-no-repeat bg-intro">
      <div class="flex items-center justify-start h-full">
        <div class="animated-text p-2">
          <h2 class="text-4xl">{{developer.name}} {{developer.lastName}}</h2>
          <h3 class="text-lg mt-4 font-light">{{developer.skill}}</h3>
          <div class="mt-4 flex justify-start">
            <div class="btn">
              Button</div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Slide 1 -->

  </section>
</template>

<style scoped>
@import '../../css/animations.css';

.animated-text {
  opacity: 0;
  animation-name: opacity-transform-animation;
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards
}

.bg-intro {
  background-image: v-bind('bgUrl')
}
</style>