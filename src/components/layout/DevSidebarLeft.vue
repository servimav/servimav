<script lang="ts" setup>
import DevFooter from '@/components/layout/DevFooter.vue';
import { useJsonData } from '@/helpers';
import { computed } from 'vue';
const { developer } = await useJsonData();

const $emit = defineEmits<{ (e: 'click-link'): void }>()
const $props = defineProps<{ avatar?: string }>();
const bgUrl = computed(() => `url('${developer.profileImg}')`);

</script>


<template>
  <aside class="left-sidebar">
    <div class="p-5 bg-gray-200 h-full">
      <!-- Author -->
      <div class="text-center">
        <div class="border border-gray-400 rounded-full 
          bg-img bg-center bg-no-repeat bg-cover
          mx-auto
          h-36 w-36"></div>

      </div>
      <!-- Author -->
      <div class="text-center mt-8">
        <h3 class="text-xl">{{`${developer.name} ${developer.lastName}`}}</h3>
        <p class="font-thin">{{developer.skill}}</p>

        <ul class="font-light mt-3 text-black">
          <li>
            <a href="#section-intro" @click="$emit('click-link')">Home</a>
          </li>
          <li>
            <a href="#section-about" @click="$emit('click-link')">About</a>
          </li>
          <li>
            <a href="#section-skills" @click="$emit('click-link')">Skills</a>
          </li>
          <li>
            <a href="#section-projects" @click="$emit('click-link')">Projects</a>
          </li>
        </ul>
      </div>

    </div>
    <dev-footer class="absolute bottom-0 w-full" />

  </aside>
</template>

<style scoped>
ul>li {
  margin-bottom: 1rem;
  cursor: pointer;
}

.bg-img {
  background-image: v-bind('bgUrl')
}
</style>