<script lang="ts" setup>
import DevFooter from '@/components/layout/DevFooter.vue';
import { toRefs } from 'vue';


const $emit = defineEmits<{ (e: 'click-link'): void, (e: 'update:model-value', p: boolean): void }>();
const $props = defineProps<{ modelValue: boolean }>();

const { modelValue } = toRefs($props)

</script>


<template>
  <aside class="left-sidebar" :class="{'show-sidebar': modelValue}">
    <div class="p-5 bg-gray-200 h-full">

      <!-- Author -->
      <div class="text-center mt-8">

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

li:hover {
  box-shadow: gray 5 0 0 5;
}
</style>