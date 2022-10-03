<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { whenOnViewport, isOnViewport } from '@/helpers/eventListener';
import { useJsonData } from '@/helpers';

/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const { about } = await useJsonData();
const sectionEl = ref<HTMLElement>();
const visible = ref(false);
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */

function scrollListener() {
  visible.value = isOnViewport(sectionEl.value)
}
/**
 * -----------------------------------------
 *	Lifecycle
 * -----------------------------------------
 */
onMounted(() => {
  whenOnViewport(sectionEl.value, scrollListener)
});

onBeforeUnmount(() => {
  whenOnViewport(sectionEl.value, scrollListener, true)
})

</script>

<template>
  <section ref="sectionEl">
    <div class="container px-2">
      <div class="py-2">
        <h4 class="text-center sm:text-left text-3xl">About Me</h4>
      </div>
      <div class="pt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 text-justify">
          <p :class="{'animated-text':visible}" class="opacity-0" v-for="(p, key) in about" :key="`p-about-${key}`">
            {{p}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '../../css/animations.css';

.animated-text {
  animation: opacity-transformX-animation 1s linear 0s 1 normal forwards;
}

.animated-text-reverse {
  animation: opacity-transform-x-animation 1s linear 0s 1 normal forwards;
}
</style>